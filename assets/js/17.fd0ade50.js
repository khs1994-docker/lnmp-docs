(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{218:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"命令行工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行工具"}},[e._v("#")]),e._v(" 命令行工具")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://cloud.tencent.com/redirect.php?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("为避免输入过多的命令，本项目提供了 "),a("strong",[e._v("命令行")]),e._v(" 工具 "),a("code",[e._v("lnmp-docker")]),e._v(" 来简化操作：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("各种场景和架构中一键启动")])]),e._v(" "),a("li",[a("p",[e._v("便捷生成 "),a("code",[e._v("NGINX")]),e._v(" "),a("code",[e._v("APACHE")]),e._v(" 配置文件")])])]),e._v(" "),a("h2",{attrs:{id:"尽量兼容原始命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尽量兼容原始命令"}},[e._v("#")]),e._v(" 尽量兼容原始命令")]),e._v(" "),a("p",[e._v("例如 "),a("code",[e._v("lnmp-docker up | down")]),e._v(" 对应着 "),a("code",[e._v("docker-compose up | down")])]),e._v(" "),a("p",[a("code",[e._v("lnmp-k8s create | delete")]),e._v(" 对应着 "),a("code",[e._v("kubectl create | delete")])]),e._v(" "),a("h2",{attrs:{id:"自定义-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义-cli"}},[e._v("#")]),e._v(" 自定义 CLI")]),e._v(" "),a("p",[e._v("可以在 "),a("code",[e._v("lnmp-docker-custom-script")]),e._v(" 或 "),a("code",[e._v("lnmp-docker-custom-script.ps1")]),e._v(" (Windows) 中编写自定义脚本。")]),e._v(" "),a("p",[a("strong",[e._v("例如：")]),e._v(" 你需要在执行 "),a("code",[e._v("lnmp-docker up")]),e._v(" 命令后执行一些操作那么可以编写 "),a("code",[e._v("__lnmp_custom_up")]),e._v(" 函数。")]),e._v(" "),a("h2",{attrs:{id:"命令行补全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行补全"}},[e._v("#")]),e._v(" 命令行补全")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://cloud.tencent.com/redirect.php?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("设置环境变量 "),a("code",[e._v("LNMP_PATH")]),e._v(" 为本项目的绝对路径(下面以 "),a("code",[e._v("/data/lnmp")]),e._v(" 为例，实际请替换为你自己的路径)，这样你就可以在任意目录使用本项目的 CLI。")]),e._v(" "),a("h3",{attrs:{id:"_1-bash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-bash"}},[e._v("#")]),e._v(" 1. Bash")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vi")]),e._v(" ~/.bash_profile\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LNMP_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/data/lnmp\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$LNMP_PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$LNMP_PATH")]),e._v("/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PATH")]),e._v("\n")])])]),a("h4",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[e._v("#")]),e._v(" Linux")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$LNMP_PATH")]),e._v("/cli/completion/bash/lnmp-docker /etc/bash_completion.d/lnmp-docker\n")])])]),a("h4",{attrs:{id:"macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[e._v("#")]),e._v(" macOS")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$LNMP_PATH")]),e._v("/cli/completion/bash/lnmp-docker /usr/local/etc/bash_completion.d/lnmp-docker\n")])])]),a("h3",{attrs:{id:"_2-fish"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-fish"}},[e._v("#")]),e._v(" 2. fish")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" -Ux LNMP_PATH /data/lnmp\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$LNMP_PATH")]),e._v("/cli/completion/fish/lnmp-docker.fish ~/.config/fish/completions/\n")])])]),a("blockquote",[a("p",[e._v("删除环境变量 "),a("code",[e._v("$ set -Ue LNMP_PATH")])])]),e._v(" "),a("h3",{attrs:{id:"_3-zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-zsh"}},[e._v("#")]),e._v(" 3. zsh")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vi")]),e._v(" ~/.zshrc\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LNMP_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/data/lnmp\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$LNMP_PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$LNMP_PATH")]),e._v("/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PATH")]),e._v("\n")])])]),a("h2",{attrs:{id:"原始命令详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原始命令详解"}},[e._v("#")]),e._v(" 原始命令详解")]),e._v(" "),a("h3",{attrs:{id:"初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[e._v("#")]),e._v(" 初始化")]),e._v(" "),a("p",[e._v("请查看 "),a("RouterLink",{attrs:{to:"/init.html"}},[e._v("项目初始化过程")]),e._v("。")],1),e._v(" "),a("h3",{attrs:{id:"docker-compose-原始命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-原始命令"}},[e._v("#")]),e._v(" docker-compose 原始命令")]),e._v(" "),a("p",[e._v("使用 "),a("code",[e._v("docker-compose")]),e._v(" 来启动、停止、销毁容器的参数分别是 "),a("code",[e._v("up -d")]),e._v(" "),a("code",[e._v("stop")]),e._v(" "),a("code",[e._v("down")]),e._v("，通过 "),a("code",[e._v("-f")]),e._v(" 来加载 "),a("code",[e._v("docker-compose.yml")]),e._v(" (可以任意命名)，本项目的 CLI 就是对以上一些命令的封装。")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("场景")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("CLI")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("原始命令")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("开发环境(使用拉取的镜像)")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("$ ./lnmp-docker up")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("docker-compose -f docker-lnmp.yml -f docker-lnmp.override.yml up -d")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("开发环境(使用构建的镜像)")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("$ ./lnmp-docker build")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("docker-compose -f docker-lnmp.yml -f docker-lnmp.build.yml up -d")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("生产环境")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("$ ./lnmp-docker swarm-deploy")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("docker stack -c docker-production.yml lnmp")])])])])]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("docker-compose.override.yaml")]),e._v(" 是为了重写 "),a("code",[e._v("docker-compose.yaml")]),e._v("，执行 "),a("code",[e._v("docker-compose up -d")]),e._v(" 会默认加载该文件。")])]),e._v(" "),a("p",[e._v("调试参数配置时请把 "),a("code",[e._v("up -d")]),e._v(" 替换为 "),a("code",[e._v("config")]),e._v(" 即可。")]),e._v(" "),a("h3",{attrs:{id:"使用-docker-compose-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-compose-命令"}},[e._v("#")]),e._v(" 使用 docker-compose 命令")]),e._v(" "),a("blockquote",[a("p",[e._v("我就是不想使用你提供的 "),a("code",[e._v("lnmp-docker")]),e._v(" "),a("code",[e._v("CLI")]),e._v("，我就要使用 "),a("code",[e._v("docker-compose")]),e._v(" 命令，怎们办？")])]),e._v(" "),a("p",[e._v("本项目支持生成标准的 "),a("code",[e._v("docker-compose.yml")]),e._v(" 文件，执行以下命令即可。")]),e._v(" "),a("p",[a("strong",[e._v("注意: 每次修改 .env 文件，必须重新执行此命令")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ./lnmp-docker config "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" docker-compose.yml\n")])])]),a("p",[e._v("之后就可以使用 "),a("code",[e._v("docker-compose")]),e._v(" 命令执行熟悉的各种命令")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker-compose up -d "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("./lnmp-docker services"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n\n$ docker-compose down\n")])])]),a("h3",{attrs:{id:"根据环境的不同使用不同的-env-lnmp-env-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据环境的不同使用不同的-env-lnmp-env-文件"}},[e._v("#")]),e._v(" 根据环境的不同使用不同的 "),a("code",[e._v(".env.${LNMP_ENV}")]),e._v(" 文件")]),e._v(" "),a("blockquote",[a("p",[e._v("原理：使用 compose 1.25.0 新增的 "),a("code",[e._v("--env-file PATH")]),e._v(" 选项")])]),e._v(" "),a("p",[e._v("假设你需要在 "),a("code",[e._v("development（开发）")]),e._v(" "),a("code",[e._v("production（生产）")]),e._v(" 两个环境中使用本项目")]),e._v(" "),a("p",[e._v("那么在 "),a("code",[e._v("development")]),e._v(" 环境中，新增 "),a("code",[e._v(".env.development")]),e._v(" 文件（内容参照 "),a("code",[e._v(".env.example")]),e._v("）,并设置环境变量 "),a("code",[e._v("LNMP_ENV=development")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LNMP_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("development\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# windows powershell")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# $env:LNMP_ENV="development"')]),e._v("\n\n$ ./lnmp-docker\n")])])]),a("p",[a("code",[e._v("production")]),e._v(" 环境同理，不再赘述。")]),e._v(" "),a("blockquote",[a("p",[e._v("注意，本项目不会自动生成 "),a("code",[e._v(".env.${LNMP_ENV}")]),e._v(" 文件，如果找不到 "),a("code",[e._v(".env.${LNMP_ENV}")]),e._v(" 文件，将使用 "),a("code",[e._v(".env")]),e._v(" 文件。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);