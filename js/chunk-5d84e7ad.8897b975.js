(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d84e7ad"],{"114a":function(t,e,n){},2788:function(t,e,n){},"73b5":function(t,e,n){},9122:function(t,e,n){"use strict";n("114a")},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"category"}},[n("nav-bar",{staticClass:"category-nav"},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("商品分类")])]),n("scroll",{staticClass:"content",attrs:{"pull-up-load":!0,bounce:!1}},[n("tab-menu",{attrs:{categories:t.categories},on:{selectItem:t.selectItem}})],1)],1)},c=[],r=n("a7ac"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabmenu"},[n("ul",{staticClass:"menu-list"},t._l(t.categories,(function(e,a){return n("li",{key:a,class:{active:a===t.currentIndex},on:{click:function(e){return t.itemClick(a)}}},[t._v(" "+t._s(e.title)+" ")])})),0)])},i=[],o={name:"TabMenu",props:{categories:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("selectItem",t)}}},u=o,l=(n("9122"),n("2877")),f=Object(l["a"])(u,s,i,!1,null,"2f0f3e80",null),d=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menuitem"},[n("scroll",{staticClass:"content",attrs:{"pull-up-load":!0}},[n("div",{staticClass:"item-list"},[n("div",{staticClass:"info"})])])],1)},g=[],m=n("5d17"),p={name:"MenuItem",components:{Scroll:m["a"]},props:{subcategories:{type:Object,default:function(){return[]}}}},h=p,v=(n("bfd5"),Object(l["a"])(h,b,g,!1,null,"43487a8e",null)),y=v.exports,_=n("1bab");function C(){return Object(_["a"])({url:"/category"})}function I(t){return Object(_["a"])({url:"/subcategory",params:{maitKey:t}})}var x={name:"Category",components:{NavBar:r["a"],TabMenu:d,MenuItem:y,Scroll:m["a"]},data:function(){return{categories:[],categoryData:[],currentIndex:-1}},created:function(){this._getCategory()},computed:{showSubcategory:function(){return this.categoryData[this.currentIndex].subcategories}},methods:{_getCategory:function(){var t=this;C().then((function(e){t.categories=e.data.category.list;for(var n=0;n<t.categories.length;n++)t.categoryData[n]={subcategories:{}};t._getSubcategories(0)}))},_getSubcategories:function(t){var e=this;this.currentIndex=t;var n=this.categories[t].maitKey;I(n).then((function(n){e.categoryData[t].subcategories=n.data}))},selectItem:function(t){this._getSubcategories(t)}}},k=x,w=(n("ebde"),Object(l["a"])(k,a,c,!1,null,"c93ebcce",null));e["default"]=w.exports},bfd5:function(t,e,n){"use strict";n("73b5")},ebde:function(t,e,n){"use strict";n("2788")}}]);
//# sourceMappingURL=chunk-5d84e7ad.8897b975.js.map