(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88a48744"],{"0739":function(t,e,a){"use strict";var s=a("4407"),i=a.n(s);i.a},1548:function(t,e,a){"use strict";var s=a("a163"),i=a.n(s);i.a},4407:function(t,e,a){},4542:function(t,e,a){"use strict";var s=a("6870"),i=a.n(s);i.a},6870:function(t,e,a){},"699f":function(t,e,a){},a163:function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("van-row",{staticClass:"input-box",attrs:{type:"flex",align:"center"}},[a("van-col",{staticClass:"exchange",attrs:{span:"2"}},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-wanmeiicon-"}})])]),a("van-col",{staticClass:"position",attrs:{span:"18"}},[a("van-field",{attrs:{placeholder:"请输入起点","right-icon":"location"},model:{value:t.position.start,callback:function(e){t.$set(t.position,"start",e)},expression:"position.start"}}),a("van-field",{attrs:{placeholder:"请输入终点","right-icon":"location"},model:{value:t.position.end,callback:function(e){t.$set(t.position,"end",e)},expression:"position.end"}})],1),a("van-col",{attrs:{span:"4"}},[a("van-button",{attrs:{type:"info",round:"",size:"mini"},on:{click:t.handleSearch}},[t._v("\n        查询\n      ")])],1)],1),a("van-collapse",{staticClass:"select-vehicle",model:{value:t.active_vehicle,callback:function(e){t.active_vehicle=e},expression:"active_vehicle"}},[a("van-collapse-item",{attrs:{title:"组合交通",name:"1",icon:"logistics"}},[a("van-checkbox-group",{model:{value:t.vehicle_result,callback:function(e){t.vehicle_result=e},expression:"vehicle_result"}},[a("van-cell-group",t._l(t.vehicle_list,function(t,e){return a("van-cell",{key:e,attrs:{clickable:"",title:t.name,icon:t.icon}},[a("van-checkbox",{ref:"checkboxes",refInFor:!0,attrs:{name:t.name}})],1)}),1)],1)],1)],1),a("div",{staticClass:"tabs"},[a("van-tabs",{attrs:{animated:"",color:"#1989fa"},model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},t._l(t.tab_list,function(e,s){return a("van-tab",{key:s},[a("div",{attrs:{slot:"title"},slot:"title"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":e.icon}})]),t._v("\n          "+t._s(e.title)+"\n        ")]),a("ul",{staticClass:"result-box"},[t.loading?a("div",{staticClass:"loading-box"},[a("van-loading",{staticClass:"loading-icon"}),a("p",{staticClass:"loading-info"},[t._v("最佳路线查询中")])],1):a("search-result",{attrs:{result_list:t.result_list}})],1)])}),1)],1)],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[t._l(t.result_list,function(e,s){return a("li",{key:s,staticClass:"result-cell",on:{click:function(a){return t.handleDetail(e)}}},[a("div",{staticClass:"result"},[a("p",{staticClass:"title"},[t._v("推荐方案"+t._s(s+1))]),a("div",{staticClass:"cost-box"},[a("span",{staticClass:"time"},[t._v("时间: "+t._s(e.time)+" ")]),a("span",{staticClass:"money"},[t._v("花费: "+t._s(e.money)+"元")])]),a("div",{staticClass:"way"},t._l(e.way,function(s,i){return a("span",{key:i,staticClass:"way-msg"},[t._v(t._s(s.name)+"\n          "),i!==e.way.length-1?a("span",[t._v(" → ")]):t._e()])}),0)])])}),a("result-detail",{ref:"DetailItem",attrs:{detail_item:t.detail_item}})],2)},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"detail"},[a("div",{staticClass:"map-box"},[a("van-icon",{staticClass:"back-icon",attrs:{name:"close"},on:{click:t.closeView}}),a("route-map")],1),a("van-steps",{staticClass:"deatil-cell",attrs:{direction:"vertical","active-color":"#1989fa"}},[a("div",{staticClass:"cost-box"},[a("span",{staticClass:"time"},[t._v("时间: "+t._s(t.detail_item.time)+" ")]),a("span",{staticClass:"money"},[t._v("花费: "+t._s(t.detail_item.money)+"元")])]),a("div",{staticClass:"step-box"},t._l(t.detail_item.way,function(e,s){return a("van-step",{key:s,staticClass:"step"},[a("h3",{staticClass:"name"},[t._v(t._s(e.name))]),a("p",[t._v("出发时间："+t._s(e.start_time))])])}),1)])],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"amap-wrapper"},[a("el-amap",{staticClass:"amap-box",attrs:{vid:"amap-vue"}})],1)},u=[],m={},v=m,_=(a("1548"),a("2877")),d=Object(_["a"])(v,r,u,!1,null,"3f8116eb",null),p=d.exports,h={name:"ResultDetail",components:{"route-map":p},props:{detail_item:{type:Object,default:function(){}}},data:function(){return{show:!1}},methods:{showView:function(){this.show=!0},closeView:function(){this.show=!1}}},f=h,b=(a("4542"),Object(_["a"])(f,c,o,!1,null,"d8cd27b2",null)),w=b.exports,C={name:"SearchResult",components:{"result-detail":w},props:{result_list:{type:Array,default:function(){return[]}}},data:function(){return{detail_item:{}}},methods:{handleDetail:function(t){this.detail_item=t,this.$refs.DetailItem.showView()}}},y=C,x=(a("f8d1"),Object(_["a"])(y,n,l,!1,null,"6f1bd116",null)),k=x.exports,g={components:{"search-result":k},data:function(){return{position:{start:"",end:""},active_tab:1,tab_list:[{title:"时间最短",icon:"#icon-shijian"},{title:"花费最少",icon:"#icon-bixuhuafei"},{title:"换乘最少",icon:"#icon--_buhang"}],active_vehicle:[],vehicle_result:["地铁","高铁","飞机"],vehicle_list:[{name:"地铁",icon:"star-o"},{name:"高铁",icon:"phone-o"},{name:"飞机",icon:"like-o"}],result_list:[{time:"16小时07分钟",money:"4536",way:[{name:"高铁12号线",start_time:"10:22"},{name:"133号航班",start_time:"12:22"},{name:"地铁21号线",start_time:"04:22"},{name:"高铁12号线",start_time:"10:22"},{name:"133号航班",start_time:"12:22"},{name:"地铁21号线",start_time:"04:22"}]}],loading:!1}},watch:{active_tab:function(){this.result_list.splice(0),this.handleSearch()}},methods:{handleSearch:function(){var t=this;this.loading=!0,setTimeout(function(){t.loading=!1,t.result_list=[{time:"2小时38分钟",money:"168",way:[{name:"地铁1号线",start_time:"10:22"},{name:"地铁1333号线",start_time:"12:22"},{name:"地铁2号线",start_time:"04:22"}]},{time:"6小时32分钟",money:"456",way:[{name:"高铁1号线",start_time:"10:22"},{name:"1号航班",start_time:"12:22"},{name:"地铁2号线",start_time:"04:22"}]},{time:"8小时18分钟",money:"998",way:[{name:"地铁1号线",start_time:"10:22"},{name:"22号航班",start_time:"12:22"},{name:"高铁3号线",start_time:"04:22"},{name:"航班44号线",start_time:"04:22"}]}]},2e3)}}},$=g,j=(a("0739"),Object(_["a"])($,s,i,!1,null,"33778048",null));e["default"]=j.exports},f8d1:function(t,e,a){"use strict";var s=a("699f"),i=a.n(s);i.a}}]);