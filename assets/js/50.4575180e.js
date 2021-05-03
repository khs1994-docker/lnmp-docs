(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{404:function(t,e,s){"use strict";s.r(e);var a=s(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"windows-上安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-上安装"}},[t._v("#")]),t._v(" Windows 上安装")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/act/cps/redirect?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("打开 "),s("code",[t._v("PowerShell")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("$ cd "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HOME")]),t._v("\n\n$ git clone "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("depth=1 https:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("khs1994"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lnmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $ git clone --depth=1 git@github.com:khs1994-docker/lnmp.git")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 中国镜像")]),t._v("\n\n$ git clone "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("depth=1 https:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("gitee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("khs1994"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lnmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $ git clone --depth=1 git@gitee.com:khs1994-docker/lnmp")]),t._v("\n")])])]),s("h2",{attrs:{id:"设置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置环境变量"}},[t._v("#")]),t._v(" 设置环境变量")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[environment]")]),t._v("::SetEnvironmentvariable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LNMP_PATH"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${HOME}\\lnmp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"启动-demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-demo"}},[t._v("#")]),t._v(" 启动 Demo")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("$ cd "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HOME")]),t._v("\n\n$ cd lnmp\n\n$ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lnmp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ps1 up\n")])])]),s("blockquote",[s("p",[t._v("如果 "),s("code",[t._v("PoswerShell")]),t._v(" 禁止执行脚本，请以管理员身份执行 "),s("code",[t._v("set-ExecutionPolicy Bypass")]),t._v(",之后输入 "),s("code",[t._v("Y")]),t._v(" 确认。"),s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("说明"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("浏览器打开 "),s("code",[t._v("127.0.0.1")]),t._v("，看到页面。")])])}),[],!1,null,null,null);e.default=r.exports}}]);