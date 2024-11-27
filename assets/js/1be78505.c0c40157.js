"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514,75],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,b=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3042:function(e,t,n){n.r(t),n.d(t,{default:function(){return ye}});var r=n(7294),a=n(3905),o=n(6291),l=n(7019),i=n(6010),c=n(3616),s=n(3783),u=n(5537),d=n(7462);var m=function(e){return r.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(5999),b=n(3366),h=n(9960),f=n(3919),y=n(541),v={menuLinkText:"menuLinkText_OKON",hasHref:"hasHref_TwRn"},g=n(2389),k=["items"],E=["item"],T=["item","onItemClick","activePath","level"],N=["item","onItemClick","activePath","level"],Z=(0,r.memo)((function(e){var t=e.items,n=(0,b.Z)(e,k);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(C,(0,d.Z)({key:t,item:e},n))})))}));function C(e){var t=e.item,n=(0,b.Z)(e,E);return"category"===t.type?0===t.items.length?null:r.createElement(_,(0,d.Z)({item:t},n)):r.createElement(S,(0,d.Z)({item:t},n))}function _(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=e.level,s=(0,b.Z)(e,T),u=n.items,m=n.label,f=n.collapsible,y=n.className,k=n.href,E=function(e){var t=(0,g.Z)();return(0,r.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(n),N=(0,c._F)(n,o),C=(0,c.uR)({initialState:function(){return!!f&&(!N&&n.collapsed)}}),_=C.collapsed,S=C.setCollapsed,O=C.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,o=(0,c.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&a(!1)}),[t,o,n,a])}({isActive:N,collapsed:_,setCollapsed:S}),r.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":_},y)},r.createElement("div",{className:"menu__list-item-collapsible"},r.createElement(h.Z,(0,d.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":f&&!k,"menu__link--active":N},t[v.menuLinkText]=!f,t[v.hasHref]=!!E,t)),onClick:f?function(e){null==a||a(n),k?S(!1):(e.preventDefault(),O())}:function(){null==a||a(n)},href:f?null!=E?E:"#":E},s),m),k&&f&&r.createElement("button",{"aria-label":(0,p.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:m}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),O()}})),r.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},r.createElement(Z,{items:u,tabIndex:_?-1:0,onItemClick:a,activePath:o,level:l+1})))}function S(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=e.level,l=(0,b.Z)(e,N),s=t.href,u=t.label,m=t.className,p=(0,c._F)(t,a);return r.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:u},r.createElement(h.Z,(0,d.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},l),(0,f.Z)(s)?u:r.createElement("span",null,u,r.createElement(y.Z,null))))}var O={sidebar:"sidebar_a3j0",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_VlPv",sidebarHidden:"sidebarHidden_OqfG",sidebarLogo:"sidebarLogo_hmkv",menu:"menu_cyFh",menuWithAnnouncementBar:"menuWithAnnouncementBar_+O1J",collapseSidebarButton:"collapseSidebarButton_eoK2",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_e+kA",sidebarMenuIcon:"sidebarMenuIcon_iZzd",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_6kU2"};function I(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",O.collapseSidebarButton),onClick:t},r.createElement(m,{className:O.collapseSidebarButtonIcon}))}function P(e){var t,n,a=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,d=function(){var e=(0,c.nT)().isActive,t=(0,r.useState)(e),n=t[0],a=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&a(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),p=m.navbar.hideOnScroll,b=m.hideableSidebar;return r.createElement("div",{className:(0,i.Z)(O.sidebar,(t={},t[O.sidebarWithHideableNavbar]=p,t[O.sidebarHidden]=s,t))},p&&r.createElement(u.Z,{tabIndex:-1,className:O.sidebarLogo}),r.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",O.menu,(n={},n[O.menuWithAnnouncementBar]=d,n))},r.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},r.createElement(Z,{items:o,activePath:a,level:1}))),b&&r.createElement(I,{onClick:l}))}var w=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path;return r.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},r.createElement(Z,{items:n,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function L(e){return r.createElement(c.Cv,{component:w,props:e})}var x=r.memo(P),B=r.memo(L);function M(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(x,e),a&&r.createElement(B,e))}var A=n(2859),j={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},D={Prism:n(7410).default,theme:j};function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(){return R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}var H=/\r\n|\r|\n/,W=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},z=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function U(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var V=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),F(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=R({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=R({},n,{backgroundColor:null}),a}(e.theme,e.language):void 0;return t.themeDict=n})),F(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=R({},U(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?R({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),F(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),F(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=R({},U(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?R({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),F(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=z(u,d.type),d.alias&&(u=z(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(H),p=m.length;i.push({types:u,content:m[0]});for(var b=1;b<p;b++)W(i),c.push(i=[]),i.push({types:u,content:m[b]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return W(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),q=V;var Y={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},J=n(5350),K=function(){var e=(0,c.LU)().prism,t=(0,J.Z)().isDarkTheme,n=e.theme||Y,r=e.darkTheme||n;return t?r:n},Q="codeBlockContainer_J+bg",X="codeBlockContent_csEI",G="codeBlockTitle_oQzk",$="codeBlock_rtdJ",ee="copyButton_M3SB",te="codeBlockLines_1zSZ";function ne(e){var t,n=e.children,a=e.className,o=e.metastring,l=e.title,s=(0,c.LU)().prism,u=(0,r.useState)(!1),m=u[0],b=u[1],h=(0,r.useState)(!1),f=h[0],y=h[1];(0,r.useEffect)((function(){y(!0)}),[]);var v=(0,c.bc)(o)||l,g=K(),k=Array.isArray(n)?n.join(""):n,E=null!=(t=(0,c.Vo)(a))?t:s.defaultLanguage,T=(0,c.nZ)(k,o,E),N=T.highlightLines,Z=T.code,C=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(l.removeAllRanges(),l.addRange(i)),o&&o.focus()}(Z),b(!0),setTimeout((function(){return b(!1)}),2e3)};return r.createElement(q,(0,d.Z)({},D,{key:String(f),theme:g,code:Z,language:E}),(function(e){var t=e.className,n=e.style,o=e.tokens,l=e.getLineProps,s=e.getTokenProps;return r.createElement("div",{className:(0,i.Z)(Q,a,c.kM.common.codeBlock)},v&&r.createElement("div",{style:n,className:G},v),r.createElement("div",{className:(0,i.Z)(X,E)},r.createElement("pre",{tabIndex:0,className:(0,i.Z)(t,$,"thin-scrollbar"),style:n},r.createElement("code",{className:te},o.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=l({line:e,key:t});return N.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,d.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,d.Z)({key:t},s({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement("button",{type:"button","aria-label":(0,p.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,i.Z)(ee,"clean-btn"),onClick:C},m?r.createElement(p.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(p.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var re=n(9649),ae="details_h+cY";function oe(e){var t=Object.assign({},e);return r.createElement(c.PO,(0,d.Z)({},t,{className:(0,i.Z)("alert alert--info",ae,t.className)}))}var le=["mdxType","originalType"];var ie={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,b.Z)(a,le));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(A.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(ne,e):r.createElement("code",e)},a:function(e){return r.createElement(h.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(n)&&(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:r.createElement(ne,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(oe,(0,d.Z)({},e,{summary:n}),a)},h1:(0,re.Z)("h1"),h2:(0,re.Z)("h2"),h3:(0,re.Z)("h3"),h4:(0,re.Z)("h4"),h5:(0,re.Z)("h5"),h6:(0,re.Z)("h6")},ce=n(4608),se="backToTopButton_i9tI",ue="backToTopButtonShow_wCmF",de=!1;function me(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=de?(window.scrollTo({top:0,behavior:"smooth"}),function(){}):(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var pe=function(){var e,t=(0,r.useState)(!1),n=t[0],a=t[1],o=(0,r.useRef)(!1),l=me(),s=l.smoothScrollTop,u=l.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(o.current)o.current=!1;else{var l=n<r;if(l||u(),n<300)a(!1);else if(l){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&a(!0)}else a(!1)}})),(0,c.SL)((function(e){e.location.hash&&(o.current=!0,a(!1))})),r.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,se,(e={},e[ue]=n,e)),type:"button",onClick:function(){return s()}})},be=n(6775),he={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"};function fe(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,b=e.sidebarName,h=(0,c.Vq)(),f=u.pluginId,y=u.version,v=(0,r.useState)(!1),g=v[0],k=v[1],E=(0,r.useState)(!1),T=E[0],N=E[1],Z=(0,r.useCallback)((function(){T&&N(!1),k((function(e){return!e}))}),[T]);return r.createElement(l.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadata:{version:y,tag:(0,c.os)(f,y)}},r.createElement("div",{className:he.docPage},r.createElement(pe,null),h&&r.createElement("aside",{className:(0,i.Z)(he.docSidebarContainer,(t={},t[he.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(he.docSidebarContainer)&&g&&N(!0)}},r.createElement(M,{key:b,sidebar:h,path:s.path,onCollapse:Z,isHidden:T}),T&&r.createElement("div",{className:he.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:Z,onClick:Z},r.createElement(m,{className:he.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,i.Z)(he.docMainContainer,(n={},n[he.docMainContainerEnhanced]=g||!h,n))},r.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",he.docItemWrapper,(o={},o[he.docItemWrapperEnhanced]=g,o))},r.createElement(a.Zo,{components:ie},d)))))}var ye=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,l=t.find((function(e){return(0,be.LX)(a.pathname,e)}));if(!l)return r.createElement(ce.default,null);var i=l.sidebar,s=i?n.docsSidebars[i]:null;return r.createElement(r.Fragment,null,r.createElement(A.Z,null,r.createElement("html",{className:n.className})),r.createElement(c.qu,{version:n},r.createElement(c.bT,{sidebar:s},r.createElement(fe,{currentDocRoute:l,versionMetadata:n,sidebarName:i},(0,o.Z)(t,{versionMetadata:n})))))}},9649:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return p}});var r=n(3366),a=n(7462),o=n(7294),l=n(6010),i=n(5999),c=n(3616),s="anchorWithStickyNavbar_y2LR",u="anchorWithHideOnScrollNavbar_3ly5",d=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,p=(0,r.Z)(e,d),b=(0,c.LU)().navbar.hideOnScroll;return m?o.createElement(t,(0,a.Z)({},p,{className:(0,l.Z)("anchor",(n={},n[u]=b,n[s]=!b,n)),id:m}),p.children,o.createElement("a",{className:"hash-link",href:"#"+m,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,p)});var t}},4608:function(e,t,n){n.r(t);var r=n(7294),a=n(7019),o=n(5999);t.default=function(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);