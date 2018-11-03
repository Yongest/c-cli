#!/usr/bin/env node
/** * * Created by Andy on 2018/11/3,email:1046788379@qq.com。*/
const program = require('commander');
const download = require('download-git-repo')

program
    .version('0.1.0')

//c init a 'a-name  //基于a模板进行初始化。

const templates = {
    'tpl-a':{
        url:'https://github.com/lipengzhou/tpl-a',
        downloadUrl:'https://github.com:lipengzhou/tpl-a#master',
        description:'a模板'
    },
    'tpl-b':{
        url:'https://github.com/lipengzhou/tpl-b',
        downloadUrl:'https://github.com:lipengzhou/tpl-b#master',
        description:'b模板'
    }
}
program
    .command('init <template> <project>')
    .description('初始化项目模板')
    .action(function (templateName,projectName) {
        //根据模板名下载对应的模板到本地
      const { downloadUrl } = templates[templateName]
        download(downloadUrl,projectName,{clone:true},function (err) {
            if(err){
                console.log('下载失败');
            }else {
                console.log('下载成功');
            }
        })
    })
program
    .command('list')
    .description('查看所有可用模板')
    .action(function () {
       for (key in templates){
           console.log(`
                ${key}  ${templates[key].description}
           `)
       }
    })
    


program.parse(process.argv);
//原生获取命令行参数的方式n
// console.log(process.argv);