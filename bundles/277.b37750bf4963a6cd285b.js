"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[277],{52277:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"animate__animated animate__backInUp",attrs:{id:"step-1","element-loading-text":"正在等待 NFC 校验...","element-loading-background":"rgba(243, 241, 235, 0.5)","element-loading-spinner":"el-icon-loading"}},[n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("v-img",{staticClass:"animate__animated animate__bounceInDown",staticStyle:{"border-radius":"20px"},attrs:{src:e.jewelryBox,color:"pink"}}),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("v-btn",{staticStyle:{color:"#822E84"},attrs:{large:"",block:""},on:{click:function(t){return e.nextStep()}}},[e._v("\n    点这里，然后将手机贴近卡片...\n  ")]),e._v(" "),n("v-img",{staticStyle:{float:"right",top:"-58px",right:"-5px"},attrs:{src:e.NFC,height:"70",width:"70",color:"pink"}}),e._v(" "),n("div",{staticClass:"NFC-Shake"},[n("v-dialog",{attrs:{"hide-overlay":"",transition:"dialog-bottom-transition",fullscreen:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{staticStyle:{background:"rgba(0,0,0,0.6)",display:"flex","align-items":"center"}},[n("v-img",{staticStyle:{"border-radius":"50px"},attrs:{src:e.NFCShake,height:"100%",width:"100%"}})],1)],1)],1)],1)};a._withStripped=!0;var i=n(26680),o=n(50046),r=n(98337);const s={data:function(){return{loading:!1,jewelryBox:i,NFC:o,NFCShake:r,dialog:!1}},methods:{nextStep:function(){var e=this;this.dialog=!0,window.ndef=new NDEFReader,window.ndef.scan().then((function(){window.ndef.onreadingerror=function(t){alert("【温馨提示】：NFC 读取错误！"),e.dialog=!1},window.ndef.onreading=function(t){e.$router.push("/bind/step-2"),e.dialog=!1}})).catch((function(t){alert("【温馨提示】：NFC 启动错误！"),e.dialog=!1}))}}};var d=(0,n(40810).Z)(s,a,[],!1,null,"19f43b38",null);d.options.__file="bind/step-1.vue";const l=d.exports},40810:(e,t,n)=>{function a(e,t,n,a,i,o,r,s){var d,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),a&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),r?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=d):i&&(d=s?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(e,t){return d.call(t),c(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,d):[d]}return{exports:e,options:l}}n.d(t,{Z:()=>a})},98337:(e,t,n)=>{e.exports=n.p+"assets/images/NFC-shake.080478ef7260fcf3c5c8..gif"},50046:(e,t,n)=>{e.exports=n.p+"assets/images/NFC.271a042516aa2f838dc5..gif"},26680:(e,t,n)=>{e.exports=n.p+"assets/images/molly.88de80ba08bbd064a3a8..png"}}]);
//# sourceMappingURL=277.b37750bf4963a6cd285b.js.map