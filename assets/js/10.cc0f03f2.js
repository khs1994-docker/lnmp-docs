(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{176:function(e,a,s){"use strict";s.r(a);var t=s(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"使用自己构建的镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用自己构建的镜像","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用自己构建的镜像")]),e._v(" "),s("p",[s("code",[e._v(".env")]),e._v(" 文件更改以下变量")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("LNMP_BUILD_DOCKER_IMAGE_PREFIX"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("username\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" dockerfile/SOFT_NAME\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" example.Dockerfile Dockerfile\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 编辑 Dockerfile")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("vi")]),e._v(" Dockerfile\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 构建镜像")]),e._v("\n$ lnmp-docker build\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 启动")]),e._v("\n$ lnmp-docker build-up\n")])])]),s("h2",{attrs:{id:"部分服务使用自己镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部分服务使用自己镜像","aria-hidden":"true"}},[e._v("#")]),e._v(" 部分服务使用自己镜像")]),e._v(" "),s("p",[e._v("在 "),s("code",[e._v("docker-lnmp.include.yml")]),e._v(" 文件中重写对应服务的 "),s("code",[e._v("image")]),e._v(" 指令。")])])}],!1,null,null,null);a.default=n.exports}}]);