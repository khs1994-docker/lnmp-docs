(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{354:function(s,a,t){s.exports=t.p+"assets/img/docker-swarm-three.95aab2a8.png"},442:function(s,a,t){"use strict";t.r(a);var e=t(42),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker-swarm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm"}},[s._v("#")]),s._v(" Docker Swarm")]),s._v(" "),e("p",[e("strong",[e("a",{attrs:{href:"../kubernetes"}},[s._v("在生产环境请尽可能使用 "),e("code",[s._v("kubernetes")])])])]),s._v(" "),e("p",[s._v("这里以三节点 "),e("code",[s._v("Swarm 集群")]),s._v(" 为例。")]),s._v(" "),e("h1",{attrs:{id:"开发环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[s._v("#")]),s._v(" 开发环境")]),s._v(" "),e("p",[e("strong",[s._v("1.")]),s._v(" 要想在生产环境部署，当然先得在开发环境制作好镜像")]),s._v(" "),e("p",[e("strong",[s._v("2.")]),s._v(" 编写 "),e("code",[s._v("PHP")]),s._v(" 项目源代码（项目中可以必须包含 "),e("code",[s._v("Dockerfile")]),s._v("）及 "),e("code",[s._v("nginx")]),s._v(" 配置文件(可选)")]),s._v(" "),e("p",[e("strong",[s._v("3.")]),s._v(" 本地测试")]),s._v(" "),e("p",[e("strong",[s._v("4.")]),s._v(" 将 "),e("code",[s._v("PHP")]),s._v(" 项目源代码推送到 GitHub， CI/CD 构建 "),e("code",[s._v("php")]),s._v(" + "),e("code",[s._v("nginx")]),s._v(" 镜像")]),s._v(" "),e("p",[e("strong",[s._v("5.")]),s._v(" 编写生产环境 "),e("code",[s._v("nginx")]),s._v(" 配置文件，并推送到 GitHub，CI/CD 调用 Swarm mode 或 k8s API 完成密钥更新")]),s._v(" "),e("p",[e("strong",[s._v("6.")]),s._v(" 服务器拉取镜像，服务更新完成（CI/CD 自动部署）")]),s._v(" "),e("p",[s._v("这样生产环境需要的 Docker 镜像就准备好了。")]),s._v(" "),e("h2",{attrs:{id:"本地测试构建镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地测试构建镜像"}},[s._v("#")]),s._v(" 本地测试构建镜像")]),s._v(" "),e("p",[s._v("以下为本地测试镜像步骤。")]),s._v(" "),e("p",[s._v("执行以下命令构建镜像并运行。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker-compose -f docker-production.yml build "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SERVICE_NAME"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n$ docker-compose -f docker-production.yml push SERVICE_NAME\n")])])]),e("h1",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),e("p",[e("code",[s._v("docker-compose")]),s._v(" 与 "),e("code",[s._v("Swarm")]),s._v(" 启动的容器相互冲突，请清除之后再使用另一种方式。")]),s._v(" "),e("blockquote",[e("p",[s._v("网络名称不同也可以，这里为了方便直接清除！")])]),s._v(" "),e("p",[s._v("首先停止使用 "),e("code",[s._v("docker-compose")]),s._v(" 启动的容器并移除网络")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker-compose down\n\n$ docker network prune\n")])])]),e("h1",{attrs:{id:"初始化集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化集群"}},[s._v("#")]),s._v(" 初始化集群")]),s._v(" "),e("p",[s._v("如果您已经有了一个集群，请跳过此步。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker swarm init\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用如下命令，按照提示在其他节点执行命令以加入集群")]),s._v("\n\n$ docker swarm join-token worker\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或加入管理节点")]),s._v("\n\n$ docker swarm join-token manager\n")])])]),e("h1",{attrs:{id:"部署服务栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署服务栈"}},[s._v("#")]),s._v(" 部署服务栈")]),s._v(" "),e("p",[s._v("多个互相关联的服务组成 "),e("code",[s._v("服务栈")]),s._v("，在项目根目录执行")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker stack deploy -c docker-production.yml lnmp\n")])])]),e("h2",{attrs:{id:"查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看"}},[s._v("#")]),s._v(" 查看")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker stack "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 服务栈 详情")]),s._v("\n\n$ docker stack "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" lnmp\n\n$ docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看具体的某个 服务（多个任务「容器」组成一个服务）")]),s._v("\n\n$ docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" lnmp_mysql\n")])])]),e("h1",{attrs:{id:"浏览器图形化展示节点状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器图形化展示节点状态"}},[s._v("#")]),s._v(" 浏览器图形化展示节点状态")]),s._v(" "),e("p",[s._v("浏览器打开 "),e("code",[s._v("ip:8080")])]),s._v(" "),e("p",[e("img",{attrs:{src:t(354),alt:""}})]),s._v(" "),e("h2",{attrs:{id:"移除服务栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移除服务栈"}},[s._v("#")]),s._v(" 移除服务栈")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker stack "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" lnmp\n")])])]),e("h1",{attrs:{id:"服务更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务更新"}},[s._v("#")]),s._v(" 服务更新")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker config create nginx_khs1994_com_conf_v2 config/nginx/khs1994.com.conf\n\n$ docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" update "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --config-rm nginx_khs1994_com_conf "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --config-add "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("source")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx_khs1994_com_conf_v2,target"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/nginx/conf.d/khs1994.com.conf "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    lnmp_nginx\n\n$ docker secret create khs1994_com_ssl_crt_v2 config/nginx/ssl/khs1994.com.crt\n\n$ docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" update "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --secret-rm khs1994_com_ssl_crt "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --secret-add "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("source")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("khs1994_com_ssl_crt_v2,target"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/nginx/conf.d/ssl/khs1994.com.crt "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    lnmp_nginx\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);