"use strict";(self.webpackChunkdocs_viyalab=self.webpackChunkdocs_viyalab||[]).push([[4558],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4805:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="Overview",s={unversionedId:"PDB/Base100/intro",id:"PDB/Base100/intro",title:"Overview",description:"Pin Diagram",source:"@site/docs/PDB/Base100/intro.md",sourceDirName:"PDB/Base100",slug:"/PDB/Base100/intro",permalink:"/docs/PDB/Base100/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PDB/Base100/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Base100",permalink:"/docs/category/base100"}},l={},u=[{value:"Pin Diagram",id:"pin-diagram",level:2},{value:"Features",id:"features",level:2},{value:"Using with Arduino",id:"using-with-arduino",level:2},{value:"3D Files",id:"3d-files",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"pin-diagram"},"Pin Diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://viyalab.com/wp-content/uploads/2023/01/Base100Diagram.webp",alt:"Docs Version Dropdown"})),(0,a.kt)("p",null,"You can perform safe on-off operations using the Base100, magnetic switch or external mechanical switch. At the same time, you can instantly monitor the power consumption of your project with the INA219 amp/power monitor sensor on it. You can also use your battery more safely by reading the battery voltage values instantly."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Maximum Current: 200 Amps"),(0,a.kt)("li",{parentName:"ul"},"Continuous Current: 100 Amps"),(0,a.kt)("li",{parentName:"ul"},"Input Voltage: 6-26 Vdc"),(0,a.kt)("li",{parentName:"ul"},"Battery Types: 2s \u2013 6s"),(0,a.kt)("li",{parentName:"ul"},"Instant current voltage and power monitoring"),(0,a.kt)("li",{parentName:"ul"},"Magnetic switching"),(0,a.kt)("li",{parentName:"ul"},"Extra 2 x 5A mosfets (M1 - M2)"),(0,a.kt)("li",{parentName:"ul"},"External switch")),(0,a.kt)("h2",{id:"using-with-arduino"},"Using with Arduino"),(0,a.kt)("p",null,"With Base100, you can monitor the instantaneous current, voltage and power parameters drawn by the system. To use this feature, make sure you have correctly connected the SDA and SCL pins to your Mizu card. To download the library, go to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/viyalab/Base"},"this address")," to download the Arduino library and run the sample code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "Wire.h"\n#include <Base.h>\n\nBase base;\n\nvoid setup() {\nSerial.begin(115200);\nbase.begin();\nbase.currentOffset(-1.48);\n\n}\n\nvoid loop() {\nSerial.print("Monitor: ");\nSerial.print(base.busVoltage(),4);\nSerial.print(" ");\nSerial.print(base.shuntCurrent(),4);\nSerial.print(" ");\nSerial.println(base.busPower(),4);\ndelay(100);\n\n}\n')),(0,a.kt)("h2",{id:"3d-files"},"3D Files"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://drive.google.com/uc?export=download&id=11ZWXWRGygS61QGfRZoafaax8lh3cJFrf"},"Download 3D .step file")))}c.isMDXComponent=!0}}]);