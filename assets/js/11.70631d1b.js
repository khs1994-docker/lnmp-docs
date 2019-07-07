(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{177:function(t,e,s){"use strict";s.r(e);var i=s(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/redirect.php?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("请查看 "),s("router-link",{attrs:{to:"./init.html"}},[t._v("项目初始化过程")]),t._v("。")],1),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"命令行工具简要说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行工具简要说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 命令行工具简要说明")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("为避免输入过多的命令，本项目提供了 "),e("strong",[this._v("命令行")]),this._v(" 工具来简化操作：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("各种场景和架构中一键启动")])]),this._v(" "),e("li",[e("p",[this._v("便捷生成 "),e("code",[this._v("NGINX")]),this._v(" "),e("code",[this._v("APACHE")]),this._v(" 配置文件")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"尽量兼容原始命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#尽量兼容原始命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 尽量兼容原始命令")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("例如 "),e("code",[this._v("lnmp-docker up | down")]),this._v(" 对应着 "),e("code",[this._v("docker-compose up | down")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("lnmp-k8s create | delete")]),this._v(" 对应着 "),e("code",[this._v("kubectl create | delete")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"自定义-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义 CLI")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("可以在 "),e("code",[this._v("lnmp-custom-script")]),this._v(" 或 "),e("code",[this._v("lnmp-custom-script.ps1")]),this._v(" (Windows) 中编写自定义脚本。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果你需要在执行 "),e("code",[this._v("lnmp-docker up")]),this._v(" 命令后执行一些操作那么可以编写 "),e("code",[this._v("__lnmp_custom_up")]),this._v(" 函数。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"原始命令详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原始命令详解","aria-hidden":"true"}},[this._v("#")]),this._v(" 原始命令详解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化","aria-hidden":"true"}},[this._v("#")]),this._v(" 初始化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"docker-compose-原始命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-原始命令","aria-hidden":"true"}},[this._v("#")]),this._v(" docker-compose 原始命令")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("使用 "),s("code",[t._v("docker-compose")]),t._v(" 来启动、停止、销毁容器的参数分别是 "),s("code",[t._v("up -d")]),t._v(" "),s("code",[t._v("stop")]),t._v(" "),s("code",[t._v("down")]),t._v("，通过 "),s("code",[t._v("-f")]),t._v(" 来加载 "),s("code",[t._v("docker-compose.yml")]),t._v(" (可以任意命名)，本项目的 CLI 就是对以上一些命令的封装。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("场景")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("CLI")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("原始命令")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("开发环境(使用拉取的镜像)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("$ ./lnmp-docker up")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("docker-compose up -d")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("开发环境(使用构建的镜像)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("$ ./lnmp-docker build")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("docker-compose -f docker-compose.yml -f docker-compose.build.yml up -d")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("生产环境")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("$ ./lnmp-docker swarm-deploy")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("docker stack -c docker-production.yml lnmp")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("code",[this._v("docker-compose.override.yaml")]),this._v(" 是为了重写 "),e("code",[this._v("docker-compose.yaml")]),this._v("，执行 "),e("code",[this._v("docker-compose up -d")]),this._v(" 会默认加载该文件。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("调试参数配置时请把 "),e("code",[this._v("up -d")]),this._v(" 替换为 "),e("code",[this._v("config")]),this._v(" 即可。")])}],!1,null,null,null);e.default=r.exports}}]);