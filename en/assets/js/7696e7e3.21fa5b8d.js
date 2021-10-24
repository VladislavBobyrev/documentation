"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4047],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6889:function(e,t,n){n.d(t,{ZP:function(){return p}});var r=n(3117),i=n(102),a=n(7294),o=n(4137),u=n(2511),c=n(7130),s=function(e){var t="https://github.com/feature-sliced/documentation/issues/"+e.ticket;return a.createElement("div",null,a.createElement("p",null,(0,c.I)({id:"shared.wip.title"})),a.createElement("p",null,(0,c.I)({id:"shared.wip.subtitle"})),a.createElement("ul",null,a.createElement("li",null,(0,c.I)({id:"shared.wip.var.feedback.base"}),a.createElement(u.Z,{to:t},(0,c.I)({id:"shared.wip.var.feedback.link"}))),a.createElement("li",null,(0,c.I)({id:"shared.wip.var.material.base"}),a.createElement(u.Z,{to:"https://t.me/feature_sliced"},(0,c.I)({id:"shared.wip.var.material.link"}))),a.createElement("li",null,(0,c.I)({id:"shared.wip.var.contribute.base"}),a.createElement(u.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,c.I)({id:"shared.wip.var.contribute.link"})))),a.createElement("br",null),a.createElement("p",null,a.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},l=["components"],d={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(s,{ticket:n.ticket,mdxType:"WIP"}))))}p.isMDXComponent=!0},2511:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(102),i=n(7294),a=n(3727),o=n(9962),u=n(2735),c=n(6136),s=(0,i.createContext)({collectLink:function(){}}),l=n(9524),d=n(3905),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,m=e.to,v=e.href,h=e.activeClassName,b=e.isActive,g=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,y=void 0===w||w,k=(0,r.Z)(e,p),O=(0,o.Z)().siteConfig,x=O.trailingSlash,j=O.baseUrl,E=(0,l.C)().withBaseUrl,N=(0,i.useContext)(s),P=m||v,C=(0,u.Z)(P),_=null==P?void 0:P.replace("pathname://",""),U=void 0!==_?(n=_,y&&function(e){return e.startsWith("/")}(n)?E(n):n):void 0;U&&C&&(U=(0,d.applyTrailingSlash)(U,{trailingSlash:x,baseUrl:j}));var I=(0,i.useRef)(!1),S=f?a.OL:a.rU,T=c.Z.canUseIntersectionObserver,Z=(0,i.useRef)();(0,i.useEffect)((function(){return!T&&C&&null!=U&&window.docusaurus.prefetch(U),function(){T&&Z.current&&Z.current.disconnect()}}),[Z,U,T,C]);var M=null!==(t=null==U?void 0:U.startsWith("#"))&&void 0!==t&&t,A=!U||!C||M;return U&&C&&!M&&!g&&N.collectLink(U),A?i.createElement("a",Object.assign({href:U},P&&!C&&{target:"_blank",rel:"noopener noreferrer"},k)):i.createElement(S,Object.assign({},k,{onMouseEnter:function(){I.current||null==U||(window.docusaurus.preload(U),I.current=!0)},innerRef:function(e){var t,n;T&&e&&C&&(t=e,n=function(){null!=U&&window.docusaurus.prefetch(U)},Z.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.current.unobserve(t),Z.current.disconnect(),n())}))})),Z.current.observe(t))},to:U||""},f&&{isActive:b,activeClassName:h}))}},2735:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},9524:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(9962),i=n(2735);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,u=void 0!==o&&o,c=a.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},4136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},3905:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},3509:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},2158:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return f}});var r=n(3117),i=n(102),a=(n(7294),n(4137)),o=n(6889),u=["components"],c={sidebar_position:10,sidebar_class_name:"sidebar-item--wip",pagination_next:"concepts/index"},s="Usage with NextJS",l={unversionedId:"guides/usage-with-nextjs",id:"guides/usage-with-nextjs",isDocsHomePage:!1,title:"Usage with NextJS",description:"About the specifics of the framework and compatibility with the methodology",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/usage-with-nextjs.mdx",sourceDirName:"guides",slug:"/guides/usage-with-nextjs",permalink:"/en/docs/guides/usage-with-nextjs",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/guides/usage-with-nextjs.mdx",tags:[],version:"current",lastUpdatedAt:1635073383,formattedLastUpdatedAt:"10/24/2021",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_class_name:"sidebar-item--wip",pagination_next:"concepts/index"},sidebar:"guidesSidebar",previous:{title:"Monorepositories",permalink:"/en/docs/guides/monorepo"},next:{title:"\ud83e\udde9 Concepts",permalink:"/en/docs/concepts"}},d=[{value:"See also",id:"see-also",children:[],level:2}],p={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usage-with-nextjs"},"Usage with NextJS"),(0,a.kt)(o.ZP,{ticket:"225",mdxType:"WIP"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"About the specifics of the framework and compatibility with the methodology")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3623"},"(Thread) About the pages directory in Extjs"))))}f.isMDXComponent=!0}}]);