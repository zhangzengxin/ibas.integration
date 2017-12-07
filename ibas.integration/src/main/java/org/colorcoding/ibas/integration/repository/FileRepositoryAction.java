package org.colorcoding.ibas.integration.repository;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.lang.reflect.Array;
import java.util.Enumeration;
import java.util.List;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.OperationMessage;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.data.ArrayList;
import org.colorcoding.ibas.bobas.data.FileData;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;
import org.colorcoding.ibas.bobas.repository.FileRepository;
import org.colorcoding.ibas.bobas.serialization.ISerializer;
import org.colorcoding.ibas.bobas.serialization.SerializationException;
import org.colorcoding.ibas.bobas.serialization.SerializerFactory;
import org.colorcoding.ibas.bobas.util.EncryptMD5;
import org.colorcoding.ibas.integration.MyConfiguration;
import org.colorcoding.ibas.integration.bo.integration.IntegrationAction;

/**
 * 动作文件管理仓库
 * 
 * @author Niuren.Zhu
 *
 */
class FileRepositoryAction extends FileRepository {
	public static final String PACKAGE_INTEGRATION_ACTIONS_FOLDER = "integration/";
	public static final String PACKAGE_INTEGRATION_ACTIONS_FILE = "actions.json";
	public static final String TYPE_JSON_NO_ROOT = "json_no_root";

	public FileRepositoryAction() {
		String workFolder = MyConfiguration.getConfigValue(MyConfiguration.CONFIG_ITEM_INTEGRATION_ACTION_FOLDER);
		if (workFolder == null || workFolder.isEmpty()) {
			workFolder = MyConfiguration.getWorkFolder() + File.separator + "integration_actions";
		}
		File file = new File(workFolder);
		if (!file.exists()) {
			file.mkdirs();
		}
		this.setRepositoryFolder(workFolder);
	}

	public OperationResult<IntegrationAction> registerAction(File file) {
		try {
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
			String folder = EncryptMD5.md5(file.getPath());
			// 读取内容
			for (JarEntry jarEntry : jarEntryList) {
				InputStream inputStream = jarFile.getInputStream(jarEntry);
				FileData fileData = new FileData();
				fileData.setOriginalName(jarEntry.getName());
				fileData.setStream(inputStream);
				fileData.setFileName(folder + File.separator
						+ jarEntry.getName()
								.substring(jarEntry.getName().toLowerCase().indexOf(PACKAGE_INTEGRATION_ACTIONS_FOLDER)
										+ PACKAGE_INTEGRATION_ACTIONS_FOLDER.length()));
				IOperationResult<FileData> opRsltFile = this.save(fileData);
				if (opRsltFile.getError() != null) {
					throw opRsltFile.getError();
				}
			}
			jarFile.close();
			Logger.log(MessageLevel.DEBUG, "the package [%s] release [%s] files.", file.getName(), jarEntryList.size());
			// 获取注册的动作
			ICriteria criteria = new Criteria();
			ICondition condition = criteria.getConditions().create();
			condition.setAlias(CRITERIA_CONDITION_ALIAS_FOLDER);
			condition.setValue(folder);
			return this.fetchAction(criteria);
		} catch (Exception e) {
			Logger.log(e);
			return new OperationResult<>(e);
		}
	}

	public OperationResult<IntegrationAction> fetchAction(ICriteria criteria) {
		try {
			if (criteria == null) {
				criteria = new Criteria();
			}
			if (criteria.getConditions()
					.firstOrDefault(c -> c.getAlias().equals(CRITERIA_CONDITION_ALIAS_FOLDER)) == null) {
				ICondition condition = criteria.getConditions().create();
				condition.setAlias(CRITERIA_CONDITION_ALIAS_INCLUDE_SUBFOLDER);
				condition.setValue(emYesNo.YES);
			}
			if (criteria.getConditions()
					.firstOrDefault(c -> c.getAlias().equals(CRITERIA_CONDITION_ALIAS_FILE_NAME)) == null) {
				ICondition condition = criteria.getConditions().create();
				condition.setAlias(CRITERIA_CONDITION_ALIAS_FILE_NAME);
				condition.setValue(PACKAGE_INTEGRATION_ACTIONS_FILE);
			}
			IOperationResult<FileData> opRsltFile = this.fetch(criteria);
			if (opRsltFile.getError() != null) {
				throw opRsltFile.getError();
			}
			OperationResult<IntegrationAction> operationResult = new OperationResult<>();
			for (FileData item : opRsltFile.getResultObjects()) {
				operationResult.addResultObjects(this.parsing(new File(item.getLocation())));
			}
			return operationResult;
		} catch (Exception e) {
			Logger.log(e);
			return new OperationResult<>(e);
		}
	}

	protected List<IntegrationAction> parsing(File file) throws SerializationException, FileNotFoundException {
		ArrayList<IntegrationAction> actions = new ArrayList<>();
		if (!file.exists() || !file.isFile()) {
			return actions;
		}
		ISerializer<?> serializer = SerializerFactory.create().createManager().create(TYPE_JSON_NO_ROOT);
		Object values = serializer.deserialize(new FileInputStream(file), IntegrationAction.class);
		if (values != null) {
			if (values instanceof IntegrationAction) {
				actions.add((IntegrationAction) values);
			} else if (values instanceof Iterable) {
				for (Object value : (Iterable<?>) values) {
					if (value instanceof IntegrationAction) {
						actions.add((IntegrationAction) value);
					}
				}
			} else if (values.getClass().isArray()) {
				for (int i = 0; i < Array.getLength(values); i++) {
					Object value = Array.get(values, i);
					if (value instanceof IntegrationAction) {
						actions.add((IntegrationAction) value);
					}
				}
			}
		}
		// 检查动作

		Logger.log(MessageLevel.DEBUG, "the file [%s] has [%s] actions.", file.getName(), actions.size());
		return actions;
	}

	public OperationMessage deleteAction(String id) {
		try {
			return new OperationMessage();
		} catch (Exception e) {
			Logger.log(e);
			return new OperationMessage(e);
		}
	}
}
