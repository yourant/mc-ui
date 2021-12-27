const shell = require('shelljs')
const inquirer = require('inquirer')
const chalk = require('chalk')
const ProgressBar = require('progress')
const bar = new ProgressBar('进度 [:bar] :percent :etas', { total: 7 })
const versionCompare = require('version-compare').default
const fs = require('fs').promises
const path = require('path')

/**
 * 发包到私库
 */
function publishToPrivateNpm () {
  return new Promise((resolve, reject) => {
    shell.cd('./')
    const userName = 'bnpm'
    const password = '123456'
    const email = 'bnpm@blushmark.com'
    const registry = 'https://bl-nexus.digi800.com/repository/bnpm-hosted/'
    const inputArray = [
      userName + '\n',
      password + '\n',
      email + '\n'
    ]
    const child = shell.exec(`cnpm adduser -registry ${registry}`, { async: true })

    child.stdout.on('data', (chunk) => {
      const cmd = inputArray.shift()
      if (cmd) {
        shell.echo('input ' + cmd)
        child.stdin.write(cmd)
      } else {
        child.stdin.end()
        bar.tick()
        shell.exec('cnpm publish')
        shell.cd('..')
        shell.echo('发布私库成功！\n')
        resolve()
      }
    })
    child.stderr.on('data', (error) => {
      console.log(chalk.red(error))
      reject(error)
    })
  })
}

/**
 * 发布主脚本
 */
async function publish () {
  try {
    // 查看本地工作目录是否干净
    diffLocal()
    await setVersion()
    bar.tick()
    const { message } = await inquirer.prompt([{
      name: 'message',
      message: '版本发布说明',
      type: 'input',
      default: ''
    }])
    build(message || '@mc/ui功能发布')
    bar.tick()
    // 发到私库
    await publishToPrivateNpm()
    bar.tick()
    // 推到标签到git仓库
    shell.exec(`git push origin v${require('../package.json').version}`)
    bar.tick()
    shell.exit(1)
  } catch (error) {
    shell.echo('error =>' + error)
    shell.exit(1)
  }
}

function build (message) {
  // 外层版本&内层版本都要增加一个小版本
  shell.exec('npm version patch')
  shell.cd('packages')
  // 增加一个小版本
  shell.exec('npm version patch')
  shell.cd('..')
  bar.tick()
  shell.exec('npm run buildcomp')
  shell.exec('git add .')
  shell.exec(`git commit -m '${message}'`)
  bar.tick()
  shell.exec('git push')
  shell.echo('===> 打包成功!')
}

/**
 * 对比本地文件是否有变更
 */
function diffLocal () {
  const child = shell.exec('git status')
  /*
  Your branch is up to date with 'origin/master'.

  nothing to commit, working tree clean
  */
  if (!/nothing to commit, working tree clean/g.test(child.stdout) || /publish your local commits/g.test(child.stdout)) {
    shell.echo('请先将本地变更提交到仓库!')
    shell.exit(1)
  }
  if (!/origin\/master/g.test(child.stdout)) {
    shell.echo('只允许在master分支上进行发布，请合并到master分支!')
    shell.exit(1)
  }
  // 文件已经全部提交到仓库了
}

/**
 * 版本同步
 */
async function setVersion () {
  const outPackage = require('../package.json')
  const innerPackage = require('../packages/package.json')
  if (outPackage.version !== innerPackage.version) {
    // 如果两者版本不一致，则通过脚本强制设置成一致的版本，为了保证打包产物跟本仓库的tag版本同步
    const maxVersion = [outPackage.version, innerPackage.version].sort(versionCompare)[1]
    if (maxVersion === outPackage.version) {
      // 修改packages里的版本
      innerPackage.version = maxVersion
      console.log(chalk.green(`packages/package.json的版本号已同步为: v${maxVersion}`))
      await fs.writeFile(path.resolve(__dirname, '../packages/package.json'), JSON.stringify(innerPackage, ' ', 2))
    } else {
      // 修改外部版本
      outPackage.version = maxVersion
      console.log(chalk.green(`package.json的版本号已同步为: v${maxVersion}`))
      await fs.writeFile(path.resolve(__dirname, '../package.json'), JSON.stringify(outPackage, ' ', 2))
    }
  }
}

publish()
