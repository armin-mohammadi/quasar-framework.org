webpackJsonp([34],{101:function(r,o,e){function t(r){e(379)}var n=e(3)(e(241),e(453),t,null,null);r.exports=n.exports},241:function(r,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=e(0);o.default={components:{QBtn:t.QBtn,QIcon:t.QIcon},data:function(){return{canGoBack:window.history.length>1}},methods:{goBack:function(){window.history.go(-1)}}}},358:function(r,o,e){o=r.exports=e(98)(void 0),o.push([r.i,".error-page .error-code{height:50vh;width:100%;padding-top:15vh;font-size:30vmax;color:hsla(0,0%,100%,.2);overflow:hidden}.error-page .error-card{border-radius:2px;margin-top:-50px;width:80vw;max-width:600px;padding:25px}.error-page .error-card>i{font-size:5rem}",""])},379:function(r,o,e){var t=e(358);"string"==typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);e(99)("2fe14da3",t,!0)},453:function(r,o){r.exports={render:function(){var r=this,o=r.$createElement,e=r._self._c||o;return e("div",{staticClass:"error-page window-height window-width bg-light column items-center no-wrap"},[e("div",{staticClass:"error-code bg-primary flex flex-center"},[r._v("\n    404\n  ")]),r._v(" "),e("div",[e("div",{staticClass:"error-card shadow-4 bg-white column flex-center no-wrap"},[e("q-icon",{attrs:{name:"error_outline",color:"grey-5"}}),r._v(" "),e("p",{staticClass:"caption text-center"},[r._v("Oops. Nothing here...")]),r._v(" "),e("p",{staticClass:"text-center group"},[r.canGoBack?e("q-btn",{attrs:{color:"primary",push:"",icon:"keyboard_arrow_left"},on:{click:r.goBack}},[r._v("\n          Go back\n        ")]):r._e(),r._v(" "),e("q-btn",{attrs:{color:"primary",push:"","icon-right":"home"},on:{click:function(o){r.$router.replace("/")}}},[r._v("\n          Go home\n        ")])],1)],1)])])},staticRenderFns:[]}}});