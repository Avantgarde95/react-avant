!function(){var e,n={590:function(e,n,t){var a,r,o;self,e.exports=(a=t(660),r=t(294),o=t(757),function(){var e,n,t={233:function(){!function(e){var n=e.util.clone(e.languages.javascript),t="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function a(e,n){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return t})),RegExp(e,n)}t=a(t).source,e.languages.jsx=e.languages.extend("markup",n),e.languages.jsx.tag.pattern=a("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=n.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:a("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:a("=<BRACES>"),inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var r=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(r).join(""):""},o=function(n){for(var t=[],a=0;a<n.length;a++){var s=n[a],i=!1;if("string"!=typeof s&&("tag"===s.type&&s.content[0]&&"tag"===s.content[0].type?"</"===s.content[0].content[0].content?0<t.length&&t[t.length-1].tagName===r(s.content[0].content[1])&&t.pop():"/>"===s.content[s.content.length-1].content||t.push({tagName:r(s.content[0].content[1]),openedBraces:0}):0<t.length&&"punctuation"===s.type&&"{"===s.content?t[t.length-1].openedBraces++:0<t.length&&0<t[t.length-1].openedBraces&&"punctuation"===s.type&&"}"===s.content?t[t.length-1].openedBraces--:i=!0),(i||"string"==typeof s)&&0<t.length&&0===t[t.length-1].openedBraces){var c=r(s);a<n.length-1&&("string"==typeof n[a+1]||"plain-text"===n[a+1].type)&&(c+=r(n[a+1]),n.splice(a+1,1)),0<a&&("string"==typeof n[a-1]||"plain-text"===n[a-1].type)&&(c=r(n[a-1])+c,n.splice(a-1,1),a--),n[a]=new e.Token("plain-text",c,null,c)}s.content&&"string"!=typeof s.content&&o(s.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||o(e.tokens)}))}(Prism)},833:function(){!function(e){var n=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",n);var t=e.languages.tsx.tag;t.pattern=RegExp("(^|[^\\w$]|(?=</))(?:"+t.pattern.source+")",t.pattern.flags),t.lookbehind=!0}(Prism)},456:function(){!function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter;var n=e.languages.extend("typescript",{});delete n["class-name"],e.languages.typescript["class-name"].inside=n,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),e.languages.ts=e.languages.typescript}(Prism)},775:function(e){"use strict";e.exports=a},156:function(e){"use strict";e.exports=r},859:function(e){"use strict";e.exports=o}},s={};function i(e){var n=s[e];if(void 0!==n)return n.exports;var a=s[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,{a:n}),n},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(t,a){if(1&a&&(t=this(t)),8&a)return t;if("object"==typeof t&&t){if(4&a&&t.__esModule)return t;if(16&a&&"function"==typeof t.then)return t}var r=Object.create(null);i.r(r);var o={};e=e||[null,n({}),n([]),n(n)];for(var s=2&a&&t;"object"==typeof s&&!~e.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((function(e){o[e]=function(){return t[e]}}));return o.default=function(){return t},i.d(r,o),r},i.d=function(e,n){for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return function(){"use strict";i.r(c),i.d(c,{Code:function(){return r},Icon:function(){return t},Markdown:function(){return u},Sandbox:function(){return o},defaultMarkdownMapper:function(){return l}});var e=i(156),n=i.n(e),t=function(e){var t=e.definition,a=e.className,r=void 0===a?"":a,o=e.size,s=void 0===o?16:o;return n().createElement("svg",{"aria-hidden":!0,focusable:!1,className:r+" svg-inline--fa fa-"+t.iconName+" fa-w-"+s,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t.icon[0]+" "+t.icon[1]},n().createElement("path",{fill:"currentColor",d:t.icon[4]}))},a=i(775),r=(i(233),i(456),i(833),function(t){var r=t.language,o=t.className,s=t.children,i=(0,e.useCallback)((function(e){(0,a.highlightElement)(e)}),[]);return n().createElement("pre",{className:o},n().createElement("code",{className:void 0!==r?"language-"+r:"",ref:i},s))}),o=function(e){var t=e.name,a=e.module,r=e.className;return n().createElement("iframe",{className:r,title:"CodeSandbox "+t,src:"https://codesandbox.io/embed/"+t+(void 0!==a?"?module="+a:""),allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})},s=(0,e.lazy)((function(){return Promise.resolve().then(i.t.bind(i,859,23))})),l={code:function(e){var t=e.inline,a=e.className,o=e.children,s=void 0!==a&&a.startsWith("language-")?a.substring(9):void 0;return t?n().createElement("code",{className:"InlineCodeView"},o):n().createElement(r,{language:s},o)}},u=function(t){var a=t.className,r=t.fallback,o=t.children,i=t.mapper,c=void 0===i?l:i;return n().createElement(e.Suspense,{fallback:r},n().createElement(s,{className:a,components:c},o))}}(),c}())},728:function(e,n,t){"use strict";var a=t(294),r=t(935),o=t(658),s=t(590),i=t(227),c=t(190),l="src-demo-style-Demo__section--adOYi",u="src-demo-style-Demo__description--mX7ov",p=function(){return a.createElement("div",{className:"src-demo-style-Demo__demo--XEIGM"},a.createElement("h3",{className:l},"Icon"),a.createElement("div",{className:u},"Component for using Font Awesome easily"),a.createElement(s.Code,{language:"tsx"},"import React from 'react';\nimport { faGuitar } from '@fortawesome/free-solid-svg-icons/faGuitar';\nimport { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';\n\nimport { Icon } from 'react-avant';\nimport 'react-avant/dist/style.css';\n\nconst App = () => (\n    <div style={{ fontSize: '2rem' }}>\n        <Icon definition={faGuitar} />\n        <Icon definition={faMusic} />\n    </div>\n);"),a.createElement("div",{style:{fontSize:"2rem"}},a.createElement(s.Icon,{definition:i.mC}),a.createElement(s.Icon,{definition:c.Xi})),a.createElement("h3",{className:l},"Code"),a.createElement("div",{className:u},"Code highlighter built on prism.js"),a.createElement(s.Code,{language:"tsx"},"import React from 'react';\n\nimport { Code } from 'react-avant';\nimport 'react-avant/dist/style.css';\n\nconst App = () => (\n    <div>\n        <Code language={'typescript'}>const value: number = 5;</Code>\n    </div>\n);"),a.createElement("div",null,a.createElement(s.Code,{language:"typescript"},"const value: number = 5;")),a.createElement("h3",{className:l},"Sandbox"),a.createElement("div",{className:u},"Component for embedding CodeSandbox easily"),a.createElement(s.Code,{language:"tsx"},"import React from 'react';\n\nimport { Sandbox } from 'react-avant';\nimport 'react-avant/dist/style.css';\n\nconst App = () => (\n    <div>\n        <style type={'text/css'}>\n            {'.sandbox { width: 100%; height: 500px; }'}\n        </style>\n        <Sandbox className={'sandbox'} name={'lets-react-simple-typescript-example-7xid9'} />\n        <Sandbox\n            className={'sandbox'}\n            name={'lets-react-simple-typescript-example-7xid9'}\n            module={'/src/App.ts'}\n        />\n    </div>\n);"),a.createElement("div",null,a.createElement("style",{type:"text/css"},".sandbox { width: 100%; height: 500px; }"),a.createElement(s.Sandbox,{className:"sandbox",name:"lets-react-simple-typescript-example-7xid9"}),a.createElement(s.Sandbox,{className:"sandbox",name:"lets-react-simple-typescript-example-7xid9",module:"/src/App.ts"})),a.createElement("h3",{className:l},"Markdown"),a.createElement("div",{className:u},"Markdown renderer built on react-markdown"),a.createElement(s.Code,{language:"tsx"},"import React from 'react';\n\nimport { Markdown } from 'react-avant';\nimport 'react-avant/dist/style.css';\n\nconst App = () => (\n    <div>\n        <Markdown fallback={'Loading...'}>\n            {`# My article\n\n## Fruits\n\n- Apple\n- Banana\n- Orange\n\n## Drinks\n\n- Water\n- Juice\n- Milk`}\n        </Markdown>\n    </div>\n);"),a.createElement("div",null,a.createElement(s.Markdown,{fallback:"Loading..."},"# My article\n\n## Fruits\n\n- Apple\n- Banana\n- Orange\n\n## Drinks\n\n- Water\n- Juice\n- Milk")))};(0,r.render)(a.createElement((function(){return a.createElement("div",{className:"src-demo-style-App__app--psM5k"},a.createElement("div",{className:"src-demo-style-App__header--uKNGB"},a.createElement("div",null,a.createElement("h1",{className:"src-demo-style-App__title--SKnsg"},"react-avant"),a.createElement("h2",{className:"src-demo-style-App__subtitle--MOumU"},"Collection of handy React components")),a.createElement("a",{className:"src-demo-style-App__link--sAuqO",title:"Code",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Avantgarde95/react-avant"},a.createElement(s.Icon,{definition:o.zh}))),a.createElement(p,null))}),null),document.querySelector(".Root"))}},t={};function a(e){var r=t[e];if(void 0!==r)return r.exports;var o=t[e]={exports:{}};return n[e](o,o.exports,a),o.exports}a.m=n,e=[],a.O=function(n,t,r,o){if(!t){var s=1/0;for(u=0;u<e.length;u++){t=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,c=0;c<t.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](t[c])}))?t.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var l=r();void 0!==l&&(n=l)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,r,o]},a.d=function(e,n){for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={179:0};a.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,o,s=t[0],i=t[1],c=t[2],l=0;if(s.some((function(n){return 0!==e[n]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(c)var u=c(a)}for(n&&n(t);l<s.length;l++)o=s[l],a.o(e,o)&&e[o]&&e[o][0](),e[s[l]]=0;return a.O(u)},t=self.webpackChunkreact_avant=self.webpackChunkreact_avant||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var r=a.O(void 0,[101],(function(){return a(728)}));r=a.O(r)}();