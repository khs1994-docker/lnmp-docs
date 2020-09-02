(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{399:function(s,t,a){"use strict";a.r(t);var e=a(33),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"supervisord"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supervisord"}},[s._v("#")]),s._v(" Supervisord")]),s._v(" "),a("ul",[a("li",[s._v("http://supervisord.org")])]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v(".env")]),s._v(" 文件中将 "),a("code",[s._v("supervisord")]),s._v(" 包含进来。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LNMP_SERVICES")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx mysql php7 redis supervisord"')]),s._v("\n")])])]),a("p",[s._v("配置文件位于 "),a("code",[s._v("config/supervisord/supervisord.ini")]),s._v("。")]),s._v(" "),a("p",[s._v("启动")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ lnmp-docker up\n")])])]),a("h2",{attrs:{id:"宿主机使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宿主机使用"}},[s._v("#")]),s._v(" 宿主机使用")]),s._v(" "),a("p",[a("code",[s._v("supervisor")]),s._v(" 为 C(supervisorctl)/S(supervisord) 架构")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ sudo apt install python3 python3-pip")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" supervisor\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /etc/supervisor.d\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 子配置文件 /etc/supervisor.d/*.ini")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成默认的配置文件")]),s._v("\n$ echo_supervisord_conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/supervisord.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 调整 /etc/supervisord.conf 配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加入以下内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("include"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nfiles "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /etc/supervisor.d/*.ini\n")])])]),a("p",[a("strong",[s._v("启动服务端")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" supervisord -u root -c /etc/supervisord.conf\n")])])]),a("p",[a("strong",[s._v("关闭服务端")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" supervisorctl "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[s._v("https://blog.csdn.net/zyz511919766/article/details/43967793")])])])}),[],!1,null,null,null);t.default=r.exports}}]);