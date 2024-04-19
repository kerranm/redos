import{o as m,f as h,r as x,z as $,k as C,q as B,j as D,c as S,a,w as l,v as p,x as y,b as e,y as _,n as b,g as V,A as E,s as v,T as U,B as A,d as w,u as i,C as T}from"./app-Mrv2_nhE.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./InputError-QP6t1v0e.js";import{_ as M,a as O}from"./TextInput-B4vnZHst.js";const P={},W={class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"};function j(s,n){return m(),h("button",W,[x(s.$slots,"default")])}const g=N(P,[["render",j]]),F={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},I=e("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),K=[I],L={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(s,{emit:n}){const t=s,o=n;$(()=>t.show,()=>{t.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const d=()=>{t.closeable&&o("close")},r=u=>{u.key==="Escape"&&t.show&&d()};C(()=>document.addEventListener("keydown",r)),B(()=>{document.removeEventListener("keydown",r),document.body.style.overflow=null});const c=D(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[t.maxWidth]);return(u,f)=>(m(),S(E,{to:"body"},[a(_,{"leave-active-class":"duration-200"},{default:l(()=>[p(e("div",F,[a(_,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[p(e("div",{class:"fixed inset-0 transform transition-all",onClick:d},K,512),[[y,s.show]])]),_:1}),a(_,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:l(()=>[p(e("div",{class:b(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",c.value])},[s.show?x(u.$slots,"default",{key:0}):V("",!0)],2),[[y,s.show]])]),_:3})],512),[[y,s.show]])]),_:3})]))}},q=["type"],G={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(s){return(n,t)=>(m(),h("button",{type:s.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"},[x(n.$slots,"default")],8,q))}},H={class:"space-y-6"},J=e("header",null,[e("h2",{class:"text-lg font-medium text-gray-900"},"Delete Account"),e("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1),Q={class:"p-6"},R=e("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete your account? ",-1),X=e("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),Y={class:"mt-6"},Z={class:"mt-6 flex justify-end"},ae={__name:"DeleteUserForm",setup(s){const n=v(!1),t=v(null),o=U({password:""}),d=()=>{n.value=!0,A(()=>t.value.focus())},r=()=>{o.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>t.value.focus(),onFinish:()=>o.reset()})},c=()=>{n.value=!1,o.reset()};return(u,f)=>(m(),h("section",H,[J,a(g,{onClick:d},{default:l(()=>[w("Delete Account")]),_:1}),a(L,{show:n.value,onClose:c},{default:l(()=>[e("div",Q,[R,X,e("div",Y,[a(M,{for:"password",value:"Password",class:"sr-only"}),a(O,{id:"password",ref_key:"passwordInput",ref:t,modelValue:i(o).password,"onUpdate:modelValue":f[0]||(f[0]=k=>i(o).password=k),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:T(r,["enter"])},null,8,["modelValue"]),a(z,{message:i(o).errors.password,class:"mt-2"},null,8,["message"])]),e("div",Z,[a(G,{onClick:c},{default:l(()=>[w(" Cancel ")]),_:1}),a(g,{class:b(["ms-3",{"opacity-25":i(o).processing}]),disabled:i(o).processing,onClick:r},{default:l(()=>[w(" Delete Account ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{ae as default};
