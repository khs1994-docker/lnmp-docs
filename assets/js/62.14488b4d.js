(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{228:function(t,e,s){"use strict";s.r(e);var r=s(0),n=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/redirect.php?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("参考 "),s("router-link",{attrs:{to:"./lrew.html"}},[t._v("LREW")]),t._v(" 启用 "),s("code",[t._v("registry")]),t._v("。")],1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("如果你的证书为自签名证书，必须将 CA 写入系统文件夹。")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"docker-registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-registry","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker Registry")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("笔者以 "),e("code",[this._v("docker.t.khs1994.com")]),this._v(" 为 "),e("code",[this._v("Docker Registry")]),this._v(" 的地址，请读者根据实际替换为自己的地址。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 生成证书")]),t._v("\n$ ./lnmp-docker ssl-self docker.t.khs1994.com\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者放入你自己的证书 config/nginx/ssl")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker.t.khs1994.com.key")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker.t.khs1994.com.crt")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 生成密钥")]),t._v("\n$ username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\n$ docker run --init --rm \\\n      --entrypoint htpasswd \\\n      registry \\\n      -Bbn "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$username")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$password")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" config/nginx/auth/docker_registry.htpasswd\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部分 nginx 可能不能解密，你可以替换为下面的命令")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -mbn $username $password > config/nginx/auth/docker_registry.htpasswd")]),t._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" config/nginx/demo-registry.config config/nginx/registry.conf\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. 编辑 config/nginx/registry.conf 文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换 REGISTRY_DOMAIN 为 docker.t.khs1994.com")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5. 编辑 docker registry 配置文件 config/registry/config.yml")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"ca"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ca","aria-hidden":"true"}},[this._v("#")]),this._v(" CA")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("https://www.aidmin.cn/server/docker-registry-with-self-signed-ssl-certificate.html")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" config/nginx/ssl/root-ca.crt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /etc/pki/tls/certs/ca-bundle.crt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启 docker")]),t._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart docker\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ ./lnmp-docker up\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试","aria-hidden":"true"}},[this._v("#")]),this._v(" 测试")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ docker login docker.t.khs1994.com\n\n$ docker pull alpine\n\n$ docker tag alpine docker.t.khs1994.com/alpine\n\n$ docker push docker.t.khs1994.com/alpine\n")])])])}],!1,null,null,null);e.default=n.exports}}]);