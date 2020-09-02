(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{364:function(t,s,a){"use strict";a.r(s);var e=a(33),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-gpg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-gpg"}},[t._v("#")]),t._v(" Git GPG")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cloud.tencent.com/act/cps/redirect?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/AD-%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%B9%E5%99%A8%E6%9C%8D%E5%8A%A1-blue.svg",alt:""}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=13vokmlse8afh",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/Support-%E8%85%BE%E8%AE%AF%E4%BA%91%E8%87%AA%E5%AA%92%E4%BD%93-brightgreen.svg",alt:""}}),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("https://help.github.com/articles/managing-commit-signature-verification/")])]),t._v(" "),a("p",[a("strong",[t._v("Windows")])]),t._v(" "),a("ul",[a("li",[t._v("https://www.gnupg.org/download/index.html")]),t._v(" "),a("li",[t._v("https://gpg4win.org/download.html")])]),t._v(" "),a("p",[a("strong",[t._v("Linux")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gnupg\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成 key")]),t._v("\n$ gpg --default-new-key-algo rsa4096 --gen-key\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出公钥")]),t._v("\n$ gpg --list-keys\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出私钥")]),t._v("\n$ gpg --list-secret-keys --keyid-format LONG\n\nsec   rsa4096/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GPG-key-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("-09-15 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("expires: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-09-14"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      XXXX\nuid                 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ultimate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" khs1994 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("khs1994@khs1994.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导出")]),t._v("\n$ gpg --armor --export "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GPG-key-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# copy output to github")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://help.github.com/articles/adding-a-new-gpg-key-to-your-github-account/")]),t._v("\n")])])]),a("h2",{attrs:{id:"配置-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-git"}},[t._v("#")]),t._v(" 配置 GIT")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.signingkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GPG-key-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --local commit.gpgsign "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $ git config --global commit.gpgsign true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Windows 设置 gpg 绝对路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# $ git config --global gpg.program "C:\\Program Files (x86)\\gnupg\\bin\\gpg.exe"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Linux 可能会遇到错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 ~/.bashrc ~/.bash_profile 两个文件中加入 export GPG_TTY=$(tty)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 签署 commit")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -S -s -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your commit message"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 签署 tag")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -s mytag\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 tag")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -v mytag\n")])])]),a("h2",{attrs:{id:"备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[t._v("#")]),t._v(" 备份")]),t._v(" "),a("p",[t._v("备份分为备份公钥和私钥两个部分")]),t._v(" "),a("p",[a("strong",[t._v("备份公钥：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ gpg -o filename.pub --export "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GPG-key-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("如果没有 KeyID 则是备份所有的公钥，-o 表示输出到文件 filename.pub 中，如果加上 -a 参数则输出文本格式的信息，否则输出的是二进制格式信息。")]),t._v(" "),a("p",[a("strong",[t._v("备份私钥：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ gpg -o filename --export-secret-keys "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GPG-key-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[a("strong",[t._v("可以通过以下命令导入")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ gpg --import filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".pub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"x-509-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#x-509-key"}},[t._v("#")]),t._v(" X.509 Key")]),t._v(" "),a("ul",[a("li",[t._v("https://help.github.com/articles/telling-git-about-your-signing-key/#telling-git-about-your-x509-key")])]),t._v(" "),a("p",[t._v("git 2.19 +")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global gpg.x509.program smimesign\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global gpg.format x509\n")])])]),a("p",[t._v("git 2.18 -")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global gpg.program smimesign\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);