webpackJsonp([76],{1589:function(n,A,e){"use strict";Object.defineProperty(A,"__esModule",{value:!0});var t=e(411),i=e.n(t);A.default={data:function(){return{}},components:{mybanner:i.a},mounted:function(){},methods:{}}},1704:function(n,A,e){A=n.exports=e(307)(),A.push([n.i,"\n.version[data-v-3e565cf3] {\n  margin-top: 16.466vw;\n}\n.version .verBox[data-v-3e565cf3] {\n    padding: 0 8vw;\n    color: #363636;\n}\n.version .verBox .imgBox[data-v-3e565cf3] {\n      padding: 18.534vw 0 8.333vw;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.version .verBox .imgBox img[data-v-3e565cf3] {\n        width: 16vw;\n        height: 16vw;\n}\n.version .verBox .imgBox h1[data-v-3e565cf3] {\n        margin-top: 5.333vw;\n        font-weight: bold;\n        font-size: 4.8vw;\n}\n.version .verBox .imgBox h2[data-v-3e565cf3] {\n        font-size: 3.733vw;\n}\n.version .verBox p[data-v-3e565cf3] {\n      text-indent: 2em;\n      font-size: 4vw;\n      color: #363636;\n      text-align: justify;\n      text-justify: inter-word;\n}\n","",{version:3,sources:["E:/project/marketing-2/src/pages/aboutUs.vue"],names:[],mappings:";AACA;EACE,qBAAqB;CACtB;AACD;IACI,eAAe;IACf,eAAe;CAClB;AACD;MACM,4BAA4B;MAC5B,qBAAqB;MACrB,cAAc;MACd,2BAA2B;UACvB,uBAAuB;MAC3B,uBAAuB;UACnB,oBAAoB;MACxB,sBAAsB;UAClB,wBAAwB;CACjC;AACD;QACQ,YAAY;QACZ,aAAa;CACpB;AACD;QACQ,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;CACxB;AACD;QACQ,mBAAmB;CAC1B;AACD;MACM,iBAAiB;MACjB,eAAe;MACf,eAAe;MACf,oBAAoB;MACpB,yBAAyB;CAC9B",file:"aboutUs.vue",sourcesContent:["\n.version[data-v-3e565cf3] {\n  margin-top: 16.466vw;\n}\n.version .verBox[data-v-3e565cf3] {\n    padding: 0 8vw;\n    color: #363636;\n}\n.version .verBox .imgBox[data-v-3e565cf3] {\n      padding: 18.534vw 0 8.333vw;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.version .verBox .imgBox img[data-v-3e565cf3] {\n        width: 16vw;\n        height: 16vw;\n}\n.version .verBox .imgBox h1[data-v-3e565cf3] {\n        margin-top: 5.333vw;\n        font-weight: bold;\n        font-size: 4.8vw;\n}\n.version .verBox .imgBox h2[data-v-3e565cf3] {\n        font-size: 3.733vw;\n}\n.version .verBox p[data-v-3e565cf3] {\n      text-indent: 2em;\n      font-size: 4vw;\n      color: #363636;\n      text-align: justify;\n      text-justify: inter-word;\n}\n"],sourceRoot:""}])},1863:function(n,A,e){var t=e(1704);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);e(308)("268b1d3e",t,!0)},1998:function(n,A){n.exports="data:image/png;base64,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"},2143:function(n,A,e){n.exports={render:function(){var n=this,A=n.$createElement,e=n._self._c||A;return e("div",{staticClass:"version"},[e("mybanner",{staticStyle:{border:"none"}}),n._v(" "),n._m(0)],1)},staticRenderFns:[function(){var n=this,A=n.$createElement,t=n._self._c||A;return t("div",{staticClass:"verBox"},[t("div",{staticClass:"imgBox"},[t("img",{attrs:{src:e(1998),alt:""}}),n._v(" "),t("h1",[n._v("营销助手")]),n._v(" "),t("h2",[n._v("Version 2.0.0")])]),n._v(" "),t("div",{staticClass:"desc"},[t("p",[n._v("东莞市慕思寝室用品有限公司，以下简称慕思。慕思创立于2004年，专业致力于人体健康睡眠研究，从事整套健康睡眠系统的研发、生产和销售。慕思深知占据了人生三分之一的生命的睡眠意义非凡，为此确立了“让人们睡得更好”的使命，并以“成为全球最受尊重的健康睡眠品牌引领者”为愿景。在践行“客户满意、整合创新、合作共赢”核心价值观的过程中，慕思迅速由中国扩展至全球，目前全球专卖店已突破3600余家，遍及澳大利亚、美国、意大利、加拿大等20多个国家和地区。")]),n._v(" "),t("p",[n._v("营销助手APP致力于给经销商赋能，协助经销商进行客户管理，让经销商能实时查看经营数据，减少人工统计数据的时间和成本，使得经销商可以更好地进行经营。")])])])}]}},337:function(n,A,e){e(1863);var t=e(114)(e(1589),e(2143),"data-v-3e565cf3",null);n.exports=t.exports},407:function(n,A){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAfJJREFUSIml1k2IjVEcx/HPYIMSslATymZIU966iMaUlWNBqUlKsxALbJBS1hYTC0UpC1mQxdiQnsnGW8gw2EzZKKGZmiQriQ2Lc69ux7lz7/Pc/+qe7zn3+5zT8zy//9NTq9V0WZdxov77/LwuZTcw3DQ+143wFg6msKrwDvZn+NEqwvvYk+GHQgg3ywofYTDDh0IIo5Q78hMMZPi+EMLdxqAT4Vw8x5bMXAghjDWDdsIFeIYNmbldeJjC2YSL8RJ9Cf+DbRjP/amVcCleY3XCf2M7JlrtIidcXr/6yoT/RA2TrWQwJxmvwLuM7Ds2t5OlO1yDF1iSrJmp7+xzO1mzcB1eiXe1uabqsulOZMQj94s3IJV9FB+XjmUN4RjmJ/xB/UJfy8gawt4Mn8SPsrKG8GSGn8aVqsJLOJuZO45rVYQwgjOZ+SNizJcWwkUcy6wZxu0qQriKw5l1B8SkLi2E6zLNR4z9ooqQeMShDN8ttoHSQhjF3gwfFNtBNvpmE8I9MZnTGhBf1/QNayskxvzODF+P8aIoFpYVwlNsFeO/ufrxpiiKf5HXqZCY4jX8SngfJoqiWAY9Fb6+1orNa1HCp7CjzA4b9R6b8C3hvXhcRQgfxPCdSfiqqkL4go341MTedvvBOS326VPiE3ChS9//9RdWbVrN+RusKgAAAABJRU5ErkJggg=="},411:function(n,A,e){e(414);var t=e(114)(e(412),e(415),"data-v-739e7d78",null);n.exports=t.exports},412:function(n,A,e){"use strict";Object.defineProperty(A,"__esModule",{value:!0});var t=e(15);e.n(t),e(60);A.default={name:"routerLink",props:["title","MoreBtn","left"],data:function(){return{fix:"",top:""}},mounted:function(){this.isIPhoneX()},methods:{cilck:function(){this.$router.back(-1)},isIPhoneX:function(n){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(812==screen.height&&375==screen.width||896==screen.height&&414==screen.width)&&(this.fix="fix",this.top="6")}}}},413:function(n,A,e){A=n.exports=e(307)(),A.push([n.i,"\n.banner[data-v-739e7d78] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-739e7d78] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-739e7d78] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-739e7d78] {\n      background: url("+e(407)+") no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner .my_title[data-v-739e7d78] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n.banner button[data-v-739e7d78] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n.banner .myLeftStyle[data-v-739e7d78] {\n    color: #222444;\n    font-size: 4.8vw;\n    font-weight: 500;\n    padding-left: 2vw;\n    text-align: left;\n}\n","",{version:3,sources:["E:/project/marketing-2/src/components/banner.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;EACd,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,uBAAuB;MACnB,oBAAoB;EACxB,8BAA8B;EAC9B,oBAAoB;EACpB,iBAAiB;CAClB;AACD;IACI,mBAAmB;IACnB,oBAAoB;IACpB,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,YAAY;CACf;AACD;IACI,WAAW;IACX,eAAe;IACf,sBAAsB;CACzB;AACD;MACM,2DAA0D;MAC1D,sBAAsB;MACtB,cAAc;MACd,eAAe;MACf,gBAAgB;CACrB;AACD;IACI,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;IACf,wBAAwB;IACxB,iBAAiB;IACjB,oBAAoB;CACvB;AACD;IACI,mBAAmB;IACnB,SAAS;IACT,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,cAAc;CACjB;AACD;IACI,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;CACpB",file:"banner.vue",sourcesContent:["\n.banner[data-v-739e7d78] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-739e7d78] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-739e7d78] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-739e7d78] {\n      background: url(../assets/imgs/back.png) no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner .my_title[data-v-739e7d78] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n.banner button[data-v-739e7d78] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n.banner .myLeftStyle[data-v-739e7d78] {\n    color: #222444;\n    font-size: 4.8vw;\n    font-weight: 500;\n    padding-left: 2vw;\n    text-align: left;\n}\n"],sourceRoot:""}])},414:function(n,A,e){var t=e(413);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);e(308)("0724ee57",t,!0)},415:function(n,A){n.exports={render:function(){var n=this,A=n.$createElement,e=n._self._c||A;return e("div",{staticClass:"banner",style:{"margin-top":n.top+"vw"}},[e("div",{class:""+n.fix}),n._v(" "),e("div",{staticClass:"icon-back",on:{click:n.cilck}},[e("div",{staticClass:"icon"})]),n._v(" "),e("span",{staticClass:"my_title",class:n.left?"myLeftStyle":""},[n._v(n._s(n.title))]),n._v(" "),n._t("default")],2)},staticRenderFns:[]}}});