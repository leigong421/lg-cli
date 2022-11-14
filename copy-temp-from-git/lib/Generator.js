// lib/Generator.js
const path = require('path');
// const { getRepoList, getTagList } = require('./http');
const ora = require('ora'); //控制台 loading 样式
const inquirer = require('inquirer');

const util = require('util');
const downloadGitRepo = require('download-git-repo'); // 不支持 Promise

const chalk = require('chalk');

// 添加加载动画
async function wrapLoading(fn, message, ...args) {
  // 使用 ora 初始化，传入提示信息 message
  const spinner = ora(message);
  // 开始加载动画
  spinner.start();

  try {
    // 执行传入方法 fn
    const result = await fn(...args);
    // 状态为修改为成功
    spinner.succeed();
    return result;
  } catch (error) {
    console.log('下载失败的原因',error);
    // 状态为修改为失败
    spinner.fail('Request failed, refetch ...');
  }
}

class Generator {
  constructor(name, targetDir) {
    // 目录名称
    this.name = name;
    // 创建位置
    this.targetDir = targetDir;

    // 对 download-git-repo 进行 promise 化改造
    this.downloadGitRepo = util.promisify(downloadGitRepo);
  }

  // 下载远程模板
  // 1）拼接下载地址
  // 2）调用下载方法
  async download(repo, tag) {
    // 1）拼接下载地址
    // const requestUrl ='leigong421/muban202101';
    const requestUrl =
      'direct:https://github.com/leigong421/hb-webpack5.git';

    // 2）调用下载方法
    await wrapLoading(
      this.downloadGitRepo, // 远程下载方法
      'waiting download template', // 加载提示信息
      requestUrl, // 参数1: 下载地址
      path.resolve(process.cwd(), this.targetDir),
      { clone: true }
    ); // 参数2: 创建位置
  }

  // 核心创建逻辑
  // 1）获取模板名称
  // 2）获取 tag 名称
  // 3）下载模板到模板目录
  // 4）模板使用提示
  async create() {
    // 3）下载模板到模板目录
    await this.download();

    // 4）模板使用提示
    console.log(`\r\nSuccessfully created project ${chalk.cyan(this.name)}`);
    console.log(`\r\n  cd ${chalk.cyan(this.name)}`);
    console.log('  npm install\r\n');
    console.log('  npm run dev\r\n');
  }
}

module.exports = Generator;
