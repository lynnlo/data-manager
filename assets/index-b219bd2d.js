import{ax as e,at as z,ay as s,ap as H,az as $,k as b,aA as A,C as P,B as T,$ as q,W as G,aB as K,aC as V}from"./@mui-f3787986.js";import{r as h,a as W}from"./react-12317535.js";import{R as J}from"./react-dom-9043644b.js";import{l as Q}from"./ra-data-local-storage-b6c92784.js";import{A as X}from"./react-admin-f695f4f1.js";import{ah as Y}from"./ra-core-26b24cdf.js";import{C as I,L as Z,D as ee,F as te,T as B,B as U,N as ae,b as re,S as M,c as x,d as R,e as j,f as D,E as ie,g as F,h as se,i as oe,j as ne}from"./ra-ui-materialui-58e6f39f.js";import"./@babel-4b4a8c5a.js";import"./@emotion-d6ba3467.js";import"./hoist-non-react-statics-691fe6cb.js";import"./stylis-581c9ed0.js";import"./clsx-1229b3e0.js";import"./react-transition-group-a6ae2adb.js";import"./@popperjs-0e7ee0a2.js";import"./scheduler-04ce0582.js";import"./ra-data-fakerest-622622f7.js";import"./fakerest-552f0250.js";import"./lodash-7ec777e5.js";import"./ra-language-english-02fcc574.js";import"./ra-i18n-polyglot-eb4291d7.js";import"./node-polyglot-87c88650.js";import"./array.prototype.foreach-b8d9d036.js";import"./define-properties-0d7bd0f6.js";import"./object-keys-dbad82bd.js";import"./has-property-descriptors-a37c6ee2.js";import"./get-intrinsic-7ad4ecdb.js";import"./has-symbols-0e5b2b17.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-d434ea07.js";import"./es-abstract-aba81ebc.js";import"./is-callable-7492318c.js";import"./object-inspect-9b58692b.js";import"./es-to-primitive-8073b5b3.js";import"./is-date-object-3b5131b4.js";import"./has-tostringtag-7fd0be08.js";import"./is-symbol-5383681d.js";import"./safe-regex-test-32ecb016.js";import"./is-regex-b2f83af0.js";import"./is-string-c907b945.js";import"./es-array-method-boxes-properly-96cc27a2.js";import"./object.entries-497e6c94.js";import"./string.prototype.trim-74b084d4.js";import"./query-string-6a1177e4.js";import"./strict-uri-encode-a47dbb00.js";import"./decode-uri-component-dd9600af.js";import"./split-on-first-160c8dc4.js";import"./filter-obj-31d61f1e.js";import"./react-query-4d41bbae.js";import"./react-router-2eefc5ae.js";import"./@remix-run-fd712092.js";import"./jsonexport-57422552.js";import"./inflection-78216119.js";import"./eventemitter3-0e0e7991.js";import"./history-a3b20500.js";import"./react-is-147ad7aa.js";import"./react-hook-form-22e22630.js";import"./prop-types-4d501b15.js";import"./react-router-dom-84bf4029.js";import"./react-error-boundary-a3724ffa.js";(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerpolicy&&(t.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?t.credentials="include":a.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(a){if(a.ep)return;a.ep=!0;const t=o(a);fetch(a.href,t)}})();const c=Q({});let le=()=>{console.log(c.getList()),c.getList("users",{filter:{alive:!0},sort:{field:"name",order:"ascending"},pagination:{page:1,perPage:200}}).then(r=>{let g=r.data,o={};g.forEach(t=>{o[t.team]?o[t.team].push(t):o[t.team]=[t]});let u=Object.keys(o),a=[];Object.keys(o).forEach(t=>{let l=o[t],i=u[Math.floor(Math.random()*u.length)],f=0;for(;!i||l[0].history.includes(i)||i===t||a.includes(i);)if(i=u[Math.floor(Math.random()*u.length)],f++,f>100){i="No team found!";break}a.push(i),l.forEach(p=>{c.update("users",{id:p.id,data:{target:i,history:[...p.history,i]}})})})})},me=()=>{c.getList("users",{sort:{field:"name",order:"ascending"},pagination:{page:1,perPage:200}}).then(r=>{r.data.forEach(o=>{c.update("users",{id:o.id,data:{target:"",history:[]}})})})},ce=()=>{let[r,g]=h.useState(-1),[o,u]=h.useState(-1),[a,t]=h.useState(-1),[l,i]=h.useState(-1);c.getList("users",{filter:{alive:!0},sort:{field:"name",order:"ascending"},pagination:{page:1,perPage:200}}).then(v=>{setTimeout(()=>{g(v.total)},300)}),c.getList("users",{sort:{field:"name",order:"ascending"},pagination:{page:1,perPage:200}}).then(v=>{let w=v.data,y=0;w.forEach(C=>{y+=parseInt(C.eliminations)}),setTimeout(()=>{u(y)},800)}),c.getList("users",{filter:{alive:!0},sort:{field:"name",order:"ascending"},pagination:{page:1,perPage:200}}).then(v=>{let w=v.data,y={};w.forEach(C=>{y[C.team]?y[C.team].push(C):y[C.team]=[C]}),setTimeout(()=>{i(Object.keys(y).length)},1e3)}),c.getList("users",{filter:{bought_back:!0},sort:{field:"name",order:"ascending"},pagination:{page:1,perPage:200}}).then(v=>{setTimeout(()=>{t(v.total)},500)});let[f,p]=h.useState(!1),[n,d]=h.useState(!1);return e(z,{style:{margin:"1em"},children:s(H,{children:[s($,{children:[e(b,{variant:"h2",sx:{m:2},children:" Dashboard "}),e("br",{}),s(A,{container:!0,spacing:2,children:[s(A,{item:!0,xs:12,sm:6,children:[e(b,{variant:"h6",sx:{m:2},children:" Total Alive Participants: "}),r===-1?e(P,{}):s(b,{variant:"h1",sx:{m:2},children:[" ",r," "]})]}),s(A,{item:!0,xs:12,sm:6,children:[e(b,{variant:"h6",sx:{m:2},children:" Total Eliminations: "}),o===-1?e(P,{}):s(b,{variant:"h1",sx:{m:2},children:[" ",o," "]})]}),s(A,{item:!0,xs:12,sm:6,children:[e(b,{variant:"h6",sx:{m:2},children:" Total Alive Teams: "}),l===-1?e(P,{}):s(b,{variant:"h1",sx:{m:2},children:[" ",l," "]})]}),s(A,{item:!0,xs:12,sm:6,children:[e(b,{variant:"h6",sx:{m:2},children:" Total Amount Raised: "}),r===-1||a===-1?e(P,{}):s(b,{variant:"h1",sx:{m:2},children:[" $",20*r+10*a," "]})]})]})]}),s($,{children:[e(T,{variant:"contained",startIcon:e(q,{}),sx:{m:2},onClick:()=>{p(!0)},children:"Assign Targets"}),e(T,{variant:"contained",startIcon:e(G,{}),color:"error",sx:{m:2},onClick:()=>{d(!0)},children:"Clear History"}),e(I,{isOpen:f,title:"Assign Targets",content:"Are you sure you want to update the assigned targets?",onConfirm:()=>{le(),p(!1),window.location.href="/senior-assassin-game/#/users",window.location.reload()},onClose:()=>{p(!1)}}),e(I,{isOpen:n,title:"Clear Targets",content:"Are you sure you want to clear all targets and history?",onConfirm:()=>{me(),d(!1),window.location.href="/senior-assassin-game/#/users",window.location.reload()},onClose:()=>{d(!1)}})]})]})})},de=({basePath:r})=>{let[g,o]=h.useState(!1),u=()=>{let t=document.createElement("input");t.type="file",t.accept=".csv",t.click(),t.onchange=()=>{c.getList("users",{sort:{field:"name",order:"ascending"},pagination:{page:1,perPage:200}}).then(i=>{i.data.forEach(p=>{c.delete("users",{id:p.id})})});let l=new FileReader;l.readAsText(t.files[0]),l.onload=()=>{let f=l.result.split(`
`);f.shift(),f.forEach(p=>{let n=p.split(",");if(console.log(n),n.length!==8){console.log("Invalid CSV");return}let d=n[0],v=n[1],w=n[2],y=n[3]==="true",C=n[4]==="true",L=n[5]||"",_=n[6].split(";")||[],m=n[7]||0;c.create("users",{data:{id:d,name:v,team:w,alive:y,bought_back:C,target:L,history:_,eliminations:m}}),window.location.reload()})}}};return s(se,{children:[e(oe,{size:"large",basepath:r}),e(T,{size:"large",color:"primary",startIcon:e(K,{}),onClick:()=>{c.getList("users",{sort:{field:"name",order:"ascending"},pagination:{page:1,perPage:200}}).then(t=>{let l=t.data,i=`id,name,team,alive,bought_back,target,history,eliminations
`;l.forEach(d=>{i+=`${d.id},${d.name},${d.team},${d.alive},${d.bought_back},${d.target},${d.history.join(";")},${d.eliminations}
`});let f=new Blob([i],{type:"text/csv"}),p=window.URL.createObjectURL(f),n=document.createElement("a");n.href=p,n.download="users.csv",n.click()})},children:"Export"}),e(T,{size:"large",color:"primary",startIcon:e(V,{}),onClick:()=>{o(!0)},children:"Import"}),e(I,{isOpen:g,title:"Import Users",content:"This will delete all users and import new ones. Are you sure?",onConfirm:()=>{u(),o(!1)},onClose:()=>{o(!1)}})]})},ue=()=>e(Z,{actions:e(de,{}),children:s(ee,{children:[e(te,{label:"Name",render:r=>e(T,{color:r.alive?"success":"error",onClick:()=>{window.location.href="/senior-assassin-game/#/users/"+r.id},children:r.name})}),e(B,{source:"team"}),e(B,{source:"target"}),e(U,{source:"alive"}),e(U,{source:"bought_back"}),e(ae,{source:"eliminations"})]})}),pe=()=>{let[r,g]=h.useState(""),[o,u]=h.useState(!1),[a,t]=h.useState(""),[l,i]=h.useState(!1),[f,p]=h.useState(0),[n,d]=h.useState([]),[v,w]=h.useState(""),y=m=>{let S=m.target.value;g(S),c.getList("users",{sort:{field:"name",order:"ascending"},pagination:{page:1,perPage:200}}).then(O=>{let N=O.data,E={};N.forEach(k=>{E[k.team]?E[k.team].push(k):E[k.team]=[k]}),E[S]?u(!0):u(!1)})},C=m=>{let S=m.target.value;t(S),c.getList("users",{sort:{field:"name",order:"ascending"},pagination:{page:1,perPage:200}}).then(O=>{let N=O.data,E=[];N.forEach(k=>{E.push(k.name)}),E.includes(S)?i(!0):i(!1)})},L=m=>{m.preventDefault(),c.create("users",{data:{name:a,team:r,target:v,alive:!0,bought_back:!1,eliminations:f,history:n}})};return e(re,{children:s(M,{toolbar:e(()=>s(ne,{children:[e(T,{disabled:r===""&&a==="",variant:"contained",sx:{m:2},color:"success",onClick:m=>{L(m),window.location.href="/senior-assassin-game/#/users"},children:" Save and Return "}),e(T,{disabled:r===""&&a==="",variant:"outline",sx:{m:2},onClick:m=>{L(m),window.location.reload(!1)},children:" Save and Add  "}),e(T,{variant:"outline",sx:{m:2},onClick:()=>{window.location.href="/senior-assassin-game/#/users"},children:" Cancel "})]}),{}),children:[e(x,{label:"Participant Name",source:"name",onChange:C}),e(x,{label:"Team Name",source:"team",onChange:y}),e(x,{label:"Target",source:"target",onChange:m=>w(m.target.value)}),e(R,{label:"Eliminations",source:"eliminations",onChange:m=>p(m.target.value)}),e(j,{source:"history",onChange:m=>d(m.target.value),children:e(D,{children:e(x,{})})}),r!==""&&(o?s(b,{variant:"h6",sx:{m:2},style:{color:"green"},children:[" '",r,"' is already a team. "]}):s(b,{variant:"h6",sx:{m:2},children:[" '",r,"' will create a new team. "]})),a!==""&&l&&s(b,{variant:"h6",sx:{m:2},style:{color:"red"},children:[" '",a,"' is already a participant. Consider changing the name. "]})]})})},he=()=>e(ie,{children:s(M,{children:[e(x,{source:"name"}),e(x,{source:"team"}),e(x,{source:"target"}),e(F,{source:"alive"}),e(F,{source:"bought_back"}),e(R,{label:"Eliminations",source:"eliminations"}),e(j,{source:"history",children:e(D,{children:e(x,{})})})]})});function ge(){return e(X,{dataProvider:c,dashboard:ce,title:"Data Manager",children:e(Y,{name:"users",list:ue,create:pe,edit:he})})}J.render(e(W.StrictMode,{children:e(ge,{})}),document.getElementById("root"));
