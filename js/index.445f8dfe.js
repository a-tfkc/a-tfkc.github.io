(function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={index:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"16e6":function(e,t,n){},2925:function(e,t,n){"use strict";n("ba0a")},"3e44":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar1"),n("Message",{attrs:{msg:"Welcome!"}})],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("p",[e._v(" There is nothing interesting to see yet 🐣 ")])])},s=[],l={name:"Message",props:{msg:String}},c=l,u=(n("b180"),n("2877")),f=Object(u["a"])(c,i,s,!1,null,"8de14bb0",null),p=f.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[e._m(0),e._m(1),n("div",{staticClass:"burger",on:{click:e.navSlide}},[n("div",{staticClass:"line1"}),n("div",{staticClass:"line2"}),n("div",{staticClass:"line3"})])])},d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("img",{attrs:{alt:"Logo",src:n("cf05"),width:"45",height:"45"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"nav-links"},[n("li",[n("a",{attrs:{href:"#"}},[e._v("Home")])]),n("li",[n("a",{attrs:{href:"#"}},[e._v("Work")])]),n("li",[n("a",{attrs:{href:"#"}},[e._v("About")])]),n("li",[n("a",{attrs:{href:"#"}},[e._v("Contact")])])])}],g=(n("159b"),{name:"NavBar1",methods:{navSlide:function(){var e=document.querySelector(".burger"),t=document.querySelector(".nav-links"),n=document.querySelectorAll(".nav-links li");t.classList.toggle("nav-active"),n.forEach((function(e,t){e.style.animation?e.style.animation="":e.style.animation="navLinkFade 0.5s ease forwards ".concat(t/7+.5,"s")})),e.classList.toggle("toggle")}}}),h=g,b=(n("2925"),n("af26"),Object(u["a"])(h,v,d,!1,null,"0fc5f21c",null)),m=b.exports,_={name:"App",components:{NavBar1:m,Message:p}},y=_,O=Object(u["a"])(y,a,o,!1,null,null,null),w=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(w)}}).$mount("#app")},af26:function(e,t,n){"use strict";n("3e44")},b180:function(e,t,n){"use strict";n("16e6")},ba0a:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.cfd65f15.png"}});
//# sourceMappingURL=index.445f8dfe.js.map