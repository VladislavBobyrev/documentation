"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6802],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6889:function(e,t,n){n.d(t,{ZP:function(){return p}});var r=n(3117),i=n(102),a=n(7294),o=n(4137),l=n(2511),s=n(7130),c=function(e){var t="https://github.com/feature-sliced/documentation/issues/"+e.ticket;return a.createElement("div",null,a.createElement("p",null,(0,s.I)({id:"shared.wip.title"})),a.createElement("p",null,(0,s.I)({id:"shared.wip.subtitle"})),a.createElement("ul",null,a.createElement("li",null,(0,s.I)({id:"shared.wip.var.feedback.base"}),a.createElement(l.Z,{to:t},(0,s.I)({id:"shared.wip.var.feedback.link"}))),a.createElement("li",null,(0,s.I)({id:"shared.wip.var.material.base"}),a.createElement(l.Z,{to:"https://t.me/feature_sliced"},(0,s.I)({id:"shared.wip.var.material.link"}))),a.createElement("li",null,(0,s.I)({id:"shared.wip.var.contribute.base"}),a.createElement(l.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,s.I)({id:"shared.wip.var.contribute.link"})))),a.createElement("br",null),a.createElement("p",null,a.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},u=["components"],d={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(c,{ticket:n.ticket,mdxType:"WIP"}))))}p.isMDXComponent=!0},2511:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(102),i=n(7294),a=n(3727),o=n(9962),l=n(2735),s=n(6136),c=(0,i.createContext)({collectLink:function(){}}),u=n(9524),d=n(3905),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,m=e.to,h=e.href,v=e.activeClassName,g=e.isActive,b=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,y=void 0===k||k,w=(0,r.Z)(e,p),O=(0,o.Z)().siteConfig,N=O.trailingSlash,j=O.baseUrl,x=(0,u.C)().withBaseUrl,P=(0,i.useContext)(c),E=m||h,T=(0,l.Z)(E),I=null==E?void 0:E.replace("pathname://",""),C=void 0!==I?(n=I,y&&function(e){return e.startsWith("/")}(n)?x(n):n):void 0;C&&T&&(C=(0,d.applyTrailingSlash)(C,{trailingSlash:N,baseUrl:j}));var U=(0,i.useRef)(!1),Z=f?a.OL:a.rU,_=s.Z.canUseIntersectionObserver,A=(0,i.useRef)();(0,i.useEffect)((function(){return!_&&T&&null!=C&&window.docusaurus.prefetch(C),function(){_&&A.current&&A.current.disconnect()}}),[A,C,_,T]);var M=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,S=!C||!T||M;return C&&T&&!M&&!b&&P.collectLink(C),S?i.createElement("a",Object.assign({href:C},E&&!T&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(Z,Object.assign({},w,{onMouseEnter:function(){U.current||null==C||(window.docusaurus.preload(C),U.current=!0)},innerRef:function(e){var t,n;_&&e&&T&&(t=e,n=function(){null!=C&&window.docusaurus.prefetch(C)},A.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.current.unobserve(t),A.current.disconnect(),n())}))})),A.current.observe(t))},to:C||""},f&&{isActive:g,activeClassName:v}))}},2735:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},9524:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(9962),i=n(2735);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,l=void 0!==o&&o,s=a.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},4136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},3905:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},3509:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},5687:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var r=n(3117),i=n(102),a=(n(7294),n(4137)),o=n(6889),l=["components"],s={sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},c="Migration from legacy",u={unversionedId:"guides/migration-from-legacy",id:"guides/migration-from-legacy",isDocsHomePage:!1,title:"Migration from legacy",description:"The article aggregates the experience of several companies and projects on moving to feature-sliced with different initial conditions",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/migration-from-legacy.mdx",sourceDirName:"guides",slug:"/guides/migration-from-legacy",permalink:"/en/docs/guides/migration-from-legacy",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/guides/migration-from-legacy.mdx",tags:[],version:"current",lastUpdatedAt:1635073383,formattedLastUpdatedAt:"10/24/2021",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"Routing",permalink:"/en/docs/guides/handbook/routes"},next:{title:"Migration from v1",permalink:"/en/docs/guides/migration-from-v1"}},d=[{value:"Why?",id:"why",children:[],level:2},{value:"What&#39;s the plan?",id:"whats-the-plan",children:[{value:"1. Unification of the code base",id:"1-unification-of-the-code-base",children:[],level:3},{value:"2. Putting together the destructive decoupled",id:"2-putting-together-the-destructive-decoupled",children:[],level:3},{value:"3. Allocate scopes of responsibility",id:"3-allocate-scopes-of-responsibility",children:[],level:3},{value:"4. Final ?",id:"4-final-",children:[],level:3}],level:2},{value:"See also",id:"see-also",children:[],level:2}],p={toc:d};function f(e){var t=e.components,s=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migration-from-legacy"},"Migration from legacy"),(0,a.kt)(o.ZP,{ticket:"166",mdxType:"WIP"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The article aggregates the experience of several companies and projects on moving to feature-sliced with different initial conditions")),(0,a.kt)("h2",{id:"why"},"Why?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'How much does the move need? "Death by a thousand cuts" and those debt. What is missing? How can the methodology help?')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"See the talk of ",(0,a.kt)("a",{parentName:"p",href:"http://youtu.be/aOiJ3k2UvO4"},"Ilya Klimov about the need and procedure for refactoring"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"approaches-themed-bordered",src:n(8852).Z})),(0,a.kt)("h2",{id:"whats-the-plan"},"What's the plan?"),(0,a.kt)("h3",{id:"1-unification-of-the-code-base"},"1. Unification of the code base"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"- \u251c\u2500\u2500 products/\n- |   \u251c\u2500\u2500 components/\n- |   \u251c\u2500\u2500 containers/\n- |   \u251c\u2500\u2500 store/\n- |   \u251c\u2500\u2500 styles/\n- \u251c\u2500\u2500 checkout/\n- |   \u251c\u2500\u2500 components/\n- |   \u251c\u2500\u2500 containers/\n- |   \u251c\u2500\u2500 helpers/\n- |   \u251c\u2500\u2500 styles/\n+ \u2514\u2500\u2500 src/\n      \u251c\u2500\u2500 actions/\n      \u251c\u2500\u2500 api/\n+     \u251c\u2500\u2500 components/\n+     \u251c\u2500\u2500 containers/\n      \u251c\u2500\u2500 constants/\n      \u251c\u2500\u2500 epics/\n+     \u251c\u2500\u2500 i18n/\n      \u251c\u2500\u2500 modules/\n+     \u251c\u2500\u2500 helpers/\n+     \u251c\u2500\u2500 pages/\n-     \u251c\u2500\u2500 routes/\n-     \u251c\u2500\u2500 utils/\n      \u251c\u2500\u2500 reducers/\n-     \u251c\u2500\u2500 redux/\n      \u251c\u2500\u2500 selectors/\n+     \u251c\u2500\u2500 store\n+     \u251c\u2500\u2500 styles/\n      \u251c\u2500\u2500 App.jsx\n      \u2514\u2500\u2500 index.jsx\n")),(0,a.kt)("h3",{id:"2-putting-together-the-destructive-decoupled"},"2. Putting together the destructive decoupled"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"  \u2514\u2500\u2500 src/\n-     \u251c\u2500\u2500 actions/\n      \u251c\u2500\u2500 api/\n-     \u251c\u2500\u2500 components/\n-     \u251c\u2500\u2500 containers/\n-     \u251c\u2500\u2500 constants/\n-     \u251c\u2500\u2500 epics/\n+     \u251c\u2500\u2500 entities/{...}\n+     |     \u251c\u2500\u2500 ui\n+     |     \u251c\u2500\u2500 model/{actions, selectors, ...}\n+     |     \u251c\u2500\u2500 lib\n      \u251c\u2500\u2500 i18n/\n      |   # We can temporarily put the remaining segments here\n+     \u251c\u2500\u2500 modules/{helpers, constants}\n-     \u251c\u2500\u2500 helpers/\n      \u251c\u2500\u2500 pages/\n-     \u251c\u2500\u2500 reducers/\n-     \u251c\u2500\u2500 selectors/\n-     \u251c\u2500\u2500 store/\n      \u251c\u2500\u2500 styles/\n      \u251c\u2500\u2500 App.jsx\n      \u2514\u2500\u2500 index.jsx\n")),(0,a.kt)("h3",{id:"3-allocate-scopes-of-responsibility"},"3. Allocate scopes of responsibility"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"}," \u2514\u2500\u2500 src/\n-    \u251c\u2500\u2500 api/\n+    \u251c\u2500\u2500 app/\n+    |   \u251c\u2500\u2500 index.jsx\n+    |   \u251c\u2500\u2500 style.css\n     \u251c\u2500\u2500 pages/\n+    \u251c\u2500\u2500 features/\n+    |   \u251c\u2500\u2500 add-to-cart/{ui, model, lib}\n+    |   \u251c\u2500\u2500 choose-delivery/{ui, model, lib}\n+    \u251c\u2500\u2500 entities/{...}\n+    |   \u251c\u2500\u2500 delivery/{ui, model, lib}\n+    |   \u251c\u2500\u2500 cart/{ui, model, lib}\n+    |   \u251c\u2500\u2500 product/{ui, model, lib}\n+    \u251c\u2500\u2500 shared/\n+    |   \u251c\u2500\u2500 api/\n+    |   \u251c\u2500\u2500 lib/    # helpers\n+    |   |    \u251c\u2500\u2500 i18n/\n+    |   \u251c\u2500\u2500 config/ # constants\n-    \u251c\u2500\u2500 i18n/\n-    \u251c\u2500\u2500 modules/{helpers, constants}\n     \u2514\u2500\u2500 index.jsx\n")),(0,a.kt)("h3",{id:"4-final-"},"4. Final ?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"About the remaining problems and how much it is worth eliminating them")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/aOiJ3k2UvO4"},"(Talk) Ilya Klimov-The Rat Race of endless refactoring: how not to let technical debt kill motivation and product")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/SnzPAr_FJ7w"},"(Talk) Ilya Azin - Architecture of Frontend projects"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"There is also discussed approaches for architecture and costs of refactoring")))))}f.isMDXComponent=!0},8852:function(e,t,n){t.Z=n.p+"assets/images/approaches-a6bdea3f5ff95cb01c5d2e1dcaa69375.png"}}]);