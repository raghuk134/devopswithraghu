"use strict";(self.webpackChunkldo_docs=self.webpackChunkldo_docs||[]).push([[799],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>b});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),l=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return o.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=n,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(b,c(c({ref:r},s),{},{components:t})):o.createElement(b,c({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1702:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_position:7},c="06-Payment",i={unversionedId:"RoboShop-Project-Docker/payment",id:"RoboShop-Project-Docker/payment",title:"06-Payment",description:"Replace cart-ip with actual IP or DNS record of cart server",source:"@site/docs/RoboShop-Project-Docker/payment.md",sourceDirName:"RoboShop-Project-Docker",slug:"/RoboShop-Project-Docker/payment",permalink:"/learndevopsonline/build/docs/RoboShop-Project-Docker/payment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/RoboShop-Project-Docker/payment.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"05-Shipping",permalink:"/learndevopsonline/build/docs/RoboShop-Project-Docker/shipping"},next:{title:"07-MySQL",permalink:"/learndevopsonline/build/docs/RoboShop-Project-Docker/mysql"}},p={},l=[],s={toc:l};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"06-payment"},"06-Payment"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\ndnf install docker -y\ndocker run -d -p 8080:8080 -e CART_HOST=cart-ip -e CART_PORT=8080 -e USER_HOST=user-ip -e USER_PORT=8080 -e AMQP_HOST=rabbitmq-ip -e AMQP_USER=roboshop -e AMQP_PASS=roboshop123 973714476881.dkr.ecr.us-east-1.amazonaws.com/roboshop-v3/payment\n\n")),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"cart-ip")," with actual IP or DNS record of cart server"),(0,n.kt)("p",{parentName:"admonition"},"Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"user-ip")," with actual IP or DNS record of user server"),(0,n.kt)("p",{parentName:"admonition"},"Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"rabbitmq-ip")," with actual IP or DNS record of rabbitmq server")))}u.isMDXComponent=!0}}]);