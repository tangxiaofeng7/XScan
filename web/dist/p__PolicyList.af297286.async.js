(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[420],{5966:function(U,x,e){"use strict";var L=e(22122),S=e(81253),T=e(67294),W=e(45114),V=["fieldProps","proFieldProps"],h=["fieldProps","proFieldProps"],f="text",B=function(c){var M=c.fieldProps,b=c.proFieldProps,I=(0,S.Z)(c,V);return T.createElement(W.Z,(0,L.Z)({mode:"edit",valueType:f,fieldProps:M,filedConfig:{valueType:f},proFieldProps:b},I))},n=function(c){var M=c.fieldProps,b=c.proFieldProps,I=(0,S.Z)(c,h);return T.createElement(W.Z,(0,L.Z)({mode:"edit",valueType:"password",fieldProps:M,proFieldProps:b,filedConfig:{valueType:f}},I))},R=B;R.Password=n,R.displayName="ProFormComponent",x.Z=R},16894:function(U,x,e){"use strict";var L=e(7381),S=e(40280);x.ZP=S.Z},5705:function(U,x,e){"use strict";e.r(x),e.d(x,{default:function(){return ue}});var L=e(57663),S=e(71577),T=e(2824),W=e(11849),V=e(34792),h=e(48086),f=e(3182),B=e(94043),n=e.n(B),R=e(49101),d=e(67294),c=e(21010),M=e(81907),b=e(85224),I=e(16894),H=e(22122),K=e(28991),z=e(81253),N=e(45114),G=e(22270),Q=e(66758),X=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],k=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],q=d.forwardRef(function(a,p){var u=a.fieldProps,o=a.children,Z=a.params,r=a.proFieldProps,F=a.mode,D=a.valueEnum,C=a.request,m=a.showSearch,A=a.options,j=(0,z.Z)(a,X),g=(0,d.useContext)(Q.Z);return d.createElement(N.Z,(0,H.Z)({mode:"edit",valueEnum:(0,G.h)(D),request:C,params:Z,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,K.Z)({options:A,mode:F,showSearch:m,getPopupContainer:g.getPopupContainer},u),ref:p,proFieldProps:r},j),o)}),_=d.forwardRef(function(a,p){var u=a.fieldProps,o=a.children,Z=a.params,r=a.proFieldProps,F=a.mode,D=a.valueEnum,C=a.request,m=a.options,A=(0,z.Z)(a,k),j=(0,K.Z)({options:m,mode:F||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},u),g=(0,d.useContext)(Q.Z);return d.createElement(N.Z,(0,H.Z)({mode:"edit",valueEnum:(0,G.h)(D),request:C,params:Z,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,K.Z)({getPopupContainer:g.getPopupContainer},j),ref:p,proFieldProps:r},A),o)}),ee=q,re=_,$=ee;$.SearchSelect=re,$.displayName="ProFormComponent";var ae=$,te=e(8890),Y=e(5966),w=e(36571),s=e(85893),se=function(){var a=(0,f.Z)(n().mark(function p(u){var o;return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return o=h.default.loading("\u6B63\u5728\u6DFB\u52A0"),r.prev=1,r.next=4,(0,w.b8)((0,W.Z)({},u));case 4:return o(),h.default.success("Added successfully"),r.abrupt("return",!0);case 9:return r.prev=9,r.t0=r.catch(1),o(),h.default.error("Adding failed, please try again!"),r.abrupt("return",!1);case 14:case"end":return r.stop()}},p,null,[[1,9]])}));return function(u){return a.apply(this,arguments)}}(),le=function(){var a=(0,f.Z)(n().mark(function p(u){var o;return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(o=h.default.loading("\u6B63\u5728\u5220\u9664"),u){r.next=3;break}return r.abrupt("return",!0);case 3:return r.prev=3,r.next=6,(0,w.cM)({id:u.map(function(F){return F.id})});case 6:return o(),h.default.success("Deleted successfully and will refresh soon"),r.abrupt("return",!0);case 11:return r.prev=11,r.t0=r.catch(3),o(),h.default.error("Delete failed, please try again"),r.abrupt("return",!1);case 16:case"end":return r.stop()}},p,null,[[3,11]])}));return function(u){return a.apply(this,arguments)}}(),ne=function(){var p=(0,d.useState)([]),u=(0,T.Z)(p,2),o=u[0],Z=u[1],r=(0,d.useState)(!1),F=(0,T.Z)(r,2),D=F[0],C=F[1],m=(0,d.useRef)(),A=(0,d.useState)([]),j=(0,T.Z)(A,2),g=j[0],J=j[1],oe=[{title:"ID",dataIndex:"id",hideInSearch:!0,editable:!1,width:"7%"},{title:"\u9879\u76EE",editable:!1,dataIndex:"task",ellipsis:!0},{title:"\u5E73\u53F0",dataIndex:"platform",hideInSearch:!1,valueEnum:{fofa:{text:"fofa",status:"Success"},hunter:{text:"hunter",status:"Success"},zoomeye:{text:"zoomeye",status:"Success"}},editable:!1},{title:"\u7B56\u7565",dataIndex:"rule",copyable:!0,hideInSearch:!0},{title:"\u8FDB\u5EA6",hideInSearch:!0,dataIndex:"excute_time",valueType:"progress",editable:!1},{title:"\u64CD\u4F5C",valueType:"option",render:function(i,l,P,t){return[(0,s.jsx)("a",{onClick:function(){var v;t==null||(v=t.startEditable)===null||v===void 0||v.call(t,l.id)},children:"\u7F16\u8F91"},"editable"),(0,s.jsx)(S.Z,{disabled:l.excute_time!=="0",type:"primary",danger:!0,onClick:(0,f.Z)(n().mark(function y(){var v;return n().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return console.log(l.excute_time),t==null||t.reload(),O.next=4,(0,w.ZU)({id:l.id});case 4:v=O.sent,h.default.info(v.data),t==null||t.reload();case 7:case"end":return O.stop()}},y)})),children:"\u6267\u884C"},"excute")]}}];return(0,s.jsxs)(M.ZP,{ghost:!0,children:[(0,s.jsx)(I.ZP,{actionRef:m,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[(0,s.jsxs)(S.Z,{type:"primary",onClick:function(){C(!0)},children:[(0,s.jsx)(R.Z,{})," \u65B0\u5EFA"]},"primary")]},request:w.l4,columns:oe,rowSelection:{onChange:function(i,l){J(l)}},editable:{type:"multiple",editableKeys:o,onSave:function(){var E=(0,f.Z)(n().mark(function l(P,t){return n().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,w.i5)({id:P,rule:t.rule});case 2:h.default.success("Configuration is successful"),m.current&&m.current.reload();case 4:case"end":return v.stop()}},l)}));function i(l,P){return E.apply(this,arguments)}return i}(),onChange:Z,actionRender:function(i,l,P){return[P.save,P.cancel]}}}),(g==null?void 0:g.length)>0&&(0,s.jsx)(b.Z,{extra:(0,s.jsxs)("div",{children:[(0,s.jsx)(c._H,{id:"pages.searchTable.chosen",defaultMessage:"Chosen"})," ",(0,s.jsx)("a",{style:{fontWeight:600},children:g.length})," ",(0,s.jsx)(c._H,{id:"pages.searchTable.item",defaultMessage:"\u9879"})]}),children:(0,s.jsx)(S.Z,{type:"primary",onClick:(0,f.Z)(n().mark(function E(){var i,l;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le(g);case 2:J([]),(i=m.current)===null||i===void 0||(l=i.reloadAndRest)===null||l===void 0||l.call(i);case 4:case"end":return t.stop()}},E)})),children:(0,s.jsx)(c._H,{id:"pages.searchTable.batchDeletion",defaultMessage:"Batch deletion"})})}),(0,s.jsxs)(te.Y,{title:"\u65B0\u5EFA\u7B56\u7565",width:"400px",visible:D,onVisibleChange:C,onFinish:function(){var E=(0,f.Z)(n().mark(function i(l){var P;return n().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,se(l);case 2:P=y.sent,P&&(C(!1),m.current&&m.current.reload());case 4:case"end":return y.stop()}},i)}));return function(i){return E.apply(this,arguments)}}(),children:[(0,s.jsx)(Y.Z,{label:"\u9879\u76EE",rules:[{required:!0,message:"\u89C4\u5219\u4E3A\u5FC5\u586B\u9879"}],width:"md",name:"task",placeholder:"\u8F93\u5165\u9879\u76EE"}),(0,s.jsx)(ae,{name:"platform",label:"\u5E73\u53F0",valueEnum:{fofa:"Fofa",hunter:"Hunter",shodan:"Shodan",quake:"Quake"},width:"md",rules:[{required:!0,message:"\u89C4\u5219\u4E3A\u5FC5\u586B\u9879"}],placeholder:"\u9009\u62E9\u5E73\u53F0"}),(0,s.jsx)(Y.Z,{label:"\u89C4\u5219",rules:[{required:!0,message:"\u89C4\u5219\u4E3A\u5FC5\u586B\u9879"}],width:"md",name:"rule",placeholder:"\u8F93\u5165\u89C4\u5219"})]})]})},ue=ne}}]);
