(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{252:function(a,s,e){"use strict";e.r(s);var t=e(0),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"laravel-最佳实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel-最佳实践"}},[a._v("#")]),a._v(" Laravel 最佳实践")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://cloud.tencent.com/redirect.php?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),e("OutboundLink")],1),a._v(" "),e("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"安装-laravel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-laravel"}},[a._v("#")]),a._v(" 安装 Laravel")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" app\n\n$ lnmp-laravel new laravel\n")])])]),e("p",[a._v("具体请查看 "),e("RouterLink",{attrs:{to:"/command.html"}},[a._v("这里")])],1),a._v(" "),e("h3",{attrs:{id:"laravel-版本问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel-版本问题"}},[a._v("#")]),a._v(" Laravel 版本问题")]),a._v(" "),e("p",[a._v("由于本项目的 PHP 镜像内置的是 Laravel 安装器，而安装器只能安装最新版本。")]),a._v(" "),e("p",[a._v("所以如果你想要安装特定版本（例如 "),e("code",[a._v("5.5.x")]),a._v("）请使用 "),e("RouterLink",{attrs:{to:"/command.html"}},[e("code",[a._v("lnmp-laravel-by-composer")])]),a._v(" 安装。")],1),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" app\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ lnmp-laravel-by-composer new FOLDER VERSION")]),a._v("\n\n$ lnmp-laravel-by-composer new laravel5.5 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.5")]),a._v("\n")])])]),e("p",[a._v("或者直接使用 "),e("code",[a._v("composer")]),a._v(" 安装")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" app\n\n$ lnmp-composer create-project laravel/laravel laravel5.5 "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"5.5.*"')]),a._v("\n")])])]),e("h2",{attrs:{id:"设置-laravel-env-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置-laravel-env-文件"}},[a._v("#")]),a._v(" 设置 Laravel .env 文件")]),a._v(" "),e("p",[a._v("正确配置服务的 "),e("code",[a._v("HOST")]),a._v("，填写 "),e("code",[a._v("127.0.0.1")]),a._v(" 将连接不到服务，具体原因不再赘述。")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_HOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mysql\n\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("REDIS_HOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("redis\n\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MEMCACHED_HOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("memcached\n")])])]),e("h2",{attrs:{id:"windows-运行-laravel-响应缓慢的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-运行-laravel-响应缓慢的问题"}},[a._v("#")]),a._v(" Windows 运行 Laravel 响应缓慢的问题")]),a._v(" "),e("ul",[e("li",[a._v("Docker Desktop 上 Docker 运行在虚拟机，项目文件位于 Windows")]),a._v(" "),e("li",[a._v("Docker WSL2 上 Docker 运行在 WSL2(仍然是虚拟机)，项目文件位于 Windows")])]),a._v(" "),e("p",[a._v("以上两种情况均为跨主机, 故存在性能问题。")]),a._v(" "),e("p",[a._v("解决思路："),e("code",[a._v("vendor")]),a._v(" 目录使用数据卷（数据卷存在于虚拟机中）。"),e("a",{attrs:{href:"https://code.visualstudio.com/docs/remote/containers-advanced#_improving-container-disk-performance",target:"_blank",rel:"noopener noreferrer"}},[a._v("vsCode"),e("OutboundLink")],1),a._v(" 的说明和笔者提出的方案原理大致相同")]),a._v(" "),e("p",[a._v("编辑 "),e("code",[a._v("docker-lnmp.include.yml")]),a._v(" 文件，重写默认的 "),e("code",[a._v("php")]),a._v(" "),e("code",[a._v("composer")]),a._v(" 配置。")]),a._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"3.7"')]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这里增加的条目会重写本项目的默认配置")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("php7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token important"}},[a._v("&php7")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vendor 目录使用数据卷")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 假设 laravel 目录位于 `./app/laravel/`")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" volume\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("source")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" laravel_vendor\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("target")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /app/laravel/vendor\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 假设还有一个 Laravel 应用位于 `./app/laravel2` 与 `./app/laravel` 版本一致（依赖一致），那么可以共用 vendor 数据卷")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" volume\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("source")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" laravel_vendor\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("target")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /app/laravel2/vendor\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 假设还有一个 laravel 5.5 应用位于 `./app/laravel5.5`，由于与 `./app/laravel` 版本或依赖不一致，必须使用新的数据卷")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" volume\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("source")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" laravel_55_vendor\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("target")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /app/laravel5.5/vendor\n\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("composer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("<<")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token important"}},[a._v("*php7")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 定义数据卷")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("laravel_vendor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("laravel_57_vendor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n")])])]),e("p",[a._v("修改之后启动")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ lnmp-docker up\n")])])]),e("p",[a._v("在容器中运行 composer ，安装依赖")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ lnmp-docker composer LARAVEL_ROOT COMPOSER_COMMAND")]),a._v("\n$ lnmp-docker composer /app/laravel "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),e("p",[a._v("以后若在 "),e("code",[a._v("composer.json")]),a._v(" 中添加依赖，重复上述步骤。")]),a._v(" "),e("h2",{attrs:{id:"运行-laravel-队列-queue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行-laravel-队列-queue"}},[a._v("#")]),a._v(" 运行 Laravel 队列(Queue)")]),a._v(" "),e("p",[a._v("使用 "),e("strong",[a._v("宿主机")]),a._v(" 的系统级的守护程序（systemd 等）来运行以下命令。具体请查看 "),e("RouterLink",{attrs:{to:"/systemd.html"}},[a._v("systemd")])],1),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ lnmp-docker php7-cli php /app/laravel/artisan queue:work --tries"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n")])])]),e("h2",{attrs:{id:"运行-laravel-调度器-schedule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行-laravel-调度器-schedule"}},[a._v("#")]),a._v(" 运行 Laravel 调度器(Schedule)")]),a._v(" "),e("p",[a._v("使用 "),e("strong",[a._v("宿主机")]),a._v(" 的系统级的计划任务（systemd、crontab 等）执行以下命令即可")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ lnmp-docker php7-cli php /app/laravel/artisan schedule:run\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);