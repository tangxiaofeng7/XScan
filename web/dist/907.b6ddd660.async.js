(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[907],{64335:function(se,H,l){"use strict";var A=l(67294),S=(0,A.createContext)({});H.Z=S},85224:function(se,H,l){"use strict";var A=l(22122),S=l(28991),P=l(84305),I=l(39559),re=l(81253),T=l(67294),O=l(94184),K=l.n(O),W=l(97435),a=l(56264),w=l.n(a),F=l(64335),ae=["children","className","extra","style","renderContent"],X=function(B){var z=B.children,Y=B.className,V=B.extra,me=B.style,J=B.renderContent,ce=(0,re.Z)(B,ae),de=(0,T.useContext)(I.ZP.ConfigContext),ue=de.getPrefixCls,j=B.prefixCls||ue("pro"),fe="".concat(j,"-footer-bar"),x=(0,T.useContext)(F.Z),ne=(0,T.useMemo)(function(){var Q=x.hasSiderMenu,G=x.isMobile,_=x.siderWidth;if(!!Q)return _?G?"100%":"calc(100% - ".concat(_,"px)"):"100%"},[x.collapsed,x.hasSiderMenu,x.isMobile,x.siderWidth]),oe=T.createElement(T.Fragment,null,T.createElement("div",{className:"".concat(fe,"-left")},V),T.createElement("div",{className:"".concat(fe,"-right")},z));return(0,T.useEffect)(function(){return!x||!(x==null?void 0:x.setHasFooterToolbar)?function(){}:(x==null||x.setHasFooterToolbar(!0),function(){var Q;x==null||(Q=x.setHasFooterToolbar)===null||Q===void 0||Q.call(x,!1)})},[]),T.createElement("div",(0,A.Z)({className:K()(Y,"".concat(fe)),style:(0,S.Z)({width:ne},me)},(0,W.Z)(ce,["prefixCls"])),J?J((0,S.Z)((0,S.Z)((0,S.Z)({},B),x),{},{leftWidth:ne}),oe):oe)};H.Z=X},81907:function(se,H,l){"use strict";l.d(H,{ZP:function(){return Mt}});var A=l(38663),S=l(70883),P=l(22122),I=l(96156),re=l(6610),T=l(5991),O=l(10379),K=l(44144),W=l(90484),a=l(67294),w=l(94184),F=l.n(w),ae=l(98423),X=l(48717),L=l(65632),B=l(85061),z=l(75164);function Y(o){var e,r=function(i){return function(){e=null,o.apply(void 0,(0,B.Z)(i))}},t=function(){if(e==null){for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];e=(0,z.Z)(r(c))}};return t.cancel=function(){return z.Z.cancel(e)},t}function V(){return function(e,r,t){var n=t.value,i=!1;return{configurable:!0,get:function(){if(i||this===e.prototype||this.hasOwnProperty(r))return n;var s=Y(n.bind(this));return i=!0,Object.defineProperty(this,r,{value:s,configurable:!0,writable:!0}),i=!1,s}}}}var me=l(64019);function J(o){return o!==window?o.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function ce(o,e,r){if(r!==void 0&&e.top>o.top-r)return r+e.top}function de(o,e,r){if(r!==void 0&&e.bottom<o.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var ue=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],j=[];function fe(){return j}function x(o,e){if(!!o){var r=j.find(function(t){return t.target===o});r?r.affixList.push(e):(r={target:o,affixList:[e],eventHandlers:{}},j.push(r),ue.forEach(function(t){r.eventHandlers[t]=(0,me.Z)(o,t,function(){r.affixList.forEach(function(n){n.lazyUpdatePosition()})})}))}}function ne(o){var e=j.find(function(r){var t=r.affixList.some(function(n){return n===o});return t&&(r.affixList=r.affixList.filter(function(n){return n!==o})),t});e&&e.affixList.length===0&&(j=j.filter(function(r){return r!==e}),ue.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var oe=function(o,e,r,t){var n=arguments.length,i=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,c;if((typeof Reflect=="undefined"?"undefined":(0,W.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,r,t);else for(var s=o.length-1;s>=0;s--)(c=o[s])&&(i=(n<3?c(i):n>3?c(e,r,i):c(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};function Q(){return typeof window!="undefined"?window:null}var G;(function(o){o[o.None=0]="None",o[o.Prepare=1]="Prepare"})(G||(G={}));var _=function(o){(0,O.Z)(r,o);var e=(0,K.Z)(r);function r(){var t;return(0,re.Z)(this,r),t=e.apply(this,arguments),t.state={status:G.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var n=t.props,i=n.offsetBottom,c=n.offsetTop;return i===void 0&&c===void 0?0:c},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(n){t.placeholderNode=n},t.saveFixedNode=function(n){t.fixedNode=n},t.measure=function(){var n=t.state,i=n.status,c=n.lastAffix,s=t.props.onChange,f=t.getTargetFunc();if(!(i!==G.Prepare||!t.fixedNode||!t.placeholderNode||!f)){var d=t.getOffsetTop(),m=t.getOffsetBottom(),h=f();if(!!h){var u={status:G.None},g=J(h),v=J(t.placeholderNode),b=ce(v,g,d),p=de(v,g,m);b!==void 0?(u.affixStyle={position:"fixed",top:b,width:v.width,height:v.height},u.placeholderStyle={width:v.width,height:v.height}):p!==void 0&&(u.affixStyle={position:"fixed",bottom:p,width:v.width,height:v.height},u.placeholderStyle={width:v.width,height:v.height}),u.lastAffix=!!u.affixStyle,s&&c!==u.lastAffix&&s(u.lastAffix),t.setState(u)}}},t.prepareMeasure=function(){if(t.setState({status:G.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var n},t}return(0,T.Z)(r,[{key:"getTargetFunc",value:function(){var n=this.context.getTargetContainer,i=this.props.target;return i!==void 0?i:n||Q}},{key:"componentDidMount",value:function(){var n=this,i=this.getTargetFunc();i&&(this.timeout=setTimeout(function(){x(i(),n),n.updatePosition()}))}},{key:"componentDidUpdate",value:function(n){var i=this.state.prevTarget,c=this.getTargetFunc(),s=(c==null?void 0:c())||null;i!==s&&(ne(this),s&&(x(s,this),this.updatePosition()),this.setState({prevTarget:s})),(n.offsetTop!==this.props.offsetTop||n.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),ne(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var n=this.getTargetFunc(),i=this.state.affixStyle;if(n&&i){var c=this.getOffsetTop(),s=this.getOffsetBottom(),f=n();if(f&&this.placeholderNode){var d=J(f),m=J(this.placeholderNode),h=ce(m,d,c),u=de(m,d,s);if(h!==void 0&&i.top===h||u!==void 0&&i.bottom===u)return}}this.prepareMeasure()}},{key:"render",value:function(){var n=this,i=this.context.getPrefixCls,c=this.state,s=c.affixStyle,f=c.placeholderStyle,d=this.props,m=d.prefixCls,h=d.children,u=F()((0,I.Z)({},i("affix",m),!!s)),g=(0,ae.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return a.createElement(X.Z,{onResize:function(){n.updatePosition()}},a.createElement("div",(0,P.Z)({},g,{ref:this.savePlaceholderNode}),s&&a.createElement("div",{style:f,"aria-hidden":"true"}),a.createElement("div",{className:u,ref:this.saveFixedNode,style:s},a.createElement(X.Z,{onResize:function(){n.updatePosition()}},h))))}}]),r}(a.Component);_.contextType=L.E_,oe([V()],_.prototype,"updatePosition",null),oe([V()],_.prototype,"lazyUpdatePosition",null);var Fe=a.forwardRef(function(o,e){return a.createElement(_,(0,P.Z)({},o,{ref:e}))}),Ue=Fe,jt=l(84305),he=l(39559),Gt=l(59903),kt=l(81262),Xt=l(30887),Yt=l(59250),Vt=l(94233),xe=l(28481),Z=l(28991),We={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},He=We,ye=l(27029),Ee=function(e,r){return a.createElement(ye.Z,(0,Z.Z)((0,Z.Z)({},e),{},{ref:r,icon:He}))};Ee.displayName="ArrowLeftOutlined";var ze=a.forwardRef(Ee),$e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ke=$e,Pe=function(e,r){return a.createElement(ye.Z,(0,Z.Z)((0,Z.Z)({},e),{},{ref:r,icon:Ke}))};Pe.displayName="ArrowRightOutlined";var je=a.forwardRef(Pe),Ge=l(50344),ke=l(57254),Xe=l(81555),Ye=function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(r[t[n]]=o[t[n]]);return r},pe=function(e){var r=e.prefixCls,t=e.separator,n=t===void 0?"/":t,i=e.children,c=e.overlay,s=e.dropdownProps,f=Ye(e,["prefixCls","separator","children","overlay","dropdownProps"]),d=a.useContext(L.E_),m=d.getPrefixCls,h=m("breadcrumb",r),u=function(b){return c?a.createElement(Xe.Z,(0,P.Z)({overlay:c,placement:"bottom"},s),a.createElement("span",{className:"".concat(h,"-overlay-link")},b,a.createElement(ke.Z,null))):b},g;return"href"in f?g=a.createElement("a",(0,P.Z)({className:"".concat(h,"-link")},f),i):g=a.createElement("span",(0,P.Z)({className:"".concat(h,"-link")},f),i),g=u(g),i?a.createElement("span",null,g,n&&a.createElement("span",{className:"".concat(h,"-separator")},n)):null};pe.__ANT_BREADCRUMB_ITEM=!0;var Re=pe,Ne=function(e){var r=e.children,t=a.useContext(L.E_),n=t.getPrefixCls,i=n("breadcrumb");return a.createElement("span",{className:"".concat(i,"-separator")},r||"/")};Ne.__ANT_BREADCRUMB_SEPARATOR=!0;var Ve=Ne,Oe=l(54689),Je=l(21687),Qe=l(96159),_e=function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(r[t[n]]=o[t[n]]);return r};function qe(o,e){if(!o.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=o.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(n,i){return e[i]||n});return t}function et(o,e,r,t){var n=r.indexOf(o)===r.length-1,i=qe(o,e);return n?a.createElement("span",null,i):a.createElement("a",{href:"#/".concat(t.join("/"))},i)}var Ze=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},tt=function(e,r,t){var n=(0,B.Z)(e),i=Ze(r||"",t);return i&&n.push(i),n},ge=function(e){var r=e.prefixCls,t=e.separator,n=t===void 0?"/":t,i=e.style,c=e.className,s=e.routes,f=e.children,d=e.itemRender,m=d===void 0?et:d,h=e.params,u=h===void 0?{}:h,g=_e(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),v=a.useContext(L.E_),b=v.getPrefixCls,p=v.direction,E,y=b("breadcrumb",r);if(s&&s.length>0){var R=[];E=s.map(function(C){var N=Ze(C.path,u);N&&R.push(N);var U;return C.children&&C.children.length&&(U=a.createElement(Oe.Z,null,C.children.map(function(M){return a.createElement(Oe.Z.Item,{key:M.path||M.breadcrumbName},m(M,u,s,tt(R,M.path,u)))}))),a.createElement(Re,{overlay:U,separator:n,key:N||C.breadcrumbName},m(C,u,s,R))})}else f&&(E=(0,Ge.Z)(f).map(function(C,N){return C&&((0,Je.Z)(C.type&&(C.type.__ANT_BREADCRUMB_ITEM===!0||C.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,Qe.Tm)(C,{separator:n,key:N}))}));var $=F()(y,(0,I.Z)({},"".concat(y,"-rtl"),p==="rtl"),c);return a.createElement("div",(0,P.Z)({className:$,style:i},g),E)};ge.Item=Re,ge.Separator=Ve;var rt=ge,at=rt,nt=l(51890),ot=l(34952),it=l(42051),lt=l(73577),st=function(e,r,t){return!r||!t?null:a.createElement(it.Z,{componentName:"PageHeader"},function(n){var i=n.back;return a.createElement("div",{className:"".concat(e,"-back")},a.createElement(ot.Z,{onClick:function(s){t==null||t(s)},className:"".concat(e,"-back-button"),"aria-label":i},r))})},ct=function(e){return a.createElement(at,e)},dt=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?a.createElement(je,null):a.createElement(ze,null)},ut=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",n=r.title,i=r.avatar,c=r.subTitle,s=r.tags,f=r.extra,d=r.onBack,m="".concat(e,"-heading"),h=n||c||s||f;if(!h)return null;var u=dt(r,t),g=st(e,u,d),v=g||i||h;return a.createElement("div",{className:m},v&&a.createElement("div",{className:"".concat(m,"-left")},g,i&&a.createElement(nt.C,i),n&&a.createElement("span",{className:"".concat(m,"-title"),title:typeof n=="string"?n:void 0},n),c&&a.createElement("span",{className:"".concat(m,"-sub-title"),title:typeof c=="string"?c:void 0},c),s&&a.createElement("span",{className:"".concat(m,"-tags")},s)),f&&a.createElement("span",{className:"".concat(m,"-extra")},f))},ft=function(e,r){return r?a.createElement("div",{className:"".concat(e,"-footer")},r):null},vt=function(e,r){return a.createElement("div",{className:"".concat(e,"-content")},r)},mt=function(e){var r=a.useState(!1),t=(0,xe.Z)(r,2),n=t[0],i=t[1],c=(0,lt.Z)(),s=function(d){var m=d.width;c()||i(m<768)};return a.createElement(L.C,null,function(f){var d,m=f.getPrefixCls,h=f.pageHeader,u=f.direction,g,v=e.prefixCls,b=e.style,p=e.footer,E=e.children,y=e.breadcrumb,R=e.breadcrumbRender,$=e.className,C=!0;"ghost"in e?C=e.ghost:h&&"ghost"in h&&(C=h.ghost);var N=m("page-header",v),U=function(){return(y==null?void 0:y.routes)?ct(y):null},M=U(),q=y&&"props"in y,D=(g=R==null?void 0:R(e,M))!==null&&g!==void 0?g:M,ee=q?y:D,ve=F()(N,$,(d={"has-breadcrumb":!!ee,"has-footer":!!p},(0,I.Z)(d,"".concat(N,"-ghost"),C),(0,I.Z)(d,"".concat(N,"-rtl"),u==="rtl"),(0,I.Z)(d,"".concat(N,"-compact"),n),d));return a.createElement(X.Z,{onResize:s},a.createElement("div",{className:ve,style:b},ee,ut(N,e,u),E&&vt(N,E),ft(N,p)))})},ht=mt,Te=l(81253),Jt=l(18106),Be=l(58634),be=l(64335),Qt=l(53645),gt=function(e){var r=(0,a.useContext)(be.Z),t=e.children,n=e.contentWidth,i=e.className,c=e.style,s=(0,a.useContext)(he.ZP.ConfigContext),f=s.getPrefixCls,d=e.prefixCls||f("pro"),m=n||r.contentWidth,h="".concat(d,"-grid-content");return a.createElement("div",{className:F()(h,i,{wide:m==="Fixed"}),style:c},a.createElement("div",{className:"".concat(d,"-grid-content-children")},t))},bt=gt,Ct=l(85224),_t=l(12395),xt=l(83832),yt=function(e){if(!e)return 1;var r=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/r},Et=function(e){var r=e.children,t=e.style,n=e.className,i=e.markStyle,c=e.markClassName,s=e.zIndex,f=s===void 0?9:s,d=e.gapX,m=d===void 0?212:d,h=e.gapY,u=h===void 0?222:h,g=e.width,v=g===void 0?120:g,b=e.height,p=b===void 0?64:b,E=e.rotate,y=E===void 0?-22:E,R=e.image,$=e.content,C=e.offsetLeft,N=e.offsetTop,U=e.fontStyle,M=U===void 0?"normal":U,q=e.fontWeight,D=q===void 0?"normal":q,ee=e.fontColor,ve=ee===void 0?"rgba(0,0,0,.15)":ee,Ce=e.fontSize,Me=Ce===void 0?16:Ce,De=e.fontFamily,Ae=De===void 0?"sans-serif":De,Dt=e.prefixCls,At=(0,a.useContext)(he.ZP.ConfigContext),St=At.getPrefixCls,Se=St("pro-layout-watermark",Dt),Lt=F()("".concat(Se,"-wrapper"),n),It=F()(Se,c),wt=(0,a.useState)(""),Le=(0,xe.Z)(wt,2),Ft=Le[0],Ie=Le[1];return(0,a.useEffect)(function(){var ie=document.createElement("canvas"),k=ie.getContext("2d"),te=yt(k),Ut="".concat((m+v)*te,"px"),Wt="".concat((u+p)*te,"px"),Ht=C||m/2,zt=N||u/2;if(ie.setAttribute("width",Ut),ie.setAttribute("height",Wt),k){k.translate(Ht*te,zt*te),k.rotate(Math.PI/180*Number(y));var $t=v*te,we=p*te;if(R){var le=new Image;le.crossOrigin="anonymous",le.referrerPolicy="no-referrer",le.src=R,le.onload=function(){k.drawImage(le,0,0,$t,we),Ie(ie.toDataURL())}}else if($){var Kt=Number(Me)*te;k.font="".concat(M," normal ").concat(D," ").concat(Kt,"px/").concat(we,"px ").concat(Ae),k.fillStyle=ve,k.fillText($,0,0),Ie(ie.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[m,u,C,N,y,M,D,v,p,Ae,ve,R,$,Me]),a.createElement("div",{style:(0,Z.Z)({position:"relative"},t),className:Lt},r,a.createElement("div",{className:It,style:(0,Z.Z)({zIndex:f,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(m+v,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(Ft,"')")},i)}))},Pt=Et,pt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],Rt=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function Nt(o){return(0,W.Z)(o)==="object"?o:{spinning:o}}var Ot=function(e){var r=e.tabList,t=e.tabActiveKey,n=e.onTabChange,i=e.tabBarExtraContent,c=e.tabProps,s=e.prefixedClassName;return Array.isArray(r)||i?a.createElement(Be.Z,(0,P.Z)({className:"".concat(s,"-tabs"),activeKey:t,onChange:function(d){n&&n(d)},tabBarExtraContent:i},c),r==null?void 0:r.map(function(f,d){return a.createElement(Be.Z.TabPane,(0,P.Z)({},f,{tab:f.tab,key:f.key||d}))})):null},Zt=function(e,r,t){return!e&&!r?null:a.createElement("div",{className:"".concat(t,"-detail")},a.createElement("div",{className:"".concat(t,"-main")},a.createElement("div",{className:"".concat(t,"-row")},e&&a.createElement("div",{className:"".concat(t,"-content")},e),r&&a.createElement("div",{className:"".concat(t,"-extraContent")},r))))},qt=function(e){var r=useContext(RouteContext);return React.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},React.createElement(_Breadcrumb,_extends({},r==null?void 0:r.breadcrumb,r==null?void 0:r.breadcrumbProps,e)))},Tt=function(e){var r,t=(0,a.useContext)(be.Z),n=e.title,i=e.content,c=e.pageHeaderRender,s=e.header,f=e.prefixedClassName,d=e.extraContent,m=e.style,h=e.prefixCls,u=e.breadcrumbRender,g=(0,Te.Z)(e,pt),v=(0,a.useMemo)(function(){if(!!u)return u},[u]);if(c===!1)return null;if(c)return a.createElement(a.Fragment,null," ",c((0,Z.Z)((0,Z.Z)({},e),t)));var b=n;!n&&n!==!1&&(b=t.title);var p=(0,Z.Z)((0,Z.Z)((0,Z.Z)({},t),{},{title:b},g),{},{footer:Ot((0,Z.Z)((0,Z.Z)({},g),{},{breadcrumbRender:u,prefixedClassName:f}))},s),E=p.breadcrumb,y=(!E||!(E==null?void 0:E.itemRender)&&!(E==null||(r=E.routes)===null||r===void 0?void 0:r.length))&&!u;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(R){return!p[R]})&&y&&!i&&!d?null:a.createElement("div",{className:"".concat(f,"-warp")},a.createElement(ht,(0,P.Z)({},p,{breadcrumb:u===!1?void 0:(0,Z.Z)((0,Z.Z)({},p.breadcrumb),t.breadcrumbProps),breadcrumbRender:v,prefixCls:h}),(s==null?void 0:s.children)||Zt(i,d,f)))},Bt=function(e){var r,t,n=e.children,i=e.loading,c=i===void 0?!1:i,s=e.className,f=e.style,d=e.footer,m=e.affixProps,h=e.ghost,u=e.fixedHeader,g=e.breadcrumbRender,v=(0,Te.Z)(e,Rt),b=(0,a.useContext)(be.Z),p=(0,a.useContext)(he.ZP.ConfigContext),E=p.getPrefixCls,y=e.prefixCls||E("pro"),R="".concat(y,"-page-container"),$=F()(R,s,(r={},(0,I.Z)(r,"".concat(y,"-page-container-ghost"),h),(0,I.Z)(r,"".concat(y,"-page-container-with-footer"),d),r)),C=(0,a.useMemo)(function(){return n?a.createElement(a.Fragment,null,a.createElement("div",{className:"".concat(R,"-children-content")},n),b.hasFooterToolbar&&a.createElement("div",{style:{height:48,marginTop:24}})):null},[n,R,b.hasFooterToolbar]),N=(0,a.useMemo)(function(){var D;return g==!1?!1:g||(v==null||(D=v.header)===null||D===void 0?void 0:D.breadcrumbRender)},[g,v==null||(t=v.header)===null||t===void 0?void 0:t.breadcrumbRender]),U=a.createElement(Tt,(0,P.Z)({},v,{breadcrumbRender:N,ghost:h,prefixCls:void 0,prefixedClassName:R})),M=(0,a.useMemo)(function(){if(a.isValidElement(c))return c;if(typeof c=="boolean"&&!c)return null;var D=Nt(c);return a.createElement(xt.Z,D)},[c]),q=(0,a.useMemo)(function(){var D=M||C;if(e.waterMarkProps||b.waterMarkProps){var ee=(0,Z.Z)((0,Z.Z)({},b.waterMarkProps),e.waterMarkProps);return a.createElement(Pt,ee,D)}return D},[e.waterMarkProps,b.waterMarkProps,M,C]);return a.createElement("div",{style:f,className:$},u&&U?a.createElement(Ue,(0,P.Z)({offsetTop:b.hasHeader&&b.fixedHeader?b.headerHeight:0},m),U):U,q&&a.createElement(bt,null,q),d&&a.createElement(Ct.Z,{prefixCls:y},d))},Mt=Bt},56264:function(){},53645:function(){},12395:function(){},70883:function(){},81262:function(){},59903:function(){},73577:function(se,H,l){"use strict";l.d(H,{Z:function(){return S}});var A=l(67294);function S(){var P=A.useRef(!0);return A.useEffect(function(){return function(){P.current=!1}},[]),function(){return!P.current}}},34952:function(se,H,l){"use strict";var A=l(22122),S=l(67294),P=l(15105),I=function(O,K){var W={};for(var a in O)Object.prototype.hasOwnProperty.call(O,a)&&K.indexOf(a)<0&&(W[a]=O[a]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var w=0,a=Object.getOwnPropertySymbols(O);w<a.length;w++)K.indexOf(a[w])<0&&Object.prototype.propertyIsEnumerable.call(O,a[w])&&(W[a[w]]=O[a[w]]);return W},re={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},T=S.forwardRef(function(O,K){var W=function(z){var Y=z.keyCode;Y===P.Z.ENTER&&z.preventDefault()},a=function(z){var Y=z.keyCode,V=O.onClick;Y===P.Z.ENTER&&V&&V()},w=O.style,F=O.noStyle,ae=O.disabled,X=I(O,["style","noStyle","disabled"]),L={};return F||(L=(0,A.Z)({},re)),ae&&(L.pointerEvents="none"),L=(0,A.Z)((0,A.Z)({},L),w),S.createElement("div",(0,A.Z)({role:"button",tabIndex:0,ref:K},X,{onKeyDown:W,onKeyUp:a,style:L}))});H.Z=T}}]);