(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{277:function(e,t,r){"use strict";r.r(t);var o=r(0),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"项目初衷"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目初衷"}},[e._v("#")]),e._v(" 项目初衷")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/redirect.php?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),r("p",[e._v("搭建一个 LNMP 环境需要手动下载 LNMP 源码包，安装依赖包，编译，编译出错再安装依赖包，再修改默认配置，这样一个过程差不多半天过去了。")]),e._v(" "),r("p",[e._v("Docker 的优点是轻量、跨平台、提供一致的环境，避免「在我这里行换到你那就不行的问题」，笔者之前一直使用 "),r("code",[e._v("docker run")]),e._v(" 来使用 Docker，问题是启动一个容器需要写参数、环境变量、挂载文件目录等，造成命令的繁杂，不易读，之后就将 "),r("code",[e._v("docker run ...")]),e._v(" 写入脚本文件，通过运行脚本文件来启动Docker。")]),e._v(" "),r("p",[e._v("接触 Docker Compose 之后把原来的启动命令写成 "),r("code",[e._v("docker-compose.yml")]),e._v(" 来使用 Docker。Docker Compose 是一种容器编排工具，也就是管理多个容器的工具，以启动 LNMP（包括 Redis ） 为例，使用 "),r("code",[e._v("docker run")]),e._v(" 你需要执行四条命令，而使用 Docker Compose 你只需执行 "),r("code",[e._v("docker-compose up -d")]),e._v(" 就把四个容器全部启动了。")]),e._v(" "),r("h2",{attrs:{id:"项目目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目目标"}},[e._v("#")]),e._v(" 项目目标")]),e._v(" "),r("p",[e._v("综上，本项目的目标是让 PHP 开发者快速（一键）搭建基于容器技术（Docker、Kubernetes）的开发、测试、生产（CI/CD）环境。")]),e._v(" "),r("p",[e._v("支持 "),r("code",[e._v("Linux")]),e._v(" "),r("code",[e._v("macOS")]),e._v(" "),r("code",[e._v("Windows")]),e._v(" "),r("code",[e._v("WSL")]),e._v(" "),r("code",[e._v("WSL2")]),e._v(" 等平台，并提供一系列 CLI ("),r("code",[e._v("lnmp-*")]),e._v(") 方便开发者管理开发工具（安装、启动、停止、执行命令）。")]),e._v(" "),r("p",[e._v("提供 "),r("RouterLink",{attrs:{to:"/lrew.html"}},[r("code",[e._v("lrew")])]),e._v(" 包管理工具扩展本项目。")],1),e._v(" "),r("p",[e._v("提供 "),r("RouterLink",{attrs:{to:"/windows/lwpm.html"}},[r("code",[e._v("lwpm")])]),e._v(" Windows 包管理工具安装 Windows 软件。")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);