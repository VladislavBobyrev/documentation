"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6746],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),p=i,m=f["".concat(u,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6889:function(e,t,n){n.d(t,{ZP:function(){return f}});var r=n(3117),i=n(102),a=n(7294),o=n(4137),l=n(2511),u=n(7130),c=function(e){var t="https://github.com/feature-sliced/documentation/issues/"+e.ticket;return a.createElement("div",null,a.createElement("p",null,(0,u.I)({id:"shared.wip.title"})),a.createElement("p",null,(0,u.I)({id:"shared.wip.subtitle"})),a.createElement("ul",null,a.createElement("li",null,(0,u.I)({id:"shared.wip.var.feedback.base"}),a.createElement(l.Z,{to:t},(0,u.I)({id:"shared.wip.var.feedback.link"}))),a.createElement("li",null,(0,u.I)({id:"shared.wip.var.material.base"}),a.createElement(l.Z,{to:"https://t.me/feature_sliced"},(0,u.I)({id:"shared.wip.var.material.link"}))),a.createElement("li",null,(0,u.I)({id:"shared.wip.var.contribute.base"}),a.createElement(l.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,u.I)({id:"shared.wip.var.contribute.link"})))),a.createElement("br",null),a.createElement("p",null,a.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},s=["components"],d={toc:[]};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(c,{ticket:n.ticket,mdxType:"WIP"}))))}f.isMDXComponent=!0},2511:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(102),i=n(7294),a=n(3727),o=n(9962),l=n(2735),u=n(6136),c=(0,i.createContext)({collectLink:function(){}}),s=n(9524),d=n(3905),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,n,p=e.isNavLink,m=e.to,v=e.href,b=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,w=void 0===k||k,y=(0,r.Z)(e,f),O=(0,o.Z)().siteConfig,N=O.trailingSlash,E=O.baseUrl,P=(0,s.C)().withBaseUrl,j=(0,i.useContext)(c),I=m||v,B=(0,l.Z)(I),C=null==I?void 0:I.replace("pathname://",""),x=void 0!==C?(n=C,w&&function(e){return e.startsWith("/")}(n)?P(n):n):void 0;x&&B&&(x=(0,d.applyTrailingSlash)(x,{trailingSlash:N,baseUrl:E}));var Z=(0,i.useRef)(!1),_=p?a.OL:a.rU,M=u.Z.canUseIntersectionObserver,T=(0,i.useRef)();(0,i.useEffect)((function(){return!M&&B&&null!=x&&window.docusaurus.prefetch(x),function(){M&&T.current&&T.current.disconnect()}}),[T,x,M,B]);var U=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,D=!x||!B||U;return x&&B&&!U&&!g&&j.collectLink(x),D?i.createElement("a",Object.assign({href:x},I&&!B&&{target:"_blank",rel:"noopener noreferrer"},y)):i.createElement(_,Object.assign({},y,{onMouseEnter:function(){Z.current||null==x||(window.docusaurus.preload(x),Z.current=!0)},innerRef:function(e){var t,n;M&&e&&B&&(t=e,n=function(){null!=x&&window.docusaurus.prefetch(x)},T.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.current.unobserve(t),T.current.disconnect(),n())}))})),T.current.observe(t))},to:x||""},p&&{isActive:h,activeClassName:b}))}},2735:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},9524:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(9962),i=n(2735);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,l=void 0!==o&&o,u=a.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},4136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},3905:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},3509:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1361:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(4137)),o=n(6889),l=["components"],u={sidebar_position:1,sidebar_class_name:"sidebar-item--wip"},c="Big Ball of Mud",s={unversionedId:"get-started/alternatives/big-ball-of-mud",id:"get-started/alternatives/big-ball-of-mud",isDocsHomePage:!1,title:"Big Ball of Mud",description:"\u0427\u0442\u043e \u044d\u0442\u043e",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/get-started/alternatives/big-ball-of-mud.mdx",sourceDirName:"get-started/alternatives",slug:"/get-started/alternatives/big-ball-of-mud",permalink:"/docs/get-started/alternatives/big-ball-of-mud",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/ru/docusaurus-plugin-content-docs/current/get-started/alternatives/big-ball-of-mud.mdx",tags:[],version:"current",lastUpdatedAt:1635073383,formattedLastUpdatedAt:"24.10.2021",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"sidebar-item--wip"},sidebar:"getstartedSidebar",previous:{title:"\u041f\u043b\u044e\u0441\u044b \u0438 \u041c\u0438\u043d\u0443\u0441\u044b",permalink:"/docs/get-started/onboard/pros-cons"},next:{title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",permalink:"/docs/get-started/alternatives/design-principles"}},d=[{value:"\u0427\u0442\u043e \u044d\u0442\u043e",id:"\u0447\u0442\u043e-\u044d\u0442\u043e",children:[],level:2},{value:"\u041f\u043e\u0447\u0435\u043c\u0443 \u0442\u0430\u043a \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043e",id:"\u043f\u043e\u0447\u0435\u043c\u0443-\u0442\u0430\u043a-\u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043e",children:[],level:2},{value:"\u041a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442 \u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b",id:"\u043a\u043e\u0433\u0434\u0430-\u044d\u0442\u043e-\u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442-\u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442\u044c-\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b",children:[],level:2},{value:"\u041a\u0430\u043a \u0431\u044b\u0442\u044c",id:"\u043a\u0430\u043a-\u0431\u044b\u0442\u044c",children:[],level:2},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"\u0441\u043c-\u0442\u0430\u043a\u0436\u0435",children:[],level:2}],f={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"big-ball-of-mud"},"Big Ball of Mud"),(0,a.kt)(o.ZP,{ticket:"258",mdxType:"WIP"}),(0,a.kt)("h2",{id:"\u0447\u0442\u043e-\u044d\u0442\u043e"},"\u0427\u0442\u043e \u044d\u0442\u043e"),(0,a.kt)("h2",{id:"\u043f\u043e\u0447\u0435\u043c\u0443-\u0442\u0430\u043a-\u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043e"},"\u041f\u043e\u0447\u0435\u043c\u0443 \u0442\u0430\u043a \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043e"),(0,a.kt)("h2",{id:"\u043a\u043e\u0433\u0434\u0430-\u044d\u0442\u043e-\u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442-\u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442\u044c-\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b"},"\u041a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442 \u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b"),(0,a.kt)("h2",{id:"\u043a\u0430\u043a-\u0431\u044b\u0442\u044c"},"\u041a\u0430\u043a \u0431\u044b\u0442\u044c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u0418 \u043a\u0430\u043a \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0432 \u044d\u0442\u043e\u043c FeatureSliced")),(0,a.kt)("h2",{id:"\u0441\u043c-\u0442\u0430\u043a\u0436\u0435"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://oleg008.medium.com/last-words-on-ui-architecture-before-an-ai-takes-over-468c78f18f0d"},"(\u0421\u0442\u0430\u0442\u044c\u044f) Oleg Isonen - Last words on UI architecture before an AI takes over")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/gna4Ynz1YNI"},"(\u0414\u043e\u043a\u043b\u0430\u0434) \u042e\u043b\u0438\u044f \u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u0430, iSpring - Big Ball of Mud \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u043c\u043e\u043d\u043e\u043b\u0438\u0442\u0430, \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u043c\u044b \u0441\u043f\u0440\u0430\u0432\u0438\u043b\u0438\u0441\u044c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://thedomaindrivendesign.io/big-ball-of-mud/"},"(\u0421\u0442\u0430\u0442\u044c\u044f) DDD - Big Ball of mud"))))}p.isMDXComponent=!0}}]);