(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{14:function(t,e,c){},32:function(t,e,c){"use strict";c.r(e);var a=c(1),i=c.n(a),n=c(17),r=c.n(n),s=(c(14),c(11)),d=c(10),l=c(7),j=c.p+"static/media/shoppingcart.46cb7d4b.svg",o=c(0),u=function(t){var e=Object(a.useState)(!1),c=Object(d.a)(e,2),i=c[0],n=c[1],r=function(){var t=window.scrollY;n(t>50)};Object(a.useEffect)((function(){window.addEventListener("scroll",r)}));var s=["nav"];return i&&s.push("scrolled"),Object(o.jsxs)("nav",{children:[Object(o.jsx)("div",{id:"logo",className:"logo",children:"The Daruma Store"}),Object(o.jsxs)("ul",{id:"links",className:"nav-links",children:[Object(o.jsx)(l.b,{to:"/shopping-cart",children:Object(o.jsx)("li",{className:"nav-link",children:"Home"})}),Object(o.jsx)(l.b,{to:"/shopping-cart/Shop",children:Object(o.jsx)("li",{className:"nav-link",children:"Shop"})}),Object(o.jsx)("div",{id:"shopping-cart-float",className:s.join(" "),children:Object(o.jsx)(l.b,{to:"/shopping-cart/Cart",children:Object(o.jsxs)("li",{className:"nav-link",children:[Object(o.jsx)("img",{alt:"shopping cart",src:j}),t.count]})})})]})]})},b=c(2),m=function(t){var e=t.cart,c=e.filter((function(t){return t.quantity>0}));return Object(o.jsxs)("table",{className:"cart-table",children:[Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{children:Object.keys(e[0]).map((function(t){return Object(o.jsx)("th",{children:t})}))})}),Object(o.jsxs)("tbody",{children:[c.map((function(e,c){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsxs)("td",{children:[Object(o.jsx)("img",{alt:"product-thumbnail",className:"cart-thumbnail",src:e.picture})," "]}),Object(o.jsxs)("td",{children:[Object(o.jsx)("button",{className:"quantity-button",onClick:function(){return t.add(e.name)},children:"+"}),e.quantity,Object(o.jsx)("button",{className:"quantity-button",onClick:function(){return t.subtract(e.name)},children:"-"})]}),Object(o.jsx)("td",{children:e.price})]},c)})),Object(o.jsxs)("tr",{id:"total",className:"total",children:[Object(o.jsx)("td",{children:"Total: "}),Object(o.jsx)("td",{}),Object(o.jsx)("td",{}),Object(o.jsx)("td",{children:t.total()})]})]})]})},h=function(t){return Object(o.jsx)("div",{id:"cart-display",className:"cart",children:Object(o.jsxs)("center",{children:[Object(o.jsx)(m,{cart:t.cart,total:t.total,add:t.add,subtract:t.subtract}),Object(o.jsx)("button",{id:"buy",className:"buy-button",onClick:t.buyAlert,children:"Purchase Now"})]})})},p=function(){return Object(o.jsx)("div",{id:"homepage",className:"homepage",children:Object(o.jsx)(l.b,{to:"/shopping-cart/Shop",className:"shop-now-button",children:"Shop Now"})})},O=c.p+"static/media/reddaruma.54665910.jpg",x=c.p+"static/media/blackdaruma.5524a9c0.png",g=c.p+"static/media/yellowdaruma.a4e7ed0e.png",f=c.p+"static/media/purpledaruma.192a7821.png",v=c.p+"static/media/pinkdaruma.d8613b3c.png",N=c.p+"static/media/golddaruma.c970400a.png",k=function(t){return Object(o.jsxs)("div",{id:"shop",className:"shop",children:[Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{className:"item-image",alt:"red daruma doll",src:O}),Object(o.jsx)("div",{id:"description",children:" Red Daruma for luck!"}),Object(o.jsx)("div",{id:"price",children:" $12.99"}),Object(o.jsx)("button",{className:"item-button",onClick:function(){t.add("Red Daruma")},children:"Add To cart"})]}),Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{className:"item-image",alt:"black daruma doll",src:x}),Object(o.jsx)("div",{id:"description",children:" Black Daruma!"}),Object(o.jsx)("div",{id:"price",children:" $15.99"}),Object(o.jsx)("button",{className:"item-button",onClick:function(){return t.add("Black Daruma")},children:"Add To cart"})]}),Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{className:"item-image",alt:"yellow daruma doll",src:g}),Object(o.jsx)("div",{id:"description",children:" Yellow Daruma!"}),Object(o.jsx)("div",{id:"price",children:" $15.99"}),Object(o.jsx)("button",{className:"item-button",onClick:function(){return t.add("Yellow Daruma")},children:"Add To cart"})]}),Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{className:"item-image",alt:"purple daruma doll",src:f}),Object(o.jsx)("div",{id:"description",children:" Purple Daruma!"}),Object(o.jsx)("div",{id:"price",children:" $18.99"}),Object(o.jsx)("button",{className:"item-button",onClick:function(){return t.add("Purple Daruma")},children:"Add To cart"})]}),Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{className:"item-image",alt:"pink daruma doll",src:v}),Object(o.jsx)("div",{id:"description",children:" Pink Daruma!"}),Object(o.jsx)("div",{id:"price",children:" $13.99"}),Object(o.jsx)("button",{className:"item-button",onClick:function(){return t.add("Pink Daruma")},children:"Add To cart"})]}),Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{className:"item-image",alt:"gold daruma doll",src:N}),Object(o.jsx)("div",{id:"description",children:" Gold Daruma!"}),Object(o.jsx)("div",{id:"price",children:" $19.99"}),Object(o.jsx)("button",{className:"item-button",onClick:function(){return t.add("Gold Daruma")},children:"Add To cart"})]})]})},y=function(){return Object(o.jsx)("div",{id:"footer",className:"footer",children:Object(o.jsx)("p",{children:Object(o.jsxs)("center",{children:[" ","The Daruma Store is not real. ",Object(o.jsx)("br",{}),"But Daruma dolls are ;) ",Object(o.jsx)("br",{}),"Google Them!"," "]})})})},D=function(){return[{name:"Red Daruma",picture:O,quantity:0,price:12.99},{name:"Black Daruma",picture:x,quantity:0,price:15.99},{name:"Yellow Daruma",picture:g,quantity:0,price:15.99},{name:"Purple Daruma",picture:f,quantity:0,price:18.99},{name:"Pink Daruma",picture:v,quantity:0,price:13.99},{name:"Gold Daruma",picture:N,quantity:0,price:19.99}]};var q=function(){var t=Object(a.useState)(D()),e=Object(d.a)(t,2),c=e[0],i=e[1],n=Object(a.useState)(0),r=Object(d.a)(n,2),j=r[0],m=r[1],O=function(t){!function(t){for(var e=0;e<c.length;e++)if(c[e].name===t){var a=c[e];a.quantity=a.quantity+1,c[e]=a,i(c)}}(t),x()},x=function(){m(j+1)},g=function(t){!function(t){for(var e=0;e<c.length;e++)if(c[e].name===t)if(c[e].quantity>0){var a=c[e];a.quantity=a.quantity-1,c[e]=a,i(c),console.log(c)}else alert("nothing to remove")}(t),f()},f=function(){m(j-1)},v=function(){alert("Sorry! Only Japan has these in stock")};function N(){for(var t=c,e=0,a=0;a<t.length;a++)e+=t[a].quantity*t[a].price;return"$"+e.toFixed(2)}return Object(o.jsx)(l.a,{children:Object(o.jsxs)("div",{id:"mainpage",children:[Object(o.jsx)(u,{count:j}),Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{exact:!0,path:"/shopping-cart",component:p}),Object(o.jsx)(b.a,{exact:!0,path:"/shopping-cart/Cart",render:function(t){return Object(o.jsx)(h,Object(s.a)(Object(s.a)({},t),{},{add:O,subtract:g,cart:c,total:N,buyAlert:v}))}}),Object(o.jsx)(b.a,{exact:!0,path:"/shopping-cart/Shop",render:function(t){return Object(o.jsx)(k,Object(s.a)(Object(s.a)({},t),{},{add:O}))}})]}),Object(o.jsx)(y,{})]})})};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(q,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.cdc44569.chunk.js.map