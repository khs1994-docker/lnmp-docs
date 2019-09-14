(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(t,e,s){t.exports=s.p+"assets/img/docker-swarm-three.95aab2a8.png"},231:function(t,e,s){"use strict";s.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"docker-swarm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker Swarm")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[e("a",{attrs:{href:"../kubernetes"}},[this._v("在生产环境请尽可能使用 "),e("code",[this._v("kubernetes")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这里以三节点 "),e("code",[this._v("Swarm 集群")]),this._v(" 为例。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"开发环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 开发环境")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("1.")]),this._v(" 要想在生产环境部署，当然先得在开发环境制作好镜像")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",[t._v("2.")]),t._v(" 编写 "),s("code",[t._v("PHP")]),t._v(" 项目源代码（项目中可以必须包含 "),s("code",[t._v("Dockerfile")]),t._v("）及 "),s("code",[t._v("nginx")]),t._v(" 配置文件(可选)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("3.")]),this._v(" 本地测试")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",[t._v("4.")]),t._v(" 将 "),s("code",[t._v("PHP")]),t._v(" 项目源代码推送到 GitHub， CI/CD 构建 "),s("code",[t._v("php")]),t._v(" + "),s("code",[t._v("nginx")]),t._v(" 镜像")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("5.")]),this._v(" 编写生产环境 "),e("code",[this._v("nginx")]),this._v(" 配置文件，并推送到 GitHub，CI/CD 调用 Swarm mode 或 k8s API 完成密钥更新")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("6.")]),this._v(" 服务器拉取镜像，服务更新完成（CI/CD 自动部署）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"本地测试构建镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地测试构建镜像","aria-hidden":"true"}},[this._v("#")]),this._v(" 本地测试构建镜像")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ docker-compose -f docker-production.yml build "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("SERVICE_NAME"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n\n$ docker-compose -f docker-production.yml push SERVICE_NAME\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[this._v("#")]),this._v(" 准备")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("docker-compose")]),this._v(" 与 "),e("code",[this._v("Swarm")]),this._v(" 启动的容器相互冲突，请清除之后再使用另一种方式。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("网络名称不同也可以，这里为了方便直接清除！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("首先停止使用 "),e("code",[this._v("docker-compose")]),this._v(" 启动的容器并移除网络")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ docker-compose down\n\n$ docker network prune\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"初始化集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化集群","aria-hidden":"true"}},[this._v("#")]),this._v(" 初始化集群")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ docker swarm init\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 使用如下命令，按照提示在其他节点执行命令以加入集群")]),this._v("\n\n$ docker swarm join-token worker\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 或加入管理节点")]),this._v("\n\n$ docker swarm join-token manager\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"部署服务栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署服务栈","aria-hidden":"true"}},[this._v("#")]),this._v(" 部署服务栈")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("多个互相关联的服务组成 "),e("code",[this._v("服务栈")]),this._v("，在项目根目录执行")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ docker stack deploy -c docker-production.yml lnmp\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看","aria-hidden":"true"}},[this._v("#")]),this._v(" 查看")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ docker stack "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 服务栈 详情")]),t._v("\n\n$ docker stack "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" lnmp\n\n$ docker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看具体的某个 服务（多个任务「容器」组成一个服务）")]),t._v("\n\n$ docker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" lnmp_mysql\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"浏览器图形化展示节点状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器图形化展示节点状态","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器图形化展示节点状态")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("浏览器打开 "),e("code",[this._v("ip:8080")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(167),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"移除服务栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移除服务栈","aria-hidden":"true"}},[this._v("#")]),this._v(" 移除服务栈")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ docker stack "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("rm")]),this._v(" lnmp\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"服务更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务更新","aria-hidden":"true"}},[this._v("#")]),this._v(" 服务更新")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ docker config create nginx_khs1994_com_conf_v2 config/nginx/khs1994.com.conf\n\n$ docker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" update \\\n    --config-rm nginx_khs1994_com_conf \\\n    --config-add source"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx_khs1994_com_conf_v2,target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/nginx/conf.d/khs1994.com.conf \\\n    lnmp_nginx\n\n$ docker secret create khs1994_com_ssl_crt_v2 config/nginx/ssl/khs1994.com.crt\n\n$ docker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" update \\\n    --secret-rm khs1994_com_ssl_crt \\\n    --secret-add source"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("khs1994_com_ssl_crt_v2,target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/nginx/conf.d/ssl/khs1994.com.crt \\\n    lnmp_nginx\n")])])])}],n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/redirect.php?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("这样生产环境需要的 Docker 镜像就准备好了。")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("以下为本地测试镜像步骤。")]),t._v(" "),s("p",[t._v("执行以下命令构建镜像并运行。")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),s("p",[t._v("如果您已经有了一个集群，请跳过此步。")]),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30)])},r,!1,null,null,null);e.default=a.exports}}]);