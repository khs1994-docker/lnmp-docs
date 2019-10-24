(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{192:function(t,e,_){"use strict";_.r(e);var s=_(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),_("p",[_("a",{attrs:{href:"https://cloud.tencent.com/redirect.php?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[_("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),_("OutboundLink")],1),t._v(" "),_("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[_("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),_("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),_("p",[t._v("下面详细介绍如何正确的自定义配置。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),_("p",[t._v("这两个软件的配置文件较多，详细说明一下：")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"软件配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#软件配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 软件配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("自定义软件配置是最重要的一项功能，为了方便本项目升级，严禁直接修改 "),e("code",[this._v("./config")]),this._v(" 下的原始配置文件。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原则","aria-hidden":"true"}},[this._v("#")]),this._v(" 原则")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[_("p",[t._v("一般情况下使用默认配置即可，如果你需要修改某些配置，请按照本教程正确的进行自定义配置。")])]),t._v(" "),_("li",[_("p",[t._v("以追加(子配置文件 "),_("strong",[t._v("重写")]),t._v(" 主配置文件、后边的 "),_("strong",[t._v("重写")]),t._v(" 前边的)方式进行配置")])]),t._v(" "),_("li",[_("p",[t._v("尽量一个软件一个配置文件")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"总体步骤（三步）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总体步骤（三步）","aria-hidden":"true"}},[this._v("#")]),this._v(" 总体步骤（三步）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("1.")]),this._v(" 进入配置文件所在目录 "),e("code",[this._v("./config/SOFT_NAME/")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[_("strong",[t._v("2.")]),t._v(" 复制示例配置文件，并改名为 "),_("code",[t._v("*.my.*")]),t._v("。（"),_("code",[t._v("my")]),t._v(" 只是标识符，你可以使用任意字符，例如 "),_("code",[t._v("self")]),t._v(" "),_("code",[t._v("username")]),t._v(" 等等）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("3.")]),this._v(" 修改 "),e("code",[this._v(".env")]),this._v(" 文件 "),e("code",[this._v("SOFT_NAME_CONF")]),this._v(" 值为文件名或目录名")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[this._v("#")]),this._v(" MySQL")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("1.")]),this._v(" 示例配置文件："),e("code",[this._v("./config/mysql/docker.cnf")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("2.")]),this._v(" 在示例配置文件夹内 "),e("code",[this._v("./config/mysql/")]),this._v(" 复制 "),e("code",[this._v("docker.cnf")]),this._v(" 为 "),e("code",[this._v("docker.my.cnf")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[_("strong",[t._v("3.")]),t._v(" 在 "),_("code",[t._v(".env")]),t._v(" 文件内修改 "),_("code",[t._v("LNMP_MYSQL_CONF")]),t._v(" 变量值为 "),_("code",[t._v("docker.my.cnf")]),t._v("(默认是注释掉的，如果你按照本文方法操作，直接取消注释即可，或者修改为你自己认为合适的文件名)。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"修改默认数据文件夹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改默认数据文件夹","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改默认数据文件夹")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("假设自定义文件夹为 "),e("code",[this._v("/var/lib/mysql-my")]),this._v(" (必须为绝对路径)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在 "),e("code",[this._v("docker.my.cnf")]),this._v(" 中增加如下配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("mysqld"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n\ndatadir         "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" /var/lib/mysql-my\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在 "),e("code",[this._v(".env")]),this._v(" 文件中修改 "),e("code",[this._v("LNMP_MYSQL_DATA=/var/lib/mysql-my")]),this._v(",之后启动即可。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("MariaDB 配置差不多，这里不再赘述。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mysql-自定义初始的-root-密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-自定义初始的-root-密码","aria-hidden":"true"}},[this._v("#")]),this._v(" MySQL 自定义初始的 ROOT 密码")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("1.")]),this._v(" 在 "),e("code",[this._v("./secrets/")]),this._v(" 新建 "),e("code",[this._v("*.txt")]),this._v(" 文件，并写入密码。例如 "),e("code",[this._v("db.my.txt")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("2.")]),this._v(" 在 "),e("code",[this._v(".env")]),this._v(" 文件中设置 "),e("code",[this._v("LNMP_DB_ROOT_PASSWORD_PATH")]),this._v(" 值为文件名，例如 "),e("code",[this._v("LNMP_DB_ROOT_PASSWORD_PATH=db.my.txt")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("如果原来启动过，要么销毁（数据卷）之后重新启动，要么手动进入命令行修改密码。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"nginx-httpd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-httpd","aria-hidden":"true"}},[this._v("#")]),this._v(" NGINX HTTPD")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("1.")]),this._v(" 分清 "),e("code",[this._v("主配置文件")]),this._v(" 和 "),e("code",[this._v("子配置文件")]),this._v("，本文假设你已经知道这两个概念，如果你实在不知道，请在本项目 GitHub 提出 "),e("code",[this._v("issue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("2.")]),this._v(" NGINX 主配置文件位于 "),e("code",[this._v("./config/etc/nginx/nginx.conf")]),this._v("，同理 HTTPD 主配置文件位于 "),e("code",[this._v("./config/etc/httpd/httpd.conf")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("3.")]),this._v(" 复制 "),e("code",[this._v("nginx.conf")]),this._v(" 为 "),e("code",[this._v("nginx.my.conf")]),this._v("，HTTPD 同理")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[_("strong",[t._v("4.")]),t._v(" 在 "),_("code",[t._v("./config")]),t._v(" 目录中新建 "),_("code",[t._v("nginx.my")]),t._v(" 文件夹，HTTPD 新建 "),_("code",[t._v("httpd.my")]),t._v(" 文件夹")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[_("strong",[t._v("5.")]),t._v(" 我们以后就在 "),_("code",[t._v("nginx.my")]),t._v(" 文件夹内新增 NGINX 子配置文件（请参照 "),_("code",[t._v("nginx")]),t._v(" 文件中的示例配置），HTTPD 同理。为了方便备份配置文件，可以在 "),_("code",[t._v("./config/nginx.my")]),t._v(" 文件夹中初始化一个 Git 仓库，通过 Git 管理配置文件。当你切换到另一个环境中，你可以很方便的通过 git clone url 快速恢复配置文件。")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[_("strong",[t._v("6.")]),t._v(" 修改 "),_("code",[t._v(".env")]),t._v(" 文件 "),_("code",[t._v("LNMP_NGINX_CONF=nginx.my.conf")]),t._v(" "),_("code",[t._v("LNMP_NGINX_CONF_D=nginx.my")]),t._v("，HTTPD 同理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"简单的自定义-php-ini-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单的自定义-php-ini-配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 简单的自定义 "),e("code",[this._v("php.ini")]),this._v(" 配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("编辑 "),e("code",[this._v("./config/php/docker-php.ini")]),this._v(" 文件。")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("blockquote",[_("p",[t._v("当你需要更改大量的 "),_("code",[t._v("php.ini")]),t._v(" 配置时，建议使用 "),_("code",[t._v("LNMP_PHP_INI")]),t._v(" 变量定义自己的 "),_("code",[t._v("php.ini")]),t._v(" 文件所在路径，这样就可以使用自己的 "),_("code",[t._v("php.ini")]),t._v(" 文件了。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("php.ini 支持系统变量 "),e("code",[this._v("key=${VAR}")]),this._v("，故可以通过设置系统变量来自定义配置")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"其他软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他软件","aria-hidden":"true"}},[this._v("#")]),this._v(" 其他软件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("不再赘述，如果你还是实在不知道该怎么正确的自定义配置，请在本项目 GitHub 提出 "),e("code",[this._v("issue")]),this._v("。")])}],!1,null,null,null);e.default=i.exports}}]);