webpackJsonp([69],{jxF7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("4YfN"),r=a.n(o),i=(a("84iU"),a("xd7I")),s=a("e1F6"),n=a("vGYV"),h=a("JFlM"),c=a("t7k9"),l=a("HVJf"),d=a("X9U8"),v=a("Ueg1"),m=a("MaX7"),u=a("cFe5"),p=a("7m0P"),D=a("YV7O"),w=a("bNyG");i.default.use(s.a),i.default.use(l.a);var S={name:"audioTechnica",components:{Bar:v.a,Pie:m.a,chartsTit:u.a,RouterLink:p.a,mybanner:D.a,SelectComponent:d.a,noData:w.a},data:function(){return{ajaxData:{},storeGetInTotalData:{},perStoreGetInData:{},achieveRatioTotalData:{},perAchieveRatioData:{},orderFormTotalData:{},perOrderFormData:{},title:"铁三角报表",endTime:n.a.getLocalTime("end"),cityMsg:"",key:!1,key1:!1,key2:!1,key3:!1,key4:!1,key5:!1,key6:!1,auchanrtDom1:"",auchanrtDom2:"",auchanrtDom3:"",auchanrtDom4:"",auchanrtDom5:"",auchanrtDom6:"",i:0,storeGetInTotalShow:!1,perStoreGetInShow:!1,achieveRatioTotalShow:!1,perAchieveRatioShow:!1,orderFormTotalShow:!1,perOrderFormShow:!1}},created:function(){var t=[localStorage.getItem("ajaxData"),localStorage.getItem("cityMsg")],e=t[0],a=t[1];this.cityMsg=a?JSON.parse(a):{},this.ajaxData=JSON.parse(e),this.asyncAjax(this.endTime,this.cityMsg.cityName,this.cityMsg.cityLevel)},computed:r()({},Object(l.d)({citySelect:function(t){return t.select.citySelect},startTimeSelect:function(t){return t.select.startTimeSelect},endTimeSelect:function(t){return t.select.endTimeSelect}})),mounted:function(){Object(c.i)(".barBox")},watch:{citySelect:function(){this.endTimeSelect&&""!=this.endTimeSelect&&this.asyncAjax(this.endTimeSelect,this.citySelect.cityName,this.citySelect.cityLevel)},endTimeSelect:function(){this.endTimeSelect&&""!=this.endTimeSelect&&this.asyncAjax(this.endTimeSelect,this.citySelect.cityName,this.citySelect.cityLevel)},storeGetInTotalData:function(){this.key1&&this.storeGetInTotalData.series&&(this.storeGetInTotalShow=Object(h.c)(this.storeGetInTotalData.series),Object(h.b)(this,"storeGetInTotal","vertical"),this.auchanrtDom1=h.a)},perStoreGetInData:function(){if(this.key2&&this.perStoreGetInData.series&&(this.perStoreGetInShow=Object(h.c)(this.perStoreGetInData.series),Object(h.b)(this,"perStoreGetIn","horizontal"),this.auchanrtDom2=h.a,this.i>1))try{this.auchanrtDom2.resize()}catch(t){console.log(t)}},achieveRatioTotalData:function(){var t="achieveRatioTotal";this.key3&&this[t+"Data"].series&&(this[t+"Show"]=Object(h.c)(this[t+"Data"].series),Object(h.b)(this,t,"vertical","","","","",!0),this.auchanrtDom3=h.a)},perAchieveRatioData:function(){var t=this;setTimeout(function(){if(t.key4&&t.perAchieveRatioData.series&&(t.perAchieveRatioShow=Object(h.c)(t.perAchieveRatioData.series),Object(h.b)(t,"perAchieveRatio","horizontal","","","","",!0),t.auchanrtDom4=h.a,t.i>1))try{t.auchanrtDom4.resize()}catch(t){console.log(t)}},1e3)},orderFormTotalData:function(){this.key5&&this.orderFormTotalData.series&&(this.orderFormTotalShow=Object(h.c)(this.orderFormTotalData.series),Object(h.b)(this,"orderFormTotal","vertical"),this.auchanrtDom5=h.a)},perOrderFormData:function(){var t=this;setTimeout(function(){if(t.key6&&t.perOrderFormData.series&&(t.perOrderFormShow=Object(h.c)(t.perOrderFormData.series),Object(h.b)(t,"perOrderForm","horizontal"),t.auchanrtDom6=h.a,t.i>1))try{t.auchanrtDom6.resize()}catch(t){console.log(t)}},1e3)}},beforeDestroy:function(){this.auchanrtDom1&&this.auchanrtDom1.dispose(),this.auchanrtDom2&&this.auchanrtDom2.dispose(),this.auchanrtDom3&&this.auchanrtDom3.dispose(),this.auchanrtDom4&&this.auchanrtDom4.dispose(),this.auchanrtDom5&&this.auchanrtDom5.dispose(),this.auchanrtDom6&&this.auchanrtDom6.dispose()},methods:{asyncAjax:function(t,e,a){this.getPerStoreGetInData(t,e,a),this.getPerAchieveRatioData(t,e,a),this.getPerOrderFormData(t,e,a),this.getStoreGetInTotalData(t,e,a),this.getAchieveRatioTotalData(t,e,a),this.getOrderFormTotalData(t,e,a)},getStoreGetInTotalData:function(t,e,a){var o=this;n.a.loading("open");var r=this;n.a.getAjax("/v1/app/report/store/number/all",{tenantId:this.ajaxData.tenantId,date:t,cityLevel:a,cityName:e}).then(function(t){n.a.loading("close"),t&&(o.key1=!0,t=t.data,n.a.sortYears(t),console.log("测试",t),r.storeGetInTotalData=t)})},getPerStoreGetInData:function(t,e,a){var o=this;this.i+=1,console.log(this.i),n.a.loading("open");var r=this;n.a.getAjax("/v1/app/report/store/number",{tenantId:this.ajaxData.tenantId,date:t}).then(function(t){if(n.a.loading("close"),t){var e=n.a.getNewArr(t.data.series[0].data,t.data.series[1].data,t.data.yAxisData,t.data.idsData);o.$set(t.data,"idsData",e[3]),o.$set(t.data.series[0],"data",e[1]),o.$set(t.data.series[1],"data",e[2]),o.$set(t.data,"yAxisData",e[0]),t=t.data,r.perStoreGetInData=t,o.key2=!0}})},getAchieveRatioTotalData:function(t,e,a){var o=this;n.a.loading("open");var r=this;n.a.getAjax("/v1/app/report/turnover/ratio",{tenantId:this.ajaxData.tenantId,date:t,cityLevel:a,cityName:e}).then(function(t){n.a.loading("close"),t&&(o.key3=!0,t=t.data,n.a.sortYears(t),console.log("整提",t),r.achieveRatioTotalData=t)})},getPerAchieveRatioData:function(t,e,a){var o=this;n.a.loading("open");var r=this;n.a.getAjax("/v1/app/report/store/turnover/ratio",{tenantId:this.ajaxData.tenantId,date:t,cityLevel:a,cityName:e}).then(function(t){if(n.a.loading("close"),t){console.log("店铺成交率0",t);var e=n.a.getNewArr(t.data.series[0].data,t.data.series[1].data,t.data.yAxisData,t.data.idsData);console.log("店铺成交率1",e),o.$set(t.data,"idsData",e[3]),o.$set(t.data.series[0],"data",e[1]),o.$set(t.data.series[1],"data",e[2]),o.$set(t.data,"yAxisData",e[0]),o.key4=!0,t=t.data,console.log("店铺成交率",t),r.perAchieveRatioData=t,console.log("店铺成交率",t)}})},getOrderFormTotalData:function(t,e,a){var o=this;n.a.loading("open");var r=this;n.a.getAjax("/v1/app/report/guest/order",{tenantId:this.ajaxData.tenantId,date:t,cityLevel:a,cityName:e}).then(function(t){n.a.loading("close"),t&&(o.key5=!0,t=t.data,n.a.sortYears(t),console.log("res",t),r.orderFormTotalData=t)})},getPerOrderFormData:function(t,e,a){var o=this;n.a.loading("open");var r=this;n.a.getAjax("/v1/app/report/store/guest/order",{tenantId:this.ajaxData.tenantId,date:t,cityLevel:a,cityName:e}).then(function(t){if(n.a.loading("close"),t){var e=n.a.getNewArr(t.data.series[0].data,t.data.series[1].data,t.data.yAxisData,t.data.idsData);o.$set(t.data,"idsData",e[3]),o.$set(t.data.series[0],"data",e[1]),o.$set(t.data.series[1],"data",e[2]),o.$set(t.data,"yAxisData",e[0]),o.key6=!0,t=t.data,r.perOrderFormData=t}})},toPersonal:function(t,e){this.$router.push({path:"/personal?shopId="+t[1][t[0].dataIndex]+"&name="+t[0].name+e})},getInChartsEvent:function(t){this.toPersonal(t,"进店数&type=getIn")},achieveRatioChartsEvent:function(t){this.toPersonal(t,"成交率&type=achieveRatio")},orderFormChartsEvent:function(t){this.toPersonal(t,"客单值&type=orderForm")}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"audioTechnica paddingTop"},[a("mybanner",{attrs:{title:t.title}}),t._v(" "),a("SelectComponent"),t._v(" "),a("li",{staticClass:"barBox"},[a("chartsTit",{attrs:{text:"进店数-整体"}},[a("h6",[t._v("单位：人次")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.storeGetInTotalShow,expression:"!storeGetInTotalShow"}],ref:"storeGetInTotalContainer",style:{height:"100vw"}}),t._v(" "),a("noData",{directives:[{name:"show",rawName:"v-show",value:t.storeGetInTotalShow,expression:"storeGetInTotalShow"}]})],1),t._v(" "),a("li",{staticClass:"barBox"},[a("chartsTit",{attrs:{text:"进店数-各门店"}},[a("h6",[t._v("单位：人次")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.perStoreGetInShow,expression:"!perStoreGetInShow"}],ref:"perStoreGetInContainer"}),t._v(" "),a("noData",{directives:[{name:"show",rawName:"v-show",value:t.perStoreGetInShow,expression:"perStoreGetInShow"}]})],1),t._v(" "),a("li",{staticClass:"barBox"},[a("chartsTit",{attrs:{text:"成交率-整体"}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.achieveRatioTotalShow,expression:"!achieveRatioTotalShow"}],ref:"achieveRatioTotalContainer",style:{height:"100vw"}}),t._v(" "),a("noData",{directives:[{name:"show",rawName:"v-show",value:t.achieveRatioTotalShow,expression:"achieveRatioTotalShow"}]})],1),t._v(" "),a("li",{staticClass:"barBox"},[a("chartsTit",{attrs:{text:"成交率-各门店"}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.perAchieveRatioShow,expression:"!perAchieveRatioShow"}],ref:"perAchieveRatioContainer"}),t._v(" "),a("noData",{directives:[{name:"show",rawName:"v-show",value:t.perAchieveRatioShow,expression:"perAchieveRatioShow"}]})],1),t._v(" "),a("li",{staticClass:"barBox"},[a("chartsTit",{attrs:{text:"均单值-整体"}},[a("h6",[t._v("单位：元")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.orderFormTotalShow,expression:"!orderFormTotalShow"}],ref:"orderFormTotalContainer",style:{height:"100vw"}}),t._v(" "),a("noData",{directives:[{name:"show",rawName:"v-show",value:t.orderFormTotalShow,expression:"orderFormTotalShow"}]})],1),t._v(" "),a("li",{staticClass:"barBox"},[a("chartsTit",{attrs:{text:"均单值-各门店"}},[a("h6",[t._v("单位：元")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.perOrderFormShow,expression:"!perOrderFormShow"}],ref:"perOrderFormContainer"}),t._v(" "),a("noData",{directives:[{name:"show",rawName:"v-show",value:t.perOrderFormShow,expression:"perOrderFormShow"}]})],1)],1)},staticRenderFns:[]};var T=a("C7Lr")(S,y,!1,function(t){a("zLYk")},"data-v-dd058cc8",null);e.default=T.exports},zLYk:function(t,e){}});
//# sourceMappingURL=69.0b7aef21bca6a32e5bba.js.map