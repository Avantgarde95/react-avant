(self.webpackChunkreact_avant=self.webpackChunkreact_avant||[]).push([[881],{39881:(e,r,t)=>{"use strict";t.r(r),t.d(r,{ColorControl:()=>Ee,default:()=>_e}),t(47941),t(82526),t(41817),t(41539),t(32165),t(78783),t(66992),t(33948),t(91038),t(92222),t(19601),t(26833),t(4723),t(74916),t(21249),t(9653),t(15306),t(23157),t(23123),t(47042),t(57327),t(68309);var n=t(67294);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r.indexOf(t=o[n])>=0||(a[t]=e[t]);return a}function l(e){var r=(0,n.useRef)(e),t=(0,n.useRef)((function(e){r.current&&r.current(e)}));return r.current=e,t.current}var i=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},u=function(e){return"touches"in e},c=function(e){return e&&e.ownerDocument.defaultView||self},s=function(e,r,t){var n=e.getBoundingClientRect(),a=u(r)?function(e,r){for(var t=0;t<e.length;t++)if(e[t].identifier===r)return e[t];return e[0]}(r.touches,t):r;return{left:i((a.pageX-(n.left+c(e).pageXOffset))/n.width),top:i((a.pageY-(n.top+c(e).pageYOffset))/n.height)}},f=function(e){!u(e)&&e.preventDefault()},h=n.memo((function(e){var r=e.onMove,t=e.onKey,i=o(e,["onMove","onKey"]),h=(0,n.useRef)(null),v=l(r),d=l(t),g=(0,n.useRef)(null),p=(0,n.useRef)(!1),b=(0,n.useMemo)((function(){var e=function(e){f(e),(u(e)?e.touches.length>0:e.buttons>0)&&h.current?v(s(h.current,e,g.current)):t(!1)},r=function(){return t(!1)};function t(t){var n=p.current,a=c(h.current),o=t?a.addEventListener:a.removeEventListener;o(n?"touchmove":"mousemove",e),o(n?"touchend":"mouseup",r)}return[function(e){var r=e.nativeEvent,n=h.current;if(n&&(f(r),!function(e,r){return r&&!u(e)}(r,p.current)&&n)){if(u(r)){p.current=!0;var a=r.changedTouches||[];a.length&&(g.current=a[0].identifier)}n.focus(),v(s(n,r,g.current)),t(!0)}},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),d({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},t]}),[d,v]),m=b[0],y=b[1],w=b[2];return(0,n.useEffect)((function(){return w}),[w]),n.createElement("div",a({},i,{onTouchStart:m,onMouseDown:m,className:"react-colorful__interactive",ref:h,onKeyDown:y,tabIndex:0,role:"slider"}))})),v=function(e){return e.filter(Boolean).join(" ")},d=function(e){var r=e.color,t=e.left,a=e.top,o=void 0===a?.5:a,l=v(["react-colorful__pointer",e.className]);return n.createElement("div",{className:l,style:{top:100*o+"%",left:100*t+"%"}},n.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},g=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},p={grad:.9,turn:360,rad:360/(2*Math.PI)},b=function(e){return"#"===e[0]&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}},m=function(e,r){return void 0===r&&(r="deg"),Number(e)*(p[r]||1)},y=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},w=function(e){var r=e.s,t=e.v,n=e.a,a=(200-r)*t/100;return{h:g(e.h),s:g(a>0&&a<200?r*t/100/(a<=100?a:200-a)*100:0),l:g(a/2),a:g(n,2)}},x=function(e){var r=w(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},k=function(e){var r=w(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},M=function(e){var r=e.h,t=e.s,n=e.v,a=e.a;r=r/360*6,t/=100,n/=100;var o=Math.floor(r),l=n*(1-t),i=n*(1-(r-o)*t),u=n*(1-(1-r+o)*t),c=o%6;return{r:g(255*[n,i,l,l,u,n][c]),g:g(255*[u,n,n,i,l,l][c]),b:g(255*[l,l,u,n,n,i][c]),a:g(a,2)}},E=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},_=function(e){var r=e.r,t=e.g,n=e.b,a=e.a,o=Math.max(r,t,n),l=o-Math.min(r,t,n),i=l?o===r?(t-n)/l:o===t?2+(n-r)/l:4+(r-t)/l:0;return{h:g(60*(i<0?i+6:i)),s:g(o?l/o*100:0),v:g(o/255*100),a}},C=n.memo((function(e){var r=e.hue,t=e.onChange,a=v(["react-colorful__hue",e.className]);return n.createElement("div",{className:a},n.createElement(h,{onMove:function(e){t({h:360*e.left})},onKey:function(e){t({h:i(r+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":g(r)},n.createElement(d,{className:"react-colorful__hue-pointer",left:r/360,color:x({h:r,s:100,v:100,a:1})})))})),O=n.memo((function(e){var r=e.hsva,t=e.onChange,a={backgroundColor:x({h:r.h,s:100,v:100,a:1})};return n.createElement("div",{className:"react-colorful__saturation",style:a},n.createElement(h,{onMove:function(e){t({s:100*e.left,v:100-100*e.top})},onKey:function(e){t({s:i(r.s+100*e.left,0,100),v:i(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+g(r.s)+"%, Brightness "+g(r.v)+"%"},n.createElement(d,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:x(r)})))})),S=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},j=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")};function N(e,r,t){var a=l(t),o=(0,n.useState)((function(){return e.toHsva(r)})),i=o[0],u=o[1],c=(0,n.useRef)({color:r,hsva:i});(0,n.useEffect)((function(){if(!e.equal(r,c.current.color)){var t=e.toHsva(r);c.current={hsva:t,color:r},u(t)}}),[r,e]),(0,n.useEffect)((function(){var r;S(i,c.current.hsva)||e.equal(r=e.fromHsva(i),c.current.color)||(c.current={hsva:i,color:r},a(r))}),[i,e,a]);var s=(0,n.useCallback)((function(e){u((function(r){return Object.assign({},r,e)}))}),[]);return[i,s]}var H="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,z=new Map,I=function(e){H((function(){var r=e.current?e.current.ownerDocument:document;if(void 0!==r&&!z.has(r)){var n=r.createElement("style");n.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',z.set(r,n);var a=t.nc;a&&n.setAttribute("nonce",a),r.head.appendChild(n)}}),[])},R=function(e){var r=e.className,t=e.colorModel,l=e.color,i=void 0===l?t.defaultColor:l,u=e.onChange,c=o(e,["className","colorModel","color","onChange"]),s=(0,n.useRef)(null);I(s);var f=N(t,i,u),h=f[0],d=f[1],g=v(["react-colorful",r]);return n.createElement("div",a({},c,{ref:s,className:g}),n.createElement(O,{hsva:h,onChange:d}),n.createElement(C,{hue:h.h,onChange:d,className:"react-colorful__last-control"}))},A={defaultColor:"000",toHsva:function(e){return _(b(e))},fromHsva:function(e){return t=(r=M(e)).g,n=r.b,"#"+E(r.r)+E(t)+E(n);var r,t,n},equal:function(e,r){return e.toLowerCase()===r.toLowerCase()||S(b(e),b(r))}},L=function(e){var r=e.className,t=e.hsva,a=e.onChange,o={backgroundImage:"linear-gradient(90deg, "+k(Object.assign({},t,{a:0}))+", "+k(Object.assign({},t,{a:1}))+")"},l=v(["react-colorful__alpha",r]);return n.createElement("div",{className:l},n.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),n.createElement(h,{onMove:function(e){a({a:e.left})},onKey:function(e){a({a:i(t.a+e.left)})},"aria-label":"Alpha","aria-valuetext":g(100*t.a)+"%"},n.createElement(d,{className:"react-colorful__alpha-pointer",left:t.a,color:k(t)})))},P=function(e){var r=e.className,t=e.colorModel,l=e.color,i=void 0===l?t.defaultColor:l,u=e.onChange,c=o(e,["className","colorModel","color","onChange"]),s=(0,n.useRef)(null);I(s);var f=N(t,i,u),h=f[0],d=f[1],g=v(["react-colorful",r]);return n.createElement("div",a({},c,{ref:s,className:g}),n.createElement(O,{hsva:h,onChange:d}),n.createElement(C,{hue:h.h,onChange:d}),n.createElement(L,{hsva:h,onChange:d,className:"react-colorful__last-control"}))},T={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?y({h:m(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:k,equal:j},B={defaultColor:"rgba(0, 0, 0, 1)",toHsva:function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?_({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:function(e){var r=M(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:j},q=t(24376),X=t.n(q),D=t(23493),$=t.n(D),G=t(36305);t(50915);var W=G.zo.div((function(e){var r=e.theme;return{padding:"2px 6px",lineHeight:"16px",fontSize:10,fontWeight:r.typography.weight.bold,color:r.color.lightest,boxShadow:"0 0 5px 0 rgba(0, 0, 0, 0.3)",borderRadius:4,whiteSpace:"nowrap",pointerEvents:"none",zIndex:-1,background:"light"===r.base?"rgba(60, 60, 60, 0.9)":"rgba(20, 20, 20, 0.85)",margin:6}})),K=function(e){var r=e.note,t=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["note"]);return n.createElement(W,t,r)};K.displayName="TooltipNote";var V,F,U=t(5349),Y=t(51122),J=t(31482),Q=t(89491);function Z(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(t.push(l.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return t}}(e,r)||function(e,r){if(e){if("string"==typeof e)return ee(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ee(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function re(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function te(){return te=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},te.apply(this,arguments)}var ne=G.zo.div({position:"relative",maxWidth:250}),ae=(0,G.zo)(U.R)({position:"absolute",zIndex:1,top:4,left:4}),oe=G.zo.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),le=(0,G.zo)(K)((function(e){return{fontFamily:e.theme.typography.fonts.base}})),ie=G.zo.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),ue=G.zo.div((function(e){var r=e.theme;return{width:16,height:16,boxShadow:e.active?"".concat(r.appBorderColor," 0 0 0 1px inset, ").concat(r.color.mediumdark,"50 0 0 0 4px"):"".concat(r.appBorderColor," 0 0 0 1px inset"),borderRadius:r.appBorderRadius}})),ce=function(e){var r=e.value,t=e.active,a=e.onClick,o=e.style,l=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["value","active","onClick","style"]),i="linear-gradient(".concat(r,", ").concat(r,"), ").concat('url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',", linear-gradient(#fff, #fff)");return n.createElement(ue,te({},l,{active:t,onClick:a,style:Object.assign({},o,{backgroundImage:i})}))};ce.displayName="Swatch";var se,fe=(0,G.zo)(Y.l.Input)((function(e){return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.theme.typography.fonts.base}})),he=(0,G.zo)(J.P)((function(e){return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.theme.input.color}}));!function(e){e.RGB="rgb",e.HSL="hsl",e.HEX="hex"}(se||(se={}));var ve=Object.values(se),de=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,ge=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,pe=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,be=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,me=/^\s*#?([0-9a-f]{3})\s*$/i,ye=(re(V={},se.HEX,(function(e){return n.createElement(R,a({},e,{colorModel:A}))})),re(V,se.RGB,(function(e){return n.createElement(P,a({},e,{colorModel:B}))})),re(V,se.HSL,(function(e){return n.createElement(P,a({},e,{colorModel:T}))})),V),we=(re(F={},se.HEX,"transparent"),re(F,se.RGB,"rgba(0, 0, 0, 0)"),re(F,se.HSL,"hsla(0, 0%, 0%, 0)"),F),xe=function(e){var r=null==e?void 0:e.match(de);if(!r)return[0,0,0,1];var t=Z(r,5),n=t[1],a=t[2],o=t[3],l=t[4];return[n,a,o,void 0===l?1:l].map(Number)},ke=function(e){var r;if(e){var t=!0;if(ge.test(e)){var n,a=Z(xe(e),4),o=a[0],l=a[1],i=a[2],u=a[3],c=Z(X().rgb.hsl([o,l,i])||[0,0,0],3),s=c[0],f=c[1],h=c[2];return re(n={valid:t,value:e,keyword:X().rgb.keyword([o,l,i]),colorSpace:se.RGB},se.RGB,e),re(n,se.HSL,"hsla(".concat(s,", ").concat(f,"%, ").concat(h,"%, ").concat(u,")")),re(n,se.HEX,"#".concat(X().rgb.hex([o,l,i]).toLowerCase())),n}if(pe.test(e)){var v,d=Z(xe(e),4),g=d[0],p=d[1],b=d[2],m=d[3],y=Z(X().hsl.rgb([g,p,b])||[0,0,0],3),w=y[0],x=y[1],k=y[2];return re(v={valid:t,value:e,keyword:X().hsl.keyword([g,p,b]),colorSpace:se.HSL},se.RGB,"rgba(".concat(w,", ").concat(x,", ").concat(k,", ").concat(m,")")),re(v,se.HSL,e),re(v,se.HEX,"#".concat(X().hsl.hex([g,p,b]).toLowerCase())),v}var M=e.replace("#",""),E=X().keyword.rgb(M)||X().hex.rgb(M),_=X().rgb.hsl(E),C=e;if(/[^#a-f0-9]/i.test(e)?C=M:be.test(e)&&(C="#".concat(M)),C.startsWith("#"))t=be.test(C);else try{X().keyword.hex(C)}catch(e){t=!1}return re(r={valid:t,value:C,keyword:X().rgb.keyword(E),colorSpace:se.HEX},se.RGB,"rgba(".concat(E[0],", ").concat(E[1],", ").concat(E[2],", 1)")),re(r,se.HSL,"hsla(".concat(_[0],", ").concat(_[1],"%, ").concat(_[2],"%, 1)")),re(r,se.HEX,C),r}},Me=function(e){return e.replace(/\s*/,"").toLowerCase()},Ee=function(e){var r=e.name,t=e.value,a=e.onChange,o=e.onFocus,l=e.onBlur,i=e.presetColors,u=e.startOpen,c=function(e,r){var t=Z((0,n.useState)(e||""),2),a=t[0],o=t[1],l=Z((0,n.useState)((function(){return ke(a)})),2),i=l[0],u=l[1],c=Z((0,n.useState)((null==i?void 0:i.colorSpace)||se.HEX),2),s=c[0],f=c[1];(0,n.useEffect)((function(){void 0===e&&(o(""),u(void 0),f(se.HEX))}),[e]);var h=(0,n.useMemo)((function(){return function(e,r,t){if(!e||null==r||!r.valid)return we[t];if(t!==se.HEX)return(null==r?void 0:r[t])||we[t];if(!r.hex.startsWith("#"))try{return"#".concat(X().keyword.hex(r.hex))}catch(e){return we.hex}var n=r.hex.match(me);if(!n)return be.test(r.hex)?r.hex:we.hex;var a=Z(n[1].split(""),3),o=a[0],l=a[1],i=a[2];return"#".concat(o).concat(o).concat(l).concat(l).concat(i).concat(i)}(a,i,s).toLowerCase()}),[a,i,s]),v=(0,n.useCallback)((function(e){var t=ke(e);o((null==t?void 0:t.value)||e||""),t&&(u(t),f(t.colorSpace),r(t.value))}),[r]),d=(0,n.useCallback)((function(){var e=ve.indexOf(s)+1;e>=ve.length&&(e=0),f(ve[e]);var t=(null==i?void 0:i[ve[e]])||"";o(t),r(t)}),[i,s,r]);return{value:a,realValue:h,updateValue:v,color:i,colorSpace:s,cycleColorSpace:d}}(t,$()(a,200)),s=c.value,f=c.realValue,h=c.updateValue,v=c.color,d=c.colorSpace,g=c.cycleColorSpace,p=function(e,r,t){var a=Z((0,n.useState)(null!=r&&r.valid?[r]:[]),2),o=a[0],l=a[1];(0,n.useEffect)((function(){void 0===r&&l([])}),[r]);var i=(0,n.useMemo)((function(){return(e||[]).map((function(e){return"string"==typeof e?ke(e):e.title?Object.assign({},ke(e.color),{keyword:e.title}):ke(e.color)})).concat(o).filter(Boolean).slice(-27)}),[e,o]),u=(0,n.useCallback)((function(e){null!=e&&e.valid&&(i.some((function(r){return Me(r[t])===Me(e[t])}))||l((function(r){return r.concat(e)})))}),[t,i]);return{presets:i,addPreset:u}}(i,v,d),b=p.presets,m=p.addPreset,y=ye[d];return n.createElement(ne,null,n.createElement(ae,{trigger:"click",startOpen:u,closeOnClick:!0,onVisibilityChange:function(){return m(v)},tooltip:n.createElement(oe,null,n.createElement(y,{color:"transparent"===f?"#000000":f,onChange:h,onFocus:o,onBlur:l}),b.length>0&&n.createElement(ie,null,b.map((function(e,r){return n.createElement(U.R,{key:"".concat(e.value,"-").concat(r),hasChrome:!1,tooltip:n.createElement(le,{note:e.keyword||e.value})},n.createElement(ce,{value:e[d],active:v&&Me(e[d])===Me(v[d]),onClick:function(){return h(e.value)}}))}))))},n.createElement(ce,{value:f,style:{margin:4}})),n.createElement(fe,{id:(0,Q.d)(r),value:s,onChange:function(e){return h(e.target.value)},onFocus:function(e){return e.target.select()},placeholder:"Choose color..."}),s?n.createElement(he,{icon:"markup",onClick:g}):null)};Ee.displayName="ColorControl";const _e=Ee},99300:(e,r,t)=>{function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,r)||function(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t(47941),t(69070),t(41539),t(39714),t(83710),t(4723),t(74916),t(69600),t(21249),t(23123),t(91058),t(79753),t(82526),t(41817),t(32165),t(78783),t(66992),t(33948),t(47042),t(68309),t(91038);for(var o=t(8874),l={},i=0,u=Object.keys(o);i<u.length;i++){var c=u[i];l[o[c]]=c}var s={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};e.exports=s;for(var f=0,h=Object.keys(s);f<h.length;f++){var v=h[f];if(!("channels"in s[v]))throw new Error("missing channels property: "+v);if(!("labels"in s[v]))throw new Error("missing channel labels property: "+v);if(s[v].labels.length!==s[v].channels)throw new Error("channel and label counts mismatch: "+v);var d=s[v],g=d.channels,p=d.labels;delete s[v].channels,delete s[v].labels,Object.defineProperty(s[v],"channels",{value:g}),Object.defineProperty(s[v],"labels",{value:p})}s.rgb.hsl=function(e){var r,t=e[0]/255,n=e[1]/255,a=e[2]/255,o=Math.min(t,n,a),l=Math.max(t,n,a),i=l-o;l===o?r=0:t===l?r=(n-a)/i:n===l?r=2+(a-t)/i:a===l&&(r=4+(t-n)/i),(r=Math.min(60*r,360))<0&&(r+=360);var u=(o+l)/2;return[r,100*(l===o?0:u<=.5?i/(l+o):i/(2-l-o)),100*u]},s.rgb.hsv=function(e){var r,t,n,a,o,l=e[0]/255,i=e[1]/255,u=e[2]/255,c=Math.max(l,i,u),s=c-Math.min(l,i,u),f=function(e){return(c-e)/6/s+.5};return 0===s?(a=0,o=0):(o=s/c,r=f(l),t=f(i),n=f(u),l===c?a=n-t:i===c?a=1/3+r-n:u===c&&(a=2/3+t-r),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*c]},s.rgb.hwb=function(e){var r=e[0],t=e[1],n=e[2];return[s.rgb.hsl(e)[0],1/255*Math.min(r,Math.min(t,n))*100,100*(n=1-1/255*Math.max(r,Math.max(t,n)))]},s.rgb.cmyk=function(e){var r=e[0]/255,t=e[1]/255,n=e[2]/255,a=Math.min(1-r,1-t,1-n);return[100*((1-r-a)/(1-a)||0),100*((1-t-a)/(1-a)||0),100*((1-n-a)/(1-a)||0),100*a]},s.rgb.keyword=function(e){var r=l[e];if(r)return r;for(var t,n,a,i=1/0,u=0,c=Object.keys(o);u<c.length;u++){var s=c[u],f=(n=e,a=o[s],Math.pow(n[0]-a[0],2)+Math.pow(n[1]-a[1],2)+Math.pow(n[2]-a[2],2));f<i&&(i=f,t=s)}return t},s.keyword.rgb=function(e){return o[e]},s.rgb.xyz=function(e){var r=e[0]/255,t=e[1]/255,n=e[2]/255;return[100*(.4124*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.3576*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*r+.7152*t+.0722*n),100*(.0193*r+.1192*t+.9505*n)]},s.rgb.lab=function(e){var r=s.rgb.xyz(e),t=r[0],n=r[1],a=r[2];return n/=100,a/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(t-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]},s.hsl.rgb=function(e){var r,t,n,a=e[0]/360,o=e[1]/100,l=e[2]/100;if(0===o)return[n=255*l,n,n];for(var i=2*l-(r=l<.5?l*(1+o):l+o-l*o),u=[0,0,0],c=0;c<3;c++)(t=a+1/3*-(c-1))<0&&t++,t>1&&t--,n=6*t<1?i+6*(r-i)*t:2*t<1?r:3*t<2?i+(r-i)*(2/3-t)*6:i,u[c]=255*n;return u},s.hsl.hsv=function(e){var r=e[0],t=e[1]/100,n=e[2]/100,a=t,o=Math.max(n,.01);return t*=(n*=2)<=1?n:2-n,a*=o<=1?o:2-o,[r,100*(0===n?2*a/(o+a):2*t/(n+t)),(n+t)/2*100]},s.hsv.rgb=function(e){var r=e[0]/60,t=e[1]/100,n=e[2]/100,a=Math.floor(r)%6,o=r-Math.floor(r),l=255*n*(1-t),i=255*n*(1-t*o),u=255*n*(1-t*(1-o));switch(n*=255,a){case 0:return[n,u,l];case 1:return[i,n,l];case 2:return[l,n,u];case 3:return[l,i,n];case 4:return[u,l,n];case 5:return[n,l,i]}},s.hsv.hsl=function(e){var r,t,n=e[0],a=e[1]/100,o=e[2]/100,l=Math.max(o,.01);t=(2-a)*o;var i=(2-a)*l;return r=a*l,[n,100*(r=(r/=i<=1?i:2-i)||0),100*(t/=2)]},s.hwb.rgb=function(e){var r,t=e[0]/360,n=e[1]/100,a=e[2]/100,o=n+a;o>1&&(n/=o,a/=o);var l=Math.floor(6*t),i=1-a;r=6*t-l,0!=(1&l)&&(r=1-r);var u,c,s,f=n+r*(i-n);switch(l){default:case 6:case 0:u=i,c=f,s=n;break;case 1:u=f,c=i,s=n;break;case 2:u=n,c=i,s=f;break;case 3:u=n,c=f,s=i;break;case 4:u=f,c=n,s=i;break;case 5:u=i,c=n,s=f}return[255*u,255*c,255*s]},s.cmyk.rgb=function(e){var r=e[0]/100,t=e[1]/100,n=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]},s.xyz.rgb=function(e){var r,t,n,a=e[0]/100,o=e[1]/100,l=e[2]/100;return t=-.9689*a+1.8758*o+.0415*l,n=.0557*a+-.204*o+1.057*l,r=(r=3.2406*a+-1.5372*o+-.4986*l)>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,[255*(r=Math.min(Math.max(0,r),1)),255*(t=Math.min(Math.max(0,t),1)),255*(n=Math.min(Math.max(0,n),1))]},s.xyz.lab=function(e){var r=e[0],t=e[1],n=e[2];return t/=100,n/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(r-t),200*(t-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},s.lab.xyz=function(e){var r,t,n,a=e[0];r=e[1]/500+(t=(a+16)/116),n=t-e[2]/200;var o=Math.pow(t,3),l=Math.pow(r,3),i=Math.pow(n,3);return t=o>.008856?o:(t-16/116)/7.787,r=l>.008856?l:(r-16/116)/7.787,n=i>.008856?i:(n-16/116)/7.787,[r*=95.047,t*=100,n*=108.883]},s.lab.lch=function(e){var r,t=e[0],n=e[1],a=e[2];return(r=360*Math.atan2(a,n)/2/Math.PI)<0&&(r+=360),[t,Math.sqrt(n*n+a*a),r]},s.lch.lab=function(e){var r=e[0],t=e[1],n=e[2]/360*2*Math.PI;return[r,t*Math.cos(n),t*Math.sin(n)]},s.rgb.ansi16=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=n(e,3),a=t[0],o=t[1],l=t[2],i=null===r?s.rgb.hsv(e)[2]:r;if(0===(i=Math.round(i/50)))return 30;var u=30+(Math.round(l/255)<<2|Math.round(o/255)<<1|Math.round(a/255));return 2===i&&(u+=60),u},s.hsv.ansi16=function(e){return s.rgb.ansi16(s.hsv.rgb(e),e[2])},s.rgb.ansi256=function(e){var r=e[0],t=e[1],n=e[2];return r===t&&t===n?r<8?16:r>248?231:Math.round((r-8)/247*24)+232:16+36*Math.round(r/255*5)+6*Math.round(t/255*5)+Math.round(n/255*5)},s.ansi16.rgb=function(e){var r=e%10;if(0===r||7===r)return e>50&&(r+=3.5),[r=r/10.5*255,r,r];var t=.5*(1+~~(e>50));return[(1&r)*t*255,(r>>1&1)*t*255,(r>>2&1)*t*255]},s.ansi256.rgb=function(e){if(e>=232){var r=10*(e-232)+8;return[r,r,r]}var t;return e-=16,[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},s.rgb.hex=function(e){var r=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(r.length)+r},s.hex.rgb=function(e){var r=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];var t=r[0];3===r[0].length&&(t=t.split("").map((function(e){return e+e})).join(""));var n=parseInt(t,16);return[n>>16&255,n>>8&255,255&n]},s.rgb.hcg=function(e){var r,t=e[0]/255,n=e[1]/255,a=e[2]/255,o=Math.max(Math.max(t,n),a),l=Math.min(Math.min(t,n),a),i=o-l;return r=i<=0?0:o===t?(n-a)/i%6:o===n?2+(a-t)/i:4+(t-n)/i,r/=6,[360*(r%=1),100*i,100*(i<1?l/(1-i):0)]},s.hsl.hcg=function(e){var r=e[1]/100,t=e[2]/100,n=t<.5?2*r*t:2*r*(1-t),a=0;return n<1&&(a=(t-.5*n)/(1-n)),[e[0],100*n,100*a]},s.hsv.hcg=function(e){var r=e[1]/100,t=e[2]/100,n=r*t,a=0;return n<1&&(a=(t-n)/(1-n)),[e[0],100*n,100*a]},s.hcg.rgb=function(e){var r=e[0]/360,t=e[1]/100,n=e[2]/100;if(0===t)return[255*n,255*n,255*n];var a,o=[0,0,0],l=r%1*6,i=l%1,u=1-i;switch(Math.floor(l)){case 0:o[0]=1,o[1]=i,o[2]=0;break;case 1:o[0]=u,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=i;break;case 3:o[0]=0,o[1]=u,o[2]=1;break;case 4:o[0]=i,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=u}return a=(1-t)*n,[255*(t*o[0]+a),255*(t*o[1]+a),255*(t*o[2]+a)]},s.hcg.hsv=function(e){var r=e[1]/100,t=r+e[2]/100*(1-r),n=0;return t>0&&(n=r/t),[e[0],100*n,100*t]},s.hcg.hsl=function(e){var r=e[1]/100,t=e[2]/100*(1-r)+.5*r,n=0;return t>0&&t<.5?n=r/(2*t):t>=.5&&t<1&&(n=r/(2*(1-t))),[e[0],100*n,100*t]},s.hcg.hwb=function(e){var r=e[1]/100,t=r+e[2]/100*(1-r);return[e[0],100*(t-r),100*(1-t)]},s.hwb.hcg=function(e){var r=e[1]/100,t=1-e[2]/100,n=t-r,a=0;return n<1&&(a=(t-n)/(1-n)),[e[0],100*n,100*a]},s.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},s.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},s.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},s.gray.hsl=function(e){return[0,0,e[0]]},s.gray.hsv=s.gray.hsl,s.gray.hwb=function(e){return[0,100,e[0]]},s.gray.cmyk=function(e){return[0,0,0,e[0]]},s.gray.lab=function(e){return[e[0],0,0]},s.gray.hex=function(e){var r=255&Math.round(e[0]/100*255),t=((r<<16)+(r<<8)+r).toString(16).toUpperCase();return"000000".substring(t.length)+t},s.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},24376:(e,r,t)=>{t(47941),t(89554),t(54747),t(69070);var n=t(99300),a=t(61448),o={};Object.keys(n).forEach((function(e){o[e]={},Object.defineProperty(o[e],"channels",{value:n[e].channels}),Object.defineProperty(o[e],"labels",{value:n[e].labels});var r=a(e);Object.keys(r).forEach((function(t){var n=r[t];o[e][t]=function(e){var r=function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var a=t[0];if(null==a)return a;a.length>1&&(t=a);var o=e(t);if("object"==typeof o)for(var l=o.length,i=0;i<l;i++)o[i]=Math.round(o[i]);return o};return"conversion"in e&&(r.conversion=e.conversion),r}(n),o[e][t].raw=function(e){var r=function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var a=t[0];return null==a?a:(a.length>1&&(t=a),e(t))};return"conversion"in e&&(r.conversion=e.conversion),r}(n)}))})),e.exports=o},61448:(e,r,t)=>{t(47941);var n=t(99300);function a(e,r){return function(t){return r(e(t))}}function o(e,r){for(var t=[r[e].parent,e],o=n[r[e].parent][e],l=r[e].parent;r[l].parent;)t.unshift(r[l].parent),o=a(n[r[l].parent][l],o),l=r[l].parent;return o.conversion=t,o}e.exports=function(e){for(var r=function(e){var r=function(){for(var e={},r=Object.keys(n),t=r.length,a=0;a<t;a++)e[r[a]]={distance:-1,parent:null};return e}(),t=[e];for(r[e].distance=0;t.length;)for(var a=t.pop(),o=Object.keys(n[a]),l=o.length,i=0;i<l;i++){var u=o[i],c=r[u];-1===c.distance&&(c.distance=r[a].distance+1,c.parent=a,t.unshift(u))}return r}(e),t={},a=Object.keys(r),l=a.length,i=0;i<l;i++){var u=a[i];null!==r[u].parent&&(t[u]=o(u,r))}return t}},8874:e=>{"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},79753:(e,r,t)=>{t(82109)({target:"Array",stat:!0},{isArray:t(43157)})},83710:(e,r,t)=>{var n=t(1702),a=t(31320),o=Date.prototype,l="Invalid Date",i=n(o.toString),u=n(o.getTime);String(new Date(NaN))!=l&&a(o,"toString",(function(){var e=u(this);return e==e?i(this):l}))},27561:(e,r,t)=>{var n=t(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(a,""):e}},67990:e=>{var r=/\s/;e.exports=function(e){for(var t=e.length;t--&&r.test(e.charAt(t)););return t}},23279:(e,r,t)=>{var n=t(13218),a=t(7771),o=t(14841),l=Math.max,i=Math.min;e.exports=function(e,r,t){var u,c,s,f,h,v,d=0,g=!1,p=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(r){var t=u,n=c;return u=c=void 0,d=r,f=e.apply(n,t)}function y(e){return d=e,h=setTimeout(x,r),g?m(e):f}function w(e){var t=e-v;return void 0===v||t>=r||t<0||p&&e-d>=s}function x(){var e=a();if(w(e))return k(e);h=setTimeout(x,function(e){var t=r-(e-v);return p?i(t,s-(e-d)):t}(e))}function k(e){return h=void 0,b&&u?m(e):(u=c=void 0,f)}function M(){var e=a(),t=w(e);if(u=arguments,c=this,v=e,t){if(void 0===h)return y(v);if(p)return clearTimeout(h),h=setTimeout(x,r),m(v)}return void 0===h&&(h=setTimeout(x,r)),f}return r=o(r)||0,n(t)&&(g=!!t.leading,s=(p="maxWait"in t)?l(o(t.maxWait)||0,r):s,b="trailing"in t?!!t.trailing:b),M.cancel=function(){void 0!==h&&clearTimeout(h),d=0,u=v=c=h=void 0},M.flush=function(){return void 0===h?f:k(a())},M}},7771:(e,r,t)=>{var n=t(55639);e.exports=function(){return n.Date.now()}},23493:(e,r,t)=>{var n=t(23279),a=t(13218);e.exports=function(e,r,t){var o=!0,l=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return a(t)&&(o="leading"in t?!!t.leading:o,l="trailing"in t?!!t.trailing:l),n(e,r,{leading:o,maxWait:r,trailing:l})}},14841:(e,r,t)=>{var n=t(27561),a=t(13218),o=t(33448),l=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(a(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=a(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var t=i.test(e);return t||u.test(e)?c(e.slice(2),t?2:8):l.test(e)?NaN:+e}}}]);