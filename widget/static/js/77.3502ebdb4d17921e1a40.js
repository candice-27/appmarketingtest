webpackJsonp([77],{1565:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(115),i=(t.n(o),t(411)),a=t.n(i),r=t(471),A=(t.n(r),new o.IndexModel);n.default={components:{banner:a.a},data:function(){return{myhtml:""}},created:function(){this.getContent()},methods:{getContent:function(){var e=this,n=this.$route.query.brand;A.brandIntroduce(n).then(function(n){var o=n.data.introduce;e.myhtml=t.i(r.changeImgStyle)(t.i(r.b64DecodeUnicode)(o)),e.myhtml=t.i(r.changeVedioStyle)(e.myhtml)})}}}},1682:function(e,n,t){n=e.exports=t(307)(),n.push([e.i,"\n.r-index[data-v-28807e07] {\n  height: 100vh;\n  width: 100vw;\n  overflow: scroll;\n}\n.recommend[data-v-28807e07] {\n  word-break: break-word !important;\n  margin-top: 16vw;\n  box-sizing: border-box;\n}\n","",{version:3,sources:["E:/project/marketing-2/src/pages/Gallery/recommend.vue"],names:[],mappings:";AACA;EACE,cAAc;EACd,aAAa;EACb,iBAAiB;CAClB;AACD;EACE,kCAAkC;EAClC,iBAAiB;EACjB,uBAAuB;CACxB",file:"recommend.vue",sourcesContent:["\n.r-index[data-v-28807e07] {\n  height: 100vh;\n  width: 100vw;\n  overflow: scroll;\n}\n.recommend[data-v-28807e07] {\n  word-break: break-word !important;\n  margin-top: 16vw;\n  box-sizing: border-box;\n}\n"],sourceRoot:""}])},1841:function(e,n,t){var o=t(1682);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(308)("2cc37a1c",o,!0)},2121:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"r-index"},[t("banner",{attrs:{title:"品牌介绍"}}),e._v(" "),t("div",{staticClass:"recommend",domProps:{innerHTML:e._s(e.myhtml)}})],1)},staticRenderFns:[]}},316:function(e,n,t){t(1841);var o=t(114)(t(1565),t(2121),"data-v-28807e07",null);e.exports=o.exports},407:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAfJJREFUSIml1k2IjVEcx/HPYIMSslATymZIU966iMaUlWNBqUlKsxALbJBS1hYTC0UpC1mQxdiQnsnGW8gw2EzZKKGZmiQriQ2Lc69ux7lz7/Pc/+qe7zn3+5zT8zy//9NTq9V0WZdxov77/LwuZTcw3DQ+143wFg6msKrwDvZn+NEqwvvYk+GHQgg3ywofYTDDh0IIo5Q78hMMZPi+EMLdxqAT4Vw8x5bMXAghjDWDdsIFeIYNmbldeJjC2YSL8RJ9Cf+DbRjP/amVcCleY3XCf2M7JlrtIidcXr/6yoT/RA2TrWQwJxmvwLuM7Ds2t5OlO1yDF1iSrJmp7+xzO1mzcB1eiXe1uabqsulOZMQj94s3IJV9FB+XjmUN4RjmJ/xB/UJfy8gawt4Mn8SPsrKG8GSGn8aVqsJLOJuZO45rVYQwgjOZ+SNizJcWwkUcy6wZxu0qQriKw5l1B8SkLi2E6zLNR4z9ooqQeMShDN8ttoHSQhjF3gwfFNtBNvpmE8I9MZnTGhBf1/QNayskxvzODF+P8aIoFpYVwlNsFeO/ufrxpiiKf5HXqZCY4jX8SngfJoqiWAY9Fb6+1orNa1HCp7CjzA4b9R6b8C3hvXhcRQgfxPCdSfiqqkL4go341MTedvvBOS326VPiE3ChS9//9RdWbVrN+RusKgAAAABJRU5ErkJggg=="},411:function(e,n,t){t(414);var o=t(114)(t(412),t(415),"data-v-739e7d78",null);e.exports=o.exports},412:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(15);t.n(o),t(60);n.default={name:"routerLink",props:["title","MoreBtn","left"],data:function(){return{fix:"",top:""}},mounted:function(){this.isIPhoneX()},methods:{cilck:function(){this.$router.back(-1)},isIPhoneX:function(e){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(812==screen.height&&375==screen.width||896==screen.height&&414==screen.width)&&(this.fix="fix",this.top="6")}}}},413:function(e,n,t){n=e.exports=t(307)(),n.push([e.i,"\n.banner[data-v-739e7d78] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-739e7d78] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-739e7d78] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-739e7d78] {\n      background: url("+t(407)+") no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner .my_title[data-v-739e7d78] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n.banner button[data-v-739e7d78] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n.banner .myLeftStyle[data-v-739e7d78] {\n    color: #222444;\n    font-size: 4.8vw;\n    font-weight: 500;\n    padding-left: 2vw;\n    text-align: left;\n}\n","",{version:3,sources:["E:/project/marketing-2/src/components/banner.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;EACd,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,uBAAuB;MACnB,oBAAoB;EACxB,8BAA8B;EAC9B,oBAAoB;EACpB,iBAAiB;CAClB;AACD;IACI,mBAAmB;IACnB,oBAAoB;IACpB,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,YAAY;CACf;AACD;IACI,WAAW;IACX,eAAe;IACf,sBAAsB;CACzB;AACD;MACM,2DAA0D;MAC1D,sBAAsB;MACtB,cAAc;MACd,eAAe;MACf,gBAAgB;CACrB;AACD;IACI,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;IACf,wBAAwB;IACxB,iBAAiB;IACjB,oBAAoB;CACvB;AACD;IACI,mBAAmB;IACnB,SAAS;IACT,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,cAAc;CACjB;AACD;IACI,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;CACpB",file:"banner.vue",sourcesContent:["\n.banner[data-v-739e7d78] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-739e7d78] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-739e7d78] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-739e7d78] {\n      background: url(../assets/imgs/back.png) no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner .my_title[data-v-739e7d78] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n.banner button[data-v-739e7d78] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n.banner .myLeftStyle[data-v-739e7d78] {\n    color: #222444;\n    font-size: 4.8vw;\n    font-weight: 500;\n    padding-left: 2vw;\n    text-align: left;\n}\n"],sourceRoot:""}])},414:function(e,n,t){var o=t(413);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(308)("0724ee57",o,!0)},415:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"banner",style:{"margin-top":e.top+"vw"}},[t("div",{class:""+e.fix}),e._v(" "),t("div",{staticClass:"icon-back",on:{click:e.cilck}},[t("div",{staticClass:"icon"})]),e._v(" "),t("span",{staticClass:"my_title",class:e.left?"myLeftStyle":""},[e._v(e._s(e.title))]),e._v(" "),e._t("default")],2)},staticRenderFns:[]}},471:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(e.length){var t=[];if(""===n)t=[];else for(var o=0;o<e.length;o++)null!=e[o].title.match(n)&&t.push(e[o]);return t}}function a(e,n){return e.map(function(t,o){if(n&&n.length>0){var i=new RegExp(n,"g"),a='<span style="color: #ff2d55">'+n+"</span>";e[o].title=t.title.replace(i,a)}}),e}function r(e,n){var t=window.localStorage,o=(0,m.default)(e);t.setItem(n,o)}function A(e){var n=window.localStorage;return JSON.parse(n.getItem(e))}function c(e,n,t){e.push({path:n,query:t})}function l(e,n){var t=[],o=0;for(var i in e)e[i]!=n&&(t.push(e[i]),t[o++]=e[i]);return t}function d(e,n){var t=[],o=0;for(var i in e)e[i]!=n&&(t.push(e[i]),t[o++]=e[i]);return t.length==e.length&&(t=[].concat((0,v.default)(t),[n])),t}function s(e){var n=e.replace(/\--/g,"+");return decodeURIComponent(atob(n).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))}function g(e){return e.replace(/<img[^>]*>/gi,function(e,n){var e=e.replace(" ",' style="width: 100%;height:auto" ');return e})}function u(e){return e.replace(/<img[^>]*>/gi,function(e,n){var e=e.replace(" ",' style="width: 100%;height:auto;" ');return e})}function f(e){return e.replace(/<embed[^>]*>/gi,function(e,n){var t=e.split(" ")[1].split("=")[1],e="<video src="+t+' style="width: 100%;height:auto" controls></video>';return e})}function p(e,n){var t=JSON.parse(localStorage.getItem("ajaxData")),o=t.account,i=(document.body.clientWidth,document.body.offsetHeight,document.createElement("canvas")),a=new Image;a.src="./static/images/logo.png",a.onload=function(){i.width=200,i.height=200;var t=i.getContext("2d");if(t.font="14px Vedana",t.fillStyle="#ccc",t.globalAlpha=.4,t.save(),t.translate(-120,50),t.rotate(-45*Math.PI/180),t.drawImage(a,0,185,14,15),t.fillText(o,15,200),t.restore(),t.translate(-18,80),t.rotate(-45*Math.PI/180),t.drawImage(a,100,85,14,15),t.fillText(o,115,100),t.save(),1==n)document.querySelector(e).style.backgroundImage="url("+i.toDataURL("image/png")+")",document.querySelector(e).style.backgroundPosition="left top",document.querySelector(e).style.backgroundRepeat="repeat",document.querySelector(e).style["overflow-x"]="hidden";else for(var r=document.querySelectorAll(e),A=0;A<r.length;A++)r[A].style.backgroundImage="url("+i.toDataURL("image/png")+")",r[A].style.backgroundPosition="left top",r[A].style.backgroundRepeat="repeat"}}Object.defineProperty(n,"__esModule",{value:!0}),n.waterMark=n.changeVedioStyle=n.changeGalleryStyle=n.changeImgStyle=n.b64DecodeUnicode=n.addItem=n.removeItem=n.skipNewPage=n.getLocalStorage=n.setLocalStorage=n.changeColor=n.fuzzyQuery=void 0;var h=t(5),v=o(h),C=t(34),m=o(C);n.fuzzyQuery=i,n.changeColor=a,n.setLocalStorage=r,n.getLocalStorage=A,n.skipNewPage=c,n.removeItem=l,n.addItem=d,n.b64DecodeUnicode=s,n.changeImgStyle=g,n.changeGalleryStyle=u,n.changeVedioStyle=f,n.waterMark=p}});