import{o as i}from"./object-keys-dbad82bd.js";import{h as c}from"./has-property-descriptors-a37c6ee2.js";var f=i,y=typeof Symbol=="function"&&typeof Symbol("foo")=="symbol",u=Object.prototype.toString,l=Array.prototype.concat,n=Object.defineProperty,v=function(e){return typeof e=="function"&&u.call(e)==="[object Function]"},b=c(),a=n&&b,g=function(e,t,s,r){t in e&&(!v(r)||!r())||(a?n(e,t,{configurable:!0,enumerable:!1,value:s,writable:!0}):e[t]=s)},p=function(e,t){var s=arguments.length>2?arguments[2]:{},r=f(t);y&&(r=l.call(r,Object.getOwnPropertySymbols(t)));for(var o=0;o<r.length;o+=1)g(e,r[o],t[r[o]],s[r[o]])};p.supportsDescriptors=!!a;var h=p;export{h as d};
