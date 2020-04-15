(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{256:function(e,t,o){"use strict";o.r(t);var r=o(0),_=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"国内网络问题"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#国内网络问题"}},[e._v("#")]),e._v(" 国内网络问题")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://cloud.tencent.com/redirect.php?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),o("OutboundLink")],1),e._v(" "),o("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),o("OutboundLink")],1)]),e._v(" "),o("ul",[o("li",[e._v("从 "),o("code",[e._v("GitHub")]),e._v(" 下载文件（docker-compose、composer）")])]),e._v(" "),o("blockquote",[o("p",[e._v("https://github.com/khs1994-website/github-chinese")])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("官方默认的 "),o("code",[e._v("apt")]),e._v(" 镜像")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("pecl")])])]),e._v(" "),o("li",[o("p",[e._v("PHP "),o("code",[e._v("composer")])])]),e._v(" "),o("li",[o("p",[e._v("Alpine apk https://mirrors.alpinelinux.org/")])])]),e._v(" "),o("p",[e._v("解决思路：")]),e._v(" "),o("p",[e._v("镜像构建尽可能使用 CI 服务器，国内云服务商均免费提供国外的容器构建环境。")]),e._v(" "),o("p",[e._v("在 "),o("code",[e._v("Dockerfile")]),e._v(" 中，将 URL(国内访问慢的地址，例如 PHP 源码下载地址) 设置为 "),o("code",[e._v("ENV")]),e._v(" 或 "),o("code",[e._v("ARG")]),e._v(" 其默认值为官方地址。")]),e._v(" "),o("p",[e._v("本地测试（国内）时，使用 "),o("code",[e._v("Docker compose")]),e._v(" 通过 "),o("code",[e._v("ARG")]),e._v(" 将 URL 设为国内镜像地址。")]),e._v(" "),o("p",[e._v("具体参考本项目的 PHP compose 文件 https://github.com/khs1994-docker/lnmp/blob/master/dockerfile/php/docker-compose.yml")]),e._v(" "),o("h2",{attrs:{id:"lnmp-cn-env-环境变量"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lnmp-cn-env-环境变量"}},[e._v("#")]),e._v(" "),o("code",[e._v("LNMP_CN_ENV")]),e._v(" 环境变量")]),e._v(" "),o("p",[e._v("本项目会根据 "),o("code",[e._v("LNMP_CN_ENV=true")]),e._v(" (默认，无需添加环境变量) 来替换源为国内镜像，避免因网络问题影响使用（当你的环境处于非国内环境时请改为 "),o("code",[e._v("LNMP_CN_ENV=false")]),e._v("）。")])])}),[],!1,null,null,null);t.default=_.exports}}]);