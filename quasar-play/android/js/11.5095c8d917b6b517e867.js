webpackJsonp([11],{176:function(r,e,s){function t(r){s(380)}var o=s(3)(s(314),s(442),t,null,null);r.exports=o.exports},314:function(r,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=s(0);e.default={components:{QProgress:t.QProgress,QBtn:t.QBtn},data:function(){return{progress:67,progressBuffer:41,buffer:17}},methods:{randomize:function(){this.progress=Math.round(100*Math.random())},randomizeBuffer:function(){this.progressBuffer=Math.round(51*Math.random()),this.buffer=Math.round(47*Math.random())}}}},359:function(r,e,s){e=r.exports=s(100)(void 0),e.push([r.i,".docs-progress .q-btn+.q-progress{margin-top:20px}.docs-progress .q-progress+.q-progress{margin-top:10px}",""])},380:function(r,e,s){var t=s(359);"string"==typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);s(101)("1f559e96",t,!0)},442:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement,s=r._self._c||e;return s("div",{staticClass:"layout-padding docs-progress row justify-center"},[s("div",{staticStyle:{width:"500px","max-width":"90vw"}},[r._m(0),r._v(" "),s("h5",[r._v("Determinate State")]),r._v(" "),s("q-btn",{attrs:{small:"",color:"primary"},on:{click:r.randomize}},[r._v("Change Model")]),r._v(" "),s("q-progress",{attrs:{percentage:r.progress}}),r._v(" "),s("q-progress",{attrs:{percentage:r.progress,color:"positive"}}),r._v(" "),s("q-progress",{attrs:{percentage:r.progress,color:"info"}}),r._v(" "),s("q-progress",{attrs:{percentage:r.progress,color:"warning"}}),r._v(" "),s("q-progress",{attrs:{percentage:r.progress,color:"secondary"}}),r._v(" "),s("q-progress",{attrs:{percentage:r.progress,color:"tertiary"}}),r._v(" "),s("q-progress",{attrs:{percentage:r.progress,color:"dark"}}),r._v(" "),s("q-progress",{attrs:{percentage:r.progress,color:"negative"}}),r._v(" "),s("h5",[r._v("Stripe")]),r._v(" "),s("q-progress",{attrs:{percentage:r.progress,stripe:""}}),r._v(" "),s("q-progress",{attrs:{percentage:r.progress,stripe:"",color:"positive"}}),r._v(" "),s("q-progress",{attrs:{percentage:r.progress,stripe:"",color:"info"}}),r._v(" "),s("q-progress",{attrs:{percentage:r.progress,stripe:"",color:"warning"}}),r._v(" "),s("h5",[r._v("Stripe and Animate")]),r._v(" "),s("q-progress",{attrs:{percentage:r.progress,stripe:"",animate:"",color:"secondary"}}),r._v(" "),s("h5",[r._v("Buffering")]),r._v(" "),s("q-btn",{attrs:{small:"",color:"primary"},on:{click:r.randomizeBuffer}},[r._v("Change Buffer Model")]),r._v(" "),s("q-progress",{attrs:{percentage:r.progressBuffer,buffer:r.buffer}}),r._v(" "),s("q-progress",{attrs:{percentage:r.progressBuffer,stripe:"",buffer:r.buffer}}),r._v(" "),s("q-progress",{attrs:{percentage:r.progressBuffer,stripe:"",animate:"",color:"secondary",buffer:r.buffer}}),r._v(" "),s("h5",[r._v("Indeterminate State")]),r._v(" "),s("q-progress",{attrs:{indeterminate:""}}),r._v(" "),s("q-progress",{attrs:{indeterminate:"",color:"positive"}}),r._v(" "),s("q-progress",{attrs:{indeterminate:"",color:"warning"}}),r._v(" "),s("q-progress",{attrs:{indeterminate:"",color:"negative"}}),r._v(" "),s("q-progress",{attrs:{indeterminate:"",color:"dark"}}),r._v(" "),s("h5",[r._v("Specific Height")]),r._v(" "),s("q-progress",{staticStyle:{height:"45px"},attrs:{percentage:r.progress,stripe:"",animate:""}})],1)])},staticRenderFns:[function(){var r=this,e=r.$createElement,s=r._self._c||e;return s("p",{staticClass:"caption"},[s("span",{staticClass:"desktop-only"},[r._v("Click")]),r._v(" "),s("span",{staticClass:"mobile-only"},[r._v("Tap")]),r._v("\n      on progress bars to change their binded value.\n      "),s("span",{staticClass:"desktop-only"},[r._v("\n        On a real mobile device the Progress bars\n        are much thinner by default.\n      ")])])}]}}});