#!/bin/sh
echo '****************************************************************************'
echo '             compile_packages.sh                                            '
echo '                      by niuren.zhu                                         '
echo '                           2017.12.05                                       '
echo '  说明：                                                                    '
echo '    1. 安装apache-maven，sudo apt-get install maven                         '
echo '    2. 解压apache-maven，并设置系统变量MAVEN_HOME为解压的程序目录。         '
echo '    3. 添加PATH变量到MAVEN_HOME\bin，并检查JAVE_HOME配置是否正确。          '
echo '    4. 运行提示符运行mvn -v 检查安装是否成功。                              '
echo '    5. 此脚本用于编译测试war包。                                            '
echo '****************************************************************************'
# 设置参数变量
WORK_FOLDER=`pwd`

echo --当前工作的目录是[${WORK_FOLDER}]
if [ -e ${WORK_FOLDER}/release/ ]
then
  rm -rf ${WORK_FOLDER}/release/
fi
mkdir -p ${WORK_FOLDER}/release/
if [ -e ${WORK_FOLDER}/ibas.integration.service/pom.test.xml ]
then
  mvn clean package -Dmaven.test.skip=true -f ${WORK_FOLDER}/ibas.integration.service/pom.test.xml
  if [ -e ${WORK_FOLDER}/ibas.integration.service/target/ibas.integration.test*.war ]
  then
    cp -r ${WORK_FOLDER}/ibas.integration.service/target/ibas.integration.test*.war ${WORK_FOLDER}/release
  fi
fi
