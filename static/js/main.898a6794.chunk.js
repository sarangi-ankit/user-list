(this["webpackJsonpuser-list"]=this["webpackJsonpuser-list"]||[]).push([[0],{61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(8),r=c.n(a),i=c(19),j=c(31),u=c.n(j),l=c(3),o=function(e){var t=e.item;return Object(l.jsxs)("div",{className:"user",children:[Object(l.jsx)("img",{className:"user-img",src:t.avatar,alt:"avatar.png"}),Object(l.jsxs)("div",{className:"uesr--info",children:[Object(l.jsx)("h2",{className:"user-first",children:t.first_name}),Object(l.jsx)("h2",{className:"user-last",children:t.last_name}),Object(l.jsx)("h3",{className:"user-email",children:t.email})]})]})},b=c(80),d=c(82),h=Object(b.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));function O(e){var t=e.changePage,c=h();return Object(l.jsx)("div",{className:c.root,children:Object(l.jsx)(d.a,{count:3,onClick:function(e){return t(e.target.innerText)}})})}var m=function(){return Object(l.jsx)("h1",{children:"Loading ..."})},f=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(1),r=Object(i.a)(a,2),j=r[0],b=r[1],d=Object(s.useState)(!0),h=Object(i.a)(d,2),f=(h[0],h[1]);return Object(s.useEffect)((function(){!function(){var e={method:"get",url:"https://reqres.in/api/users?page=".concat(j),headers:{}};u()(e).then((function(e){var t=e.data;n(t.data),f(!1)})).catch((function(e){console.log(e)}))}()}),[j]),c===[]?Object(l.jsx)(m,{}):Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"heading",children:"user list"}),Object(l.jsx)("div",{className:"all-users",children:c.map((function(e,t){return Object(l.jsx)(o,{item:e},t)}))}),Object(l.jsx)(O,{changePage:function(e){b(e)}})]})};c(61);var x=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(f,{})})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.898a6794.chunk.js.map