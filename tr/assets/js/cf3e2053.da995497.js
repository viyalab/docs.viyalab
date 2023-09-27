"use strict";(self.webpackChunkdocs_viyalab=self.webpackChunkdocs_viyalab||[]).push([[8709],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>d});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),u=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},p=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},k={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,m=c["".concat(s,".").concat(d)]||c[d]||k[d]||i;return a?t.createElement(m,l(l({ref:r},p),{},{components:a})):t.createElement(m,l({ref:r},p))}));function d(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1728:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=a(7462),n=(a(7294),a(3905));const i={sidebar_position:1},l="Genel Bak\u0131\u015f",o={unversionedId:"PDB/Base100/intro",id:"PDB/Base100/intro",title:"Genel Bak\u0131\u015f",description:"Pin Diyagram\u0131",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/PDB/Base100/intro.md",sourceDirName:"PDB/Base100",slug:"/PDB/Base100/intro",permalink:"/tr/docs/PDB/Base100/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PDB/Base100/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Base100",permalink:"/tr/docs/category/base100"},next:{title:"SWPowerModule",permalink:"/tr/docs/category/swpowermodule"}},s={},u=[{value:"Pin Diyagram\u0131",id:"pin-diyagram\u0131",level:2},{value:"\xd6zellikler",id:"\xf6zellikler",level:2},{value:"Ana \xd6zellikler",id:"ana-\xf6zellikler",level:3},{value:"Elektriksel Karakteristik",id:"elektriksel-karakteristik",level:3},{value:"Sens\xf6rler",id:"sens\xf6rler",level:3},{value:"Fiziksel",id:"fiziksel",level:3},{value:"Arduino ile Kullan\u0131m\u0131",id:"arduino-ile-kullan\u0131m\u0131",level:2},{value:"3D Dosyalar",id:"3d-dosyalar",level:2}],p={toc:u};function k(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"genel-bak\u0131\u015f"},"Genel Bak\u0131\u015f"),(0,n.kt)("h2",{id:"pin-diyagram\u0131"},"Pin Diyagram\u0131"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://viyalab.com/wp-content/uploads/2023/01/Base100Diagram.webp",alt:"Docs Version Dropdown"})),(0,n.kt)("p",null,"Base100, manyetik anahtar veya harici mekanik anahtar kullanarak g\xfcvenli \u015fekilde a\xe7ma-kapatma i\u015flemlerini ger\xe7ekle\u015ftirebilirsiniz. Ayn\u0131 zamanda \xfczerinde bulunan INA219 amper/g\xfc\xe7 monit\xf6r sens\xf6r\xfc ile projenizin g\xfc\xe7 t\xfcketimini anl\u0131k olarak takip edebilirisiniz. Ayr\u0131ca batarya voltaj de\u011ferlerinide anl\u0131k okuyarak daha g\xfcvenli \u015fekilde bataryan\u0131z\u0131 kullanabilirsiniz."),(0,n.kt)("h2",{id:"\xf6zellikler"},"\xd6zellikler"),(0,n.kt)("h3",{id:"ana-\xf6zellikler"},"Ana \xd6zellikler"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Anl\u0131k ak\u0131m voltaj ve g\xfc\xe7 izleme"),(0,n.kt)("li",{parentName:"ul"},"Manyetik anahtarlama"),(0,n.kt)("li",{parentName:"ul"},"Extra 2 adet 5A mosfet (M1 - M2)"),(0,n.kt)("li",{parentName:"ul"},"Harici anahtar")),(0,n.kt)("h3",{id:"elektriksel-karakteristik"},"Elektriksel Karakteristik"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Azami Ak\u0131m: 200 Amper"),(0,n.kt)("li",{parentName:"ul"},"S\xfcrekli Ak\u0131m:  100 Amper"),(0,n.kt)("li",{parentName:"ul"},"Giri\u015f Gerilimi: 6-26 Vdc"),(0,n.kt)("li",{parentName:"ul"},"Pil T\xfcrleri: 2s \u2013 6s")),(0,n.kt)("h3",{id:"sens\xf6rler"},"Sens\xf6rler"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"INA219 Ak\u0131m sens\xf6r\xfc")),(0,n.kt)("h3",{id:"fiziksel"},"Fiziksel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Boyut: 36 x 36 mm")),(0,n.kt)("h2",{id:"arduino-ile-kullan\u0131m\u0131"},"Arduino ile Kullan\u0131m\u0131"),(0,n.kt)("p",null,"Base100 ile sistemin \xe7ekti\u011fi anl\u0131k ak\u0131m, voltaj ve g\xfc\xe7 parametrelerini takip edebilirsiniz. Bu \xf6zelli\u011fi kullanmak i\xe7in SDA ve SCL pinlerini Mizu kart\u0131n\u0131za do\u011fru ba\u011flad\u0131\u011f\u0131n\u0131za emin olun. K\xfct\xfcphaneyi indirmek i\xe7in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/viyalab/Base100"},"bu adrese")," giderek Arduino k\xfct\xfcphanesini indirin ve \xf6rnek kodu \xe7al\u0131\u015ft\u0131r\u0131n. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "Wire.h"\n#include <Base.h>\n\nBase base;\n\nvoid setup() {\nSerial.begin(115200);\nbase.begin();\nbase.currentOffset(-1.48);\n\n}\n\nvoid loop() {\nSerial.print("Monitor: ");\nSerial.print(base.busVoltage(),4);\nSerial.print(" ");\nSerial.print(base.shuntCurrent(),4);\nSerial.print(" ");\nSerial.println(base.busPower(),4);\ndelay(100);\n\n}\n')),(0,n.kt)("h2",{id:"3d-dosyalar"},"3D Dosyalar"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://drive.google.com/uc?export=download&id=11ZWXWRGygS61QGfRZoafaax8lh3cJFrf"},"Download 3D .step file")))}k.isMDXComponent=!0}}]);