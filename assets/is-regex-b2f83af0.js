import{c as m}from"./call-bind-d434ea07.js";import{r as l}from"./has-tostringtag-7fd0be08.js";var a,p;function O(){if(p)return a;p=1;var e=m,n=l()(),s,f,t,o;if(n){s=e("Object.prototype.hasOwnProperty"),f=e("RegExp.prototype.exec"),t={};var i=function(){throw t};o={toString:i,valueOf:i},typeof Symbol.toPrimitive=="symbol"&&(o[Symbol.toPrimitive]=i)}var g=e("Object.prototype.toString"),y=Object.getOwnPropertyDescriptor,u="[object RegExp]";return a=n?function(r){if(!r||typeof r!="object")return!1;var c=y(r,"lastIndex"),x=c&&s(c,"value");if(!x)return!1;try{f(r,o)}catch(b){return b===t}}:function(r){return!r||typeof r!="object"&&typeof r!="function"?!1:g(r)===u},a}export{O as r};
