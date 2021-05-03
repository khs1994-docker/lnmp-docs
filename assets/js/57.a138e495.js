(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{410:function(a,s,e){"use strict";e.r(s);var t=e(42),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"laravel-最佳实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel-最佳实践"}},[a._v("#")]),a._v(" Laravel 最佳实践")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://cloud.tencent.com/act/cps/redirect?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),e("OutboundLink")],1),a._v(" "),e("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"安装-laravel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-laravel"}},[a._v("#")]),a._v(" 安装 Laravel")]),a._v(" "),e("blockquote",[e("p",[a._v("国内使用 "),e("a",{attrs:{href:"https://laravel.com/docs/8.x/installation#installing-laravel",target:"_blank",rel:"noopener noreferrer"}},[a._v("laravel/installer 4.0 以下版本"),e("OutboundLink")],1),a._v(" 安装 Laravel 不会使用 composer 镜像，故安装十分缓慢。（这里做一提示，下面的命令封装的是 composer create-project 命令，laravel/installer 4.0 及以上会使用 composer 镜像）")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" app\n\n$ lnmp-laravel new laravel\n")])])]),e("p",[a._v("具体请查看 "),e("RouterLink",{attrs:{to:"/command.html"}},[a._v("这里")])],1),a._v(" "),e("h3",{attrs:{id:"laravel-版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel-版本"}},[a._v("#")]),a._v(" Laravel 版本")]),a._v(" "),e("p",[a._v("上面的命令会安装 Laravel 最新的主线版本（8.x），如果你要安装特定版本可以加上 "),e("strong",[a._v("版本号")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" app\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ lnmp-laravel new FOLDER VERSION")]),a._v("\n\n$ lnmp-laravel new laravel5.5 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.5")]),a._v("\n")])])]),e("p",[a._v("或者直接使用 "),e("code",[a._v("composer")]),a._v(" 安装")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" app\n\n$ lnmp-composer create-project laravel/laravel laravel5.5 "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"5.5.*"')]),a._v("\n")])])]),e("h2",{attrs:{id:"设置-laravel-env-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置-laravel-env-文件"}},[a._v("#")]),a._v(" 设置 Laravel .env 文件")]),a._v(" "),e("p",[a._v("正确配置服务的 "),e("code",[a._v("HOST")]),a._v("，填写 "),e("code",[a._v("127.0.0.1")]),a._v(" 将连接不到服务，具体原因不再赘述。")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_HOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mysql\n\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("REDIS_HOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("redis\n\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MEMCACHED_HOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("memcached\n")])])]),e("h2",{attrs:{id:"安装-laravel-ide-helper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-laravel-ide-helper"}},[a._v("#")]),a._v(" 安装 "),e("a",{attrs:{href:"https://github.com/barryvdh/laravel-ide-helper",target:"_blank",rel:"noopener noreferrer"}},[a._v("laravel-ide-helper"),e("OutboundLink")],1)]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ lnmp-composer require --dev barryvdh/laravel-ide-helper\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ lnmp-php artisan ide-helper:eloquent\n$ lnmp-php artisan ide-helper:generate\n$ lnmp-php artisan ide-helper:meta\n$ lnmp-php artisan ide-helper:models\n")])])]),e("p",[e("strong",[a._v(".gitignore")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# .gitignore")]),a._v("\n\n.phpstorm.meta.php\n_ide_helper.php\n\n.php_cs.cache\n")])])]),e("h2",{attrs:{id:"windows-运行-laravel-响应缓慢的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-运行-laravel-响应缓慢的问题"}},[a._v("#")]),a._v(" Windows 运行 Laravel 响应缓慢的问题")]),a._v(" "),e("ul",[e("li",[a._v("Docker Desktop 上 Docker 运行在虚拟机，项目文件位于 Windows")]),a._v(" "),e("li",[a._v("Docker WSL2 上 Docker 运行在 WSL2(仍然是虚拟机)，项目文件位于 Windows")])]),a._v(" "),e("p",[a._v("以上两种情况均为跨主机, 故存在性能问题。")]),a._v(" "),e("p",[e("strong",[a._v("有以下几种解决思路")]),a._v("：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("或者 "),e("code",[a._v("vendor")]),a._v(" 目录使用数据卷（数据卷存在于虚拟机中）。"),e("a",{attrs:{href:"https://code.visualstudio.com/docs/remote/containers-advanced#_improving-container-disk-performance",target:"_blank",rel:"noopener noreferrer"}},[a._v("vsCode"),e("OutboundLink")],1),a._v(" 的说明和笔者提出的方案原理大致相同")])]),a._v(" "),e("li",[e("p",[a._v("或者将项目文件夹放置于 WSL2，使用 "),e("strong",[a._v("vsCode remote WSL")]),a._v(" WSL 远程开发(推荐使用)")])])]),a._v(" "),e("blockquote",[e("p",[a._v("项目放置于 WSL2 也可以使用 PHPStorm，请参考 https://github.com/khs1994-docker/php-demo")])]),a._v(" "),e("p",[e("strong",[a._v("在 Docker 设置中启用 WSL2 集成")])]),a._v(" "),e("p",[e("code",[a._v("Resources")]),a._v(" -> "),e("code",[a._v("WSL INTEGRATION")]),a._v("-> "),e("code",[a._v("Enable integration with additional distros:")]),a._v(" -> "),e("code",[a._v("开启你所使用的 WSL2 （例如：Ubuntu）")])]),a._v(" "),e("p",[e("strong",[a._v("安装 vsCode 扩展")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ code --install-extension ms-vscode-remote.remote-wsl\n")])])]),e("p",[e("strong",[a._v("在 .env .env.ps1 中修改变量")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# .env")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APP_ROOT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/app\n")])])]),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# .env.ps1")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WSL2_DIST")]),a._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Ubuntu"')]),a._v("\n")])])]),e("p",[e("strong",[a._v("以上步骤仅需执行一次，后续开发从以下步骤开始")])]),a._v(" "),e("p",[e("strong",[a._v("启动 LNMP")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ ./lnmp-docker up\n")])])]),e("p",[e("strong",[a._v("打开 vsCode")])]),a._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打开 /app")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 适用于首次使用，暂无子目录，需要到 /app 中新建项目目录")]),a._v("\n$ lnmp"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("docker code\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打开 /app 子目录（e.g. laravel）")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ lnmp-docker code laravel")]),a._v("\n")])])]),e("p",[a._v("在 vsCode 中点击菜单栏 "),e("code",[a._v("查看")]),a._v(" -> "),e("code",[a._v("终端")])]),a._v(" "),e("p",[a._v("在出现的终端中执行命令，本例以添加 Laravel UI 组件为例：(请提前将本项目的 "),e("code",[a._v("bin")]),a._v(" 目录加入到 PATH)")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装 laravel 到 laravel 文件夹")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ lnmp-laravel new laravel")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 文件可能因为权限问题无法编辑，自行更改权限")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ wsl -d Ubuntu -u root -- chown -R 1000:1000 /app")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ wsl -d Ubuntu -u root -- chmod -R 777 /app/laravel/storage/app")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ wsl -d Ubuntu -u root -- chmod -R 777 /app/laravel/storage/logs")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ wsl -d Ubuntu -u root -- chmod -R 777 /app/laravel/storage/framework")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" laravel\n\n$ lnmp-composer require laravel/ui\n\n$ lnmp-php artisan ui vue --auth\nVue scaffolding installed successfully.\nPlease run "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"npm install && npm run dev"')]),a._v(" to compile your fresh scaffolding.\nAuthentication scaffolding generated successfully.\n\n$ lnmp-npm "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n\n$ lnmp-npm run dev\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打开 http://127.0.0.1/register 查看页面")]),a._v("\n")])])]),e("p",[a._v("附录：查看本项目的 "),e("code",[a._v("bin")]),a._v(" 目录在 WSL2 中的路径")]),a._v(" "),e("p",[a._v("在 Windows 终端中执行")]),a._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[a._v("$ cd ~"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("lnmp"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("bin\n\n$ wsl "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("d <WSL名称> "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" wslpath "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"'"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$PWD")]),a._v("'\"")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将结果追加到 WSL2 中的 PATH 环境变量中")]),a._v("\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("或者将项目文件夹放置于 WSL2，使用 "),e("strong",[a._v("vsCode remote container")]),a._v(" 容器远程开发(推荐使用)")])]),a._v(" "),e("p",[e("strong",[a._v("在 Docker 设置中启用 WSL2 集成")])]),a._v(" "),e("p",[e("code",[a._v("Resources")]),a._v(" -> "),e("code",[a._v("WSL INTEGRATION")]),a._v("-> "),e("code",[a._v("Enable integration with additional distros:")]),a._v(" -> "),e("code",[a._v("开启你所使用的 WSL2 （例如：Ubuntu）")])]),a._v(" "),e("p",[e("strong",[a._v("安装 vsCode 扩展")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ code --install-extension ms-vscode-remote.remote-containers\n")])])]),e("p",[e("strong",[a._v("在 "),e("code",[a._v(".env")]),a._v(" "),e("code",[a._v(".env.ps1")]),a._v(" 中修改变量")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# .env")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APP_ROOT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/app\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 增加 workspace 服务")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LNMP_SERVICES")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"nginx mysql php7 redis workspace"')]),a._v("\n")])])]),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# .env.ps1")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WSL2_DIST")]),a._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ubuntu"')]),a._v("\n")])])]),e("p",[e("strong",[a._v("以上步骤仅需执行一次，后续开发从以下步骤开始")])]),a._v(" "),e("p",[e("strong",[a._v("启动 LNMP")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ ./lnmp-docker up\n")])])]),e("p",[e("strong",[a._v("打开 vsCode")])]),a._v(" "),e("p",[a._v("左下角 "),e("code",[a._v("打开远程窗口")]),a._v(" -> "),e("code",[a._v("Remote-Containers: Attach to Running Container...")]),a._v(" -> 选择 "),e("code",[a._v("lnmp_workspace_1")]),a._v(" 容器 -> 出现新窗口 -> 左面选择打开文件夹 -> 输入 "),e("code",[a._v("/app")])]),a._v(" "),e("p",[a._v("在 vsCode 中点击菜单栏 "),e("code",[a._v("查看")]),a._v(" -> "),e("code",[a._v("终端")])]),a._v(" "),e("p",[a._v("在出现的终端中执行命令，本例以添加 Laravel UI 组件为例：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装 laravel 到 laravel 文件夹")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ composer create-project --prefer-dist laravel/laravel laravel")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 文件可能因为权限问题无法编辑，自行更改权限")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ wsl -d Ubuntu -u root -- chown -R 1000:1000 /app")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ wsl -d Ubuntu -u root -- chmod -R 777 /app/laravel/storage/app")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ wsl -d Ubuntu -u root -- chmod -R 777 /app/laravel/storage/logs")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ wsl -d Ubuntu -u root -- chmod -R 777 /app/laravel/storage/framework")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" laravel\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" require laravel/ui\n\n$ php artisan ui vue --auth\nVue scaffolding installed successfully.\nPlease run "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"npm install && npm run dev"')]),a._v(" to compile your fresh scaffolding.\nAuthentication scaffolding generated successfully.\n")])])]),e("p",[a._v("在 Windows 终端中执行以下命令：")]),a._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[a._v("$ lnmp"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("docker code"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("run "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("w "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("app"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("laravel npm install\n\n$ lnmp"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("docker code"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("run "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("w "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("app"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("laravel npm run dev\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打开 http://127.0.0.1/register 查看页面")]),a._v("\n")])])]),e("h2",{attrs:{id:"php-相关的-vscode-扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php-相关的-vscode-扩展"}},[a._v("#")]),a._v(" PHP 相关的 vsCode 扩展")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("felixfbecker.php-debug")])]),a._v(" "),e("li",[a._v("更多扩展请查看 https://github.com/khs1994-docker/lnmp/blob/master/.devcontainer/devcontainer.json "),e("strong",[a._v("extensions")]),a._v(" 项")])]),a._v(" "),e("h2",{attrs:{id:"运行-laravel-队列-queue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行-laravel-队列-queue"}},[a._v("#")]),a._v(" 运行 Laravel 队列(Queue)")]),a._v(" "),e("ul",[e("li",[a._v("选择1：使用 "),e("strong",[a._v("宿主机")]),a._v(" 的系统级的守护程序（systemd 等）来运行以下命令。具体请查看 "),e("RouterLink",{attrs:{to:"/systemd.html"}},[a._v("systemd")])],1)]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ lnmp-docker php7-cli php /app/laravel/artisan queue:work --tries"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n")])])]),e("ul",[e("li",[a._v("选择2：参考 "),e("code",[a._v("config/s6")]),a._v(" 或 "),e("code",[a._v("config/supervisord")]),a._v(" 在一个容器中同时运行多个服务 (两钟方案中均包含了 Laravel 队列等示例)。")])]),a._v(" "),e("h2",{attrs:{id:"运行-laravel-调度器-schedule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行-laravel-调度器-schedule"}},[a._v("#")]),a._v(" 运行 Laravel 调度器(Schedule)")]),a._v(" "),e("p",[a._v("参考上一节队列的说明。")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ lnmp-docker php7-cli php /app/laravel/artisan schedule:run\n")])])]),e("h2",{attrs:{id:"运行-laravel-horizon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行-laravel-horizon"}},[a._v("#")]),a._v(" 运行 Laravel horizon")]),a._v(" "),e("ul",[e("li",[a._v("https://laravel.com/docs/8.x/horizon")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ lnmp-composer require laravel/horizon\n\n$ lnmp-php artisan horizon:install\n")])])]),e("p",[e("strong",[a._v("配置")])]),a._v(" "),e("p",[e("code",[a._v("config/horizon.php")]),a._v(" "),e("code",[a._v("environments")]),a._v(" 数组必须包含当前 Laravel 运行的环境。")]),a._v(" "),e("p",[e("strong",[a._v("跳过验证")])]),a._v(" "),e("p",[e("code",[a._v("app/Providers/HorizonServiceProvider.php")])]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("gate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    Gate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("define")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'viewHorizon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$user")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean constant"}},[a._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("in_array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[a._v("email")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'taylor@laravel.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("参考上一节队列的说明。")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ lnmp-docker php7-cli php /app/laravel/artisan horizon\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);