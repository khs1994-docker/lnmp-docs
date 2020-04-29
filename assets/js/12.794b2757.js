(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{332:function(t,a,s){"use strict";s.r(a);var e=s(33),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"docker-buildx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-buildx"}},[t._v("#")]),t._v(" docker buildx")]),t._v(" "),s("ul",[s("li",[t._v("https://github.com/docker/buildx")])]),t._v(" "),s("h2",{attrs:{id:"创建实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建实例"}},[t._v("#")]),t._v(" 创建实例")]),t._v(" "),s("p",[t._v("下载 "),s("code",[t._v("https://github.com/docker/buildx/releases")]),t._v("，放入 "),s("code",[t._v("~/.docker/cli-plugins/docker-buildx(.exe)")]),t._v("，并赋予可执行权限。")]),t._v(" "),s("h3",{attrs:{id:"国内环境使用如下命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#国内环境使用如下命令"}},[t._v("#")]),t._v(" 国内环境使用如下命令")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ docker buildx create --use --name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mybuilder --driver docker-container --driver-opt "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dockerpracticesig/buildkit:master\n")])])]),s("h3",{attrs:{id:"其他环境使用如下命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他环境使用如下命令"}},[t._v("#")]),t._v(" 其他环境使用如下命令")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ docker buildx create --use --name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mybuilder --driver docker-container\n")])])]),s("h2",{attrs:{id:"dockerfile-arg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-arg"}},[t._v("#")]),t._v(" Dockerfile ARG")]),t._v(" "),s("div",{staticClass:"language-docker extra-class"},[s("pre",{pre:!0,attrs:{class:"language-docker"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# syntax=docker/dockerfile:experimental")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" TARGETPLATFORM "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" platform of the build result. Eg linux/amd64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" linux/arm/v7"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" windows/amd64.\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" TARGETOS "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" OS component of TARGETPLATFORM\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" TARGETARCH "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" architecture component of TARGETPLATFORM\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" TARGETVARIANT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" variant component of TARGETPLATFORM\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" BUILDPLATFORM "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" platform of the node performing the build.\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" BUILDOS "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" OS component of BUILDPLATFORM\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" BUILDARCH "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" OS component of BUILDPLATFORM\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" BUILDVARIANT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" OS component of BUILDPLATFORM\n")])])]),s("h2",{attrs:{id:"构建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[t._v("#")]),t._v(" 构建镜像")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ docker buildx build "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("ul",[s("li",[t._v("https://vuepress.mirror.docker-practice.com/buildx/multi-arch-images.html")])])])}),[],!1,null,null,null);a.default=r.exports}}]);