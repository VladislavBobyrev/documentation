"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[327],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),p=i,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6889:function(e,t,n){n.d(t,{ZP:function(){return f}});var r=n(3117),i=n(102),a=n(7294),o=n(4137),l=n(2511),c=n(7130),u=function(e){var t="https://github.com/feature-sliced/documentation/issues/"+e.ticket;return a.createElement("div",null,a.createElement("p",null,(0,c.I)({id:"shared.wip.title"})),a.createElement("p",null,(0,c.I)({id:"shared.wip.subtitle"})),a.createElement("ul",null,a.createElement("li",null,(0,c.I)({id:"shared.wip.var.feedback.base"}),a.createElement(l.Z,{to:t},(0,c.I)({id:"shared.wip.var.feedback.link"}))),a.createElement("li",null,(0,c.I)({id:"shared.wip.var.material.base"}),a.createElement(l.Z,{to:"https://t.me/feature_sliced"},(0,c.I)({id:"shared.wip.var.material.link"}))),a.createElement("li",null,(0,c.I)({id:"shared.wip.var.contribute.base"}),a.createElement(l.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,c.I)({id:"shared.wip.var.contribute.link"})))),a.createElement("br",null),a.createElement("p",null,a.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},s=["components"],d={toc:[]};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(u,{ticket:n.ticket,mdxType:"WIP"}))))}f.isMDXComponent=!0},2511:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(102),i=n(7294),a=n(3727),o=n(9962),l=n(2735),c=n(6136),u=(0,i.createContext)({collectLink:function(){}}),s=n(9524),d=n(3905),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,n,p=e.isNavLink,m=e.to,v=e.href,h=e.activeClassName,b=e.isActive,g=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,w=void 0===k||k,y=(0,r.Z)(e,f),O=(0,o.Z)().siteConfig,E=O.trailingSlash,N=O.baseUrl,P=(0,s.C)().withBaseUrl,j=(0,i.useContext)(u),C=m||v,x=(0,l.Z)(C),_=null==C?void 0:C.replace("pathname://",""),I=void 0!==_?(n=_,w&&function(e){return e.startsWith("/")}(n)?P(n):n):void 0;I&&x&&(I=(0,d.applyTrailingSlash)(I,{trailingSlash:E,baseUrl:N}));var T=(0,i.useRef)(!1),Z=p?a.OL:a.rU,A=c.Z.canUseIntersectionObserver,U=(0,i.useRef)();(0,i.useEffect)((function(){return!A&&x&&null!=I&&window.docusaurus.prefetch(I),function(){A&&U.current&&U.current.disconnect()}}),[U,I,A,x]);var M=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,S=!I||!x||M;return I&&x&&!M&&!g&&j.collectLink(I),S?i.createElement("a",Object.assign({href:I},C&&!x&&{target:"_blank",rel:"noopener noreferrer"},y)):i.createElement(Z,Object.assign({},y,{onMouseEnter:function(){T.current||null==I||(window.docusaurus.preload(I),T.current=!0)},innerRef:function(e){var t,n;A&&e&&x&&(t=e,n=function(){null!=I&&window.docusaurus.prefetch(I)},U.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(U.current.unobserve(t),U.current.disconnect(),n())}))})),U.current.observe(t))},to:I||""},p&&{isActive:b,activeClassName:h}))}},2735:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},9524:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(9962),i=n(2735);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,l=void 0!==o&&o,c=a.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},4136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},3905:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},3509:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},5075:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(4137)),o=n(6889),l=["components"],c={sidebar_position:5,sidebar_class_name:"sidebar-item--wip"},u="Frameworks",s={unversionedId:"get-started/alternatives/frameworks",id:"get-started/alternatives/frameworks",isDocsHomePage:!1,title:"Frameworks",description:"About applicability in the frontend",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/get-started/alternatives/frameworks.mdx",sourceDirName:"get-started/alternatives",slug:"/get-started/alternatives/frameworks",permalink:"/en/docs/get-started/alternatives/frameworks",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/get-started/alternatives/frameworks.mdx",tags:[],version:"current",lastUpdatedAt:1635073383,formattedLastUpdatedAt:"10/24/2021",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_class_name:"sidebar-item--wip"},sidebar:"getstartedSidebar",previous:{title:"Clean Architecture",permalink:"/en/docs/get-started/alternatives/clean-architecture"},next:{title:"Atomic Design",permalink:"/en/docs/get-started/alternatives/atomic-design"}},d=[{value:"About applicability in the frontend",id:"about-applicability-in-the-frontend",children:[],level:2},{value:"Methodology position",id:"methodology-position",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],f={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frameworks"},"Frameworks"),(0,a.kt)(o.ZP,{ticket:"58",mdxType:"WIP"}),(0,a.kt)("h2",{id:"about-applicability-in-the-frontend"},"About applicability in the frontend"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Why frameworks do not solve problems, why there is no single approach")),(0,a.kt)("h2",{id:"methodology-position"},"Methodology position"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Framework-agnostic, conventional-approach")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/get-started/motivation"},"(Article) About the reasons for creating the methodology (fragment about frameworks)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3867"},"(Thread) About the applicability of the methodology for different frameworks"))))}p.isMDXComponent=!0}}]);