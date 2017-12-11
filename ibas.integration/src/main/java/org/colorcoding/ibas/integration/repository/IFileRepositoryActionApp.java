package org.colorcoding.ibas.integration.repository;

import java.io.File;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationMessage;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.FileData;
import org.colorcoding.ibas.integration.bo.integration.Action;

public interface IFileRepositoryActionApp {

	IOperationResult<Action> registerAction(File file);

	IOperationResult<Action> fetchAction(ICriteria criteria);

	IOperationResult<FileData> fetchFile(ICriteria criteria, String token);

	IOperationMessage deletePackage(String name);
}