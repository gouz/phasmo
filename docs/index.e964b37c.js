!function(){function e(e){return e?(e.nodeName||"").toLowerCase():null}function t(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function n(e){return e instanceof t(e).Element||e instanceof Element}function r(e){return e instanceof t(e).HTMLElement||e instanceof HTMLElement}function o(e){return"undefined"!=typeof ShadowRoot&&(e instanceof t(e).ShadowRoot||e instanceof ShadowRoot)}var i={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var n=t.state;Object.keys(n.elements).forEach((function(t){var o=n.styles[t]||{},i=n.attributes[t]||{},a=n.elements[t];r(a)&&e(a)&&(Object.assign(a.style,o),Object.keys(i).forEach((function(e){var t=i[e];!1===t?a.removeAttribute(e):a.setAttribute(e,!0===t?"":t)})))}))},effect:function(t){var n=t.state,o={popper:{position:n.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(n.elements.popper.style,o.popper),n.styles=o,n.elements.arrow&&Object.assign(n.elements.arrow.style,o.arrow),function(){Object.keys(n.elements).forEach((function(t){var i=n.elements[t],a=n.attributes[t]||{},s=Object.keys(n.styles.hasOwnProperty(t)?n.styles[t]:o[t]).reduce((function(e,t){return e[t]="",e}),{});r(i)&&e(i)&&(Object.assign(i.style,s),Object.keys(a).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]};function a(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function s(e){var n=t(e);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function c(e){return((n(e)?e.ownerDocument:e.document)||window.document).documentElement}function u(e){return a(c(e)).left+s(e).scrollLeft}function f(e){return t(e).getComputedStyle(e)}function p(e){var t=f(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function d(n,o,i){void 0===i&&(i=!1);var f,d,l=c(o),m=a(n),v=r(o),h={scrollLeft:0,scrollTop:0},g={x:0,y:0};return(v||!v&&!i)&&(("body"!==e(o)||p(l))&&(h=(f=o)!==t(f)&&r(f)?{scrollLeft:(d=f).scrollLeft,scrollTop:d.scrollTop}:s(f)),r(o)?((g=a(o)).x+=o.clientLeft,g.y+=o.clientTop):l&&(g.x=u(l))),{x:m.left+h.scrollLeft-g.x,y:m.top+h.scrollTop-g.y,width:m.width,height:m.height}}function l(e){var t=a(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function m(t){return"html"===e(t)?t:t.assignedSlot||t.parentNode||(o(t)?t.host:null)||c(t)}function v(t){return["html","body","#document"].indexOf(e(t))>=0?t.ownerDocument.body:r(t)&&p(t)?t:v(m(t))}function h(e,n){var r;void 0===n&&(n=[]);var o=v(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=t(o),s=i?[a].concat(a.visualViewport||[],p(o)?o:[]):o,c=n.concat(s);return i?c:c.concat(h(m(s)))}function g(t){return["table","td","th"].indexOf(e(t))>=0}function y(e){return r(e)&&"fixed"!==f(e).position?e.offsetParent:null}function b(n){for(var o=t(n),i=y(n);i&&g(i)&&"static"===f(i).position;)i=y(i);return i&&("html"===e(i)||"body"===e(i)&&"static"===f(i).position)?o:i||function(t){var n=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&r(t)&&"fixed"===f(t).position)return null;for(var o=m(t);r(o)&&["html","body"].indexOf(e(o))<0;){var i=f(o);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||n&&"filter"===i.willChange||n&&i.filter&&"none"!==i.filter)return o;o=o.parentNode}return null}(n)||o}var w="top",x="bottom",O="right",E="left",A="auto",T=[w,x,O,E],L="start",j="end",D="viewport",k="popper",S=T.reduce((function(e,t){return e.concat([t+"-"+L,t+"-"+j])}),[]),C=[].concat(T,[A]).reduce((function(e,t){return e.concat([t,t+"-"+L,t+"-"+j])}),[]),M=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function H(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var V={placement:"bottom",modifiers:[],strategy:"absolute"};function q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function P(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,o=void 0===r?[]:r,i=t.defaultOptions,a=void 0===i?V:i;return function(e,t,r){void 0===r&&(r=a);var i,s,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},V,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],f=!1,p={state:c,setOptions:function(r){m(),c.options=Object.assign({},a,c.options,r),c.scrollParents={reference:n(e)?h(e):e.contextElement?h(e.contextElement):[],popper:h(t)};var i=function(e){var t=H(e);return M.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,c.options.modifiers)));return c.orderedModifiers=i.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:c,name:t,instance:p,options:r}),a=function(){};u.push(i||a)}})),p.update()},forceUpdate:function(){if(!f){var e=c.elements,t=e.reference,n=e.popper;if(q(t,n)){c.rects={reference:d(t,b(n),"fixed"===c.options.strategy),popper:l(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var o=c.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,u=o.name;"function"==typeof i&&(c=i({state:c,options:s,name:u,instance:p})||c)}else c.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){p.forceUpdate(),e(c)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){m(),f=!0}};if(!q(e,t))return p;function m(){u.forEach((function(e){return e()})),u=[]}return p.setOptions(r).then((function(e){!f&&r.onFirstUpdate&&r.onFirstUpdate(e)})),p}}var W={passive:!0};var B={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var n=e.state,r=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,c=void 0===s||s,u=t(n.elements.popper),f=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&f.forEach((function(e){e.addEventListener("scroll",r.update,W)})),c&&u.addEventListener("resize",r.update,W),function(){a&&f.forEach((function(e){e.removeEventListener("scroll",r.update,W)})),c&&u.removeEventListener("resize",r.update,W)}},data:{}};function R(e){return e.split("-")[0]}function I(e){return e.split("-")[1]}function N(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function U(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?R(o):null,a=o?I(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case w:t={x:s,y:n.y-r.height};break;case x:t={x:s,y:n.y+n.height};break;case O:t={x:n.x+n.width,y:c};break;case E:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=i?N(i):null;if(null!=u){var f="y"===u?"height":"width";switch(a){case L:t[u]=t[u]-(n[f]/2-r[f]/2);break;case j:t[u]=t[u]+(n[f]/2-r[f]/2)}}return t}var _={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=U({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},F=Math.max,z=Math.min,$=Math.round,X={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Y(e){var n,r=e.popper,o=e.popperRect,i=e.placement,a=e.offsets,s=e.position,u=e.gpuAcceleration,p=e.adaptive,d=e.roundOffsets,l=!0===d?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:$($(t*r)/r)||0,y:$($(n*r)/r)||0}}(a):"function"==typeof d?d(a):a,m=l.x,v=void 0===m?0:m,h=l.y,g=void 0===h?0:h,y=a.hasOwnProperty("x"),A=a.hasOwnProperty("y"),T=E,L=w,j=window;if(p){var D=b(r),k="clientHeight",S="clientWidth";D===t(r)&&"static"!==f(D=c(r)).position&&(k="scrollHeight",S="scrollWidth"),i===w&&(L=x,g-=D[k]-o.height,g*=u?1:-1),i===E&&(T=O,v-=D[S]-o.width,v*=u?1:-1)}var C,M=Object.assign({position:s},p&&X);return u?Object.assign({},M,((C={})[L]=A?"0":"",C[T]=y?"0":"",C.transform=(j.devicePixelRatio||1)<2?"translate("+v+"px, "+g+"px)":"translate3d("+v+"px, "+g+"px, 0)",C)):Object.assign({},M,((n={})[L]=A?g+"px":"",n[T]=y?v+"px":"",n.transform="",n))}var J={left:"right",right:"left",bottom:"top",top:"bottom"};function G(e){return e.replace(/left|right|bottom|top/g,(function(e){return J[e]}))}var K={start:"end",end:"start"};function Q(e){return e.replace(/start|end/g,(function(e){return K[e]}))}function Z(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&o(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ee(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function te(e,n){return n===D?ee(function(e){var n=t(e),r=c(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;return o&&(i=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,f=o.offsetTop)),{width:i,height:a,x:s+u(e),y:f}}(e)):r(n)?function(e){var t=a(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(n):ee(function(e){var t,n=c(e),r=s(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=F(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=F(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),p=-r.scrollLeft+u(e),d=-r.scrollTop;return"rtl"===f(o||n).direction&&(p+=F(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:p,y:d}}(c(e)))}function ne(t,o,i){var a="clippingParents"===o?function(t){var o=h(m(t)),i=["absolute","fixed"].indexOf(f(t).position)>=0&&r(t)?b(t):t;return n(i)?o.filter((function(t){return n(t)&&Z(t,i)&&"body"!==e(t)})):[]}(t):[].concat(o),s=[].concat(a,[i]),c=s[0],u=s.reduce((function(e,n){var r=te(t,n);return e.top=F(r.top,e.top),e.right=z(r.right,e.right),e.bottom=z(r.bottom,e.bottom),e.left=F(r.left,e.left),e}),te(t,c));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function re(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function oe(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ie(e,t){void 0===t&&(t={});var r=t,o=r.placement,i=void 0===o?e.placement:o,s=r.boundary,u=void 0===s?"clippingParents":s,f=r.rootBoundary,p=void 0===f?D:f,d=r.elementContext,l=void 0===d?k:d,m=r.altBoundary,v=void 0!==m&&m,h=r.padding,g=void 0===h?0:h,y=re("number"!=typeof g?g:oe(g,T)),b=l===k?"reference":k,E=e.elements.reference,A=e.rects.popper,L=e.elements[v?b:l],j=ne(n(L)?L:L.contextElement||c(e.elements.popper),u,p),S=a(E),C=U({reference:S,element:A,strategy:"absolute",placement:i}),M=ee(Object.assign({},A,C)),H=l===k?M:S,V={top:j.top-H.top+y.top,bottom:H.bottom-j.bottom+y.bottom,left:j.left-H.left+y.left,right:H.right-j.right+y.right},q=e.modifiersData.offset;if(l===k&&q){var P=q[i];Object.keys(V).forEach((function(e){var t=[O,x].indexOf(e)>=0?1:-1,n=[w,x].indexOf(e)>=0?"y":"x";V[e]+=P[n]*t}))}return V}function ae(e,t,n){return F(e,z(t,n))}function se(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ce(e){return[w,O,x,E].some((function(t){return e[t]>=0}))}var ue=P({defaultModifiers:[B,_,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:R(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Y(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Y(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},i,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=C.reduce((function(e,n){return e[n]=function(e,t,n){var r=R(e),o=[E,w].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[E,O].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,f=n.boundary,p=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,m=void 0===l||l,v=n.allowedAutoPlacements,h=t.options.placement,g=R(h),y=c||(g===h||!m?[G(h)]:function(e){if(R(e)===A)return[];var t=G(e);return[Q(e),t,Q(t)]}(h)),b=[h].concat(y).reduce((function(e,n){return e.concat(R(n)===A?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?C:c,f=I(r),p=f?s?S:S.filter((function(e){return I(e)===f})):T,d=p.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=p);var l=d.reduce((function(t,n){return t[n]=ie(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[R(n)],t}),{});return Object.keys(l).sort((function(e,t){return l[e]-l[t]}))}(t,{placement:n,boundary:f,rootBoundary:p,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),j=t.rects.reference,D=t.rects.popper,k=new Map,M=!0,H=b[0],V=0;V<b.length;V++){var q=b[V],P=R(q),W=I(q)===L,B=[w,x].indexOf(P)>=0,N=B?"width":"height",U=ie(t,{placement:q,boundary:f,rootBoundary:p,altBoundary:d,padding:u}),_=B?W?O:E:W?x:w;j[N]>D[N]&&(_=G(_));var F=G(_),z=[];if(i&&z.push(U[P]<=0),s&&z.push(U[_]<=0,U[F]<=0),z.every((function(e){return e}))){H=q,M=!1;break}k.set(q,z)}if(M)for(var $=function(e){var t=b.find((function(t){var n=k.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return H=t,"break"},X=m?3:1;X>0;X--){if("break"===$(X))break}t.placement!==H&&(t.modifiersData[r]._skip=!0,t.placement=H,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,f=n.altBoundary,p=n.padding,d=n.tether,m=void 0===d||d,v=n.tetherOffset,h=void 0===v?0:v,g=ie(t,{boundary:c,rootBoundary:u,padding:p,altBoundary:f}),y=R(t.placement),A=I(t.placement),T=!A,j=N(y),D="x"===j?"y":"x",k=t.modifiersData.popperOffsets,S=t.rects.reference,C=t.rects.popper,M="function"==typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,H={x:0,y:0};if(k){if(i||s){var V="y"===j?w:E,q="y"===j?x:O,P="y"===j?"height":"width",W=k[j],B=k[j]+g[V],U=k[j]-g[q],_=m?-C[P]/2:0,$=A===L?S[P]:C[P],X=A===L?-C[P]:-S[P],Y=t.elements.arrow,J=m&&Y?l(Y):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=G[V],Q=G[q],Z=ae(0,S[P],J[P]),ee=T?S[P]/2-_-Z-K-M:$-Z-K-M,te=T?-S[P]/2+_+Z+Q+M:X+Z+Q+M,ne=t.elements.arrow&&b(t.elements.arrow),re=ne?"y"===j?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][j]:0,se=k[j]+ee-oe-re,ce=k[j]+te-oe;if(i){var ue=ae(m?z(B,se):B,W,m?F(U,ce):U);k[j]=ue,H[j]=ue-W}if(s){var fe="x"===j?w:E,pe="x"===j?x:O,de=k[D],le=de+g[fe],me=de-g[pe],ve=ae(m?z(le,se):le,de,m?F(me,ce):me);k[D]=ve,H[D]=ve-de}}t.modifiersData[r]=H}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=R(n.placement),c=N(s),u=[E,O].indexOf(s)>=0?"height":"width";if(i&&a){var f=function(e,t){return re("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:oe(e,T))}(o.padding,n),p=l(i),d="y"===c?w:E,m="y"===c?x:O,v=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],h=a[c]-n.rects.reference[c],g=b(i),y=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,A=v/2-h/2,L=f[d],j=y-p[u]-f[m],D=y/2-p[u]/2+A,k=ae(L,D,j),S=c;n.modifiersData[r]=((t={})[S]=k,t.centerOffset=k-D,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&Z(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ie(t,{elementContext:"reference"}),s=ie(t,{altBoundary:!0}),c=se(a,r),u=se(s,o,i),f=ce(c),p=ce(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":p})}}]}),fe="tippy-content",pe="tippy-backdrop",de="tippy-arrow",le="tippy-svg-arrow",me={passive:!0,capture:!0};function ve(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function he(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function ge(e,t){return"function"==typeof e?e.apply(void 0,t):e}function ye(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function be(e){return[].concat(e)}function we(e,t){-1===e.indexOf(t)&&e.push(t)}function xe(e){return e.split("-")[0]}function Oe(e){return[].slice.call(e)}function Ee(){return document.createElement("div")}function Ae(e){return["Element","Fragment"].some((function(t){return he(e,t)}))}function Te(e){return he(e,"MouseEvent")}function Le(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function je(e){return Ae(e)?[e]:function(e){return he(e,"NodeList")}(e)?Oe(e):Array.isArray(e)?e:Oe(document.querySelectorAll(e))}function De(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function ke(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function Se(e){var t,n=be(e)[0];return(null==n||null==(t=n.ownerDocument)?void 0:t.body)?n.ownerDocument:document}function Ce(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}var Me={isTouch:!1},He=0;function Ve(){Me.isTouch||(Me.isTouch=!0,window.performance&&document.addEventListener("mousemove",qe))}function qe(){var e=performance.now();e-He<20&&(Me.isTouch=!1,document.removeEventListener("mousemove",qe)),He=e}function Pe(){var e=document.activeElement;if(Le(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var We="undefined"!=typeof window&&"undefined"!=typeof document?navigator.userAgent:"",Be=/MSIE |Trident\//.test(We);var Re={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Ie=Object.assign({appendTo:function(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Re,{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),Ne=Object.keys(Ie);function Ue(e){var t=(e.plugins||[]).reduce((function(t,n){var r=n.name,o=n.defaultValue;return r&&(t[r]=void 0!==e[r]?e[r]:o),t}),{});return Object.assign({},e,{},t)}function _e(e,t){var n=Object.assign({},t,{content:ge(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(Ue(Object.assign({},Ie,{plugins:t}))):Ne).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(e){t[n]=r}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},Ie.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function Fe(e,t){e.innerHTML=t}function ze(e){var t=Ee();return!0===e?t.className=de:(t.className=le,Ae(e)?t.appendChild(e):Fe(t,e)),t}function $e(e,t){Ae(t.content)?(Fe(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?Fe(e,t.content):e.textContent=t.content)}function Xe(e){var t=e.firstElementChild,n=Oe(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(fe)})),arrow:n.find((function(e){return e.classList.contains(de)||e.classList.contains(le)})),backdrop:n.find((function(e){return e.classList.contains(pe)}))}}function Ye(e){var t=Ee(),n=Ee();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=Ee();function o(n,r){var o=Xe(t),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"==typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||$e(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(ze(r.arrow))):i.appendChild(ze(r.arrow)):s&&i.removeChild(s)}return r.className=fe,r.setAttribute("data-state","hidden"),$e(r,e.props),t.appendChild(n),n.appendChild(r),o(e.props,e.props),{popper:t,onUpdate:o}}Ye.$$tippy=!0;var Je=1,Ge=[],Ke=[];function Qe(e,t){var n,r,o,i,a,s,c,u,f,p=_e(e,Object.assign({},Ie,{},Ue((n=t,Object.keys(n).reduce((function(e,t){return void 0!==n[t]&&(e[t]=n[t]),e}),{}))))),d=!1,l=!1,m=!1,v=!1,h=[],g=ye(Y,p.interactiveDebounce),y=Je++,b=(f=p.plugins).filter((function(e,t){return f.indexOf(e)===t})),w={id:y,reference:e,popper:Ee(),popperInstance:null,props:p,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:b,clearDelayTimeouts:function(){clearTimeout(r),clearTimeout(o),cancelAnimationFrame(i)},setProps:function(t){0;if(w.state.isDestroyed)return;V("onBeforeUpdate",[w,t]),$();var n=w.props,r=_e(e,Object.assign({},w.props,{},t,{ignoreAttributes:!0}));w.props=r,z(),n.interactiveDebounce!==r.interactiveDebounce&&(W(),g=ye(Y,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?be(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded");P(),H(),E&&E(n,r);w.popperInstance&&(Q(),ee().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));V("onAfterUpdate",[w,t])},setContent:function(e){w.setProps({content:e})},show:function(){0;var e=w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=Me.isTouch&&!w.props.touch,o=ve(w.props.duration,0,Ie.duration);if(e||t||n||r)return;if(k().hasAttribute("disabled"))return;if(V("onShow",[w],!1),!1===w.props.onShow(w))return;w.state.isVisible=!0,D()&&(O.style.visibility="visible");H(),N(),w.state.isMounted||(O.style.transition="none");if(D()){var i=C(),a=i.box,s=i.content;De([a,s],0)}c=function(){var e;if(w.state.isVisible&&!v){if(v=!0,O.offsetHeight,O.style.transition=w.props.moveTransition,D()&&w.props.animation){var t=C(),n=t.box,r=t.content;De([n,r],o),ke([n,r],"visible")}q(),P(),we(Ke,w),null==(e=w.popperInstance)||e.forceUpdate(),w.state.isMounted=!0,V("onMount",[w]),w.props.animation&&D()&&function(e,t){_(e,t)}(o,(function(){w.state.isShown=!0,V("onShown",[w])}))}},function(){var e,t=w.props.appendTo,n=k();e=w.props.interactive&&t===Ie.appendTo||"parent"===t?n.parentNode:ge(t,[n]);e.contains(O)||e.appendChild(O);Q(),!1}()},hide:function(){0;var e=!w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=ve(w.props.duration,1,Ie.duration);if(e||t||n)return;if(V("onHide",[w],!1),!1===w.props.onHide(w))return;w.state.isVisible=!1,w.state.isShown=!1,v=!1,d=!1,D()&&(O.style.visibility="hidden");if(W(),U(),H(),D()){var o=C(),i=o.box,a=o.content;w.props.animation&&(De([i,a],r),ke([i,a],"hidden"))}q(),P(),w.props.animation?D()&&function(e,t){_(e,(function(){!w.state.isVisible&&O.parentNode&&O.parentNode.contains(O)&&t()}))}(r,w.unmount):w.unmount()},hideWithInteractivity:function(e){0;S().addEventListener("mousemove",g),we(Ge,g),g(e)},enable:function(){w.state.isEnabled=!0},disable:function(){w.hide(),w.state.isEnabled=!1},unmount:function(){0;w.state.isVisible&&w.hide();if(!w.state.isMounted)return;Z(),ee().forEach((function(e){e._tippy.unmount()})),O.parentNode&&O.parentNode.removeChild(O);Ke=Ke.filter((function(e){return e!==w})),w.state.isMounted=!1,V("onHidden",[w])},destroy:function(){0;if(w.state.isDestroyed)return;w.clearDelayTimeouts(),w.unmount(),$(),delete e._tippy,w.state.isDestroyed=!0,V("onDestroy",[w])}};if(!p.render)return w;var x=p.render(w),O=x.popper,E=x.onUpdate;O.setAttribute("data-tippy-root",""),O.id="tippy-"+w.id,w.popper=O,e._tippy=w,O._tippy=w;var A=b.map((function(e){return e.fn(w)})),T=e.hasAttribute("aria-expanded");function L(){var e=w.props.touch;return Array.isArray(e)?e:[e,0]}function j(){return"hold"===L()[0]}function D(){var e;return!!(null==(e=w.props.render)?void 0:e.$$tippy)}function k(){return u||e}function S(){var e=k().parentNode;return e?Se(e):document}function C(){return Xe(O)}function M(e){return w.state.isMounted&&!w.state.isVisible||Me.isTouch||a&&"focus"===a.type?0:ve(w.props.delay,e?0:1,Ie.delay)}function H(){O.style.pointerEvents=w.props.interactive&&w.state.isVisible?"":"none",O.style.zIndex=""+w.props.zIndex}function V(e,t,n){var r;(void 0===n&&(n=!0),A.forEach((function(n){n[e]&&n[e].apply(void 0,t)})),n)&&(r=w.props)[e].apply(r,t)}function q(){var t=w.props.aria;if(t.content){var n="aria-"+t.content,r=O.id;be(w.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(w.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var o=t&&t.replace(r,"").trim();o?e.setAttribute(n,o):e.removeAttribute(n)}}))}}function P(){!T&&w.props.aria.expanded&&be(w.props.triggerTarget||e).forEach((function(e){w.props.interactive?e.setAttribute("aria-expanded",w.state.isVisible&&e===k()?"true":"false"):e.removeAttribute("aria-expanded")}))}function W(){S().removeEventListener("mousemove",g),Ge=Ge.filter((function(e){return e!==g}))}function B(e){if(!(Me.isTouch&&(m||"mousedown"===e.type)||w.props.interactive&&O.contains(e.target))){if(k().contains(e.target)){if(Me.isTouch)return;if(w.state.isVisible&&w.props.trigger.indexOf("click")>=0)return}else V("onClickOutside",[w,e]);!0===w.props.hideOnClick&&(w.clearDelayTimeouts(),w.hide(),l=!0,setTimeout((function(){l=!1})),w.state.isMounted||U())}}function R(){m=!0}function I(){m=!1}function N(){var e=S();e.addEventListener("mousedown",B,!0),e.addEventListener("touchend",B,me),e.addEventListener("touchstart",I,me),e.addEventListener("touchmove",R,me)}function U(){var e=S();e.removeEventListener("mousedown",B,!0),e.removeEventListener("touchend",B,me),e.removeEventListener("touchstart",I,me),e.removeEventListener("touchmove",R,me)}function _(e,t){var n=C().box;function r(e){e.target===n&&(Ce(n,"remove",r),t())}if(0===e)return t();Ce(n,"remove",s),Ce(n,"add",r),s=r}function F(t,n,r){void 0===r&&(r=!1),be(w.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),h.push({node:e,eventType:t,handler:n,options:r})}))}function z(){var e;j()&&(F("touchstart",X,{passive:!0}),F("touchend",J,{passive:!0})),(e=w.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(F(e,X),e){case"mouseenter":F("mouseleave",J);break;case"focus":F(Be?"focusout":"blur",G);break;case"focusin":F("focusout",G)}}))}function $(){h.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options;t.removeEventListener(n,r,o)})),h=[]}function X(e){var t,n=!1;if(w.state.isEnabled&&!K(e)&&!l){var r="focus"===(null==(t=a)?void 0:t.type);a=e,u=e.currentTarget,P(),!w.state.isVisible&&Te(e)&&Ge.forEach((function(t){return t(e)})),"click"===e.type&&(w.props.trigger.indexOf("mouseenter")<0||d)&&!1!==w.props.hideOnClick&&w.state.isVisible?n=!0:te(e),"click"===e.type&&(d=!n),n&&!r&&ne(e)}}function Y(e){var t=e.target,n=k().contains(t)||O.contains(t);"mousemove"===e.type&&n||function(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,o=e.popperState,i=e.props.interactiveBorder,a=xe(o.placement),s=o.modifiersData.offset;if(!s)return!0;var c="bottom"===a?s.top.y:0,u="top"===a?s.bottom.y:0,f="right"===a?s.left.x:0,p="left"===a?s.right.x:0,d=t.top-r+c>i,l=r-t.bottom-u>i,m=t.left-n+f>i,v=n-t.right-p>i;return d||l||m||v}))}(ee().concat(O).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:p}:null})).filter(Boolean),e)&&(W(),ne(e))}function J(e){K(e)||w.props.trigger.indexOf("click")>=0&&d||(w.props.interactive?w.hideWithInteractivity(e):ne(e))}function G(e){w.props.trigger.indexOf("focusin")<0&&e.target!==k()||w.props.interactive&&e.relatedTarget&&O.contains(e.relatedTarget)||ne(e)}function K(e){return!!Me.isTouch&&j()!==e.type.indexOf("touch")>=0}function Q(){Z();var t=w.props,n=t.popperOptions,r=t.placement,o=t.offset,i=t.getReferenceClientRect,a=t.moveTransition,s=D()?Xe(O).arrow:null,u=i?{getBoundingClientRect:i,contextElement:i.contextElement||k()}:e,f=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(D()){var n=C().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}}];D()&&s&&f.push({name:"arrow",options:{element:s,padding:3}}),f.push.apply(f,(null==n?void 0:n.modifiers)||[]),w.popperInstance=ue(u,O,Object.assign({},n,{placement:r,onFirstUpdate:c,modifiers:f}))}function Z(){w.popperInstance&&(w.popperInstance.destroy(),w.popperInstance=null)}function ee(){return Oe(O.querySelectorAll("[data-tippy-root]"))}function te(e){w.clearDelayTimeouts(),e&&V("onTrigger",[w,e]),N();var t=M(!0),n=L(),o=n[0],i=n[1];Me.isTouch&&"hold"===o&&i&&(t=i),t?r=setTimeout((function(){w.show()}),t):w.show()}function ne(e){if(w.clearDelayTimeouts(),V("onUntrigger",[w,e]),w.state.isVisible){if(!(w.props.trigger.indexOf("mouseenter")>=0&&w.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&d)){var t=M(!1);t?o=setTimeout((function(){w.state.isVisible&&w.hide()}),t):i=requestAnimationFrame((function(){w.hide()}))}}else U()}return z(),P(),H(),V("onCreate",[w]),p.showOnCreate&&te(),O.addEventListener("mouseenter",(function(){w.props.interactive&&w.state.isVisible&&w.clearDelayTimeouts()})),O.addEventListener("mouseleave",(function(e){w.props.interactive&&w.props.trigger.indexOf("mouseenter")>=0&&(S().addEventListener("mousemove",g),g(e))})),w}function Ze(e,t){void 0===t&&(t={});var n=Ie.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",Ve,me),window.addEventListener("blur",Pe);var r=Object.assign({},t,{plugins:n}),o=je(e).reduce((function(e,t){var n=t&&Qe(t,r);return n&&e.push(n),e}),[]);return Ae(e)?o[0]:o}Ze.defaultProps=Ie,Ze.setDefaultProps=function(e){Object.keys(e).forEach((function(t){Ie[t]=e[t]}))},Ze.currentInput=Me;Object.assign({},i,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}});Ze.setDefaultProps({render:Ye});var et=Ze,tt={},nt={};fetch("config.json").then((function(e){return e.json().then((function(e){for(var t=document.querySelector("thead tr"),n=0;n<e.clues.length;n++){var r=e.clues[n];t.innerHTML+='\n      <th>\n        <div>\n          <input id="'.concat(r.id,'" name="').concat(r.id,'" type="checkbox" />\n          <label for="').concat(r.id,'" \n                 id="l_').concat(r.id,'"\n                 data-tippy-content="').concat(r.title.fr,'" \n                 data-title-fr="').concat(r.title.fr,'" \n                 data-title-en="').concat(r.title.en,'"\n          >').concat(r.emoji,"</label>\n        </div>\n      </th>\n      ")}for(var o=document.querySelector("tbody"),i=0;i<e.ghosts.length;i++){for(var a=e.ghosts[i],s="",c=0;c<e.clues.length;c++){r=e.clues[c];-1!=a.clues.indexOf(r.id)?s+="<td>✔</td>":s+="<td></td>"}var u="\n        💪 : ".concat(a.strengths.en,"\n        <br />\n        <br />\n        👎 : ").concat(a.weaknesses.en,"\n      "),f="\n        💪 : ".concat(a.strengths.fr,"\n        <br />\n        <br />\n        👎 : ").concat(a.weaknesses.fr,"\n      ");o.innerHTML+='\n        <tr class="'.concat(a.clues.join(" "),'">\n          <td>\n            <span id="n_').concat(a.clues.join("_"),'"\n                  data-tippy-content="').concat(f,'" \n                  data-title-en="').concat(u,'" \n                  data-title-fr="').concat(f,'"\n            >\n              🔍 \n              <span class="name en">').concat(a.name.en,'</span>\n              <span class="name fr">').concat(a.name.fr,"</span>\n            </span>\n          </td>\n          ").concat(s,"\n        </tr>\n      ")}document.querySelectorAll("input").forEach((function(e){e.addEventListener("click",(function(){e.checked?tt[e.id]=1:tt[e.id]=0;var t="";Object.keys(tt).forEach((function(e){1==tt[e]&&(t+="."+e)})),document.querySelectorAll("tbody tr").forEach((function(e){return e.classList.add("hidden")})),document.querySelectorAll("tbody tr"+t).forEach((function(e){return e.classList.remove("hidden")}))}),!1)})),document.querySelectorAll("[data-tippy-content]").forEach((function(e){nt[e.id]=et(e,{placement:"right",animation:"scale",allowHTML:!0})})),document.querySelectorAll("#lang a").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),document.querySelectorAll("#lang a").forEach((function(e){e.classList.remove("active")})),e.classList.add("active");var n=e.getAttribute("href").slice(1);return document.querySelectorAll(".name").forEach((function(e){e.style.display="none",e.classList.contains(n)&&(e.style.display="inline")})),document.querySelectorAll("[data-tippy-content]").forEach((function(e){nt[e.id].setContent(e.getAttribute("data-title-".concat(n)))})),!1}),!1)}))}))}))}();