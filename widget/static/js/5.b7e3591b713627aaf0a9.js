webpackJsonp([5],{"/K5v":function(e,t){},"4rDW":function(e,t){},AiOh:function(e,t,o){"use strict";var n=o("4YfN"),s=o.n(n),i=o("0xDb"),r=o("xd7I"),a=o("HVJf"),u=o("wSez"),c=o("zdYc"),l=o("RrjH"),f=o("2Ohe"),h=o("WdeC"),p=o("8BZo"),m=o("otx3"),d=o("2wM2"),v=o("3buF"),C=o("CqDD"),g=(o("e1F6"),new i.a);r.default.component(u.Picker.name,u.Picker),r.default.component(u.Popup.name,u.Popup);var I={name:"buyReasonSelect",components:{customerLi:h.a},data:function(){return{slots:[{values:[],defaultIndex:0}],popupVisible:!1,key:!1,color:"color: #999",typeList:[],code:"",value:""}},computed:s()({},Object(a.d)({buyReason:function(e){return e.select.buyReason},newCustomerInfo:function(e){return e.customer.newCustomerInfo}})),created:function(){this.init()},methods:s()({},Object(a.c)(["setBuyReason"]),{init:function(){var e=this;g.getType("REASON_PURCHASE").then(function(t){if(t.data&&t.data.length){e.typeList=t.data;var o=Object(C.f)(e.typeList);if(e.slots[0].values=o,e.newCustomerInfo&&e.newCustomerInfo.buyReason){e.color="color: #363636",e.setBuyReason(e.newCustomerInfo.buyReason);var n=Object(C.d)(e.newCustomerInfo.buyReason,e.typeList);e.$emit("brCodeChange",n),e.key=!1}}}).catch(function(t){510===t&&e.init()})},selectReason:function(){this.popupVisible=!0},onValuesChange:function(e,t){this.code=Object(C.d)(t[0],this.typeList),this.value=t[0]},cancel:function(){this.popupVisible=!1},update:function(){this.color="color: #363636",this.$emit("brCodeChange",this.code),this.$emit("buyReasonChange",this.value),this.popupVisible=!1}})},w={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"sourceSelect"},[o("ul",[o("customerLi",{tag:"li",attrs:{leftText:"购买原因",icon:!0},nativeOn:{click:function(t){return e.selectReason(t)}}},[o("span",{style:e.color},[e._v(e._s(e.buyReason||"请选择购买原因"))])]),e._v(" "),o("li",[o("mt-popup",{attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[o("mt-picker",{ref:"buyReasonPicker",attrs:{slots:e.slots,showToolbar:!0},on:{change:e.onValuesChange}},[o("div",{staticClass:"btn-group"},[o("div",{on:{click:e.cancel}},[e._v("取消")]),e._v(" "),o("div",{on:{click:e.update}},[e._v("确定")])])])],1)],1)],1)])},staticRenderFns:[]};var y=o("C7Lr")(I,w,!1,function(e){o("gUHU")},null,null).exports,b=new i.a;r.default.component(u.Picker.name,u.Picker),r.default.component(u.Popup.name,u.Popup);var _={name:"styleSelect",components:{customerLi:h.a},data:function(){return{slots:[{values:[],defaultIndex:0}],popupVisible:!1,key:!1,color:"color: #999",typeList:[],code:"",value:""}},computed:s()({},Object(a.d)({stylePref:function(e){return e.select.stylePref},newCustomerInfo:function(e){return e.customer.newCustomerInfo}})),created:function(){this.init()},methods:s()({},Object(a.c)(["setStylePref"]),{init:function(){var e=this;b.getType("DR_STYLE_PRE").then(function(t){if(t.data&&t.data.length){e.typeList=t.data;var o=Object(C.f)(e.typeList);if(e.slots[0].values=o,e.newCustomerInfo&&e.newCustomerInfo.stylePref){e.color="color: #363636",e.setStylePref(e.newCustomerInfo.stylePref);var n=Object(C.d)(e.newCustomerInfo.stylePref,e.typeList);e.$emit("spCodeChange",n),e.key=!1}}}).catch(function(t){510===t&&e.init()})},selectStyle:function(){this.popupVisible=!0},onValuesChange:function(e,t){this.code=Object(C.d)(t[0],this.typeList),this.value=t[0]},cancel:function(){this.popupVisible=!1},update:function(){this.color="color: #363636",this.$emit("spCodeChange",this.code),this.$emit("stylePrefChange",this.value),this.popupVisible=!1}})},k={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"sourceSelect"},[o("ul",[o("customerLi",{tag:"li",attrs:{leftText:"装修风格",icon:!0},nativeOn:{click:function(t){return e.selectStyle(t)}}},[o("span",{style:e.color},[e._v(e._s(e.stylePref||"请选择装修风格"))])]),e._v(" "),o("li",[o("mt-popup",{attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[o("mt-picker",{ref:"stylePicker",attrs:{slots:e.slots,showToolbar:!0},on:{change:e.onValuesChange}},[o("div",{staticClass:"btn-group"},[o("div",{on:{click:e.cancel}},[e._v("取消")]),e._v(" "),o("div",{on:{click:e.update}},[e._v("确定")])])])],1)],1)],1)])},staticRenderFns:[]};var L=o("C7Lr")(_,k,!1,function(e){o("bgnJ")},null,null).exports,P=new i.a;r.default.component(u.Picker.name,u.Picker),r.default.component(u.Popup.name,u.Popup);var V={name:"colorSelect",components:{customerLi:h.a},data:function(){return{slots:[{values:[],defaultIndex:0}],popupVisible:!1,key:!1,color:"color: #999",typeList:[],colorName:"",code:""}},computed:s()({},Object(a.d)({colorPref:function(e){return e.select.colorPref},newCustomerInfo:function(e){return e.customer.newCustomerInfo}})),created:function(){this.init()},methods:s()({},Object(a.c)(["setColorPref"]),{init:function(){var e=this;P.getType("DR_COLOR_PRE").then(function(t){if(t.data&&t.data.length){e.typeList=t.data;var o=Object(C.f)(e.typeList);if(e.slots[0].values=o,e.newCustomerInfo&&e.newCustomerInfo.colorPref){e.color="color: #363636",e.setColorPref(e.newCustomerInfo.colorPref);var n=Object(C.d)(e.newCustomerInfo.colorPref,e.typeList);e.$emit("colorCodeChange",n),e.key=!1}}}).catch(function(t){510===t&&e.init()})},selectColorPref:function(){this.popupVisible=!0},onValuesChange:function(e,t){this.code=Object(C.d)(t[0],this.typeList),this.colorName=t[0]},cancel:function(){this.popupVisible=!1},update:function(){this.color="color: #363636",this.$emit("colorCodeChange",this.code),this.$emit("colorChange",this.colorName),this.popupVisible=!1}})},S={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"colorSelect"},[o("ul",[o("customerLi",{tag:"li",attrs:{leftText:"颜色偏好",icon:!0},nativeOn:{click:function(t){return e.selectColorPref(t)}}},[o("span",{style:e.color},[e._v(e._s(e.colorPref||"请选择颜色偏好"))])]),e._v(" "),o("li",[o("mt-popup",{attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[o("mt-picker",{ref:"colorPicker",attrs:{slots:e.slots,showToolbar:!0},on:{change:e.onValuesChange}},[o("div",{staticClass:"btn-group"},[o("div",{on:{click:e.cancel}},[e._v("取消")]),e._v(" "),o("div",{on:{click:e.update}},[e._v("确定")])])])],1)],1)],1)])},staticRenderFns:[]};var N=o("C7Lr")(V,S,!1,function(e){o("4rDW")},null,null).exports,x=new i.a;r.default.component(u.Picker.name,u.Picker),r.default.component(u.Popup.name,u.Popup);var D={name:"progressSelect",components:{customerLi:h.a},data:function(){return{slots:[{values:[],defaultIndex:0}],popupVisible:!1,key:!1,color:"color: #999",typeList:[],code:"",value:""}},computed:s()({},Object(a.d)({progress:function(e){return e.select.progress},newCustomerInfo:function(e){return e.customer.newCustomerInfo}})),created:function(){this.init()},methods:s()({},Object(a.c)(["setProgress"]),{init:function(){var e=this;x.getType("DR_FITUP_PROGRESS").then(function(t){if(t.data&&t.data.length){e.typeList=t.data;var o=Object(C.f)(e.typeList);if(e.slots[0].values=o,e.newCustomerInfo&&e.newCustomerInfo.progress){e.color="color: #363636",e.setProgress(e.newCustomerInfo.progress);var n=Object(C.d)(e.newCustomerInfo.progress,e.typeList);e.$emit("pgCodeChange",n),e.key=!1}}}).catch(function(t){510===t&&e.init()})},selectProgress:function(){this.popupVisible=!0},onValuesChange:function(e,t){this.code=Object(C.d)(t[0],this.typeList),this.value=t[0]},cancel:function(){this.popupVisible=!1},update:function(){this.color="color: #363636",this.$emit("pgCodeChange",this.code),this.$emit("progressChange",this.value),this.popupVisible=!1}})},T={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"progressSelect"},[o("ul",[o("customerLi",{tag:"li",attrs:{leftText:"装修进度",icon:!0},nativeOn:{click:function(t){return e.selectProgress(t)}}},[o("span",{style:e.color},[e._v(e._s(e.progress||"请选择装修进度"))])]),e._v(" "),o("li",[o("mt-popup",{attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[o("mt-picker",{ref:"progressPicker",attrs:{slots:e.slots,showToolbar:!0},on:{change:e.onValuesChange}},[o("div",{staticClass:"btn-group"},[o("div",{on:{click:e.cancel}},[e._v("取消")]),e._v(" "),o("div",{on:{click:e.update}},[e._v("确定")])])])],1)],1)],1)])},staticRenderFns:[]};var $=o("C7Lr")(D,T,!1,function(e){o("ciYI")},null,null).exports;r.default.component(u.Picker.name,u.Picker),r.default.component(u.Popup.name,u.Popup);var B={name:"leaveStoreSelect",components:{customerLi:h.a},props:["start"],data:function(){return{firSlots:[{flex:.2,values:["6","7","8","9"],defaultIndex:0,className:"slot1",textAlign:"center"},{divider:!0,content:".",className:"slot2"},{flex:.2,values:["0","1","2","3","4","5","6","7","8","9"],defaultIndex:0,className:"slot3",textAlign:"center"},{divider:!0,content:"折",className:"slot2"}],popupVisible:!1,key:!1,color:"color: #999",firstCount:"",secondCount:"",discount:"",key1:!1,key2:!1}},computed:s()({},Object(a.d)({discountVal:function(e){return e.select.discountVal},newCustomerInfo:function(e){return e.customer.newCustomerInfo}})),mounted:function(){this.init()},methods:s()({},Object(a.c)(["setDiscountVal"]),{init:function(){this.newCustomerInfo&&this.newCustomerInfo.argreeDiscount&&(this.color="color: #363636",this.setDiscountVal(this.newCustomerInfo.argreeDiscount),this.key1=!1,this.key2=!1)},firChange:function(e,t){this.discount=e.getValues().join(".")+"折"},selectDiscount:function(){this.popupVisible=!0},cancel:function(){this.popupVisible=!1},update:function(){this.color="color: #363636",this.$emit("discountChange",this.discount),this.popupVisible=!1}})},O={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"discountSelect"},[o("ul",[o("customerLi",{tag:"li",attrs:{leftText:"已谈折扣",icon:!0},nativeOn:{click:function(t){return e.selectDiscount(t)}}},[o("span",{style:e.color},[e._v(e._s(e.discountVal||"请选择已谈折扣"))])]),e._v(" "),o("mt-popup",{attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[o("mt-picker",{ref:"firPicker",attrs:{slots:e.firSlots,showToolbar:!0},on:{change:e.firChange}},[o("div",{staticClass:"btn-group"},[o("div",{on:{click:e.cancel}},[e._v("取消")]),e._v(" "),o("div",{on:{click:e.update}},[e._v("确定")])])])],1)],1)])},staticRenderFns:[]};var R=o("C7Lr")(B,O,!1,function(e){o("bAan")},null,null).exports,j=o("vGYV"),E={props:["intentionVal"],data:function(){return{keyBtns:j.a.btnList(["A","B","C","D"]),val:""}},created:function(){this.init()},computed:s()({},Object(a.d)({newCustomerInfo:function(e){return e.customer.newCustomerInfo}})),methods:{init:function(){if(this.newCustomerInfo.level){var e="A"===this.newCustomerInfo.level?0:"B"===this.newCustomerInfo.level?1:2;j.a.changeBtnStatus(this.keyBtns,e)}else j.a.changeBtnStatus(this.keyBtns,0)},keySelect:function(e){this.keyBtns[e].status||(this.val=0===e?"A":1===e?"B":2===e?"C":"D",this.intentionVal(this.val),j.a.changeBtnStatus(this.keyBtns,e))}}},F={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"intentionSelect"},[o("h3",[e._v("意向分类")]),e._v(" "),o("ul",{staticClass:"select"},e._l(e.keyBtns,function(t,n){return o("li",{key:"keyBtns"+n,class:{on:t.status}},[o("button",{on:{click:function(t){return e.keySelect(n)}}},[e._v(e._s(t.name))])])}),0)])},staticRenderFns:[]};var A=o("C7Lr")(E,F,!1,function(e){o("lk8j")},"data-v-d2853d86",null).exports,M={props:["urgentVal"],data:function(){return{urgencyBtns:j.a.btnList(["是","否"]),val:""}},computed:s()({},Object(a.d)({newCustomerInfo:function(e){return e.customer.newCustomerInfo}})),created:function(){this.init()},methods:{init:function(){if("false"===this.newCustomerInfo.urgency||"true"===this.newCustomerInfo.urgency){var e="false"===this.newCustomerInfo.urgency?1:0;j.a.changeBtnStatus(this.urgencyBtns,e)}else j.a.changeBtnStatus(this.urgencyBtns,1)},urgencySelect:function(e){this.urgencyBtns[e].status||(this.val=e?0:1,this.urgentVal(this.val),j.a.changeBtnStatus(this.urgencyBtns,e))}}},H={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"urgentSelect"},[o("h3",[e._v("是否紧急")]),e._v(" "),o("ul",{staticClass:"select"},e._l(e.urgencyBtns,function(t,n){return o("li",{key:"urgencyBtns"+n,class:{on:t.status}},[o("button",{on:{click:function(t){return e.urgencySelect(n)}}},[e._v(e._s(t.name))])])}),0)])},staticRenderFns:[]};var Y=o("C7Lr")(M,H,!1,function(e){o("Z7N+")},"data-v-4eacb1c0",null).exports,q=new i.a;r.default.component(u.Picker.name,u.Picker),r.default.component(u.Popup.name,u.Popup);var G={name:"styleSelect",components:{customerLi:h.a},data:function(){return{slots:[{values:[],defaultIndex:0}],popupVisible:!1,key:!1,color:"color: #999",typeList:[],code:"",value:""}},computed:s()({},Object(a.d)({houseType:function(e){return e.select.houseType},newCustomerInfo:function(e){return e.customer.newCustomerInfo}})),created:function(){this.init()},methods:s()({},Object(a.c)(["setHouseType"]),{init:function(){var e=this;q.getType("DR_APARTMENT_TYPE").then(function(t){if(t.data&&t.data.length){e.typeList=t.data;var o=Object(C.f)(e.typeList);e.slots[0].values=o,e.newCustomerInfo&&e.newCustomerInfo.apartmentType&&(e.color="color: #363636",e.setHouseType(e.newCustomerInfo.apartmentType),e.key=!1)}}).catch(function(t){510===t&&e.init()})},selectHouseType:function(){this.popupVisible=!0},onValuesChange:function(e,t){this.code=Object(C.d)(t[0],this.typeList),this.value=t[0]},cancel:function(){this.popupVisible=!1},update:function(){this.color="color: #363636",this.$emit("htCodeChange",this.code),this.$emit("houseTypeChange",this.value),this.popupVisible=!1}})},U={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"sourceSelect"},[o("ul",[o("customerLi",{tag:"li",attrs:{leftText:"户型大小",icon:!0},nativeOn:{click:function(t){return e.selectHouseType(t)}}},[o("span",{style:e.color},[e._v(e._s(e.houseType||"请选择户型大小"))])]),e._v(" "),o("li",[o("mt-popup",{attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[o("mt-picker",{ref:"houseTypePicker",attrs:{slots:e.slots,showToolbar:!0},on:{change:e.onValuesChange}},[o("div",{staticClass:"btn-group"},[o("div",{on:{click:e.cancel}},[e._v("取消")]),e._v(" "),o("div",{on:{click:e.update}},[e._v("确定")])])])],1)],1)],1)])},staticRenderFns:[]};var z=o("C7Lr")(G,U,!1,function(e){o("/K5v")},null,null).exports;r.default.component(u.Picker.name,u.Picker),r.default.component(u.Popup.name,u.Popup);var J={name:"selectElevator",components:{customerLi:h.a},data:function(){return{slots:[{values:["有","无"],defaultIndex:0}],popupVisible:!1,key:!1,color:"color: #999",value:""}},computed:s()({},Object(a.d)({elevatorVal:function(e){return e.select.elevatorVal},newCustomerInfo:function(e){return e.customer.newCustomerInfo}})),created:function(){this.init()},methods:s()({},Object(a.c)(["setElevatorVal","setNewCustomerInfo"]),{init:function(){if(this.newCustomerInfo.elevator){this.color="color: #363636";var e;e="Y"===this.newCustomerInfo.elevator?"有":"无",this.setElevatorVal(e)}},selectElevator:function(){this.color="color: #363636",this.popupVisible=!0},onValuesChange:function(e,t){this.value=t[0]},cancel:function(){this.popupVisible=!1},update:function(){this.$emit("elevatorChange",this.value),this.popupVisible=!1}})},W={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"selectElevator"},[o("ul",[o("customerLi",{tag:"li",attrs:{leftText:"有无电梯",icon:!0},nativeOn:{click:function(t){return e.selectElevator(t)}}},[o("span",{style:e.color},[e._v(e._s(e.elevatorVal||"请选择有无电梯"))])]),e._v(" "),o("li",[o("mt-popup",{attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[o("mt-picker",{ref:"elevatorPicker",attrs:{slots:e.slots,showToolbar:!0},on:{change:e.onValuesChange}},[o("div",{staticClass:"btn-group"},[o("div",{on:{click:e.cancel}},[e._v("取消")]),e._v(" "),o("div",{on:{click:e.update}},[e._v("确定")])])])],1)],1)],1)])},staticRenderFns:[]};var Z=o("C7Lr")(J,W,!1,function(e){o("D8m5")},null,null).exports;r.default.component(u.Picker.name,u.Picker);var K={name:"arrivalDate",components:{customerLi:h.a},data:function(){return{today:new Date,day:"",timeColor:""}},computed:s()({},Object(a.d)({newCustomerInfo:function(e){return e.customer.newCustomerInfo}})),created:function(){},mounted:function(){this.day=j.a.indexTimeB(this.today)[1],this.newCustomerInfo.arrivalDate&&(this.timeColor="color: #363636")},methods:{selectTime:function(){this.$refs.DatePicker.open()},setTime:function(e){this.timeColor="color: #363636",this.$set(this.newCustomerInfo,"arrivalDate",j.a.indexTimeB(e)[1])},turnDate:function(e){if(e){var t=e.split("-");return t.length>1?t[0]+"年"+t[1]+"月"+t[2]+"日":e}}}},X={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"arrivalDate"},[o("ul",[o("customerLi",{tag:"li",attrs:{leftText:"创建日期",start:"*",icon:!0},nativeOn:{click:function(t){return e.selectTime(t)}}},[o("span",{style:e.timeColor},[e._v(e._s(e.newCustomerInfo.arrivalDate||e.day))])]),e._v(" "),o("li",[o("mt-datetime-picker",{ref:"DatePicker",attrs:{type:"date",endDate:new Date,"year-format":"{value} 年","month-format":"{value} 月","date-format":"{value} 日"},on:{confirm:e.setTime},model:{value:e.today,callback:function(t){e.today=t},expression:"today"}})],1)],1)])},staticRenderFns:[]};var Q=o("C7Lr")(K,X,!1,function(e){o("zHD4")},null,null).exports;r.default.component(u.Picker.name,u.Picker);var ee={name:"deliverDate",components:{customerLi:h.a},data:function(){return{today:new Date,timeColor:"color: #999"}},computed:s()({},Object(a.d)({newCustomerInfo:function(e){return e.customer.newCustomerInfo}})),created:function(){},mounted:function(){this.newCustomerInfo.deliverDate&&(this.timeColor="color: #363636")},methods:{selectFollowTime:function(){this.$refs.followDatePicker.open()},setFollowTime:function(e){this.timeColor="color: #363636",this.$set(this.newCustomerInfo,"deliverDate",j.a.indexTimeB(e)[1])},turnDate:function(e){if(e){var t=e.split("-");return t.length>1?t[0]+"年"+t[1]+"月"+t[2]+"日":e}}}},te={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"deliverDate"},[o("ul",[o("customerLi",{tag:"li",attrs:{leftText:"需求日期",icon:!0},nativeOn:{click:function(t){return e.selectFollowTime(t)}}},[o("span",{style:e.timeColor},[e._v(e._s(e.turnDate(e.newCustomerInfo.deliverDate)||"请选择需求日期"))])]),e._v(" "),o("li",[o("mt-datetime-picker",{ref:"followDatePicker",attrs:{type:"date",startDate:new Date,"year-format":"{value} 年","month-format":"{value} 月","date-format":"{value} 日"},on:{confirm:e.setFollowTime},model:{value:e.today,callback:function(t){e.today=t},expression:"today"}})],1)],1)])},staticRenderFns:[]};var oe=o("C7Lr")(ee,te,!1,function(e){o("NyRv")},null,null).exports,ne=(o("TYi7"),new i.a);r.default.component(u.Picker.name,u.Picker),r.default.component(u.Popup.name,u.Popup),r.default.component(u.DatetimePicker.name,u.DatetimePicker);var se={name:"newDemand",props:["btns","fromName","changeCode","type","addressType"],components:{customerLi:h.a,bigBtn:p.a,shopSelect:d.a,leaveStoreSelect:c.a,sourceSelect:v.a,discountSelect:R,urgentSelect:Y,intentionSelect:A,BuyReason:y,StylePref:L,progressSelect:$,colorSelect:N,houseType:z,elevatorSelect:Z,YanintentionSelect:m.a,areaSelect:f.a,addressSelect:l.a,arrivalDate:Q,deliverDate:oe},data:function(){return{shopId:"",timeColor:"color: #999",today:new Date,color:"color: #999",styleColor:"color: #999",proColor:"color: #999",Color:"color: #999",shops:"",day:"",codeList:{},productList:[],shopName:""}},computed:s()({},Object(a.d)({newCustomerInfo:function(e){return e.customer.newCustomerInfo},shopVal:function(e){return e.select.shopVal},leaveStoreVal:function(e){return e.select.leaveStoreVal},discountVal:function(e){return e.select.discountVal},shopList:function(e){return e.chooseShop.shopList},checkedList:function(e){return e.checkedList}})),watch:{fromName:function(){"NewCustomer"===this.fromName&&"demand"==this.type?this.setInitData():"NewCustomer"!=this.fromName&&(this.setIntentionProduct(),this.hasAddressId(),this.initShop())}},mounted:function(){this.day=j.a.indexTimeB(this.today)[1]},methods:s()({},Object(a.c)(["setAddressId","initShopList","getShopVal","setCheckedList","setNewCustomerInfo","setShopVal","setLeaveStoreVal","setDiscountVal","setSourceVal","setBuyReason","setStylePref","setProgress","setColorPref","setHouseType","setElevatorVal"]),{setInitData:function(){this.$set(this.newCustomerInfo,"arrivalDate",this.day),this.$set(this.newCustomerInfo,"source","自然进店"),this.setNewCustomerInfo(this.newCustomerInfo),this.codeList.sourceCode="Natural",this.changeCode(this.codeList),this.initShop(),this.getShopVal(),this.setBuyReason(""),this.setLeaveStoreVal(""),this.setDiscountVal(""),this.setCheckedList([]),this.setAddressId("")},initShop:function(){var e=this,t=this.$route.query.orgId,o=JSON.parse(localStorage.getItem("shops"));o&&o.length&&o.map(function(o,n){o.crmId===t&&(e.shopName=o.name,e.shopId=o.id)}),this.newCustomerInfo.shopId=this.shopId},hasAddressId:function(){var e=this;if(this.$store.state.addressId){var t=this.$store.state.addressId;ne.getAddress(t).then(function(t){1==t.status?(e.$set(e.newCustomerInfo,"provinceName",t.data.provinceName),e.$set(e.newCustomerInfo,"cityName",t.data.cityName),e.$set(e.newCustomerInfo,"districtName",t.data.districtName),e.newCustomerInfo.apartmentTypeName=t.data.apartmentTypeName,e.newCustomerInfo.elevatorName="Y"===t.data.elevator?"有":"无",e.newCustomerInfo.addressId=t.data.id,e.setNewCustomerInfo(e.newCustomerInfo)):j.a.tips("地址选择失败")}).catch(function(t){510===t&&e.hasAddressId()})}},toSelectAddress:function(){this.$router.push({name:"selectAddress",params:{customerId:this.$route.query.id},query:{type:"intention"}})},addIntention:function(){this.$router.push({name:"intentionProduct",query:{redirect:this.$route.path}})},setIntentionProduct:function(){var e=this;if(this.checkedList&&this.checkedList.length){var t=[];this.checkedList.map(function(o,n){var s={id:o.crmId,quantity:o.quantity};e.productList.push(o.goodsName),t.push(s)}),this.newCustomerInfo.productArr=t,this.setNewCustomerInfo(this.newCustomerInfo)}},getShopVal:function(){var e=void 0;return this.shopList&&this.shopList.length&&this.shopList.forEach(function(t,o){t.status&&(e=t.name)}),e},getShopId:function(e){var t=this;this.shops&&this.shops.length&&this.shops.forEach(function(o,n){o.name===e&&(t.shopId=o.id)}),this.newCustomerInfo.shopId=this.shopId,this.setNewCustomerInfo(this.newCustomerInfo)},areaChange:function(e){this.$set(this.newCustomerInfo,"provinceName",e.provinceName),this.$set(this.newCustomerInfo,"cityName",e.cityName),this.$set(this.newCustomerInfo,"countryName",e.countryName),this.newCustomerInfo.province=e.provinceCode,this.newCustomerInfo.city=e.cityCode,this.newCustomerInfo.area=e.countyCode,this.setNewCustomerInfo(this.newCustomerInfo)},leaveStoreChange:function(e){this.setLeaveStoreVal(e),this.newCustomerInfo.residentTime=e,this.setNewCustomerInfo(this.newCustomerInfo)},turnDate:function(e){if(e){var t=e.split("-");return t.length>1?t[0]+"年"+t[1]+"月"+t[2]+"日":e}},sourceChange:function(e){this.setSourceVal(e),this.newCustomerInfo.source=e,this.setNewCustomerInfo(this.newCustomerInfo)},codeChange:function(e){this.codeList.sourceCode=e,this.changeCode(this.codeList)},buyReasonChange:function(e){this.setBuyReason(e),this.newCustomerInfo.buyReason=e,this.setNewCustomerInfo(this.newCustomerInfo)},brCodeChange:function(e){this.codeList.brCode=e,this.changeCode(this.codeList)},houseTypeChange:function(e){this.setHouseType(e),this.newCustomerInfo.apartmentType=e,this.setNewCustomerInfo(this.newCustomerInfo)},htCodeChange:function(e){this.codeList.htCode=e,this.changeCode(this.codeList)},elevatorChange:function(e){this.setElevatorVal(e),e&&(this.newCustomerInfo.elevator="有"===e?"Y":"N",this.setNewCustomerInfo(this.newCustomerInfo))},stylePrefChange:function(e){this.setStylePref(e),this.newCustomerInfo.stylePref=e,this.setNewCustomerInfo(this.newCustomerInfo)},spCodeChange:function(e){this.codeList.spCode=e,this.changeCode(this.codeList)},progressChange:function(e){this.setProgress(e),this.newCustomerInfo.progress=e,this.setNewCustomerInfo(this.newCustomerInfo)},pgCodeChange:function(e){this.codeList.pgCode=e,this.changeCode(this.codeList)},colorChange:function(e){this.setColorPref(e),this.newCustomerInfo.colorPref=e,this.setNewCustomerInfo(this.newCustomerInfo)},colorCodeChange:function(e){this.codeList.colorCode=e,this.changeCode(this.codeList)},discountChange:function(e){this.setDiscountVal(e),this.newCustomerInfo.argreeDiscount=e,this.setNewCustomerInfo(this.newCustomerInfo)},intentionVal:function(e){this.newCustomerInfo.level=e,this.setNewCustomerInfo(this.newCustomerInfo)},urgentVal:function(e){this.newCustomerInfo.urgency=e?"true":"false",this.setNewCustomerInfo(this.newCustomerInfo)}})},ie={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"newDemand"},[o("ul",[o("customerLi",{tag:"li",attrs:{leftText:"意向产品",icon:!0},nativeOn:{click:function(t){return e.addIntention(t)}}},[o("span",[e._v(e._s(e.productList&&e.productList.length?e.productList.join("、"):"请选择意向产品"))])]),e._v(" "),o("customerLi",{tag:"li",attrs:{leftText:"所属门店",start:"*"}},[o("span",{staticClass:"shop"},[e._v(e._s(e.shopName))])]),e._v(" "),o("arrivalDate",{tag:"li"}),e._v(" "),o("sourceSelect",{tag:"li",on:{sourceChange:e.sourceChange,codeChange:e.codeChange}}),e._v(" "),"intention"!==e.addressType?[o("customerLi",{tag:"li",attrs:{leftText:"客户地区",start:"*"}},[o("span",[e._v(e._s(e.newCustomerInfo.provinceName+e.newCustomerInfo.cityName+e.newCustomerInfo.countryName||"请选择客户地区"))])]),e._v(" "),o("customerLi",{tag:"li",attrs:{leftText:"客户地址",start:"*"}},[o("span",[e._v(e._s(e.newCustomerInfo.address||"请选择客户地址"))])]),e._v(" "),o("houseType",{tag:"li",on:{houseTypeChange:e.houseTypeChange,htCodeChange:e.htCodeChange}}),e._v(" "),o("elevatorSelect",{tag:"li",on:{elevatorChange:e.elevatorChange}})]:[o("customerLi",{tag:"li",attrs:{leftText:"客户地址",start:"*",icon:!0},nativeOn:{click:function(t){return e.toSelectAddress(t)}}},[o("span",[e._v(e._s(e.newCustomerInfo.provinceName+e.newCustomerInfo.cityName+e.newCustomerInfo.districtName||"请选择客户地址"))])]),e._v(" "),o("customerLi",{tag:"li",attrs:{leftText:"户型大小"}},[o("span",[e._v(e._s(e.newCustomerInfo.apartmentTypeName||"请先选择客户地址"))])]),e._v(" "),o("customerLi",{tag:"li",attrs:{leftText:"有无电梯"}},[o("span",[e._v(e._s(e.newCustomerInfo.elevatorName||"请先选择客户地址"))])])],e._v(" "),o("BuyReason",{tag:"li",on:{buyReasonChange:e.buyReasonChange,brCodeChange:e.brCodeChange}}),e._v(" "),o("StylePref",{tag:"li",on:{stylePrefChange:e.stylePrefChange,spCodeChange:e.spCodeChange}}),e._v(" "),o("progressSelect",{tag:"li",on:{progressChange:e.progressChange,pgCodeChange:e.pgCodeChange}}),e._v(" "),o("customerLi",{tag:"li",attrs:{leftText:"竞品产品"}},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newCustomerInfo.competingGoods,expression:"newCustomerInfo.competingGoods",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请填写竞品产品",oninput:"if(value.length>100)value=value.slice(0,100)"},domProps:{value:e.newCustomerInfo.competingGoods},on:{input:function(t){t.target.composing||e.$set(e.newCustomerInfo,"competingGoods",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("colorSelect",{tag:"li",on:{colorChange:e.colorChange,colorCodeChange:e.colorCodeChange}}),e._v(" "),o("customerLi",{tag:"li",attrs:{leftText:"预算金额"}},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newCustomerInfo.budget,expression:"newCustomerInfo.budget",modifiers:{trim:!0}}],attrs:{type:"number",onkeypress:"if(event.keyCode == 101){return false}",placeholder:"请填写预算金额",oninput:"if(value.length>8)value=value.slice(0,8)"},domProps:{value:e.newCustomerInfo.budget},on:{input:function(t){t.target.composing||e.$set(e.newCustomerInfo,"budget",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("deliverDate",{tag:"li"}),e._v(" "),o("customerLi",{tag:"li",attrs:{leftText:"已交定金"}},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newCustomerInfo.depositPaid,expression:"newCustomerInfo.depositPaid",modifiers:{trim:!0}}],attrs:{type:"number",onkeypress:"if(event.keyCode == 101){return false}",placeholder:"请填写已交金额",oninput:"if(value.length>8)value=value.slice(0,8)"},domProps:{value:e.newCustomerInfo.depositPaid},on:{input:function(t){t.target.composing||e.$set(e.newCustomerInfo,"depositPaid",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("discountSelect",{tag:"li",on:{discountChange:e.discountChange}}),e._v(" "),o("li",{staticClass:"textarea"},[o("h3",[e._v("备注信息")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.newCustomerInfo.remark2,expression:"newCustomerInfo.remark2",modifiers:{trim:!0}}],attrs:{placeholder:"添加备注信息",oninput:"if(value.length>200)value=value.slice(0,200)"},domProps:{value:e.newCustomerInfo.remark2},on:{input:function(t){t.target.composing||e.$set(e.newCustomerInfo,"remark2",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("intentionSelect",{attrs:{intentionVal:e.intentionVal}}),e._v(" "),o("urgentSelect",{attrs:{urgentVal:e.urgentVal}})],2)])},staticRenderFns:[]};var re=o("C7Lr")(se,ie,!1,function(e){o("cjps")},"data-v-33890038",null);t.a=re.exports},D8m5:function(e,t){},NyRv:function(e,t){},"Z7N+":function(e,t){},bAan:function(e,t){},bgnJ:function(e,t){},ciYI:function(e,t){},cjps:function(e,t){},gUHU:function(e,t){},lk8j:function(e,t){},nJlD:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("4YfN"),s=o.n(n),i=o("wSez"),r=o("HVJf"),a=(o("TYi7"),o("AiOh")),u=o("KkR3"),c=o("YV7O"),l=o("vGYV"),f=(o("BvhE").Base64,{components:{newDemand:a.a,myBanner:c.a,newRecord:u.a},data:function(){return{top:"",fromName:"",shops:"",shopId:"",codeList:{},path:""}},computed:s()({},Object(r.d)({newCustomerInfo:function(e){return e.customer.newCustomerInfo}}),Object(r.d)(["Files"])),watch:{fromName:function(){"NewCustomer"===this.fromName&&this.initData()}},beforeRouteEnter:function(e,t,o){o(function(e){"/CustomerInfo"===t.name?e.fromName="NewCustomer":"/enquiryInfo"===t.name?e.fromName="NewCustomer":e.fromName="other"})},beforeRouteLeave:function(e,t,o){"/CustomerInfo"==e.name?(this.clearData(),this.setCheckedList([])):"/enquiryInfo"==e.name&&(this.clearData(),this.setCheckedList([])),o(function(e){})},mounted:function(){this.isIPhoneX()},methods:s()({},Object(r.c)(["setNewCustomerInfo","initShopList","getShopVal","setSourceVal","setLeaveStoreVal","setBuyReason","setStylePref","setProgress","setColorPref","setHouseType","setElevatorVal","setCheckedList","setAddressId","setFollowVal","setFollowTiming","setFiles","setPicVal"]),{initData:function(){this.setNewCustomerInfo({}),this.$set(this.newCustomerInfo,"imgLen",0),this.$set(this.newCustomerInfo,"imgs",""),this.getShopVal(),this.setCheckedList([]),this.$set(this.newCustomerInfo,"urgency","false"),this.$set(this.newCustomerInfo,"level","A"),this.$set(this.newCustomerInfo,"dataFiles",new FormData),this.setNewCustomerInfo(this.newCustomerInfo)},initShop:function(){var e=this,t=void 0,o=localStorage.getItem("shops");if(this.shops=JSON.parse(o),this.shops&&this.shops.length)return this.shops.map(function(o,n){o.crmId===e.$route.query.orgId&&(t=o.id)}),t},clearData:function(){this.setNewCustomerInfo({}),this.setCheckedList([]),this.setFiles([]),this.setPicVal([])},changeStr:function(e){return e.replace(/[\ud800-\udbff][\udc00-\udfff]/g,"")},submit:function(){var e=this;if(this.whichFollowData(this.newCustomerInfo)){if(""!==this.newCustomerInfo.competingGoods&&!/^[\u4E00-\u9FA5a-zA-Z0-9]{1,}$/.test(this.newCustomerInfo.competingGoods))return void i.MessageBox.alert("竞品产品只能输入中英文或数字,不能包含空格");var t=/[\ud800-\udbff][\udc00-\udfff]/g,o=/^[\u4E00-\u9FA5a-zA-Z0-9\s]{1,}$/;if(""!==this.newCustomerInfo.remark2&&t.test(this.newCustomerInfo.remark2))return this.newCustomerInfo.remark2=this.changeStr(this.newCustomerInfo.remark2),void i.MessageBox.alert("备注信息不支持表情");if(""!==this.newCustomerInfo.remark2&&!o.test(this.newCustomerInfo.remark2))return void i.MessageBox.alert("备注信息不支持特殊符号");if(""!==this.newCustomerInfo.situation&&t.test(this.newCustomerInfo.situation))return this.newCustomerInfo.situation=this.changeStr(this.newCustomerInfo.situation),void i.MessageBox.alert("跟进情况不支持表情");if(""!==this.newCustomerInfo.situation&&!o.test(this.newCustomerInfo.situation))return void i.MessageBox.alert("跟进情况不支持特殊符号");if(""!==this.newCustomerInfo.plan&&t.test(this.newCustomerInfo.plan))return this.newCustomerInfo.plan=this.changeStr(this.newCustomerInfo.plan),void i.MessageBox.alert("下一步跟进计划不支持表情");if(""!==this.newCustomerInfo.plan&&!o.test(this.newCustomerInfo.plan))return void i.MessageBox.alert("下一步跟进计划不支持特殊符号");var n=new FormData;if(this.newCustomerInfo.imgs){var s=this.newCustomerInfo.imgs;for(var r in s)n.append("record.dataFile",s[r])}var a=this.updateParams(this.newCustomerInfo),u=[];for(var r in a)n.append(r,a[r]),u.push(r);l.a.getFormAjax("/v3/app/opportunity/update",n,u,a).then(function(t){t.status?i.MessageBox.alert("保存成功！").then(function(t){e.$router.go(-1),e.setFiles([]),e.setPicVal([])}):i.MessageBox.alert("保存失败！")}).catch(function(t){510===t&&e.submit()})}},getShopName:function(){var e=void 0;return this.descriptShopList&&this.descriptShopList.length&&this.descriptShopList.forEach(function(t,o){t.status&&(e=t.name)}),e},getShopId:function(e){var t=this;this.shops&&this.shops.length&&this.shops.forEach(function(o,n){o.name===e&&(t.shopId=o.id)}),this.$set(this.newCustomerInfo,"shopId",this.shopId),this.setNewCustomerInfo(this.newCustomerInfo)},change:function(e){console.log(e),this.codeList=e},whichFollowData:function(e){var t=void 0;for(var o in e){if(!e.shopId)return void i.MessageBox.alert("请选择门店");if(!e.arrivalDate)return void i.MessageBox.alert("请选择进店日期");if(!e.source)return void i.MessageBox.alert("请选择客户来源");if(!e.addressId)return void i.MessageBox.alert("请选择客户地址");if(!e.source2)return void i.MessageBox.alert("请选择跟进方式");if(!e.followDate)return void i.MessageBox.alert("请选择跟进时间");if(!e.residentTime2)return void i.MessageBox.alert("请选择跟进时长");if(!e.situation)return void i.MessageBox.alert("请描述跟进情况");t=!0}return t},updateParams:function(e){var t=this,o={},n=e.productArr;e.productArr&&e.productArr.length&&n.forEach(function(e,n){t.$set(o,"opportunity.goodsList["+n+"].goodsId",e.id),t.$set(o,"opportunity.goodsList["+n+"].quantity",e.quantity)});var s={customerId:this.$route.query.id,"opportunity.shopId":e.shopId,"opportunity.addressId":e.addressId,"opportunity.arrivalDate":e.arrivalDate||l.a.indexTimeB(new Date)[1],"opportunity.deliverDate":e.deliverDate,"opportunity.source":this.codeList.sourceCode||"Natural","opportunity.residentTime":e.residentTime,"opportunity.stylePref":this.codeList.spCode,"opportunity.progress":this.codeList.pgCode,"opportunity.colorPref":this.codeList.colorCode,"opportunity.competingGoods":e.competingGoods,"opportunity.buyReason":this.codeList.brCode,"opportunity.budget":e.budget,"opportunity.depositPaid":e.depositPaid,"opportunity.argreeDiscount":10*parseInt(e.argreeDiscount),"opportunity.remark":e.remark2,"opportunity.urgency":e.urgency,"opportunity.level":e.level,"record.source":e.source2,"record.followDate":e.followDate,"record.residentTime":e.residentTime2,"record.nextDate":e.nextDate,"record.situation":e.situation,"record.plan":e.plan};for(var i in s)(s[i]||0===s[i])&&(o[i]=s[i]);return o},isIPhoneX:function(){var e=this.phoneSize();this.top="iphonex"===e?"14vw":"8vw"}}),destroyed:function(){this.setSourceVal(""),this.setLeaveStoreVal(""),this.setBuyReason(""),this.setStylePref(""),this.setProgress(""),this.setColorPref(""),this.setHouseType(""),this.setElevatorVal(""),this.setFollowVal(""),this.setFollowTiming("")}}),h={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"newIntention"},[o("my-banner",{staticClass:"banner",attrs:{title:"新增意向"}}),e._v(" "),o("button",{staticClass:"submit",style:{top:e.top},on:{click:e.submit}},[e._v("保存")]),e._v(" "),o("new-demand",{staticClass:"newDemand",attrs:{changeCode:e.change,fromName:e.fromName,type:"demand",addressType:"intention"}}),e._v(" "),e._m(0),e._v(" "),o("new-record",{attrs:{fromName:e.fromName}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("p"),this._v(" "),t("span",[this._v("跟进情况")])])}]};var p=o("C7Lr")(f,h,!1,function(e){o("rPWm")},"data-v-0651e20b",null);t.default=p.exports},rPWm:function(e,t){},zHD4:function(e,t){}});
//# sourceMappingURL=5.b7e3591b713627aaf0a9.js.map