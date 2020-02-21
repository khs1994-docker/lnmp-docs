(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{266:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"docker-registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-registry"}},[t._v("#")]),t._v(" Docker Registry")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://cloud.tencent.com/redirect.php?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("p",[t._v("参考 "),e("RouterLink",{attrs:{to:"/lrew.html"}},[t._v("LREW")]),t._v(" 启用 "),e("code",[t._v("registry")]),t._v("。")],1),t._v(" "),e("p",[t._v("笔者以 "),e("code",[t._v("docker.t.khs1994.com")]),t._v(" 为 "),e("code",[t._v("Docker Registry")]),t._v(" 的地址，请读者根据实际替换为自己的地址。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 生成证书")]),t._v("\n$ ./lnmp-docker ssl-self docker.t.khs1994.com\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者放入你自己的证书 config/nginx/ssl")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker.t.khs1994.com.key")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker.t.khs1994.com.crt")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 生成密钥")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("username")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("password")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\n$ docker run --init --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      --entrypoint htpasswd "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      registry "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -Bbn "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$username")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$password")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" config/nginx/auth/docker_registry.htpasswd\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部分 nginx 可能不能解密，你可以替换为下面的命令")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -mbn $username $password > config/nginx/auth/docker_registry.htpasswd")]),t._v("\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" config/nginx/demo-registry.config config/nginx/registry.conf\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. 编辑 config/nginx/registry.conf 文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换 REGISTRY_DOMAIN 为 docker.t.khs1994.com")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5. 编辑 docker registry 配置文件 config/registry/config.yml")]),t._v("\n")])])]),e("h2",{attrs:{id:"自签名证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自签名证书"}},[t._v("#")]),t._v(" 自签名证书")]),t._v(" "),e("ul",[e("li",[t._v("https://www.aidmin.cn/server/docker-registry-with-self-signed-ssl-certificate.html")]),t._v(" "),e("li",[t._v("https://docs.docker.com/registry/insecure/#use-self-signed-certificates")])]),t._v(" "),e("p",[t._v("如果你的证书为自签名证书")]),t._v(" "),e("p",[t._v("Linux 上将 CA 证书放入 "),e("code",[t._v("/etc/docker/certs.d/myregistrydomain.com:5000/ca.crt")]),t._v("(Docker 守护端所在主机)，其他系统请查看上方文档("),e("code",[t._v("myregistrydomain.com:5000")]),t._v(" 替换为自己的地址)。")]),t._v(" "),e("p",[t._v("若启用了验证功能(密码登录)，"),e("strong",[t._v("必须")]),t._v(" 将 CA 写入系统文件夹(Docker 守护端所在主机)。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" config/nginx/ssl/root-ca.crt "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /etc/pki/ca-trust/source/anchors/myregistrydomain.com.crt "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# centos")]),t._v("\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" config/nginx/ssl/root-ca.crt "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /etc/ssl/certs/myregistrydomain.com.crt "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ubuntu")]),t._v("\n\n$ update-ca-certificates "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ubuntu")]),t._v("\n$ update-ca-trust        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# centos")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启 docker")]),t._v("\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart docker\n")])])]),e("h2",{attrs:{id:"启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ./lnmp-docker up\n")])])]),e("h2",{attrs:{id:"测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker login docker.t.khs1994.com\n\n$ docker pull alpine\n\n$ docker tag alpine docker.t.khs1994.com/alpine\n\n$ docker push docker.t.khs1994.com/alpine\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);