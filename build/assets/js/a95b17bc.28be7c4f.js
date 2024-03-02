"use strict";(self.webpackChunkldo_docs=self.webpackChunkldo_docs||[]).push([[1203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:7},i="06-Cart",s={unversionedId:"RoboShop-Project-V2/cart",id:"RoboShop-Project-V2/cart",title:"06-Cart",description:"Cart is a microservice that is responsible for Cart Service in RobotShop e-commerce portal.",source:"@site/docs/RoboShop-Project-V2/cart.md",sourceDirName:"RoboShop-Project-V2",slug:"/RoboShop-Project-V2/cart",permalink:"/learndevopsonline/build/docs/RoboShop-Project-V2/cart",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/RoboShop-Project-V2/cart.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"05-User",permalink:"/learndevopsonline/build/docs/RoboShop-Project-V2/user"},next:{title:"07-MySQL",permalink:"/learndevopsonline/build/docs/RoboShop-Project-V2/mysql"}},l={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"06-cart"},"06-Cart"),(0,o.kt)("p",null,"Cart is a microservice that is responsible for Cart Service in RobotShop e-commerce portal."),(0,o.kt)("admonition",{title:"Hint",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Developer has chosen NodeJs, Check with developer which version of NodeJS is needed. ")),(0,o.kt)("p",null,"Install NodeJS, By default NodeJS 10 is available, We would like to enable 18 version and install list."),(0,o.kt)("admonition",{title:"Hint",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"You can list modules by using ",(0,o.kt)("inlineCode",{parentName:"strong"},"dnf module list")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module disable nodejs -y\ndnf module enable nodejs:18 -y\n")),(0,o.kt)("p",null,"Install NodeJS "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install nodejs -y\n")),(0,o.kt)("p",null,"Configure the application. Here"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Our application developed by the own developer is not having any RPM software just like other softwares. So we need to configure every step manually")),(0,o.kt)("admonition",{title:"Recap",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We already discussed in Linux basics section that applications should run as nonroot user.")),(0,o.kt)("p",null,"Add application User"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"useradd roboshop\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"User ",(0,o.kt)("strong",{parentName:"p"},"roboshop")," is a function / daemon user to run the application. Apart from that we dont use this user to login to server."),(0,o.kt)("p",{parentName:"admonition"},"Also, username ",(0,o.kt)("strong",{parentName:"p"},"roboshop")," has been picked because it more suits to our project name.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We keep application in one standard location. This is a usual practice that runs in the organization.")),(0,o.kt)("p",null,"Lets setup an app directory. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir /app \n")),(0,o.kt)("p",null,"Download the application code to created app directory. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -o /tmp/cart.zip https://roboshop-artifacts.s3.amazonaws.com/cart.zip \ncd /app \nunzip /tmp/cart.zip\n")),(0,o.kt)("p",null,"Every application is developed by development team will have some common softwares that they use as libraries. This application also have the same way of defined dependencies in the application configuration."),(0,o.kt)("p",null,"Lets download the dependencies. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /app \nnpm install \n")),(0,o.kt)("p",null,"We need to setup a new service in ",(0,o.kt)("strong",{parentName:"p"},"systemd")," so ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl")," can manage this service"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We already discussed in linux basics that advantages of systemctl managing services, Hence we are taking that approach. Which is also a standard way in the OS. ")),(0,o.kt)("p",null,"Setup SystemD Cart Service "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-unit",metastring:"file (systemd) title=/etc/systemd/system/cart.service",file:!0,"(systemd)":!0,title:"/etc/systemd/system/cart.service"},"[Unit]\nDescription = Cart Service\n[Service]\nUser=roboshop\n// highlight-start\nEnvironment=REDIS_HOST=<REDIS-SERVER-IP>\nEnvironment=CATALOGUE_HOST=<CATALOGUE-SERVER-IP>\nEnvironment=CATALOGUE_PORT=8080\n// highlight-end\nExecStart=/bin/node /app/server.js\nSyslogIdentifier=cart\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("admonition",{title:"RECAP",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can create file by using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"vim /etc/systemd/system/cart.service")))),(0,o.kt)("p",null,"Load the service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This above command is because we added a new service, We are telling systemd to reload so it will detect new service.")),(0,o.kt)("p",null,"Start the service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable cart \nsystemctl start cart\n")))}d.isMDXComponent=!0}}]);