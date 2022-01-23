!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("prismjs"),require("react"),require("react-markdown"));else if("function"==typeof define&&define.amd)define(["prismjs","react","react-markdown"],t);else{var n="object"==typeof exports?t(require("prismjs"),require("react"),require("react-markdown")):t(e.prismjs,e.react,e["react-markdown"]);for(var a in n)("object"==typeof exports?exports:e)[a]=n[a]}}(this,(function(e,t,n){return function(){var a,r,s={233:function(){!function(e){var t=e.util.clone(e.languages.javascript),n="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function a(e,t){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return n})),RegExp(e,t)}n=a(n).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=a("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:a("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:a("=<BRACES>"),inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var r=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(r).join(""):""},s=function(t){for(var n=[],a=0;a<t.length;a++){var o=t[a],i=!1;if("string"!=typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?0<n.length&&n[n.length-1].tagName===r(o.content[0].content[1])&&n.pop():"/>"===o.content[o.content.length-1].content||n.push({tagName:r(o.content[0].content[1]),openedBraces:0}):0<n.length&&"punctuation"===o.type&&"{"===o.content?n[n.length-1].openedBraces++:0<n.length&&0<n[n.length-1].openedBraces&&"punctuation"===o.type&&"}"===o.content?n[n.length-1].openedBraces--:i=!0),(i||"string"==typeof o)&&0<n.length&&0===n[n.length-1].openedBraces){var c=r(o);a<t.length-1&&("string"==typeof t[a+1]||"plain-text"===t[a+1].type)&&(c+=r(t[a+1]),t.splice(a+1,1)),0<a&&("string"==typeof t[a-1]||"plain-text"===t[a-1].type)&&(c=r(t[a-1])+c,t.splice(a-1,1),a--),t[a]=new e.Token("plain-text",c,null,c)}o.content&&"string"!=typeof o.content&&s(o.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||s(e.tokens)}))}(Prism)},833:function(){!function(e){var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t);var n=e.languages.tsx.tag;n.pattern=RegExp("(^|[^\\w$]|(?=</))(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0}(Prism)},456:function(){!function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter;var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript}(Prism)},176:function(e,t,n){"use strict";n.d(t,{Code:function(){return o}});var a=n(156),r=n.n(a),s=n(775),o=(n(233),n(456),n(833),function(e){var t=e.language,n=e.className,o=e.children,i=(0,a.useCallback)((function(e){null!==e&&(0,s.highlightElement)(e)}),[]);return r().createElement("pre",{className:n},r().createElement("code",{className:void 0!==t?"language-".concat(t):"",ref:i},o))})},775:function(t){"use strict";t.exports=e},156:function(e){"use strict";e.exports=t},859:function(e){"use strict";e.exports=n}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return s[e](n,n.exports,i),n.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var n=Object.create(null);i.r(n);var s={};a=a||[null,r({}),r([]),r(r)];for(var o=2&t&&e;"object"==typeof o&&!~a.indexOf(o);o=r(o))Object.getOwnPropertyNames(o).forEach((function(t){s[t]=function(){return e[t]}}));return s.default=function(){return e},i.d(n,s),n},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return function(){"use strict";i.r(c),i.d(c,{defaultMarkdownMapper:function(){return r},Markdown:function(){return s}});var e=i(156),t=i.n(e),n=i(176),a=(0,e.lazy)((function(){return Promise.resolve().then(i.t.bind(i,859,23))})),r={code:function(e){var a=e.inline,r=e.className,s=e.children,o=void 0!==r&&r.startsWith("language-")?r.substring(9):void 0;return a?t().createElement("code",{className:"InlineCodeView"},s):t().createElement(n.Code,{language:o},s)}},s=function(n){var s=n.className,o=n.fallback,i=n.children,c=n.mapper,u=void 0===c?r:c;return t().createElement(e.Suspense,{fallback:o},t().createElement(a,{className:s,components:u},i))}}(),c}()}));