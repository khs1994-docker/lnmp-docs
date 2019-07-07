(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{193:function(t,e,s){"use strict";s.r(e);var r=s(0),i=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/redirect.php?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),s("p",[t._v("以上是简单的配置方法，如果你有兴趣持续使用本项目作为你的 LNMP 环境，那么请 "),s("strong",[t._v("正确")]),t._v(" 的修改配置文件。请查看 "),s("router-link",{attrs:{to:"./config.html"}},[t._v("这里")])],1),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),s("p",[t._v("想要在 PHPStorm 中实现右键点击运行脚本必须进行额外的设置")]),t._v(" "),s("p",[t._v("具体请查看 PHP 容器化最佳实践 https://github.com/khs1994-docker/php-demo#6-cli-settings")]),t._v(" "),t._m(26),t._v(" "),t._m(27)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"开发环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 开发环境")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用方法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("1.")]),this._v(" 在 "),e("code",[this._v(".env")]),this._v(" 文件中通过 "),e("code",[this._v("LNMP_INCLUDE")]),this._v(" 变量修改需要启用的软件，详细说明在本文最后(可选项)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("2.")]),this._v(" 在 "),e("code",[this._v(".env")]),this._v(" 文件中通过 "),e("code",[this._v("LNMP_DOCKER_IMAGE_PREFIX")]),this._v(" 变量修改镜像前缀，默认为 khs1994，你可以自由的定义镜像前缀来使用你自己的镜像(可选项)")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",[t._v("3.")]),t._v(" 在 "),s("code",[t._v(".env")]),t._v(" 文件中通过 "),s("code",[t._v("LNMP_PHP_PATH")]),t._v(" 变量修改 "),s("strong",[t._v("容器")]),t._v(" 内 PHP 项目路径，默认为 "),s("code",[t._v("/app")]),t._v(" (可选项)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("4.")]),this._v(" 从 Git 克隆或移动已有的 PHP 项目文件到 "),e("code",[this._v("./app/")]),this._v(" 目录下(可自定义，请查看下方 "),e("code",[this._v("APP_ROOT")]),this._v(" 一节)，或新建 PHP 项目文件夹")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",[t._v("5.")]),t._v(" 在 "),s("code",[t._v("./config/nginx/")]),t._v(" 参考示例配置，新建 "),s("code",[t._v("nginx")]),t._v(" 配置文件("),s("code",[t._v("./config/nginx/*.conf")]),t._v(")")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("6.")]),this._v(" 执行 "),e("code",[this._v("./lnmp-docker up")]),this._v(" 或者 "),e("code",[this._v("./lnmp-docker restart nginx")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("7.")]),this._v(" "),e("code",[this._v("IDE(例如，PhpStorm)")]),this._v(" 打开 "),e("code",[this._v("./app/project")]),this._v(" ，开始编写代码")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"再新建一个项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#再新建一个项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 再新建一个项目")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("1.")]),this._v(" "),e("code",[this._v("./app")]),this._v(" 新建项目文件夹，"),e("code",[this._v("./config/nginx/")]),this._v(" 新增配置文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("2.")]),this._v(" 执行 "),e("code",[this._v("./lnmp-docker restart nginx")]),this._v(" 重启 nginx")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("3.")]),this._v(" "),e("code",[this._v("IDE(例如，PhpStorm)")]),this._v(" 打开 "),e("code",[this._v("./app/new-project")]),this._v(" ，开始编写代码")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"app-root"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-root","aria-hidden":"true"}},[this._v("#")]),this._v(" APP_ROOT")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("默认的 PHP 项目目录位于 "),e("code",[this._v("./app/*")]),this._v("，你可以通过在 "),e("code",[this._v(".env")]),this._v(" 文件中设置 "),e("code",[this._v("APP_ROOT")]),this._v(" 变量来更改 PHP 项目目录。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("例如你想要将 PHP 项目目录 "),e("code",[this._v("app")]),this._v(" 与本项目并列")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# APP_ROOT=./app")]),this._v("\nAPP_ROOT"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("..")]),this._v("/app\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[this._v("#")]),this._v(" Windows")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Windows 除了在 "),e("code",[this._v(".env")]),this._v(" 文件中设置 "),e("code",[this._v("APP_ROOT")]),this._v(" 变量外，还需在 "),e("code",[this._v(".env.ps1")]),this._v(" 中进行如下设置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v('# $global:APP_ROOT="./app"')]),this._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$global")]),this._v(":APP_ROOT"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"../app"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"如何正确的自定义配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何正确的自定义配置文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何正确的自定义配置文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用-cli-交互式的创建-php-项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-cli-交互式的创建-php-项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 CLI 交互式的创建 PHP 项目")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("执行 "),e("code",[this._v("./lnmp-docker new")]),this._v(" 新建项目")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"生成-nginx-配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成-nginx-配置文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 生成 NGINX 配置文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("./lnmp-docker nginx-conf")]),this._v(" 便捷的生成 nginx 配置文件(包括 HTTP HTTPS)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"phpstorm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#phpstorm","aria-hidden":"true"}},[this._v("#")]),this._v(" PHPStorm")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"容器数量伸缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器数量伸缩","aria-hidden":"true"}},[this._v("#")]),this._v(" 容器数量伸缩")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ ./lnmp-docker scale php7"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("3\n\n$ ./lnmp-docker scale php7"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("1\n")])])])}],!1,null,null,null);e.default=i.exports}}]);