parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"en75":[function(require,module,exports) {

},{}],"PVI1":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function i(t){return String(t).padStart(2,"0")}function o(t){return{hours:i(Math.floor(t%864e5/36e5)),mins:i(Math.floor(t%36e5/6e4)),secs:i(Math.floor(t%6e4/1e3))}}require("../css/common.css");var r={startBtn:document.querySelector("button[data-action-start]"),stopBtn:document.querySelector("button[data-action-stop]"),clockface:document.querySelector(".js-clockface")},a=function(){function e(n){var i=n.onTick;t(this,e),this.intervalId=null,this.isActive=!1,this.onTick=i,this.init()}return n(e,[{key:"init",value:function(){var t=this.getTimeComponents(0);this.onTick(t)}},{key:"start",value:function(){var t=this;if(!this.isActive){var e=Date.now();this.isActive=!0,this.intervalId=setInterval(function(){var n=Date.now()-e,i=t.getTimeComponents(n);t.onTick(i)},1e3)}}},{key:"stop",value:function(){clearInterval(this.intervalId),this.isActive=!1;var t=this.getTimeComponents(0);this.onTick(t)}},{key:"getTimeComponents",value:function(t){return{hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}},{key:"pad",value:function(t){return String(t).padStart(2,"0")}}]),e}(),c=new a({onTick:s});function s(t){var e=t.hours,n=t.mins,i=t.secs;r.clockface.textContent="".concat(e,":").concat(n,":").concat(i)}r.startBtn.addEventListener("click",c.start.bind(c)),r.stopBtn.addEventListener("click",c.stop.bind(c));
},{"../css/common.css":"en75"}]},{},["PVI1"], null)
//# sourceMappingURL=/06-timer.fdf34921.js.map