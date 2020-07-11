(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{375:function(e,a,s){"use strict";s.r(a);var r=s(33),t=Object(r.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"lrew"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lrew"}},[e._v("#")]),e._v(" "),s("a",{attrs:{href:"https://github.com/lrew",target:"_blank",rel:"noopener noreferrer"}},[e._v("lrew"),s("OutboundLink")],1)]),e._v(" "),s("blockquote",[s("p",[e._v("khs1994-docker/lnmp 包管理工具。")])]),e._v(" "),s("ul",[s("li",[e._v("https://hub.docker.com/u/lrewpkg")]),e._v(" "),s("li",[e._v("https://packagist.org/packages/lrew/")])]),e._v(" "),s("p",[e._v("macOS 有 "),s("code",[e._v("brew")]),e._v(" 包管理工具，khs1994-docker/lnmp 包管理工具称为 "),s("code",[e._v("lrew")]),e._v("。"),s("code",[e._v("lrew")]),e._v(" 实现了对 khs1994-docker/lnmp 项目的扩展，让用户可以方便的增加某个软件。")]),e._v(" "),s("h2",{attrs:{id:"修改配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[e._v("#")]),e._v(" 修改配置")]),e._v(" "),s("p",[e._v("你可以通过以下方式启用 "),s("code",[e._v("example")]),e._v(" 包（假设 "),s("code",[e._v("example")]),e._v(" 包提供了 "),s("code",[e._v("example")]),e._v(" 服务）。若在 "),s("code",[e._v("lrew")]),e._v(" 目录下没找到你所需要的包，你可以参照下一小节开发一个包或者在 https://packagist.org/packages/lrew/ 寻找一个包。")]),e._v(" "),s("p",[e._v("编辑 "),s("code",[e._v(".env")]),e._v(" 文件，将 "),s("code",[e._v("example")]),e._v(" 加入到以下变量中，例如")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LREW_INCLUDE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"minio example"')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LNMP_SERVICES")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nginx mysql php7 redis phpmyadmin example"')]),e._v("\n")])])]),s("h3",{attrs:{id:"启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[e._v("#")]),e._v(" 启动")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ lnmp-docker up\n")])])]),s("h2",{attrs:{id:"开发一个包（开发者）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发一个包（开发者）"}},[e._v("#")]),e._v(" 开发一个包（开发者）")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("这个项目能不能增加 xxx 软件，可以！")]),e._v(" 下文用 "),s("code",[e._v("example")]),e._v(" 代替 "),s("code",[e._v("xxx")]),e._v(" 软件")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ lnmp-docker lrew-init example\n")])])]),s("p",[e._v("修改 "),s("code",[e._v("vendor/lrew-dev/example")]),e._v(" 内的文件。")]),e._v(" "),s("p",[e._v("根据上方 "),s("code",[e._v("修改配置")]),e._v(" 一节，测试项目文件。")]),e._v(" "),s("p",[e._v("之后推送到 GitHub，并发布到 composer。")]),e._v(" "),s("ul",[s("li",[e._v("示例：https://github.com/khs1994-docker/lrew-harbor")])]),e._v(" "),s("blockquote",[s("p",[e._v("可以参考 "),s("code",[e._v("lrew")]),e._v(" 文件夹中的示例项目")])]),e._v(" "),s("h2",{attrs:{id:"添加一个包，并使用所提供的服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加一个包，并使用所提供的服务"}},[e._v("#")]),e._v(" 添加一个包，并使用所提供的服务")]),e._v(" "),s("p",[e._v("你可以使用已发布到 "),s("a",{attrs:{href:"https://packagist.org/packages/lrew/",target:"_blank",rel:"noopener noreferrer"}},[e._v("composer"),s("OutboundLink")],1),e._v(" 的包所提供的服务。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ lnmp-docker lrew-add example\n")])])]),s("p",[e._v("根据上方 "),s("code",[e._v("修改配置")]),e._v(" 一节进行配置，之后启动")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ ./lnmp-docker up\n")])])]),s("h2",{attrs:{id:"优先级-开发者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优先级-开发者"}},[e._v("#")]),e._v(" 优先级(开发者)")]),e._v(" "),s("p",[s("code",[e._v("vendor/lrew-dev")]),e._v(" 优先级大于 "),s("code",[e._v("vendor/lrew")]),e._v("。")])])}),[],!1,null,null,null);a.default=t.exports}}]);