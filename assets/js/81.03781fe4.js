(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{433:function(e,t,v){"use strict";v.r(t);var a=v(42),_=Object(a.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),v("p",[e._v("假设在 "),v("code",[e._v("开发环境")]),e._v(" 中已经将 PHP 项目测试完毕，并推送到了 "),v("code",[e._v("git")]),e._v("，准备在生产环境部署。")]),e._v(" "),v("h2",{attrs:{id:"生产环境注意事项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生产环境注意事项"}},[e._v("#")]),e._v(" 生产环境注意事项")]),e._v(" "),v("p",[e._v("在生产环境中建议使用 "),v("code",[e._v("Docker Swarm mode")]),e._v(" 或 "),v("code",[e._v("k8s")]),e._v("。")]),e._v(" "),v("p",[e._v("本项目生产环境目标是超大规模 Docker 集群。")]),e._v(" "),v("h2",{attrs:{id:"单机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单机"}},[e._v("#")]),e._v(" 单机")]),e._v(" "),v("p",[e._v("单机环境中通过 "),v("code",[e._v("数据卷")]),e._v(" 将 "),v("code",[e._v("项目文件")]),e._v(" 挂载到容器中。")]),e._v(" "),v("p",[e._v("将 PHP 项目克隆到 "),v("code",[e._v("./app")]),e._v(" 目录下，之后使用 "),v("code",[e._v("lnmp-composer ...")]),e._v(" 安装依赖。")]),e._v(" "),v("p",[e._v("在 "),v("code",[e._v("./config/nginx/*.conf")]),e._v(" 增加 nginx 配置。")]),e._v(" "),v("p",[e._v("执行 "),v("code",[e._v("./lnmp-docker swarm-deploy")]),e._v("。")]),e._v(" "),v("h2",{attrs:{id:"集群"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#集群"}},[e._v("#")]),e._v(" 集群")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("直接将 PHP 项目打入镜像，以容器方式 ("),v("code",[e._v("Dockerfile")]),e._v(") 交付。可以参考 "),v("a",{attrs:{href:"https://github.com/khs1994-docker/laravel-demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Demo"),v("OutboundLink")],1)])]),e._v(" "),v("li",[v("p",[e._v("PHP 项目不打入镜像，运行 daemonset 保证每个节点都有代码文件。")])])]),e._v(" "),v("h2",{attrs:{id:"php"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[e._v("#")]),e._v(" PHP")]),e._v(" "),v("p",[e._v("生产环境不启用 "),v("code",[e._v("xdebug")]),e._v(" 扩展")]),e._v(" "),v("h2",{attrs:{id:"phpmyadmin"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin"}},[e._v("#")]),e._v(" phpMyAdmin")]),e._v(" "),v("p",[e._v("生产环境不启用该软件。")]),e._v(" "),v("h2",{attrs:{id:"docker-私有仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-私有仓库"}},[e._v("#")]),e._v(" Docker 私有仓库")]),e._v(" "),v("p",[e._v("Docker 镜像分发可以使用 Docker 私有仓库。")])])}),[],!1,null,null,null);t.default=_.exports}}]);