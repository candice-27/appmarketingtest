webpackJsonp([11],{"2ZF7":function(t,e){},"3Hdd":function(t,e){},"68Xj":function(t,e,s){"use strict";var a=s("4YfN"),i=s.n(a),r=s("CqDD"),o=s("xd7I"),l=(s("e1F6"),s("HVJf")),n=s("sC8f"),c=s("vGYV"),u=(s("/gIj"),s("wSez"));o.default.component(u.Loadmore.name,u.Loadmore);var h={name:"enquiryOrder",components:{TopBar:n.a},props:["changeResultTit"],data:function(){return{account:"",ajaxData:[],dealCusList:[],addPullData:[],page:3,limit:10,allPage:"",baceLimit:30,allLoaded:!1,id:"",compareTime:[],activecolor:[],topbar:{leftTitle:"客户信息",centerTitle:"电话",rightTitle:"最近跟进"},parmas:{}}},computed:i()({},Object(l.d)({orderList:function(t){return t.orderList.orderList},headerStatus:function(t){return t.customerHeader.headerStatus},orderInfoDetails:function(t){return t.orderInfoDetails.orderInfoDetails},orderScroll:function(t){return t.customerScroll.orderScroll},customerTime:function(t){return t.rightContainer.customerTime},isSelectStatus:function(t){return t.rightContainer.isSelectStatus},orderTotalPrice:function(t){return t.orderInfoDetails.orderTotalPrice},orderDiscountPrice:function(t){return t.orderInfoDetails.orderDiscountPrice},customerAjaxParams:function(t){return t.customer.customerAjaxParams}})),watch:{headerStatus:function(){this.headerStatus[1].status&&(0==this.orderScroll&&(this.isSelectStatus?this.loadSelectData(this.customerTime):this.loadData()),this.$refs.order.addEventListener("scroll",this.handleScroll,!0),this.$refs.order.scrollTop=this.orderScroll)},baceLimit:function(){this.isExpire(this.baceLimit)},customerTime:function(){this.setIsSelectStatus(!0),this.initData(),this.loadSelectData(this.customerTime),""===this.customerTime.startTime&&(this.setIsSelectStatus(!1),this.loadData())}},mounted:function(){this.$refs.order.addEventListener("scroll",this.handleScroll,!0),this.$refs.order.scrollTop=this.orderScroll},created:function(){this.parmas=Object(r.a)(this.customerAjaxParams,this.parmas),this.parmas.type="Approved",this.isSelectStatus?this.loadSelectData(this.customerTime):this.loadData()},methods:i()({initData:function(){this.baceLimit=30,this.setOrderScroll(0),this.$refs.order.scrollTop=this.orderScroll,localStorage.removeItem("selectLimit"),localStorage.removeItem("limit"),this.getSelectLimit()},handleScroll:function(t){var e=t.target.scrollTop;this.setOrderScroll(e)},isExpire:function(t){if(this.orderList.records)for(var e=this.orderList.records,s=new Date,a=0;a<t;a++)if(e[a]){var i=c.a.compareTimeStamp(e[a].demandTime,s);"关闭"===e[a].orderStatus||this.$set(this.compareTime,a,i)}}},Object(l.c)(["setOrderList","setOrderInfoDetails","setOrderScroll","setIsSelectStatus","setOrderTotalPrice","setOrderDiscountPrice","setDealTabStatus"]),{loadBottom:function(){this.$refs.loadmore.onBottomLoaded(),this.isSelectStatus?this.pullDownData(this.customerTime.startTime,this.customerTime.endTime):this.pullDownData()},getOrderList:function(t,e,s,a){var i=this;this.parmas.page=t,this.parmas.limit=e,this.parmas.sd=s,this.parmas.ed=a,this.parmas.sort="",this.parmas.u="",this.parmas.l="",c.a.getAjax("/v3/app/customer/list",this.parmas).then(function(e){e&&(i.allLoaded=!1,i.allPage=Math.ceil(e.data.total/10),t<=3?(i.setOrderList(e.data),i.dealCusList=i.orderList,i.$emit("changeResultTit","全部客户 ("+(null==i.orderList.total?"0":i.orderList.total)+")")):(i.getDiffLimit(),i.addPullData=e.data,i.dealCusList.records=i.dealCusList.records.concat(i.addPullData.records),i.setOrderList(i.dealCusList)),i.isExpire(i.baceLimit))}).catch(function(r){510===r&&i.getOrderList(t,e,s,a)})},loadData:function(){this.getLimit();var t=(this.baceLimit-30)/10;this.page=3+t,this.getOrderList(1,this.baceLimit)},loadSelectData:function(t){if(t.startTime){this.getSelectLimit();var e=(this.baceLimit-30)/10;this.page=3+e,this.getOrderList(1,this.baceLimit,t.startTime,t.endTime)}},pullDownData:function(t,e){this.page<this.allPage?(this.allLoaded=!0,this.page++,this.getOrderList(this.page,this.limit,t,e)):(this.allLoaded=!0,c.a.tip("没有更多数据了"))},getDiffLimit:function(){this.isSelectStatus?(this.setSelectLimit(this.baceLimit+10),this.getSelectLimit()):(this.setLimit(this.baceLimit+10),this.getLimit())},setLimit:function(t){var e='{"limit":" '+t+'"}';localStorage.setItem("limit",e)},setSelectLimit:function(t){var e='{"selectLimit":" '+t+'"}';localStorage.setItem("selectLimit",e)},getLimit:function(){var t=localStorage.getItem("limit");t?this.baceLimit=parseInt(JSON.parse(t).limit):this.setLimit(this.baceLimit)},getSelectLimit:function(t){var e=localStorage.getItem("selectLimit");e?this.baceLimit=parseInt(JSON.parse(e).selectLimit):this.setSelectLimit(this.baceLimit)},calcPrice:function(t){if(t.orderItemList){var e,s=0;t.orderItemList.forEach(function(t,e){s+=t.price*t.quantity}),e=s-t.totalAmount,this.setOrderTotalPrice(s),this.setOrderDiscountPrice(e)}},orderInfoIn:function(t){this.setDealTabStatus(c.a.btnList(["订单信息","客户信息","意向信息"],0)),this.$router.push({path:"/enquiryInfo",query:{id:t,status:3}})}})},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"order",staticClass:"enquiryOrder"},[s("TopBar",{attrs:{topBarTitle:t.topbar}}),t._v(" "),s("ul",[s("mt-loadmore",{ref:"loadmore",attrs:{"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,"auto-fill":!1}},t._l(t.orderList.records,function(e,a){return s("li",{key:"list"+a,class:{active:t.compareTime[a]},on:{click:function(s){return t.orderInfoIn(e.accntId)}}},[s("div",{staticClass:"name"},[s("i",{class:"important"+e.level}),t._v(" "),s("span",{class:{active:t.compareTime[a]}},[t._v(t._s(e.username))]),t._v(" "),s("strong",{class:"urgency"+e.urgency})]),t._v(" "),"0"!==e.phone?s("span",{staticClass:"phone"},[t._v(t._s(e.phone))]):s("span",{staticClass:"phone"},[t._v("未收集")]),t._v(" "),s("span",{staticClass:"date",class:{active:t.compareTime[a]}},[t._v(t._s(e.followDate))])])}),0)],1)],1)},staticRenderFns:[]};var d=s("C7Lr")(h,m,!1,function(t){s("9VZO")},"data-v-99fdf874",null);e.a=d.exports},"9VZO":function(t,e){},JmxM:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("4YfN"),i=s.n(a),r=(s("84iU"),s("xd7I")),o=(s("e1F6"),s("HVJf")),l=s("Yarq"),n=s.n(l),c=s("AA3o"),u=s.n(c),h=s("xSur"),m=s.n(h),d=s("UzKs"),p=s.n(d),f=s("Y7Ml"),L=s.n(f),S=s("SWMD"),v=s("vGYV"),g=function(t){function e(){return u()(this,e),p()(this,(e.__proto__||n()(e)).apply(this,arguments))}return L()(e,t),m()(e,[{key:"getType",value:function(t){return v.a.getAjax("/v2/app/reference",{type:t})}}]),e}(S.a),C=s("TVmP"),T=s("a3Yh"),D=s.n(T),A=s("CqDD");r.default.use(o.a);var _={name:"customerHeader",props:["changeResultTit"],data:function(){var t;return t={top:"",ifShow:"hide",navShow:!0,ajaxData:{},customerClassifyList:v.a.btnList(["全部","紧急降序","级别A到D","级别D到A"],0),selectBtnText:"全部",searchKey:""},D()(t,"ajaxData",[]),D()(t,"key",!0),t},computed:i()({},Object(o.d)({rightHeadTitle:function(t){return t.rightContainer.rightHeadTitle},rightTimeSelect:function(t){return t.rightContainer.rightTimeSelect},rightContainerStatus:function(t){return t.rightContainer.rightContainerStatus},customerAjaxParams:function(t){return t.customer.customerAjaxParams},headerStatus:function(t){return t.customerHeader.headerStatus},dealCustomerList:function(t){return t.dealCustomerList.dealCustomerList},allCustomerList:function(t){return t.allCustomerList.allCustomerList}})),watch:{customerAjaxParams:function(t){1===t.page&&this.key&&this.getCustomerList()},headerStatus:function(){this.headerStatus[0].status&&this.getCustomerList()},rightContainerStatus:function(t){this.key=!1,"hideRightContainer"===t&&(this.getCustomerList(),this.key=!0)}},created:function(){this.customerAjaxParams.type="New",this.setCustomerAjaxParams(this.customerAjaxParams),this.headerStatus[0].status&&this.getCustomerList()},mounted:function(){this.isIPhoneX()},methods:i()({},Object(o.c)(["setRightContainerStatus","setCustomerList","setCustomerAjaxParams","setHeaderStatus","setAllLoaded","setRightTimeSelect","setRightHeadTitle","setOrderList","setDealCustomerList","setAllCustomerList"]),{search:function(t){13==t.keyCode&&(t.preventDefault(),this.searchCustomer())},showRightTimeSelect:function(){this.setRightTimeSelect(!0),this.headerStatus[1].status?this.setRightHeadTitle("订单交单日期"):this.setRightHeadTitle("流失时间")},showRightContainer:function(){this.setRightContainerStatus("show")},showCustomerClassify:function(){"show"===this.ifShow?this.ifShow="hide":this.ifShow="show"},customerClassifySelect:function(t){this.ifShow="hide";var e=Object(A.a)(this.customerAjaxParams,{});if("全部"===this.selectBtnText||this.selectBtnText!=this.customerClassifyList[t].name)switch(this.selectBtnText=this.customerClassifyList[t].name,v.a.changeBtnStatus(this.customerClassifyList,t),t){case 0:e.sort="",e.u="",e.sd="",e.ed="",e.l="",this.setAllLoaded(!1),this.setCustomerAjaxParams(e);break;case 1:e.sort="u",e.u="",e.sd="",e.ed="",e.l="",this.setAllLoaded(!1),this.setCustomerAjaxParams(e);break;case 2:e.sort="la",e.u="",e.sd="",e.ed="",e.l="",this.setAllLoaded(!1),this.setCustomerAjaxParams(e);break;case 3:e.sort="ld",e.u="",e.sd="",e.ed="",e.l="",this.setAllLoaded(!1),this.setCustomerAjaxParams(e)}},moduleSelect:function(t){this.setHeaderStatus(v.a.btnList(["意向客户","成交客户","流失客户","所有客户"],t))},getCustomerList:function(){var t=this;this.customerAjaxParams.page=1,this.setAllLoaded(!1),this.setCustomerAjaxParams(this.customerAjaxParams),v.a.getAjax("/v3/app/customer/list",this.customerAjaxParams).then(function(e){e&&t.setCustomerList(e.data)}).catch(function(e){510===e&&t.getCustomerList()})},searchCustomer:function(){var t=this;v.a.changeBtnStatus(this.customerClassifyList,0);var e=this.getType();console.log(e);var s={type:e,key:this.searchKey};v.a.getAjax("/v3/app/customer/list",s).then(function(s){s.data&&("New"===e?t.setCustomerList(s.data):"Approved"===e?(t.setOrderList(s.data),t.$emit("changeResultTit","全部客户 ("+(null==s.data.total?"0":s.data.total)+")")):"Closed"===e?(t.setDealCustomerList(s.data),t.$emit("changeResultTit","全部客户 ("+(null==s.data.total?"0":s.data.total)+")")):(t.setAllCustomerList(s.data),t.$emit("changeResultTit","全部客户 ("+(null==s.data.total?"0":s.data.total)+")")))}).catch(function(e){510===e&&t.searchCustomer()})},getType:function(){return this.headerStatus[0].status?"New":this.headerStatus[1].status?"Approved":this.headerStatus[2].status?"Closed":""},isIPhoneX:function(t){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(812==screen.height&&375==screen.width||896==screen.height&&414==screen.width)&&(this.fix="fix",this.top="6")}})},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header",style:{"padding-top":t.top+"vw"}},[a("div",{staticClass:"top"},[a("div",{staticClass:"search"},[a("h1",[t._v("客户")]),t._v(" "),a("form",{attrs:{action:""},on:{submit:function(t){t.preventDefault()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKey,expression:"searchKey"}],ref:"inpComp",staticClass:"input",attrs:{type:"search",placeholder:"请输入姓名或电话或微信号"},domProps:{value:t.searchKey},on:{keypress:t.search,input:function(e){e.target.composing||(t.searchKey=e.target.value)}}})])]),t._v(" "),a("ul",{staticClass:"moduleNav",style:{display:t.navShow?"flex":"none"}},t._l(t.headerStatus,function(e,s){return a("li",{key:"this.headerStatus"+s},[a("button",{staticClass:"topBarTitle",class:{on:e.status},on:{click:function(e){return t.moduleSelect(s)}}},[t._v("\n          "+t._s(e.name)+"\n          "),a("hr",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"item.status"}]})])])}),0)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.headerStatus[0].status,expression:"headerStatus[0].status"}],staticClass:"bot-select"},[a("button",{on:{click:t.showCustomerClassify}},[t._v(t._s(t.selectBtnText))]),t._v(" "),a("button",{staticClass:"filter",on:{click:t.showRightContainer}},[a("span",{staticClass:"line"}),t._v("\n      筛选\n      "),a("img",{staticClass:"filterImg",attrs:{src:s("ynh5"),alt:""}})]),t._v(" "),a("ul",{class:"customerClassify "+t.ifShow},t._l(t.customerClassifyList,function(e,s){return a("li",{key:"customerClassifyList"+s,class:{on:e.status},on:{click:function(e){return t.customerClassifySelect(s)}}},[t._v(t._s(e.name))])}),0)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.headerStatus[1].status||t.headerStatus[2].status,expression:"headerStatus[1].status || headerStatus[2].status"}],staticClass:"bot-total"},[a("p",[t._t("default")],2),t._v(" "),a("button",{on:{click:t.showRightTimeSelect}},[a("span",{staticClass:"line"}),t._v("\n      筛选\n      "),a("img",{staticClass:"filterImg",attrs:{src:s("ynh5"),alt:""}})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.headerStatus[3].status,expression:"headerStatus[3].status"}],staticClass:"bot-total"},[a("p",[t._t("default")],2)])])},staticRenderFns:[]};var w=s("C7Lr")(_,b,!1,function(t){s("eavT")},"data-v-7ee4e50d",null).exports,x=s("wSez"),y=s("sC8f"),j=s("TYi7");r.default.component(x.Loadmore.name,x.Loadmore),r.default.use(o.a);var P={components:{TopBar:y.a},name:"customerList",props:[],data:function(){return{topbar:{leftTitle:"客户信息",centerTitle:"意向产品",rightTitle:"最近跟进"}}},computed:i()({},Object(o.d)({customerAjaxParams:function(t){return t.customer.customerAjaxParams},customerList:function(t){return t.customer.customerList},headerStatus:function(t){return t.customerHeader.headerStatus},customerScroll:function(t){return t.customerScroll.customerScroll},allLoaded:function(t){return t.customer.allLoaded}})),watch:{headerStatus:function(){this.headerStatus[0].status&&(this.$refs.customer.addEventListener("scroll",this.handleScroll,!0),this.$refs.customer.scrollTop=this.customerScroll)}},created:function(){var t=localStorage.getItem("ajaxData");this.ajaxData=JSON.parse(t)},mounted:function(){this.$refs.customer.addEventListener("scroll",this.handleScroll,!0),this.$refs.customer.scrollTop=this.customerScroll},methods:i()({},Object(o.c)(["setCustomerAjaxParams","setCustomerScroll","setCustomerTabStatus","setCustomerList","setAllLoaded","setBtn","initShopList","getShopVal"]),{handleScroll:function(t){var e=t.target.scrollTop;this.setCustomerScroll(e)},loadBottom:function(){var t=this;this.customerAjaxParams.page++,v.a.getAjax("/v3/app/customer/list",this.customerAjaxParams).then(function(e){t.$refs.loadmore1.onBottomLoaded(),(e=e.data)&&(e.records?(e.records.length<30&&t.setAllLoaded(!0),t.customerList.records=t.customerList.records.concat(e.records),t.setCustomerList(t.customerList)):t.setAllLoaded(!0))}).catch(function(e){510===e&&t.loadBottom()})},toCustomerInfo:function(t){this.$router.push({path:"/customerInfo",query:{id:t}}),this.setCustomerTabStatus(v.a.btnList(["客户信息","意向信息"],0))},newCustomer:function(){this.setBtn([]);var t=localStorage.getItem("shops"),e=Object(j.a)(JSON.parse(t),0);this.initShopList(e),this.getShopVal(),this.$router.push({path:"./newCustomer"})}})},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{ref:"customer",staticClass:"customerList"},[s("TopBar",{attrs:{topBarTitle:t.topbar}}),t._v(" "),s("mt-loadmore",{ref:"loadmore1",attrs:{"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,"auto-fill":!1}},[t._l(t.customerList.records,function(e,a){return s("li",{key:"customerList"+a,staticClass:"customerContent",on:{click:function(s){return t.toCustomerInfo(e.accntId)}}},[t._v("\n          "+t._s(e.name)+"\n          "),s("ul",[s("li",{staticClass:"iconTips"},[s("i",{class:"important"+e.level}),t._v(" "),s("strong",[t._v(t._s(e.username))]),t._v(" "),s("div",{class:"urgency"+e.urgency})]),t._v(" "),s("li",[s("span",{staticClass:"intention"},[t._v(t._s(e.goodsName))])]),t._v(" "),s("li",{staticClass:"followTime"},[t._v(t._s(e.followDate))])])])}),t._v(" "),s("li",[s("button",{staticClass:"new",on:{click:t.newCustomer}})])],2)],1)},staticRenderFns:[]};var R=s("C7Lr")(P,I,!1,function(t){s("n3Ov")},"data-v-37f135e8",null).exports;r.default.component(x.Loadmore.name,x.Loadmore);var O={name:"dealCustomerList",props:["changeResultTit"],components:{TopBar:y.a},data:function(){return{ajaxData:[],account:"",dealCusList:[],addPullData:[],allPage:"",page:3,limit:10,baceLimit:30,key:!0,allLoaded:!1,address:"",topbar:{leftTitle:"客户信息",centerTitle:"电话",rightTitle:"流失时间"},parmas:{}}},computed:i()({},Object(o.d)({dealCustomerList:function(t){return t.dealCustomerList.dealCustomerList},headerStatus:function(t){return t.customerHeader.headerStatus},isSelectStatus:function(t){return t.rightContainer.isSelectStatus},dealScroll:function(t){return t.customerScroll.dealScroll},dealLength:function(t){return t.dealCustomerList.dealLength},dealTime:function(t){return t.rightContainer.dealTime},customerAjaxParams:function(t){return t.customer.customerAjaxParams}})),watch:{headerStatus:function(){this.headerStatus[2].status&&(this.listenScrollTop(),0===this.dealScroll&&(this.isSelectStatus?this.loadSelectData(this.dealTime):this.loadData()))},dealTime:function(){this.setIsSelectStatus(!0),this.initData(),this.loadSelectData(this.dealTime),""===this.dealTime.startTime&&(this.setIsSelectStatus(!1),this.loadData())}},mounted:function(){this.listenScrollTop()},created:function(){this.parmas=Object(A.a)(this.customerAjaxParams,this.parmas),this.parmas.type="Closed",this.isSelectStatus?this.loadSelectData(this.dealTime):this.loadData()},methods:i()({},Object(o.c)(["setDealCustomerList","setDealOrderInfoDetails","setTabStatus","setDealScroll","setDealLength","setIsSelectStatus","setCustomerTabStatus"]),{handleScroll:function(t){var e=t.target.scrollTop;this.setDealScroll(e)},listenScrollTop:function(){this.$refs.deal.addEventListener("scroll",this.handleScroll,!0),this.$refs.deal.scrollTop=this.dealScroll},initData:function(){this.baceLimit=30,this.setDealScroll(0),this.$refs.deal.scrollTop=this.dealScroll,localStorage.removeItem("selectDealLimit"),localStorage.removeItem("dealLimit"),this.getSelectLimit()},loadBottom:function(){this.$refs.loadmore.onBottomLoaded(),this.isSelectStatus?this.pullDownData(this.dealTime.startTime,this.dealTime.endTime):this.pullDownData()},pullDownData:function(t,e){this.page<this.allPage?(this.allLoaded=!0,this.page++,this.getData(this.page,this.limit,t,e)):(this.allLoaded=!0,v.a.tip("没有更多数据了"))},loadSelectData:function(t){if(t.startTime){this.getSelectLimit();var e=(this.baceLimit-30)/10;this.page=3+e,this.getData(1,this.baceLimit,t.startTime,t.endTime)}},loadData:function(){this.getLimit();var t=(this.baceLimit-30)/10;this.page=3+t,this.getData(1,this.baceLimit)},getSelectTimeData:function(){var t=this.dealTime;this.getData(t.startTime,t.endTime)},getDiffLimit:function(){this.isSelectStatus?(this.setSelectLimit(this.baceLimit+10),this.getSelectLimit()):(this.setLimit(this.baceLimit+10),this.getLimit())},getData:function(t,e,s,a){var i=this;this.key=!1,this.parmas.page=t,this.parmas.limit=e,this.parmas.sd=s,this.parmas.ed=a,this.parmas.sort="",this.parmas.u="",this.parmas.l="",v.a.getAjax("/v3/app/customer/list",this.parmas).then(function(e){e&&(i.allLoaded=!1,i.allPage=Math.ceil(e.data.total/10),t<=3?(i.setDealCustomerList(e.data),i.dealCusList=i.dealCustomerList,i.$emit("changeResultTit","全部客户 ("+(null==i.dealCustomerList.total?"0":i.dealCustomerList.total)+")")):(i.getDiffLimit(),i.addPullData=e.data,i.dealCusList.records=i.dealCusList.records.concat(i.addPullData.records),i.setDealCustomerList(i.dealCusList)))}).catch(function(r){510===r&&i.getData(t,e,s,a)})},setLimit:function(t){var e='{"dealLimit":" '+t+'"}';localStorage.setItem("dealLimit",e)},getLimit:function(){var t=localStorage.getItem("dealLimit");t?this.baceLimit=parseInt(JSON.parse(t).dealLimit):this.setLimit(this.baceLimit)},setSelectLimit:function(t){var e='{"selectDealLimit":" '+t+'"}';localStorage.setItem("selectDealLimit",e)},getSelectLimit:function(){var t=localStorage.getItem("selectDealLimit");t?this.baceLimit=parseInt(JSON.parse(t).selectDealLimit):this.setSelectLimit(this.baceLimit)},getDetails:function(t){var e=this.dealCustomerList.records[t].accntId;this.setCustomerTabStatus(v.a.btnList(["客户信息","意向信息"],0)),this.$router.push({path:"/customerInfo",query:{id:e,status:4}})}})},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"deal",staticClass:"dealCustomer"},[s("TopBar",{staticStyle:{"margin-top":"-13vw"},attrs:{topBarTitle:t.topbar}}),t._v(" "),s("ul",[s("mt-loadmore",{ref:"loadmore",attrs:{"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,"auto-fill":!1}},t._l(t.dealCustomerList.records,function(e,a){return s("li",{key:"customerList"+a,on:{click:function(e){return t.getDetails(a)}}},[s("div",{staticClass:"name"},[s("i",{class:"important"+e.level}),t._v(" "),s("span",[t._v(t._s(e.username))]),t._v(" "),s("strong",{class:"urgency"+e.urgency})]),t._v(" "),"0"!==e.phone?s("span",{staticClass:"phone"},[t._v(t._s(e.phone))]):s("span",{staticClass:"phone"},[t._v("未收集")]),t._v(" "),s("span",{staticClass:"date"},[t._v(t._s(e.closeTime.split(" ")[0]))])])}),0)],1)],1)},staticRenderFns:[]};var k=s("C7Lr")(O,B,!1,function(t){s("rEhM")},"data-v-24477e82",null).exports;r.default.component(x.Loadmore.name,x.Loadmore);var N={name:"allCustomerList",props:["changeResultTit"],components:{TopBar:y.a},data:function(){return{ajaxData:[],account:"",allCusList:[],addPullData:[],allPage:"",page:3,limit:10,baceLimit:30,key:!0,allLoaded:!1,address:"",topbar:{leftTitle:"客户信息",centerTitle:"性别",rightTitle:"手机号码"},parmas:{}}},computed:i()({},Object(o.d)({allCustomerList:function(t){return t.allCustomerList.allCustomerList},headerStatus:function(t){return t.customerHeader.headerStatus},allScroll:function(t){return t.customerScroll.allScroll},customerAjaxParams:function(t){return t.customer.customerAjaxParams}})),watch:{headerStatus:function(){this.headerStatus[3].status&&(this.listenScrollTop(),this.loadData())}},mounted:function(){this.listenScrollTop()},created:function(){this.parmas=Object(A.a)(this.customerAjaxParams,this.parmas),this.parmas.type="",this.loadData()},methods:i()({},Object(o.c)(["setAllCustomerList","setTabStatus","setAllScroll","setAllLength","setBtn","initShopList","getShopVal"]),{handleScroll:function(t){var e=t.target.scrollTop;this.setAllScroll(e)},listenScrollTop:function(){this.$refs.all.addEventListener("scroll",this.handleScroll,!0),this.$refs.all.scrollTop=this.allScroll},initData:function(){this.baceLimit=30,this.setAllScroll(0),this.$refs.all.scrollTop=this.allScroll},loadBottom:function(){this.$refs.loadmore3.onBottomLoaded(),this.pullDownData()},pullDownData:function(){this.page<this.allPage?(this.allLoaded=!0,this.page++,this.getData(this.page,this.limit)):(this.allLoaded=!0,v.a.tip("没有更多数据了"))},loadData:function(){var t=(this.baceLimit-30)/10;this.page=3+t,this.getData(1,this.baceLimit)},getData:function(t,e){var s=this;this.key=!1,this.parmas.page=t,this.parmas.limit=e,v.a.getAjax("/v3/app/customer/list",this.parmas).then(function(e){e&&(s.allLoaded=!1,s.allPage=Math.ceil(e.data.total/10),t<=3?(s.setAllCustomerList(e.data),s.AllCusList=s.AllCustomerList,s.$emit("changeResultTit","全部客户 ("+(null==s.allCustomerList.total?"0":s.allCustomerList.total)+")")):(s.addPullData=e.data,s.allCusList.records=s.allCusList.records.concat(s.addPullData.records),s.setAllCustomerList(s.allCusList)))}).catch(function(a){510===a&&s.getData(t,e)})},getDetails:function(t,e){"Approved"===e?this.$router.push({path:"/enquiryInfo",query:{id:t}}):this.$router.push({path:"/customerInfo",query:{id:t}})},newCustomer:function(){this.setBtn([]);var t=localStorage.getItem("shops"),e=Object(j.a)(JSON.parse(t),0);this.initShopList(e),this.getShopVal(),this.$router.push({path:"./newCustomer"})}})},$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"all",staticClass:"allCustomer"},[s("TopBar",{staticStyle:{"margin-top":"-13vw"},attrs:{topBarTitle:t.topbar}}),t._v(" "),s("ul",[s("mt-loadmore",{ref:"loadmore3",attrs:{"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,"auto-fill":!1}},[t._l(t.allCustomerList.records,function(e,a){return s("li",{key:"customerList"+a,on:{click:function(s){return t.getDetails(e.accntId,e.status)}}},[s("div",{staticClass:"name"},[s("span",[t._v(t._s(e.username))])]),t._v(" "),"Ms."===e.sex?s("span",{staticClass:"sex"},[t._v("女")]):"Mr."===e.sex?s("span",{staticClass:"sex"},[t._v("男")]):s("span",{staticClass:"sex"},[t._v("未知")]),t._v(" "),s("span",{staticClass:"phone"},[t._v(t._s(e.phone))])])}),t._v(" "),s("button",{staticClass:"new",on:{click:t.newCustomer}})],2)],1)],1)},staticRenderFns:[]};var H=s("C7Lr")(N,$,!1,function(t){s("zu9B")},"data-v-7468cd5a",null).exports,E=s("68Xj"),J=s("d7Vm"),Y=s("z9qW"),z=s("QS/x"),F=(new g,{components:{Footer:C.a,Header:w,CustomerList:R,RightContainer:J.a,DealCustomerList:k,EnquiryOrder:E.a,RightTimeSelect:Y.a,allCustomerList:H},data:function(){return{orderResultTit:"",dealResultTit:"",allResultTit:""}},computed:i()({},Object(o.d)({headerStatus:function(t){return t.customerHeader.headerStatus},rightTimeSelect:function(t){return t.rightContainer.rightTimeSelect}})),created:function(){Object(z.a)(),this.checkLogin()},methods:{checkLogin:function(){var t=localStorage.getItem("ajaxData");if(t){var e=JSON.parse(t).timestamp;e=Date.parse(new Date)-JSON.parse(t).timestamp,(e/=864e5)>10&&this.$router.replace({path:"./Login"})}else this.$router.replace({path:"./Login"})},searchCustomer:function(t){},changeOrderResultTit:function(t){this.orderResultTit=t},changeDealResultTit:function(t){this.dealResultTit=t},changeAllResultTit:function(t){this.allResultTit=t},changHead:function(t){this.headerStatus[1].status?this.orderResultTit=t:this.headerStatus[2].status?this.dealResultTit=t:this.headerStatus[3].status&&(this.allResultTit=t)}}}),M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"customer"},[s("Header",{on:{changeResultTit:t.changHead}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.headerStatus[1].status,expression:"headerStatus[1].status"}]},[t._v(t._s(t.orderResultTit))]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.headerStatus[2].status,expression:"headerStatus[2].status"}]},[t._v(t._s(t.dealResultTit))]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.headerStatus[3].status,expression:"headerStatus[3].status"}]},[t._v(t._s(t.allResultTit))])]),t._v(" "),s("CustomerList",{directives:[{name:"show",rawName:"v-show",value:t.headerStatus[0].status,expression:"headerStatus[0].status"}],staticClass:"CustomerList1"}),t._v(" "),s("EnquiryOrder",{directives:[{name:"show",rawName:"v-show",value:t.headerStatus[1].status,expression:"headerStatus[1].status"}],staticClass:"CustomerList",on:{changeResultTit:t.changeOrderResultTit}}),t._v(" "),s("DealCustomerList",{directives:[{name:"show",rawName:"v-show",value:t.headerStatus[2].status,expression:"headerStatus[2].status"}],staticClass:"CustomerList",on:{changeResultTit:t.changeDealResultTit}}),t._v(" "),s("allCustomerList",{directives:[{name:"show",rawName:"v-show",value:t.headerStatus[3].status,expression:"headerStatus[3].status"}],staticClass:"CustomerList",on:{changeResultTit:t.changeAllResultTit}}),t._v(" "),s("RightContainer"),t._v(" "),s("RightTimeSelect",{directives:[{name:"show",rawName:"v-show",value:t.rightTimeSelect,expression:"rightTimeSelect"}]}),t._v(" "),s("Footer")],1)},staticRenderFns:[]};var W=s("C7Lr")(F,M,!1,function(t){s("3Hdd")},null,null);e.default=W.exports},eavT:function(t,e){},n3Ov:function(t,e){},rEhM:function(t,e){},sC8f:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topBar"},[s("span",[t._v(t._s(t.topBarTitle.leftTitle))]),t._v(" "),s("span",[t._v(t._s(t.topBarTitle.centerTitle))]),t._v(" "),s("span",[t._v(t._s(t.topBarTitle.rightTitle))])])},staticRenderFns:[]};var i=s("C7Lr")({props:["topBarTitle"]},a,!1,function(t){s("2ZF7")},"data-v-04509b9e",null);e.a=i.exports},ynh5:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAANNJREFUOI3V0DFOAkEYBtDHSgix0Zt4FWkksbOgsfAMyxksuACtJTF2JtY0WtlAo5UmNMRQkIyFYDbjgrtMA18zM98kb/8dDiIhPZ21la3Wu4R5HnAfT9gMIXzuMNk8hHCc5/mvtZ5wiY766eKrWGSF/RNua2BDjOIyi843mFTAPnBVdhGDcF4BvPDzTJXAF+RbsAEeN12WgdDHuKSf4HrLxzaCcOnvb5W+W1VwikXUvaaAJ2hE3WkKuFPqgq0U8AjtwvkZbyngYoW+o4czzP4D9z/fYnmc7ubilHoAAAAASUVORK5CYII="},zu9B:function(t,e){}});
//# sourceMappingURL=11.c14da9e4a2afe6c57e48.js.map