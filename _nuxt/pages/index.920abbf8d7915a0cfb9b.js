webpackJsonp([0],{"+ptz":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"is-vertical"},[n("xd-header"),n("el-row",[n("el-col",[n("el-main",[n("el-carousel",{attrs:{"indicator-position":"outside",height:"85vh",interval:5e3,arrow:"always"}},e._l(e.carouselList,function(t,r){return n("el-carousel-item",{key:r},e._l(t,function(e,t){return n("a",{key:t,attrs:{href:e.href}},[n("img",{attrs:{src:e.src}})])}))})),n("div",[n("h3",[e._v("学习特色")])])],1)],1)],1),n("xd-footer")],1)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};t.a=i},"/TYz":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("hJnR"),i=n("+ptz"),o=!1;var a=function(e){o||n("KXSG")},s=n("VU/8")(r.a,i.a,!1,a,null,null);s.options.__file="pages/index.vue",t.default=s.exports},"02CJ":function(e,t,n){"use strict";var r=n("BhXv"),i=n("Px80"),o=!1;var a=function(e){o||n("5uk7")},s=n("VU/8")(r.a,i.a,!1,a,null,null);s.options.__file="components/XdHeader.vue",t.a=s.exports},"04uK":function(e,t,n){e.exports=n.p+"img/home3a.4f8f420.jpg"},"2WgN":function(e,t,n){e.exports=n.p+"img/home1c.466b13f.jpg"},"2fHh":function(e,t,n){e.exports=n.p+"img/home3d.d46ce7b.jpg"},"3ovo":function(e,t,n){var r=n("vBw6");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("01301584",r,!1,{sourceMap:!1})},"5sAX":function(e,t,n){e.exports=n.p+"img/home1a.82ab4eb.jpg"},"5uk7":function(e,t,n){var r=n("pV0R");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("0e3ee831",r,!1,{sourceMap:!1})},"66Oa":function(e,t,n){e.exports=n.p+"img/home1h.f7a1d74.jpg"},"8Gz8":function(e,t,n){var r=n("LfPd");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("ddde33ea",r,!1,{sourceMap:!1})},BhXv:function(e,t,n){"use strict";var r=n("3ovo"),i=(n.n(r),n("FhoZ"));t.a={name:"XdHeader",data:function(){return{activeIndex:"0",navList:i.a.routes}}}},Cc8l:function(e,t,n){e.exports=n.p+"img/home2.ca57184.jpg"},F5HO:function(e,t,n){e.exports=n.p+"img/home3b.0535170.jpg"},FhoZ:function(e,t,n){"use strict";t.a={routes:[{name:"首页",path:"/"},{name:"免费培训中心",children:[{name:"免费学40道西点",path:"/train/c1"},{name:"免费化妆培训",path:"/train/c2"}]},{name:"个人报名",path:"/apply/personal"},{name:"团建报名",path:"/apply/team"},{name:"企业免费培训",path:"/apply/enterprise"},{name:"干货教程",path:"/other/dry"},{name:"内购平台",path:"/other/in-App"},{name:"关于我们",children:[{name:"关于我们",path:"/about"},{name:"校区地址",path:"/about/address"},{name:"加入我们",path:"/about/invite"}]}]}},FuBW:function(e,t,n){e.exports=n.p+"img/home3c.241d6be.jpg"},IxRV:function(e,t,n){e.exports=n.p+"img/home3h.85b0393.jpg"},JamQ:function(e,t,n){e.exports=n.p+"img/logo.6684e87.png"},KWTm:function(e,t,n){e.exports=n.p+"img/home1f.ab65b5f.jpg"},KXSG:function(e,t,n){var r=n("YHCp");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("d8cdba20",r,!1,{sourceMap:!1})},LfPd:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".el-footer{padding:20px 0;background-color:#e9e9e9}.el-footer p{margin:4px 0;color:#333;text-align:center;line-height:1.5em}",""])},M0Kz:function(e,t,n){"use strict";var r=n("TY0l"),i=n("qZE0"),o=!1;var a=function(e){o||n("8Gz8")},s=n("VU/8")(r.a,i.a,!1,a,null,null);s.options.__file="components/XdFooter.vue",t.a=s.exports},Px80:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-header",[r("el-row",[r("el-col",{attrs:{span:4}},[r("h1",{staticClass:"xd-logo"},[r("img",{attrs:{src:n("JamQ"),alt:""}}),r("a",{attrs:{href:"/"}},[e._v("学习惠")])])]),r("el-col",{attrs:{span:20}},[r("el-menu",{staticClass:"xd-el-menu",attrs:{"default-active":e.activeIndex,mode:"horizontal"}},e._l(e.navList,function(t,n){return t.children&&t.children.length>0?r("el-submenu",{key:n,attrs:{index:n+""}},[r("template",{slot:"title"},[e._v(e._s(t.name))]),e._l(t.children,function(t,n){return r("el-menu-item",{key:n,attrs:{index:t.path}},[r("nuxt-link",{attrs:{to:t.path}},[e._v(e._s(t.name))])],1)})],2):r("el-menu-item",{attrs:{index:t.path}},[r("nuxt-link",{attrs:{to:t.path}},[e._v(e._s(t.name))])],1)}))],1)],1)],1)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};t.a=i},R9DP:function(e,t,n){e.exports=n.p+"img/home1g.76714fa.jpg"},TY0l:function(e,t,n){"use strict";t.a={name:"XdFooter"}},Tu2z:function(e,t,n){e.exports=n.p+"img/home1b.c22d264.jpg"},YHCp:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"body{width:100%;height:100vh}.el-container{width:100%;height:100%}.el-main{color:#333;padding:0}.el-carousel{margin:0;padding:0}.el-carousel__item:nth-child(2n){background-color:#99a9bf}.el-carousel__item:nth-child(odd){background-color:#d3dce6}.el-carousel .el-carousel__item{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.el-carousel .el-carousel__item a{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;max-height:100%;min-width:25%;min-height:50%}.el-carousel .el-carousel__item img{width:100%;height:100%}",""])},ewKB:function(e,t,n){e.exports=n.p+"img/home1d.686b3aa.jpg"},hJnR:function(e,t,n){"use strict";var r=n("02CJ"),i=n("M0Kz");t.a={components:{XdHeader:r.a,XdFooter:i.a},data:function(){return{carouselList:[[{href:"#a",src:n("5sAX")},{href:"#b",src:n("Tu2z")},{href:"#c",src:n("2WgN")},{href:"#d",src:n("ewKB")},{href:"#e",src:n("ktB4")},{href:"#f",src:n("KWTm")},{href:"#g",src:n("R9DP")},{href:"#h",src:n("66Oa")}],[{href:"#",src:n("Cc8l")}],[{href:"#a",src:n("04uK")},{href:"#b",src:n("F5HO")},{href:"#c",src:n("FuBW")},{href:"#d",src:n("2fHh")},{href:"#e",src:n("wmiI")},{href:"#f",src:n("sh85")},{href:"#g",src:n("iLkN")},{href:"#h",src:n("IxRV")}]]}}}},iLkN:function(e,t,n){e.exports=n.p+"img/home3g.90b5932.jpg"},ktB4:function(e,t,n){e.exports=n.p+"img/home1e.20edf75.jpg"},pV0R:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".xd-logo{width:80%;font-size:0}.xd-logo img{width:100%}.xd-el-menu{float:right;text-align:center}.el-menu ul{list-style:none}.el-menu li a{color:#666;text-decoration:none}",""])},qZE0:function(e,t,n){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("el-footer",{attrs:{height:"150"}},[t("p",[this._v("www.021learning.com 版权所有 上海煜容化传播有限公司")]),t("p",[this._v("课程咨询电话：156-1895-8335 市场合作电话：189-1627-3295 投诉电话：18621333058")]),t("p",[this._v("免费培训课程： 免费西点培训 | 免费中点培训 | 免费化妆美容培训 | 免费摄影培训 | 免费咖啡培训 | 免费插花培训 | 免费养老培训 | 免费茶艺培训")]),t("p",[this._v("友情链接：上海人力资源和社保局官网 | 职业技能等级考试成绩查询 | 职业技能等级考试证书查询 | ")])])};r._withStripped=!0;var i={render:r,staticRenderFns:[]};t.a=i},sh85:function(e,t,n){e.exports=n.p+"img/home3f.59a61b6.jpg"},vBw6:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"body{width:100%;height:100vh;font-size:14px}#__layout,#__nuxt{height:100%}.el-container{width:100%;height:100%}.el-header{text-align:center;line-height:60px}.el-header,.el-main{background-color:#fff}.el-main{padding:0}.container{width:1000px;margin:0 auto}",""])},wmiI:function(e,t,n){e.exports=n.p+"img/home3e.d646eec.jpg"}});