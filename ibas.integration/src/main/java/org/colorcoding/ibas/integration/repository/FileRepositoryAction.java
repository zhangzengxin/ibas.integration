package org.colorcoding.ibas.integration.repository;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.lang.reflect.Array;
import java.util.Enumeration;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationMessage;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.OperationMessage;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.data.ArrayList;
import org.colorcoding.ibas.bobas.data.FileData;
import org.colorcoding.ibas.bobas.data.List;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;
import org.colorcoding.ibas.bobas.repository.FileRepository;
import org.colorcoding.ibas.bobas.repository.jersey.FileRepositoryService;
import org.colorcoding.ibas.bobas.serialization.ISerializer;
import org.colorcoding.ibas.bobas.serialization.SerializationException;
import org.colorcoding.ibas.bobas.serialization.SerializerFactory;
import org.colorcoding.ibas.bobas.util.EncryptMD5;
import org.colorcoding.ibas.integration.MyConfiguration;
import org.colorcoding.ibas.integration.bo.integration.Action;

/**
 * 动作文件管理仓库
 * 
 * @author Niuren.Zhu
 *
 */
public class FileRepositoryAction extends FileRepositoryService
		implements IFileRepositoryActionApp, IFileRepositoryActionSvc {
	public static final String PACKAGE_INTEGRATION_ACTIONS_FOLDER = "integration/";
	public static final String PACKAGE_INTEGRATION_ACTIONS_FILE = "actions.json";
	public static final String TYPE_JSON_NO_ROOT = "json_no_root";
	public static final String CRITERIA_CONDITION_ALIAS_FOLDER = FileRepository.CRITERIA_CONDITION_ALIAS_FOLDER;
	public static final String CRITERIA_CONDITION_ALIAS_INCLUDE_SUBFOLDER = FileRepository.CRITERIA_CONDITION_ALIAS_INCLUDE_SUBFOLDER;
	public static final String CRITERIA_CONDITION_ALIAS_FILE_NAME = FileRepository.CRITERIA_CONDITION_ALIAS_FILE_NAME;

	public FileRepositoryAction() {
		String workFolder = MyConfiguration.getConfigValue(MyConfiguration.CONFIG_ITEM_INTEGRATION_ACTION_FOLDER);
		if (workFolder == null || workFolder.isEmpty()) {
			workFolder = MyConfiguration.getDataFolder() + File.separator + "integration_actions";
		}
		File file = new File(workFolder);
		if (!file.exists()) {
			file.mkdirs();
		}
		this.getRepository().setRepositoryFolder(workFolder);
	}

	@Override
	public IOperationResult<Action> registerAction(File file) {
		return this.registerAction(file, this.getCurrentUser().getToken());
	}

	@Override
	public IOperationResult<Action> fetchAction(ICriteria criteria) {
		return this.fetchAction(criteria, this.getCurrentUser().getToken());
	}

	@Override
	public IOperationMessage deletePackage(String name) {
		return this.deletePackage(name, this.getCurrentUser().getToken());
	}

	@Override
	public OperationResult<Action> registerAction(File file, String token) {
		try {
			this.setCurrentUser(token);
			Logger.log(MessageLevel.DEBUG, "the package [%s] begins to be registered.", file.getName());
			ArrayList<JarEntry> jarEntryList = new ArrayList<>();
			JarFile jarFile = new JarFile(file);
			Enumeration<JarEntry> jarEntries = jarFile.entries();
			if (jarEntries != null) {
				// 获取集成目录下所有文件
				while (jarEntries.hasMoreElements()) {
					JarEntry jarEntry = (JarEntry) jarEntries.nextElement();
					if (jarEntry.isDirectory()) {
						continue;
					}
					if (!jarEntry.getName().startsWith(PACKAGE_INTEGRATION_ACTIONS_FOLDER)
							&& jarEntry.getName().indexOf("/" + PACKAGE_INTEGRATION_ACTIONS_FOLDER) < 0) {
						continue;
					}
					jarEntryList.add(jarEntry);
				}
			}
			File folder = new File(
					this.getRepository().getRepositoryFolder() + File.separator + EncryptMD5.md5(file.getPath()));
			// 读取内容
			for (JarEntry jarEntry : jarEntryList) {
				InputStream inputStream = jarFile.getInputStream(jarEntry);
				FileData fileData = new FileData();
				fileData.setOriginalName(jarEntry.getName());
				fileData.setStream(inputStream);
				fileData.setFileName(folder.getName() + File.separator
						+ jarEntry.getName()
								.substring(jarEntry.getName().toLowerCase().indexOf(PACKAGE_INTEGRATION_ACTIONS_FOLDER)
										+ PACKAGE_INTEGRATION_ACTIONS_FOLDER.length()));
				IOperationResult<FileData> opRsltFile = this.getRepository().save(fileData);
				inputStream.close();
				if (opRsltFile.getError() != null) {
					// 发生错误，清理已释放文件
					this.deleteFiles(folder);
					jarFile.close();
					throw opRsltFile.getError();
				}
			}
			jarFile.close();
			Logger.log(MessageLevel.DEBUG, "the package [%s] release [%s] files.", file.getName(), jarEntryList.size());
			// 获取注册的动作
			ICriteria criteria = new Criteria();
			ICondition condition = criteria.getConditions().create();
			condition.setAlias(FileRepository.CRITERIA_CONDITION_ALIAS_FOLDER);
			condition.setValue(folder.getName());
			OperationResult<Action> operationResult = this.fetchAction(criteria, token);
			if (operationResult.getError() != null) {
				// 发生错误，清理已释放文件
				Logger.log(operationResult.getError());
				this.deleteFiles(folder);
			}
			if (operationResult.getResultObjects().isEmpty()) {
				// 未找到动作，清理已释放文件
				this.deleteFiles(folder);
			}
			return operationResult;
		} catch (Exception e) {
			Logger.log(e);
			return new OperationResult<>(e);
		}
	}

	@Override
	public OperationResult<Action> fetchAction(ICriteria criteria, String token) {
		try {
			this.setCurrentUser(token);
			if (criteria == null) {
				criteria = new Criteria();
			}
			if (criteria.getConditions()
					.firstOrDefault(c -> c.getAlias().equals(FileRepository.CRITERIA_CONDITION_ALIAS_FOLDER)) == null) {
				ICondition condition = criteria.getConditions().create();
				condition.setAlias(FileRepository.CRITERIA_CONDITION_ALIAS_INCLUDE_SUBFOLDER);
				condition.setValue(emYesNo.YES);
			}
			if (criteria.getConditions().firstOrDefault(
					c -> c.getAlias().equals(FileRepository.CRITERIA_CONDITION_ALIAS_FILE_NAME)) == null) {
				ICondition condition = criteria.getConditions().create();
				condition.setAlias(FileRepository.CRITERIA_CONDITION_ALIAS_FILE_NAME);
				condition.setValue(PACKAGE_INTEGRATION_ACTIONS_FILE);
			}
			IOperationResult<FileData> opRsltFile = this.fetch(criteria, token);
			if (opRsltFile.getError() != null) {
				throw opRsltFile.getError();
			}
			OperationResult<Action> operationResult = new OperationResult<>();
			for (FileData item : opRsltFile.getResultObjects()) {
				operationResult.addResultObjects(this.parsing(new File(item.getLocation())));
			}
			return operationResult;
		} catch (Exception e) {
			Logger.log(e);
			return new OperationResult<>(e);
		}
	}

	@Override
	public OperationMessage deletePackage(String name, String token) {
		try {
			this.setCurrentUser(token);
			File folder = new File(this.getRepository().getRepositoryFolder() + File.separator + name);
			this.deleteFiles(folder);
			Logger.log(MessageLevel.DEBUG, "the action group [%s] was deleted.", name);
			return new OperationMessage();
		} catch (Exception e) {
			Logger.log(e);
			return new OperationMessage(e);
		}
	}

	@Override
	public OperationResult<FileData> fetchFile(ICriteria criteria, String token) {
		try {
			this.setCurrentUser(token);
			return (OperationResult<FileData>) this.fetch(criteria, token);
		} catch (Exception e) {
			Logger.log(e);
			return new OperationResult<>(e);
		}
	}

	private List<Action> parsing(File file) throws SerializationException, FileNotFoundException {
		ArrayList<Action> actions = new ArrayList<>();
		if (!file.exists() || !file.isFile()) {
			return actions;
		}
		String group = file.getParentFile().getName();
		ISerializer<?> serializer = SerializerFactory.create().createManager().create(TYPE_JSON_NO_ROOT);
		Object values = serializer.deserialize(new FileInputStream(file), Action.class);
		if (values != null) {
			if (values instanceof Action) {
				actions.add((Action) values);
			} else if (values instanceof Iterable) {
				for (Object value : (Iterable<?>) values) {
					if (value instanceof Action) {
						actions.add((Action) value);
					}
				}
			} else if (values.getClass().isArray()) {
				for (int i = 0; i < Array.getLength(values); i++) {
					Object value = Array.get(values, i);
					if (value instanceof Action) {
						actions.add((Action) value);
					}
				}
			}
		}
		// 检查动作
		for (Action action : actions) {
			if (!action.isActivated()) {
				continue;
			}
			// 设置包名
			action.setGroup(group);
			// 检查id
			if (action.getId() == null || action.getId().isEmpty()) {
				action.setId(EncryptMD5.md5(group, action.getName()));
			}
			// 检查路径
			String path = action.getPath();
			if (path == null || path.isEmpty()) {
				Logger.log(MessageLevel.DEBUG, "action [%s] no path.", action.getName());
				action.setActivated(false);
			}
			path = path.replace(".ts", ".js");
			if (path.startsWith("./")) {
				path = path.substring(2);
			}
			path = path.replace("/", File.separator);
			File pathFile = new File(file.getParentFile().getPath() + File.separator + path);
			if (!pathFile.isFile() || !pathFile.exists()) {
				Logger.log(MessageLevel.DEBUG, "action [%s] path file not exists.", action.getName());
				action.setActivated(false);
			} else {
				// 设置绝对路径
				action.setLocation(pathFile.getAbsolutePath());
			}
		}
		// 删除无效的
		actions.removeIf(c -> !c.isActivated());
		Logger.log(MessageLevel.DEBUG, "the file [%s] has [%s] actions.", file.getName(), actions.size());
		return actions;
	}

	private void deleteFiles(File file) {
		if (!file.exists()) {
			return;
		}
		if (file.isFile()) {
			file.delete();
		} else if (file.isDirectory()) {
			for (File item : file.listFiles()) {
				this.deleteFiles(item);
			}
			file.delete();
		}
	}
}
