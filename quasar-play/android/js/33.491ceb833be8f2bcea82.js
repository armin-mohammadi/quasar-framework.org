webpackJsonp([33],{105:function(t,e,a){function o(t){a(376)}var i=a(3)(a(245),a(422),o,null,null);t.exports=i.exports},245:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(0);e.default={components:{QBtn:o.QBtn,QToolbar:o.QToolbar,QToolbarTitle:o.QToolbarTitle,QSpinner:o.QSpinner,QIcon:o.QIcon},directives:{GoBack:o.GoBack},data:function(){return{url:decodeURIComponent(this.$route.params.url),active:!0,iframeLoaded:!1,showedToolbar:!1}},methods:{onload:function(){this.active=!1,this.iframeLoaded=!0},toggle:function(){this.active=!this.active},refresh:function(){var t=this,e=this.url;setTimeout(function(){t.url="",t.iframeLoaded=!1,t.$nextTick(function(){t.url=e})},350),this.active=!1}},mounted:function(){var t=this;setTimeout(function(){t.showedToolbar=!0},1e3)}}},355:function(t,e,a){e=t.exports=a(100)(void 0),e.push([t.i,".play-view .toolbar{left:0;right:0;-webkit-transform:translateY(-101%);transform:translateY(-101%);transition:all .3s ease;overflow:visible}.play-view .toolbar.active{-webkit-transform:translateX(0);transform:translateX(0)}.play-view .toggle{-webkit-transform:translateY(100%);transform:translateY(100%)}.play-view .toggle a{opacity:.6;border-radius:0 0 5px 5px}.play-view .toolbar-title{font-size:.8rem}",""])},376:function(t,e,a){var o=a(355);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(101)("3111dd74",o,!0)},422:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"play-view window-height window-width",staticStyle:{overflow:"hidden"}},[a("q-toolbar",{staticClass:"fixed shadow-1",class:{active:t.active||!t.showedToolbar}},[a("q-btn",{directives:[{name:"go-back",rawName:"v-go-back",value:"/play",expression:"'/play'"}],attrs:{flat:"",small:""}},[a("q-icon",{attrs:{name:"close"}})],1),t._v(" "),a("q-toolbar-title",[t._v("\n      "+t._s(t.url)+"\n    ")]),t._v(" "),a("q-btn",{attrs:{flat:"",small:""},on:{click:t.refresh}},[a("q-icon",{attrs:{name:"refresh"}})],1),t._v(" "),a("div",{staticClass:"toggle absolute-bottom row justify-center"},[a("a",{staticClass:"bg-white text-primary",on:{click:t.toggle}},[a("q-icon",{attrs:{name:t.active?"remove_circle":"add_circle"}})],1)])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.iframeLoaded,expression:"!iframeLoaded"}],staticClass:"window-height window-width row flex-center"},[a("q-spinner",{attrs:{size:"80px"}})],1),t._v(" "),a("iframe",{directives:[{name:"show",rawName:"v-show",value:t.iframeLoaded,expression:"iframeLoaded"}],staticClass:"full-height full-width",staticStyle:{border:"0"},attrs:{src:t.url},on:{load:t.onload}})],1)},staticRenderFns:[]}}});