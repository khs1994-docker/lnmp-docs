(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{202:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[e("a",{attrs:{href:"https://cloud.tencent.com/redirect.php?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),e("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),e("p",[t._v("备份密钥分为备份公钥和私钥两个部分，备份公钥：")]),t._v(" "),t._m(4),e("p",[t._v("如果没有 KeyID 则是备份所有的公钥，-o 表示输出到文件 keyfilename 中，如果加上 -a 参数则输出文本格式的信息，否则输出的是二进制格式信息。")]),t._v(" "),e("p",[t._v("备份私钥：")]),t._v(" "),t._m(5),e("p",[t._v("然后在别的机器上可以通过")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("git 2.19 +")]),t._v(" "),t._m(9),e("p",[t._v("git 2.18 -")]),t._v(" "),t._m(10)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"git-gpg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-gpg","aria-hidden":"true"}},[this._v("#")]),this._v(" Git GPG")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("https://help.github.com/articles/managing-commit-signature-verification/")])]),this._v(" "),s("li",[s("p",[this._v("Windows https://www.gnupg.org/download/index.html Simple installer for the current GnuPG")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ gpg --default-new-key-algo rsa4096 --gen-key\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出公钥")]),t._v("\n$ gpg --list-keys\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出私钥")]),t._v("\n$ gpg --list-secret-keys --keyid-format LONG\n\nsec   rsa4096/"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GPG-key-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 2018-09-15 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SC"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("expires: 2020-09-14"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      XXXX\nuid                 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ultimate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" khs1994 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("khs1994@khs1994.com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n$ gpg --armor --export "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GPG-key-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# copy output to github")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://help.github.com/articles/adding-a-new-gpg-key-to-your-github-account/")]),t._v("\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.signingkey "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GPG-key-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --local commit.gpgsign "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $ git config --global commit.gpgsign true")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Windows 设置 gpg 绝对路径")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# $ git config --global gpg.program "C:\\Program Files (x86)\\gnupg\\bin\\gpg.exe"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Linux 可能会遇到错误")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 ~/.bashrc ~/.bash_profile 两个文件中加入 export GPG_TTY=$(tty)")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 签署 commit")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -S -s -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your commit message"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 签署 tag")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -s mytag\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 tag")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -v mytag\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份","aria-hidden":"true"}},[this._v("#")]),this._v(" 备份")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ gpg -o keyfilename --export "),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("GPG-key-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ gpg -o keyfilename --export-secret-keys "),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("GPG-key-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ gpg --import filename\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"x-509-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x-509-key","aria-hidden":"true"}},[this._v("#")]),this._v(" X.509 Key")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("https://help.github.com/articles/telling-git-about-your-signing-key/#telling-git-about-your-x509-key")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" config --global gpg.x509.program smimesign\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" config --global gpg.format x509\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" config --global gpg.program smimesign\n")])])])}],!1,null,null,null);s.default=n.exports}}]);