(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(4),b=n(1),s=(n(9),n(0)),r=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected;return Object(s.jsxs)("div",{className:"Tabs",children:[Object(s.jsx)("ul",{children:e.map((function(t){return Object(s.jsx)("li",{children:Object(s.jsx)("button",{type:"button",onClick:function(){return c(t)},children:t.title})},t.id)}))}),Object(s.jsx)("p",{"data-cy":"tab-content",children:function(t){var n;return null===(n=e.find((function(e){return e.id===t})))||void 0===n?void 0:n.content}(n)})]})},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var t=Object(b.useState)(d[0]),e=Object(a.a)(t,2),n=e[0],c=e[1],i=Object(b.useCallback)((function(t){return c(t)}),[]);return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("h1",{children:["Selected tab is\xa0",n.title]}),Object(s.jsx)(r,{tabs:d,selectedTabId:n.id,onTabSelected:i})]})};i.a.render(Object(s.jsx)(o,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.9a6b4cb1.chunk.js.map