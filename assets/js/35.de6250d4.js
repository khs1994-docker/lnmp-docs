(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{355:function(s,t,a){"use strict";a.r(t);var e=a(33),o=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"loop-设备及-losetup-命令介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loop-设备及-losetup-命令介绍"}},[s._v("#")]),s._v(" loop 设备及 losetup 命令介绍")]),s._v(" "),a("ul",[a("li",[s._v("https://blog.csdn.net/ustc_dylan/article/details/6878252")])]),s._v(" "),a("h2",{attrs:{id:"loop-设备介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loop-设备介绍"}},[s._v("#")]),s._v(" loop 设备介绍")]),s._v(" "),a("p",[s._v("在类 UNIX 系统里，loop 设备是一种伪设备(pseudo-device)，或者也可以说是仿真设备。它能使我们像块设备一样访问一个文件。")]),s._v(" "),a("p",[s._v("在使用之前，一个 loop 设备必须要和一个文件进行连接。这种结合方式给用户提供了一个替代块特殊文件的接口。因此，如果这个文件包含有一个完整的文件系统，那么这个文件就可以像一个磁盘设备一样被 mount 起来。")]),s._v(" "),a("p",[s._v("上面说的文件格式，我们经常见到的是 CD 或 DVD 的 ISO 光盘镜像文件或者是软盘(硬盘)的 *.img 镜像文件。通过这种 loop mount (回环mount)的方式，这些镜像文件就可以被 mount 到当前文件系统的一个目录下。")]),s._v(" "),a("p",[s._v("至此，顺便可以再理解一下 loop 之含义：对于第一层文件系统，它直接安装在我们计算机的物理设备之上；而对于这种被 mount 起来的镜像文件(它也包含有文件系统)，它是建立在第一层文件系统之上，这样看来，它就像是在第一层文件系统之上再绕了一圈的文件系统，所以称为 loop。")]),s._v(" "),a("h2",{attrs:{id:"losetup-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#losetup-命令"}},[s._v("#")]),s._v(" "),a("code",[s._v("losetup")]),s._v(" 命令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ losetup "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -e encryption "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -o offset "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" loop_device "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n$ losetup "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" loop_device\n")])])]),a("p",[s._v("此命令用来设置循环设备。循环设备可把文件虚拟成块设备，籍此来模拟整个文件系统，让用户得以将其视为硬盘驱动器，光驱或软驱等设备，并挂入当作目录来使用。")]),s._v(" "),a("p",[s._v("上面，命令格式中的选项与参数名：\n"),a("strong",[s._v("-e")]),s._v(" 表示加密的方式\n"),a("strong",[s._v("-o")]),s._v(" 设置数据偏移量\n"),a("strong",[s._v("-d")]),s._v(" 卸载设备")]),s._v(" "),a("p",[a("strong",[s._v("loop_device")]),s._v(" 循环设备名，在 linux 下如 "),a("code",[s._v("/dev/loop0")]),s._v(" , "),a("code",[s._v("/dev/loop1")]),s._v(" 等。")]),s._v(" "),a("p",[a("strong",[s._v("file")]),s._v(" 要与循环设备相关联的文件名，这个往往是一个磁盘镜象文件，如 "),a("code",[s._v("*.img")])]),s._v(" "),a("h2",{attrs:{id:"使用举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用举例"}},[s._v("#")]),s._v(" 使用举例")]),s._v(" "),a("p",[s._v("创建空的磁盘镜像文件，这里创建一个 1.44M 的软盘")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/zero "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("floppy.img "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bs")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2880")]),s._v("\n")])])]),a("p",[s._v("使用 "),a("code",[s._v("losetup")]),s._v(" 将磁盘镜像文件虚拟成快设备")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ losetup /dev/loop1 floppy.img\n")])])]),a("p",[s._v("挂载块设备")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/loop0 /tmp\n")])])]),a("p",[s._v("经过上面的三步之后，我们就可以通过 "),a("code",[s._v("/tmp")]),s._v(" 目录，像访问真实快设备一样来访问磁盘镜像文件"),a("code",[s._v("floppy.img")]),s._v("。")]),s._v(" "),a("p",[s._v("卸载 loop 设备")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("umount")]),s._v(" /tmp\n\n$ losetup -d /dev/loop1\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);