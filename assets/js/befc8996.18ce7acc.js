"use strict";(self.webpackChunkdocs_viyalab=self.webpackChunkdocs_viyalab||[]).push([[525],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return r?a.createElement(y,i(i({ref:t},s),{},{components:r})):a.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6014:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:1},i="Overview",o={unversionedId:"Mizu/RP2040/intro",id:"Mizu/RP2040/intro",title:"Overview",description:"Pin Diagram",source:"@site/docs/Mizu/RP2040/intro.md",sourceDirName:"Mizu/RP2040",slug:"/Mizu/RP2040/intro",permalink:"/docs/Mizu/RP2040/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Mizu/RP2040/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"RP2040",permalink:"/docs/category/rp2040"},next:{title:"Buck Regulator",permalink:"/docs/category/buck-regulator"}},c={},u=[{value:"Pin Diagram",id:"pin-diagram",level:2},{value:"Features",id:"features",level:2},{value:"Key Features",id:"key-features",level:3},{value:"Electrical Characteristic",id:"electrical-characteristic",level:3},{value:"Peripherals",id:"peripherals",level:3},{value:"Sensors",id:"sensors",level:3},{value:"Physically",id:"physically",level:3},{value:"3D Files",id:"3d-files",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("h2",{id:"pin-diagram"},"Pin Diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://viyalab.com/wp-content/uploads/2022/12/viyalabMizuDiagram-1.webp",alt:"Docs Version Dropdown"})),(0,n.kt)("p",null,"Mizu is the control board that you can use in all your robotic projects. It contains all the necessary sensors for robotic projects such as gyroscope, accelerometer, compass and pressure* sensor. You can use with the Mizu;"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Unmanned Underwater Vehicle Control Board"),(0,n.kt)("li",{parentName:"ul"},"Unmanned Aerial Vehicle Control Board"),(0,n.kt)("li",{parentName:"ul"},"Unmanned Surface Vehicle Control Board"),(0,n.kt)("li",{parentName:"ul"},"Rocket Control Board")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("h3",{id:"key-features"},"Key Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Programming via USB type C"),(0,n.kt)("li",{parentName:"ul"},"Dual core ARM M0 architecture microcontroller"),(0,n.kt)("li",{parentName:"ul"},"8 Mb external flash (program memory)")),(0,n.kt)("h3",{id:"electrical-characteristic"},"Electrical Characteristic"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Supply Voltage \u2013 3.3V \u2013 5V"),(0,n.kt)("li",{parentName:"ul"},"Pin Voltage \u2013 3.3V")),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"DO NOT Apply")," 5v logical input to gpio pin.")),(0,n.kt)("h3",{id:"peripherals"},"Peripherals"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"4xADC(Analog Digital Converter)"),(0,n.kt)("li",{parentName:"ul"},"2xUART"),(0,n.kt)("li",{parentName:"ul"},"2xI2C"),(0,n.kt)("li",{parentName:"ul"},"2xSPI"),(0,n.kt)("li",{parentName:"ul"},"16xPWM")),(0,n.kt)("h3",{id:"sensors"},"Sensors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IMU sensor LSM6DS3"),(0,n.kt)("li",{parentName:"ul"},"Compass QMC6310"),(0,n.kt)("li",{parentName:"ul"},"BMP280 Barometer"),(0,n.kt)("li",{parentName:"ul"},"Programmable LED"),(0,n.kt)("li",{parentName:"ul"},"Built-in Micro SD card slot")),(0,n.kt)("h3",{id:"physically"},"Physically"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Size: 36 x 36 mm"),(0,n.kt)("li",{parentName:"ul"},"Connector: 2.54 mm Header")),(0,n.kt)("h2",{id:"3d-files"},"3D Files"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://drive.google.com/uc?export=download&id=1Z7zM2ne9LwhbHXpXz8ifDOvMvEYKYCWe"},"Download 3D .step file")))}m.isMDXComponent=!0}}]);