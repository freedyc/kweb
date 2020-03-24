#!/bin/bash
git checkout app
git pull
yarn install
log=`git log -1 --pretty=%s | awk '$1'`;
mark="compile"
if [ $log = $mark ]
then
yarn build
node publish.js
rm -rf ./build 
else
echo '没有提供构建参数'
fi
