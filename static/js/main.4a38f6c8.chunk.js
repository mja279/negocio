(this.webpackJsonpnegocio=this.webpackJsonpnegocio||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e){e.exports=JSON.parse('[{"id":1,"image":"https://randomuser.me/api/portraits/women/90.jpg","name":"Nadine True","department":"CEO/Co-Founder","email":"ntrue@negocio.com"},{"id":2,"image":"https://randomuser.me/api/portraits/women/65.jpg","name":"Nicole Caroline","department":"CFO/Co-Founder","email":"ncaroline@negocio.com"},{"id":3,"image":"https://randomuser.me/api/portraits/women/95.jpg","name":"Tori Mongu","department":"COO","email":"tmongu@negocio.com"},{"id":4,"image":"https://randomuser.me/api/portraits/women/43.jpg","name":"Diane Sciulli","department":"Logistics","email":"sjimenez@negocio.com"},{"id":5,"image":"https://randomuser.me/api/portraits/women/62.jpg","name":"Lauren Stewart","department":"Marketing","email":"lstewart@negocio.com"},{"id":6,"image":"https://randomuser.me/api/portraits/women/27.jpg","name":"Ximena Romano","department":"Social Media","email":"xromano@negocio.com"},{"id":7,"image":"https://randomuser.me/api/portraits/women/66.jpg","name":"Susana Jimenez","department":"Logistics","email":"dsciulli@negocio.com"},{"id":8,"image":"https://randomuser.me/api/portraits/women/5.jpg","name":"Andi Wilson","department":"Marketing","email":"awilson@negocio.com"},{"id":9,"image":"https://randomuser.me/api/portraits/women/30.jpg","name":"Camilla Johnson","department":"Sales","email":"cjohnson@negocio.com"},{"id":10,"image":"https://randomuser.me/api/portraits/women/88.jpg","name":"Taleen Alva","department":"Sr. Dev Ops","email":"talva@negocio.com"}]')},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),c=n(7),r=n.n(c),s=(n(20),n(8));n(21);var o=function(e){return Object(a.jsx)("div",{className:"wrapper col-md-12",children:e.children})};var d=function(e){return Object(a.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})},m=n.p+"static/media/rose.296f942d.JPG";n(12);var l=function(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-white",children:[Object(a.jsx)("img",{alt:"",src:m,width:"150",height:"115"}),Object(a.jsx)("h3",{children:"N E G O C I O |  "}),Object(a.jsx)("h4",{children:"  we do things just a bit different."})]})},j=n(11);var u=function(e){var t=e.onSearch,n=e.searchTerm,i=e.handleSortByDept;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("form",{children:Object(a.jsx)("input",{value:n,onChange:t,className:"shadow pl-5 rounded w-full py-1",type:"text",placeholder:"Search by Name"})})})}),Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsx)("div",{className:"col-md-0",children:"Or"})}),Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("button",{type:"button",id:"dept-btn",className:"btn btn-lg active",role:"button","aria-pressed":"true",onClick:i,children:"Deptartment"})})})]})};n(22);var p=function(e){var t=e.name,n=e.image,i=e.dept,c=e.email;return Object(a.jsx)("div",{class:"container",children:Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col-md-2",children:Object(a.jsx)("img",{className:"img-div",src:n,alt:"employee"})}),Object(a.jsx)("div",{class:"col-md-3 emply-div text-right",children:Object(a.jsxs)("p",{children:[t," "]})}),Object(a.jsx)("div",{class:"col-md-3 emply-div text-center",children:Object(a.jsx)("p",{children:i})}),Object(a.jsx)("div",{class:"col-md-4 emply-div text-center",children:Object(a.jsx)("p",{children:c})})]})})};var h=function(e){return e.data.map((function(e){return Object(a.jsx)(p,{image:e.image,name:e.name,dept:e.department,email:e.email,phone:e.phone},e.id)}))},b=n(13);var O=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(!1),o=Object(s.a)(r,2),d=o[0],m=o[1],l=Object(i.useState)(b),j=Object(s.a)(l,2),p=j[0],O=j[1],g=p.filter((function(e){return e.name.toLowerCase().startsWith(n.toLowerCase())}));return Object(a.jsxs)("div",{"custom-cntr":!0,children:[Object(a.jsx)(u,{onSearch:function(e){c(e.target.value)},searchTerm:n,handleSortByDept:function(){d?(O(p.sort((function(e,t){return e.department>t.department?-1:1}))),m(!1)):(O(p.sort((function(e,t){return e.department>t.department?1:-1}))),m(!0))}}),Object(a.jsx)(h,{data:g})]})},g=n(9),x=n(14);n(23);var v=function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"button-div",children:Object(a.jsx)("div",{class:"container",children:Object(a.jsx)("div",{class:"row justify-content-md-center",children:Object(a.jsx)("div",{id:"button",class:"col-md-auto",children:Object(a.jsx)(x.a,{variant:"outline-light",size:"lg",onClick:function(){return r(!0)},children:"Meet Our Staff"})})})})}),Object(a.jsxs)(g.a,Object(j.a)(Object(j.a)({},e),{},{size:"lg",show:c,onHide:function(){return r(!1)},"aria-labelledby":"example-modal-sizes-title-lg",children:[Object(a.jsx)(g.a.Header,{closeButton:!0,id:"example-modal-sizes-title-lg",children:"Directory"}),Object(a.jsx)(g.a.Body,{className:"show-grid",children:Object(a.jsx)(O,{})})]}))]})};n(27);var f=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l,{}),Object(a.jsx)(o,{children:Object(a.jsx)(d,{className:"col-md-12",children:Object(a.jsx)(v,{show:n,onHide:function(){return c(!1)}})})})]})};n(28);r.a.render(Object(a.jsx)(f,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.4a38f6c8.chunk.js.map