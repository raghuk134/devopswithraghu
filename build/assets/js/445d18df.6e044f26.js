"use strict";(self.webpackChunkldo_docs=self.webpackChunkldo_docs||[]).push([[9294],{3905:(e,t,r)=>{r.d(t,{Zo:()=>b,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=c(r),u=a,d=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return r?n.createElement(d,i(i({ref:t},b),{},{components:r})):n.createElement(d,i({ref:t},b))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:10},i="09-RabbitMQ",l={unversionedId:"RoboShop-Project-V3/rabbitmq",id:"RoboShop-Project-V3/rabbitmq",title:"09-RabbitMQ",description:"RabbitMQ is a messaging Queue which is used by some components of the applications.",source:"@site/docs/RoboShop-Project-V3/rabbitmq.md",sourceDirName:"RoboShop-Project-V3",slug:"/RoboShop-Project-V3/rabbitmq",permalink:"/learndevopsonline/build/docs/RoboShop-Project-V3/rabbitmq",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/RoboShop-Project-V3/rabbitmq.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"08-Shipping",permalink:"/learndevopsonline/build/docs/RoboShop-Project-V3/shipping"},next:{title:"10-Payment",permalink:"/learndevopsonline/build/docs/RoboShop-Project-V3/payment"}},s={},c=[],b={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"09-rabbitmq"},"09-RabbitMQ"),(0,a.kt)("p",null,"RabbitMQ is a messaging Queue which is used by some components of the applications."),(0,a.kt)("admonition",{title:"Hint",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Versions of the DB Software you will get context from the developer, Meaning we need to check with developer."),"\n",(0,a.kt)("strong",{parentName:"p"},"Developer has shared the version information as RabbitMQ-3.x"))),(0,a.kt)("p",null,"Setup the RabbitMQ repo file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=/etc/yum.repos.d/rabbitmq.repo",title:"/etc/yum.repos.d/rabbitmq.repo"},"[modern-erlang]\nname=modern-erlang-el9\nbaseurl=https://yum1.novemberain.com/erlang/el/9/$basearch\n        https://yum2.novemberain.com/erlang/el/9/$basearch\n        https://dl.cloudsmith.io/public/rabbitmq/rabbitmq-erlang/rpm/el/9/$basearch\nenabled=1\ngpgcheck=0\n\n[modern-erlang-noarch]\nname=modern-erlang-el9-noarch\nbaseurl=https://yum1.novemberain.com/erlang/el/9/noarch\n        https://yum2.novemberain.com/erlang/el/9/noarch\n        https://dl.cloudsmith.io/public/rabbitmq/rabbitmq-erlang/rpm/el/9/noarch\nenabled=1\ngpgcheck=0\n\n[modern-erlang-source]\nname=modern-erlang-el9-source\nbaseurl=https://yum1.novemberain.com/erlang/el/9/SRPMS\n        https://yum2.novemberain.com/erlang/el/9/SRPMS\n        https://dl.cloudsmith.io/public/rabbitmq/rabbitmq-erlang/rpm/el/9/SRPMS\nenabled=1\ngpgcheck=0\n\n[rabbitmq-el9]\nname=rabbitmq-el9\nbaseurl=https://yum2.novemberain.com/rabbitmq/el/9/$basearch\n        https://yum1.novemberain.com/rabbitmq/el/9/$basearch\n        https://dl.cloudsmith.io/public/rabbitmq/rabbitmq-server/rpm/el/9/$basearch\nenabled=1\ngpgcheck=0\n\n[rabbitmq-el9-noarch]\nname=rabbitmq-el9-noarch\nbaseurl=https://yum2.novemberain.com/rabbitmq/el/9/noarch\n        https://yum1.novemberain.com/rabbitmq/el/9/noarch\n        https://dl.cloudsmith.io/public/rabbitmq/rabbitmq-server/rpm/el/9/noarch\nenabled=1\ngpgcheck=0\n")),(0,a.kt)("p",null,"Install RabbitMQ "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install rabbitmq-server -y\n")),(0,a.kt)("p",null,"Start RabbitMQ Service "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable rabbitmq-server\nsystemctl start rabbitmq-server\n")),(0,a.kt)("p",null,"RabbitMQ comes with a default username / password as ",(0,a.kt)("inlineCode",{parentName:"p"},"guest/guest"),". But this user cannot be used to connect. Hence, we need to create one user for the application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'rabbitmqctl add_user roboshop roboshop123\nrabbitmqctl set_permissions -p / roboshop ".*" ".*" ".*"\n')))}p.isMDXComponent=!0}}]);