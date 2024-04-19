import{c as _}from"./Layout.vue_vue_type_script_setup_true_lang-CtPcOp1A.js";import{h as x,s as h,o as p,f as m,b as a,a as d,u,w as g,d as v,e as y,G as w,n as c,t as f}from"./app-Mrv2_nhE.js";import{_ as C}from"./index-BH6WRkr4.js";import{_ as b}from"./Input.vue_vue_type_script_setup_true_lang-Cqo8g78x.js";/**
 * @license lucide-vue-next v0.370.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=_("ShareIcon",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]),I={class:"flex w-full items-center gap-1.5"},q=x({__name:"TaskInput",props:{listId:{type:String,required:!0}},emits:["task-added"],setup(e,{emit:l}){const n=l,t=h(""),i=e;async function r(){if(t.value!="")try{const s=await w.post("/lists/"+i.listId+"/task",{task:t.value});t.value="",document.getElementById("task").focus(),n("task-added",s.data)}catch(s){console.log(s)}}return(s,o)=>(p(),m("form",{onSubmit:o[1]||(o[1]=y(k=>r(),["prevent"])),class:"py-4"},[a("div",I,[d(u(b),{id:"task",type:"task",placeholder:"+ task",modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=k=>t.value=k)},null,8,["modelValue"]),d(u(C),{type:"submit"},{default:g(()=>[v(" + ")]),_:1})])],32))}});function $(e,l){return p(),m("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",fill:"currentColor"})])}const S={class:"flex-1 space-y-1"},V={class:"text-sm text-muted-foreground"},B={class:"block text-xs"},E=x({__name:"TaskItem",props:{task:{type:Object,required:!0}},emits:["task-updated"],setup(e,{emit:l}){const n=e,t=l;async function i(){try{const r=await axios.post("/lists/"+n.task.task_list_id+"/task/"+n.task.id,{completed:n.task.completed_at!=null?0:1});t("task-updated")}catch(r){console.log(r)}}return(r,s)=>(p(),m("div",{class:c(["flex items-center p-4 space-x-4 border rounded-md",{"bg-green-50 border-green-200 text-green-500":e.task.completed_at}])},[a("button",{onClick:s[0]||(s[0]=o=>i())},[d(u($),{class:c({"text-green-500":e.task.completed_at})},null,8,["class"])]),a("div",S,[a("p",V,[a("span",{class:c({"line-through":e.task.completed_at})},f(e.task.description),3),a("span",B,f(e.task.completed_at),1)])])],2))}});export{j as S,q as _,E as a};