parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"LPCC":[function(require,module,exports) {
class t{constructor(){this.scrollElements=""}setup(t){t&&t.selector&&(this.scrollElements=t.selector)}init(){const t=new IntersectionObserver(t=>{t.forEach(t=>{const e=Object.values(t.target.attributes);let r=.1,s=!1;e.map(t=>{"data-reverse"===t.name&&(s=!0),r="data-threshold"===t.name?parseFloat(t.nodeValue):.1}),t.intersectionRatio>=r?t.target.classList.add("visible"):s&&t.target.classList.remove("visible")})},{threshold:[0,.2,1]});this.scrollElements.forEach(e=>{t.observe(e)})}}class e{constructor(){this.revealPoint=0,this.selector="",this.ease="ease-out"}setup(t){t&&(t.selector&&(this.selector=t.selector),t.revealPoint&&(this.revealPoint=t.revealPoint),t.ease&&(this.ease=t.ease),t.direction&&(this.direction=t.direction))}runParallax(){const t=window.pageYOffset+window.innerHeight/2;this.selector.forEach(e=>{const r=window.innerHeight,s=e.getBoundingClientRect().top;let a;if(a=s<r-this.revealPoint,s<0+this.revealPoint&&(a=!1),a){const r=e.offsetTop+e.offsetHeight/2,s=t-r,a=parseFloat(e.getAttribute("data-parallax-speed"));let i="";"vertical"===(i=e.hasAttribute("data-parallax-direction")?e.getAttribute("data-parallax-direction"):"vertical").toLowerCase()?e.style.transform=`translate3d(0, ${s*a/3}px, 0)`:"horizontal"===i.toLowerCase()&&(e.style.transform=`translate3d( ${s*a/3}px, 0, 0)`),e.style.transition=`transform ${this.ease}`}})}init(){document.addEventListener("scroll",()=>{this.runParallax()})}}class r{constructor(){this.selector=""}setup(t){t.selector&&(this.selector=t.selector)}init(){this.selector.forEach(t=>{const e=t.getAttribute("data-event"),r=t.getAttribute("data-event-element"),s=t.getAttribute("data-event-add");t.addEventListener(e,()=>{document.querySelectorAll(`${r}`).forEach(t=>{t.classList.toggle(s)})})})}}class s{constructor(){this.wrapper="",this.darkModeClass="dark-mode-active",this.active=!1,this.trigger=""}setup(t){t&&(t.wrapper&&(this.wrapper=t.wrapper),t.trigger&&(this.trigger=t.trigger),t.darkModeClass&&(this.darkModeClass=t.darkModeClass))}renderDarkMode(){const t=this.wrapper.querySelectorAll("*");!0===this.active?(document.body.setAttribute("data-dark-mode",!0),t.forEach(t=>{t.classList.add(this.darkModeClass)}),this.active=!1,localStorage.setItem("dark-mode","true")):!1===this.active&&t.forEach(t=>{document.body.removeAttribute("data-dark-mode"),t.classList.remove(this.darkModeClass),this.active=!0,localStorage.removeItem("dark-mode")})}init(){"true"==localStorage.getItem("dark-mode")&&(this.active=!0),this.renderDarkMode(),this.trigger.addEventListener("click",()=>{this.renderDarkMode()})}}class a{constructor(){selector="",attribute=""}setup(t){t.selector&&(this.selector=t.selector),t.attribute&&(this.attribue=t.attribute)}runContainerQueries(){this.selector.forEach(t=>{const e=t.getAttribute(this.attribue).split("; ");t.setAttribute("data-current-breakpoint","initial");const r=t.clientWidth;let s=[];e.map((e,a)=>{const i=e.split(":"),o=i[0];+i[1]<r&&(s.push(o),t.dataset.currentBreakpoint=s[a])})})}init(){this.runContainerQueries()}}module.exports={Scroll:t,Parallax:e,EventGroup:r,DarkMode:s,ContainerQueries:a};
},{}],"L4bL":[function(require,module,exports) {
"use strict";var e=require("giftbag");console.log(e.Parallax);var l=new e.Parallax,a=document.querySelectorAll(".parallax-element");l.setup({selector:a}),l.init();
},{"giftbag":"LPCC"}]},{},["L4bL"], null)
//# sourceMappingURL=script.a47f4aa6.js.map