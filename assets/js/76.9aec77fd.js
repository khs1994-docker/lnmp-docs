(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{393:function(t,e,s){"use strict";s.r(e);var r=s(33),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"docker-registry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-registry"}},[t._v("#")]),t._v(" Docker Registry")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/act/cps/redirect?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("参考 "),s("RouterLink",{attrs:{to:"/lrew.html"}},[t._v("LREW")]),t._v(" 启用 "),s("code",[t._v("registry")]),t._v("。")],1),t._v(" "),s("p",[t._v("笔者以 "),s("code",[t._v("docker.t.khs1994.com")]),t._v(" 为 "),s("code",[t._v("Docker Registry")]),t._v(" 的地址，请读者根据实际替换为自己的地址。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 生成证书")]),t._v("\n$ ./lnmp-docker ssl-self docker.t.khs1994.com\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者放入你自己的证书 config/nginx/ssl")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker.t.khs1994.com.key")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker.t.khs1994.com.crt")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 生成密钥")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\n$ docker run --init --rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      --entrypoint htpasswd "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      registry "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -Bbn "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$username")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$password")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" config/nginx/auth/docker_registry.htpasswd\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部分 nginx 可能不能解密，你可以替换为下面的命令")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -mbn $username $password > config/nginx/auth/docker_registry.htpasswd")]),t._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" config/nginx/demo-registry.config config/nginx/registry.conf\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. 编辑 config/nginx/registry.conf 文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换 REGISTRY_DOMAIN 为 docker.t.khs1994.com")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5. 编辑 docker registry 配置文件 config/registry/config.yml")]),t._v("\n")])])]),s("h2",{attrs:{id:"自签名证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自签名证书"}},[t._v("#")]),t._v(" 自签名证书")]),t._v(" "),s("ul",[s("li",[t._v("https://www.aidmin.cn/server/docker-registry-with-self-signed-ssl-certificate.html")]),t._v(" "),s("li",[t._v("https://docs.docker.com/registry/insecure/#use-self-signed-certificates")]),t._v(" "),s("li",[t._v("https://docs.docker.com/docker-for-windows/faqs/#how-do-i-add-custom-ca-certificates")]),t._v(" "),s("li",[t._v("https://docs.docker.com/docker-for-windows/#adding-tls-certificates")]),t._v(" "),s("li",[t._v("https://docs.docker.com/engine/security/certificates/")])]),t._v(" "),s("p",[t._v("如果你的证书为自签名证书")]),t._v(" "),s("p",[t._v("Linux 上将 CA 证书放入 "),s("code",[t._v("/etc/docker/certs.d/myregistrydomain.com:5000/ca.crt")]),t._v("(Docker 守护端所在主机)，在 Docker 桌面版(Windows、macOS)中放到 "),s("code",[t._v("~/.docker/certs.d/myregistrydomain.com:5000/ca.crt")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("若 registry 解析到 "),s("code",[t._v("127.0.0.0/8")]),t._v("，可能不需要配置。")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("/etc/docker/certs.d/           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("-- Certificate directory\n└── localhost:5000             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("-- Hostname:port\n    ├── client.cert            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("-- Client certificate\n    ├── client.key             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("-- Client key\n    └── ca.crt                 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("-- Certificate authority that signed\n                                 the registry certificate\n\n└── https.registry.domain.com  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("-- Hostname without port\n    ├── client.cert\n    ├── client.key\n    └── ca.crt\n")])])]),s("p",[t._v("若启用了验证功能(密码登录)，可能仍然会 "),s("a",{attrs:{href:"https://docs.docker.com/registry/insecure/#troubleshoot-insecure-registry",target:"_blank",rel:"noopener noreferrer"}},[t._v("出现错误"),s("OutboundLink")],1),t._v("。这时 "),s("strong",[t._v("必须")]),t._v(" 将 CA 写入系统文件夹(Docker 守护端所在主机)。")]),t._v(" "),s("p",[s("strong",[t._v("Linux")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# centos")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" config/nginx/ssl/root-ca.crt /etc/pki/ca-trust/source/anchors/myregistrydomain.com.crt\n$ update-ca-trust\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ubuntu")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" config/nginx/ssl/root-ca.crt /usr/local/share/ca-certificates/myregistrydomain.com.crt\n$ update-ca-certificates\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启 docker")]),t._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart docker\n")])])]),s("p",[s("strong",[t._v("Windows")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("https://docs.docker.com/registry/insecure/#windows")])]),t._v(" "),s("li",[s("p",[t._v("右键点击 CA 证书，选择 "),s("code",[t._v("安装证书")])])]),t._v(" "),s("li",[s("p",[t._v("Store location: local machine （"),s("code",[t._v("存储位置")]),t._v(" -> "),s("code",[t._v("本地计算机")]),t._v(" -> "),s("code",[t._v("下一步")]),t._v("）")])]),t._v(" "),s("li",[s("p",[t._v("Check place all certificates in the following store（选择 "),s("code",[t._v("将所有的证书都放入下列存储")]),t._v("）")])]),t._v(" "),s("li",[s("p",[t._v("Click Browser, and select Trusted Root Certificate Authorities（点击 "),s("code",[t._v("浏览")]),t._v("，选择 "),s("code",[t._v("受信任的根证书颁发机构")]),t._v("，点击 "),s("code",[t._v("确定")]),t._v("，下一步）")])]),t._v(" "),s("li",[s("p",[t._v("Click Finish (点击 "),s("code",[t._v("完成")]),t._v(")")])]),t._v(" "),s("li",[s("p",[t._v("重启 Docker")])]),t._v(" "),s("li",[s("p",[t._v("https://docs.microsoft.com/zh-cn/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc754841(v=ws.11)?redirectedfrom=MSDN")])])]),t._v(" "),s("p",[s("strong",[t._v("macOS")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ security add-trusted-cert -d -r trustRoot -k ~/Library/Keychains/login.keychain ca.crt\n")])])]),s("h2",{attrs:{id:"启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ./lnmp-docker up\n")])])]),s("h2",{attrs:{id:"测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ docker login docker.t.khs1994.com\n\n$ docker pull alpine\n\n$ docker tag alpine docker.t.khs1994.com/alpine\n\n$ docker push docker.t.khs1994.com/alpine\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);