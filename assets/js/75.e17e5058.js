(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{392:function(e,t,r){"use strict";r.r(t);var a=r(33),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/act/cps/redirect?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("假设在 "),r("code",[e._v("开发环境")]),e._v(" 中已经将 PHP 项目测试完毕，并推送到了 "),r("code",[e._v("git")]),e._v("，准备在生产环境部署。")]),e._v(" "),r("h2",{attrs:{id:"生产环境注意事项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生产环境注意事项"}},[e._v("#")]),e._v(" 生产环境注意事项")]),e._v(" "),r("p",[e._v("在生产环境中建议使用 "),r("code",[e._v("Docker Swarm mode")]),e._v(" 或 "),r("code",[e._v("k8s")]),e._v("。")]),e._v(" "),r("p",[e._v("本项目生产环境目标是超大规模 Docker 集群。")]),e._v(" "),r("h2",{attrs:{id:"单机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单机"}},[e._v("#")]),e._v(" 单机")]),e._v(" "),r("p",[e._v("单机环境中通过 "),r("code",[e._v("数据卷")]),e._v(" 将 "),r("code",[e._v("项目文件")]),e._v(" 挂载到容器中。")]),e._v(" "),r("p",[e._v("将 PHP 项目克隆到 "),r("code",[e._v("./app")]),e._v(" 目录下，之后使用 "),r("code",[e._v("lnmp-composer ...")]),e._v(" 安装依赖。")]),e._v(" "),r("p",[e._v("在 "),r("code",[e._v("./config/nginx/*.conf")]),e._v(" 增加 nginx 配置。")]),e._v(" "),r("p",[e._v("执行 "),r("code",[e._v("./lnmp-docker swarm-deploy")]),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"集群"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#集群"}},[e._v("#")]),e._v(" 集群")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("直接将 PHP 项目打入镜像，以容器方式 ("),r("code",[e._v("Dockerfile")]),e._v(") 交付。可以参考 "),r("a",{attrs:{href:"https://github.com/khs1994-docker/laravel-demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Demo"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("PHP 项目不打入镜像，运行 daemonset 保证每个节点都有代码文件。")])])]),e._v(" "),r("h2",{attrs:{id:"php"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[e._v("#")]),e._v(" PHP")]),e._v(" "),r("p",[e._v("生产环境不启用 "),r("code",[e._v("xdebug")]),e._v(" 扩展")]),e._v(" "),r("h2",{attrs:{id:"phpmyadmin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin"}},[e._v("#")]),e._v(" phpMyAdmin")]),e._v(" "),r("p",[e._v("生产环境不启用该软件。")]),e._v(" "),r("h2",{attrs:{id:"docker-私有仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-私有仓库"}},[e._v("#")]),e._v(" Docker 私有仓库")]),e._v(" "),r("p",[e._v("Docker 镜像分发可以使用 Docker 私有仓库。")])])}),[],!1,null,null,null);t.default=v.exports}}]);