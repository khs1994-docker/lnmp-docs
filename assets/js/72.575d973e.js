(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{270:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"powershell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#powershell"}},[t._v("#")]),t._v(" PowerShell")]),t._v(" "),s("ul",[s("li",[t._v("https://www.pstips.net/")]),t._v(" "),s("li",[t._v("https://docs.microsoft.com/en-us/powershell/")])]),t._v(" "),s("h2",{attrs:{id:"write-debug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write-debug"}},[t._v("#")]),t._v(" write-debug")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DebugPreference")]),t._v("\n\nSilentlyContinue\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认不显示 debug 信息")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更改为如下值，则会显示")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DebugPreference")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Continue"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 也可以加上 -Debug，也会显示")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write-debug")]),t._v(" 1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Debug\n")])])]),s("h2",{attrs:{id:"write-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write-information"}},[t._v("#")]),t._v(" write-information")]),t._v(" "),s("p",[t._v("默认不会显示，加上 "),s("code",[t._v("-InformationAction Continue")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$InformationPreference")]),t._v("\nSilentlyContinue\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Information "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("MessageData "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Got your features!"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("InformationAction "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Continue")]),t._v("\n")])])]),s("h2",{attrs:{id:"write-output-write-host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write-output-write-host"}},[t._v("#")]),t._v(" write-output / write-host")]),t._v(" "),s("p",[s("code",[t._v("write-host")]),t._v(" 输出到终端，结果不能重定向到文件，"),s("code",[t._v("write-output")]),t._v(" 可以。")]),t._v(" "),s("h2",{attrs:{id:"erroractionpreference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#erroractionpreference"}},[t._v("#")]),t._v(" $ErrorActionPreference")]),t._v(" "),s("p",[t._v("默认值为 "),s("code",[t._v("Continue")]),t._v("，当执行错误时，将继续执行。")]),t._v(" "),s("p",[t._v("改为 "),s("code",[t._v("stop")]),t._v("，当执行错误时，不再继续执行。（相当于 bash 的 "),s("code",[t._v("set -e")]),t._v("）")]),t._v(" "),s("p",[t._v("改为 "),s("code",[t._v("SilentlyContinue")]),t._v(" 不会显示错误信息。")]),t._v(" "),s("h2",{attrs:{id:"输出错误到文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出错误到文件"}},[t._v("#")]),t._v(" 输出错误到文件")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write-error")]),t._v(" 1 2>&1 error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt\n")])])]),s("h2",{attrs:{id:"profiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#profiles"}},[t._v("#")]),t._v(" profiles")]),t._v(" "),s("ul",[s("li",[t._v("https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles")])]),t._v(" "),s("h2",{attrs:{id:"experimentalfeature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#experimentalfeature"}},[t._v("#")]),t._v(" ExperimentalFeature")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("ExperimentalFeature\n")])])]),s("h2",{attrs:{id:"powershellget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#powershellget"}},[t._v("#")]),t._v(" powershellget")]),t._v(" "),s("ul",[s("li",[t._v("https://www.pstips.net/share-script-on-powershell-gallery.html")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ Get-Command -Module PowerShellGet\n\n$ Set-PSRepository -Name PSGallery -InstallationPolicy Trusted\n")])])]),s("h2",{attrs:{id:"wmf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wmf"}},[t._v("#")]),t._v(" WMF")]),t._v(" "),s("ul",[s("li",[t._v("https://www.2cto.com/net/201701/585277.html")])])])}),[],!1,null,null,null);e.default=r.exports}}]);