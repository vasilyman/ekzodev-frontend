"use strict";(self["webpackChunkcp_2022_frontend_ekzodev"]=self["webpackChunkcp_2022_frontend_ekzodev"]||[]).push([[929],{2308:function(t,e,i){i.r(e),i.d(e,{default:function(){return W}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-list-item",[i("v-list-item-avatar",{attrs:{color:"grey"}},[t.getAvatar?i("v-img",{attrs:{src:t.getAvatar}}):i("div",[t._v(t._s(t._f("getInitials")(t.getFullname)))])],1),t.getFullname?i("v-list-item-content",[t._v(" "+t._s(t._f("getInitials")(t.getFullname))+" ")]):t._e()],1)],1)},n=[],a=i(629),l={name:"appUser",computed:{...(0,a.Se)("User",["getFullname","getAvatar"])},filters:{getInitials(t){return t?.split(" ")?.map((t=>t[0]?.toUpperCase())).join("")}}},r=l,o=i(1001),h=i(3453),u=i.n(h),d=i(7047),c=i(6952),p=i(6505),v=i(7352),m=i(8085),g=i(2936),f=i(6286),y=i(4589),_=i(1824),I=i(3325);const b=(0,I.Z)(c.Z,p.Z,m.Z,(0,v.d)("listItemGroup"),(0,g.d)("inputValue"));var x=b.extend().extend({name:"v-list-item",directives:{Ripple:f.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...p.Z.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(p.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,_.Jk)("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||`list-item-${this._uid}`):this.isInList&&(t.role="listitem")),t},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(t){let{tag:e,data:i}=this.generateRouteLink();i.attrs={...i.attrs,...this.genAttrs()},i[this.to?"nativeOn":"on"]={...i[this.to?"nativeOn":"on"],keydown:t=>{t.keyCode===y.Do.enter&&this.click(t),this.$emit("keydown",t)}},this.inactive&&(e="div"),this.inactive&&this.to&&(i.on=i.nativeOn,delete i.nativeOn);const s=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.isActive?this.setTextColor(this.color,i):i,s)}}),C=i(4612),A=i(3712),$=(0,I.Z)(c.Z,C.Z,A.Z).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,y.kb)(this.size),minWidth:(0,y.kb)(this.size),width:(0,y.kb)(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),V=$,k=V.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...V.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=V.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}}),B=i(3385),S=(B.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...B.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}}),i(6287)),w=i(144),Z=w.Z.extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:i}){return e.staticClass=`v-list-item__icon ${e.staticClass||""}`.trim(),t("div",e,i)}}),L=i(6210),z=w.Z.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,_.Jk)("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}}),O=i(6257),G=i(6290);function M(t=[],...e){return Array().concat(t,...e)}function E(t,e="top center 0",i){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:i},origin:{type:String,default:e}},render(e,i){const s="transition"+(i.props.group?"-group":""),n={props:{name:t,mode:i.props.mode},on:{beforeEnter(t){t.style.transformOrigin=i.props.origin,t.style.webkitTransformOrigin=i.props.origin}}};return i.props.leaveAbsolute&&(n.on.leave=M(n.on.leave,(t=>{const{offsetTop:e,offsetLeft:i,offsetWidth:s,offsetHeight:n}=t;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=i+"px",t.style.width=s+"px",t.style.height=n+"px"})),n.on.afterLeave=M(n.on.afterLeave,(t=>{if(t&&t._transitionInitialStyles){const{position:e,top:i,left:s,width:n,height:a}=t._transitionInitialStyles;delete t._transitionInitialStyles,t.style.position=e||"",t.style.top=i||"",t.style.left=s||"",t.style.width=n||"",t.style.height=a||""}}))),i.props.hideOnLeave&&(n.on.leave=M(n.on.leave,(t=>{t.style.setProperty("display","none","important")}))),e(s,(0,G.ZP)(i.data,n),i.children)}}}function N(t,e,i="in-out"){return{name:t,functional:!0,props:{mode:{type:String,default:i}},render(i,s){return i("transition",(0,G.ZP)(s.data,{props:{name:t},on:e}),s.children)}}}function P(t="",e=!1){const i=e?"width":"height",s=`offset${(0,y.jC)(i)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[i]:t.style[i]}},enter(e){const n=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const a=`${e[s]}px`;e.style[i]="0",e.offsetHeight,e.style.transition=n.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((()=>{e.style[i]=a}))},afterEnter:a,enterCancelled:a,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[i]:t.style[i]},t.style.overflow="hidden",t.style[i]=`${t[s]}px`,t.offsetHeight,requestAnimationFrame((()=>t.style[i]="0"))},afterLeave:n,leaveCancelled:n};function n(e){t&&e._parent&&e._parent.classList.remove(t),a(e)}function a(t){const e=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[i]=e),delete t._initialStyle}}E("carousel-transition"),E("carousel-reverse-transition"),E("tab-transition"),E("tab-reverse-transition"),E("menu-transition"),E("fab-transition","center center","out-in"),E("dialog-transition"),E("dialog-bottom-transition"),E("dialog-top-transition"),E("fade-transition"),E("scale-transition"),E("scroll-x-transition"),E("scroll-x-reverse-transition"),E("scroll-y-transition"),E("scroll-y-reverse-transition"),E("slide-x-transition"),E("slide-x-reverse-transition"),E("slide-y-transition"),E("slide-y-reverse-transition");const R=N("expand-transition",P());N("expand-x-transition",P("",!0));const T=(0,I.Z)(L.Z,z,c.Z,(0,O.f)("list"),g.Z);T.extend().extend({name:"v-list-group",directives:{ripple:f.Z},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((()=>this.isActive=!this.isActive)))},genIcon(t){return this.$createElement(S.Z,t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(Z,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement(x,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent((()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},(0,y.z9)(this))]))},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(Z,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick((()=>this.isActive=e))},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(R,this.genItems())])}});var D=w.Z.extend({name:"comparable",props:{valueComparator:{type:Function,default:y.vZ}}});function F(t="value",e="change"){return w.Z.extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const J=F();var j=J;const H=(0,I.Z)(D,j,m.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,_.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);const s=this.selectedValues.indexOf(i);if(!(s<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==i)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const i=e.find((t=>!t.disabled));if(!i)return;const s=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,s))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),s=i.findIndex((e=>e===t));this.mandatory&&s>-1&&i.length-1<1||null!=this.max&&s<0&&i.length+1>this.max||(s>-1?i.splice(s,1):i.push(t),this.internalValue=i)},updateSingle(t){const e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});H.extend({name:"v-item-group",provide(){return{itemGroup:this}}}),(0,I.Z)(H,c.Z).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...H.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...H.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),w.Z.extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:i=[]}){e.staticClass=e.staticClass?`v-list-item__action ${e.staticClass}`:"v-list-item__action";const s=i.filter((t=>!1===t.isComment&&" "!==t.text));return s.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,i)}});(0,y.Ji)("v-list-item__action-text","span");const q=(0,y.Ji)("v-list-item__content","div");(0,y.Ji)("v-list-item__title","div"),(0,y.Ji)("v-list-item__subtitle","div");var U=(0,o.Z)(r,s,n,!1,null,null,null),W=U.exports;u()(U,{VImg:d.Z,VListItem:x,VListItemAvatar:k,VListItemContent:q})}}]);
//# sourceMappingURL=929.678c3009.js.map