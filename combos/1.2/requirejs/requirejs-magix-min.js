(function(e,t,n,r,i,a,o,s,c){c=1,s=function(e){return e.id||(e.id="mx_n_"+c++)},o("magix/magix",function(){var n=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,a=/\/[^\/]*$/,o=/[#?].*$/,s=/([^=&?\/#]+)=?([^&=#?]*)/g,u=/^https?:\/\//i,f="/",h="vframe",m=t.console,v=m&&m.error,d=function(){},l={tagName:h,rootId:"magix_vf_root",coded:1,error:v?function(e){m.error(e)}:d},g=l.hasOwnProperty,p=function(e,t){return e&&g.call(e,t)},y=function(t){return function(n,r,i){switch(arguments.length){case 0:i=t;break;case 1:i=_._o(n)?b(t,n):p(t,n)?t[n]:e;break;case 2:r===e?(delete t[n],i=r):t[n]=i=r}return i}},x=function(e,t){return t.f-e.f||t.t-e.t},w=function(e,t){var n=this;return n.get?(n.c=[],n.b=0|t||5,n.x=n.b+(e||20)):n=new w(e,t),n},b=function(e,t,n,r){for(r in t)n&&p(n,r)||(e[r]=t[r]);return e};b(w.prototype,{get:function(e){var t,n=this,i=n.c;return e=r+e,p(i,e)&&(t=i[e],t.f>=1&&(t.f++,t.t=c++,t=t.v)),t},list:function(){return this.c},set:function(e,t,n){var i=this,a=i.c,o=r+e,s=a[o];if(!p(a,o)){if(a.length>=i.x){a.sort(x);for(var u=i.b;u--;)s=a.pop(),i.del(s.o)}s={o:e},a.push(s),a[o]=s}return s.v=t,s.f=1,s.t=c++,s.m=n,t},del:function(e){e=r+e;var t=this.c,n=t[e];n&&(n.f=-1,n.v=i,delete t[e],n.m&&(P(n.m,n.o,n),n.m=i))},has:function(e){return p(this.c,r+e)}});var C=w(40),M=w(),P=function(e,t,n,r,i,a){for(_._a(e)||(e=[e]),t&&(_._a(t)||t.callee)||(t=[t]),r=0;e.length>r;r++)try{a=e[r],i=a&&a.apply(n,t)}catch(o){l.error(o)}return i},_={mix:b,has:p,tryCall:P,noop:d,config:y(l),start:function(e){var t=this;b(l,e),t.use(["magix/router","magix/vom",e.iniFile],function(n,r,i){l=b(l,i,e),l["!tnc"]=l.tagName!=h,n.on("!ul",r.loc),n.on("changed",r.loc),t.use(l.extensions,n.start)})},keys:Object.keys||function(e){var t,n=[];for(t in e)p(e,t)&&n.push(t);return n},local:y({}),path:function(e,t){var s=e+r+t,c=M.get(s);if(!c){for(u.test(t)?e=i:(e=e.replace(o,i).replace(a,i)+f,t.charAt(0)==f&&(e=e.substring(0,e.indexOf(f,u.test(e)?8:0)))),c=e+t;n.test(c);)c=c.replace(n,"$1/");M.set(s,c)}return c},toObject:function(e){var t,n,r,a,c=C.get(e),h={};return c?(h.path=c.path,h.params=b({},c.params)):(t={},n=i,o.test(e)?n=e.replace(o,i):~e.indexOf("=")||(n=e),r=e.replace(n,i),n&&u.test(n)&&(a=n.indexOf(f,8),n=~a?n.substring(a):f),r.replace(s,function(e,n,r){if(l.coded)try{r=decodeURIComponent(r)}catch(i){}t[n]=r}),h.path=n,h.params=t,C.set(e,h)),h},toUrl:function(e,t,n){var r,i,a=[];for(i in t)r=t[i],(!n||r||p(n,i))&&(l.coded&&(r=encodeURIComponent(r)),a.push(i+"="+r));return a.length&&(e+="?"+a.join("&")),e},toMap:function(e,t,n){var r,i,a,o={};if(n=n||1,e&&(a=e.length))for(r=0;a>r;r++)i=e[r],o[t?i[t]:i]=t?i:n;return o},cache:w},k=Object.prototype.toString,q=function(){};return b(_,{use:function(e,t){e?($.isArray(e)||(e=[e]),require(e,t)):t&&t()},_a:$.isArray,_f:$.isFunction,_o:function(e){return"[object Object]"==k.call(e)},extend:function(e,t,n,r){var i=t.prototype;i.constructor=t,q.prototype=i;var a=new q;return _.mix(a,n),_.mix(e,r),a.constructor=e,e.prototype=a,e}})}),o("magix/router",["magix/magix","magix/event"],function(e,n){var i,o,s,c,u,f,h="",m="path",v="view",d=e.has,l=e.mix,g=e.keys,p=e.config(),y=e.cache(),x=e.cache(40),w=t.location,b=t.history,C={params:{},href:h},M=/#.*$/,P=/^[^#]*#?!?/,_="params",k=function(e,t,n){if(e){n=this[_],e=(e+h).split(a);for(var r=0;e.length>r&&!(t=d(n,e[r]));r++);}return t},q=function(){return this[m]},I=function(){return this[v]},V=function(e,t,n,r){return n=this,r=n[_],arguments.length>1?r[e]=t:r[e]||h},A=function(t){var n=e.toObject(t),r=n[m];return r&&u&&(n[m]=e.path(w.pathname,r)),n},O=l({viewInfo:function(t,n){var r,i,a,s;return o||(o={rs:p.routes||{},nf:p.unfoundView},a=p.defaultView,o.dv=a,s=p.defaultPath||h,r=o.rs,o.f=e._f(r),o.f||r[s]||!a||(r[s]=a),o[m]=s),t||(t=o[m]),r=o.rs,i=o.f?r.call(p,t,n):r[t],{view:i||o.nf||o.dv,path:t}},start:function(){s=p.edge,c=s&&b.pushState,u=s&&!c,f=c?"srcQuery":"srcHash",c?O.useState():O.useHash(),O.route()},parseQH:function(e,t){e=e||w.href;var n,r,i,a,o,c,u,f=y.get(e);return f||(i=e.replace(M,h),a=e.replace(P,h),o=A(i),c=A(a),u={},l(u,o[_]),l(u,c[_]),f={get:V,set:V,href:e,refHref:C.href,srcQuery:i,srcHash:a,query:o,hash:c,params:u},y.set(e,f)),t&&!f[v]&&(r=f.hash[m]||s&&f.query[m],n=O.viewInfo(r,f),l(f,n)),f},getChged:function(e,t){var n=e.href,i=t.href,a=n+r+i,o=x.get(a);if(!o){var s,c,u,f;o={isParam:k,isPath:q,isView:I},o[v]=u,o[m]=u,o[_]=f={};var h,d,l=e[_],p=t[_],$=[m,v].concat(g(l),g(p));for(h=$.length-1;h>=0;h--)d=$[h],1==h&&(l=e,p=t,f=o),c=l[d],u=p[d],c!=u&&(f[d]={from:c,to:u},s=1);o.occur=s,x.set(a,o)}return o},route:function(){var e=O.parseQH(0,1),t=!C.get,n=O.getChged(C,e);C=e,n.occur&&(i=e,O.fire("changed",{location:e,changed:n,force:t}))},navigate:function(t,n,r){if(!n&&e._o(t)&&(n=t,t=h),n&&(t=e.toUrl(t,n)),t&&i){var a=A(t),o=i.query[_];if(a[m]){if(u)for(var v in o)d(o,v)&&!d(a[_],v)&&(a[_][v]=h)}else{var g=l({},i[_]);a[_]=l(g,a[_]),a[m]=i[m]}var p,$=e.toUrl(a[m],a[_],s?m:o);p=$!=i[f],p&&(c?(O.poped=1,b[r?"replaceState":"pushState"](h,h,$),O.route()):(l(a,i,a),a.srcHash=$,O.fire("!ul",{loc:i=a}),$="#!"+$,r?w.replace($):w.hash=$))}}},n);return O.useState=function(){var e=O,t=location.href;$(window).on("popstate",function(){var n=location.href==t;(e.poped||!n)&&(e.poped=1,e.route())})},O.useHash=function(){$(window).on("hashchange",O.route)},O}),o("magix/body",["magix/magix"],function(t){var o,c={},u=t.has,f="mx-ei",h=n.body,m="parentNode",v={},d=/\smx-(?!view|vframe)[a-z]+\s*=\s*"/g,l="on",g=function(e,t,n){return n?e.setAttribute(t,n):n=e.getAttribute(t),n},p=function(){this.prevent(),this.stop()},y="",x={wrap:function(e,t,n,a){return t+=i,a=e+r,t=n?[i].concat(t).join(y+a):t.replace(d,"$&"+a)},process:function(t){if(t&&!t[l]){var n=t.target;t[l]=1;for(var i,c,h,d=n,$=t.type,x=v[$]||(v[$]=RegExp(a+$+"(?:,|$)")),w="mx-"+$,b=[];d&&1==d.nodeType&&(i=g(d,w),c=g(d,f),!i&&!x.test(c));)b.push(d),d=d[m];if(i){for(var C,M,P,_,k,q,I,V,A,O=i.split(y);O.length;)if(M=O.shift()){if(P=M.split(r),M=P.pop(),q=P[0],!q&&!C)for(I=d,V=o.all();I;){if(u(V,A=I.id)){g(d,w,(q=A)+r+i);break}I=I[m]}if(C=1,!q)throw Error("bad:"+M);_=o.get(q),k=_&&_.view,k&&(t.currentId=s(d),t.targetId=s(n),t.prevent=t.preventDefault,t.stop=t.stopPropagation,t.halt||(t.halt=p),k.pEvt(M,$,t))}}else{for(;b.length;)h=b.pop(),c=g(h,f)||l,x.test(c)||(c=c+a+$,g(h,f,c));h=e}d=n=e}},act:function(e,t,n){var r=c[e]||0,i=r>0?1:0,a=x.process;r+=t?-i:i,r||(n&&(o=n),x.lib(h,e,a,t),t||(r=1)),c[e]=r}},w={focus:2,blur:2,mouseenter:2,mouseleave:2},b=$.now();return x.lib=function(e,t,n,r,a,o){var s=w[t];if(a){n.$n||(n.$n=b--);var c="_$"+n.$n;a[c]||(a[c]=function(){n.apply(a,arguments)}),n=a[c]}o||2!=s?$(e)[r?"off":l](t,n):$(e)[(r?"un":i)+"delegate"]("[mx-"+t+"]",t,n)},x}),o("magix/event",["magix/magix"],function(e){var t=e.tryCall,n={fire:function(e,n,i,a){var o=r+e,s=this,c=s[o];if(c){n||(n={}),n.type||(n.type=e);for(var u,f,h=c.length,m=h-1;h--;)u=a?h:m-h,f=c[u],(f.d||f.r)&&(c.splice(u,1),m--),f.d||t(f.f,n,s);i=i||0>m}i&&delete s[o]},on:function(e,t,n){var i=r+e,a=this[i]||(this[i]=[]),o={f:t},s=0|n;s!==n?(o.r=n,a.push(o)):a.splice(s,0,o)},rely:function(e,n,r,i,a){var o=this;o.on(e,n,a),r.on(i,function(){o.off(e,n)},t)},off:function(e,t){var n=r+e,i=this[n];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,n){this.on(e,n,t)}};return e.mix(e.local,n),n}),o("magix/vframe",["magix/magix","magix/event","magix/view"],function(t,r,o){var c,u,f,h,m,v,d,l,g,p,$,y=t.tryCall,x=[],w=t.mix,b=t.config(),C="mx-vframe",M=t.has,P="querySelectorAll",_="alter",k="created",q=function(e){return"object"==typeof e?e:n.getElementById(e)},I=function(e,t,r){return t=q(e),t&&(r=f?n[P]("#"+s(t)+m):t.getElementsByTagName(c)),r||x},V=function(e,t,n){if(e=q(e),t=q(t),e&&t)if(e!==t)try{n=v?t.contains(e):16&t.compareDocumentPosition(e)}catch(r){n=0}else n=1;return n},A=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1,t.rM={},t.owner=$,$.add(e,t)};return A.root=function(t,r,i){if(!d){c=b.tagName,u=b["!tnc"],f=u&&n[P],m=" "+c+"["+C+"=true]",h=u&&!f;var a=n.body;v=a.contains,g=r,p=i,$=t;var o=b.rootId,s=q(o);s||(s=n.createElement(c),s.id=o,a.appendChild(s),s=e),d=new A(o)}return d},w(w(A.prototype,r),{mountView:function(e,n,r){var i=this,a=q(i.id);if(i._a||(i._a=1,i._t=a.innerHTML),i.unmountView(r),i._d=0,e){var s=t.toObject(e),c=s.path,u=++i.sign;t.use(c,function(e){if(u==i.sign){o.prepare(e);var t=new e({owner:i,id:i.id,$:q,$c:V,path:c,vom:$,location:g});i.view=t;var r=function(e){i.mountZoneVframes(e.id)};t.on("interact",function(e){e.tmpl||(a.innerHTML=i._t,r(q)),t.on("primed",function(){i.viewPrimed=1,i.fire("viewMounted")}),t.on("rendered",r),t.on("prerender",function(e){i.unmountZoneVframes(e.id,e.keep,1)||i.cAlter()})},0),t.load(w(s.params,n),p)}})}},unmountView:function(e){var t=this,n=t.view;if(n){l||(l={}),t._d=1,t.unmountZoneVframes(0,e,1),t.cAlter(l),t.view=0,n.oust();var r=q(t.id);r&&t._a&&!e&&(r.innerHTML=t._t),t.viewInited=0,t.viewPrimed&&(t.viewPrimed=0,t.fire("viewUnmounted")),l=0}t.sign++},mountVframe:function(e,t,n,r,i){var a=this;a.fcc&&!r&&a.cAlter();var o=$.get(e);return o||(o=new A(e),o.pId=a.id,M(a.cM,e)||a.cC++,a.cM[e]=1),o._p=r,o.mountView(t,n,i),o},mountZoneVframes:function(e,t,n,r){var i=this;e=e||i.id,i.unmountZoneVframes(e,r,1);var a=I(e),o=a.length,c={};if(o)for(var u,f,m,v,d=0;o>d;d++)if(u=a[d],f=s(u),!M(c,f)&&(m=u.getAttribute("mx-view"),v=h?u.getAttribute(C):1,v||m)){i.mountVframe(f,m,t,n,r);for(var l,g=I(u),p=0,$=g.length;$>p;p++)l=g[p],c[s(l)]=1}i.cCreated()},unmountVframe:function(e,t,n){var r=this;e=e||r.id;var i=$.get(e);if(i){var a=i.fcc;i.unmountView(t),$.remove(e,a);var o=$.get(i.pId);o&&M(o.cM,e)&&(delete o.cM[e],o.cC--,n||r._d||o.cCreated())}},unmountZoneVframes:function(e,t,n){var r,i,a=this,o=a.cM;for(i in o)(!e||V(i,e))&&a.unmountVframe(i,t,r=1);return n||a._d||a.cCreated(),r},invokeView:function(e,t){var n,r=this;if(r.viewInited){var i=r.view,a=i&&i[e];a&&(n=y(a,t||x,i))}return n},cCreated:function(e){var t=this;if(t.cC==t.rC){var n=t.view;n&&!t.fcc&&(t.fcc=1,t.fca=0,n.fire(k,e),t.fire(k,e));var r=t.id,i=$.get(t.pId);i&&!M(i.rM,r)&&(i.rM[r]=i.cM[r],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),!t.fca&&t.fcc){t.fcc=0;var n=t.view,r=t.id;n&&(t.fca=1,n.fire(_,e),t.fire(_,e));var i=$.get(t.pId);i&&M(i.rM,r)&&(i.rC--,delete i.rM[r],t._p||i.cAlter(e))}},locChged:function(){var e=this,n=e.view;if(e.viewInited&&n&&n.sign>0){var r=n.olChg(p),o={location:g,changed:p,prevent:function(){this.cs=x},to:function(e){e=(e+i).split(a),this.cs=e||x}};r&&n.render(o);for(var s,c=o.cs||t.keys(e.cM),u=0,f=c.length;f>u;u++)s=$.get(c[u]),s&&s.locChged()}}}),A}),o("magix/view",["magix/magix","magix/event","magix/body","magix/router"],function(o,s,c,u){var f=o.tryCall,h=o.has,m=[],v=o.noop,d=o.mix,l=0,g="destroy",p=function(e,t){return function(){t=this,t.sign>0&&(t.sign++,t.fire("rendercall"),x(t,1,1),f(e,arguments,t))}},y=function(e,t){t=e&&e[g],t&&f(t,m,e)},x=function(e,t,n){var r,i,a=e.$res;for(r in a)i=a[r],(!t||i.mr)&&e.destroyManaged(r,n)},w=o.cache(40),b=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,C=/(\w+):(['"]?)([^,]+)\2/g,M=/([$\w]+)<([\w,]+)>/,P=function(e){var t=this;d(t,e),t.$ol={ks:[]},t.$ns={},t.$res={},t.sign=1,t.addNode(t.id),f(P.$,e,t)},_=P.prototype,k={$win:t,$doc:n};P.$=[],P.prepare=function(e){if(!e[r]){e[r]=1;var t,n,i,o,s,c,u=e.prototype,f={},h=[];for(var m in u)if(t=u[m],n=m.match(M))for(i=n[1],o=n[2],o=o.split(a),s=o.length-1;s>-1;s--)n=o[s],c=k[i],c?h.push({n:i,t:n,h:c,f:t}):(f[n]=1,u[i+r+n]=t);else"render"==m&&t!=v&&(u[m]=p(t));u.$evts=f,u.$sevts=h}},P.mixin=function(e,t){t&&P.$.push(t),d(_,e)},d(d(_,s),{render:v,wrapEvent:c.wrap,init:v,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,n=arguments,r=function(r){t&&(e.tmpl=c.wrap(e.id,r)),e.dEvts(),e.fire("interact",{tmpl:t},1),f(e.init,n,e),e.fire("inited",0,1),e.owner.viewInited=1,e.render();var i=!t&&!e.rendered;i&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(r)):r()},beginUpdate:function(e,t){var n=this;n.sign>0&&n.rendered&&(n.fire("prerender",{id:e,keep:t}),x(n,0,1))},endUpdate:function(e){var t=this;t.sign>0&&(t.rendered||(t.fire("primed",0,1),t.rendered=1),t.fire("rendered",{id:e}))},wrapAsync:function(e){var t=this,n=t.sign;return function(){n>0&&n==t.sign&&e&&e.apply(this,arguments)}},setHTML:function(e,t,n){var r,i=this;i.beginUpdate(e,n),i.sign>0&&(r=i.$(e),r&&(r.innerHTML=t)),i.endUpdate(e)},observeLocation:function(e){var t,n=this;t=n.$ol,t.f=1;var r=t.ks;o._o(e)&&(t.pn=e.path,e=e.params),e&&(t.ks=r.concat((e+i).split(a)))},olChg:function(e){var t,n=this,r=n.$ol;return r.f&&(r.pn&&(t=e.path),t||(t=e.isParam(r.ks))),t},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire(g,0,1,1),x(e),e.dEvts(1)),e.sign--},parentView:function(){var t=this,n=t.vom,r=t.owner,i=n.get(r.pId),a=e;return i&&i.viewInited&&(a=i.view),a},pEvt:function(e,t,n){var i=this;if(i.sign>0){var a=w.get(e);a||(a=e.match(b),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(C,function(e,t,n,r){a.p[t]=r}),w.set(e,a));var o=a.n+r+t,s=i[o];if(s){var c=n[a.f];c&&c.call(n),n.params=a.p,f(s,n,i)}}},dEvts:function(e){var t=this,n=t.$evts,r=t.vom;for(var i in n)c.act(i,e,r);for(n=t.$sevts,i=n.length;i-->0;)r=n[i],c.lib(r.h,r.t,r.f,e,t,1)},addNode:function(e){this.$ns[e]=1},removeNode:function(e){delete this.$ns[e]},inside:function(e){var t,n,r=this;for(n in r.$ns)if(t=r.$c(e,n))break;return t},navigate:u.navigate,manage:function(e,t,n){var i=this,a=arguments,o=1,s=i.$res;1==a.length?(t=e,e="res_"+l++,o=0):i.destroyManaged(e);var c={hk:o,res:t,ol:n,mr:t&&t[r]==r};return s[e]=c,t},getManaged:function(t,n){var r=this,i=r.$res,a=e;if(h(i,t)){var o=i[t];a=o.res,n&&delete i[t]}return a},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e,t){var n,r=this,i=r.$res,a=i[e];return!a||t&&a.ol||(n=a.res,y(n),a.hk&&t||delete i[e]),n}});var q={},I="?t="+Math.random(),V={},A={};return _.fetchTmpl=function(e,t){var n=this,r="tmpl"in n;if(r)t(n.tmpl);else if(h(V,e))t(V[e]);else{var i=e.indexOf("/"),a=e.substring(0,i);q[a]||(q[a]=require.s.contexts._.config.paths[a]);var o=q[a]+e.substring(i+1)+".html",s=A[o],c=function(n){t(V[e]=n)};s?s.push(c):(s=A[o]=[c],$.ajax({url:o+I,success:function(e){f(s,e),delete A[o]},error:function(e,t){f(s,t),delete A[o]}}))}},P.extend=function(e,t,n){var r=this,i=function(e){r.call(this,e),n&&n.call(this,e)};return i.extend=r.extend,o.extend(i,r,e,t)},P}),o("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e,t,n){var r=t.has,i=t.mix,a={},o={},s={},c=t.mix({all:function(){return a},add:function(e,t){r(a,e)||(a[e]=t,c.fire("add",{vframe:t}))},get:function(e){return a[e]},remove:function(e,t){var n=a[e];n&&(delete a[e],c.fire("remove",{vframe:n,fcc:t}))},loc:function(t){var n,r=t.loc;if(r?n=1:r=t.location,i(o,r),!n){i(s,t.changed);var a=e.root(c,o,s);s.view?a.mountView(r.view):a.locChged()}}},n);return c}),o("magix/mmanager",["magix/magix","magix/event"],function(n,o){var s=n.has,u=n.tryCall,f=n._a,h=n._f,m=n._o,v=1,d=2,l=4,g="postParams",p="urlParams",$=Date.now||function(){return+new Date},y=t.JSON,x=n.mix,w=12e5,b=function(e,t,n,i){if(h(e))t&&(n=b(u(e)));else if(y)n=y.stringify(e);else if(m(e)||f(e)){n=[];for(i in e)s(e,i)&&n.push(i,r,b(e[i]))}else n=e;return n},C=function(e,t,n){for(var i,a=[t.name,b(n)],o={},s=e.length-1;s>-1;s--)i=e[s],o[i]||a.push(o[i]=b(t[i],1),b(n[i],1));return a.join(r)},M=function(e){var t=e.cache;return t&&(t=t===!0?w:0|t),t},P=function(e){throw Error(e)},_=function(e,t){var r=this;r.$mClass=e,r.$mCache=n.cache(),r.$mCacheKeys={},r.$mMetas={},r.$sKeys=(t&&(i+t).split(a)||[]).concat(g,p),r.id="mm"+c++,u(_.$,arguments,r)},k=[].slice,q=function(e,t,n,r){return function(i){return e.apply(t,[n,r,i])}},I=function(e,t){var n=t.b,r=t.a,i=r[n];if(i){var a=i.q;delete r[n],u(a,e,i.e)}},V=function(t,n,r){var i,a=this,o=n.a,s=n.c,c=n.d,f=n.g,h=n.i,m=n.j,g=n.k,p=n.l,y=n.m,x=n.n,w=n.o;n.b++,delete s[a.id];var b=a.$mm,C=b.key;if(c[t]=a,r)n.e=1,i=1,n.f=r,f.msg=r,f[t]=r,m.fire("fail",{model:a,msg:r});else{if(!C||C&&!h.has(C)){C&&h.set(C,a),b.time=$();var M=b.done;M&&u(M,a),m.fire("done",{model:a})}a.fromCache=b.used>0,b.used++}if(!o.$oust){if(g==v){var P=p?y[t]:y;P&&(x[t]=u(P,[i?f:e,a,f],o))}else if(g==d){w[t]={m:a,e:i,s:r};for(var _,k,q=w.i||0;_=w[q];q++)k=p?y[q]:y,_.e&&(f.msg=_.s,f[q]=_.s),x[q]=u(k,[_.e?f:e,_.m,f].concat(x),o);w.i=q}n.b==n.h&&(n.e||(f=e),x.unshift(f),g==l&&(c.unshift(f),x[1]=u(y,c,o)),o.$ntId=setTimeout(function(){o.doNext(x)},30))}},A=function(e,t){return function(n,r){var i=k.call(arguments,1);return this.send(n,i.length>1?i:r,e,t)}};x(_,{create:function(e,t){return new _(e,t)},mixin:function(e,t){t&&_.$.push(t),x(_.prototype,e)},$:[]});var O=function(e){var t=this;t.$host=e,t.$reqs={},t[r]=r,t.sign=1,t.id="mr"+c++,t.$queue=[]};return x(O.prototype,{send:function(e,t,n,r){var i=this;if(i.$busy)return i.next(function(){this.send(e,t,n,r)});i.$busy=1,i.sign++;var a=i.$host,o=a.$mCache,c=a.$mCacheKeys,u=i.$reqs;f(e)||(e=[e]);var h=e.length,m=[],v=f(t);v&&(m=Array(t.length));for(var d,l={a:i,b:0,c:i.$reqs,d:Array(h),g:{},h:h,i:o,j:a,k:n,l:v,m:t,n:m,o:[]},g=0;e.length>g;g++)if(d=e[g]){var p=a.getModel(d,r),$=p.entity,y=$.$mm.key,x=q(V,$,g,l);x.id=i.id,y&&s(c,y)?c[y].q.push(x):p.update?(u[$.id]=$,y&&(c[y]={q:[x],e:$},x=I),$.request(x,{a:c,b:y})):x()}else P("empty model");return i},fetchAll:function(e,t){return this.send(e,t,l)},saveAll:function(e,t){return this.send(e,t,l,1)},fetchOrder:A(d),saveOrder:A(d,1),saveOne:A(v,1),fetchOne:A(v),stop:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,n=e.$reqs,r=t.$mCacheKeys;for(var i in n){var a=n[i],o=a.$mm.key;if(o&&s(r,o)){for(var c,f=r[o],h=f.q,m=[],v=[],d=0;h.length>d;d++)c=h[d],c.id!=e.id?m.push(c):v.push(c);m.length?(u(v,"abort",f.e),f.q=m):a.abort()}else a.abort()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;return t.$queue.push(e),t.$busy||t.doNext(t.$args),t},doNext:function(e){var t=this;t.$busy=0,t.$args=e;var n,r,i=t.$queue,a=++t.sign;i&&(n=i.shift(),n&&(r=u(n,e,t),a==t.sign&&t.doNext(r===i.$?e:[null,r])))},destroy:function(){var e=this;e.$oust=1,e.stop()}}),_.mixin(o),_.mixin({registerModels:function(e){var t=this,n=t.$mMetas;f(e)||(e=[e]);for(var r,i,a,o=0;e.length>o;o++)r=e[o],r&&(i=r.name,i?n[i]&&P("already exist:"+i):P("miss name"),a=M(r),a&&(r.cache=a),n[i]=r)},registerMethods:function(e){x(this,e)},createModel:function(e){var t,n=this,r=n.getModelMeta(e),i=M(e)||r.cache,a=new n.$mClass;return a.set(r),a.$mm=t={used:0,done:r.done},i&&(t.key=C(n.$sKeys,r,e)),e.name&&a.set(e),a.setUrlParams(r[p]),a.setPostParams(r[g]),a.setUrlParams(e[p]),a.setPostParams(e[g]),n.fire("inited",{model:a}),a},getModelMeta:function(e){var t=this,n=t.$mMetas,r=e.name||e,i=n[r];return i||P("Unfound:"+r),i},getModel:function(e,t){var n,r,i=this;return t||(n=i.getCachedModel(e)),n||(r=1,n=i.createModel(e)),{entity:n,update:r}},createMRequest:function(e){return e.manage(new O(this))},clearCacheByKey:function(e){var t=this,n=t.$mCache;n.del(e)},clearCacheByName:function(e){for(var t=this,n=t.$mCache,r=n.list(),i=0;r.length>i;i++){var a=r[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&n.del(s.key)}}},getCachedModel:function(t){var n,r=this,i=r.$mCache,a=e,o=r.getModelMeta(t),s=M(t)||o.cache;if(s&&(n=C(r.$sKeys,o,t)),n){var c=r.$mCacheKeys,u=c[n];u?a=u.e:(a=i.get(n),a&&s>0&&$()-a.$mm.time>s&&(r.clearCacheByKey(n),a=0))}return a}}),_}),o("magix/model",["magix/magix"],function(e){var t=e.has,n=e._o,a=e.toString,o=function(e){this.set(e),this.id="m"+c++},s=function(e,t){return function(n,r){this.setParams(n,r,e,t)}},u=/^\?|=(?=&|$)/g,f="GET",h="POST";return e.mix(o.prototype,{sync:e.noop,getPostParams:function(){return this.getParams(h)},getUrlParams:function(){return this.getParams(f)},getParams:function(t){var n=e.toUrl(i,this[r+(t||f)]);return n=n.replace(u,i)},setUrlParamsIf:s(f,1),setPostParamsIf:s(h,1),setParams:function(a,o,s,c){var u,f,h,m=this,v=r+s;m[v]||(m[v]={}),h=m[v],e._f(a)&&(a=e.tryCall(a)),a&&!n(a)&&(u={},u[a]=~(a+i).indexOf("=")?i:o,a=u);for(f in a)c&&t(h,f)||(h[f]=a[f])},setPostParams:s(h),setUrlParams:s(f),get:function(e,t,n){var r=this,o=arguments.length,s=2==o,c=r.$attrs;if(o){for(var u=(e+i).split(".");c&&u[0];)c=c[u.shift()];u[0]&&(c=n)}return s&&a.call(t)!=a.call(c)&&(c=t),c},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),n(e))for(var i in e)r.$attrs[i]=e[i];else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;if(!r.$abt){var i=function(i,a){r.$abt||(n(a)||(a={data:a}),r.set(a),e(i,t))};r.$trans=r.sync(r.$temp=i)}},abort:function(){var e=this,t=e.$trans,n=e.$temp;n&&(n("abort"),e.$temp=0),e.$abt=1,t&&t.abort&&t.abort(),e.$trans=0},isAborted:function(){return this.$abt}}),o.extend=function(t,n,r){var i=this,a=function(){i.call(this),r&&r.call(this)};return e.extend(a,i,t,n)},o}),n.createElement("vframe")})(null,this,document,"","",",",define);