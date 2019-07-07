(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{230:function(t,e,r){"use strict";r.r(e);var s=r(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/redirect.php?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),r("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),r("p",[t._v("其他选项严禁修改，除非你明确知道某个选项将产生什么影响。")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://github.com/BrianGilbert/xdebug-helper-for-firefox",target:"_blank",rel:"noopener noreferrer"}},[t._v("火狐"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://github.com/mac-cain13/xdebug-helper-for-chrome",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome"),r("OutboundLink")],1)])])]),t._v(" "),t._m(26),t._v(" "),r("p",[t._v("在扩展配置中 IDE key 选择 PhpStorm")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"本项目使用-xdebug-in-docker-phpstorm-最佳实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本项目使用-xdebug-in-docker-phpstorm-最佳实践","aria-hidden":"true"}},[this._v("#")]),this._v(" 本项目使用 Xdebug in Docker + PhpStorm 最佳实践")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("https://xdebug.org/docs/all_settings")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("启用 Xdebug 扩展会使 PHP 响应变慢，建议仅在需要调试时打开！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"启用-xdebug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启用-xdebug","aria-hidden":"true"}},[this._v("#")]),this._v(" 启用 xdebug")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("生产环境不启用 "),e("code",[this._v("xdebug")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("编辑 "),e("code",[this._v("config/php/docker-php.ini")]),this._v(" 文件，取消注释")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v(" zend_extension"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("xdebug\nzend_extension"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("xdebug\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"准备-php-项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备-php-项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 准备 PHP 项目")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("PHP 项目")])]),this._v(" "),e("li",[e("p",[this._v("NGINX 配置")])]),this._v(" "),e("li",[e("p",[this._v("验证浏览器能通过网址访问到你的项目")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"设置-xdebug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置-xdebug","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置 Xdebug")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"调试-host-必选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调试-host-必选项","aria-hidden":"true"}},[this._v("#")]),this._v(" 调试 HOST (必选项)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("编辑 "),e("code",[this._v(".env")]),this._v(" 文件中的 "),e("code",[this._v("LNMP_XDEBUG_REMOTE_HOST=192.168.199.100")]),this._v(" 变量为你电脑的 IP，这就要求你的电脑必须固定 IP。不然电脑 IP 每次变化时，必须重新修改此变量。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"docker-desktop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-desktop","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker Desktop")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在 Docker 设置中没有配置自定义 DNS 的情况下可以使用 "),e("code",[this._v("LNMP_XDEBUG_REMOTE_HOST=host.docker.internal")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"docker-for-linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-for-linux","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker for Linux")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("要么电脑固定 IP，要么 IP 变化时编辑 "),e("code",[this._v(".env")]),this._v(" 文件中的 "),e("code",[this._v("LNMP_XDEBUG_REMOTE_HOST")]),this._v(" 变量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"调试端口（可选项）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调试端口（可选项）","aria-hidden":"true"}},[this._v("#")]),this._v(" 调试端口（可选项）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("编辑 "),e("code",[this._v(".env")]),this._v(" 文件中的 "),e("code",[this._v("LNMP_XDEBUG_REMOTE_PORT=9001")]),this._v(" 变量，默认 "),e("code",[this._v("9001")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"警告"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#警告","aria-hidden":"true"}},[this._v("#")]),this._v(" 警告")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"重启容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启容器","aria-hidden":"true"}},[this._v("#")]),this._v(" 重启容器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ ./lnmp-docker restart php7\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"在-ide-设置中配置-xdebug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-ide-设置中配置-xdebug","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 "),e("code",[this._v("IDE")]),this._v(" 设置中配置 "),e("code",[this._v("Xdebug")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("code",[t._v("Preferenences")]),t._v(" -> "),r("code",[t._v("Languages & ...")]),t._v("-> "),r("code",[t._v("PHP")]),t._v(" -> "),r("code",[t._v("Debug")]),t._v("-> "),r("code",[t._v("xdebug")]),t._v("-> "),r("code",[t._v("Debug port 9001")]),t._v("(默认为 "),r("code",[t._v("9000")]),t._v("，这里改为 "),r("code",[t._v("9001")]),t._v(")")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("code",[this._v("9001")]),this._v(" 端口务必与 "),e("code",[this._v("./config/php/docker-xdebug.ini")]),this._v(" 一致。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("该设置页 "),e("code",[this._v("Pre-configuration")]),this._v(" 有简要的步骤。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"浏览器扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器扩展","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器扩展")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"设置扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置扩展","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置扩展")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"ide-中点击工具栏电话图标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ide-中点击工具栏电话图标","aria-hidden":"true"}},[this._v("#")]),this._v(" IDE 中点击工具栏电话图标")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"编写代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 编写代码")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"打断点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打断点","aria-hidden":"true"}},[this._v("#")]),this._v(" 打断点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"浏览器刷新对应页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器刷新对应页面","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器刷新对应页面")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在调试页面点击扩展图标，选择 "),e("code",[this._v("debug")]),this._v("，之后刷新页面")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"自动跳转到-ide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动跳转到-ide","aria-hidden":"true"}},[this._v("#")]),this._v(" 自动跳转到 IDE")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"more-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#more-information","aria-hidden":"true"}},[this._v("#")]),this._v(" More Information")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("https://xdebug.org/docs/remote")])]),this._v(" "),e("li",[e("p",[this._v("https://segmentfault.com/a/1190000010833434")])]),this._v(" "),e("li",[e("p",[this._v("https://confluence.jetbrains.com/display/PhpStorm/Docker+Support+in+PhpStorm")])])])}],!1,null,null,null);e.default=i.exports}}]);