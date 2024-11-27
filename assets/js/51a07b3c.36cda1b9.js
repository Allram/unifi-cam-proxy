"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[500],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(t),d=a,f=l["".concat(u,".").concat(d)]||l[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1589:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={sidebar_position:3},u="Dahua/Lorex",s={unversionedId:"configuration/dahua",id:"configuration/dahua",title:"Dahua/Lorex",description:"Options",source:"@site/docs/configuration/dahua.md",sourceDirName:"configuration",slug:"/configuration/dahua",permalink:"/unifi-cam-proxy/configuration/dahua",editUrl:"https://github.com/zacharee/unifi-cam-proxy/tree/main/docs/docs/configuration/dahua.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Amcrest",permalink:"/unifi-cam-proxy/configuration/amcrest"},next:{title:"Hikvision",permalink:"/unifi-cam-proxy/configuration/hikvision"}},p=[{value:"Options",id:"options",children:[],level:2},{value:"Lorex LNB4321B",id:"lorex-lnb4321b",children:[],level:2}],l={toc:p},m="wrapper";function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dahualorex"},"Dahua/Lorex"),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"optional arguments:\n  --ffmpeg-args FFMPEG_ARGS, -f FFMPEG_ARGS\n                        Transcoding args for `ffmpeg -i <src> <args> <dst>`\n  --rtsp-transport {tcp,udp,http,udp_multicast}\n                        RTSP transport protocol used by stream\n  --username USERNAME, -u USERNAME\n                        Camera username\n  --password PASSWORD, -p PASSWORD\n                        Camera password\n  --channel CHANNEL, -c CHANNEL\n                        Camera channel\n  --snapshot-channel SNAPSHOT_CHANNEL\n                        Snapshot channel\n  --main-stream MAIN_STREAM\n                        Main Stream subtype index\n  --sub-stream SUB_STREAM\n                        Sub Stream subtype index\n  --motion-index MOTION_INDEX\n                        VideoMotion event index\n")),(0,o.kt)("h2",{id:"lorex-lnb4321b"},"Lorex LNB4321B"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Supports full time recording"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Supports motion events"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Supports smart detection")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"unifi-cam-proxy --mac '{unique MAC}' -H {NVR IP} -i {camera IP} -c /client.pem -t {Adoption token} \\\n    dahua \\\n    -u {username} \\\n    -p {password} \\\n    --ffmpeg-args=\"-f lavfi -i anullsrc -c:v copy -ar 32000 -ac 1 -codec:a aac -b:a 32k\"\n")))}d.isMDXComponent=!0}}]);