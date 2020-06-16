(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{388:function(t,s,n){"use strict";n.r(s);var a=n(33),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"使用-eol-的-php-版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-eol-的-php-版本"}},[t._v("#")]),t._v(" 使用 EOL 的 PHP 版本")]),t._v(" "),n("p",[n("strong",[t._v("1. 在 "),n("code",[t._v("docker-lnmp.include.yml")]),t._v(" 文件中增加以下内容，具体请查看 "),n("RouterLink",{attrs:{to:"/custom.html"}},[t._v("自定义")])],1)]),t._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("depends_on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" php5\n\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("php5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("<<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("*default-common")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("LNMP_RESTART"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("always"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env_file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./cli/timezone.env\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("context")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./dockerfile/php/\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 支持 5.6.37 -- 5.6.40 其他版本请自行构建")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"khs1994/php:5.6.37-fpm-alpine"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("APP_ROOT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("./app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("LNMP_PHP_PATH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("/app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("cached\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# fpm config")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./config/php5/$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("LNMP_PHP_FPM_CONF"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("zz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docker.conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/local/etc/php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fpm.d/zz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docker.conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cached\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# php.ini")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./config/php5/$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("LNMP_PHP_INI"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("php.development.ini"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/local/etc/php/php.ini"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cached\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# php.ini override")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./config/php5/$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("LNMP_PHP_EXTRA_INI"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("php.ini"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/local/etc/php/conf.d/docker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("php.ini"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cached\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# log,etc")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./log/php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/log/php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("delegated\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./log/supervisord.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/log/supervisord.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("delegated\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./log/supervisord"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/log/supervisord"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("delegated\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" volume\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zoneinfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /usr/share/zoneinfo\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volume")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nocopy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" frontend\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" backend\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("expose")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9000"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fpm "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("R "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("F\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# command: php-fpm -F")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" LNMP_DOCKER_VERSION=$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("LNMP_DOCKER_VERSION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("v19.03"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" PHP_EOL VERSION\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" APP_ENV=development\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" LNMP_XDEBUG_REMOTE_HOST=$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("LNMP_XDEBUG_REMOTE_HOST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("192.168.199.100"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" LNMP_XDEBUG_REMOTE_PORT=$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("LNMP_XDEBUG_REMOTE_PORT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("-9001")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" LNMP_OPCACHE_ENABLE=$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("LNMP_OPCACHE_ENABLE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("-1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("2. 编辑 "),n("code",[t._v(".env")]),t._v(" 文件，在 "),n("code",[t._v("LNMP_SERVICES")]),t._v(" 变量中增加软件名 "),n("code",[t._v("php5")])])]),t._v(" "),n("div",{staticClass:"language-diff extra-class"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v('- LNMP_SERVICES="nginx mysql php7 redis phpmyadmin" # 默认配置\n')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('+ LNMP_SERVICES="nginx mysql php7 redis phpmyadmin php5" # 增加 php5\n')])])])]),n("p",[n("strong",[t._v("3. 新建 "),n("code",[t._v("config/php5")]),t._v(" 文件夹")])]),t._v(" "),n("p",[t._v("参照 "),n("code",[t._v("config/php")]),t._v(" 文件夹自行增加以下文件")]),t._v(" "),n("ul",[n("li",[n("ol",[n("li",[n("code",[t._v("zz-docker.conf")]),t._v(" PHP-FPM 子配置文件")])])])]),t._v(" "),n("div",{staticClass:"language-conf extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('[global]\ndaemonize = no\nerror_log = /var/log/php/php-fpm-error.log\n[www]\nlisten = 9000\n\nuser = www-data\ngroup = www-data\n\naccess.format = "%R - %u %t \\"%m %r\\" %s"\naccess.log = /var/log/php/php-fpm-access.log\n')])])]),n("ul",[n("li",[n("ol",{attrs:{start:"2"}},[n("li",[n("code",[t._v("php.ini")]),t._v(" PHP 主配置文件 "),n("a",{attrs:{href:"https://github.com/php/php-src/blob/PHP-5.6/php.ini-development",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),n("OutboundLink")],1)])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"3"}},[n("li",[n("code",[t._v("docker-php.ini")]),t._v(" PHP 子配置文件 (从 "),n("code",[t._v("config/php/docker-php.ini.example")]),t._v(" 中复制)")])])])]),t._v(" "),n("p",[t._v("提示：php7.1（包含）及以下版本 配置扩展必须加扩展名 "),n("code",[t._v(".so")])]),t._v(" "),n("div",{staticClass:"language-diff extra-class"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[t._v("# 普通扩展\n"),n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v("- extension=xxx\n")]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+ extension=xxx.so\n")]),t._v("\n# zend 扩展\n"),n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v("- zend_extension=xdebug\n")]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+ zend_extension=xdebug.so\n")])])])]),n("p",[n("strong",[t._v("4. 配置 nginx 使用 php5")])]),t._v(" "),n("div",{staticClass:"language-conf extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("location ~ .*\\.php(\\/.*)*$ {\n  # fastcgi_pass   php7:9000;\n  fastcgi_pass   php5:9000;\n  include        fastcgi.conf;\n}\n")])])]),n("p",[n("strong",[t._v("5. 启动")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ ./lnmp-docker up\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);