(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{225:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[e._v("#")]),e._v(" Docker Compose")]),e._v(" "),a("ul",[a("li",[e._v("https://docs.docker.com/compose/compose-file/")]),e._v(" "),a("li",[e._v("https://blog.csdn.net/chenqijing2/article/details/79506991")])]),e._v(" "),a("p",[a("code",[e._v("环境变量")]),e._v(" 优先级大于 "),a("code",[e._v(".env")]),e._v(" 文件。")]),e._v(" "),a("blockquote",[a("p",[e._v("Values set in the shell environment override those set in the "),a("code",[e._v(".env")]),e._v(" file.")])]),e._v(" "),a("h2",{attrs:{id:"变量解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量解析"}},[e._v("#")]),e._v(" 变量解析")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("${VARIABLE:-default}")]),e._v(" evaluates to default if VARIABLE is unset or empty in the environment. 未设置或为空，则为 "),a("code",[e._v("default")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("${VARIABLE-default}")]),e._v(" evaluates to default only if VARIABLE is unset in the environment. 未设置，则为 "),a("code",[e._v("default")])])])]),e._v(" "),a("p",[e._v("Similarly, the following syntax allows you to specify mandatory variables:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("${VARIABLE:?err msg}")]),e._v(" exits with an error message containing err if VARIABLE is unset or empty in the environment. 未设置或为空，报错 "),a("code",[e._v("err msg")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("${VARIABLE?err msg}")]),e._v(" exits with an error message containing err if VARIABLE is unset in the environment. 未设置，报错 "),a("code",[e._v("err msg")])])])]),e._v(" "),a("h2",{attrs:{id:"macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[e._v("#")]),e._v(" macOS")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("consistent")]),e._v(": 或者 default：完全一致的默认设置，如上所述。")]),e._v(" "),a("li",[a("code",[e._v("delegated")]),e._v("：容器运行时的挂载视图是权威的。在容器中进行的更新可能在主机上可见之前可能会有延迟。")]),e._v(" "),a("li",[a("code",[e._v("cached")]),e._v("：macOS 主机的挂载视图是权威的。在主机上进行的更新在容器中可见之前可能会有延迟。")])]),e._v(" "),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")]),e._v(" $$")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("web:\n  build: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n  command: "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"echo '),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$$")]),e._v('VAR_NOT_INTERPOLATED_BY_COMPOSE"')]),e._v("\n")])])]),a("p",[a("code",[e._v("$VAR")]),e._v(" 都会被 compose 当作变量被解析，可以使用 "),a("code",[e._v("$$")]),e._v(" 避免被 compose 解析。")]),e._v(" "),a("h2",{attrs:{id:"docker-stack-不支持-env-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-stack-不支持-env-文件"}},[e._v("#")]),e._v(" docker stack 不支持 "),a("code",[e._v(".env")]),e._v(" 文件")]),e._v(" "),a("h2",{attrs:{id:"network-attachable-swarm-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-attachable-swarm-mode"}},[e._v("#")]),e._v(" network attachable (swarm mode)")]),e._v(" "),a("ul",[a("li",[e._v("https://docs.docker.com/compose/compose-file/#attachable")])])])}),[],!1,null,null,null);t.default=o.exports}}]);