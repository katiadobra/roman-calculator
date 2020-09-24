(this["webpackJsonproman-calculator"]=this["webpackJsonproman-calculator"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),o=t(1),s={M:1e3,CM:900,D:500,CD:400,C:100,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},u=function(e){if(!function(e){return!!e&&new RegExp(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/).test(e)}(e))return console.log("Invalid Roman numeral"),null;var a=e.split(""),t=0;return a.forEach((function(e,a,n){var l=s[e];l<s[n[a+1]]?t-=l:t+=l})),t},m=function e(a){var t={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},n="";if(0===a)return n;for(var l in t)if(a>=t[l])return(n+=l)+e(a-=t[l])},i=(t(9),function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),p=i[0],f=i[1],E=Object(n.useState)(null),d=Object(o.a)(E,2),b=d[0],v=d[1],h=Object(n.useState)(null),N=Object(o.a)(h,2),g=N[0],_=N[1],C=Object(n.useState)(null),w=Object(o.a)(C,2),k=w[0],I=w[1],j=Object(n.useState)(null),O=Object(o.a)(j,2),X=O[0],y=O[1],R=function(e){c(e.target.value);var a=u(e.target.value);v(a),console.log("firstIntNum",b)},S=function(e){f(e.target.value);var a=u(e.target.value);_(a),console.log("secondIntNum",g)},D=function(e,a){var t;switch(e.preventDefault(),a){case"plus":t=b+g;break;case"minus":t=b-g;break;case"multiply":t=b*g;break;default:console.log("Error")}var n=m(t);I(n),y(t)};return l.a.createElement("main",null,l.a.createElement("div",{className:"app-form-wrapper"},l.a.createElement("div",{className:"app-form-holder"},l.a.createElement("form",{className:"app-form"},l.a.createElement("div",{className:"app-form__block"},l.a.createElement("h3",{className:"app-form__ttl"},"Accepted Roman Symbols: ",l.a.createElement("span",null,"I, V, X, L, C, D, M"))),l.a.createElement("div",{className:"app-form__block"},l.a.createElement("div",{className:"app-input"},l.a.createElement("input",{className:"app-input__field",type:"text",value:r,onChange:R,onFocus:R,placeholder:"Roman numerals goes here..."}),b&&l.a.createElement("span",{className:"label"},b)),l.a.createElement("div",{className:"app-input"},l.a.createElement("input",{className:"app-input__field",type:"text",value:p,onChange:S,onFocus:S,placeholder:"Roman numerals goes here..."}),g&&l.a.createElement("span",{className:"label"},g))),l.a.createElement("div",{className:"app-form__block"},l.a.createElement("button",{onClick:function(e){return D(e,"plus")},className:"app-form__btn"},l.a.createElement("span",null,"+")),l.a.createElement("button",{onClick:function(e){return D(e,"minus")},className:"app-form__btn"},l.a.createElement("span",null,"-")),l.a.createElement("button",{onClick:function(e){return D(e,"multiply")},className:"app-form__btn"},l.a.createElement("span",{className:"multi"},"*"))),l.a.createElement("div",{className:"app-form__result"},l.a.createElement("div",{className:"block ".concat(k?"show":"hide")},k,X&&l.a.createElement("span",{className:"label"},X)))))))}),p=function(e){return e.children},f=(t(10),function(){return l.a.createElement("header",{className:"page-header"},l.a.createElement("h1",null,"Roman calculator"),l.a.createElement("p",null,"Add 2 Roman numerals together. ",l.a.createElement("br",null),"The answer will also be represented as a Roman numeral."),l.a.createElement("small",null,"*Roman numerals only include whole numbers, except zero."))}),E=(t(11),function(){return l.a.createElement("footer",{className:"page-footer"},l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,"Case sensitive (only uppercase)"),l.a.createElement("li",null,"Numbers within range 1-3999"),l.a.createElement("li",null,"Supports addition, subtraction and multiplication")))});t(12);var d=function(){return l.a.createElement(p,null,l.a.createElement(f,null),l.a.createElement(i,null),l.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null));c.a.render(b,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.61efb892.chunk.js.map