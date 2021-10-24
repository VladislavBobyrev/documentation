"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[273],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6889:function(e,t,n){n.d(t,{ZP:function(){return p}});var r=n(3117),a=n(102),o=n(7294),i=n(4137),s=n(2511),c=n(7130),u=function(e){var t="https://github.com/feature-sliced/documentation/issues/"+e.ticket;return o.createElement("div",null,o.createElement("p",null,(0,c.I)({id:"shared.wip.title"})),o.createElement("p",null,(0,c.I)({id:"shared.wip.subtitle"})),o.createElement("ul",null,o.createElement("li",null,(0,c.I)({id:"shared.wip.var.feedback.base"}),o.createElement(s.Z,{to:t},(0,c.I)({id:"shared.wip.var.feedback.link"}))),o.createElement("li",null,(0,c.I)({id:"shared.wip.var.material.base"}),o.createElement(s.Z,{to:"https://t.me/feature_sliced"},(0,c.I)({id:"shared.wip.var.material.link"}))),o.createElement("li",null,(0,c.I)({id:"shared.wip.var.contribute.base"}),o.createElement(s.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,c.I)({id:"shared.wip.var.contribute.link"})))),o.createElement("br",null),o.createElement("p",null,o.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},l=["components"],d={toc:[]};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(u,{ticket:n.ticket,mdxType:"WIP"}))))}p.isMDXComponent=!0},2511:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(102),a=n(7294),o=n(3727),i=n(9962),s=n(2735),c=n(6136),u=(0,a.createContext)({collectLink:function(){}}),l=n(9524),d=n(3905),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,m=e.to,v=e.href,b=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,y=void 0===k||k,w=(0,r.Z)(e,p),O=(0,i.Z)().siteConfig,P=O.trailingSlash,E=O.baseUrl,C=(0,l.C)().withBaseUrl,N=(0,a.useContext)(u),j=m||v,x=(0,s.Z)(j),I=null==j?void 0:j.replace("pathname://",""),T=void 0!==I?(n=I,y&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;T&&x&&(T=(0,d.applyTrailingSlash)(T,{trailingSlash:P,baseUrl:E}));var Z=(0,a.useRef)(!1),_=f?o.OL:o.rU,M=c.Z.canUseIntersectionObserver,U=(0,a.useRef)();(0,a.useEffect)((function(){return!M&&x&&null!=T&&window.docusaurus.prefetch(T),function(){M&&U.current&&U.current.disconnect()}}),[U,T,M,x]);var D=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,S=!T||!x||D;return T&&x&&!D&&!g&&N.collectLink(T),S?a.createElement("a",Object.assign({href:T},j&&!x&&{target:"_blank",rel:"noopener noreferrer"},w)):a.createElement(_,Object.assign({},w,{onMouseEnter:function(){Z.current||null==T||(window.docusaurus.preload(T),Z.current=!0)},innerRef:function(e){var t,n;M&&e&&x&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},U.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(U.current.unobserve(t),U.current.disconnect(),n())}))})),U.current.observe(t))},to:T||""},f&&{isActive:h,activeClassName:b}))}},2735:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},9524:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(9962),a=n(2735);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},4136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,o=e.split(/[#?]/)[0],i="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,i)}},3905:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},3509:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},8170:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return f}});var r=n(3117),a=n(102),o=(n(7294),n(4137)),i=n(6889),s=["components"],c={sidebar_position:5,sidebar_class_name:"sidebar-item--wip"},u="Pros & Cons",l={unversionedId:"get-started/onboard/pros-cons",id:"get-started/onboard/pros-cons",isDocsHomePage:!1,title:"Pros & Cons",description:"Profits and Costs from methodology",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/get-started/onboard/pros-cons.mdx",sourceDirName:"get-started/onboard",slug:"/get-started/onboard/pros-cons",permalink:"/en/docs/get-started/onboard/pros-cons",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/get-started/onboard/pros-cons.mdx",tags:[],version:"current",lastUpdatedAt:1635073383,formattedLastUpdatedAt:"10/24/2021",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_class_name:"sidebar-item--wip"},sidebar:"getstartedSidebar",previous:{title:"Integration into team",permalink:"/en/docs/get-started/onboard/for-team"},next:{title:"Big Ball of Mud",permalink:"/en/docs/get-started/alternatives/big-ball-of-mud"}},d=[{value:"Advantages",id:"advantages",children:[],level:2},{value:"Disadvantages",id:"disadvantages",children:[],level:2}],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pros--cons"},"Pros & Cons"),(0,o.kt)(i.ZP,{ticket:"145",mdxType:"WIP"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Profits and Costs from methodology")),(0,o.kt)("h2",{id:"advantages"},"Advantages"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"/docs/get-started/overview"},"+ Overview"),", CodeReview, Onboarding")),(0,o.kt)("h2",{id:"disadvantages"},"Disadvantages"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Mental complexity and entry threshold, Many layers, Typical problems of feature-based approaches")))}f.isMDXComponent=!0}}]);