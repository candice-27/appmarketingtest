webpackJsonp([89],{"b/ii":function(a,t){},baos:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("4YfN"),o=e.n(s),r=(e("84iU"),e("xd7I")),i=e("JFlM"),n=e("e1F6"),d=e("vGYV"),h=e("HVJf"),l=e("Ueg1"),c=e("cFe5"),u=e("7m0P"),S=e("YV7O"),m=e("bNyG"),f=e("t7k9");r.default.use(n.a),r.default.use(h.a);var p={name:"storeSales",components:{Bar:l.a,chartsTit:c.a,RouterLink:u.a,mybanner:S.a,noData:m.a},data:function(){return{ajaxData:{},storeSalesData:{},endTime:d.a.getLocalTime("end"),title:"销售额报表",key:!1,storeSalchanrtDom1:"",storeSalesShow:!1}},created:function(){var a=localStorage.getItem("ajaxData");this.ajaxData=JSON.parse(a),this.getStoreSalesData()},mounted:function(){Object(f.i)(".barBox")},computed:{},watch:{storeSalesData:function(){var a=this;setTimeout(function(){if(a.key){a.storeSalesShow=Object(i.c)(a.storeSalesData.series),Object(i.b)(a,"storeSales","horizontal",!0,"",function(t,e){e.$router.push({path:"/personalSales?shopId="+a.storeSalesData.idsData[t.dataIndex]+"&name="+t.name})}),a.storeSalchanrtDom1=i.a}},200)}},beforeDestroy:function(){this.storeSalchanrtDom1&&this.storeSalchanrtDom1.dispose()},methods:o()({},Object(h.c)(["setHomeTit","setHomeText","setHomeArr"]),{getStoreSalesData:function(){var a=this,t=this;d.a.getAjax("/v1/app/report/shops/sales",{date:this.endTime,tenantId:this.ajaxData.tenantId}).then(function(e){if(e){var s=d.a.getNewArr(e.data.series[0].data,e.data.series[1].data,e.data.yAxisData,e.data.idsData);a.$set(e.data,"idsData",s[3]),a.$set(e.data.series[0],"data",s[1]),a.$set(e.data.series[1],"data",s[2]),a.$set(e.data,"yAxisData",s[0]),a.key=!0,e=e.data,t.storeSalesData=e}})},chartsEvent:function(a){"series"===a[0].componentType&&this.$router.push({path:"/personalSales?shopId="+a[1][a[0].dataIndex]+"&name="+a[0].name})}})},v={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"storeSales paddingTop2"},[t("mybanner",{attrs:{title:this.title}}),this._v(" "),t("div",{staticClass:"barBox"},[t("chartsTit",{attrs:{text:"各门店销售额对比"}},[t("h6",[this._v("单位：万元")])]),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!this.storeSalesShow,expression:"!storeSalesShow"}],ref:"storeSalesContainer"}),this._v(" "),t("noData",{directives:[{name:"show",rawName:"v-show",value:this.storeSalesShow,expression:"storeSalesShow"}]})],1)],1)},staticRenderFns:[]};var D=e("C7Lr")(p,v,!1,function(a){e("b/ii")},"data-v-25209bf8",null);t.default=D.exports}});
//# sourceMappingURL=89.f6ef324d2c35eeec5419.js.map