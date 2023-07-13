"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[1752],{9613:(A,t,e)=>{e.d(t,{Zo:()=>s,kt:()=>F});var o=e(9496);function a(A,t,e){return t in A?Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}function n(A,t){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable}))),e.push.apply(e,o)}return e}function r(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?n(Object(e),!0).forEach((function(t){a(A,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(e,t))}))}return A}function i(A,t){if(null==A)return{};var e,o,a=function(A,t){if(null==A)return{};var e,o,a={},n=Object.keys(A);for(o=0;o<n.length;o++)e=n[o],t.indexOf(e)>=0||(a[e]=A[e]);return a}(A,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(o=0;o<n.length;o++)e=n[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(a[e]=A[e])}return a}var l=o.createContext({}),g=function(A){var t=o.useContext(l),e=t;return A&&(e="function"==typeof A?A(t):r(r({},t),A)),e},s=function(A){var t=g(A.components);return o.createElement(l.Provider,{value:t},A.children)},C={inlineCode:"code",wrapper:function(A){var t=A.children;return o.createElement(o.Fragment,{},t)}},U=o.forwardRef((function(A,t){var e=A.components,a=A.mdxType,n=A.originalType,l=A.parentName,s=i(A,["components","mdxType","originalType","parentName"]),U=g(e),F=a,c=U["".concat(l,".").concat(F)]||U[F]||C[F]||n;return e?o.createElement(c,r(r({ref:t},s),{},{components:e})):o.createElement(c,r({ref:t},s))}));function F(A,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof A||a){var n=e.length,r=new Array(n);r[0]=U;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=A,i.mdxType="string"==typeof A?A:a,r[1]=i;for(var g=2;g<n;g++)r[g]=e[g];return o.createElement.apply(null,r)}return o.createElement.apply(null,e)}U.displayName="MDXCreateElement"},2253:(A,t,e)=>{e.d(t,{ZP:()=>i});var o=e(6600),a=(e(9496),e(9613)),n=e(1480);const r={toc:[]};function i(A){let{components:t,...e}=A;return(0,a.kt)("wrapper",(0,o.Z)({},r,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,(0,o.Z)({},e,{mdxType:"NavCard"})))}i.isMDXComponent=!0},7861:(A,t,e)=>{e.d(t,{ga:()=>o});var o={};e.r(o),e.d(o,{CATEGORIES:()=>n,sendEvent:()=>a});const a=A=>{let{category:t,action:e,label:o,value:a}=A;if(void 0!==typeof window&&window.ga)return window.ga("send",{hitType:"event",eventCategory:t,eventAction:e,eventLabel:o,eventValue:a})},n={full:"Feedback 1.2 (full)",mixed:"Feedback 1.2 (mixed)",short:"Feedback 1.2 (short)"}},1480:(A,t,e)=>{e.d(t,{J:()=>l,Z:()=>s});var o=e(9496),a=e(1626),n=e(2484),r=e(7861);const i={root:"root_GfON",rootDisabled:"rootDisabled_SFUB",details:"details_xxkR",detailsTags:"detailsTags_uTQx",icon:"icon_ciqP",title:"title_pSH5",description:"description__Fep",miniTheme:"miniTheme_ePfp",primaryTheme:"primaryTheme_CilO",defaultTheme:"defaultTheme_j3I8"},l=A=>{const{title:t,description:e,to:l,Icon:s,tags:C,className:U,disabled:F,theme:c="default"}=A,m=(0,o.useCallback)((()=>{r.ga.sendEvent({category:r.ga.CATEGORIES.full,action:"NavRow:Click",label:l})}),[l]);return o.createElement(n.Z,{className:(0,a.Z)(i.root,U,F&&i.rootDisabled,i[`${c}Theme`]),to:l,onClick:m},o.createElement(g,{Icon:s}),o.createElement("div",{className:i.details},o.createElement("div",{className:i.detailsMain},o.createElement("span",{className:i.title},t),o.createElement("p",{className:i.description},e)),C&&o.createElement("div",{className:i.detailsTags},C.join(" \u2022 "))))},g=A=>{let{Icon:t}=A;return t?"string"==typeof t?o.createElement("span",{className:i.icon},t):o.createElement(t,{className:i.icon}):null},s=l},7272:(A,t,e)=>{e.r(t),e.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>U,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=e(6600),a=(e(9496),e(9613)),n=e(2253);e(2484);const r={sidebar_position:1,slug:"/",pagination_next:"get-started/index"},i="Hujjatlar",l={unversionedId:"intro",id:"intro",title:"Hujjatlar",description:"feature-sliced-banner",source:"@site/i18n/uz/docusaurus-plugin-content-docs/current/intro.mdx",sourceDirName:".",slug:"/",permalink:"/uz/docs/",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/uz/docusaurus-plugin-content-docs/current/intro.mdx",tags:[],version:"current",lastUpdatedAt:1689247643,formattedLastUpdatedAt:"13-iyl, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",pagination_next:"get-started/index"},next:{title:"\ud83d\ude80 Get Started",permalink:"/uz/docs/get-started/"}},g={},s=[],C={toc:s};function U(A){let{components:t,...r}=A;return(0,a.kt)("wrapper",(0,o.Z)({},C,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hujjatlar"},"Hujjatlar"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"feature-sliced-banner",src:e(2447).Z,width:"1400",height:"320"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Feature-Sliced Design")," (FSD) \u2014 bu frontend ilovalarini loyihalash uchun arxitektura metodologiyasi. Oddiy qilib aytganda, bu kodni tashkil qilish uchun qoidalar va konventsiyalar to'plami. Metodologiyaning asosiy maqsadi loyihani tushunarli va tizimli qilishdir, ayniqsa biznes talablarining muntazam o'zgarishi sharoitida."),(0,a.kt)(n.ZP,{theme:"primary",Icon:"\ud83c\udf70",title:"FSDda tajribangiz yo'qmi?",description:"Asoslarni va metodologiyaning qisqacha sharhini organing",to:"/docs/get-started/overview",mdxType:"NavCard"}),(0,a.kt)("br",null),(0,a.kt)(n.ZP,{theme:"mini",title:"\ud83d\ude80 Boshlash",description:"Asosiy tushunchalar va tuzilmalar bo'yicha ekskursiya, shuningdek, React bo'yicha loyihaning batafsil tahlili",to:"/docs/get-started",tags:["Asoslari","Qo'llanmalar","Motivatsiya"],mdxType:"NavCard"}),(0,a.kt)(n.ZP,{theme:"mini",title:"\ud83c\udfaf Qo'llanmalar",description:"Feature-Sliced Design bo'yicha amaliy qo'llanmalar va qo'llash misollari",to:"/docs/guides",tags:["v1","Legasi","Misollar"],mdxType:"NavCard"}),(0,a.kt)(n.ZP,{theme:"mini",title:"\ud83d\udcda Malumot",description:"Asosiy tushunchalar va tushunchalar haqida ma'lumot (amalda yaxshiroq qo'llash uchun)",to:"/docs/reference",tags:["Yunitlar","Izolyatsiya","Ommaviy API"],mdxType:"NavCard"}),(0,a.kt)(n.ZP,{theme:"mini",title:"\ud83c\udf70 Metodologiya haqida",description:"Metodologiya falsafasi, uning maqsadlari va zamonaviy frontenddagi o'rni",to:"/docs/about",tags:["Missiya","Rag'batlantirish va integratsiya"],mdxType:"NavCard"}),(0,a.kt)(n.ZP,{theme:"mini",title:"\ud83d\udcab Jamiyat",description:"Hamjamiyat tomonidan qo\u02bbshilgan manbalar va qo\u02bbshimcha kontent",to:"/community",tags:["Awesome","Komanda","Loyihada ishtirok etish"],mdxType:"NavCard"}),(0,a.kt)(n.ZP,{theme:"mini",title:"\ud83d\udee0 Misollar",description:"Feature-Sliced Design da qurilgan loyihalar",to:"/examples",mdxType:"NavCard"}))}U.isMDXComponent=!0},1626:(A,t,e)=>{function o(A){var t,e,a="";if("string"==typeof A||"number"==typeof A)a+=A;else if("object"==typeof A)if(Array.isArray(A))for(t=0;t<A.length;t++)A[t]&&(e=o(A[t]))&&(a&&(a+=" "),a+=e);else for(t in A)A[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var A,t,e=0,a="";e<arguments.length;)(A=arguments[e++])&&(t=o(A))&&(a&&(a+=" "),a+=t);return a}e.d(t,{Z:()=>a})},2447:(A,t,e)=>{e.d(t,{Z:()=>o});const o="data:image/jpeg;base64,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"}}]);