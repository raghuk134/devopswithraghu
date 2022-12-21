"use strict";(self.webpackChunkldo_docs=self.webpackChunkldo_docs||[]).push([[8536],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(o),u=r,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return o?n.createElement(g,i(i({ref:t},p),{},{components:o})):n.createElement(g,i({ref:t},p))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},105:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:3},i="02-MongoDB",l={unversionedId:"RoboShop-Project/mongodb",id:"RoboShop-Project/mongodb",title:"02-MongoDB",description:"Developer has chosen the database MongoDB. Hence, we are trying to install it up and configure it.",source:"@site/docs/RoboShop-Project/mongodb.md",sourceDirName:"RoboShop-Project",slug:"/RoboShop-Project/mongodb",permalink:"/learndevopsonline/build/docs/RoboShop-Project/mongodb",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/RoboShop-Project/mongodb.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"01-Frontend",permalink:"/learndevopsonline/build/docs/RoboShop-Project/frontend"},next:{title:"03-Catalogue",permalink:"/learndevopsonline/build/docs/RoboShop-Project/catalogue"}},c={},s=[],p={toc:s};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"02-mongodb"},"02-MongoDB"),(0,r.kt)("p",null,"Developer has chosen the database MongoDB. Hence, we are trying to install it up and configure it. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Versions of the DB Software you will get context from the developer, Meaning we need to check with developer."))),(0,r.kt)("p",null,"Setup the MongoDB repo file "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=/etc/yum.repos.d/mongo.repo",title:"/etc/yum.repos.d/mongo.repo"},"[mongodb-org-4.2]\nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.2/x86_64/\ngpgcheck=1\nenabled=1\ngpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Hint! You can create file by using ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"vim /etc/yum.repos.d/mongo.repo")))),(0,r.kt)("p",null,"Install MongoDB "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum install mongodb-org -y \n")),(0,r.kt)("p",null,"Start & Enable MongoDB Service "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable mongod \nsystemctl start mongod \n")),(0,r.kt)("p",null,"Usually MongoDB opens the port only to ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost(127.0.0.1)"),", meaning this service can be accessed by the application that is hosted on this server only. However, we need to access this service to be accessed by another server, So we need to change the config accordingly."),(0,r.kt)("p",null,"Update listen address from 127.0.0.1 to 0.0.0.0 in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/mongod.conf")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Hint! You can edit file by using ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"vim /etc/mongod.conf")))),(0,r.kt)("p",null,"Restart the service to make the changes effected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart mongod\n")))}d.isMDXComponent=!0}}]);