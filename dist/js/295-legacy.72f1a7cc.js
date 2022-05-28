"use strict";(self["webpackChunkcp_2022_frontend_ekzodev"]=self["webpackChunkcp_2022_frontend_ekzodev"]||[]).push([[295],{9253:function(t,e,i){var o=i(2109),n=i(4230),r=i(3429);o({target:"String",proto:!0,forced:r("fixed")},{fixed:function(){return n(this,"tt","","")}})},172:function(t,e,i){var o=i(6428);e["Z"]=o.Z},3385:function(t,e,i){i.d(e,{Z:function(){return u}});var o=i(4367),n=i(6210),r=i(6952),s=i(3377),l=i(2529),c=i(3712),a=i(8085),h=i(3325),u=(0,h.Z)(n.Z,r.Z,s.Z,l.Z,c.Z,a.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return(0,o.Z)((0,o.Z)((0,o.Z)({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},3358:function(t,e,i){i.d(e,{Z:function(){return r}});var o=i(3536),n=i(3325);function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(0,n.Z)((0,o.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},6210:function(t,e,i){var o=i(144);function n(t){return function(e,i){for(var o in i)Object.prototype.hasOwnProperty.call(e,o)||this.$delete(this.$data[t],o);for(var n in e)this.$set(this.$data[t],n,e[n])}}e["Z"]=o.Z.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",n("attrs$"),{immediate:!0}),this.$watch("$listeners",n("listeners$"),{immediate:!0})}})},3377:function(t,e,i){var o=i(3796),n=(i(9653),i(144));e["Z"]=n.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:(0,o.Z)({},"elevation-".concat(this.elevation),!0)}}})},3536:function(t,e,i){i.d(e,{d:function(){return s}});var o=i(144),n=i(4589),r={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return o.Z.extend({name:"positionable",props:t.length?(0,n.ji)(r,t):r})}e["Z"]=s()},3566:function(t,e,i){i.r(e),i.d(e,{default:function(){return E}});var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-system-bar",{attrs:{app:"",color:"primary",dark:"",window:""}},[i("v-spacer"),i("span",{},[t._v("Личный кабинет")])],1),i("v-app-bar",{attrs:{app:"",color:"secondary",dark:"",flat:"","clipped-left":""}},[t.$vuetify.breakpoint.smAndDown?i("v-app-bar-nav-icon",{on:{click:function(e){t.drawerLocal=!t.drawerLocal}}}):t._e(),t.$vuetify.breakpoint.smAndDown?t._e():t._t("user"),i("v-toolbar-title",[t._v(t._s(t.title))]),i("v-spacer"),t._t("menu")],2)],1)},n=[],r={name:"AppHeader",props:{title:String,drawer:Boolean},data:function(){return{drawerLocal:!1}},watch:{drawer:{immediate:!0,handler:function(t){this.drawerLocal=t}},drawerLocal:{handler:function(t){this.$emit("update:drawer",t)}},"$vuetify.breakpoint.smAndDown":{immediate:!0,handler:function(){this.drawerLocal=!1}}}},s=r,l=i(1001),c=i(3453),a=i.n(c),h=i(4367),u=(i(9253),i(9653),i(6656)),d=i(9726);function p(t,e,i){var o=e.modifiers||{},n=o.self,r=void 0!==n&&n,s=e.value,l="object"===(0,d.Z)(s)&&s.options||{passive:!0},c="function"===typeof s||"handleEvent"in s?s:s.handler,a=r?t:e.arg?document.querySelector(e.arg):window;a&&(a.addEventListener("scroll",c,l),t._onScroll=Object(t._onScroll),t._onScroll[i.context._uid]={handler:c,options:l,target:r?void 0:a})}function f(t,e,i){var o;if(null!=(o=t._onScroll)&&o[i.context._uid]){var n=t._onScroll[i.context._uid],r=n.handler,s=n.options,l=n.target,c=void 0===l?t:l;c.removeEventListener("scroll",r,s),delete t._onScroll[i.context._uid]}}var v={inserted:p,unbind:f},m=v,S=i(3358),g=i(1824),b=i(144),Z=b.Z.extend({name:"scrollable",directives:{Scroll:v},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,g.Kd)("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),y=i(9177),w=i(2936),O=i(4589),T=i(3325),B=(0,T.Z)(u.Z,Z,y.Z,w.Z,(0,S.Z)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),$=B.extend({name:"v-app-bar",directives:{Scroll:m},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return Z.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return(0,h.Z)((0,h.Z)({},u.Z.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return u.Z.options.computed.computedContentHeight.call(this);var t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,e=1.5;return t+(e-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=u.Z.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:u.Z.options.computed.isCollapsed.call(this)},isProminent:function(){return u.Z.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return(0,h.Z)((0,h.Z)({},u.Z.options.computed.styles.call(this)),{},{fontSize:(0,O.kb)(this.computedFontSize,"rem"),marginTop:(0,O.kb)(this.computedMarginTop),transform:"translateY(".concat((0,O.kb)(this.computedTransform),")"),left:(0,O.kb)(this.computedLeft),right:(0,O.kb)(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll:function(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=u.Z.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=u.Z.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),_=(i(3210),i(172)),x=i(680),k=b.Z.extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var i=e.slots,o=e.listeners,n=e.props,r=e.data,s=Object.assign(r,{staticClass:"v-app-bar__nav-icon ".concat(r.staticClass||"").trim(),props:(0,h.Z)((0,h.Z)({},n),{},{icon:!0}),on:o}),l=i().default;return t(x.Z,s,l||[t(_.Z,"$menu")])}}),A=i(9762),C=i(6952),H=i(8085),L=(0,T.Z)((0,S.Z)("bar",["height","window"]),C.Z,H.Z).extend({name:"v-system-bar",props:{height:[Number,String],lightsOut:Boolean,window:Boolean},computed:{classes:function(){return(0,h.Z)({"v-system-bar--lights-out":this.lightsOut,"v-system-bar--absolute":this.absolute,"v-system-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-system-bar--window":this.window},this.themeClasses)},computedHeight:function(){return this.height?isNaN(parseInt(this.height))?this.height:parseInt(this.height):this.window?32:24},styles:function(){return{height:(0,O.kb)(this.computedHeight)}}},methods:{updateApplication:function(){return this.$el?this.$el.clientHeight:this.computedHeight}},render:function(t){var e={staticClass:"v-system-bar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),(0,O.z9)(this))}}),U=i(7921),R=(0,l.Z)(s,o,n,!1,null,null,null),E=R.exports;a()(R,{VAppBar:$,VAppBarNavIcon:k,VSpacer:A.Z,VSystemBar:L,VToolbarTitle:U.qW})}}]);
//# sourceMappingURL=295-legacy.72f1a7cc.js.map