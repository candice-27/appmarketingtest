webpackJsonp([57],{1295:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(300),i=e.n(a),o=e(12),l=(e.n(o),e(50));e(51);t.default={props:["followTrackDetail"],computed:i()({},e.i(l.mapState)({followTrackDetails:function(n){return n.followTrackDetails.followTrackDetails}})),data:function(){return{}}}},1395:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(300),i=e.n(a),o=e(12),l=(e.n(o),e(50)),A=(e(51),e(315)),s=e.n(A),r=e(1743),d=e.n(r),c=e(9),p=e.n(c);t.default={components:{mybanner:s.a,followDetails:d.a},computed:i()({},e.i(l.mapState)({followTrackDetails:function(n){return n.followTrackDetails.followTrackDetails}})),data:function(){return{title:"需求详情",pulldown:-1,i:-1,status:!1,demandId:"",demandList:[],product:"",trList:[],showRecordForm:this.$route.query.recordForm,recordFormData:{},roomNum:"",shopName:"",shops:[]}},created:function(){var n=localStorage.getItem("ajaxData");this.ajaxData=JSON.parse(n);var t=localStorage.getItem("shops");this.shops=JSON.parse(t),this.demandId=this.$route.query.demandId,this.product=this.$route.query.product,this.getTrackDetails()},methods:i()({},e.i(l.mapMutations)(["setFollowTrackDetails","setCustomerDemand"]),{toNewTrack:function(){this.$router.push({path:"/newTrack",query:{demandId:this.demandId}})},getCreateTime:function(n){return n.trim().split(/\s+/)[0]},getTrackDetails:function(){var n=this;p.a.getAjax(this,"demand",{demandId:this.demandId},"v2").then(function(t){if(t){n.demandList=t.data,n.roomNumJudge();var e=n.demandList.shopId;n._changeShopName(e)}}).catch(function(t){510===t&&n.getTrackDetails()})},_changeShopName:function(n){var t=this;this.shops&&n&&this.shops.forEach(function(e,a){e.id===n&&(t.shopName=e.name)})},roomNumJudge:function(){5===this.demandList.roomNum?this.roomNum="5及以上":this.roomNum=this.demandList.roomNum},toChangeDemand:function(){this.setCustomerDemand({buyReason:this.demandList.buyReason,colorPref:this.demandList.colorPref,id:this.demandList.id,intention:this.demandList.intention,progress:this.demandList.progress,remark:this.demandList.remark,roomNum:this.demandList.roomNum,stylePref:this.demandList.stylePref,shopId:this.demandList.shopId}),this.$router.push({path:"/changeDemand"})},pullDown:function(n){this.setFollowTrackDetails(this.demandList.trList[n]),this.status?this.pulldown==n?(this.i=-1,this.status=!1,this.pulldown=-1):(this.i=n,this.pulldown=n):(this.status=!0,this.pulldown=n,this.i=n)}})}},1416:function(n,t,e){t=n.exports=e(222)(),t.push([n.i,"\n.trackDetalis[data-v-0218cd6a] {\n  color: #363636;\n  background: #f8f8f8;\n  min-height: 100vh;\n}\n.trackDetalis h1[data-v-0218cd6a] {\n    padding-top: 16vw;\n    font-size: 5.64vw;\n    line-height: 2em;\n    padding-left: 4.6vw;\n    margin-top: 2vw;\n}\n.trackDetalis .tilte[data-v-0218cd6a] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    position: relative;\n}\n.trackDetalis .tilte h2[data-v-0218cd6a] {\n      font-size: 4vw;\n      margin-left: 2vw;\n}\n.trackDetalis .tilte p[data-v-0218cd6a] {\n      background: #007aff;\n      width: 0.53vw;\n      height: 4vw;\n      margin-left: 4.6vw;\n}\n.trackDetalis .tilte button[data-v-0218cd6a] {\n      position: absolute;\n      right: 5vw;\n      line-height: 2em;\n}\n.trackDetalis .customer-demand ul[data-v-0218cd6a] {\n    border-top: 1px solid  #b5b5b5;\n    border-bottom: 1px solid #b5b5b5;\n    background: #fff;\n    padding: 2vw 4vw;\n    margin-bottom: 4vw;\n    margin-top: 2vw;\n}\n.trackDetalis .customer-demand ul li[data-v-0218cd6a] {\n      font-size: 4vw;\n      line-height: 2em;\n      display: -ms-flexbox;\n      display: flex;\n}\n.trackDetalis .customer-demand ul li p[data-v-0218cd6a] {\n        -ms-flex: 0.3;\n            flex: 0.3;\n}\n.trackDetalis .customer-demand ul li span[data-v-0218cd6a] {\n        -ms-flex: 0.7;\n            flex: 0.7;\n}\n.trackDetalis .follow-up-history .followTitle[data-v-0218cd6a] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    padding: 1vw 4vw;\n    background: #efeff4;\n    color: #363636;\n    line-height: 9.06vw;\n    font-size: 4vw;\n    margin-top: 2vw;\n}\n.trackDetalis .follow-up-history ul[data-v-0218cd6a] {\n    border-top: 1px solid  #b5b5b5;\n    border-bottom: 1px solid #b5b5b5;\n    background: #fff;\n    margin-bottom: 4vw;\n}\n.trackDetalis .follow-up-history ul .detail-wrapper[data-v-0218cd6a] {\n      font-size: 4vw;\n      line-height: 2em;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 1vw 4vw;\n}\n.trackDetalis .follow-up-history ul .detail-wrapper .time[data-v-0218cd6a] {\n        -ms-flex: 0.45;\n            flex: 0.45;\n}\n.trackDetalis .follow-up-history ul .detail-wrapper .people[data-v-0218cd6a] {\n        -ms-flex: 0.55;\n            flex: 0.55;\n}\n.trackDetalis .follow-up-history ul .detail-wrapper p[data-v-0218cd6a] {\n        color: #999;\n}\n.trackDetalis .follow-up-history ul .detail-wrapper .icon[data-v-0218cd6a] {\n        padding-left: 2vw;\n}\n.trackDetalis .follow-up-history ul .detail-wrapper .icon img[data-v-0218cd6a] {\n          width: 1.6vw;\n          height: 3.2vw;\n          transform: rotate(90deg);\n}\n.trackDetalis .follow-up-history ul .detail-wrapper .icon .pullDown[data-v-0218cd6a] {\n          transform: rotate(-90deg);\n}\n","",{version:3,sources:["E:/project/marketing/src/pages/customer/trackDetails.vue"],names:[],mappings:";AACA;EACE,eAAe;EACf,oBAAoB;EACpB,kBAAkB;CACnB;AACD;IACI,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,oBAAoB;IACpB,gBAAgB;CACnB;AACD;IACI,qBAAqB;IACrB,cAAc;IACd,uBAAuB;QACnB,oBAAoB;IACxB,mBAAmB;CACtB;AACD;MACM,eAAe;MACf,iBAAiB;CACtB;AACD;MACM,oBAAoB;MACpB,cAAc;MACd,YAAY;MACZ,mBAAmB;CACxB;AACD;MACM,mBAAmB;MACnB,WAAW;MACX,iBAAiB;CACtB;AACD;IACI,+BAA+B;IAC/B,iCAAiC;IACjC,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;CACnB;AACD;MACM,eAAe;MACf,iBAAiB;MACjB,qBAAqB;MACrB,cAAc;CACnB;AACD;QACQ,cAAc;YACV,UAAU;CACrB;AACD;QACQ,cAAc;YACV,UAAU;CACrB;AACD;IACI,qBAAqB;IACrB,cAAc;IACd,uBAAuB;QACnB,+BAA+B;IACnC,iBAAiB;IACjB,oBAAoB;IACpB,eAAe;IACf,oBAAoB;IACpB,eAAe;IACf,gBAAgB;CACnB;AACD;IACI,+BAA+B;IAC/B,iCAAiC;IACjC,iBAAiB;IACjB,mBAAmB;CACtB;AACD;MACM,eAAe;MACf,iBAAiB;MACjB,qBAAqB;MACrB,cAAc;MACd,iBAAiB;CACtB;AACD;QACQ,eAAe;YACX,WAAW;CACtB;AACD;QACQ,eAAe;YACX,WAAW;CACtB;AACD;QACQ,YAAY;CACnB;AACD;QACQ,kBAAkB;CACzB;AACD;UACU,aAAa;UACb,cAAc;UACd,yBAAyB;CAClC;AACD;UACU,0BAA0B;CACnC",file:"trackDetails.vue",sourcesContent:["\n.trackDetalis[data-v-0218cd6a] {\n  color: #363636;\n  background: #f8f8f8;\n  min-height: 100vh;\n}\n.trackDetalis h1[data-v-0218cd6a] {\n    padding-top: 16vw;\n    font-size: 5.64vw;\n    line-height: 2em;\n    padding-left: 4.6vw;\n    margin-top: 2vw;\n}\n.trackDetalis .tilte[data-v-0218cd6a] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    position: relative;\n}\n.trackDetalis .tilte h2[data-v-0218cd6a] {\n      font-size: 4vw;\n      margin-left: 2vw;\n}\n.trackDetalis .tilte p[data-v-0218cd6a] {\n      background: #007aff;\n      width: 0.53vw;\n      height: 4vw;\n      margin-left: 4.6vw;\n}\n.trackDetalis .tilte button[data-v-0218cd6a] {\n      position: absolute;\n      right: 5vw;\n      line-height: 2em;\n}\n.trackDetalis .customer-demand ul[data-v-0218cd6a] {\n    border-top: 1px solid  #b5b5b5;\n    border-bottom: 1px solid #b5b5b5;\n    background: #fff;\n    padding: 2vw 4vw;\n    margin-bottom: 4vw;\n    margin-top: 2vw;\n}\n.trackDetalis .customer-demand ul li[data-v-0218cd6a] {\n      font-size: 4vw;\n      line-height: 2em;\n      display: -ms-flexbox;\n      display: flex;\n}\n.trackDetalis .customer-demand ul li p[data-v-0218cd6a] {\n        -ms-flex: 0.3;\n            flex: 0.3;\n}\n.trackDetalis .customer-demand ul li span[data-v-0218cd6a] {\n        -ms-flex: 0.7;\n            flex: 0.7;\n}\n.trackDetalis .follow-up-history .followTitle[data-v-0218cd6a] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    padding: 1vw 4vw;\n    background: #efeff4;\n    color: #363636;\n    line-height: 9.06vw;\n    font-size: 4vw;\n    margin-top: 2vw;\n}\n.trackDetalis .follow-up-history ul[data-v-0218cd6a] {\n    border-top: 1px solid  #b5b5b5;\n    border-bottom: 1px solid #b5b5b5;\n    background: #fff;\n    margin-bottom: 4vw;\n}\n.trackDetalis .follow-up-history ul .detail-wrapper[data-v-0218cd6a] {\n      font-size: 4vw;\n      line-height: 2em;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 1vw 4vw;\n}\n.trackDetalis .follow-up-history ul .detail-wrapper .time[data-v-0218cd6a] {\n        -ms-flex: 0.45;\n            flex: 0.45;\n}\n.trackDetalis .follow-up-history ul .detail-wrapper .people[data-v-0218cd6a] {\n        -ms-flex: 0.55;\n            flex: 0.55;\n}\n.trackDetalis .follow-up-history ul .detail-wrapper p[data-v-0218cd6a] {\n        color: #999;\n}\n.trackDetalis .follow-up-history ul .detail-wrapper .icon[data-v-0218cd6a] {\n        padding-left: 2vw;\n}\n.trackDetalis .follow-up-history ul .detail-wrapper .icon img[data-v-0218cd6a] {\n          width: 1.6vw;\n          height: 3.2vw;\n          transform: rotate(90deg);\n}\n.trackDetalis .follow-up-history ul .detail-wrapper .icon .pullDown[data-v-0218cd6a] {\n          transform: rotate(-90deg);\n}\n"],sourceRoot:""}])},1418:function(n,t,e){t=n.exports=e(222)(),t.push([n.i,"\n.followDetails[data-v-02ae5b66] {\n  padding: 0 4.4vw 6.6vw 4.4vw;\n  border-top: 2px solid #007aff;\n  border-bottom: 2px solid #007aff;\n  color: #363636;\n  background: #fff;\n}\n.followDetails h1[data-v-02ae5b66] {\n    font-size: 4vw;\n    line-height: 3em;\n}\n.followDetails .follow-situtation[data-v-02ae5b66], .followDetails .follow-plan[data-v-02ae5b66] {\n    width: 91.33vw;\n    height: 23.46vw;\n    overflow: scroll;\n    border: 1px solid #e1e1e1;\n    border-radius: 1.6vw;\n    background: #f8f8f8;\n    padding: 4vw;\n    box-sizing: border-box;\n}\n.followDetails ul li[data-v-02ae5b66] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    line-height: 12vw;\n}\n.followDetails ul li p[data-v-02ae5b66] {\n      color: #999;\n}\n","",{version:3,sources:["E:/project/marketing/src/components/customer/dealCustomer/followDetails.vue"],names:[],mappings:";AACA;EACE,6BAA6B;EAC7B,8BAA8B;EAC9B,iCAAiC;EACjC,eAAe;EACf,iBAAiB;CAClB;AACD;IACI,eAAe;IACf,iBAAiB;CACpB;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,0BAA0B;IAC1B,qBAAqB;IACrB,oBAAoB;IACpB,aAAa;IACb,uBAAuB;CAC1B;AACD;IACI,qBAAqB;IACrB,cAAc;IACd,uBAAuB;QACnB,+BAA+B;IACnC,kBAAkB;CACrB;AACD;MACM,YAAY;CACjB",file:"followDetails.vue",sourcesContent:["\n.followDetails[data-v-02ae5b66] {\n  padding: 0 4.4vw 6.6vw 4.4vw;\n  border-top: 2px solid #007aff;\n  border-bottom: 2px solid #007aff;\n  color: #363636;\n  background: #fff;\n}\n.followDetails h1[data-v-02ae5b66] {\n    font-size: 4vw;\n    line-height: 3em;\n}\n.followDetails .follow-situtation[data-v-02ae5b66], .followDetails .follow-plan[data-v-02ae5b66] {\n    width: 91.33vw;\n    height: 23.46vw;\n    overflow: scroll;\n    border: 1px solid #e1e1e1;\n    border-radius: 1.6vw;\n    background: #f8f8f8;\n    padding: 4vw;\n    box-sizing: border-box;\n}\n.followDetails ul li[data-v-02ae5b66] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    line-height: 12vw;\n}\n.followDetails ul li p[data-v-02ae5b66] {\n      color: #999;\n}\n"],sourceRoot:""}])},1549:function(n,t,e){var a=e(1416);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(223)("9b7ffca6",a,!0)},1551:function(n,t,e){var a=e(1418);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(223)("ad50c346",a,!0)},1743:function(n,t,e){e(1551);var a=e(89)(e(1295),e(1795),"data-v-02ae5b66",null);n.exports=a.exports},1793:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"trackDetalis"},[a("mybanner",{attrs:{title:n.title}}),n._v(" "),a("h1"),n._v(" "),a("div",{staticClass:"customer-demand"},[a("div",{staticClass:"tilte"},[a("p"),n._v(" "),a("h2",[n._v("客户需求")]),n._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:n.showRecordForm,expression:"showRecordForm"}],on:{click:n.toChangeDemand}},[n._v("更改")])]),n._v(" "),a("ul",[a("li",[a("p",[n._v("意向产品")]),n._v(" "),a("span",[n._v(n._s(n.demandList.intention))])]),n._v(" "),a("li",[a("p",[n._v("颜色偏好")]),n._v(" "),a("span",[n._v(n._s(n.demandList.colorPref))])]),n._v(" "),a("li",[a("p",[n._v("风格偏好")]),n._v(" "),a("span",[n._v(n._s(n.demandList.stylePref))])]),n._v(" "),a("li",[a("p",[n._v("购买原因")]),n._v(" "),a("span",[n._v(n._s(n.demandList.buyReason))])]),n._v(" "),a("li",[a("p",[n._v("装修进度")]),n._v(" "),a("span",[n._v(n._s(n.demandList.progress))])]),n._v(" "),a("li",[a("p",[n._v("房间数量")]),n._v(" "),a("span",[n._v(n._s(n.roomNum))])]),n._v(" "),a("li",[a("p",[n._v("所属门店")]),n._v(" "),a("span",[n._v(n._s(n.shopName))])]),n._v(" "),a("li",[a("p",[n._v("客户备注")]),n._v(" "),a("span",[n._v(n._s(n.demandList.remark))])])])]),n._v(" "),a("div",{staticClass:"follow-up-history"},[n._m(0),n._v(" "),n._m(1),n._v(" "),a("ul",n._l(n.demandList.trList,function(t,i){return a("li",{key:i,on:{click:function(t){return n.pullDown(i)}}},[a("div",{staticClass:"detail-wrapper"},[a("span",{staticClass:"time"},[n._v(n._s(n.getCreateTime(t.createTime)))]),n._v(" "),a("span",{staticClass:"people"},[n._v(n._s(t.followTime))]),n._v(" "),a("p",[n._v(n._s(t.probability))]),n._v(" "),a("div",{staticClass:"icon"},[a("img",{class:{pullDown:""+n.pulldown==i},attrs:{src:e(323),alt:""}})])]),n._v(" "),a("followDetails",{directives:[{name:"show",rawName:"v-show",value:n.i==i,expression:"i == index"}]})],1)}),0)]),n._v(" "),a("div",[a("button",{staticClass:"new",on:{click:n.toNewTrack}})])],1)},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"tilte"},[e("p"),n._v(" "),e("h2",[n._v("跟进历史")])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"followTitle"},[e("span",[n._v("跟进时间")]),n._v(" "),e("span",[n._v("下次跟进时间")]),n._v(" "),e("span",[n._v("成交概率")])])}]}},1795:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"followDetails"},[e("h1",[n._v("跟进情况")]),n._v(" "),e("div",{staticClass:"follow-situtation"},[n._v("\n    "+n._s(n.followTrackDetails.followSituation)+"\n  ")]),n._v(" "),e("ul",[e("li",[e("span",[n._v("成交率")]),n._v(" "),e("p",[n._v(n._s(n.followTrackDetails.probability))])]),n._v(" "),e("li",[e("span",[n._v("下次跟进日期")]),n._v(" "),e("p",[n._v(n._s(n.followTrackDetails.followTime))])])]),n._v(" "),e("h1",[n._v("跟进计划")]),n._v(" "),e("div",{staticClass:"follow-plan"},[n._v("\n    "+n._s(n.followTrackDetails.followPlan)+"\n  ")])])},staticRenderFns:[]}},275:function(n,t,e){e(1549);var a=e(89)(e(1395),e(1793),"data-v-0218cd6a",null);n.exports=a.exports},300:function(n,t,e){"use strict";t.__esModule=!0;var a=e(92),i=function(n){return n&&n.__esModule?n:{default:n}}(a);t.default=i.default||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}},312:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAfJJREFUSIml1k2IjVEcx/HPYIMSslATymZIU966iMaUlWNBqUlKsxALbJBS1hYTC0UpC1mQxdiQnsnGW8gw2EzZKKGZmiQriQ2Lc69ux7lz7/Pc/+qe7zn3+5zT8zy//9NTq9V0WZdxov77/LwuZTcw3DQ+143wFg6msKrwDvZn+NEqwvvYk+GHQgg3ywofYTDDh0IIo5Q78hMMZPi+EMLdxqAT4Vw8x5bMXAghjDWDdsIFeIYNmbldeJjC2YSL8RJ9Cf+DbRjP/amVcCleY3XCf2M7JlrtIidcXr/6yoT/RA2TrWQwJxmvwLuM7Ds2t5OlO1yDF1iSrJmp7+xzO1mzcB1eiXe1uabqsulOZMQj94s3IJV9FB+XjmUN4RjmJ/xB/UJfy8gawt4Mn8SPsrKG8GSGn8aVqsJLOJuZO45rVYQwgjOZ+SNizJcWwkUcy6wZxu0qQriKw5l1B8SkLi2E6zLNR4z9ooqQeMShDN8ttoHSQhjF3gwfFNtBNvpmE8I9MZnTGhBf1/QNayskxvzODF+P8aIoFpYVwlNsFeO/ufrxpiiKf5HXqZCY4jX8SngfJoqiWAY9Fb6+1orNa1HCp7CjzA4b9R6b8C3hvXhcRQgfxPCdSfiqqkL4go341MTedvvBOS326VPiE3ChS9//9RdWbVrN+RusKgAAAABJRU5ErkJggg=="},315:function(n,t,e){e(318);var a=e(89)(e(316),e(319),"data-v-2a50e813",null);n.exports=a.exports},316:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(12);e.n(a),e(51);t.default={name:"routerLink",props:["title","MoreBtn"],data:function(){return{fix:"",top:""}},mounted:function(){this.isIPhoneX()},methods:{cilck:function(){this.$router.back(-1)},isIPhoneX:function(n){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(812==screen.height&&375==screen.width||896==screen.height&&414==screen.width)&&(this.fix="fix",this.top="6")}}}},317:function(n,t,e){t=n.exports=e(222)(),t.push([n.i,"\n.banner[data-v-2a50e813] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-2a50e813] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-2a50e813] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-2a50e813] {\n      background: url("+e(312)+") no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner span[data-v-2a50e813] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n}\n.banner button[data-v-2a50e813] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    line-height: 11vw;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n","",{version:3,sources:["E:/project/marketing/src/components/banner.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;EACd,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,uBAAuB;MACnB,oBAAoB;EACxB,8BAA8B;EAC9B,oBAAoB;EACpB,iBAAiB;CAClB;AACD;IACI,mBAAmB;IACnB,oBAAoB;IACpB,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,YAAY;CACf;AACD;IACI,WAAW;IACX,eAAe;IACf,sBAAsB;CACzB;AACD;MACM,2DAA0D;MAC1D,sBAAsB;MACtB,cAAc;MACd,eAAe;MACf,gBAAgB;CACrB;AACD;IACI,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;CAClB;AACD;IACI,mBAAmB;IACnB,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,cAAc;CACjB",file:"banner.vue",sourcesContent:["\n.banner[data-v-2a50e813] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-2a50e813] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-2a50e813] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-2a50e813] {\n      background: url(../assets/imgs/back.png) no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner span[data-v-2a50e813] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n}\n.banner button[data-v-2a50e813] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    line-height: 11vw;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n"],sourceRoot:""}])},318:function(n,t,e){var a=e(317);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(223)("34a363a4",a,!0)},319:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"banner",style:{"margin-top":n.top+"vw"}},[e("div",{class:""+n.fix}),n._v(" "),e("div",{staticClass:"icon-back",on:{click:n.cilck}},[e("div",{staticClass:"icon"})]),n._v(" "),e("span",[n._v(n._s(n.title))]),n._v(" "),n._t("default")],2)},staticRenderFns:[]}},323:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAXCAYAAAA7kX6CAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NTk5MDI1RUVBMTUxMUU4QUQxODhGREY4MkJCMkEwRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NTk5MDI1RkVBMTUxMUU4QUQxODhGREY4MkJCMkEwRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1OTkwMjVDRUExNTExRThBRDE4OEZERjgyQkIyQTBFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1OTkwMjVERUExNTExRThBRDE4OEZERjgyQkIyQTBFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iA07CgAAAVRJREFUeNpi3Lp1ayUDA4MAEH9jgAA2ID7i5eW1nQEPYAHi/0Bchi6xbds2JaDm+7g0MgElO4B0Ixa53fhsZPz//z/MBpBCFzT55UCDo7DaiMR2A+KXaPKRQAPT8NoItVUbSF3Bok4LaPN1XDYyACWvAqkELBqPAA1lxakRqnkhkJqHJiwExPvwaoRqTgZSx9GEbYC2NuDVCAXeQPwdTaweqNkVI3CwJAITIHUaTRiUwtTx2Qhy8hkghR4dXEB8Ga9GmN+wiG3GqxHoVFByjEMT3gF0SRwTHk3BQKocTfgxyAc4AweoSR1I3cBinjTQtmdYowOoiQdIncCiyR2mCVc8boNmbGSQCdS0C2fKAdo2DUjZommaD9Q0A19+jAdSC9DkLwA1GeLMj0BNWlg0fQZiO5xFB1CTOZC+ikXOCWjbZ3yFFShlrAfiD0jia6HJDScACDAA6ixxzcqoUmAAAAAASUVORK5CYII="}});