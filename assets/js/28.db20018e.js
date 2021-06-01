(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{382:function(a,s,t){"use strict";t.r(s);var e=t(42),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"phper-常用命令容器化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phper-常用命令容器化"}},[a._v("#")]),a._v(" PHPer 常用命令容器化")]),a._v(" "),t("blockquote",[t("p",[a._v("警告 某些命令（例如 lnmp-phpunit）在 Swarm mode 下 "),t("strong",[a._v("无法运行")]),a._v(" ，原因是不能人工的连接 Swarm mode 下的网络。")])]),a._v(" "),t("ul",[t("li",[t("code",[a._v("composer")]),a._v(" => "),t("code",[a._v("lnmp-composer")])]),a._v(" "),t("li",[t("code",[a._v("phpunit")]),a._v("  => "),t("code",[a._v("lnmp-phpunit")])]),a._v(" "),t("li",[t("code",[a._v("php CLI")]),a._v("  => "),t("code",[a._v("lnmp-php")])]),a._v(" "),t("li",[t("code",[a._v("laravel")]),a._v("  => "),t("code",[a._v("lnmp-laravel")])]),a._v(" "),t("li",[t("code",[a._v("php-cs-fixer")]),a._v(" => "),t("code",[a._v("lnmp-php-cs-fixer")])])]),a._v(" "),t("blockquote",[t("p",[a._v("为避免与原始命令冲突，命令加上了 "),t("code",[a._v("lnmp-")]),a._v(" 前缀")])]),a._v(" "),t("h2",{attrs:{id:"app-env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-env"}},[a._v("#")]),a._v(" APP_ENV")]),a._v(" "),t("p",[t("code",[a._v("APP_ENV")]),a._v(" 值为 "),t("code",[a._v("development")])]),a._v(" "),t("h2",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("p",[a._v("自行将下面示例中的 "),t("code",[a._v("/data/lnmp")]),a._v(" 替换为本项目实际路径。")]),a._v(" "),t("h4",{attrs:{id:"bash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bash"}},[a._v("#")]),a._v(" Bash")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" ~/.bash_profile\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LNMP_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/lnmp\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$LNMP_PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$LNMP_PATH")]),a._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v("\n")])])]),t("h4",{attrs:{id:"fish"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fish"}},[a._v("#")]),a._v(" fish")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" ~/.config/fish/config.fish\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" -gx LNMP_PATH /data/lnmp\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" -gx fish_user_paths "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$fish_user_paths")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$LNMP_PATH")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$LNMP_PATH")]),a._v("/bin\n")])])]),t("h4",{attrs:{id:"windows-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-10"}},[a._v("#")]),a._v(" Windows 10")]),a._v(" "),t("p",[a._v("打开 "),t("code",[a._v("PowerShell")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("environment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("::SetEnvironmentvariable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"LNMP_PATH"')]),a._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v('\\lnmp"')]),a._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"User"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("environment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("::SetEnvironmentvariable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Path"')]),a._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$env")]),a._v(":path;"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$env")]),a._v(":LNMP_PATH;"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$env")]),a._v(":LNMP_PATH\\windows;"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$env")]),a._v(":LNMP_PATH"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[a._v("\\b")]),a._v("in;"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$env")]),a._v(':LNMP_PATH\\wsl"')]),a._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"User"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("blockquote",[t("p",[a._v("如果 "),t("code",[a._v("PoswerShell")]),a._v(" 禁止执行脚本，请以管理员身份执行 "),t("code",[a._v("set-ExecutionPolicy Bypass")]),a._v(",之后输入 "),t("code",[a._v("Y")]),a._v(" 确认。"),t("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies",target:"_blank",rel:"noopener noreferrer"}},[a._v("说明"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" my_php_project\n\n$ lnmp-composer "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v("\n\n$ lnmp-phpunit "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v("\n\n$ lnmp-php "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v("\n\n$ lnmp-laravel "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v("\n")])])]),t("p",[a._v("当你遇到错误时，可以在前边加上 "),t("code",[a._v("$ debug=true lnmp-*")]),a._v("来进行调试，例如")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("debug")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true lnmp-composer\n")])])]),t("h3",{attrs:{id:"最佳实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[a._v("#")]),a._v(" 最佳实践")]),a._v(" "),t("h4",{attrs:{id:"新建-laravel-项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建-laravel-项目"}},[a._v("#")]),a._v(" 新建 "),t("code",[a._v("Laravel")]),a._v(" 项目")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" app\n\n$ lnmp-laravel new my_laravel_app\n")])])]),t("h4",{attrs:{id:"laravel-项目预览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#laravel-项目预览"}},[a._v("#")]),a._v(" "),t("code",[a._v("Laravel")]),a._v(" 项目预览")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" my_laravel_app\n\n$ lnmp-php -S "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:80 -t public\n")])])]),t("h4",{attrs:{id:"artisan-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#artisan-command"}},[a._v("#")]),a._v(" "),t("code",[a._v("artisan")]),a._v(" command")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" my_laravel_app\n\n$ lnmp-php artisan\n")])])]),t("h4",{attrs:{id:"安装-升级-composer-依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-升级-composer-依赖"}},[a._v("#")]),a._v(" 安装/升级 "),t("code",[a._v("composer")]),a._v(" 依赖")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" my_laravel_app\n\n$ lnmp-composer "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("install "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" update"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h4",{attrs:{id:"php-cs-fixer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php-cs-fixer"}},[a._v("#")]),a._v(" php-cs-fixer")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ lnmp-php-cs-fixer fix\n")])])]),t("h4",{attrs:{id:"npm-with-git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-with-git"}},[a._v("#")]),a._v(" npm with git")]),a._v(" "),t("p",[a._v("在 "),t("code",[a._v(".env")]),a._v(" 文件中新增变量，变量值为你自己的镜像（用户自行构建）。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LNMP_NODE_IMAGE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("your/node:git-alpine\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);