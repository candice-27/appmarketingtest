webpackJsonp([70],{Kmqq:function(t,e){},qkJO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("0xDb"),a=n("YV7O"),i=n("t7k9"),s=new r.a,c={components:{banner:a.a},data:function(){return{myhtml:""}},created:function(){this.getContent()},methods:{getContent:function(){var t=this,e=this.$route.query.brand;s.brandIntroduce(e).then(function(e){var n=e.data.introduce;t.myhtml=Object(i.d)(Object(i.a)(n)),t.myhtml=Object(i.e)(t.myhtml)})}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"r-index"},[e("banner",{attrs:{title:"品牌介绍"}}),this._v(" "),e("div",{staticClass:"recommend",domProps:{innerHTML:this._s(this.myhtml)}})],1)},staticRenderFns:[]};var d=n("C7Lr")(c,o,!1,function(t){n("Kmqq")},"data-v-d45ccade",null);e.default=d.exports}});
//# sourceMappingURL=70.adbfc2d4ec5ed662404a.js.map