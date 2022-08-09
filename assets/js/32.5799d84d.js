(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{386:function(_,v,t){"use strict";t.r(v);var n=t(42),e=Object(n.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"软件配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件配置"}},[_._v("#")]),_._v(" 软件配置")]),_._v(" "),t("p",[_._v("自定义软件配置是最重要的一项功能，为了方便本项目升级，严禁直接修改 "),t("code",[_._v("./config")]),_._v(" 下的原始配置文件。")]),_._v(" "),t("p",[_._v("下面详细介绍如何正确的自定义配置。")]),_._v(" "),t("h2",{attrs:{id:"原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原则"}},[_._v("#")]),_._v(" 原则")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("以追加(子配置文件 "),t("strong",[_._v("重写")]),_._v(" 主配置文件、后边的 "),t("strong",[_._v("重写")]),_._v(" 前边的)方式进行配置")])]),_._v(" "),t("li",[t("p",[_._v("尽量一个软件一个配置文件")])])]),_._v(" "),t("h2",{attrs:{id:"总体步骤-三步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总体步骤-三步"}},[_._v("#")]),_._v(" 总体步骤（三步）")]),_._v(" "),t("p",[t("strong",[_._v("1.")]),_._v(" 进入配置文件所在目录 "),t("code",[_._v("./config/SOFT_NAME/")])]),_._v(" "),t("p",[t("strong",[_._v("2.")]),_._v(" 复制示例配置文件，并改名为 "),t("code",[_._v("*.my.*")]),_._v("。（"),t("code",[_._v("my")]),_._v(" 只是标识符，你可以使用任意字符，例如 "),t("code",[_._v("self")]),_._v(" "),t("code",[_._v("username")]),_._v(" 等等）。")]),_._v(" "),t("p",[t("strong",[_._v("3.")]),_._v(" 修改 "),t("code",[_._v(".env")]),_._v(" 文件 "),t("code",[_._v("SOFT_NAME_CONF")]),_._v(" 值为文件名或目录名")]),_._v(" "),t("h2",{attrs:{id:"nginx-httpd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-httpd"}},[_._v("#")]),_._v(" NGINX HTTPD")]),_._v(" "),t("p",[_._v("这两个软件的配置文件较多，详细说明一下：")]),_._v(" "),t("p",[t("strong",[_._v("1.")]),_._v(" 分清 "),t("code",[_._v("主配置文件")]),_._v(" 和 "),t("code",[_._v("子配置文件")]),_._v("，本文假设你已经知道这两个概念，如果你实在不知道，请在本项目 GitHub 提出 "),t("code",[_._v("issue")])]),_._v(" "),t("p",[t("strong",[_._v("2.")]),_._v(" NGINX 主配置文件位于 "),t("code",[_._v("./config/etc/nginx/nginx.conf")]),_._v("，同理 HTTPD 主配置文件位于 "),t("code",[_._v("./config/etc/httpd/httpd.conf")])]),_._v(" "),t("p",[t("strong",[_._v("3.")]),_._v(" 复制 "),t("code",[_._v("nginx.conf")]),_._v(" 为 "),t("code",[_._v("nginx.my.conf")]),_._v("，HTTPD 同理")]),_._v(" "),t("p",[t("strong",[_._v("4.")]),_._v(" 在 "),t("code",[_._v("./config")]),_._v(" 目录中新建 "),t("code",[_._v("nginx.my")]),_._v(" 文件夹，HTTPD 新建 "),t("code",[_._v("httpd.my")]),_._v(" 文件夹")]),_._v(" "),t("p",[t("strong",[_._v("5.")]),_._v(" 我们以后就在 "),t("code",[_._v("nginx.my")]),_._v(" 文件夹内新增 NGINX 子配置文件（请参照 "),t("code",[_._v("nginx")]),_._v(" 文件中的示例配置），HTTPD 同理。为了方便备份配置文件，可以在 "),t("code",[_._v("./config/nginx.my")]),_._v(" 文件夹中初始化一个 Git 仓库，通过 Git 管理配置文件。当你切换到另一个环境中，你可以很方便的通过 git clone url 快速恢复配置文件。")]),_._v(" "),t("p",[t("strong",[_._v("6.")]),_._v(" 修改 "),t("code",[_._v(".env")]),_._v(" 文件 "),t("code",[_._v("LNMP_NGINX_CONF=nginx.my.conf")]),_._v(" "),t("code",[_._v("LNMP_NGINX_CONF_D=nginx.my")]),_._v("，HTTPD 同理")]),_._v(" "),t("h2",{attrs:{id:"php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[_._v("#")]),_._v(" PHP")]),_._v(" "),t("h3",{attrs:{id:"简单的自定义-php-ini-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单的自定义-php-ini-配置"}},[_._v("#")]),_._v(" 简单的自定义 "),t("code",[_._v("php.ini")]),_._v(" 配置")]),_._v(" "),t("p",[_._v("编辑 "),t("code",[_._v("./config/php/docker-php.ini")]),_._v(" 文件。")]),_._v(" "),t("blockquote",[t("p",[_._v("当你需要更改大量的 "),t("code",[_._v("php.ini")]),_._v(" 配置时，请编辑 "),t("code",[_._v("./config/php/php.ini")])])]),_._v(" "),t("blockquote",[t("p",[_._v("php.ini 支持系统变量 "),t("code",[_._v("key=${VAR}")]),_._v("，故可以通过设置系统变量来自定义配置")])]),_._v(" "),t("h2",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[_._v("#")]),_._v(" MySQL")]),_._v(" "),t("ul",[t("li",[_._v("在 "),t("code",[_._v("./config/mysql/conf.d/my.cnf")]),_._v(" 文件中增加配置项即可")])]),_._v(" "),t("h2",{attrs:{id:"其他软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他软件"}},[_._v("#")]),_._v(" 其他软件")]),_._v(" "),t("p",[_._v("不再赘述，如果你还是实在不知道该怎么正确的自定义配置，请在本项目 GitHub 提出 "),t("code",[_._v("issue")]),_._v("。")])])}),[],!1,null,null,null);v.default=e.exports}}]);