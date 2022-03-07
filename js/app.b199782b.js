(function(){"use strict";var t={8835:function(t,e,a){var s=a(8935),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r={name:"App"},o=r,l=a(1001),c=(0,l.Z)(o,n,i,!1,null,null,null),u=c.exports,d=a(2809),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("full-page",{ref:"fullpage",attrs:{id:"fullpage",options:t.options}},[a("SectionHeader"),a("SectionIntroduction"),a("SectionPhoto"),a("SectionVideo"),a("SectionTestimonials"),a("SectionFooter")],1)},m=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("NavBar"),a("SliderOne")],1)},p=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBarDesktop"),a("NavBarMobile")],1)},g=[],_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu"},[s("router-link",{attrs:{to:"/"}},[s("div",{staticClass:"logo"},[s("img",{attrs:{alt:"Logo",src:a(7445),width:"80",height:"80"}})])]),s("router-link",{attrs:{to:"/"}},[s("div",{staticClass:"menuPoints"},[t._v("HOME")])]),s("router-link",{attrs:{to:"/hochzeitsfotografie"}},[s("div",{staticClass:"menuPoints"},[t._v("FOTO")])]),s("router-link",{attrs:{to:"/hochzeitsvideografie"}},[s("div",{staticClass:"menuPoints"},[t._v("VIDEO")])]),s("div",{staticClass:"menuPoints"},[t._v("INFO "),s("div",{staticClass:"subPoints"},[s("div",{staticClass:"gap"}),s("div",{staticClass:"subPointsWrapper"},[s("router-link",{attrs:{to:"/about"}},[s("div",{staticClass:"subPoint"},[t._v("ABOUT US")])]),s("router-link",{attrs:{to:"/leistungen"}},[s("div",{staticClass:"subPoint"},[t._v("LEISTUNGEN")])])],1)])]),s("router-link",{attrs:{to:"/kontakt"}},[s("div",{staticClass:"menuPoints"},[t._v("KONTAKT")])])],1)},b=[],C={name:"NavBarDesktop"},y=C,k=(0,l.Z)(y,_,b,!1,null,"52d47ac2",null),w=k.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"navBar",staticClass:"navBar"},[s("div",{staticClass:"logo"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:a(7445)}})]),s("div",[s("button",{ref:"hamburger",staticClass:"hamburger hamburger--squeeze",attrs:{type:"button"},on:{click:function(e){return t.toggleMenuIcon()}}},[t._m(0)])])],1),s("div",{ref:"menuMobile",staticClass:"menuMobile"},[s("div",{staticClass:"header"}),s("div",{ref:"main",staticClass:"main"},[s("div",{staticClass:"animate"},[s("router-link",{staticClass:"point link",attrs:{to:"/"}},[t._v("HOME")])],1),s("div",{staticClass:"animate"},[s("router-link",{staticClass:"point link",attrs:{to:"/hochzeitsfotografie"}},[t._v("FOTO")])],1),s("div",{staticClass:"animate"},[s("router-link",{staticClass:"point link",attrs:{to:"/hochzeitsvideografie"}},[t._v("VIDEO")])],1),s("div",{staticClass:"animate"},[s("router-link",{staticClass:"point link",attrs:{to:"/leistungen"}},[t._v("LEISTUNGEN")])],1),s("div",{staticClass:"animate"},[s("router-link",{staticClass:"point link",attrs:{to:"/about"}},[t._v("ABOUT")])],1),s("div",{staticClass:"animate"},[s("router-link",{staticClass:"point link",attrs:{to:"/kontakt"}},[t._v("KONTAKT")])],1)]),s("div",{staticClass:"footer"},[s("a",{attrs:{href:"https://www.facebook.com/fayaphotovideo/",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:"fa-brands fa-facebook",size:"1x",inverse:""}})],1),s("a",{attrs:{href:"https://www.instagram.com/fayaphotovideo.de/",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:"fa-brands fa-instagram",size:"1x",inverse:""}})],1),s("a",{attrs:{href:"https://www.youtube.com/channel/UCFA95FXca117uT_Ssf1rdDg",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:"fa-brands fa-youtube",size:"1x",inverse:""}})],1)])])])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"hamburger-box"},[a("span",{staticClass:"hamburger-inner"})])}],B={name:"NavBarMobile",data(){return{active:!1}},mounted(){let t=document.getElementsByClassName("menuMobile")[0];t.style.zIndex="-1";let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`),window.addEventListener("resize",(()=>{let t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${t}px`)}))},methods:{toggleMenuIcon(){let t;"undefined"!=typeof fullpage_api&&(t=fullpage_api);let e=document.documentElement,a=document.body,s=this.$refs["hamburger"],n=this.$refs["menuMobile"],i=document.getElementsByClassName("animate"),r=this.$refs["navBar"];if("undefined"!=typeof s&&s.classList.contains("is-active")){this.active=!1,e.style.overflow="revert",a.style.overflow="revert",s.classList.remove("is-active"),s.classList.remove("open"),n.style.opacity="0";let o=0;while(i[o])i[o].classList.remove("move"),o++;r.style.position="relative","undefined"!=typeof t&&(t.setAllowScrolling(!0),t.setKeyboardScrolling(!0)),n.style.zIndex="-1"}else{this.active=!0,e.style.overflow="hidden",a.style.overflow="hidden",r.style.position="revert",s.classList.add("is-active"),s.classList.add("open"),n.style.zIndex="1000",n.style.opacity="1",n.style.overflow="hidden","undefined"!=typeof t&&(t.setAllowScrolling(!1),t.setKeyboardScrolling(!1));let o=0;while(i[o])i[o].classList.add("move"),o++}}}},N=B,P=(0,l.Z)(N,E,x,!1,null,"a30a7d20",null),T=P.exports,O={name:"NavBar",components:{NavBarMobile:T,NavBarDesktop:w}},S=O,D=(0,l.Z)(S,h,g,!1,null,"08adf9b6",null),I=D.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slider"},[s("img",{staticClass:"sliderImages",attrs:{src:a(4359),alt:"ImageTitle"}}),s("img",{staticClass:"sliderImages",attrs:{src:a(1044),alt:"ImageTitle"}}),s("img",{staticClass:"sliderImages",attrs:{src:a(7572),alt:"ImageTitle"}}),s("img",{staticClass:"sliderImages",attrs:{src:a(1041),alt:"ImageTitle"}}),s("img",{staticClass:"sliderImages",attrs:{src:a(8123),alt:"ImageTitle"}})])}],Z={name:"SliderOne",mounted(){$(document).ready((()=>{$(".slider").slick({arrows:!1,autoplay:!0,autoplaySpeed:4e3,dots:!1,easing:"ease-in-out",pauseOnFocus:"false",pauseOnHover:"false",speed:2e3,touchThreshold:50})}));let t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${t}px`),window.addEventListener("resize",(()=>{let t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${t}px`)}))}},A=Z,L=(0,l.Z)(A,M,z,!1,null,"cad3343e",null),F=L.exports,H={name:"SectionHeader",components:{NavBar:I,SliderOne:F}},K=H,W=(0,l.Z)(K,f,p,!1,null,"694c8f3f",null),U=W.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("p",[t._v("Vorstellung")])])}],G={name:"SectionIntroduction"},q=G,X=(0,l.Z)(q,j,V,!1,null,"55db4a58",null),R=X.exports,Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("p",[t._v("Foto")])])}],Q={name:"SectionPhoto"},tt=Q,et=(0,l.Z)(tt,Y,J,!1,null,"6f5ac605",null),at=et.exports,st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("p",[t._v("Video")])])}],it={name:"SectionVideo"},rt=it,ot=(0,l.Z)(rt,st,nt,!1,null,"5d1e3294",null),lt=ot.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("p",[t._v("Testimonials")])])}],dt={name:"SectionTestimonials"},vt=dt,mt=(0,l.Z)(vt,ct,ut,!1,null,"bceb1f46",null),ft=mt.exports,pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("p",[t._v("Footer")])])}],gt={name:"SectionFooter"},_t=gt,bt=(0,l.Z)(_t,pt,ht,!1,null,"04c36bb6",null),Ct=bt.exports,yt={name:"HomePage",components:{SectionFooter:Ct,SectionTestimonials:ft,SectionVideo:lt,SectionPhoto:at,SectionIntroduction:R,SectionHeader:U},data(){return{options:{licenseKey:"9ACFEE2B-B87C4CF8-9AB2DA81-9BAD2DDB",sectionsColor:["#DDDDDA","#DDDDDA","#C2C8C5","#94B0B7","#7697A0","#4A707A"]}}}},kt=yt,wt=(0,l.Z)(kt,v,m,!1,null,"1e3b4136",null),Et=wt.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"photoPage"},[a("NavBarWrapper"),a("MainTitle",{attrs:{title:"Foto Gallerie"}})],1)},Bt=[],$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[t._m(0),a("div",{staticClass:"titlePart"},[a("h1",[t._v(t._s(t.title))])]),t._m(1)])},Nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titlePart",attrs:{id:"titleLeft"}},[a("hr")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titlePart",attrs:{id:"titleRight"}},[a("hr")])}],Pt={name:"MainTitle",props:["title"]},Tt=Pt,Ot=(0,l.Z)(Tt,$t,Nt,!1,null,"3e229eeb",null),St=Ot.exports,Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navBarWrapper"},[a("NavBarDark")],1)},It=[],Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBarDesktopDark"),a("NavBarMobileDark")],1)},zt=[],Zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu"},[s("router-link",{attrs:{to:"/"}},[s("div",{staticClass:"logo"},[s("img",{attrs:{alt:"Logo",src:a(9695),width:"80",height:"80"}})])]),s("router-link",{attrs:{to:"/"}},[s("div",{staticClass:"menuPoints"},[t._v("HOME")])]),s("router-link",{attrs:{to:"/hochzeitsfotografie"}},[s("div",{staticClass:"menuPoints"},[t._v("FOTO")])]),s("router-link",{attrs:{to:"/hochzeitsvideografie"}},[s("div",{staticClass:"menuPoints"},[t._v("VIDEO")])]),s("div",{staticClass:"menuPoints"},[t._v("INFO "),s("div",{staticClass:"subPoints"},[s("div",{staticClass:"gap"}),s("div",{staticClass:"subPointsWrapper"},[s("router-link",{attrs:{to:"/about"}},[s("div",{staticClass:"subPoint"},[t._v("ABOUT US")])]),s("router-link",{attrs:{to:"/leistungen"}},[s("div",{staticClass:"subPoint"},[t._v("LEISTUNGEN")])])],1)])]),s("router-link",{attrs:{to:"/kontakt"}},[s("div",{staticClass:"menuPoints"},[t._v("KONTAKT")])])],1)},At=[],Lt={name:"NavBarDesktopDark"},Ft=Lt,Ht=(0,l.Z)(Ft,Zt,At,!1,null,"012136f5",null),Kt=Ht.exports,Wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"navBar",staticClass:"navBar"},[s("div",{staticClass:"logo"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:a(9695)}})]),s("div",[s("button",{ref:"hamburger",staticClass:"hamburger hamburger--squeeze",attrs:{type:"button"},on:{click:function(e){return t.toggleMenuIcon()}}},[t._m(0)])])],1),s("div",{ref:"menuMobile",staticClass:"menuMobile"},[s("div",{staticClass:"header"}),s("div",{ref:"main",staticClass:"main"},[s("div",{staticClass:"animate"},[s("router-link",{staticClass:"point link",attrs:{to:"/"}},[t._v("HOME")])],1),s("div",{staticClass:"animate"},[s("router-link",{staticClass:"point link",attrs:{to:"/hochzeitsfotografie"}},[t._v("FOTO")])],1),s("div",{staticClass:"animate"},[s("router-link",{staticClass:"point link",attrs:{to:"/hochzeitsvideografie"}},[t._v("VIDEO")])],1),s("div",{staticClass:"animate"},[s("router-link",{staticClass:"point link",attrs:{to:"/leistungen"}},[t._v("LEISTUNGEN")])],1),s("div",{staticClass:"animate"},[s("router-link",{staticClass:"point link",attrs:{to:"/about"}},[t._v("ABOUT")])],1),s("div",{staticClass:"animate"},[s("router-link",{staticClass:"point link",attrs:{to:"/kontakt"}},[t._v("KONTAKT")])],1)]),s("div",{staticClass:"footer"},[s("a",{attrs:{href:"https://www.facebook.com/fayaphotovideo/",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:"fa-brands fa-facebook",size:"1x",color:"black"}})],1),s("a",{attrs:{href:"https://www.instagram.com/fayaphotovideo.de/",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:"fa-brands fa-instagram",size:"1x",color:"black"}})],1),s("a",{attrs:{href:"https://www.youtube.com/channel/UCFA95FXca117uT_Ssf1rdDg",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:"fa-brands fa-youtube",size:"1x",color:"black"}})],1)])])])},Ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"hamburger-box"},[a("span",{staticClass:"hamburger-inner"})])}],jt={name:"NavBarMobileDark",data(){return{active:!1}},mounted(){let t=document.getElementsByClassName("menuMobile")[0];t.style.zIndex="-1";let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`),window.addEventListener("resize",(()=>{let t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${t}px`)}))},methods:{toggleMenuIcon(){let t;"undefined"!=typeof fullpage_api&&(t=fullpage_api);let e=document.documentElement,a=document.body,s=this.$refs["hamburger"],n=this.$refs["menuMobile"],i=document.getElementsByClassName("animate"),r=this.$refs["navBar"];if("undefined"!=typeof s&&s.classList.contains("is-active")){this.active=!1,e.style.overflow="revert",a.style.overflow="revert",s.classList.remove("is-active"),s.classList.remove("open"),n.style.opacity="0";let o=0;while(i[o])i[o].classList.remove("move"),o++;r.style.position="relative","undefined"!=typeof t&&(t.setAllowScrolling(!0),t.setKeyboardScrolling(!0)),n.style.zIndex="-1"}else{this.active=!0,e.style.overflow="hidden",a.style.overflow="hidden",r.style.position="revert",s.classList.add("is-active"),s.classList.add("open"),n.style.zIndex="1000",n.style.opacity="1",n.style.overflow="hidden","undefined"!=typeof t&&(t.setAllowScrolling(!1),t.setKeyboardScrolling(!1));let o=0;while(i[o])i[o].classList.add("move"),o++}}}},Vt=jt,Gt=(0,l.Z)(Vt,Wt,Ut,!1,null,"172e8ff2",null),qt=Gt.exports,Xt={name:"NavBarDark",components:{NavBarMobileDark:qt,NavBarDesktopDark:Kt}},Rt=Xt,Yt=(0,l.Z)(Rt,Mt,zt,!1,null,"f36171b6",null),Jt=Yt.exports,Qt={name:"NavBarWrapper",components:{NavBarDark:Jt},mounted(){let t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${t}px`),window.addEventListener("resize",(()=>{let t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${t}px`)}))}},te=Qt,ee=(0,l.Z)(te,Dt,It,!1,null,"91f9af14",null),ae=ee.exports,se={name:"PhotoPage",components:{NavBarWrapper:ae,MainTitle:St}},ne=se,ie=(0,l.Z)(ne,xt,Bt,!1,null,"0167f42e",null),re=ie.exports,oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"videoPage"},[a("NavBarWrapper"),a("MainTitle",{attrs:{title:"Video Gallerie"}})],1)},le=[],ce={name:"VideoPage",components:{MainTitle:St,NavBarWrapper:ae}},ue=ce,de=(0,l.Z)(ue,oe,le,!1,null,"423da2b1",null),ve=de.exports,me=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aboutPage"},[a("NavBarWrapper"),a("MainTitle",{attrs:{title:"About"}})],1)},fe=[],pe={name:"AboutPage",components:{MainTitle:St,NavBarWrapper:ae}},he=pe,ge=(0,l.Z)(he,me,fe,!1,null,"12a239bc",null),_e=ge.exports,be=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"servicesPage"},[a("NavBarWrapper"),a("MainTitle",{attrs:{title:"Leistungen"}})],1)},Ce=[],ye={name:"ServicesPage",components:{MainTitle:St,NavBarWrapper:ae}},ke=ye,we=(0,l.Z)(ke,be,Ce,!1,null,"518515b0",null),Ee=we.exports,xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contactPage"},[a("NavBarWrapper"),a("MainTitle",{attrs:{title:"Kontakt"}})],1)},Be=[],$e={name:"ContactPage",components:{MainTitle:St,NavBarWrapper:ae}},Ne=$e,Pe=(0,l.Z)(Ne,xe,Be,!1,null,"0cc03a88",null),Te=Pe.exports;const Oe=new d.Z({mode:"history",routes:[{path:"/",component:Et},{path:"/hochzeitsfotografie",component:re},{path:"/hochzeitsvideografie",component:ve},{path:"/leistungen",component:Ee},{path:"/about",component:_e},{path:"/kontakt",component:Te}]});var Se=Oe,De=(a(8732),a(7614)),Ie=a.n(De),Me=a(81),ze=a(4842),Ze=a(9009);s.Z.use(d.Z),s.Z.use(Ie()),Me.vI.add(ze.neY,ze.Zzi,ze.opf),s.Z.component("font-awesome-icon",Ze.GN),s.Z.config.productionTip=!1,new s.Z({render:t=>t(u),router:Se}).$mount("#app")},4359:function(t,e,a){t.exports=a.p+"img/beatriz-perez-moya-unsplash.9cb2524b.jpg"},7572:function(t,e,a){t.exports=a.p+"img/foto-pettine-unsplash.2786fdc8.jpg"},1044:function(t,e,a){t.exports=a.p+"img/hannah-busing-unsplash.71f0e897.jpg"},1041:function(t,e,a){t.exports=a.p+"img/sandy-millar-unsplash.e58a00a1.jpg"},8123:function(t,e,a){t.exports=a.p+"img/ulyana-tim-unsplash.a8210723.jpg"},9695:function(t,e,a){t.exports=a.p+"img/logo-dark.5d9a541f.png"},7445:function(t,e,a){t.exports=a.p+"img/logo.607b91e4.png"}},e={};function a(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={exports:{}};return t[s].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,s,n,i){if(!s){var r=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],i=t[u][2];for(var o=!0,l=0;l<s.length;l++)(!1&i||r>=i)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(o=!1,i<r&&(r=i));if(o){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[s,n,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,i,r=s[0],o=s[1],l=s[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(l)var u=l(a)}for(e&&e(s);c<r.length;c++)i=r[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},s=self["webpackChunkfaya"]=self["webpackChunkfaya"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(8835)}));s=a.O(s)})();
//# sourceMappingURL=app.b199782b.js.map