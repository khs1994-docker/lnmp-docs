(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{245:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"iscsi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iscsi"}},[s._v("#")]),s._v(" ISCSI")]),s._v(" "),t("blockquote",[t("p",[s._v("这里只记录关键部分，实际操作请查看参考一节中的文章")])]),s._v(" "),t("h2",{attrs:{id:"target（服务端）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#target（服务端）"}},[s._v("#")]),s._v(" target（服务端）")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y targetcli\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y targetcli-fb\n")])])]),t("p",[s._v("使用 "),t("code",[s._v("targetcli")]),s._v(" 创建 "),t("code",[s._v("/etc/target/saveconfig.json")]),s._v(" 文件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/targetctl restore\n")])])]),t("p",[s._v("启动，监听 "),t("code",[s._v("3260")]),s._v(" 端口")]),s._v(" "),t("h2",{attrs:{id:"initiator（客户端）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initiator（客户端）"}},[s._v("#")]),s._v(" initiator（客户端）")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" iscsi-initiator-utils\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" open-iscsi\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# iscsid.service")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/sbin/iscsid\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# iscsi.service")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-/sbin/iscsiadm -m node --loginall"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("automatic\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/iscsi/initiatorname.iscsi")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("InitiatorName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("iqn.2018-05.com.test:desktop\n")])])]),t("h2",{attrs:{id:"wsl2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wsl2"}},[s._v("#")]),s._v(" WSL2")]),s._v(" "),t("ul",[t("li",[s._v("使用笔者编译的 "),t("a",{attrs:{href:"https://github.com/khs1994/WSL2-Linux-Kernel",target:"_blank",rel:"noopener noreferrer"}},[s._v("内核"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" dbus start\n")])])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("https://blog.csdn.net/wh211212/article/details/52981305")])]),s._v(" "),t("li",[t("p",[s._v("https://blog.csdn.net/cmzsteven/article/details/80417025")])]),s._v(" "),t("li",[t("p",[s._v("https://blog.csdn.net/ha_weii/article/details/80586753")])]),s._v(" "),t("li",[t("p",[s._v("https://kifarunix.com/how-to-install-and-configure-iscsi-storage-server-on-ubuntu-18-04/")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);