!function(){"use strict";var e,t,n,r={179:function(e,t,n){var r=n(7294),o=n(9060),i=n(3727),a=n(6550),c=n(4751),l=n(4480),u=n(4890),s=n(3894),f=n(9713),p=n.n(f),m="RECEIVE_USER_INFO";function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=(0,u.UY)({context:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;return n===m?d(d({},e),{},{currentUser:r}):e}}),b=g,v=(0,u.MT)(b,(0,u.qC)((0,u.md)(s.Z))),h=(n(3952),n(2148)),E=(n(6494),n(2694)),O=(n(737),n(8205)),P=(n(6414),n(9288)),j=(n(5410),n(3057)),k=(n(263),n(9676)),x=(n(8238),n(7049)),C=(n(693),n(6940)),S=n(319),w=n.n(S),_=n(3038),Z=n.n(_),A=n(6486),F=n(8980),H=n(2902),M=n(640),T=n.n(M),U={summary:"",useFePrefix:!0,assignee:"",storyPoint:1},D=function(){var e=(0,r.useState)([(0,A.cloneDeep)(U)]),t=Z()(e,2),n=t[0],o=t[1],i=(0,r.useState)([]),a=Z()(i,2),c=a[0],l=a[1],u=function(){var e=(0,F.Z)("jiraGeneratorHistoryAssignees",{defaultValue:[],serializer:function(e){return JSON.stringify(e)},deserializer:function(e){return JSON.parse(e)}}),t=Z()(e,2),n=t[0],o=t[1],i=(0,r.useCallback)((function(e){return n.filter((function(t){return!e||String(t).includes(e)})).map((function(e){return{value:e}}))}),[n]),a=(0,r.useCallback)((function(e){var t=(0,A.uniq)((0,A.concat)(e,n));o(t)}),[n,o]);return{historyAssignees:n,setHistoryAssignees:a,getHistoryAssigneeOptions:i}}(),s=u.setHistoryAssignees,f=u.getHistoryAssigneeOptions,p=(0,r.useCallback)((function(){o((function(e){return[].concat(w()(e),[(0,A.cloneDeep)(U)])}))}),[]),m=(0,r.useCallback)((function(e,t,r){var i=(0,H.Uy)(n,(function(n){n[e][t]=r}));o(i)}),[n]),y=(0,r.useCallback)((function(e){var t=(0,H.Uy)(n,(function(t){t.splice(e,1)}));o(t)}),[n]),d=(0,r.useCallback)((function(){var e=n.every((function(e){return e.summary&&e.assignee&&e.storyPoint}));return e||C.ZP.error("Summary/Assignee/StoryPoints is required"),e}),[n]),g=(0,r.useCallback)((function(e){if(d()){T()(e),C.ZP.success("Copied");var t=n.map((function(e){return e.assignee}));s(t)}}),[n,s,d]),b=(0,r.useCallback)((function(e,t,n){m(e,t,n.target.value)}),[m]),v=(0,r.useCallback)((function(e,t,n){m(e,t,n.target.checked)}),[m]),S=(0,r.useMemo)((function(){return n.map((function(e){return"- ".concat(e.useFePrefix?"[FE]":"").concat(e.summary,' / assignee:"').concat(e.assignee,'@shopee.com" cfield:"Story Points:').concat(e.storyPoint,'"')})).join("\n")}),[n]),_=(0,r.useCallback)((function(){d()&&l((function(e){return[S].concat(w()(e))}))}),[S,d]);return r.createElement("div",{style:{padding:20}},r.createElement(x.Z,{orientation:"left"},"Jira Generator"),r.createElement(h.ZP,{dataSource:n,renderItem:function(e,t){return r.createElement(h.ZP.Item,{key:t,className:"src-components-Home-JiraGenerator__list--11FHe"},r.createElement("div",null,"Summary: ",r.createElement(k.Z,{checked:e.useFePrefix,onChange:(0,A.partial)(v,t,"useFePrefix")},"[FE]"),r.createElement(j.Z,{value:e.summary,onChange:(0,A.partial)(b,t,"summary"),style:{display:"inline-block",width:"300px"}})),r.createElement("div",null,"Assignee:",r.createElement(P.Z,{value:e.assignee,onChange:(0,A.partial)(m,t,"assignee"),style:{width:200},options:f(e.assignee)}),"@shopee.com"),r.createElement("div",null,"Story Points:",r.createElement(O.Z,{value:e.storyPoint,onChange:(0,A.partial)(m,t,"storyPoint"),style:{display:"inline-block",width:"80px"},step:.5})),r.createElement("div",null,r.createElement(E.Z,{danger:!0,type:"link",onClick:(0,A.partial)(y,t)},"Delete")))}}),r.createElement(E.Z,{type:"primary",onClick:p},"Add"),r.createElement("div",{style:{marginTop:50,padding:20}},r.createElement("h2",null,"Result:"),r.createElement("pre",null,S),r.createElement(E.Z,{style:{marginLeft:30},onClick:(0,A.partial)(g,S),type:"primary"},"Copy"),r.createElement(E.Z,{onClick:_,style:{marginLeft:30}},"Snapshot")),!(0,A.isEmpty)(c)&&r.createElement("div",{style:{marginTop:20,padding:20}},r.createElement("h3",null,"Snapshots:"),c.map((function(e,t){return r.createElement("pre",{key:t,style:{marginBottom:"2em"}},e)}))))},N="/github-page-tools/",I=function(){return r.createElement(l.Wh,null,r.createElement(c.zt,{store:v},r.createElement(i.VK,null,r.createElement(a.rs,null,r.createElement(a.AW,{path:N,exact:!0},r.createElement(i.UT,null,r.createElement(a.rs,null,r.createElement(a.AW,{path:"/",exact:!0,component:J}),r.createElement(a.AW,{path:"/jira-generator",exact:!0,component:D}),r.createElement(a.l_,{from:"*",to:"/"})))),r.createElement(a.l_,{from:"*",to:N})))))},J=function(){return r.createElement("div",{className:"src-components-Home-index__root--2bH25"},r.createElement(i.rU,{to:"/jira-generator"},"Jira Generator"))};n(6981),o.render(r.createElement(I,null),document.getElementById("app"))}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=r,e=[],i.O=function(t,n,r,o){if(!n){var a=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var c=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(c=!1,o<a&&(a=o));if(c){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},i.d(o,a),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={179:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],c=n[1],l=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(l)var s=l(i)}for(t&&t(n);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(s)},n=self.webpackChunkfexpy=self.webpackChunkfexpy||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=i.O(void 0,[514,24,216],(function(){return i(179)}));a=i.O(a)}();