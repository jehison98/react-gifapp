(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(5),r=n.n(i),s=n(2),u=(n(12),n(0)),o=function(e){var t=e.setCategories,n=c.a.useState(""),a=Object(s.a)(n,2),i=a[0],r=a[1];return Object(u.jsxs)("form",{id:"form-search",onSubmit:function(e){e.preventDefault(),i.trim().length>1&&(t(i),r(""))},children:[Object(u.jsx)("input",{className:"search-input",type:"text",placeholder:"Write something",value:i,onChange:function(e){r(e.target.value)}}),Object(u.jsx)("button",{className:"search-btn",type:"submit",children:"Search"})]})},j=n(7),d=n(4),l=n.n(d),b=n(6),f=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a,c,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=" https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=15&api_key=RKg3JP9a0jwQeQCCPlIxabnjJHZCcDMO"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,i=c.data,r=i.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=(n(15),function(e){e.id;var t=e.title,n=e.url;return Object(u.jsx)("div",{className:"img-box animate__animated animate__fadeIn",children:Object(u.jsxs)("div",{className:"img-content",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})})}),m=(n(16),function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){i({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,i=n.loading;return c.length>0?Object(u.jsxs)("div",{className:"gif-container",children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),i&&Object(u.jsx)("p",{children:"Loading..."}),Object(u.jsx)("div",{className:"imgs-container",children:c.map((function(e){return Object(u.jsx)(h,Object(j.a)({},e),e.id)}))})]}):Object(u.jsxs)("p",{children:["Sorry I can't find \"",t,'"']})}),p=function(){var e=c.a.useState("One Punch"),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{id:"gif-title",children:"Gif-Expert-App"}),Object(u.jsx)(o,{setCategories:a}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{children:Object(u.jsx)(m,{category:n})})]})};n(17),n(18);r.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.bede2d51.chunk.js.map