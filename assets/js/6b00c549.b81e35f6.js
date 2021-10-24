"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2260],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6889:function(e,t,n){n.d(t,{ZP:function(){return d}});var r=n(3117),a=n(102),i=n(7294),o=n(4137),u=n(2511),c=n(7130),s=function(e){var t="https://github.com/feature-sliced/documentation/issues/"+e.ticket;return i.createElement("div",null,i.createElement("p",null,(0,c.I)({id:"shared.wip.title"})),i.createElement("p",null,(0,c.I)({id:"shared.wip.subtitle"})),i.createElement("ul",null,i.createElement("li",null,(0,c.I)({id:"shared.wip.var.feedback.base"}),i.createElement(u.Z,{to:t},(0,c.I)({id:"shared.wip.var.feedback.link"}))),i.createElement("li",null,(0,c.I)({id:"shared.wip.var.material.base"}),i.createElement(u.Z,{to:"https://t.me/feature_sliced"},(0,c.I)({id:"shared.wip.var.material.link"}))),i.createElement("li",null,(0,c.I)({id:"shared.wip.var.contribute.base"}),i.createElement(u.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,c.I)({id:"shared.wip.var.contribute.link"})))),i.createElement("br",null),i.createElement("p",null,i.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},l=["components"],p={toc:[]};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(s,{ticket:n.ticket,mdxType:"WIP"}))))}d.isMDXComponent=!0},2511:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(102),a=n(7294),i=n(3727),o=n(9962),u=n(2735),c=n(6136),s=(0,a.createContext)({collectLink:function(){}}),l=n(9524),p=n(3905),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,m=e.to,v=e.href,b=e.activeClassName,h=e.isActive,k=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,y=void 0===g||g,w=(0,r.Z)(e,d),O=(0,o.Z)().siteConfig,N=O.trailingSlash,x=O.baseUrl,E=(0,l.C)().withBaseUrl,P=(0,a.useContext)(s),_=m||v,j=(0,u.Z)(_),C=null==_?void 0:_.replace("pathname://",""),I=void 0!==C?(n=C,y&&function(e){return e.startsWith("/")}(n)?E(n):n):void 0;I&&j&&(I=(0,p.applyTrailingSlash)(I,{trailingSlash:N,baseUrl:x}));var T=(0,a.useRef)(!1),Z=f?i.OL:i.rU,U=c.Z.canUseIntersectionObserver,M=(0,a.useRef)();(0,a.useEffect)((function(){return!U&&j&&null!=I&&window.docusaurus.prefetch(I),function(){U&&M.current&&M.current.disconnect()}}),[M,I,U,j]);var S=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,q=!I||!j||S;return I&&j&&!S&&!k&&P.collectLink(I),q?a.createElement("a",Object.assign({href:I},_&&!j&&{target:"_blank",rel:"noopener noreferrer"},w)):a.createElement(Z,Object.assign({},w,{onMouseEnter:function(){T.current||null==I||(window.docusaurus.preload(I),T.current=!0)},innerRef:function(e){var t,n;U&&e&&j&&(t=e,n=function(){null!=I&&window.docusaurus.prefetch(I)},M.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),n())}))})),M.current.observe(t))},to:I||""},f&&{isActive:h,activeClassName:b}))}},2735:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},9524:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(9962),a=n(2735);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,u=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},4136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},3905:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},3509:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},3861:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(3117),a=n(102),i=(n(7294),n(4137)),o=n(6889),u=["components"],c={sidebar_position:6,sidebar_class_name:"sidebar-item--wip"},s="\u0422\u0438\u043f\u044b",l={unversionedId:"guides/examples/types",id:"guides/examples/types",isDocsHomePage:!1,title:"\u0422\u0438\u043f\u044b",description:"\u0422\u0438\u043f\u044b \u0431\u044b\u0432\u0430\u044e\u0442 \u0440\u0430\u0437\u043d\u044b\u0435",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/examples/types.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/types",permalink:"/docs/guides/examples/types",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/ru/docusaurus-plugin-content-docs/current/guides/examples/types.mdx",tags:[],version:"current",lastUpdatedAt:1635073383,formattedLastUpdatedAt:"24.10.2021",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",permalink:"/docs/guides/examples/auth"},next:{title:"Browser API",permalink:"/docs/guides/examples/browser-api"}},p=[],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0442\u0438\u043f\u044b"},"\u0422\u0438\u043f\u044b"),(0,i.kt)(o.ZP,{ticket:"179",mdxType:"WIP"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\u0422\u0438\u043f\u044b \u0431\u044b\u0432\u0430\u044e\u0442 \u0440\u0430\u0437\u043d\u044b\u0435")),(0,i.kt)("p",{parentName:"blockquote"},"\u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043a\u0430\u043a \u0441\u043b\u0443\u0436\u0435\u0431\u043d\u044b\u0439 type (",(0,i.kt)("inlineCode",{parentName:"p"},"Maybe"),"), \u0442\u0430\u043a \u0438 \u043f\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 (Tls, Contract, Camera, ...)"),(0,i.kt)("p",{parentName:"blockquote"},"1) \u0422\u043e \u0447\u0442\u043e \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043a \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043e\u0431\u044b\u0447\u043d\u043e \u043b\u0443\u0447\u0448\u0435 \u043a\u043b\u0430\u0441\u0442\u044c \u0432 shared/api (\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u043a\u043e\u0433\u0434\u0430 \u0435\u0441\u0442\u044c \u043a\u043e\u0434\u043e\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0432 \u043e\u0434\u043d\u043e \u043c\u0435\u0441\u0442\u043e)\n(\u043f\u043e entities \u0442\u0430\u043a\u043e\u0435 \u0440\u0430\u0441\u043f\u044b\u043b\u044f\u0442\u044c \u043d\u0435 \u043e\u0447 \u0432\u044b\u0439\u0434\u0435\u0442)\n2) \u041e\u0431\u0449\u0438\u0435 \u0441\u043b\u0443\u0436\u0435\u0431\u043d\u044b\u0435  \u0442\u0438\u043f\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0435\u043a\u043b\u0435\u0439\u0440\u0438\u0442\u044c - \u0432 \u0442\u043e\u0442 \u0436\u0435 react-app-env.d.ts"),(0,i.kt)("p",{parentName:"blockquote"},"3) \u0410 \u0435\u0441\u043b\u0438 \u0443 \u0442\u0435\u0431\u044f \u0441\u043b\u0443\u0436\u0435\u0431\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u0438 \u043d\u0430\u0434\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0442\u044c \u043f\u0440\u044f\u043c \u0432\u0435\u0437\u0434\u0435 - \u0442\u043e \u043d\u0435\u043a\u0440\u0438\u0442\u0438\u0447\u043d\u043e \u043e\u0441\u043e\u0431\u043e, \u043c\u043e\u0436\u043d\u043e \u0438 \u0432 shared, \u043c\u043e\u0436\u043d\u043e \u0438 \u0440\u044f\u0434\u043e\u043c \u0441 react-app.env.dts \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://t.me/feature_sliced/3879"},"https://t.me/feature_sliced/3879")),(0,i.kt)("p",{parentName:"blockquote"},"4) \u041d\u043e\u0440\u043c\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u0434\u043b\u044f \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 entities"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://t.me/feature_sliced/4513"},"https://t.me/feature_sliced/4513"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://t.me/feature_sliced/3877"},"https://t.me/feature_sliced/3877"))))}f.isMDXComponent=!0}}]);