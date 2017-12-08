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
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.data.FileData;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.repository.FileRepository;
import org.colorcoding.ibas.integration.MyConfiguration;
import org.colorcoding.ibas.integration.bo.integration.IntegrationAction;
import org.colorcoding.ibas.integration.repository.BORepositoryIntegration;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

@Path("action")
public class ActionService {

	@GET
	@Path("{action}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public byte[] download(@PathParam("action") String action, @QueryParam("token") String token,
			@Context HttpServletResponse response) {
		try {
			// 根据action查询匹配的实例
			BORepositoryIntegration boRepository = new BORepositoryIntegration();
			boRepository.setUserToken(token);
			IntegrationAction integrationAction = boRepository.fetchIntegrationAction(new Criteria()).getResultObjects()
					.firstOrDefault(c -> c.getId().equals(action));
			if (integrationAction == null) {
				throw new WebApplicationException(404);
			}
			// 获取文件流
			File file = new File(integrationAction.getLocation());
			if (!file.exists() || !file.isFile()) {
				throw new WebApplicationException(404);
			}
			long fileSize = file.length();
			if (fileSize > Integer.MAX_VALUE) {
				throw new Exception(I18N.prop("msg_bobas_invalid_data"));
			}
			FileInputStream inputStream = new FileInputStream(file);
			byte[] buffer = new byte[(int) fileSize];
			int offset = 0;
			int numRead = 0;
			while (offset < buffer.length
					&& (numRead = inputStream.read(buffer, offset, buffer.length - offset)) >= 0) {
				offset += numRead;
			}
			inputStream.close();
			response.setHeader("content-disposition", String.format("attachment;filename=%s", file.getName()));
			return buffer;
		} catch (Exception e) {
			Logger.log(e);
			throw new WebApplicationException(500);
		}
	}

	@POST
	@Path("uploadActionPackage")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces(MediaType.APPLICATION_JSON)
	public OperationResult<IntegrationAction> uploadActionPackage(@FormDataParam("file") InputStream fileStream,
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
			File file = new File(fileData.getLocation());
			BORepositoryIntegration boRepository = new BORepositoryIntegration();
			return boRepository.registerIntegrationAction(file, token);
		} catch (Exception e) {
			return new OperationResult<>(e);
		}
	}
}
