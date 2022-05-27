"use strict";(self["webpackChunkcp_2022_frontend_ekzodev"]=self["webpackChunkcp_2022_frontend_ekzodev"]||[]).push([[343],{9253:function(t,e,i){var n=i(2109),o=i(4230),r=i(3429);n({target:"String",proto:!0,forced:r("fixed")},{fixed:function(){return o(this,"tt","","")}})},3358:function(t,e,i){i.d(e,{Z:function(){return r}});var n=i(3536),o=i(3325);function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(0,o.Z)((0,n.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},3536:function(t,e,i){i.d(e,{d:function(){return a}});var n=i(144),o=i(4589),r={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.Z.extend({name:"positionable",props:t.length?(0,o.ji)(r,t):r})}e["Z"]=a()},9293:function(t,e,i){i.r(e),i.d(e,{default:function(){return ot}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t._t("default")],2)},o=[],r={name:"AppSidebar",props:{value:Boolean},data:function(){return{drawer:!1}},watch:{value:{immediate:!0,handler:function(t){this.drawer=t}},drawer:{handler:function(t){this.$emit("input",t)}}}},a=r,s=i(1001),c=i(3453),u=i.n(c),l=i(4367),h=(i(9653),i(9253),i(2222),i(7047)),d=i(3358),v=i(6952),p=i(3748);function f(t){if(Array.isArray(t))return(0,p.Z)(t)}i(2526),i(1817),i(1539),i(2165),i(8783),i(3948),i(1038);function m(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var g=i(8936);i(1703);function y(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(t){return f(t)||m(t)||(0,g.Z)(t)||y()}var w=i(3325);function A(t){for(var e=[],i=0;i<t.length;i++){var n=t[i];n.isActive&&n.isDependent?e.push(n):e.push.apply(e,b(A(n.$children)))}return e}var _=(0,w.Z)().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?A(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,b(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,b(this.getOpenDependentElements())),t}}}),k=(i(6699),i(8309),i(1824)),$=i(144),O=$.Z.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,i=t.width,n=t.name,o=t.mobileBreakpoint;if(o===this.mobileBreakpoint)return e;var r=parseInt(this.mobileBreakpoint,10),a=!isNaN(r);return a?i<r:n===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&(0,k.Rn)("mobile-break-point","mobile-breakpoint",this)}}),x=(i(2023),i(8085)),E=i(2936),M=(0,w.Z)(v.Z,x.Z,E.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return(0,l.Z)({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),C=M,B=i(4589),S=$.Z.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new C({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=(0,B.KK)(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&((0,B.qh)(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[B.Do.up,B.Do.pageup],i=[B.Do.down,B.Do.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i,n,o=e.shiftKey||e.deltaX?"x":"y",r="y"===o?e.deltaY:e.deltaX||e.deltaY;"y"===o?(i=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight):(i=0===t.scrollLeft,n=t.scrollLeft+t.clientWidth===t.scrollWidth);var a=r<0,s=r>0;return!(i||!a)||(!(n||!s)||!(!i&&!n)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=(0,B.iZ)(t);if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,n=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(n,i))||!this.shouldScroll(i,t)}for(var o=0;o<e.length;o++){var r=e[o];if(r===document)return!0;if(r===document.documentElement)return!0;if(r===this.$refs.content)return!0;if(this.hasScrollbar(r))return!this.shouldScroll(r,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,B.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),N=i(9177),T=i(9726);function R(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}function X(){return!0}function Z(t,e,i){if(!t||!1===L(t,i))return!1;var n=R(e);if("undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&n.host===t.target)return!1;var o=("object"===(0,T.Z)(i.value)&&i.value.include||function(){return[]})();return o.push(e),!o.some((function(e){return e.contains(t.target)}))}function L(t,e){var i="object"===(0,T.Z)(e.value)&&e.value.closeConditional||X;return i(t)}function D(t,e,i,n){var o="function"===typeof i.value?i.value:i.value.handler;e._clickOutside.lastMousedownWasOutside&&Z(t,e,i)&&setTimeout((function(){L(t,i)&&o&&o(t)}),0)}function z(t,e){var i=R(t);e(document),"undefined"!==typeof ShadowRoot&&i instanceof ShadowRoot&&e(i)}var H={inserted:function(t,e,i){var n=function(n){return D(n,t,e,i)},o=function(i){t._clickOutside.lastMousedownWasOutside=Z(i,t,e)};z(t,(function(t){t.addEventListener("click",n,!0),t.addEventListener("mousedown",o,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[i.context._uid]={onClick:n,onMousedown:o}},unbind:function(t,e,i){t._clickOutside&&(z(t,(function(e){var n;if(e&&null!=(n=t._clickOutside)&&n[i.context._uid]){var o=t._clickOutside[i.context._uid],r=o.onClick,a=o.onMousedown;e.removeEventListener("click",r,!0),e.removeEventListener("mousedown",a,!0)}})),delete t._clickOutside[i.context._uid])}},Y=H;function W(t,e,i){var n=e.value,o=e.options||{passive:!0};window.addEventListener("resize",n,o),t._onResize=Object(t._onResize),t._onResize[i.context._uid]={callback:n,options:o},e.modifiers&&e.modifiers.quiet||n()}function I(t,e,i){var n;if(null!=(n=t._onResize)&&n[i.context._uid]){var o=t._onResize[i.context._uid],r=o.callback,a=o.options;window.removeEventListener("resize",r,a),delete t._onResize[i.context._uid]}}var V={inserted:W,unbind:I},P=V,j=(i(4747),function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,o=t.touchendY,r=.5,a=16;t.offsetX=i-e,t.offsetY=o-n,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&o<n-a&&t.up(t),t.down&&o>n+a&&t.down(t))});function U(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function F(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),j(e)}function q(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function K(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return U(t,e)},touchend:function(t){return F(t,e)},touchmove:function(t){return q(t,e)}}}function G(t,e,i){var n=e.value,o=n.parent?t.parentElement:t,r=n.options||{passive:!0};if(o){var a=K(e.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[i.context._uid]=a,(0,B.XP)(a).forEach((function(t){o.addEventListener(t,a[t],r)}))}}function J(t,e,i){var n=e.value.parent?t.parentElement:t;if(n&&n._touchHandlers){var o=n._touchHandlers[i.context._uid];(0,B.XP)(o).forEach((function(t){n.removeEventListener(t,o[t])})),delete n._touchHandlers[i.context._uid]}}var Q={inserted:G,unbind:J},tt=Q,et=(0,w.Z)((0,d.Z)("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),v.Z,_,O,S,N.Z,x.Z),it=et.extend({name:"v-navigation-drawer",directives:{ClickOutside:Y,Resize:P,Touch:tt},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return(0,l.Z)({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&O.options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:(0,B.kb)(this.height),top:this.isBottom?"auto":(0,B.kb)(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat((0,B.kb)(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat((0,B.kb)(this.computedTransform,"%"),")"),width:(0,B.kb)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(h.Z,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={mouseenter:function(){return t.isMouseover=!0},mouseleave:function(){return t.isMouseover=!1},transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),e},genPosition:function(t){var e=(0,B.z9)(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||(0,B.z9)(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),nt=(0,s.Z)(a,n,o,!1,null,null,null),ot=nt.exports;u()(nt,{VNavigationDrawer:it})}}]);
//# sourceMappingURL=343-legacy.6307a3d0.js.map