"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[585],{91585:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"animate__animated animate__backInUp",attrs:{id:"step-1","element-loading-text":"正在等待 NFC 校验...","element-loading-background":"rgba(243, 241, 235, 0.5)","element-loading-spinner":"el-icon-loading"}},[n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("v-img",{staticClass:"animate__animated animate__bounceInDown",staticStyle:{width:"70vw",height:"70vw",margin:"0 auto"},attrs:{fit:"fill",src:t.NFT}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("v-btn",{staticStyle:{color:"#2158a2"},attrs:{large:"",block:""},on:{click:function(e){return t.nextStep()}}},[t._v("\n    请让您的手机背部靠近 NFT 识别标签...\n  ")])],1)};i._withStripped=!0;var a=n(36301);const r={data:function(){return{loading:!1,NFT:a}},methods:{nextStep:function(){var t=this;this.loading=!0,setTimeout((function(){t.$router.push("/verify/step-2"),t.loading=!1}),3e3)}}};var o=(0,n(40810).Z)(r,i,[],!1,null,"de3ad3b0",null);o.options.__file="verify/step-1.vue";const s=o.exports},40810:(t,e,n)=>{function i(t,e,n,i,a,r,o,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):a&&(l=s?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var _=c.beforeCreate;c.beforeCreate=_?[].concat(_,l):[l]}return{exports:t,options:c}}n.d(e,{Z:()=>i})},36301:(t,e,n)=>{t.exports=n.p+"assets/images/NFT.9ac663f14ba0682bcdf6..png"}}]);
//# sourceMappingURL=585.a9b5285a5ce0eb2df4c1.js.map