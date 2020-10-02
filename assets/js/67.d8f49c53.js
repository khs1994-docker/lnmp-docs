(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{385:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nginx-https-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-https-配置文件"}},[t._v("#")]),t._v(" NGINX HTTPS 配置文件")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cloud.tencent.com/act/cps/redirect?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("NGINX 主配置文件位于 "),a("code",[t._v("./config/etc/nginx/nginx.conf")]),t._v(" （一般情况无需修改）。")]),t._v(" "),a("p",[t._v("子配置文件位于 "),a("code",[t._v("./config/nginx/*.conf")])]),t._v(" "),a("p",[t._v("主要注意的是 "),a("RouterLink",{attrs:{to:"/nginx/path.html"}},[t._v("文件路径")]),t._v(" 问题。下面以 "),a("code",[t._v("https")]),t._v(" 配置为例进行讲解。")],1),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://github.com/khs1994-website/https")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("khs1994"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("                     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),t._v(" http2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("                www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("khs1994"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 「重要」 此处为容器内路径（注意不是本机路径）！ 本机 ./app/ 对应容器内 /app/")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RSA & ECC 双证书")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 「重要」 ssl 证书路径，此处为容器内路径（注意不是本机路径）！")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本机 ./config/nginx/ 对应容器内 /etc/nginx/conf.d/")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate")]),t._v("            conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("khs1994"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate_key")]),t._v("        conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("khs1994"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate")]),t._v("            conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("khs1994"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate_key")]),t._v("        conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("khs1994"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_session_cache")]),t._v("          shared"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SSL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_session_timeout")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_protocols")]),t._v("              TLSv1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" TLSv1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TLSv1.3")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_ciphers")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TLS13+AESGCM+AES128:TLS13+AESGCM+AES256:TLS13+CHACHA20:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_prefer_server_ciphers")]),t._v("  on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_stapling")]),t._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_stapling_verify")]),t._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query_string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 「重要」 php7 为 docker-lnmp.yml 中定义的服务名")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同理在 PHP 文件中连接其他容器请使用 服务名，严禁尝试使用 127.0.0.1 localhost。")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fastcgi_pass")]),t._v("   php7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),t._v("        fastcgi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("你也可以在 https://khs1994.gitee.io/server-side-tls/ssl-config-generator/ 便捷的生成 SSL 配置。")])])}),[],!1,null,null,null);s.default=e.exports}}]);