(this["webpackJsonphttps-client"]=this["webpackJsonphttps-client"]||[]).push([[98],{176:function(o,e,t){"use strict";t.r(e),t.d(e,"ion_icon",(function(){return a}));var i=t(35),n=t(73),r=function o(e){if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(var t=0;t<e.attributes.length;t++){var i=e.attributes[t].value;if(Object(n.d)(i)&&0===i.toLowerCase().indexOf("on"))return!1}for(t=0;t<e.childNodes.length;t++)if(!o(e.childNodes[t]))return!1}return!0},s=new Map,c=function(o){var e=s.get(o);return e||(e=fetch(o).then((function(o){return o.status<=299?o.text():Promise.resolve(null)})).then((function(o){return function(o){if(o){var e=document.createElement("div");e.innerHTML=o;for(var t=e.childNodes.length-1;t>=0;t--)"svg"!==e.childNodes[t].nodeName.toLowerCase()&&e.removeChild(e.childNodes[t]);var i=e.firstElementChild;if(i&&"svg"===i.nodeName.toLowerCase()&&(i.setAttribute("class","s-ion-icon"),r(i)))return e.innerHTML}return""}(o)})),s.set(o,e)),e},a=function(){function o(o){Object(i.f)(this,o),this.mode=l(this),this.isVisible=!1,this.lazy=!1}return o.prototype.connectedCallback=function(){var o=this;this.waitUntilVisible(this.el,"50px",(function(){o.isVisible=!0,o.loadIcon()}))},o.prototype.disconnectedCallback=function(){this.io&&(this.io.disconnect(),this.io=void 0)},o.prototype.waitUntilVisible=function(o,e,t){var i=this;if(this.lazy&&"undefined"!==typeof window&&window.IntersectionObserver){var n=this.io=new window.IntersectionObserver((function(o){o[0].isIntersecting&&(n.disconnect(),i.io=void 0,t())}),{rootMargin:e});n.observe(o)}else t()},o.prototype.loadIcon=function(){var o=this;if(this.isVisible){var e=Object(n.c)(this);e&&c(e).then((function(e){return o.svgContent=e}))}if(!this.ariaLabel){var t=Object(n.b)(this.name,this.icon,this.mode,this.ios,this.md);t&&(this.ariaLabel=t.replace("ios-","").replace("md-","").replace(/\-/g," "))}},o.prototype.render=function(){var o,e,t=this.mode||"md",n=this.flipRtl||this.ariaLabel&&this.ariaLabel.indexOf("arrow")>-1&&!1!==this.flipRtl;return Object(i.e)(i.a,{role:"img",class:Object.assign((o={},o[t]=!0,o),h(this.color),(e={},e["icon-"+this.size]=!!this.size,e["flip-rtl"]=!!n&&"rtl"===this.el.ownerDocument.dir,e))},this.svgContent?Object(i.e)("div",{class:"icon-inner",innerHTML:this.svgContent}):Object(i.e)("div",{class:"icon-inner"}))},Object.defineProperty(o,"assetsDirs",{get:function(){return["svg"]},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"el",{get:function(){return Object(i.c)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(o,"watchers",{get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}},enumerable:!0,configurable:!0}),Object.defineProperty(o,"style",{get:function(){return":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.icon-inner,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}"},enumerable:!0,configurable:!0}),o}(),l=function(o){return Object(i.b)(o)||document.documentElement.getAttribute("mode")||"md"},h=function(o){var e;return o?((e={"ion-color":!0})["ion-color-"+o]=!0,e):null}}}]);
//# sourceMappingURL=98.1bc5b5bd.chunk.js.map