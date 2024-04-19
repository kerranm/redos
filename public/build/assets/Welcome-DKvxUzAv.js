import{k as x,p as L,s as T,o as n,f as p,a as t,u as o,w as r,F as m,Z as C,b as l,t as S,e as _,d as b,c as k,g as I,l as B}from"./app-Mrv2_nhE.js";import{S as R,_ as $,a as z}from"./TaskItem.vue_vue_type_script_setup_true_lang-C_z06Bzq.js";import{_ as g}from"./index-BH6WRkr4.js";import{_ as N}from"./Layout.vue_vue_type_script_setup_true_lang-CtPcOp1A.js";import{R as V}from"./refresh-ccw-EMreQbjv.js";import"./Input.vue_vue_type_script_setup_true_lang-Cqo8g78x.js";const F={class:"text-xl font-semibold"},M={class:"space-y-2"},W={class:"flex justify-around p-2"},H={__name:"Welcome",props:{canLogin:{type:Boolean},canRegister:{type:Boolean}},setup(j){x(()=>{h()});const s=L([]),a=T({});async function v(){d(),localStorage.removeItem("taskListId"),await c()}async function h(){const e=localStorage.getItem("taskListId");e?u(e):await c()}function d(){s.splice(0,s.length)}async function u(e){d();try{const i=await axios.get("/list/"+e);a.value=i.data,a.value.tasks&&s.push(...a.value.tasks)}catch{console.log("creating a new one"),await c()}}async function c(){const e=await axios.post("/lists");a.value=e.data,localStorage.setItem("taskListId",e.data.id)}function y(e){s.push(e)}async function w(){window.isSecureContext&&navigator.clipboard&&(await navigator.clipboard.writeText("https://abbio.com/share/"+a.value.id),alert("Copied"))}return(e,i)=>(n(),p(m,null,[t(o(C),{title:"Welcome"}),t(N,{"can-login":"canLogin","can-register":"canRegister"},{header:r(()=>[l("h1",F,"Reference: "+S(a.value.id),1),t(o(g),{variant:"outline",size:"sm",class:"ml-auto gap-1.5 text-sm",onClick:_(w,["prevent"])},{default:r(()=>[t(o(R),{class:"size-3.5"}),b(" Share ")]),_:1})]),default:r(()=>[a.value&&a.value.id?(n(),k($,{key:0,"list-id":a.value.id,onTaskAdded:y},null,8,["list-id"])):I("",!0),l("div",M,[(n(!0),p(m,null,B(s,f=>(n(),k(z,{key:f.id,task:f,onTaskUpdated:i[0]||(i[0]=A=>u(a.value.id))},null,8,["task"]))),128))]),l("div",W,[t(o(g),{variant:"outline",onClick:_(v,["prevent"])},{default:r(()=>[t(o(V),{size:"14",class:"text-gray-900"})]),_:1})])]),_:1})],64))}};export{H as default};