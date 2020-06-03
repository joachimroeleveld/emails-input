!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.EmailsInput=t():e.EmailsInput=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s=5)}([function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(6),i=n(7);function u(t,n,o){return i()?e.exports=u=Reflect.construct:e.exports=u=function(e,t,n){var i=[null];i.push.apply(i,t);var u=new(Function.bind.apply(e,i));return n&&r(u,n.prototype),u},u.apply(null,arguments)}e.exports=u},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){e.exports=n(10)},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r=n(3),i=n.n(r),u=(n(8),n(9),n(4)),o=n.n(u),l=n(1),s=n.n(l),a=n(2),c=n.n(a),f=n(0),p=n.n(f),d=function(){function e(t,n){if(s()(this,e),p()(this,"elem",null),p()(this,"_value",""),p()(this,"_valid",void 0),p()(this,"_removeCallback",null),"string"!=typeof t)throw new Error("InputValue() expects a string as argument");this._value=t,this._removeCallback=n,this._valid=this.isValid()}return c()(e,[{key:"isValid",value:function(){return!!this._value.match(e.EMAIL_REGEX)}},{key:"toString",value:function(){return this._value}},{key:"render",value:function(){if(this.elem)return this.elem;var e=this.elem=document.createElement("div");e.classList.add("EmailsInput-value"),this._valid||e.classList.add("EmailsInput-invalid"),e.textContent=this._value;var t=document.createElement("button");return t.classList.add("EmailsInput-button"),t.textContent="x",e.append(t),t.addEventListener("click",this._removeCallback.bind(this)),e}}]),e}();p()(d,"EMAIL_REGEX",/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);var v=d;function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s()(this,e),p()(this,"_elem",null),p()(this,"_listeners",[]),p()(this,"_values",[]),"object"!==o()(t))throw new Error("EmailsInput() expects a HTMLElement as argument");this._elem=t,this._opts=h(h({},e.defaultOpts),n),this.init()}return c()(e,[{key:"addValue",value:function(e){var t=this,n=new v(e,(function(){t.removeValue(this)}));this._values.push(n),this._valuesElem.insertBefore(n.render(),this._inputElem),this._notifyListeners()}},{key:"getAllValues",value:function(){return this._stringValues}},{key:"getValidValues",value:function(){return this._values.filter((function(e){return e.isValid()})).map((function(e){return e.toString()}))}},{key:"replaceAllValues",value:function(e){var t=this;this._values.forEach((function(e){return t.removeValue(e)})),e.forEach((function(e){return t.addValue(e)}))}},{key:"removeValue",value:function(e){e.elem.parentNode.removeChild(e.elem),this._values=this._values.filter((function(t){return t!==e})),this._notifyListeners()}},{key:"subscribe",value:function(e){this._listeners.push(e)}},{key:"unsubscribe",value:function(e){this._listeners=this._listeners.filter((function(t){return t!==e}))}},{key:"init",value:function(){this._elem.classList.add("EmailsInput"),this._elem.innerHTML='<div class="EmailsInput-values"></div>',this._createInput()}},{key:"reset",value:function(){this._values=[],this._listeners=[],this._elem.innerHTML='<div class="EmailsInput-values"></div>'}},{key:"_notifyListeners",value:function(){var e=this;this._listeners.forEach((function(t){return t.call(e,e._stringValues)}))}},{key:"_createInput",value:function(){var e=this,t=document.createElement("input");t.type="text",t.placeholder=this._opts.placeholderText,t.classList.add("EmailsInput-input");var n=function(){t.value&&(e.addValue(t.value),t.value="")};t.addEventListener("keydown",(function(e){13!==e.keyCode&&188!==e.keyCode||n()})),t.addEventListener("blur",(function(){n()})),t.addEventListener("paste",(function(){(event.clipboardData||window.clipboardData).getData("text").split(",").map((function(t){return e.addValue(t)})),setTimeout((function(){return t.value=""}))})),this._elem.addEventListener("click",(function(){t.focus()})),this._valuesElem.append(t)}},{key:"_stringValues",get:function(){return this._values.map((function(e){return e.toString()}))}},{key:"_valuesElem",get:function(){return this._elem.querySelector(".EmailsInput-values")}},{key:"_inputElem",get:function(){return this._elem.querySelector(".EmailsInput-input")}}]),e}();p()(m,"defaultOpts",{placeholderText:"add more people..."});var b=m;function _(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i()(b,t)}}]).default}));
//# sourceMappingURL=emails-input.js.map