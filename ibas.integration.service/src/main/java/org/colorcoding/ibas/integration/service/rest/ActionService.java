package org.colorcoding.ibas.integration.service.rest;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.OperationMessage;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.data.FileData;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.repository.FileRepository;
import org.colorcoding.ibas.integration.MyConfiguration;
import org.colorcoding.ibas.integration.bo.integration.Action;
import org.colorcoding.ibas.integration.repository.FileRepositoryAction;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

@Path("action")
public class ActionService extends FileRepositoryAction {

	@GET
	@Path("{group}/{file}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public byte[] download(@PathParam("group") String group, @PathParam("file") String file,
			@QueryParam("token") String token, @Context HttpServletResponse response) {
		try {
			ICriteria criteria = new Criteria();
			ICondition condition = criteria.getConditions().create();
			condition.setAlias(FileRepositoryAction.CRITERIA_CONDITION_ALIAS_FOLDER);
			condition.setValue(group);
			condition = criteria.getConditions().create();
			condition.setAlias(FileRepositoryAction.CRITERIA_CONDITION_ALIAS_INCLUDE_SUBFOLDER);
			condition.setValue(emYesNo.YES);
			IOperationResult<FileData> operationResult = this.fetchFile(criteria, token);
			for (FileData item : operationResult.getResultObjects()) {
				String location = item.getLocation().substring(item.getLocation().indexOf(group) + group.length() + 1);
				if (location.equalsIgnoreCase(file)) {
					// 获取文件流
					File ioFile = new File(item.getLocation());
					if (!ioFile.exists() || !ioFile.isFile()) {
						throw new WebApplicationException(404);
					}
					long fileSize = ioFile.length();
					if (fileSize > Integer.MAX_VALUE) {
						throw new Exception(I18N.prop("msg_bobas_invalid_data"));
					}
					FileInputStream inputStream = new FileInputStream(ioFile);
					byte[] buffer = new byte[(int) fileSize];
					int offset = 0;
					int numRead = 0;
					while (offset < buffer.length
							&& (numRead = inputStream.read(buffer, offset, buffer.length - offset)) >= 0) {
						offset += numRead;
					}
					inputStream.close();
					response.setHeader("content-disposition",
							String.format("attachment;filename=%s", ioFile.getName()));
					return buffer;
				}
			}
			throw new WebApplicationException(404);
		} catch (Exception e) {
			Logger.log(e);
			throw new WebApplicationException(500);
		}
	}

	@POST
	@Path("uploadPackage")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces(MediaType.APPLICATION_JSON)
	public OperationResult<Action> uploadPackage(@FormDataParam("file") InputStream fileStream,
			@FormDataParam("file") FormDataContentDisposition fileDisposition, @QueryParam("token") String token) {
		try {
			FileData fileData = new FileData();
			fileData.setOriginalName(fileDisposition.getFileName());
			fileData.setStream(fileStream);
			FileRepository fileRepository = new FileRepository();
			fileRepository.setRepositoryFolder(MyConfiguration.getTempFolder());
			IOperationResult<FileData> opRsltFile = fileRepository.save(fileData);
			if (opRsltFile.getError() != null) {
				throw opRsltFile.getError();
			}
			fileData = opRsltFile.getResultObjects().firstOrDefault();
			if (fileData == null) {
				throw new Exception(I18N.prop("msg_ig_package_parsing_failure"));
			}
			return this.registerAction(new File(fileData.getLocation()), token);
		} catch (Exception e) {
			return new OperationResult<>(e);
		}
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-集成动作
	 * 
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchAction")
	public OperationResult<Action> fetchAction(Criteria criteria, @QueryParam("token") String token) {
		return super.fetchAction(criteria, token);
	}

	/**
	 * 删除集成动作组
	 * 
	 * @param id
	 *            动作标记
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("deletePackage")
	public OperationMessage deletePackage(@QueryParam("group") String group, @QueryParam("token") String token) {
		return super.deletePackage(group, token);
	}
}
