webpackJsonp([87],{AVZx:function(t,e){},wVnN:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("4YfN"),s=a.n(n),o=a("xd7I"),i=a("wSez"),r=a("YV7O"),c=a("ga7s"),u=a("v+Lu"),l=a("HVJf"),p=(a("vGYV"),a("0xDb")),h=a("pPmT");o.default.component(i.Loadmore.name,i.Loadmore);var d=new p.a,f={data:function(){return{key:"",top:"",status:""}},components:{mybanner:r.a,searchInput:c.a,employeeLi:u.a},computed:s()({},Object(l.d)({list:function(t){return t.shopList.list}})),created:function(){this.getData({shopName:""})},mounted:function(){this.isIPhoneX()},methods:s()({},Object(l.c)("shopList",["setList"]),{isIPhoneX:function(){var t=this.phoneSize();this.top="iphonex"===t?"6":"0"},search:function(){var t=this;Object(h.a)(function(){t.getData({shopName:t.key})},500)()},getData:function(t){var e=this;d.getShopList(t).then(function(t){1===t.status?(e.setList(t.data),t.data.length>0?e.status="":e.status="暂无记录"):toast(t.msg)}).catch(function(a){510===a&&e.getData(t)})},go:function(t,e){this.$router.push({name:"shopDetail",params:{id:t,name:e}})}})},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"employee"},[a("mybanner",{ref:"banner",staticStyle:{background:"#fff",border:"none"},attrs:{title:"门店列表"}}),t._v(" "),a("search-input",{ref:"search",style:{marginTop:t.top+"vw"},attrs:{placeholder:"请输入门店名称"},on:{input:t.search},model:{value:t.key,callback:function(e){t.key="string"==typeof e?e.trim():e},expression:"key"}}),t._v(" "),t.list.length>0?a("div",t._l(t.list,function(e,n){return a("ul",{key:n,on:{click:function(a){return t.go(e.id,e.shopName)}}},[a("employeeLi",{tag:"li",attrs:{icon:!0}},[a("div",{staticClass:"detail"},[a("div",[a("h1",[t._v(t._s(e.shopName))]),t._v(" "),a("p",[t._v("地址："+t._s(e.address))])]),t._v(" "),a("span",[t._v("店长："),a("b",[t._v(t._s(e.storeManagers[0]))])])])])],1)}),0):a("div",{staticClass:"noData"},[t._v(t._s(t.status))])],1)},staticRenderFns:[]};var m=a("C7Lr")(f,v,!1,function(t){a("AVZx")},"data-v-37806f7c",null);e.default=m.exports}});
//# sourceMappingURL=87.0a808cc49e385da39d58.js.map