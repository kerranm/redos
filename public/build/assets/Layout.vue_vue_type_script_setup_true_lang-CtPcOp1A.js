import{_ as o}from"./index-BH6WRkr4.js";import{J as p,h as w,o as h,f as z,b as r,a,w as s,u as e,i,c as f,g as m,r as k}from"./app-Mrv2_nhE.js";/**
 * @license lucide-vue-next v0.370.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.370.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.370.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(c,t)=>({size:n,strokeWidth:u=2,absoluteStrokeWidth:y,color:_,class:D,...v},{attrs:b,slots:g})=>p("svg",{...d,width:n||d.width,height:n||d.height,stroke:_||d.stroke,"stroke-width":y?Number(u)*24/Number(n):u,...b,class:["lucide",`lucide-${C(c)}`],...v},[...t.map(x=>p(...x)),...g.default?[g.default()]:[]]);/**
 * @license lucide-vue-next v0.370.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=l("BookIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-vue-next v0.370.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=l("CodeXmlIcon",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.370.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=l("ListChecksIcon",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-vue-next v0.370.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=l("LogInIcon",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-vue-next v0.370.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=l("Settings2Icon",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-vue-next v0.370.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=l("SquareCheckIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.370.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=l("SquareUserIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]]);/**
 * @license lucide-vue-next v0.370.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=l("TriangleIcon",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]),H={class:"grid h-screen w-full pl-[53px]"},N={class:"fixed left-0 z-20 flex flex-col h-full border-r inset-y"},V={class:"p-2 border-b"},j={class:"grid gap-1 p-2"},P={class:"grid gap-1 p-2 mt-auto"},T={class:"flex flex-col"},U={class:"sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4"},X={class:"grid flex-1 gap-4 p-4 overflow-auto lg:grid-cols-1"},Z={class:"relative flex-col gap-1 md:flex"},K=w({__name:"Layout",props:{canLogin:{type:Boolean,required:!0},canRegister:{type:Boolean,required:!0}},setup(c){return(t,n)=>(h(),z("div",H,[r("aside",N,[r("div",V,[a(e(o),{"as-child":"",variant:"outline",size:"icon","aria-label":"Home"},{default:s(()=>[a(e(i),{href:t.route("welcome")},{default:s(()=>[a(e(A),{class:"size-5 fill-foreground"})]),_:1},8,["href"])]),_:1})]),r("nav",j,[a(e(o),{"as-child":"",variant:"ghost",size:"icon",class:"rounded-lg bg-muted","aria-label":"Playground"},{default:s(()=>[a(e(i),{href:t.route("welcome")},{default:s(()=>[a(e(S),{class:"size-5"})]),_:1},8,["href"])]),_:1}),a(e(o),{"as-child":"",variant:"ghost",size:"icon",class:"rounded-lg","aria-label":"Models"},{default:s(()=>[a(e(i),{href:t.route("lists.index")},{default:s(()=>[a(e(q),{class:"size-5"})]),_:1},8,["href"])]),_:1}),a(e(o),{variant:"ghost",size:"icon",class:"rounded-lg","aria-label":"API"},{default:s(()=>[a(e(M),{class:"size-5"})]),_:1}),a(e(o),{variant:"ghost",size:"icon",class:"rounded-lg","aria-label":"Documentation"},{default:s(()=>[a(e(I),{class:"size-5"})]),_:1}),a(e(o),{variant:"ghost",size:"icon",class:"rounded-lg","aria-label":"Settings"},{default:s(()=>[a(e(L),{class:"size-5"})]),_:1})]),r("nav",P,[t.$page.props.auth.user?m("",!0):(h(),f(e(o),{key:0,"as-child":"",href:t.route("login"),variant:"ghost",size:"icon",class:"mt-auto rounded-lg","aria-label":"Login"},{default:s(()=>[a(e(i),{href:t.route("login")},{default:s(()=>[a(e(B),{class:"size-5"})]),_:1},8,["href"])]),_:1},8,["href"])),t.$page.props.auth.user?(h(),f(e(o),{key:1,"as-child":"",variant:"ghost",size:"icon",class:"mt-auto rounded-lg","aria-label":"Account"},{default:s(()=>[a(e(i),{href:t.route("profile.edit")},{default:s(()=>[a(e($),{class:"size-5"})]),_:1},8,["href"])]),_:1})):m("",!0)])]),r("div",T,[r("header",U,[k(t.$slots,"header")]),r("main",X,[r("div",Z,[k(t.$slots,"default")])])])]))}});export{K as _,l as c};
