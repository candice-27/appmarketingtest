webpackJsonp([9],{"3pAn":function(t,e){},HNkM:function(t,e){},RNGG:function(t,e){},Yb9t:function(t,e,s){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:"header class"+this.storeClass},[e("div",{staticClass:"headerBox"},[e("button",{attrs:{type:"button"},on:{click:this.back}})]),this._v(" "),e("h3",[this._v("4S星级认证")])])},staticRenderFns:[]};var a=s("C7Lr")({props:["storeClass"],data:function(){return{}},methods:{back:function(){this.$router.go(-1)}}},n,!1,function(t){s("rFDB")},"data-v-395c921a",null);e.a=a.exports},a436:function(t,e){},cN1N:function(t,e){},dJjw:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("4YfN"),a=s.n(n),r=s("lC5x"),i=s.n(r),o=s("J0Oq"),c=s.n(o),l=s("Yb9t"),u={props:{shops:{type:Array,default:function(){return[]}}},data:function(){return{selectIndex:0,storeSelectShow:!1}},created:function(){var t=this;this.$nextTick(function(){document.onclick=function(){t.storeSelectShow=!1}})},methods:{showStoreList:function(){this.storeSelectShow=!this.storeSelectShow},bindSelect:function(t,e){this.selectIndex=t,this.storeSelectShow=!1,this.$emit("onGetStoreId",e)}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:"storeSelect "+(t.storeSelectShow?"on":"")},[s("h3",[s("span",{on:{click:function(e){return e.stopPropagation(),t.showStoreList(e)}}},[t._v(t._s(t.shops[t.selectIndex].name))])]),t._v(" "),s("ul",{on:{click:function(e){t.storeSelectShow=!1}}},t._l(t.shops,function(e,n){return s("li",{key:"shops"+n,on:{click:function(s){return s.stopPropagation(),t.bindSelect(n,e.id)}}},[s("span",[t._v(t._s(e.name))])])}),0)])},staticRenderFns:[]};var d=s("C7Lr")(u,p,!1,function(t){s("xcD4")},"data-v-5c5bb23a",null).exports,h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentBox"},[e("div",{staticClass:"border-bottom"},[e("p",{staticClass:"title"},[this._v(this._s(this.title))])]),this._v(" "),e("div",{staticClass:"content"},[this._t("default")],2)])},staticRenderFns:[]};var C=s("C7Lr")({props:["title"],data:function(){return{}}},h,!1,function(t){s("HNkM")},"data-v-318bef6c",null).exports,v={props:["type","storeClass","index","iconData","hasNew","row"],data:function(){return{storeClassCN:this.getClassCN()}},methods:{toCheck:function(){this.index+1<=this.storeClass?(console.log("跳转"+(this.index+1)),this.$router.push({path:"/starCheck"})):console.log("未达等级")},getClassCN:function(){switch(this.index){case 0:this.storeClassCN="一";break;case 1:this.storeClassCN="二";break;case 2:this.storeClassCN="三";break;case 3:this.storeClassCN="四";break;default:this.storeClassCN="五"}}},mounted:function(){this.getClassCN()}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return"dailyCheck"===t.type?s("div",{class:"iconBox_wrapper "+(t.row?"row":"")},[s("div",{staticClass:"starImg",style:{background:"url(./static/images/4s/starCheck/star"+(t.index+1<=t.storeClass?t.index+1+"Bg":t.index+1+"Bg_no")+".png) center center / 100% 100%  no-repeat"}},[t._v(t._s(t.index+1))]),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(t.storeClassCN+"星检查"))])]):"gradeReport"===t.type?s("div",{staticClass:"iconBox_wrapper"},[s("div",{staticClass:"starImg",style:{background:"url("+t.iconData.icon+") no-repeat,url("+t.iconData.bgIcon+")",backgroundSize:"40% auto,100% 100%",backgroundPosition:"center"}}),t._v(" "),"tips"===t.hasNew?s("div",{staticClass:"tips_icon"}):t._e(),t._v(" "),"news"===t.hasNew?s("div",{staticClass:"news_icon"},[s("span",[t._v("4")])]):t._e(),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(t.iconData.text))])]):s("div",{staticClass:"iconBox_wrapper"},[s("div",{staticClass:"starImg",style:{background:"url(./static/images/4s/starCheck/config.png) no-repeat",backgroundSize:"100% 100%",backgroundPosition:"center"}}),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s("配置权限"))])])},staticRenderFns:[]};var g=s("C7Lr")(v,f,!1,function(t){s("cN1N")},"data-v-650aa0a1",null).exports,m={props:["shopId"],components:{ContentBox:C,iconBox:g},data:function(){return{storeClass:2,data:{icon:"./static/images/4s/star_re.png",bgIcon:"./static/images/4s/starCheck.png",text:"星级检查",link:"starCheckW"}}},methods:{handleClick:function(t){JSON.parse(localStorage.getItem("ajaxData")).positionList.positionType;"supervisor"!=localStorage.getItem("certPositionType")?this.$router.push({path:"/starCheck",query:{shopId:this.shopId}}):this.$router.push({path:"/leader-check"})}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dailyCheck"},[s("ContentBox",{staticClass:"wrapper",attrs:{title:"日常检查"}},[s("div",{staticClass:"iconBox-wrapper"},[s("iconBox",{attrs:{type:"gradeReport",iconData:t.data,hasNew:"tip"},nativeOn:{click:function(e){return t.handleClick(t.data.link)}}})],1)])],1)},staticRenderFns:[]};var _=s("C7Lr")(m,x,!1,function(t){s("3pAn")},"data-v-76a65bdc",null).exports,k={components:{ContentBox:C,IconBox:g},data:function(){return{data1:{icon:"./static/images/4s/starCheck/write.png",bgIcon:"./static/images/4s/starCheck/btnBg.png",text:"检查记录",link:"recordJxs"},data2:{icon:"./static/images/4s/star_re.png",bgIcon:"./static/images/4s/starResult.png",text:"评星结果",link:"judgeStar"}}},methods:{handleClick:function(t){this.$router.push({name:t})}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ContentBox",{staticClass:"wrapper",attrs:{title:"评分报表"}},[s("div",{staticClass:"iconBox-wrapper"},[s("div",{staticClass:"icon-box"},[s("iconBox",{attrs:{type:"gradeReport",iconData:t.data1},nativeOn:{click:function(e){return t.handleClick(t.data1.link)}}})],1)])])],1)},staticRenderFns:[]};var S=s("C7Lr")(k,b,!1,function(t){s("i+PH")},"data-v-5ec833cc",null).exports,w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return"gradeReport"===t.type?s("div",{staticClass:"iconBox_wrapper"},[s("div",{staticClass:"starImg",style:{background:"url(./static/images/4s/starCheck/write.png) no-repeat, url(./static/images/4s/starCheck/btnBg.png) no-repeat",backgroundSize:"40% auto, 100% 100%",backgroundPosition:"center"}}),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(t.title))])]):s("div",{staticClass:"iconBox_wrapper"},[s("div",{staticClass:"starImg",style:{background:"url(./static/images/4s/starCheck/"+t.icon+".png) no-repeat, url(./static/images/4s/starCheck/config.png) no-repeat",backgroundSize:"40% auto, 100% 100%",backgroundPosition:"center"}}),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(t.title))])])},staticRenderFns:[]};var B={components:{ContentBox:C,iconBox1:s("C7Lr")({props:["type","storeClass","title","icon"],data:function(){return{}},methods:{},mounted:function(){}},w,!1,function(t){s("RNGG")},"data-v-578e8c84",null).exports},data:function(){return{}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"moduleConfig"},[e("ContentBox",{staticClass:"wrapper",attrs:{title:"模块配置"}},[e("div",{staticClass:"iconBox-wrapper"},[e("iconBox1",{attrs:{icon:"lock",title:"权限配置"}})],1)])],1)},staticRenderFns:[]};var y=s("C7Lr")(B,I,!1,function(t){s("mRWR")},"data-v-507c0ff6",null).exports,R={components:{ContentBox:C,IconBox:g},data:function(){return{iconList:[{icon:"./static/images/4s/atest.png",bgIcon:"./static/images/4s/starCheck.png",text:"星级认证",link:"starAtest"},{icon:"./static/images/4s/star_re.png",bgIcon:"./static/images/4s/starResult.png",text:"认证进度",link:"ApplyRecord"}],certPositionType:localStorage.getItem("supervisor")}},computed:{comListData:function(){return"supervisor"==localStorage.getItem("certPositionType")?(this.iconList.splice(1,1),this.iconList):this.iconList}},methods:{handleClick:function(t){this.$router.push({name:t})}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ContentBox",{staticClass:"wrapper",attrs:{title:"星级认证"}},[s("div",{staticClass:"iconBox-wrapper"},[s("div",{staticClass:"icon-box"},t._l(t.comListData,function(e){return s("iconBox",{key:e.text,attrs:{type:"gradeReport",iconData:e},nativeOn:{click:function(s){return t.handleClick(e.link)}}})}),1)])])],1)},staticRenderFns:[]};var D=s("C7Lr")(R,N,!1,function(t){s("a436")},"data-v-bd6af392",null).exports,L=s("PR0l"),$=s("wSez"),P=s("HVJf"),F={components:{Header:l.a,StoreSelect:d,DailyCheck:_,GradeReport:S,ModuleConfig:y,starAttestation:D},data:function(){return{soreClass:5,shops:[{name:""}],categories:[],shopId:0}},created:function(){var t=this;return c()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t._initData();case 1:case"end":return e.stop()}},e,t)}))()},methods:a()({},Object(P.c)(["setShopId"]),{_initData:function(){var t=this;return c()(i.a.mark(function e(){var s,n,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.m)();case 2:if(s=e.sent,n=s.code,a=s.msg,r=s.shops,0==n){e.next=9;break}return Object($.Toast)({message:a,position:"middle",duration:2e3}),e.abrupt("return");case 9:r.length>0&&(t.shops=r,t.shopId=r[0].id,t.setShopId(r[0].id));case 10:case"end":return e.stop()}},e,t)}))()},onGetStoreId:function(t){this.setShopId(t),this.shopId=t}})},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("Header",{attrs:{storeClass:t.soreClass}}),t._v(" "),s("StoreSelect",{directives:[{name:"permission",rawName:"v-permission",value:["Store Manager","Sleep Consultant"],expression:"['Store Manager','Sleep Consultant']"}],attrs:{shops:t.shops},on:{onGetStoreId:t.onGetStoreId}}),t._v(" "),s("DailyCheck",{directives:[{name:"permission",rawName:"v-permission",value:["Store Manager","Sleep Consultant","supervisor"],expression:"['Store Manager','Sleep Consultant','supervisor']"}],attrs:{shopId:t.shopId}}),t._v(" "),s("starAttestation",{directives:[{name:"permission",rawName:"v-permission",value:["Dealer Boss","supervisor"],expression:"['Dealer Boss','supervisor']"}]}),t._v(" "),s("GradeReport",{attrs:{type:"gradeReport"}})],1)},staticRenderFns:[]};var G=s("C7Lr")(F,E,!1,function(t){s("thjr")},"data-v-52cb9a28",null);e.default=G.exports},"i+PH":function(t,e){},mRWR:function(t,e){},rFDB:function(t,e){},thjr:function(t,e){},xcD4:function(t,e){}});
//# sourceMappingURL=9.3671650abd402d73ed03.js.map