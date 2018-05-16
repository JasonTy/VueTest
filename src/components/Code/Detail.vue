<template>
  <div style="width: 600px;min-height: 300px;margin: 60px auto 40px auto;">
      <div v-html="compiledMarkdown" style="text-align: left"></div>
  </div>
</template>
<script>
/* eslint-disable */
  const dataBlog = {
  '20180515': `
# Mac 环境下上传本地项目到gitHub

1.默认你本地已经安装git，同时你也注册了github账号

2.因为本地git仓库和github仓库之间的传输是通过ssh加密的，所以首先要获取本地的公钥

3.检查本地是否存在.ssh 文件，该文件下存在id\_rsa（私钥） 和 id\_rsa.pub（公钥）

4.如果没有，首先在终端创建mkdir .ssh，然后进入cd .ssh , 在该文件里生成公钥，输入ssh-Keygen -t rasa -C “your\_email@example.com”回车，

 输入ls -la 查看是否存在id\_rsa（私钥） 和 id\_rsa.pub（公钥）

5.拷贝公钥，pbcopy \< ~/.ssh/id\_rsa.pub

6.登录gitHub，Account Setting —\> SSH Keys 添加ssh，title 为你项目所在目录

 Key：将你刚复制的key填写此处

7.密钥左边的点最开始是灰色的，输入ssh -T git@github.com，刚开始的网页刷新之后会变成绿色。

8.在git创建个人项目，这时在本地终端输入ssh -T git@github.com 如果出现如下提示，表示你已经连上

 Hi MiracleHe! You've successfully authenticated, but GitHub does not provide shell access.

9.根据如下步骤来

   &nbsp;&nbsp;(1)\.进入本地项目根目录，输入touch README.md 创建一个记录提交操作的文档

   &nbsp;&nbsp;(2)\. git init 初始化本地仓库

   &nbsp;&nbsp;(3)\. git add README.md 添加

   &nbsp;&nbsp;(4)\. git add \* 加入所有项目

   &nbsp;&nbsp;(5)\. git status 检查状态，如果都是绿的，证明成功

   &nbsp;&nbsp;(6)\. git commit -m “first commit” 提交到远程仓库，并写下注释

   &nbsp;&nbsp;(7)\. git remote add origin git@github.com:youname/Test.git 链接远程仓库并创建一个名叫 origin 的别名

   &nbsp;&nbsp;(8)\. git push -u origin master 将本地仓库的东西提交到地址是origin的地址，master分支下
    `,
  '20180512': `
# 服务器安装jenkins

这里以CentOS 7为背景

1.下载依赖

 sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo

2.导入秘钥

 sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key

3.安装jenkins

 yum install jenkins

 jenkins 安装目录示意：

 jenkins相关目录释义：

 （1）/usr/lib/jenkins/：jenkins安装目录，war包会放在这里。
  (2) /etc/sysconfig/jenkins：jenkins配置文件，“端口”，“JENKINS\_HOME”等都可以在这里配置。
 （3）/var/lib/jenkins/：默认的JENKINS\_HOME。
 （4）/var/log/jenkins/jenkins.log：jenkins日志文件。

4.输入java 检查是否已安装jdk

 如果没有安装jdk，怎么办～～～

 这里介绍一下，如何在服务端安装jdk

 第一步：下载jdk包，输入一下地址<http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html>

 第二步：输入以下命令 scp -r 包名 root@xx.xx.xx.xx:/usr/local 将下载好的jdk包，上传至服务器/usr/local 目录下

 第三步：输入以下命令 tar -xvf jdk-8u171-linux-x64.tar.gz 解压压缩包

 第四步：编辑/etc/profile, 在export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE HISTCONTROL下面添加如下代码

 \#jdk

 export JAVA\_HOME=/usr/local/jdk1.8.0\_171

 export PATH=$JAVA\_HOME/bin:$PATH

 export CLASSPATH=.:$JAVA\_HOME/lib/dt.jar:$JAVA\_HOME/lib/tools.jar

 第五步：执行命令source /etc/profile 使配置生效

 第六步：验证是否安装成功 输入java

 最后，告诉大家如何检查系统安装的jdk，输入以下命令：rpm -qa | grep -E '^open[jre|jdk]|j[re|dk]’

5.启动jenkins

 java -jar /usr/lib/jenkins/jenkins.war --httpPort=8080

 查看端口占用情况，可指定jenkins运行端口

 netstat -ntlp

 更改端口

 java -jar /usr/lib/jenkins/jenkins.war --ajp13Port=-1 --httpPort=8899

 启动

 java -jar /usr/lib/jenkins/jenkins.war --httpPort=8899

6.用守护进程启动jenkins之supervisor，详细配置见下

 <https://blog.csdn.net/alittleyatou/article/details/78929775>

 [https://blog.csdn.net/qq\_27754983/article/details/78782866](https://blog.csdn.net/qq_27754983/article/details/78782866)
    `
}
  export default {
    name: 'context',
    props: ['contents'],
    computed: {
      compiledMarkdown: function () {
        return marked(this.message, { sanitize: true })
      }
    },
    data () {
      return  {
        message: dataBlog[this.$route.params.id]
      }
    },
    mounted() {
      if (document.getElementsByClassName('1_link') && document.getElementsByClassName('1_link')[0]) {
        document.getElementsByClassName('1_link')[0].className = 'active'
      }
    }
  }
</script>


