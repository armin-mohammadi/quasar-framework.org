webpackJsonp([41],{104:function(e,t,i){var s=i(2)(i(242),i(465),null,null,null);e.exports=s.exports},228:function(e,t,i){e.exports=i.p+"img/quasar.e39acbb.jpg"},242:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(0);t.default={components:{QSlideTransition:s.QSlideTransition,QToggle:s.QToggle},data:function(){return{visible:!0}}}},465:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"layout-padding row justify-center"},[s("div",{staticStyle:{width:"500px","max-width":"90vw"}},[s("p",{staticClass:"caption"},[e._v('"Slide" Transition')]),e._v(" "),e._m(0),e._v(" "),s("p",[s("q-toggle",{attrs:{label:"Visible image"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}})],1),e._v(" "),s("q-slide-transition",[s("p",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticStyle:{margin:"0","max-width":"500px"}},[s("img",{staticClass:"responsive",attrs:{src:i(228)}})])])],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",{staticClass:"caption"},[i("span",{staticClass:"desktop-only"},[e._v("Click")]),e._v(" "),i("span",{staticClass:"mobile-only"},[e._v("Tap")]),e._v("\n      on the Toggle below to see the transition in action.\n    ")])}]}}});