(function(t){function e(e){for(var r,i,c=e[0],o=e[1],l=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={index:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"05f8":function(t,e,n){"use strict";n("9318")},"159c":function(t,e,n){},"3b9c":function(t,e,n){t.exports=n.p+"img/beatriz-perez-moya-unsplash.f3eea9c2.jpg"},"3e44":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar1"),n("Slider1")],1)},s=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slider"},[r("img",{staticClass:"test",attrs:{src:n("3b9c"),alt:"Bla"}}),r("img",{staticClass:"test",attrs:{src:n("6f88"),alt:"Bla"}}),r("img",{staticClass:"test",attrs:{src:n("675c"),alt:"Bla"}}),r("img",{staticClass:"test",attrs:{src:n("c2e2"),alt:"Bla"}}),r("img",{staticClass:"test",attrs:{src:n("ad54"),alt:"Bla"}})])}],o={name:"Slider1"},l=o,u=(n("a6cf"),n("655b"),n("2877")),f=Object(u["a"])(l,i,c,!1,null,"d4d43b0c",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticStyle:{position:"absolute","z-index":"1",width:"100%"}},[t._m(0),t._m(1),n("div",{staticClass:"burger",on:{click:function(e){t.navSlide(),t.show=!t.show}}},[n("div",{staticClass:"line1"}),n("div",{staticClass:"line2"}),n("div",{staticClass:"line3"})])])},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo"},[r("img",{attrs:{alt:"Logo",src:n("cf05"),width:"45",height:"45"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav-links"},[n("li",[n("a",{attrs:{href:"#"}},[t._v("Home")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Work")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("About")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Contact")])])])}],v=n("1da1"),g=(n("96cf"),n("d3b7"),n("159b"),{name:"NavBar1",data:function(){return{show:!0}},methods:{sleep:function(t){return new Promise((function(e){return setTimeout(e,t)}))},navSlide:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t.show),n=document.querySelector(".burger"),r=document.querySelector(".nav-links"),a=document.querySelectorAll(".nav-links li"),!t.show){e.next=8;break}r.classList.toggle("nav-active"),e.next=12;break;case 8:return r.animate([{transform:"translateX(0%)"},{transform:"translateX(100%)"}],{duration:500,iterations:1}),e.next=11,t.sleep(480);case 11:r.classList.toggle("nav-active");case 12:a.forEach((function(t,e){t.style.animation?t.style.animation="":t.style.animation="navLinkFade 0.5s ease forwards ".concat(e/7+.5,"s")})),n.classList.toggle("toggle");case 14:case"end":return e.stop()}}),e)})))()}}}),b=g,h=(n("05f8"),n("af26"),Object(u["a"])(b,d,m,!1,null,"e0368138",null)),y=h.exports,_={name:"App",components:{NavBar1:y,Slider1:p}},w=_,x=(n("034f"),Object(u["a"])(w,a,s,!1,null,null,null)),j=x.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(j)}}).$mount("#app")},"655b":function(t,e,n){"use strict";n("159c")},"675c":function(t,e,n){t.exports=n.p+"img/foto-pettine-unsplash.0a30bbdd.jpg"},"6f88":function(t,e,n){t.exports=n.p+"img/hannah-busing-unsplash.d1614a43.jpg"},"85ec":function(t,e,n){},9318:function(t,e,n){},a6cf:function(t,e,n){"use strict";n("b77b")},ad54:function(t,e,n){t.exports=n.p+"img/ulyana-tim-unsplash.c2e826cb.jpg"},af26:function(t,e,n){"use strict";n("3e44")},b77b:function(t,e,n){},c2e2:function(t,e,n){t.exports=n.p+"img/sandy-millar-unsplash.7373bb08.jpg"},cf05:function(t,e,n){t.exports=n.p+"img/logo.cfd65f15.png"}});
//# sourceMappingURL=index.fee99a4a.js.map