(function(){var e={4625:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=4625,e.exports=t},2529:function(e,t,n){"use strict";n(6992),n(8674),n(9601),n(7727);var r=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("AppSidebar",{model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),n("AppHeader",{attrs:{title:e.getTitle,drawer:e.drawer},on:{"update:drawer":function(t){e.drawer=t}},scopedSlots:e._u([{key:"user",fn:function(){return[n("AppUser")]},proxy:!0}])}),n("v-main",[n("router-view")],1)],1)},i=[],u=n(4367),a=(n(1539),n(8783),n(3948),n(629)),s={name:"App",components:{AppHeader:function(){return Promise.all([n.e(109),n.e(22),n.e(706)]).then(n.bind(n,2862))},AppSidebar:function(){return Promise.all([n.e(109),n.e(343)]).then(n.bind(n,9293))},AppUser:function(){return Promise.all([n.e(109),n.e(22),n.e(929)]).then(n.bind(n,2308))}},computed:(0,u.Z)((0,u.Z)((0,u.Z)({},(0,a.Se)("App",["getTitle"])),(0,a.Se)("User",["getIsAuthenticated"])),{},{drawer:{get:function(){return this.$store.getters["App/getDrawer"]},set:function(e){this.$store.commit("App/setDrawer",e)}}}),created:function(){this.checkAuth()},methods:(0,u.Z)((0,u.Z)({},(0,a.nv)("User",["setUser"])),{},{checkAuth:function(){this.getIsAuthenticated||this.setUser(1)}})},c=s,f=n(1001),d=n(3453),l=n.n(d),p=n(7524),v=n(7877),h=(0,f.Z)(c,o,i,!1,null,null,null),m=h.exports;l()(h,{VApp:p.Z,VMain:v.Z});var g=n(8345);r.Z.use(g.Z);var b=[{path:"/",name:"index",component:function(){return n.e(826).then(n.bind(n,6630))}}],w=new g.Z({mode:"history",base:"/",routes:b}),y=w,k={namespaced:!0,state:{title:"Модуль поиска аномалий в данных о рыболовстве",drawer:!0},mutations:{setTitle:function(e,t){e.title=t},setDrawer:function(e,t){e.drawer=t}},actions:{},getters:{getTitle:function(e){return e.title},getDrawer:function(e){return e.drawer}}},A=n(7906),Z=n(6198),O=(n(9600),n(6133)),_=n(2751),S=n(9669),T=n.n(S),U=function(){return!0},x=function(){return""},E=T().create({baseURL:x()}),j=(0,_.Z)((function e(){(0,O.Z)(this,e),this.request=E.request,this.get=E.get,this.post=E.post})),C=new j,P=function(){function e(){(0,O.Z)(this,e)}return(0,_.Z)(e,null,[{key:"getUser",value:function(e){return C.request({method:"GET",url:"api/v1/users/".concat(e)})}}]),e}(),N=P,D={namespaced:!0,state:{user:{}},mutations:{setUser:function(e,t){e.user=t}},actions:{setUser:function(e,t){return(0,Z.Z)((0,A.Z)().mark((function n(){var r,o;return(0,A.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,N.getUser(t);case 4:o=n.sent,r("setUser",o.data),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()}},getters:{getFullname:function(e){var t=e.user,n=t.firstname,r=t.lastname;return[n,r].join(" ")},getAvatar:function(e){return e.user.avatar},getIsAuthenticated:function(e){return!!e.user.id}}};r.Z.use(a.ZP);var L=new a.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{App:k,User:D}}),F=n(6513),q=n(413);r.Z.use(F.Z);var I=new F.Z({lang:{locales:{ru:q.Z},current:"ru"}}),M=n(1184),z=JSON.parse('{"id":0,"email":"","firstname":"Пётр","lastname":"Иванов","middlename":"Сергеевич","organizationId":0,"phone":"","position":"Оператор системы","role":"operator","login":"user1"}'),$=M.RF.get("/api/v1/users/:id",(function(e,t,n){var r=e.params.id;if(void 0!==r)switch(r){case"1":return t(n.delay(1e3),n.status(200),n.json(z));default:return t(n.delay(1e3),n.status(404))}return t(n.delay(1e3),n.status(401))})),B=[$],H=M.Lv.apply(void 0,B);r.Z.config.productionTip=!1,U()&&H.start({serviceWorker:{options:{scope:"/"}}}),new r.Z({router:y,store:L,vuetify:I,render:function(e){return e(m)}}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var a=!0,s=0;s<r.length;s++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(a=!1,i<u&&(u=i));if(a){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(826===e?"index":e)+"-legacy."+{22:"d83dcf99",109:"7cbcd5bb",343:"6307a3d0",706:"3ecec683",826:"54eadb28",929:"fb532564"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{343:"dbadb1e3",706:"9ac87b54",929:"c38dd506"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cp-2022-frontend-ekzodev:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var d=c[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var l=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=u,s.request=a,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={343:1,706:1,929:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],s=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(s)var f=s(n)}for(t&&t(r);c<u.length;c++)i=u[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkcp_2022_frontend_ekzodev"]=self["webpackChunkcp_2022_frontend_ekzodev"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2529)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.d2c127b9.js.map