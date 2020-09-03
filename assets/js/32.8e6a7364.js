(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{352:function(t,s,a){"use strict";a.r(s);var e=a(33),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"个性化方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#个性化方案"}},[t._v("#")]),t._v(" 个性化方案")]),t._v(" "),a("p",[t._v("本项目提供的默认环境可能不符合开发者实际的需求，例如想增加一个软件、更改一项配置。下面提供一些典型案例。")]),t._v(" "),a("h2",{attrs:{id:"自定义所启动的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义所启动的服务"}},[t._v("#")]),t._v(" 自定义所启动的服务")]),t._v(" "),a("p",[t._v("例如使用 "),a("code",[t._v("httpd")]),t._v(" 替换 "),a("code",[t._v("nginx")]),t._v("。")]),t._v(" "),a("p",[t._v("编辑 "),a("code",[t._v(".env")]),t._v(" 文件，在 "),a("code",[t._v("LNMP_SERVICES")]),t._v(" 变量中增加软件名")]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v('- LNMP_SERVICES="nginx mysql php7 redis" # 默认配置\n')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('+ LNMP_SERVICES="httpd mysql php7 redis" # 使用 httpd 代替 nginx\n')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('+ LNMP_SERVICES="httpd mysql php7 redis mongodb" # 增加 mongodb\n')])])])]),a("h2",{attrs:{id:"使用自己的镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用自己的镜像"}},[t._v("#")]),t._v(" 使用自己的镜像")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("不想使用本项目默认的镜像，可以！")])])]),t._v(" "),a("p",[t._v("你可以全部或部分服务使用自己的镜像，请参考 "),a("RouterLink",{attrs:{to:"/build.html"}},[t._v("build")]),t._v("。某个服务使用自己的镜像请参考下方内容。")],1),t._v(" "),a("h2",{attrs:{id:"通过修改-docker-lnmp-include-yml-文件自定义本项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过修改-docker-lnmp-include-yml-文件自定义本项目"}},[t._v("#")]),t._v(" 通过修改 "),a("code",[t._v("docker-lnmp.include.yml")]),t._v(" 文件自定义本项目")]),t._v(" "),a("p",[t._v("编辑 "),a("code",[t._v("docker-lnmp.include.yml")]),t._v(" 文件，增加服务名，修改指令即可。")]),t._v(" "),a("p",[a("strong",[t._v("建议每次修改之后执行 "),a("code",[t._v("$ lnmp-docker config > 1.yaml")]),t._v(" 查看配置是否正确，之后启动。")])]),t._v(" "),a("h3",{attrs:{id:"自定义镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义镜像"}},[t._v("#")]),t._v(" 自定义镜像")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker-lnmp.include.yml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.7"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("php7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 想修改哪个配置在这里重写即可，例如想使用自己的 PHP 镜像或国内镜像，那么增加 `image` 指令即可")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ccr.ccs.tencentyun.com/khs1994/php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("LNMP_PHP_VERSION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("7.4.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fpm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n")])])]),a("h3",{attrs:{id:"自定义数据卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义数据卷"}},[t._v("#")]),t._v(" 自定义数据卷")]),t._v(" "),a("blockquote",[a("p",[t._v("例如我们想增加一个数据卷挂载，将本机 "),a("code",[t._v("/path/src")]),t._v(" 挂载到 PHP 容器中的 "),a("code",[t._v("/path/target")])])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker-lnmp.include.yml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.7"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("php7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /path/src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/path/target\n")])])]),a("blockquote",[a("p",[t._v("再例如 "),a("code",[t._v("MySQL")]),t._v(" 默认将容器目录 "),a("code",[t._v("/var/lib/mysql")]),t._v(" 映射到了宿主机中的数据卷，但我们想映射到宿主机的 "),a("code",[t._v("/path/mysql")]),t._v(" 目录")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker-lnmp.include.yml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.7"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mysql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /path/mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/mysql\n")])])]),a("h3",{attrs:{id:"增加一个服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加一个服务"}},[t._v("#")]),t._v(" 增加一个服务")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker-lnmp.include.yml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.7"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("my_add_service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" username/image\n")])])]),a("p",[t._v("参考最开始的小节，在 "),a("code",[t._v(".env")]),t._v(" 文件中修改 "),a("code",[t._v("LNMP_SERVICES")]),t._v(" 变量，增加服务名。")]),t._v(" "),a("h2",{attrs:{id:"单独启动某个软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单独启动某个软件"}},[t._v("#")]),t._v(" 单独启动某个软件")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("我想单独启动某个软件，可以！")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ lnmp-docker up SOFT_NAME SOFT_NAME2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $ lnmp-docker up kong-dashboard")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $ lnmp-docker up kong kong-dashboard")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);