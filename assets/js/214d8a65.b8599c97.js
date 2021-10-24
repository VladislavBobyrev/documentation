"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[851],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),p=i,m=f["".concat(u,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6889:function(e,t,n){n.d(t,{ZP:function(){return f}});var r=n(3117),i=n(102),a=n(7294),o=n(4137),c=n(2511),u=n(7130),l=function(e){var t="https://github.com/feature-sliced/documentation/issues/"+e.ticket;return a.createElement("div",null,a.createElement("p",null,(0,u.I)({id:"shared.wip.title"})),a.createElement("p",null,(0,u.I)({id:"shared.wip.subtitle"})),a.createElement("ul",null,a.createElement("li",null,(0,u.I)({id:"shared.wip.var.feedback.base"}),a.createElement(c.Z,{to:t},(0,u.I)({id:"shared.wip.var.feedback.link"}))),a.createElement("li",null,(0,u.I)({id:"shared.wip.var.material.base"}),a.createElement(c.Z,{to:"https://t.me/feature_sliced"},(0,u.I)({id:"shared.wip.var.material.link"}))),a.createElement("li",null,(0,u.I)({id:"shared.wip.var.contribute.base"}),a.createElement(c.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,u.I)({id:"shared.wip.var.contribute.link"})))),a.createElement("br",null),a.createElement("p",null,a.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},s=["components"],d={toc:[]};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(l,{ticket:n.ticket,mdxType:"WIP"}))))}f.isMDXComponent=!0},2511:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(102),i=n(7294),a=n(3727),o=n(9962),c=n(2735),u=n(6136),l=(0,i.createContext)({collectLink:function(){}}),s=n(9524),d=n(3905),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,n,p=e.isNavLink,m=e.to,v=e.href,h=e.activeClassName,b=e.isActive,g=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,w=void 0===k||k,y=(0,r.Z)(e,f),O=(0,o.Z)().siteConfig,N=O.trailingSlash,E=O.baseUrl,P=(0,s.C)().withBaseUrl,j=(0,i.useContext)(l),x=m||v,C=(0,c.Z)(x),_=null==x?void 0:x.replace("pathname://",""),A=void 0!==_?(n=_,w&&function(e){return e.startsWith("/")}(n)?P(n):n):void 0;A&&C&&(A=(0,d.applyTrailingSlash)(A,{trailingSlash:N,baseUrl:E}));var D=(0,i.useRef)(!1),I=p?a.OL:a.rU,Z=u.Z.canUseIntersectionObserver,T=(0,i.useRef)();(0,i.useEffect)((function(){return!Z&&C&&null!=A&&window.docusaurus.prefetch(A),function(){Z&&T.current&&T.current.disconnect()}}),[T,A,Z,C]);var U=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,S=!A||!C||U;return A&&C&&!U&&!g&&j.collectLink(A),S?i.createElement("a",Object.assign({href:A},x&&!C&&{target:"_blank",rel:"noopener noreferrer"},y)):i.createElement(I,Object.assign({},y,{onMouseEnter:function(){D.current||null==A||(window.docusaurus.preload(A),D.current=!0)},innerRef:function(e){var t,n;Z&&e&&C&&(t=e,n=function(){null!=A&&window.docusaurus.prefetch(A)},T.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.current.unobserve(t),T.current.disconnect(),n())}))})),T.current.observe(t))},to:A||""},p&&{isActive:b,activeClassName:h}))}},2735:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},9524:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(9962),i=n(2735);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,u=a.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},4136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},3905:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},3509:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},7805:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(4137)),o=n(6889),c=["components"],u={sidebar_position:6,sidebar_class_name:"sidebar-item--wip"},l="Atomic Design",s={unversionedId:"get-started/alternatives/atomic-design",id:"get-started/alternatives/atomic-design",isDocsHomePage:!1,title:"Atomic Design",description:"\u041e \u043f\u043e\u0434\u0445\u043e\u0434\u0435",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/get-started/alternatives/atomic-design.mdx",sourceDirName:"get-started/alternatives",slug:"/get-started/alternatives/atomic-design",permalink:"/docs/get-started/alternatives/atomic-design",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/ru/docusaurus-plugin-content-docs/current/get-started/alternatives/atomic-design.mdx",tags:[],version:"current",lastUpdatedAt:1635073383,formattedLastUpdatedAt:"24.10.2021",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_class_name:"sidebar-item--wip"},sidebar:"getstartedSidebar",previous:{title:"\u0424\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0438",permalink:"/docs/get-started/alternatives/frameworks"},next:{title:"\u0422\u0443\u043f\u044b\u0435 \u0438 \u0443\u043c\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b",permalink:"/docs/get-started/alternatives/smart-dumb-components"}},d=[{value:"\u041e \u043f\u043e\u0434\u0445\u043e\u0434\u0435",id:"\u043e-\u043f\u043e\u0434\u0445\u043e\u0434\u0435",children:[],level:2},{value:"\u041e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0435",id:"\u043e-\u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u0438-\u0432-\u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0435",children:[],level:2},{value:"\u041f\u043e\u0437\u0438\u0446\u0438\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438",id:"\u043f\u043e\u0437\u0438\u0446\u0438\u044f-\u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438",children:[],level:2},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"\u0441\u043c-\u0442\u0430\u043a\u0436\u0435",children:[],level:2}],f={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"atomic-design"},"Atomic Design"),(0,a.kt)(o.ZP,{ticket:"204",mdxType:"WIP"}),(0,a.kt)("h2",{id:"\u043e-\u043f\u043e\u0434\u0445\u043e\u0434\u0435"},"\u041e \u043f\u043e\u0434\u0445\u043e\u0434\u0435"),(0,a.kt)("h2",{id:"\u043e-\u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u0438-\u0432-\u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0435"},"\u041e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0435"),(0,a.kt)("h2",{id:"\u043f\u043e\u0437\u0438\u0446\u0438\u044f-\u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438"},"\u041f\u043e\u0437\u0438\u0446\u0438\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u041f\u0440\u043e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c, \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u044c \u0432 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u0438 \u0441\u043a\u043e\u0443\u043f \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043b\u043e\u0435\u0432")),(0,a.kt)("h2",{id:"\u0441\u043c-\u0442\u0430\u043a\u0436\u0435"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://atomicdesign.bradfrost.com/table-of-contents/"},"\u041c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f Atomic Design")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/1653"},"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u044c \u0432 shared/ui")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/Yi-A20x2dcA"},"(\u0412\u0438\u0434\u0435\u043e) \u041a\u0440\u0430\u0442\u043a\u043e \u043e Atomic Design")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/SnzPAr_FJ7w?t=587"},"(\u0414\u043e\u043a\u043b\u0430\u0434) \u0418\u043b\u044c\u044f \u0410\u0437\u0438\u043d - Feature Sliced (\u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u043f\u0440\u043e Atomic Design)"))))}p.isMDXComponent=!0}}]);