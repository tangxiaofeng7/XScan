(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[748],{64335:function(ie,j,o){"use strict";var Z=o(67294),W=(0,Z.createContext)({});j.Z=W},85224:function(ie,j,o){"use strict";var Z=o(22122),W=o(28991),R=o(84305),S=o(39559),Y=o(81253),D=o(67294),P=o(94184),M=o.n(P),K=o(97435),n=o(56264),w=o.n(n),N=o(64335),G=["children","className","extra","style","renderContent"],X=function($){var q=$.children,te=$.className,s=$.extra,f=$.style,d=$.renderContent,p=(0,Y.Z)($,G),I=(0,D.useContext)(S.ZP.ConfigContext),z=I.getPrefixCls,A=$.prefixCls||z("pro"),k="".concat(A,"-footer-bar"),b=(0,D.useContext)(N.Z),re=(0,D.useMemo)(function(){var le=b.hasSiderMenu,ae=b.isMobile,se=b.siderWidth;if(!!le)return se?ae?"100%":"calc(100% - ".concat(se,"px)"):"100%"},[b.collapsed,b.hasSiderMenu,b.isMobile,b.siderWidth]),Q=D.createElement(D.Fragment,null,D.createElement("div",{className:"".concat(k,"-left")},s),D.createElement("div",{className:"".concat(k,"-right")},q));return(0,D.useEffect)(function(){return!b||!(b==null?void 0:b.setHasFooterToolbar)?function(){}:(b==null||b.setHasFooterToolbar(!0),function(){var le;b==null||(le=b.setHasFooterToolbar)===null||le===void 0||le.call(b,!1)})},[]),D.createElement("div",(0,Z.Z)({className:M()(te,"".concat(k)),style:(0,W.Z)({width:re},f)},(0,K.Z)(p,["prefixCls"])),d?d((0,W.Z)((0,W.Z)((0,W.Z)({},$),b),{},{leftWidth:re}),Q):Q)};j.Z=X},81907:function(ie,j,o){"use strict";o.d(j,{ZP:function(){return At}});var Z=o(38663),W=o(70883),R=o(22122),S=o(96156),Y=o(6610),D=o(5991),P=o(10379),M=o(44144),K=o(90484),n=o(67294),w=o(94184),N=o.n(w),G=o(98423),X=o(48717),E=o(65632),$=o(85061),q=o(75164);function te(i){var e,r=function(l){return function(){e=null,i.apply(void 0,(0,$.Z)(l))}},t=function(){if(e==null){for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];e=(0,q.Z)(r(u))}};return t.cancel=function(){return q.Z.cancel(e)},t}function s(){return function(e,r,t){var a=t.value,l=!1;return{configurable:!0,get:function(){if(l||this===e.prototype||this.hasOwnProperty(r))return a;var c=te(a.bind(this));return l=!0,Object.defineProperty(this,r,{value:c,configurable:!0,writable:!0}),l=!1,c}}}}var f=o(64019);function d(i){return i!==window?i.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function p(i,e,r){if(r!==void 0&&e.top>i.top-r)return r+e.top}function I(i,e,r){if(r!==void 0&&e.bottom<i.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var z=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],A=[];function k(){return A}function b(i,e){if(!!i){var r=A.find(function(t){return t.target===i});r?r.affixList.push(e):(r={target:i,affixList:[e],eventHandlers:{}},A.push(r),z.forEach(function(t){r.eventHandlers[t]=(0,f.Z)(i,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function re(i){var e=A.find(function(r){var t=r.affixList.some(function(a){return a===i});return t&&(r.affixList=r.affixList.filter(function(a){return a!==i})),t});e&&e.affixList.length===0&&(A=A.filter(function(r){return r!==e}),z.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var Q=function(i,e,r,t){var a=arguments.length,l=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,u;if((typeof Reflect=="undefined"?"undefined":(0,K.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(i,e,r,t);else for(var c=i.length-1;c>=0;c--)(u=i[c])&&(l=(a<3?u(l):a>3?u(e,r,l):u(e,r))||l);return a>3&&l&&Object.defineProperty(e,r,l),l};function le(){return typeof window!="undefined"?window:null}var ae;(function(i){i[i.None=0]="None",i[i.Prepare=1]="Prepare"})(ae||(ae={}));var se=function(i){(0,P.Z)(r,i);var e=(0,M.Z)(r);function r(){var t;return(0,Y.Z)(this,r),t=e.apply(this,arguments),t.state={status:ae.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props,l=a.offsetBottom,u=a.offsetTop;return l===void 0&&u===void 0?0:u},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,l=a.status,u=a.lastAffix,c=t.props.onChange,h=t.getTargetFunc();if(!(l!==ae.Prepare||!t.fixedNode||!t.placeholderNode||!h)){var v=t.getOffsetTop(),y=t.getOffsetBottom(),x=h();if(!!x){var m={status:ae.None},C=d(x),g=d(t.placeholderNode),O=p(g,C,v),_=I(g,C,y);O!==void 0?(m.affixStyle={position:"fixed",top:O,width:g.width,height:g.height},m.placeholderStyle={width:g.width,height:g.height}):_!==void 0&&(m.affixStyle={position:"fixed",bottom:_,width:g.width,height:g.height},m.placeholderStyle={width:g.width,height:g.height}),m.lastAffix=!!m.affixStyle,c&&u!==m.lastAffix&&c(m.lastAffix),t.setState(m)}}},t.prepareMeasure=function(){if(t.setState({status:ae.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},t}return(0,D.Z)(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,l=this.props.target;return l!==void 0?l:a||le}},{key:"componentDidMount",value:function(){var a=this,l=this.getTargetFunc();l&&(this.timeout=setTimeout(function(){b(l(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var l=this.state.prevTarget,u=this.getTargetFunc(),c=(u==null?void 0:u())||null;l!==c&&(re(this),c&&(b(c,this),this.updatePosition()),this.setState({prevTarget:c})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),re(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),l=this.state.affixStyle;if(a&&l){var u=this.getOffsetTop(),c=this.getOffsetBottom(),h=a();if(h&&this.placeholderNode){var v=d(h),y=d(this.placeholderNode),x=p(y,v,u),m=I(y,v,c);if(x!==void 0&&l.top===x||m!==void 0&&l.bottom===m)return}}this.prepareMeasure()}},{key:"render",value:function(){var a=this,l=this.context.getPrefixCls,u=this.state,c=u.affixStyle,h=u.placeholderStyle,v=this.props,y=v.prefixCls,x=v.children,m=N()((0,S.Z)({},l("affix",y),!!c)),C=(0,G.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return n.createElement(X.Z,{onResize:function(){a.updatePosition()}},n.createElement("div",(0,R.Z)({},C,{ref:this.savePlaceholderNode}),c&&n.createElement("div",{style:h,"aria-hidden":"true"}),n.createElement("div",{className:m,ref:this.saveFixedNode,style:c},n.createElement(X.Z,{onResize:function(){a.updatePosition()}},x))))}}]),r}(n.Component);se.contextType=E.E_,Q([s()],se.prototype,"updatePosition",null),Q([s()],se.prototype,"lazyUpdatePosition",null);var We=n.forwardRef(function(i,e){return n.createElement(se,(0,R.Z)({},i,{ref:e}))}),_e=We,$t=o(84305),he=o(39559),zt=o(59903),kt=o(81262),Gt=o(30887),Xt=o(59250),Yt=o(94233),be=o(28481),H=o(28991),Ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Fe=Ue,Ce=o(27029),Ee=function(e,r){return n.createElement(Ce.Z,(0,H.Z)((0,H.Z)({},e),{},{ref:r,icon:Fe}))};Ee.displayName="ArrowLeftOutlined";var He=n.forwardRef(Ee),Ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},je=Ke,pe=function(e,r){return n.createElement(Ce.Z,(0,H.Z)((0,H.Z)({},e),{},{ref:r,icon:je}))};pe.displayName="ArrowRightOutlined";var $e=n.forwardRef(pe),ze=o(50344),ke=o(57254),Ge=o(81555),Xe=function(i,e){var r={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&e.indexOf(t)<0&&(r[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(i);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(i,t[a])&&(r[t[a]]=i[t[a]]);return r},Pe=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,l=e.children,u=e.overlay,c=e.dropdownProps,h=Xe(e,["prefixCls","separator","children","overlay","dropdownProps"]),v=n.useContext(E.E_),y=v.getPrefixCls,x=y("breadcrumb",r),m=function(O){return u?n.createElement(Ge.Z,(0,R.Z)({overlay:u,placement:"bottom"},c),n.createElement("span",{className:"".concat(x,"-overlay-link")},O,n.createElement(ke.Z,null))):O},C;return"href"in h?C=n.createElement("a",(0,R.Z)({className:"".concat(x,"-link")},h),l):C=n.createElement("span",(0,R.Z)({className:"".concat(x,"-link")},h),l),C=m(C),l?n.createElement("span",null,C,a&&n.createElement("span",{className:"".concat(x,"-separator")},a)):null};Pe.__ANT_BREADCRUMB_ITEM=!0;var Oe=Pe,Re=function(e){var r=e.children,t=n.useContext(E.E_),a=t.getPrefixCls,l=a("breadcrumb");return n.createElement("span",{className:"".concat(l,"-separator")},r||"/")};Re.__ANT_BREADCRUMB_SEPARATOR=!0;var Ye=Re,Me=o(54689),Qe=o(21687),Ve=o(96159),Je=function(i,e){var r={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&e.indexOf(t)<0&&(r[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(i);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(i,t[a])&&(r[t[a]]=i[t[a]]);return r};function qe(i,e){if(!i.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=i.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,l){return e[l]||a});return t}function et(i,e,r,t){var a=r.indexOf(i)===r.length-1,l=qe(i,e);return a?n.createElement("span",null,l):n.createElement("a",{href:"#/".concat(t.join("/"))},l)}var Te=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},tt=function(e,r,t){var a=(0,$.Z)(e),l=Te(r||"",t);return l&&a.push(l),a},ge=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,l=e.style,u=e.className,c=e.routes,h=e.children,v=e.itemRender,y=v===void 0?et:v,x=e.params,m=x===void 0?{}:x,C=Je(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),g=n.useContext(E.E_),O=g.getPrefixCls,_=g.direction,L,B=O("breadcrumb",r);if(c&&c.length>0){var U=[];L=c.map(function(T){var F=Te(T.path,m);F&&U.push(F);var ee;return T.children&&T.children.length&&(ee=n.createElement(Me.Z,null,T.children.map(function(V){return n.createElement(Me.Z.Item,{key:V.path||V.breadcrumbName},y(V,m,c,tt(U,V.path,m)))}))),n.createElement(Oe,{overlay:ee,separator:a,key:F||T.breadcrumbName},y(T,m,c,U))})}else h&&(L=(0,ze.Z)(h).map(function(T,F){return T&&((0,Qe.Z)(T.type&&(T.type.__ANT_BREADCRUMB_ITEM===!0||T.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,Ve.Tm)(T,{separator:a,key:F}))}));var ne=N()(B,(0,S.Z)({},"".concat(B,"-rtl"),_==="rtl"),u);return n.createElement("div",(0,R.Z)({className:ne,style:l},C),L)};ge.Item=Oe,ge.Separator=Ye;var rt=ge,nt=rt,at=o(51890),ot=o(34952),it=o(42051),lt=o(73577),st=function(e,r,t){return!r||!t?null:n.createElement(it.Z,{componentName:"PageHeader"},function(a){var l=a.back;return n.createElement("div",{className:"".concat(e,"-back")},n.createElement(ot.Z,{onClick:function(c){t==null||t(c)},className:"".concat(e,"-back-button"),"aria-label":l},r))})},ct=function(e){return n.createElement(nt,e)},ut=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?n.createElement($e,null):n.createElement(He,null)},dt=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,l=r.avatar,u=r.subTitle,c=r.tags,h=r.extra,v=r.onBack,y="".concat(e,"-heading"),x=a||u||c||h;if(!x)return null;var m=ut(r,t),C=st(e,m,v),g=C||l||x;return n.createElement("div",{className:y},g&&n.createElement("div",{className:"".concat(y,"-left")},C,l&&n.createElement(at.C,l),a&&n.createElement("span",{className:"".concat(y,"-title"),title:typeof a=="string"?a:void 0},a),u&&n.createElement("span",{className:"".concat(y,"-sub-title"),title:typeof u=="string"?u:void 0},u),c&&n.createElement("span",{className:"".concat(y,"-tags")},c)),h&&n.createElement("span",{className:"".concat(y,"-extra")},h))},ft=function(e,r){return r?n.createElement("div",{className:"".concat(e,"-footer")},r):null},vt=function(e,r){return n.createElement("div",{className:"".concat(e,"-content")},r)},mt=function(e){var r=n.useState(!1),t=(0,be.Z)(r,2),a=t[0],l=t[1],u=(0,lt.Z)(),c=function(v){var y=v.width;u()||l(y<768)};return n.createElement(E.C,null,function(h){var v,y=h.getPrefixCls,x=h.pageHeader,m=h.direction,C,g=e.prefixCls,O=e.style,_=e.footer,L=e.children,B=e.breadcrumb,U=e.breadcrumbRender,ne=e.className,T=!0;"ghost"in e?T=e.ghost:x&&"ghost"in x&&(T=x.ghost);var F=y("page-header",g),ee=function(){return(B==null?void 0:B.routes)?ct(B):null},V=ee(),ce=B&&"props"in B,J=(C=U==null?void 0:U(e,V))!==null&&C!==void 0?C:V,ue=ce?B:J,me=N()(F,ne,(v={"has-breadcrumb":!!ue,"has-footer":!!_},(0,S.Z)(v,"".concat(F,"-ghost"),T),(0,S.Z)(v,"".concat(F,"-rtl"),m==="rtl"),(0,S.Z)(v,"".concat(F,"-compact"),a),v));return n.createElement(X.Z,{onResize:c},n.createElement("div",{className:me,style:O},ue,dt(F,e,m),L&&vt(F,L),ft(F,_)))})},ht=mt,Ze=o(81253),Qt=o(18106),Ne=o(58634),ye=o(64335),Vt=o(53645),gt=function(e){var r=(0,n.useContext)(ye.Z),t=e.children,a=e.contentWidth,l=e.className,u=e.style,c=(0,n.useContext)(he.ZP.ConfigContext),h=c.getPrefixCls,v=e.prefixCls||h("pro"),y=a||r.contentWidth,x="".concat(v,"-grid-content");return n.createElement("div",{className:N()(x,l,{wide:y==="Fixed"}),style:u},n.createElement("div",{className:"".concat(v,"-grid-content-children")},t))},yt=gt,xt=o(85224),Jt=o(12395),bt=o(83832),Ct=function(e){if(!e)return 1;var r=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/r},Et=function(e){var r=e.children,t=e.style,a=e.className,l=e.markStyle,u=e.markClassName,c=e.zIndex,h=c===void 0?9:c,v=e.gapX,y=v===void 0?212:v,x=e.gapY,m=x===void 0?222:x,C=e.width,g=C===void 0?120:C,O=e.height,_=O===void 0?64:O,L=e.rotate,B=L===void 0?-22:L,U=e.image,ne=e.content,T=e.offsetLeft,F=e.offsetTop,ee=e.fontStyle,V=ee===void 0?"normal":ee,ce=e.fontWeight,J=ce===void 0?"normal":ce,ue=e.fontColor,me=ue===void 0?"rgba(0,0,0,.15)":ue,xe=e.fontSize,Ae=xe===void 0?16:xe,Be=e.fontFamily,Se=Be===void 0?"sans-serif":Be,Bt=e.prefixCls,St=(0,n.useContext)(he.ZP.ConfigContext),Dt=St.getPrefixCls,De=Dt("pro-layout-watermark",Bt),wt=N()("".concat(De,"-wrapper"),a),It=N()(De,u),Lt=(0,n.useState)(""),we=(0,be.Z)(Lt,2),Wt=we[0],Ie=we[1];return(0,n.useEffect)(function(){var fe=document.createElement("canvas"),oe=fe.getContext("2d"),de=Ct(oe),_t="".concat((y+g)*de,"px"),Ut="".concat((m+_)*de,"px"),Ft=T||y/2,Ht=F||m/2;if(fe.setAttribute("width",_t),fe.setAttribute("height",Ut),oe){oe.translate(Ft*de,Ht*de),oe.rotate(Math.PI/180*Number(B));var Kt=g*de,Le=_*de;if(U){var ve=new Image;ve.crossOrigin="anonymous",ve.referrerPolicy="no-referrer",ve.src=U,ve.onload=function(){oe.drawImage(ve,0,0,Kt,Le),Ie(fe.toDataURL())}}else if(ne){var jt=Number(Ae)*de;oe.font="".concat(V," normal ").concat(J," ").concat(jt,"px/").concat(Le,"px ").concat(Se),oe.fillStyle=me,oe.fillText(ne,0,0),Ie(fe.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[y,m,T,F,B,V,J,g,_,Se,me,U,ne,Ae]),n.createElement("div",{style:(0,H.Z)({position:"relative"},t),className:wt},r,n.createElement("div",{className:It,style:(0,H.Z)({zIndex:h,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(y+g,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(Wt,"')")},l)}))},pt=Et,Pt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],Ot=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function Rt(i){return(0,K.Z)(i)==="object"?i:{spinning:i}}var Mt=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,l=e.tabBarExtraContent,u=e.tabProps,c=e.prefixedClassName;return Array.isArray(r)||l?n.createElement(Ne.Z,(0,R.Z)({className:"".concat(c,"-tabs"),activeKey:t,onChange:function(v){a&&a(v)},tabBarExtraContent:l},u),r==null?void 0:r.map(function(h,v){return n.createElement(Ne.Z.TabPane,(0,R.Z)({},h,{tab:h.tab,key:h.key||v}))})):null},Tt=function(e,r,t){return!e&&!r?null:n.createElement("div",{className:"".concat(t,"-detail")},n.createElement("div",{className:"".concat(t,"-main")},n.createElement("div",{className:"".concat(t,"-row")},e&&n.createElement("div",{className:"".concat(t,"-content")},e),r&&n.createElement("div",{className:"".concat(t,"-extraContent")},r))))},qt=function(e){var r=useContext(RouteContext);return React.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},React.createElement(_Breadcrumb,_extends({},r==null?void 0:r.breadcrumb,r==null?void 0:r.breadcrumbProps,e)))},Zt=function(e){var r,t=(0,n.useContext)(ye.Z),a=e.title,l=e.content,u=e.pageHeaderRender,c=e.header,h=e.prefixedClassName,v=e.extraContent,y=e.style,x=e.prefixCls,m=e.breadcrumbRender,C=(0,Ze.Z)(e,Pt),g=(0,n.useMemo)(function(){if(!!m)return m},[m]);if(u===!1)return null;if(u)return n.createElement(n.Fragment,null," ",u((0,H.Z)((0,H.Z)({},e),t)));var O=a;!a&&a!==!1&&(O=t.title);var _=(0,H.Z)((0,H.Z)((0,H.Z)({},t),{},{title:O},C),{},{footer:Mt((0,H.Z)((0,H.Z)({},C),{},{breadcrumbRender:m,prefixedClassName:h}))},c),L=_.breadcrumb,B=(!L||!(L==null?void 0:L.itemRender)&&!(L==null||(r=L.routes)===null||r===void 0?void 0:r.length))&&!m;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(U){return!_[U]})&&B&&!l&&!v?null:n.createElement("div",{className:"".concat(h,"-warp")},n.createElement(ht,(0,R.Z)({},_,{breadcrumb:m===!1?void 0:(0,H.Z)((0,H.Z)({},_.breadcrumb),t.breadcrumbProps),breadcrumbRender:g,prefixCls:x}),(c==null?void 0:c.children)||Tt(l,v,h)))},Nt=function(e){var r,t,a=e.children,l=e.loading,u=l===void 0?!1:l,c=e.className,h=e.style,v=e.footer,y=e.affixProps,x=e.ghost,m=e.fixedHeader,C=e.breadcrumbRender,g=(0,Ze.Z)(e,Ot),O=(0,n.useContext)(ye.Z),_=(0,n.useContext)(he.ZP.ConfigContext),L=_.getPrefixCls,B=e.prefixCls||L("pro"),U="".concat(B,"-page-container"),ne=N()(U,c,(r={},(0,S.Z)(r,"".concat(B,"-page-container-ghost"),x),(0,S.Z)(r,"".concat(B,"-page-container-with-footer"),v),r)),T=(0,n.useMemo)(function(){return a?n.createElement(n.Fragment,null,n.createElement("div",{className:"".concat(U,"-children-content")},a),O.hasFooterToolbar&&n.createElement("div",{style:{height:48,marginTop:24}})):null},[a,U,O.hasFooterToolbar]),F=(0,n.useMemo)(function(){var J;return C==!1?!1:C||(g==null||(J=g.header)===null||J===void 0?void 0:J.breadcrumbRender)},[C,g==null||(t=g.header)===null||t===void 0?void 0:t.breadcrumbRender]),ee=n.createElement(Zt,(0,R.Z)({},g,{breadcrumbRender:F,ghost:x,prefixCls:void 0,prefixedClassName:U})),V=(0,n.useMemo)(function(){if(n.isValidElement(u))return u;if(typeof u=="boolean"&&!u)return null;var J=Rt(u);return n.createElement(bt.Z,J)},[u]),ce=(0,n.useMemo)(function(){var J=V||T;if(e.waterMarkProps||O.waterMarkProps){var ue=(0,H.Z)((0,H.Z)({},O.waterMarkProps),e.waterMarkProps);return n.createElement(pt,ue,J)}return J},[e.waterMarkProps,O.waterMarkProps,V,T]);return n.createElement("div",{style:h,className:ne},m&&ee?n.createElement(_e,(0,R.Z)({offsetTop:O.hasHeader&&O.fixedHeader?O.headerHeight:0},y),ee):ee,ce&&n.createElement(yt,null,ce),v&&n.createElement(xt.Z,{prefixCls:B},v))},At=Nt},78164:function(ie,j,o){"use strict";var Z=o(57106),W=o(99683),R=o(6610),S=o(5991),Y=o(10379),D=o(44144),P=o(67294),M=function(K){(0,Y.Z)(w,K);var n=(0,D.Z)(w);function w(){var N;(0,R.Z)(this,w);for(var G=arguments.length,X=new Array(G),E=0;E<G;E++)X[E]=arguments[E];return N=n.call.apply(n,[this].concat(X)),N.state={hasError:!1,errorInfo:""},N}return(0,S.Z)(w,[{key:"componentDidCatch",value:function(G,X){console.log(G,X)}},{key:"render",value:function(){return this.state.hasError?P.createElement(W.ZP,{status:"error",title:"Something went wrong.",extra:this.state.errorInfo}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(G){return{hasError:!0,errorInfo:G.message}}}]),w}(P.Component);j.Z=M},56264:function(){},53645:function(){},12395:function(){},70883:function(){},81262:function(){},59903:function(){},73577:function(ie,j,o){"use strict";o.d(j,{Z:function(){return W}});var Z=o(67294);function W(){var R=Z.useRef(!0);return Z.useEffect(function(){return function(){R.current=!1}},[]),function(){return!R.current}}},34952:function(ie,j,o){"use strict";var Z=o(22122),W=o(67294),R=o(15105),S=function(P,M){var K={};for(var n in P)Object.prototype.hasOwnProperty.call(P,n)&&M.indexOf(n)<0&&(K[n]=P[n]);if(P!=null&&typeof Object.getOwnPropertySymbols=="function")for(var w=0,n=Object.getOwnPropertySymbols(P);w<n.length;w++)M.indexOf(n[w])<0&&Object.prototype.propertyIsEnumerable.call(P,n[w])&&(K[n[w]]=P[n[w]]);return K},Y={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},D=W.forwardRef(function(P,M){var K=function(q){var te=q.keyCode;te===R.Z.ENTER&&q.preventDefault()},n=function(q){var te=q.keyCode,s=P.onClick;te===R.Z.ENTER&&s&&s()},w=P.style,N=P.noStyle,G=P.disabled,X=S(P,["style","noStyle","disabled"]),E={};return N||(E=(0,Z.Z)({},Y)),G&&(E.pointerEvents="none"),E=(0,Z.Z)((0,Z.Z)({},E),w),W.createElement("div",(0,Z.Z)({role:"button",tabIndex:0,ref:M},X,{onKeyDown:K,onKeyUp:n,style:E}))});j.Z=D},57186:function(ie,j,o){"use strict";o.d(j,{f:function(){return W}});var Z=o(67294);function W(S){var Y=Z.createContext(null);function D(M){var K=S(M.initialState);return Z.createElement(Y.Provider,{value:K},M.children)}function P(){var M=Z.useContext(Y);if(M===null)throw new Error("Component must be wrapped with <Container.Provider>");return M}return{Provider:D,useContainer:P}}function R(S){return S.useContainer()}},38069:function(ie,j,o){"use strict";o.d(j,{ZP:function(){return te}});var Z=o(67294);function W(s,f){return P(s)||D(s,f)||S(s,f)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(s,f){if(!!s){if(typeof s=="string")return Y(s,f);var d=Object.prototype.toString.call(s).slice(8,-1);if(d==="Object"&&s.constructor&&(d=s.constructor.name),d==="Map"||d==="Set")return Array.from(s);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return Y(s,f)}}function Y(s,f){(f==null||f>s.length)&&(f=s.length);for(var d=0,p=new Array(f);d<f;d++)p[d]=s[d];return p}function D(s,f){var d=s&&(typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"]);if(d!=null){var p=[],I=!0,z=!1,A,k;try{for(d=d.call(s);!(I=(A=d.next()).done)&&(p.push(A.value),!(f&&p.length===f));I=!0);}catch(b){z=!0,k=b}finally{try{!I&&d.return!=null&&d.return()}finally{if(z)throw k}}return p}}function P(s){if(Array.isArray(s))return s}function M(s){var f=typeof window=="undefined",d=(0,Z.useState)(function(){return f?!1:window.matchMedia(s).matches}),p=W(d,2),I=p[0],z=p[1];return(0,Z.useLayoutEffect)(function(){if(!f){var A=window.matchMedia(s),k=function(re){return z(re.matches)};return A.addListener(k),function(){return A.removeListener(k)}}},[s]),I}function K(s,f){return X(s)||G(s,f)||w(s,f)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(s,f){if(!!s){if(typeof s=="string")return N(s,f);var d=Object.prototype.toString.call(s).slice(8,-1);if(d==="Object"&&s.constructor&&(d=s.constructor.name),d==="Map"||d==="Set")return Array.from(s);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return N(s,f)}}function N(s,f){(f==null||f>s.length)&&(f=s.length);for(var d=0,p=new Array(f);d<f;d++)p[d]=s[d];return p}function G(s,f){var d=s&&(typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"]);if(d!=null){var p=[],I=!0,z=!1,A,k;try{for(d=d.call(s);!(I=(A=d.next()).done)&&(p.push(A.value),!(f&&p.length===f));I=!0);}catch(b){z=!0,k=b}finally{try{!I&&d.return!=null&&d.return()}finally{if(z)throw k}}return p}}function X(s){if(Array.isArray(s))return s}var E={xs:{maxWidth:575,matchMedia:"(max-width: 575px)"},sm:{minWidth:576,maxWidth:767,matchMedia:"(min-width: 576px) and (max-width: 767px)"},md:{minWidth:768,maxWidth:991,matchMedia:"(min-width: 768px) and (max-width: 991px)"},lg:{minWidth:992,maxWidth:1199,matchMedia:"(min-width: 992px) and (max-width: 1199px)"},xl:{minWidth:1200,maxWidth:1599,matchMedia:"(min-width: 1200px) and (max-width: 1599px)"},xxl:{minWidth:1600,matchMedia:"(min-width: 1600px)"}},$=function(){var f="md";if(typeof window=="undefined")return f;var d=Object.keys(E).find(function(p){var I=E[p].matchMedia;return!!window.matchMedia(I).matches});return f=d,f},q=function(){var f=M(E.md.matchMedia),d=M(E.lg.matchMedia),p=M(E.xxl.matchMedia),I=M(E.xl.matchMedia),z=M(E.sm.matchMedia),A=M(E.xs.matchMedia),k=(0,Z.useState)($()),b=K(k,2),re=b[0],Q=b[1];return(0,Z.useEffect)(function(){if(p){Q("xxl");return}if(I){Q("xl");return}if(d){Q("lg");return}if(f){Q("md");return}if(z){Q("sm");return}if(A){Q("xs");return}Q("md")},[f,d,p,I,z,A]),re},te=q}}]);
