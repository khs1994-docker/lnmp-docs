(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{365:function(t,e,a){"use strict";a.r(e);var r=a(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"arm-架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arm-架构"}},[t._v("#")]),t._v(" ARM 架构")]),t._v(" "),a("p",[t._v("如果你手上有一个树莓派，那也可以很轻松的使用本项目，你同样只需执行以下命令(使用前 "),a("strong",[t._v("建议")]),t._v(" 阅读后续章节，做好准备工作)。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./lnmp-docker up\n")])])]),a("h2",{attrs:{id:"mysql-暂不支持-arm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-暂不支持-arm"}},[t._v("#")]),t._v(" MySQL 暂不支持 arm")]),t._v(" "),a("blockquote",[a("p",[t._v("arm32 位(armv7l) 同样无法使用 "),a("code",[t._v("mariadb")])])]),t._v(" "),a("ul",[a("li",[t._v("在 "),a("code",[t._v(".env")]),t._v(" 文件中将 "),a("code",[t._v("mysql")]),t._v(" 替换为 "),a("code",[t._v("mariadb")])]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v(".env")]),t._v(" 文件中 "),a("code",[t._v("LREW_INCLUDE")]),t._v(" 新增 "),a("code",[t._v("mariadb")])])]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[t._v("# .env\n"),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(' LNMP_SERVICES="nginx mysql php7 redis"\n')])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(' LNMP_SERVICES="nginx mariadb php7 redis"\n')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(' LREW_INCLUDE="pcit"\n')])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(' LREW_INCLUDE="pcit mariadb"\n')])])])])]),a("h2",{attrs:{id:"安装-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-compose"}},[t._v("#")]),t._v(" 安装 docker-compose")]),t._v(" "),a("p",[a("strong",[t._v("依赖软件")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libffi-dev\n\n$ ./lnmp-docker compose -f\n")])])]),a("h2",{attrs:{id:"docker-arm-镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-arm-镜像"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/docker-library/official-images#architectures-other-than-amd64",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker ARM 镜像"),a("OutboundLink")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("镜像")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("系统")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("架构")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://hub.docker.com/u/arm32v7/",target:"_blank",rel:"noopener noreferrer"}},[t._v("arm32v7 Docker image"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://www.raspberrypi.org/software/operating-systems/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方系统 Raspbian (基于 Debian)"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("arm32")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://hub.docker.com/u/arm64v8/",target:"_blank",rel:"noopener noreferrer"}},[t._v("arm64v8 Docker image"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/khs1994/pi64",target:"_blank",rel:"noopener noreferrer"}},[t._v("pi 64"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("arm64")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://hub.docker.com/u/armhf/",target:"_blank",rel:"noopener noreferrer"}},[t._v("armhf Docker image"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("已经废弃，转移到了上述两个项目中")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("h2",{attrs:{id:"arm-镜像构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arm-镜像构建"}},[t._v("#")]),t._v(" ARM 镜像构建")]),t._v(" "),a("p",[t._v("请查看 "),a("RouterLink",{attrs:{to:"/buildx.html"}},[t._v("buildx")]),t._v(" 或 "),a("RouterLink",{attrs:{to:"/manifest.html"}},[t._v("manifest")])],1),t._v(" "),a("h2",{attrs:{id:"arm64"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arm64"}},[t._v("#")]),t._v(" ARM64")]),t._v(" "),a("p",[t._v("官方测试版 https://www.raspberrypi.org/forums/viewtopic.php?f=117&t=275370")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.khs1994.com/raspberry-pi3/docker.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("树莓派3 安装 Docker"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("https://github.com/docker-library/official-images#architectures-other-than-amd64")])])])}),[],!1,null,null,null);e.default=s.exports}}]);