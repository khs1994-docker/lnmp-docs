(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{245:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"wsl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wsl"}},[s._v("#")]),s._v(" WSL")]),s._v(" "),t("p",[t("strong",[s._v("在 WSL 执行 Docker CLI 命令，不是在 WSL 运行 Docker 服务端")])]),s._v(" "),t("h2",{attrs:{id:"_1-设置-windows-path-变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置-windows-path-变量"}},[s._v("#")]),s._v(" 1. 设置 Windows PATH 变量")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[environment]")]),s._v("::SetEnvironmentvariable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Path"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(":Path;"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(":LNMP_PATH\\windows;"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(':LNMP_PATH\\wsl"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h2",{attrs:{id:"_2-安装-docker-cli-docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-docker-cli-docker-compose"}},[s._v("#")]),s._v(" 2. 安装 Docker CLI/ docker-compose")]),s._v(" "),t("p",[s._v("WSL 中执行")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ lnmp-wsl-docker-cli.sh\n")])])]),t("h2",{attrs:{id:"_3-设置挂载路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置挂载路径"}},[s._v("#")]),s._v(" 3. 设置挂载路径")]),s._v(" "),t("p",[s._v("默认的 WSL 将 C 盘挂载到了 "),t("code",[s._v("/mnt/c")]),s._v("，这里修改配置，将 C 盘挂载到 "),t("code",[s._v("/c")])]),s._v(" "),t("ul",[t("li",[s._v("https://raw.githubusercontent.com/khs1994-docker/lnmp/master/wsl/config/wsl.conf")])]),s._v(" "),t("p",[s._v("WSL 中执行")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/wsl.conf\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("automount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nenabled "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /\n")])])]),t("h2",{attrs:{id:"_4-使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用"}},[s._v("#")]),s._v(" 4. 使用")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ wsl -- ./lnmp-docker\n")])])]),t("h1",{attrs:{id:"wsl2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wsl2"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://github.com/khs1994-docker/lnmp/blob/19.03/wsl2/README.DOCKER.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("WSL2"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("由于 Docker 桌面版启动时间较长，经常出现问题（无法启动），本项目支持 WSL2 Docker。")])])}),[],!1,null,null,null);a.default=r.exports}}]);