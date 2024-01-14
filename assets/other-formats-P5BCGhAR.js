import{r as me,u as En,R as Ue,j as L,S as fe,B as $,C as Fe,a as ve,b as gn,_ as Dn,F as Rn,T as Y,c as mn,s as On}from"./index-jI88JVaM.js";function Je(e,n){const[t,i]=me.useState({status:"not-executed",error:void 0,result:n}),a=me.useRef(),s=me.useRef(),l=En({execute(...T){s.current=T;const c=e(...T);return a.current=c,i(r=>({...r,status:"loading"})),c.then(r=>{c===a.current&&i(o=>({...o,status:"success",error:void 0,result:r}))},r=>{c===a.current&&i(o=>({...o,status:"error",error:r}))}),c},reset(){i({status:"not-executed",error:void 0,result:n}),a.current=void 0,s.current=void 0}});return[t,me.useMemo(()=>({reset(){l.current.reset()},execute:(...T)=>l.current.execute(...T)}),[]),{promise:a.current,lastArgs:s.current}]}function dn(e){switch(e){case"index":return`direction: down

Bigbank: {
  label: "Big Bank plc"

  Email: {
    label: "E-mail System"
  }
  Atm: {
    label: "ATM"
  }
  InternetBankingSystem: {
    label: "Internet Banking System"
  }
  Backoffice: {
    label: "Back Office Staff"
    shape: person
  }
  SupportStaff: {
    label: "Customer Service Staff"
    shape: person
  }
  Mainframe: {
    label: "Mainframe Banking System"
  }
}
Customer: {
  label: "Personal Banking Customer"
  shape: person
}

Bigbank.Email -> Customer: "Sends e-mails to"
Customer -> Bigbank.InternetBankingSystem: "Views account balances, and makes payments using"
Customer -> Bigbank.Atm: "Withdraws cash using"
Customer -> Bigbank.SupportStaff: "Asks questions to"
Bigbank.Atm -> Bigbank.Mainframe: "Uses"
Bigbank.InternetBankingSystem -> Bigbank.Email: "Sends e-mail using"
Bigbank.InternetBankingSystem -> Bigbank.Mainframe: "Gets account information from, and makes payments using"
Bigbank.Backoffice -> Bigbank.Mainframe: "Uses"
Bigbank.SupportStaff -> Bigbank.Mainframe: "Uses"
`;case"context":return`direction: down

Bigbank: {
  label: "Big Bank plc"

  InternetBankingSystem: {
    label: "Internet Banking System"
  }
  Email: {
    label: "E-mail System"
  }
  Mainframe: {
    label: "Mainframe Banking System"
  }
}
Customer: {
  label: "Personal Banking Customer"
  shape: person
}

Bigbank.InternetBankingSystem -> Bigbank.Email: "Sends e-mail using"
Bigbank.InternetBankingSystem -> Bigbank.Mainframe: "Gets account information from, and makes payments using"
Bigbank.Email -> Customer: "Sends e-mails to"
Customer -> Bigbank.InternetBankingSystem: "Views account balances, and makes payments using"
`;case"ibsContainers":return`direction: down

Customer: {
  label: "Personal Banking Customer"
  shape: person
}
BigbankInternetBankingSystem: {
  label: "Internet Banking System"

  MobileApp: {
    label: "Mobile App"
  }
  WebApplication: {
    label: "Web Application"
  }
  SinglePageApplication: {
    label: "Single-Page Application"
  }
  ApiApplication: {
    label: "API Application"
  }
  Database: {
    label: "Database"
    shape: stored_data
  }
}
BigbankMainframe: {
  label: "Mainframe Banking System"
}
BigbankEmail: {
  label: "E-mail System"
}

Customer -> BigbankInternetBankingSystem.WebApplication: "Visits bigbank.com using HTTPS"
Customer -> BigbankInternetBankingSystem.MobileApp: "Views account balances, and makes payments using"
Customer -> BigbankInternetBankingSystem.SinglePageApplication: "Views account balances, and makes payments using"
BigbankInternetBankingSystem.MobileApp -> BigbankInternetBankingSystem.ApiApplication: "Makes API calls to\\r [JSON/HTTPS]"
BigbankInternetBankingSystem.WebApplication -> BigbankInternetBankingSystem.SinglePageApplication: "Delivers to the customer's web browser"
BigbankInternetBankingSystem.SinglePageApplication -> BigbankInternetBankingSystem.ApiApplication: "Makes API calls to\\r [JSON/HTTPS]"
BigbankInternetBankingSystem.ApiApplication -> BigbankInternetBankingSystem.Database: "Reads from and writes to\\r [SQL/TCPS]"
BigbankInternetBankingSystem.ApiApplication -> BigbankEmail: "Sends e-mail using"
BigbankInternetBankingSystem.ApiApplication -> BigbankMainframe: "Makes API calls to\\r [JSON/HTTPS]"
BigbankEmail -> Customer: "Sends e-mails to"
`;case"apiApp":return`direction: down

BigbankInternetBankingSystemSinglePageApplication: {
  label: "Single-Page Application"
}
BigbankInternetBankingSystemMobileApp: {
  label: "Mobile App"
}
BigbankInternetBankingSystemApiApplication: {
  label: "API Application"

  SigninController: {
    label: "Sign In Controller"
  }
  AccountsSummaryController: {
    label: "Accounts Summary Controller"
  }
  MainframeBankingSystemFacade: {
    label: "Mainframe Banking System Facade"
  }
  ResetPasswordController: {
    label: "Reset Password Controller"
  }
  SecurityComponent: {
    label: "Security Component"
  }
  EmailComponent: {
    label: "E-mail Component"
  }
}
BigbankMainframe: {
  label: "Mainframe Banking System"
}
BigbankInternetBankingSystemDatabase: {
  label: "Database"
  shape: stored_data
}
BigbankEmail: {
  label: "E-mail System"
}

BigbankInternetBankingSystemSinglePageApplication -> BigbankInternetBankingSystemApiApplication.ResetPasswordController: "Makes API calls to\\r [JSON/HTTPS]"
BigbankInternetBankingSystemSinglePageApplication -> BigbankInternetBankingSystemApiApplication.AccountsSummaryController: "Makes API calls to\\r [JSON/HTTPS]"
BigbankInternetBankingSystemSinglePageApplication -> BigbankInternetBankingSystemApiApplication.SigninController: "Makes API calls to\\r [JSON/HTTPS]"
BigbankInternetBankingSystemMobileApp -> BigbankInternetBankingSystemApiApplication.ResetPasswordController: "Makes API calls to\\r [JSON/HTTPS]"
BigbankInternetBankingSystemMobileApp -> BigbankInternetBankingSystemApiApplication.AccountsSummaryController: "Makes API calls to\\r [JSON/HTTPS]"
BigbankInternetBankingSystemMobileApp -> BigbankInternetBankingSystemApiApplication.SigninController: "Makes API calls to\\r [JSON/HTTPS]"
BigbankInternetBankingSystemApiApplication.SigninController -> BigbankInternetBankingSystemApiApplication.SecurityComponent: "Uses"
BigbankInternetBankingSystemApiApplication.AccountsSummaryController -> BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade: "Uses"
BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade -> BigbankMainframe: "Makes API calls to\\r [JSON/HTTPS]"
BigbankInternetBankingSystemApiApplication.ResetPasswordController -> BigbankInternetBankingSystemApiApplication.EmailComponent: "Uses"
BigbankInternetBankingSystemApiApplication.ResetPasswordController -> BigbankInternetBankingSystemApiApplication.SecurityComponent: "Uses"
BigbankInternetBankingSystemApiApplication.SecurityComponent -> BigbankInternetBankingSystemDatabase: "Reads from and writes to\\r [SQL/TCPS]"
BigbankInternetBankingSystemApiApplication.EmailComponent -> BigbankEmail: "Sends e-mail using"
`;case"customer":return`direction: down

Customer: {
  label: "Personal Banking Customer"
  shape: person
}
Bigbank: {
  label: "Big Bank plc"

  InternetBankingSystemSinglePageApplication: {
    label: "Single-Page Application"
  }
  InternetBankingSystemMobileApp: {
    label: "Mobile App"
  }
  SupportStaff: {
    label: "Customer Service Staff"
    shape: person
  }
  Atm: {
    label: "ATM"
  }
}

Customer -> Bigbank.InternetBankingSystemMobileApp: "Views account balances, and makes payments using"
Customer -> Bigbank.InternetBankingSystemSinglePageApplication: "Views account balances, and makes payments using"
Customer -> Bigbank.Atm: "Withdraws cash using"
Customer -> Bigbank.SupportStaff: "Asks questions to"
Bigbank -> Customer: "Sends e-mails to"
`;case"support":return`direction: down

Bigbank: {
  label: "Big Bank plc"

  Backoffice: {
    label: "Back Office Staff"
    shape: person
  }
  SupportStaff: {
    label: "Customer Service Staff"
    shape: person
  }
  Mainframe: {
    label: "Mainframe Banking System"
  }
}
Customer: {
  label: "Personal Banking Customer"
  shape: person
}

Bigbank.Backoffice -> Bigbank.Mainframe: "Uses"
Customer -> Bigbank.SupportStaff: "Asks questions to"
Bigbank.SupportStaff -> Bigbank.Mainframe: "Uses"
Bigbank -> Customer: "Sends e-mails to"
`;default:throw new Error("Unknown viewId: "+e)}}const{createElement:Le,createContext:pn,createRef:Kn,forwardRef:qe,useCallback:j,useContext:Ke,useEffect:se,useImperativeHandle:$e,useLayoutEffect:Bn,useMemo:In,useRef:J,useState:Se}=Ue,Ve=Ue.useId,ke=pn(null);ke.displayName="PanelGroupContext";const Be=Bn,An=typeof Ve=="function"?Ve:()=>null;let bn=0;function we(e=null){const n=An(),t=J(e||n||null);return t.current===null&&(t.current=""+bn++),e??t.current}function Ye({children:e,className:n="",collapsedSizePercentage:t,collapsedSizePixels:i,collapsible:a,dataAttributes:s,defaultSizePercentage:l,defaultSizePixels:T,forwardedRef:c,id:r,maxSizePercentage:o,maxSizePixels:E,minSizePercentage:g,minSizePixels:f,onCollapse:D,onExpand:k,onResize:C,order:B,style:S,tagName:H="div"}){const z=Ke(ke);if(z===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:I,expandPanel:p,getPanelSize:v,getPanelStyle:Q,groupId:w,isPanelCollapsed:M,registerPanel:re,resizePanel:_,unregisterPanel:X}=z,ee=we(r),V=J({callbacks:{onCollapse:D,onExpand:k,onResize:C},constraints:{collapsedSizePercentage:t,collapsedSizePixels:i,collapsible:a,defaultSizePercentage:l,defaultSizePixels:T,maxSizePercentage:o,maxSizePixels:E,minSizePercentage:g,minSizePixels:f},id:ee,idIsFromProps:r!==void 0,order:B});J({didLogMissingDefaultSizeWarning:!1}),Be(()=>{const{callbacks:q,constraints:Z}=V.current;V.current.id=ee,V.current.idIsFromProps=r!==void 0,V.current.order=B,q.onCollapse=D,q.onExpand=k,q.onResize=C,Z.collapsedSizePercentage=t,Z.collapsedSizePixels=i,Z.collapsible=a,Z.defaultSizePercentage=l,Z.defaultSizePixels=T,Z.maxSizePercentage=o,Z.maxSizePixels=E,Z.minSizePercentage=g,Z.minSizePixels=f}),Be(()=>{const q=V.current;return re(q),()=>{X(q)}},[B,ee,re,X]),$e(c,()=>({collapse:()=>{I(V.current)},expand:()=>{p(V.current)},getId(){return ee},getSize(){return v(V.current)},isCollapsed(){return M(V.current)},isExpanded(){return!M(V.current)},resize:q=>{_(V.current,q)}}),[I,p,v,M,ee,_]);const Ae=Q(V.current);return Le(H,{children:e,className:n,style:{...Ae,...S},...s,"data-panel":"","data-panel-id":ee,"data-panel-group-id":w,"data-panel-collapsible":void 0,"data-panel-size":void 0})}const le=qe((e,n)=>Le(Ye,{...e,forwardedRef:n}));Ye.displayName="Panel";le.displayName="forwardRef(Panel)";function Oe(e,n){return e/n*100}function Ze(e,n){let{collapsedSizePercentage:t=0,collapsedSizePixels:i,defaultSizePercentage:a,defaultSizePixels:s,maxSizePercentage:l=100,maxSizePixels:T,minSizePercentage:c=0,minSizePixels:r}=e;return(i!=null||s!=null||r!=null||T!=null)&&n<=0?(console.warn(`WARNING: Invalid group size: ${n}px`),{collapsedSizePercentage:0,defaultSizePercentage:a,maxSizePercentage:0,minSizePercentage:0}):(i!=null&&(t=Oe(i,n)),s!=null&&(a=Oe(s,n)),r!=null&&(c=Oe(r,n)),T!=null&&(l=Oe(T,n)),{collapsedSizePercentage:t,defaultSizePercentage:a,maxSizePercentage:l,minSizePercentage:c})}function Ee(e,n,t){let i=0,a=0;for(let r=0;r<e.length;r++)if(r!==n){const{collapsible:o}=e[r],{collapsedSizePercentage:E,maxSizePercentage:g,minSizePercentage:f}=Ze(e[r],t);a+=g,i+=o?E:f}const{collapsedSizePercentage:s,defaultSizePercentage:l,maxSizePercentage:T,minSizePercentage:c}=Ze(e[n],t);return{collapsedSizePercentage:s,defaultSizePercentage:l,maxSizePercentage:e.length>1?Math.min(T,100-i):T,minSizePercentage:e.length>1?Math.max(c,100-a):c}}const un=10;function Ie(e,n,t=un){e=parseFloat(e.toFixed(t)),n=parseFloat(n.toFixed(t));const i=e-n;return i===0?0:i>0?1:-1}function U(e,n,t){return Ie(e,n,t)===0}function ce({groupSizePixels:e,panelConstraints:n,panelIndex:t,size:i}){if(n.some(({collapsedSizePixels:r,defaultSizePixels:o,minSizePixels:E,maxSizePixels:g})=>r!=null||o!=null||E!=null||g!=null)&&e<=0)return console.warn(`WARNING: Invalid group size: ${e}px`),0;let{collapsible:s}=n[t];const{collapsedSizePercentage:l,maxSizePercentage:T,minSizePercentage:c}=Ee(n,t,e);if(c!=null&&Ie(i,c)<0)if(s){const r=(l+c)/2;Ie(i,r)<0?i=l:i=c}else i=c;return T!=null&&(i=Math.min(T,i)),i}function de({delta:e,groupSizePixels:n,layout:t,panelConstraints:i,pivotIndices:a,trigger:s}){if(U(e,0))return t;const l=[...t];let T=0;if(s==="keyboard"){{const r=e<0?a[1]:a[0];if(i[r].collapsible){const E=t[r],{collapsedSizePercentage:g,minSizePercentage:f}=Ee(i,r,n);if(U(E,g)){const D=f-E;Ie(D,Math.abs(e))>0&&(e=e<0?0-D:D)}}}{const r=e<0?a[0]:a[1];if(i[r].collapsible){const E=t[r],{collapsedSizePercentage:g,minSizePercentage:f}=Ee(i,r,n);if(U(E,f)){const D=E-g;Ie(D,Math.abs(e))>0&&(e=e<0?0-D:D)}}}}{const r=e<0?1:-1;let o=e<0?a[1]:a[0],E=0;for(;;){const f=t[o],k=ce({groupSizePixels:n,panelConstraints:i,panelIndex:o,size:100})-f;if(E+=k,o+=r,o<0||o>=i.length)break}const g=Math.min(Math.abs(e),Math.abs(E));e=e<0?0-g:g}{let o=e<0?a[0]:a[1];for(;o>=0&&o<i.length;){const E=Math.abs(e)-Math.abs(T),g=t[o],f=g-E,D=ce({groupSizePixels:n,panelConstraints:i,panelIndex:o,size:f});if(!U(g,D)&&(T+=g-D,l[o]=D,T.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?o--:o++}}if(U(T,0))return t;{const r=e<0?a[1]:a[0],o=t[r]+T,E=ce({groupSizePixels:n,panelConstraints:i,panelIndex:r,size:o});if(l[r]=E,!U(E,o)){let g=o-E,D=e<0?a[1]:a[0];for(;D>=0&&D<i.length;){const k=l[D],C=k+g,B=ce({groupSizePixels:n,panelConstraints:i,panelIndex:D,size:C});if(U(k,B)||(g-=B-k,l[D]=B),U(g,0))break;e>0?D--:D++}}}const c=l.reduce((r,o)=>o+r,0);return T=100-c,U(c,100)?l:t}function Qe(e,n="Assertion failed!"){if(!e)throw console.error(n),Error(n)}function ie({sizePercentage:e,sizePixels:n},t){if(e!=null)return e;if(n!=null)return Oe(n,t)}function Nn({groupSizePixels:e,layout:n,panelsArray:t,pivotIndices:i}){let a=0,s=100,l=0,T=0;t.forEach((E,g)=>{var f,D;const{constraints:k}=E,{maxSizePercentage:C,maxSizePixels:B,minSizePercentage:S,minSizePixels:H}=k,z=(f=ie({sizePercentage:S,sizePixels:H},e))!==null&&f!==void 0?f:0,I=(D=ie({sizePercentage:C,sizePixels:B},e))!==null&&D!==void 0?D:100;g===i[0]?(a=z,s=I):(l+=z,T+=I)});const c=Math.min(s,100-l),r=Math.max(a,100-T),o=n[i[0]];return{valueMax:c,valueMin:r,valueNow:o}}function oe(e){return Array.from(document.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function Xe(e,n){const i=oe(e).findIndex(a=>a.getAttribute("data-panel-resize-handle-id")===n);return i??null}function en(e,n){const t=Xe(e,n);return t!=null?[t,t+1]:[-1,-1]}function ge(e){const n=document.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return n||null}function ne(e){const n=ge(e);if(n==null)return NaN;const t=n.getAttribute("data-panel-group-direction"),i=oe(e);return t==="horizontal"?n.offsetWidth-i.reduce((a,s)=>a+s.offsetWidth,0):n.offsetHeight-i.reduce((a,s)=>a+s.offsetHeight,0)}function Cn(e){const n=ge(e);if(n==null)return NaN;const t=n.getAttribute("data-panel-group-direction"),i=oe(e);return t==="horizontal"?n.offsetWidth-i.reduce((a,s)=>a+s.offsetWidth,0):n.offsetHeight-i.reduce((a,s)=>a+s.offsetHeight,0)}function ye(e){const n=document.querySelector(`[data-panel-resize-handle-id="${e}"]`);return n||null}function Sn(e,n,t){var i,a,s,l;const T=ye(n),c=oe(e),r=T?c.indexOf(T):-1,o=(i=(a=t[r])===null||a===void 0?void 0:a.id)!==null&&i!==void 0?i:null,E=(s=(l=t[r+1])===null||l===void 0?void 0:l.id)!==null&&s!==void 0?s:null;return[o,E]}function kn({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:i,panelDataArray:a,setLayout:s}){J({didWarnAboutMissingResizeHandle:!1}),Be(()=>{const l=ne(t),T=oe(t);for(let c=0;c<a.length-1;c++){const{valueMax:r,valueMin:o,valueNow:E}=Nn({groupSizePixels:l,layout:i,panelsArray:a,pivotIndices:[c,c+1]}),g=T[c];g==null||(g.setAttribute("aria-controls",a[c].id),g.setAttribute("aria-valuemax",""+Math.round(r)),g.setAttribute("aria-valuemin",""+Math.round(o)),g.setAttribute("aria-valuenow",""+Math.round(E)))}return()=>{T.forEach((c,r)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,i,a]),se(()=>{const{panelDataArray:l}=n.current,T=ge(t);Qe(T!=null,`No group found for id "${t}"`);const r=oe(t).map(o=>{const E=o.getAttribute("data-panel-resize-handle-id"),[g,f]=Sn(t,E,l);if(g==null||f==null)return()=>{};const D=k=>{if(!k.defaultPrevented)switch(k.key){case"Enter":{k.preventDefault();const S=l.findIndex(H=>H.id===g);if(S>=0){const H=l[S],z=i[S];if(z!=null&&H.constraints.collapsible){var C,B;const I=Cn(t),p=(C=ie({sizePercentage:H.constraints.collapsedSizePercentage,sizePixels:H.constraints.collapsedSizePixels},I))!==null&&C!==void 0?C:0,v=(B=ie({sizePercentage:H.constraints.minSizePercentage,sizePixels:H.constraints.minSizePixels},I))!==null&&B!==void 0?B:0,Q=de({delta:U(z,p)?v-p:p-z,groupSizePixels:I,layout:i,panelConstraints:l.map(w=>w.constraints),pivotIndices:en(t,E),trigger:"keyboard"});i!==Q&&s(Q)}}break}}};return o.addEventListener("keydown",D),()=>{o.removeEventListener("keydown",D)}});return()=>{r.forEach(o=>o())}},[e,n,t,i,a,s])}function ue(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function nn(e){return e.type==="keydown"}function tn(e){return e.type.startsWith("mouse")}function an(e){return e.type.startsWith("touch")}function sn(e,n){const t=e==="horizontal";if(tn(n))return t?n.clientX:n.clientY;if(an(n)){const i=n.touches[0];return t?i.screenX:i.screenY}else throw Error(`Unsupported event type "${n.type}"`)}function yn(e,n,t,i){const a=t==="horizontal",l=ye(n).getAttribute("data-panel-group-id");let{initialCursorPosition:T}=i;const c=sn(t,e),o=ge(l).getBoundingClientRect(),E=a?o.width:o.height;return(c-T)/E*100}function xn(e,n,t,i,a,s){if(nn(e)){const l=i==="horizontal",c=ge(n).getBoundingClientRect(),r=l?c.width:c.height;let o=0;e.shiftKey?o=100:s.percentage!=null?o=s.percentage:s.pixels!=null?o=s.pixels/r:o=10;let E=0;switch(e.key){case"ArrowDown":E=l?0:o;break;case"ArrowLeft":E=l?-o:0;break;case"ArrowRight":E=l?o:0;break;case"ArrowUp":E=l?0:-o;break;case"End":E=100;break;case"Home":E=-100;break}return E}else return yn(e,t,i,a)}function _e({groupSizePixels:e,panelDataArray:n}){const t=Array(n.length),i=n.map(l=>l.constraints);let a=0,s=100;for(let l=0;l<n.length;l++){const{defaultSizePercentage:T}=Ee(i,l,e);T!=null&&(a++,t[l]=T,s-=T)}for(let l=0;l<n.length;l++){const{defaultSizePercentage:T}=Ee(i,l,e);if(T!=null)continue;const c=n.length-a,r=s/c;a++,t[l]=r,s-=r}return t}function K(e,n){return e/100*n}function te(e,n,t,i){const a=ne(e);t.forEach((s,l)=>{const T=n[l];if(!T)return;const{callbacks:c,constraints:r,id:o}=T,{collapsible:E}=r,g={sizePercentage:s,sizePixels:K(s,a)},f=i[o];if(f==null||g.sizePercentage!==f.sizePercentage||g.sizePixels!==f.sizePixels){i[o]=g;const{onCollapse:k,onExpand:C,onResize:B}=c;if(B&&B(g,f),E&&(k||C)){var D;const S=(D=ie({sizePercentage:r.collapsedSizePercentage,sizePixels:r.collapsedSizePixels},a))!==null&&D!==void 0?D:0,H=ie(g,a);C&&(f==null||f.sizePercentage===S)&&H!==S&&C(),k&&(f==null||f.sizePercentage!==S)&&H===S&&k()}}})}function Ne(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function hn({dragState:e,layout:n,panelData:t,panelIndex:i,precision:a=3}){const s=n[i];let l;return t.length===1||s==null?l="1":l=s.toPrecision(a),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:e!==null?"none":void 0}}let He=null,ae=null;function ln(e){switch(e){case"horizontal":return"ew-resize";case"horizontal-max":return"w-resize";case"horizontal-min":return"e-resize";case"vertical":return"ns-resize";case"vertical-max":return"n-resize";case"vertical-min":return"s-resize"}}function Pn(){ae!==null&&(document.head.removeChild(ae),He=null,ae=null)}function Pe(e){if(He===e)return;He=e;const n=ln(e);ae===null&&(ae=document.createElement("style"),document.head.appendChild(ae)),ae.innerHTML=`*{cursor: ${n}!important;}`}function Gn(e,n=10){let t=null;return(...a)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...a)},n)}}function Hn(e){return Array.from(document.querySelectorAll(`[data-panel][data-panel-group-id="${e}"]`))}function We(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function on(e){return e.map(n=>{const{constraints:t,id:i,idIsFromProps:a,order:s}=n;return a?i:`${s}:${JSON.stringify(t)}`}).sort((n,t)=>n.localeCompare(t)).join(",")}function rn(e,n){try{const t=n.getItem(`PanelGroup:sizes:${e}`);if(t){const i=JSON.parse(t);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function Fn(e,n,t){const i=rn(e,t);if(i){var a;const s=on(n);return(a=i[s])!==null&&a!==void 0?a:null}return null}function vn(e,n,t,i){const a=on(n),s=rn(e,i)||{};s[a]=t;try{i.setItem(`PanelGroup:sizes:${e}`,JSON.stringify(s))}catch(l){console.error(l)}}function je(e){return e.some(n=>n.collapsedSizePixels!==void 0||n.maxSizePixels!==void 0||n.minSizePixels!==void 0)}function Ce({groupSizePixels:e,layout:n,panelConstraints:t}){const i=[...n];if(i.length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${i.map(s=>`${s}%`).join(", ")}`);U(i.reduce((s,l)=>s+l,0),100);let a=0;for(let s=0;s<t.length;s++){const l=i[s],T=ce({groupSizePixels:e,panelConstraints:t,panelIndex:s,size:l});l!=T&&(a+=l-T,i[s]=T)}if(!U(a,0))for(let s=0;s<t.length;s++){const l=i[s],T=l+a,c=ce({groupSizePixels:e,panelConstraints:t,panelIndex:s,size:T});if(l!==c&&(a-=c-l,i[s]=c,U(a,0)))break}return i}const wn=100,pe={getItem:e=>(We(pe),pe.getItem(e)),setItem:(e,n)=>{We(pe),pe.setItem(e,n)}},Ge={};function Tn({autoSaveId:e=null,children:n,className:t="",dataAttributes:i,direction:a,forwardedRef:s,id:l,onLayout:T=null,keyboardResizeByPercentage:c=null,keyboardResizeByPixels:r=null,storage:o=pe,style:E,tagName:g="div"}){const f=we(l),[D,k]=Se(null),[C,B]=Se([]),S=J({}),H=J(new Map),z=J(0),I=J({autoSaveId:e,direction:a,dragState:D,id:f,keyboardResizeByPercentage:c,keyboardResizeByPixels:r,onLayout:T,storage:o}),p=J({layout:C,panelDataArray:[]});J({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),$e(s,()=>({getId:()=>I.current.id,getLayout:()=>{const{id:R}=I.current,{layout:A}=p.current,O=ne(R);return A.map(m=>({sizePercentage:m,sizePixels:K(m,O)}))},setLayout:R=>{const{id:A,onLayout:O}=I.current,{layout:m,panelDataArray:d}=p.current,u=ne(A),b=R.map(y=>ie(y,u)),x=Ce({groupSizePixels:u,layout:b,panelConstraints:d.map(y=>y.constraints)});ue(m,x)||(B(x),p.current.layout=x,O&&O(x.map(y=>({sizePercentage:y,sizePixels:K(y,u)}))),te(A,d,x,S.current))}}),[]),Be(()=>{I.current.autoSaveId=e,I.current.direction=a,I.current.dragState=D,I.current.id=f,I.current.onLayout=T,I.current.storage=o}),kn({committedValuesRef:I,eagerValuesRef:p,groupId:f,layout:C,panelDataArray:p.current.panelDataArray,setLayout:B}),se(()=>{const{panelDataArray:R}=p.current;if(e){if(C.length===0||C.length!==R.length)return;Ge[e]||(Ge[e]=Gn(vn,wn)),Ge[e](e,R,C,o)}},[e,C,o]),Be(()=>{const{layout:R,panelDataArray:A}=p.current,O=A.map(({constraints:m})=>m);if(je(O))if(typeof ResizeObserver>"u")console.warn("WARNING: Pixel based constraints require ResizeObserver but it is not supported by the current browser.");else{const m=new ResizeObserver(()=>{const d=ne(f),{onLayout:u}=I.current,b=Ce({groupSizePixels:d,layout:R,panelConstraints:A.map(x=>x.constraints)});ue(R,b)||(B(b),p.current.layout=b,u&&u(b.map(x=>({sizePercentage:x,sizePixels:K(x,d)}))),te(f,A,b,S.current))});return m.observe(ge(f)),()=>{m.disconnect()}}},[f]),se(()=>{});const v=j(R=>{const{onLayout:A}=I.current,{layout:O,panelDataArray:m}=p.current;if(R.constraints.collapsible){const d=m.map(G=>G.constraints),{collapsedSizePercentage:u,panelSizePercentage:b,pivotIndices:x,groupSizePixels:y}=Te(f,m,R,O);if(b!==u){H.current.set(R.id,b);const F=m.indexOf(R)===m.length-1?b-u:u-b,N=de({delta:F,groupSizePixels:y,layout:O,panelConstraints:d,pivotIndices:x,trigger:"imperative-api"});Ne(O,N)||(B(N),p.current.layout=N,A&&A(N.map(h=>({sizePercentage:h,sizePixels:K(h,y)}))),te(f,m,N,S.current))}}},[f]),Q=j(R=>{const{onLayout:A}=I.current,{layout:O,panelDataArray:m}=p.current;if(R.constraints.collapsible){const d=m.map(F=>F.constraints),{collapsedSizePercentage:u,panelSizePercentage:b,minSizePercentage:x,pivotIndices:y,groupSizePixels:G}=Te(f,m,R,O);if(b===u){const F=H.current.get(R.id),N=F!=null&&F>=x?F:x,P=m.indexOf(R)===m.length-1?b-N:N-b,W=de({delta:P,groupSizePixels:G,layout:O,panelConstraints:d,pivotIndices:y,trigger:"imperative-api"});Ne(O,W)||(B(W),p.current.layout=W,A&&A(W.map(De=>({sizePercentage:De,sizePixels:K(De,G)}))),te(f,m,W,S.current))}}},[f]),w=j(R=>{const{layout:A,panelDataArray:O}=p.current,{panelSizePercentage:m,panelSizePixels:d}=Te(f,O,R,A);return{sizePercentage:m,sizePixels:d}},[f]),M=j(R=>{const{panelDataArray:A}=p.current,O=A.indexOf(R);return hn({dragState:D,layout:C,panelData:A,panelIndex:O})},[D,C]),re=j(R=>{const{layout:A,panelDataArray:O}=p.current,{collapsedSizePercentage:m,collapsible:d,panelSizePercentage:u}=Te(f,O,R,A);return d===!0&&u===m},[f]),_=j(R=>{const{layout:A,panelDataArray:O}=p.current,{collapsedSizePercentage:m,collapsible:d,panelSizePercentage:u}=Te(f,O,R,A);return!d||u>m},[f]),X=j(R=>{const{autoSaveId:A,id:O,onLayout:m,storage:d}=I.current,{layout:u,panelDataArray:b}=p.current;if(b.push(R),b.sort((N,h)=>{const P=N.order,W=h.order;return P==null&&W==null?0:P==null?-1:W==null?1:P-W}),Hn(O).length!==b.length)return;let y=null;A&&(y=Fn(A,b,d));const G=ne(O);if(G<=0&&je(b.map(({constraints:N})=>N)))return;y==null&&(y=_e({groupSizePixels:G,panelDataArray:b}));const F=Ce({groupSizePixels:G,layout:y,panelConstraints:b.map(N=>N.constraints)});B(F),p.current.layout=F,ue(u,F)||(m&&m(F.map(N=>({sizePercentage:N,sizePixels:K(N,G)}))),te(O,b,F,S.current))},[]),ee=j(R=>function(O){O.preventDefault();const{direction:m,dragState:d,id:u,keyboardResizeByPercentage:b,keyboardResizeByPixels:x,onLayout:y}=I.current,{layout:G,panelDataArray:F}=p.current,{initialLayout:N}=d??{},h=en(u,R);let P=xn(O,u,R,m,d,{percentage:b,pixels:x});if(P===0)return;const W=m==="horizontal";document.dir==="rtl"&&W&&(P=-P);const De=ne(u),Ln=F.map(be=>be.constraints),Re=de({delta:P,groupSizePixels:De,layout:N??G,panelConstraints:Ln,pivotIndices:h,trigger:nn(O)?"keyboard":"mouse-or-touch"}),ze=!Ne(G,Re);(tn(O)||an(O))&&z.current!=P&&(z.current=P,Pe(ze?W?"horizontal":"vertical":W?P<0?"horizontal-min":"horizontal-max":P<0?"vertical-min":"vertical-max")),ze&&(B(Re),p.current.layout=Re,y&&y(Re.map(be=>({sizePercentage:be,sizePixels:K(be,De)}))),te(u,F,Re,S.current))},[]),V=j((R,A)=>{const{onLayout:O}=I.current,{layout:m,panelDataArray:d}=p.current,u=d.map(P=>P.constraints),{groupSizePixels:b,panelSizePercentage:x,pivotIndices:y}=Te(f,d,R,m),G=ie(A,b),N=d.indexOf(R)===d.length-1?x-G:G-x,h=de({delta:N,groupSizePixels:b,layout:m,panelConstraints:u,pivotIndices:y,trigger:"imperative-api"});Ne(m,h)||(B(h),p.current.layout=h,O&&O(h.map(P=>({sizePercentage:P,sizePixels:K(P,b)}))),te(f,d,h,S.current))},[f]),Ae=j((R,A)=>{const{direction:O}=I.current,{layout:m}=p.current,d=ye(R),u=sn(O,A);k({dragHandleId:R,dragHandleRect:d.getBoundingClientRect(),initialCursorPosition:u,initialLayout:m})},[]),q=j(()=>{Pn(),k(null)},[]),Z=J({pendingPanelIds:new Set,timeout:null}),Me=j(R=>{const{id:A,onLayout:O}=I.current,{layout:m,panelDataArray:d}=p.current,u=d.indexOf(R);u>=0&&(d.splice(u,1),Z.current.pendingPanelIds.add(R.id)),Z.current.timeout!=null&&clearTimeout(Z.current.timeout),Z.current.timeout=setTimeout(()=>{const{pendingPanelIds:b}=Z.current,x=S.current;let y=!1;if(b.forEach(h=>{b.delete(h),d.find(({id:P})=>P===h)==null&&(y=!0,delete x[R.id])}),!y||d.length===0)return;const G=ne(A);let F=_e({groupSizePixels:G,panelDataArray:d});const N=Ce({groupSizePixels:G,layout:F,panelConstraints:d.map(h=>h.constraints)});ue(m,N)||(B(N),p.current.layout=N,O&&O(N.map(h=>({sizePercentage:h,sizePixels:K(h,G)}))),te(A,d,N,S.current))},0)},[]),cn=In(()=>({collapsePanel:v,direction:a,dragState:D,expandPanel:Q,getPanelSize:w,getPanelStyle:M,groupId:f,isPanelCollapsed:re,isPanelExpanded:_,registerPanel:X,registerResizeHandle:ee,resizePanel:V,startDragging:Ae,stopDragging:q,unregisterPanel:Me}),[v,D,a,Q,w,M,f,re,_,X,ee,V,Ae,q,Me]),fn={display:"flex",flexDirection:a==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return Le(ke.Provider,{value:cn},Le(g,{children:n,className:t,style:{...fn,...E},...i,"data-panel-group":"","data-panel-group-direction":a,"data-panel-group-id":f}))}const xe=qe((e,n)=>Le(Tn,{...e,forwardedRef:n}));Tn.displayName="PanelGroup";xe.displayName="forwardRef(PanelGroup)";function Te(e,n,t,i){const a=n.map(f=>f.constraints),s=n.indexOf(t),l=a[s],T=ne(e),c=Ee(a,s,T),o=s===n.length-1?[s-1,s]:[s,s+1],E=i[s],g=K(E,T);return{...c,collapsible:l.collapsible,panelSizePercentage:E,panelSizePixels:g,groupSizePixels:T,pivotIndices:o}}function Mn({disabled:e,handleId:n,resizeHandler:t}){se(()=>{if(e||t==null)return;const i=ye(n);if(i==null)return;const a=s=>{if(!s.defaultPrevented)switch(s.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{s.preventDefault(),t(s);break}case"F6":{s.preventDefault();const l=i.getAttribute("data-panel-group-id"),T=oe(l),c=Xe(l,n);Qe(c!==null);const r=s.shiftKey?c>0?c-1:T.length-1:c+1<T.length?c+1:0;T[r].focus();break}}};return i.addEventListener("keydown",a),()=>{i.removeEventListener("keydown",a)}},[e,n,t])}function he({children:e=null,className:n="",dataAttributes:t,disabled:i=!1,id:a=null,onDragging:s,style:l={},tagName:T="div"}){const c=J(null),r=J({onDragging:s});se(()=>{r.current.onDragging=s});const o=Ke(ke);if(o===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:E,dragState:g,groupId:f,registerResizeHandle:D,startDragging:k,stopDragging:C}=o,B=we(a),S=(g==null?void 0:g.dragHandleId)===B,[H,z]=Se(!1),[I,p]=Se(null),v=j(()=>{c.current.blur(),C();const{onDragging:M}=r.current;M&&M(!1)},[C]);se(()=>{if(i)p(null);else{const w=D(B);p(()=>w)}},[i,B,D]),se(()=>{if(i||I==null||!S)return;const w=X=>{I(X)},M=X=>{I(X)},_=c.current.ownerDocument;return _.body.addEventListener("contextmenu",v),_.body.addEventListener("mousemove",w),_.body.addEventListener("touchmove",w),_.body.addEventListener("mouseleave",M),window.addEventListener("mouseup",v),window.addEventListener("touchend",v),()=>{_.body.removeEventListener("contextmenu",v),_.body.removeEventListener("mousemove",w),_.body.removeEventListener("touchmove",w),_.body.removeEventListener("mouseleave",M),window.removeEventListener("mouseup",v),window.removeEventListener("touchend",v)}},[E,i,S,I,v]),Mn({disabled:i,handleId:B,resizeHandler:I});const Q={cursor:ln(E),touchAction:"none",userSelect:"none"};return Le(T,{children:e,className:n,onBlur:()=>z(!1),onFocus:()=>z(!0),onMouseDown:w=>{k(B,w.nativeEvent);const{onDragging:M}=r.current;M&&M(!0)},onMouseUp:v,onTouchCancel:v,onTouchEnd:v,onTouchStart:w=>{k(B,w.nativeEvent);const{onDragging:M}=r.current;M&&M(!0)},ref:c,role:"separator",style:{...Q,...l},tabIndex:0,...t,"data-panel-group-direction":E,"data-panel-group-id":f,"data-resize-handle":"","data-resize-handle-active":S?"pointer":H?"keyboard":void 0,"data-panel-resize-handle-enabled":!i,"data-panel-resize-handle-id":B})}he.displayName="PanelResizeHandle";const zn=async e=>await(await fetch("https://kroki.io/d2/svg",{method:"POST",cache:"force-cache",body:JSON.stringify({diagram_source:e,output_format:"svg"}),headers:{"Content-Type":"application/json"}})).text();function Vn({viewId:e}){var a;const n=dn(e),[t,{execute:i}]=Je(zn,null);return L.jsxs(xe,{direction:"horizontal",autoSaveId:"ViewAsD2",children:[L.jsx(le,{minSizePixels:100,children:L.jsxs(fe,{scrollbars:"both",children:[L.jsx($,{asChild:!0,display:"block",p:"2",style:{whiteSpace:"pre",minHeight:"100%"},children:L.jsx(Fe,{variant:"soft",autoFocus:!0,children:n})}),L.jsx(ve,{text:n})]})}),L.jsx(he,{style:{width:10}}),L.jsx(le,{minSizePixels:100,children:L.jsxs(fe,{scrollbars:"both",children:[t.status!=="success"&&L.jsxs(L.Fragment,{children:[L.jsx(gn,{disabled:t.status==="loading",onClick:()=>void i(n),children:t.status==="loading"?"Loading...":"Render with Kroki"}),t.status==="error"&&L.jsx($,{children:(a=t.error)==null?void 0:a.message})]}),t.status==="success"&&L.jsx($,{grow:"1",asChild:!0,className:"svg-container",children:t.result?L.jsx("div",{dangerouslySetInnerHTML:{__html:t.result}}):L.jsx($,{children:"Empty result"})})]})})]})}function Zn(e){switch(e){case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.25,
        outputorder=nodesfirst,
        pack=90,
        packmode=array_3,
        penwidth=1,
        rankdir=TB,
        ranksep=1.25,
        searchsize=50,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.5,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_bigbank {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            fontcolor="#bfdbfeb3",
            label=<<B>BIG BANK PLC</B>>,
            likec4_depth=1,
            likec4_id=bigbank,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        email [fillcolor="#64748b",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">E-mail System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">The internal Microsoft Exchange e-mail</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">system.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.email",
            likec4_level=1];
        atm [group=bigbank,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">ATM</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows customers to withdraw cash.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.atm",
            likec4_level=1];
        mainframe [fillcolor="#0284c7",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Mainframe Banking System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Stores all of the core banking information</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.mainframe",
            likec4_level=1];
        atm -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.atm:bigbank.mainframe",
            style=dashed];
        internetbankingsystem [group=bigbank,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Internet Banking System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows customers to view information about</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">their bank accounts, and make payments.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem",
            likec4_level=1];
        internetbankingsystem -> email [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Sends e-mail using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem:bigbank.email",
            minlen=1,
            style=dashed];
        internetbankingsystem -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Gets account information from, and</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">makes payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem:bigbank.mainframe",
            style=dashed];
        backoffice [fillcolor="#0284c7",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Back Office Staff</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Administration and support staff within the</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">bank.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.backoffice",
            likec4_level=1];
        backoffice -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.backoffice:bigbank.mainframe",
            minlen=1,
            style=dashed];
        supportstaff [fillcolor="#0284c7",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Customer Service Staff</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Customer service staff within the bank.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.supportStaff",
            likec4_level=1];
        supportstaff -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.supportStaff:bigbank.mainframe",
            style=dashed];
    }
    customer [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Personal Banking Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">A customer of the bank, with personal bank</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">accounts.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    customer -> atm [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Withdraws cash using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.atm",
        minlen=1,
        style=dashed];
    customer -> internetbankingsystem [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Views account balances, and makes</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.internetBankingSystem",
        style=dashed];
    customer -> supportstaff [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Asks questions to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.supportStaff",
        minlen=1,
        style=dashed];
    email -> customer [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Sends e-mails to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.email:customer",
        style=dashed];
}
`;case"context":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.25,
        outputorder=nodesfirst,
        pack=90,
        packmode=array_3,
        penwidth=1,
        rankdir=TB,
        ranksep=1.25,
        searchsize=50,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.5,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_bigbank {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            fontcolor="#bfdbfeb3",
            label=<<B>BIG BANK PLC</B>>,
            likec4_depth=1,
            likec4_id=bigbank,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        internetbankingsystem [group=bigbank,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Internet Banking System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows customers to view information about</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">their bank accounts, and make payments.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem",
            likec4_level=1];
        email [fillcolor="#0284c7",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">E-mail System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">The internal Microsoft Exchange e-mail</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">system.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.email",
            likec4_level=1];
        internetbankingsystem -> email [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Sends e-mail using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem:bigbank.email",
            minlen=1,
            style=dashed];
        mainframe [fillcolor="#0284c7",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Mainframe Banking System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Stores all of the core banking information</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.mainframe",
            likec4_level=1];
        internetbankingsystem -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Gets account information from, and</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">makes payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem:bigbank.mainframe",
            minlen=1,
            style=dashed];
    }
    customer [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Personal Banking Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">A customer of the bank, with personal bank</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">accounts.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    customer -> internetbankingsystem [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Views account balances, and makes</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.internetBankingSystem",
        style=dashed];
    email -> customer [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Sends e-mails to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.email:customer",
        minlen=1,
        style=dashed];
}
`;case"ibsContainers":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.25,
        outputorder=nodesfirst,
        pack=90,
        packmode=array_3,
        penwidth=1,
        rankdir=TB,
        ranksep=1.25,
        searchsize=50,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.5,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_internetbankingsystem {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            fontcolor="#bfdbfeb3",
            label=<<B>INTERNET BANKING SYSTEM</B>>,
            likec4_depth=1,
            likec4_id="bigbank.internetBankingSystem",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        mobileapp [group="bigbank.internetBankingSystem",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Mobile App</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Xamarin</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides a limited subset of the Internet</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">banking functionality to customers via their</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">mobile device.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.mobileApp",
            likec4_level=1];
        apiapplication [group="bigbank.internetBankingSystem",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">API Application</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Java and Spring MVC</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides Internet banking functionality via a</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">JSON/HTTPS API.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication",
            likec4_level=1];
        mobileapp -> apiapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.mobileApp:bigbank.internetBankingSystem.apiApplication",
            style=dashed];
        webapplication [group="bigbank.internetBankingSystem",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Web Application</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Java and Spring MVC</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Delivers the static content and the Internet</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">banking single page application.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.webApplication",
            likec4_level=1];
        singlepageapplication [group="bigbank.internetBankingSystem",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Single-Page Application</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">JavaScript and Angular</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides all of the Internet banking</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">functionality to customers via their web</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">browser.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.singlePageApplication",
            likec4_level=1,
            margin="0.362,0.417"];
        webapplication -> singlepageapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Delivers to the customer's web</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">browser</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.webApplication:bigbank.internetBankingSystem.singlePageApplication",
            style=dashed];
        singlepageapplication -> apiapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.singlePageApplication:bigbank.internetBankingSystem.apiApplication",
            style=dashed];
        database [group="bigbank.internetBankingSystem",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Database</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Oracle Database Schema</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Stores user registration information, hashed</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">authentication credentials, access logs, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.database",
            likec4_level=1,
            margin="0.362,0.417",
            penwidth=2,
            shape=cylinder];
        apiapplication -> database [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Reads from and writes to</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[SQL/TCPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication:bigbank.internetBankingSystem.database",
            minlen=1,
            style=dashed];
    }
    customer [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Personal Banking Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">A customer of the bank, with personal bank</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">accounts.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    customer -> mobileapp [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Views account balances, and makes</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.internetBankingSystem.mobileApp",
        minlen=1,
        style=dashed];
    customer -> webapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Visits bigbank.com using HTTPS</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.internetBankingSystem.webApplication",
        minlen=1,
        style=dashed];
    customer -> singlepageapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Views account balances, and makes</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.internetBankingSystem.singlePageApplication",
        style=dashed];
    mainframe [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Mainframe Banking System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Stores all of the core banking information</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.mainframe",
        likec4_level=0];
    email [fillcolor="#64748b",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">E-mail System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">The internal Microsoft Exchange e-mail</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">system.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.email",
        likec4_level=0];
    email -> customer [constraint=false,
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Sends e-mails to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.email:customer",
        style=dashed];
    apiapplication -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.apiApplication:bigbank.mainframe",
        minlen=1,
        style=dashed];
    apiapplication -> email [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Sends e-mail using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.apiApplication:bigbank.email",
        minlen=1,
        style=dashed];
}
`;case"apiApp":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.25,
        outputorder=nodesfirst,
        pack=90,
        packmode=array_3,
        penwidth=1,
        rankdir=TB,
        ranksep=1.25,
        searchsize=50,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.5,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_apiapplication {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            fontcolor="#bfdbfeb3",
            label=<<B>API APPLICATION</B>>,
            likec4_depth=1,
            likec4_id="bigbank.internetBankingSystem.apiApplication",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        signincontroller [group="bigbank.internetBankingSystem.apiApplication",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Sign In Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring MVC Rest Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows users to sign in to the Internet</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Banking System.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.signinController",
            likec4_level=1];
        securitycomponent [group="bigbank.internetBankingSystem.apiApplication",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Security Component</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring Bean</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides functionality related to signing in,</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">changing passwords, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.securityComponent",
            likec4_level=1];
        signincontroller -> securitycomponent [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.signinController:bigbank.internetBankingSystem.apiApplication.securityComponent",
            style=dashed];
        accountssummarycontroller [group="bigbank.internetBankingSystem.apiApplication",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Accounts Summary Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring MVC Rest Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides customers with a summary of their</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">bank accounts.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.accountsSummaryController",
            likec4_level=1];
        mainframebankingsystemfacade [group="bigbank.internetBankingSystem.apiApplication",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Mainframe Banking System Facade</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring Bean</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">A facade onto the mainframe banking system.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.mainframeBankingSystemFacade",
            likec4_level=1];
        accountssummarycontroller -> mainframebankingsystemfacade [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.accountsSummaryController:bigbank.internetBankingSystem.apiApplication.mainframeBankingSystemFacade",
            minlen=1,
            style=dashed];
        resetpasswordcontroller [group="bigbank.internetBankingSystem.apiApplication",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Reset Password Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring MVC Rest Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows users to reset their passwords with a</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">single use URL.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.resetPasswordController",
            likec4_level=1];
        resetpasswordcontroller -> securitycomponent [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.resetPasswordController:bigbank.internetBankingSystem.apiApplication.securityComponent",
            style=dashed];
        emailcomponent [group="bigbank.internetBankingSystem.apiApplication",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">E-mail Component</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring Bean</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Sends e-mails to users.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.emailComponent",
            likec4_level=1];
        resetpasswordcontroller -> emailcomponent [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.resetPasswordController:bigbank.internetBankingSystem.apiApplication.emailComponent",
            minlen=1,
            style=dashed];
    }
    singlepageapplication [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Single-Page Application</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#B6ECF7">JavaScript and Angular</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Provides all of the Internet banking</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">functionality to customers via their web</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">browser.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.singlePageApplication",
        likec4_level=0,
        margin="0.362,0.417"];
    singlepageapplication -> signincontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.singlePageApplication:bigbank.internetBankingSystem.apiApplication.signinController",
        style=dashed];
    singlepageapplication -> accountssummarycontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.singlePageApplication:bigbank.internetBankingSystem.apiApplication.accountsSummaryController",
        style=dashed];
    singlepageapplication -> resetpasswordcontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.singlePageApplication:bigbank.internetBankingSystem.apiApplication.resetPasswordController",
        style=dashed];
    mobileapp [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Mobile App</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#B6ECF7">Xamarin</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Provides a limited subset of the Internet</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">banking functionality to customers via their</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">mobile device.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.mobileApp",
        likec4_level=0];
    mobileapp -> signincontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.mobileApp:bigbank.internetBankingSystem.apiApplication.signinController",
        style=dashed];
    mobileapp -> accountssummarycontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.mobileApp:bigbank.internetBankingSystem.apiApplication.accountsSummaryController",
        style=dashed];
    mobileapp -> resetpasswordcontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.mobileApp:bigbank.internetBankingSystem.apiApplication.resetPasswordController",
        style=dashed];
    mainframe [fillcolor="#64748b",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Mainframe Banking System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">Stores all of the core banking information</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.mainframe",
        likec4_level=0];
    database [color="#475569",
        fillcolor="#64748b",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Database</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#cbd5e1">Oracle Database Schema</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">Stores user registration information, hashed</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">authentication credentials, access logs, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.database",
        likec4_level=0,
        margin="0.362,0.417",
        penwidth=2,
        shape=cylinder];
    email [fillcolor="#64748b",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">E-mail System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">The internal Microsoft Exchange e-mail</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">system.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.email",
        likec4_level=0];
    mainframebankingsystemfacade -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.apiApplication.mainframeBankingSystemFacade:bigbank.mainframe",
        minlen=1,
        style=dashed];
    securitycomponent -> database [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Reads from and writes to</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[SQL/TCPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.apiApplication.securityComponent:bigbank.internetBankingSystem.database",
        minlen=1,
        style=dashed];
    emailcomponent -> email [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Sends e-mail using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.apiApplication.emailComponent:bigbank.email",
        minlen=1,
        style=dashed];
}
`;case"customer":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.25,
        outputorder=nodesfirst,
        pack=90,
        packmode=array_3,
        penwidth=1,
        rankdir=TB,
        ranksep=1.25,
        searchsize=50,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.5,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_bigbank {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            fontcolor="#cbd5e1b3",
            label=<<B>BIG BANK PLC</B>>,
            likec4_depth=1,
            likec4_id=bigbank,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        singlepageapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Single-Page Application</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">JavaScript and Angular</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides all of the Internet banking</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">functionality to customers via their web</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">browser.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.singlePageApplication",
            likec4_level=1,
            margin="0.362,0.417"];
        mobileapp [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Mobile App</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Xamarin</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides a limited subset of the Internet</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">banking functionality to customers via their</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">mobile device.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.mobileApp",
            likec4_level=1];
        supportstaff [fillcolor="#0284c7",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Customer Service Staff</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Customer service staff within the bank.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.supportStaff",
            likec4_level=1];
        atm [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">ATM</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows customers to withdraw cash.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.atm",
            likec4_level=1];
    }
    customer [fillcolor="#428a4f",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Personal Banking Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#c2f0c2">A customer of the bank, with personal bank</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#c2f0c2">accounts.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    customer -> singlepageapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Views account balances, and makes</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.internetBankingSystem.singlePageApplication",
        minlen=1,
        style=dashed];
    customer -> mobileapp [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Views account balances, and makes</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.internetBankingSystem.mobileApp",
        minlen=1,
        style=dashed];
    customer -> supportstaff [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Asks questions to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.supportStaff",
        minlen=1,
        style=dashed];
    customer -> atm [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Withdraws cash using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.atm",
        minlen=1,
        style=dashed];
    atm -> customer [ltail=cluster_bigbank,
        minlen=1,
        style=invis];
}
`;case"support":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.25,
        outputorder=nodesfirst,
        pack=90,
        packmode=array_3,
        penwidth=1,
        rankdir=TB,
        ranksep=1.25,
        searchsize=50,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.5,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_bigbank {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            fontcolor="#bfdbfeb3",
            label=<<B>BIG BANK PLC</B>>,
            likec4_depth=1,
            likec4_id=bigbank,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        backoffice [fillcolor="#0284c7",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Back Office Staff</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Administration and support staff within the</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">bank.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.backoffice",
            likec4_level=1];
        mainframe [fillcolor="#0284c7",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Mainframe Banking System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Stores all of the core banking information</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.mainframe",
            likec4_level=1];
        backoffice -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.backoffice:bigbank.mainframe",
            minlen=1,
            style=dashed];
        supportstaff [fillcolor="#0284c7",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Customer Service Staff</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Customer service staff within the bank.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.supportStaff",
            likec4_level=1];
        supportstaff -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.supportStaff:bigbank.mainframe",
            style=dashed];
    }
    customer [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Personal Banking Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">A customer of the bank, with personal bank</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">accounts.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    customer -> supportstaff [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Asks questions to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.supportStaff",
        minlen=1,
        style=dashed];
    mainframe -> customer [ltail=cluster_bigbank,
        minlen=1,
        style=invis];
}
`;default:throw new Error("Unknown viewId: "+e)}}function _n(e){switch(e){case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1800pt" height="865pt"
 viewBox="0.00 0.00 1799.82 865.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 861)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-584.8 1634,-584.8 1634,-8 8,-8"/>
<text text-anchor="start" x="16" y="-570.1" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#bfdbfe" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<!-- email -->
<g id="node1" class="node">
<title>email</title>
<polygon fill="#64748b" stroke="#2563eb" stroke-width="0" points="1597.02,-220 1276.98,-220 1276.98,-40 1597.02,-40 1597.02,-220"/>
<text text-anchor="start" x="1372.55" y="-142.8" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">E&#45;mail System</text>
<text text-anchor="start" x="1315.61" y="-119.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="1412.89" y="-102.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">system.</text>
</g>
<!-- atm -->
<g id="node2" class="node">
<title>atm</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-529.2 39.98,-529.2 39.98,-349.2 360.02,-349.2 360.02,-529.2"/>
<text text-anchor="start" x="178.89" y="-443.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">ATM</text>
<text text-anchor="start" x="89.52" y="-420" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Allows customers to withdraw cash.</text>
</g>
<!-- mainframe -->
<g id="node3" class="node">
<title>mainframe</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="939.52,-220 596.48,-220 596.48,-40 939.52,-40 939.52,-220"/>
<text text-anchor="start" x="645.73" y="-142.8" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Mainframe Banking System</text>
<text text-anchor="start" x="640.76" y="-119.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Stores all of the core banking information</text>
<text text-anchor="start" x="627.54" y="-102.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">about customers, accounts, transactions, etc.</text>
</g>
<!-- internetbankingsystem -->
<g id="node4" class="node">
<title>internetbankingsystem</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1602.29,-529.2 1271.71,-529.2 1271.71,-349.2 1602.29,-349.2 1602.29,-529.2"/>
<text text-anchor="start" x="1328.05" y="-452" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Internet Banking System</text>
<text text-anchor="start" x="1302.78" y="-428.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Allows customers to view information about</text>
<text text-anchor="start" x="1307.43" y="-411.6" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">their bank accounts, and make payments.</text>
</g>
<!-- backoffice -->
<g id="node5" class="node">
<title>backoffice</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="1182.02,-529.2 859.98,-529.2 859.98,-349.2 1182.02,-349.2 1182.02,-529.2"/>
<text text-anchor="start" x="946.53" y="-452" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Back Office Staff</text>
<text text-anchor="start" x="891.04" y="-428.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Administration and support staff within the</text>
<text text-anchor="start" x="1003.88" y="-411.6" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">bank.</text>
</g>
<!-- supportstaff -->
<g id="node6" class="node">
<title>supportstaff</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="770.02,-529.2 449.98,-529.2 449.98,-349.2 770.02,-349.2 770.02,-529.2"/>
<text text-anchor="start" x="507.19" y="-443.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Customer Service Staff</text>
<text text-anchor="start" x="489.78" y="-420" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Customer service staff within the bank.</text>
</g>
<!-- customer -->
<g id="node7" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="1291.3,-857 960.7,-857 960.7,-677 1291.3,-677 1291.3,-857"/>
<text text-anchor="start" x="1001.49" y="-779.8" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="991.76" y="-756.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="1096.04" y="-739.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">accounts.</text>
</g>
<!-- email&#45;&gt;customer -->
<g id="edge9" class="edge">
<title>email&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1557.41,-219.75C1594.73,-255.1 1630.4,-299.31 1647,-349.2 1680.06,-448.56 1704.77,-497.46 1647,-584.8 1572.89,-696.85 1423.55,-740.51 1303.68,-757.08"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1303.53,-753.57 1294.07,-758.35 1304.45,-760.51 1303.53,-753.57"/>
<text text-anchor="start" x="1691" y="-435.3" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
<!-- atm&#45;&gt;mainframe -->
<g id="edge1" class="edge">
<title>atm&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M359.73,-351.81C432.14,-312.65 517.97,-266.23 592.21,-226.08"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="593.75,-229.22 600.88,-221.39 590.42,-223.06 593.75,-229.22"/>
<text text-anchor="start" x="528" y="-280.7" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- internetbankingsystem&#45;&gt;email -->
<g id="edge2" class="edge">
<title>internetbankingsystem&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1437,-349.35C1437,-312.81 1437,-270.29 1437,-232.53"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1440.5,-232.95 1437,-222.95 1433.5,-232.95 1440.5,-232.95"/>
<text text-anchor="start" x="1447" y="-280.7" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- internetbankingsystem&#45;&gt;mainframe -->
<g id="edge3" class="edge">
<title>internetbankingsystem&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1272.06,-362.46C1174.74,-317.77 1051.38,-261.12 951.06,-215.06"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="952.55,-211.89 942,-210.9 949.63,-218.25 952.55,-211.89"/>
<text text-anchor="start" x="1152" y="-288.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Gets account information from, and</text>
<text text-anchor="start" x="1152" y="-272.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">makes payments using</text>
</g>
<!-- backoffice&#45;&gt;mainframe -->
<g id="edge4" class="edge">
<title>backoffice&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M947.82,-349.35C916.95,-311.85 880.88,-268.06 849.19,-229.58"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="852.22,-227.75 843.16,-222.26 846.81,-232.2 852.22,-227.75"/>
<text text-anchor="start" x="919" y="-280.7" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- supportstaff&#45;&gt;mainframe -->
<g id="edge5" class="edge">
<title>supportstaff&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M655.7,-349.35C674.74,-312.33 696.93,-269.18 716.54,-231.05"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="719.42,-233.11 720.88,-222.61 713.2,-229.9 719.42,-233.11"/>
<text text-anchor="start" x="708" y="-280.7" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- customer&#45;&gt;atm -->
<g id="edge6" class="edge">
<title>customer&#45;&gt;atm</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M960.96,-742.3C810.96,-716.68 586.09,-667.91 405,-584.8 376.35,-571.65 347.5,-554.37 320.87,-536.36"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="323.11,-533.65 312.88,-530.87 319.14,-539.41 323.11,-533.65"/>
<text text-anchor="start" x="527" y="-608.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Withdraws cash using</text>
</g>
<!-- customer&#45;&gt;internetbankingsystem -->
<g id="edge7" class="edge">
<title>customer&#45;&gt;internetbankingsystem</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1210.57,-677.4C1251.63,-634.39 1301.08,-582.59 1343.29,-538.37"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1345.71,-540.9 1350.09,-531.25 1340.65,-536.07 1345.71,-540.9"/>
<text text-anchor="start" x="1300" y="-616.3" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="1300" y="-600.7" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;supportstaff -->
<g id="edge8" class="edge">
<title>customer&#45;&gt;supportstaff</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M967.38,-677.13C918.02,-648.53 863.77,-616.12 815,-584.8 791.38,-569.63 766.65,-552.93 742.88,-536.43"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="745.09,-533.7 734.88,-530.86 741.09,-539.45 745.09,-533.7"/>
<text text-anchor="start" x="900" y="-608.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Asks questions to</text>
</g>
</g>
</svg>
`;case"context":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1166pt" height="854pt"
 viewBox="0.00 0.00 1166.29 854.40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 850.4)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-261.6 8,-838.4 826,-838.4 826,-261.6 8,-261.6"/>
<text text-anchor="start" x="16" y="-823.7" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#bfdbfe" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<!-- internetbankingsystem -->
<g id="node1" class="node">
<title>internetbankingsystem</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="742.29,-782.8 411.71,-782.8 411.71,-602.8 742.29,-602.8 742.29,-782.8"/>
<text text-anchor="start" x="468.05" y="-705.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Internet Banking System</text>
<text text-anchor="start" x="442.78" y="-682" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Allows customers to view information about</text>
<text text-anchor="start" x="447.43" y="-665.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">their bank accounts, and make payments.</text>
</g>
<!-- email -->
<g id="node2" class="node">
<title>email</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="360.02,-473.6 39.98,-473.6 39.98,-293.6 360.02,-293.6 360.02,-473.6"/>
<text text-anchor="start" x="135.55" y="-396.4" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">E&#45;mail System</text>
<text text-anchor="start" x="78.61" y="-372.8" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="175.89" y="-356" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">system.</text>
</g>
<!-- mainframe -->
<g id="node3" class="node">
<title>mainframe</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="793.52,-473.6 450.48,-473.6 450.48,-293.6 793.52,-293.6 793.52,-473.6"/>
<text text-anchor="start" x="499.73" y="-396.4" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Mainframe Banking System</text>
<text text-anchor="start" x="494.76" y="-372.8" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Stores all of the core banking information</text>
<text text-anchor="start" x="481.54" y="-356" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">about customers, accounts, transactions, etc.</text>
</g>
<!-- customer -->
<g id="node4" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="752.3,-180 421.7,-180 421.7,0 752.3,0 752.3,-180"/>
<text text-anchor="start" x="462.49" y="-102.8" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="452.76" y="-79.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="557.04" y="-62.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">accounts.</text>
</g>
<!-- internetbankingsystem&#45;&gt;email -->
<g id="edge1" class="edge">
<title>internetbankingsystem&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M467.96,-602.95C421.36,-564.98 366.84,-520.55 319.18,-481.72"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="321.43,-479.04 311.47,-475.43 317.01,-484.46 321.43,-479.04"/>
<text text-anchor="start" x="422" y="-534.3" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- internetbankingsystem&#45;&gt;mainframe -->
<g id="edge2" class="edge">
<title>internetbankingsystem&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-602.95C595.37,-566.41 601.6,-523.89 607.13,-486.13"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="610.55,-486.92 608.54,-476.52 603.62,-485.9 610.55,-486.92"/>
<text text-anchor="start" x="613" y="-542.1" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Gets account information from, and</text>
<text text-anchor="start" x="613" y="-526.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">makes payments using</text>
</g>
<!-- email&#45;&gt;customer -->
<g id="edge4" class="edge">
<title>email&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M317.95,-293.72C362.5,-260.16 413.38,-221.82 458.81,-187.59"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="460.72,-190.53 466.61,-181.72 456.51,-184.94 460.72,-190.53"/>
<text text-anchor="start" x="416" y="-232.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
<!-- customer&#45;&gt;internetbankingsystem -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;internetbankingsystem</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M752.15,-169.26C786.85,-193.76 818.97,-224.38 839,-261.6 1046.98,-648.1 874.36,-505.17 842,-557.8 821.1,-591.78 788.63,-617.46 753.49,-636.76"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="751.9,-633.64 744.68,-641.39 755.16,-639.83 751.9,-633.64"/>
<text text-anchor="start" x="944" y="-387.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="944" y="-371.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
</g>
</g>
</svg>
`;case"ibsContainers":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1606pt" height="1514pt"
 viewBox="0.00 0.00 1606.02 1513.84" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 1509.84)">
<g id="clust1" class="cluster">
<title>cluster_internetbankingsystem</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1233.64 812,-1233.64 812,-8 8,-8"/>
<text text-anchor="start" x="16" y="-1218.94" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#bfdbfe" fill-opacity="0.701961">INTERNET BANKING SYSTEM</text>
</g>
<!-- mobileapp -->
<g id="node1" class="node">
<title>mobileapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="365.96,-1178.04 40.04,-1178.04 40.04,-998.04 365.96,-998.04 365.96,-1178.04"/>
<text text-anchor="start" x="152.97" y="-1118.94" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Mobile App</text>
<text text-anchor="start" x="180.66" y="-1097.14" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Xamarin</text>
<text text-anchor="start" x="80.05" y="-1075.94" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides a limited subset of the Internet</text>
<text text-anchor="start" x="71.1" y="-1059.14" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">banking functionality to customers via their</text>
<text text-anchor="start" x="158.26" y="-1042.34" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">mobile device.</text>
</g>
<!-- apiapplication -->
<g id="node2" class="node">
<title>apiapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="754.09,-559.64 421.91,-559.64 421.91,-379.64 754.09,-379.64 754.09,-559.64"/>
<text text-anchor="start" x="520.18" y="-492.14" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">API Application</text>
<text text-anchor="start" x="529.64" y="-470.34" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Java and Spring MVC</text>
<text text-anchor="start" x="452.98" y="-449.14" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides Internet banking functionality via a</text>
<text text-anchor="start" x="529.27" y="-432.34" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">JSON/HTTPS API.</text>
</g>
<!-- webapplication -->
<g id="node3" class="node">
<title>webapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="780.19,-1178.04 455.81,-1178.04 455.81,-998.04 780.19,-998.04 780.19,-1178.04"/>
<text text-anchor="start" x="545.74" y="-1110.54" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Web Application</text>
<text text-anchor="start" x="559.64" y="-1088.74" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Java and Spring MVC</text>
<text text-anchor="start" x="486.87" y="-1067.54" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Delivers the static content and the Internet</text>
<text text-anchor="start" x="518.37" y="-1050.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">banking single page application.</text>
</g>
<!-- singlepageapplication -->
<g id="node4" class="node">
<title>singlepageapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="749.02,-868.84 428.98,-868.84 428.98,-688.84 749.02,-688.84 749.02,-868.84"/>
<text text-anchor="start" x="482.82" y="-809.74" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Single&#45;Page Application</text>
<text text-anchor="start" x="526.96" y="-787.94" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">JavaScript and Angular</text>
<text text-anchor="start" x="481.21" y="-766.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides all of the Internet banking</text>
<text text-anchor="start" x="468.78" y="-749.94" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">functionality to customers via their web</text>
<text text-anchor="start" x="562.16" y="-733.14" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">browser.</text>
</g>
<!-- database -->
<g id="node5" class="node">
<title>database</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M754.86,-231.31C754.86,-241.87 680.07,-250.44 588,-250.44 495.93,-250.44 421.14,-241.87 421.14,-231.31 421.14,-231.31 421.14,-59.13 421.14,-59.13 421.14,-48.57 495.93,-40 588,-40 680.07,-40 754.86,-48.57 754.86,-59.13 754.86,-59.13 754.86,-231.31 754.86,-231.31"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M754.86,-231.31C754.86,-220.75 680.07,-212.18 588,-212.18 495.93,-212.18 421.14,-220.75 421.14,-231.31"/>
<text text-anchor="start" x="545.19" y="-167.72" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Database</text>
<text text-anchor="start" x="519.3" y="-145.92" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Oracle Database Schema</text>
<text text-anchor="start" x="452.21" y="-124.72" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Stores user registration information, hashed</text>
<text text-anchor="start" x="452.98" y="-107.92" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">authentication credentials, access logs, etc.</text>
</g>
<!-- customer -->
<g id="node6" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="783.3,-1505.84 452.7,-1505.84 452.7,-1325.84 783.3,-1325.84 783.3,-1505.84"/>
<text text-anchor="start" x="493.49" y="-1428.64" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="483.76" y="-1405.04" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="588.04" y="-1388.24" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">accounts.</text>
</g>
<!-- mainframe -->
<g id="node7" class="node">
<title>mainframe</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="1187.52,-235.22 844.48,-235.22 844.48,-55.22 1187.52,-55.22 1187.52,-235.22"/>
<text text-anchor="start" x="893.73" y="-158.02" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Mainframe Banking System</text>
<text text-anchor="start" x="888.76" y="-134.42" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Stores all of the core banking information</text>
<text text-anchor="start" x="875.54" y="-117.62" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">about customers, accounts, transactions, etc.</text>
</g>
<!-- email -->
<g id="node8" class="node">
<title>email</title>
<polygon fill="#64748b" stroke="#2563eb" stroke-width="0" points="1598.02,-235.22 1277.98,-235.22 1277.98,-55.22 1598.02,-55.22 1598.02,-235.22"/>
<text text-anchor="start" x="1373.55" y="-158.02" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">E&#45;mail System</text>
<text text-anchor="start" x="1316.61" y="-134.42" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="1413.89" y="-117.62" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">system.</text>
</g>
<!-- mobileapp&#45;&gt;apiapplication -->
<g id="edge1" class="edge">
<title>mobileapp&#45;&gt;apiapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M196.69,-998.09C194.91,-912.38 203.87,-782.31 263.07,-688.84 298.86,-632.33 355.17,-587.02 410.93,-552.65"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="412.72,-555.65 419.47,-547.48 409.1,-549.66 412.72,-555.65"/>
<text text-anchor="start" x="274" y="-782.74" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="274" y="-767.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- apiapplication&#45;&gt;database -->
<g id="edge4" class="edge">
<title>apiapplication&#45;&gt;database</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M588,-379.68C588,-343.93 588,-302.2 588,-263.99"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="591.5,-264.2 588,-254.2 584.5,-264.2 591.5,-264.2"/>
<text text-anchor="start" x="598" y="-318.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Reads from and writes to</text>
<text text-anchor="start" x="598" y="-303.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[SQL/TCPS]</text>
</g>
<!-- apiapplication&#45;&gt;mainframe -->
<g id="edge9" class="edge">
<title>apiapplication&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M708.42,-379.86C728.68,-364.82 749.47,-349.32 769,-334.64 808.48,-304.97 851.32,-272.42 890.06,-242.84"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="892.12,-245.68 897.94,-236.83 887.87,-240.12 892.12,-245.68"/>
<text text-anchor="start" x="826" y="-318.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="826" y="-303.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- apiapplication&#45;&gt;email -->
<g id="edge10" class="edge">
<title>apiapplication&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M753.79,-419.79C885.53,-379.25 1073.51,-317.55 1233,-250.44 1243.99,-245.82 1255.21,-240.85 1266.46,-235.69"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1267.83,-238.91 1275.43,-231.52 1264.88,-232.56 1267.83,-238.91"/>
<text text-anchor="start" x="1121" y="-311.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- webapplication&#45;&gt;singlepageapplication -->
<g id="edge2" class="edge">
<title>webapplication&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M609.61,-998.19C606.16,-961.65 602.15,-919.13 598.58,-881.37"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="602.1,-881.4 597.68,-871.78 595.13,-882.06 602.1,-881.4"/>
<text text-anchor="start" x="615" y="-937.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Delivers to the customer&#39;s web</text>
<text text-anchor="start" x="615" y="-921.74" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">browser</text>
</g>
<!-- singlepageapplication&#45;&gt;apiapplication -->
<g id="edge3" class="edge">
<title>singlepageapplication&#45;&gt;apiapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M588.71,-688.99C588.59,-652.45 588.45,-609.93 588.33,-572.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="591.83,-572.58 588.3,-562.59 584.83,-572.6 591.83,-572.58"/>
<text text-anchor="start" x="598" y="-628.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="598" y="-612.54" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- customer&#45;&gt;mobileapp -->
<g id="edge5" class="edge">
<title>customer&#45;&gt;mobileapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M452.9,-1335.53C424.7,-1319.08 396.53,-1300.66 371.71,-1280.84 337.95,-1253.88 305.45,-1219.67 278.15,-1187.62"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="280.91,-1185.47 271.79,-1180.07 275.55,-1189.97 280.91,-1185.47"/>
<text text-anchor="start" x="382" y="-1265.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="382" y="-1249.54" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;webapplication -->
<g id="edge6" class="edge">
<title>customer&#45;&gt;webapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M618,-1326.25C618,-1284.4 618,-1234.24 618,-1190.84"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="621.5,-1190.93 618,-1180.93 614.5,-1190.93 621.5,-1190.93"/>
<text text-anchor="start" x="628" y="-1257.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Visits bigbank.com using HTTPS</text>
</g>
<!-- customer&#45;&gt;singlepageapplication -->
<g id="edge7" class="edge">
<title>customer&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M783.3,-1344.67C807.2,-1327.33 828.57,-1306.24 843,-1280.84 851.61,-1265.69 843.64,-1259.05 843,-1241.64 837.61,-1095.63 895.88,-1037.47 818,-913.84 803.1,-890.18 782.38,-870.21 759.46,-853.5"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="761.47,-850.64 751.26,-847.79 757.46,-856.38 761.47,-850.64"/>
<text text-anchor="start" x="868" y="-1091.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="868" y="-1076.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
</g>
<!-- email&#45;&gt;customer -->
<g id="edge8" class="edge">
<title>email&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1436.1,-234.86C1426.97,-438.54 1376.48,-944.63 1104,-1233.64 1023.35,-1319.19 898.54,-1364.61 795.6,-1388.58"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="795.09,-1385.11 786.11,-1390.73 796.64,-1391.93 795.09,-1385.11"/>
<text text-anchor="start" x="1381" y="-774.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
</g>
</svg>
`;case"apiApp":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1290pt" height="1149pt"
 viewBox="0.00 0.00 1290.00 1149.04" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 1145.04)">
<g id="clust1" class="cluster">
<title>cluster_apiapplication</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-307.64 8,-868.84 1274,-868.84 1274,-307.64 8,-307.64"/>
<text text-anchor="start" x="16" y="-854.14" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#bfdbfe" fill-opacity="0.701961">API APPLICATION</text>
</g>
<!-- signincontroller -->
<g id="node1" class="node">
<title>signincontroller</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="818.02,-813.24 497.98,-813.24 497.98,-633.24 818.02,-633.24 818.02,-813.24"/>
<text text-anchor="start" x="580.74" y="-745.74" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Sign In Controller</text>
<text text-anchor="start" x="583.98" y="-723.94" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring MVC Rest Controller</text>
<text text-anchor="start" x="543.61" y="-702.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Allows users to sign in to the Internet</text>
<text text-anchor="start" x="605.48" y="-685.94" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Banking System.</text>
</g>
<!-- securitycomponent -->
<g id="node2" class="node">
<title>securitycomponent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="831.8,-519.64 508.2,-519.64 508.2,-339.64 831.8,-339.64 831.8,-519.64"/>
<text text-anchor="start" x="579.4" y="-452.14" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Security Component</text>
<text text-anchor="start" x="636.98" y="-430.34" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring Bean</text>
<text text-anchor="start" x="539.26" y="-409.14" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides functionality related to signing in,</text>
<text text-anchor="start" x="591.01" y="-392.34" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">changing passwords, etc.</text>
</g>
<!-- accountssummarycontroller -->
<g id="node3" class="node">
<title>accountssummarycontroller</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="395.83,-813.24 62.17,-813.24 62.17,-633.24 395.83,-633.24 395.83,-813.24"/>
<text text-anchor="start" x="96.18" y="-745.74" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Accounts Summary Controller</text>
<text text-anchor="start" x="154.98" y="-723.94" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring MVC Rest Controller</text>
<text text-anchor="start" x="93.23" y="-702.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides customers with a summary of their</text>
<text text-anchor="start" x="181.91" y="-685.94" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">bank accounts.</text>
</g>
<!-- mainframebankingsystemfacade -->
<g id="node4" class="node">
<title>mainframebankingsystemfacade</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="418.47,-519.64 39.53,-519.64 39.53,-339.64 418.47,-339.64 418.47,-519.64"/>
<text text-anchor="start" x="70.6" y="-443.74" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Mainframe Banking System Facade</text>
<text text-anchor="start" x="195.98" y="-421.94" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring Bean</text>
<text text-anchor="start" x="86.59" y="-400.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">A facade onto the mainframe banking system.</text>
</g>
<!-- resetpasswordcontroller -->
<g id="node5" class="node">
<title>resetpasswordcontroller</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1241.84,-813.24 908.16,-813.24 908.16,-633.24 1241.84,-633.24 1241.84,-813.24"/>
<text text-anchor="start" x="956.06" y="-745.74" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Reset Password Controller</text>
<text text-anchor="start" x="1000.98" y="-723.94" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring MVC Rest Controller</text>
<text text-anchor="start" x="939.22" y="-702.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Allows users to reset their passwords with a</text>
<text text-anchor="start" x="1025.59" y="-685.94" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">single use URL.</text>
</g>
<!-- emailcomponent -->
<g id="node6" class="node">
<title>emailcomponent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1242.02,-519.64 921.98,-519.64 921.98,-339.64 1242.02,-339.64 1242.02,-519.64"/>
<text text-anchor="start" x="999.19" y="-443.74" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">E&#45;mail Component</text>
<text text-anchor="start" x="1048.98" y="-421.94" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring Bean</text>
<text text-anchor="start" x="1008.86" y="-400.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Sends e&#45;mails to users.</text>
</g>
<!-- singlepageapplication -->
<g id="node7" class="node">
<title>singlepageapplication</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="1018.02,-1141.04 697.98,-1141.04 697.98,-961.04 1018.02,-961.04 1018.02,-1141.04"/>
<text text-anchor="start" x="751.82" y="-1081.94" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Single&#45;Page Application</text>
<text text-anchor="start" x="795.96" y="-1060.14" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#b6ecf7">JavaScript and Angular</text>
<text text-anchor="start" x="750.21" y="-1038.94" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Provides all of the Internet banking</text>
<text text-anchor="start" x="737.78" y="-1022.14" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">functionality to customers via their web</text>
<text text-anchor="start" x="831.16" y="-1005.34" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">browser.</text>
</g>
<!-- mobileapp -->
<g id="node8" class="node">
<title>mobileapp</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="607.96,-1141.04 282.04,-1141.04 282.04,-961.04 607.96,-961.04 607.96,-1141.04"/>
<text text-anchor="start" x="394.97" y="-1081.94" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Mobile App</text>
<text text-anchor="start" x="422.66" y="-1060.14" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#b6ecf7">Xamarin</text>
<text text-anchor="start" x="322.05" y="-1038.94" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Provides a limited subset of the Internet</text>
<text text-anchor="start" x="313.1" y="-1022.14" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">banking functionality to customers via their</text>
<text text-anchor="start" x="400.26" y="-1005.34" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">mobile device.</text>
</g>
<!-- mainframe -->
<g id="node9" class="node">
<title>mainframe</title>
<polygon fill="#64748b" stroke="#2563eb" stroke-width="0" points="400.52,-195.22 57.48,-195.22 57.48,-15.22 400.52,-15.22 400.52,-195.22"/>
<text text-anchor="start" x="106.73" y="-118.02" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Mainframe Banking System</text>
<text text-anchor="start" x="101.76" y="-94.42" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">Stores all of the core banking information</text>
<text text-anchor="start" x="88.54" y="-77.62" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">about customers, accounts, transactions, etc.</text>
</g>
<!-- database -->
<g id="node10" class="node">
<title>database</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M833.86,-191.31C833.86,-201.87 759.07,-210.44 667,-210.44 574.93,-210.44 500.14,-201.87 500.14,-191.31 500.14,-191.31 500.14,-19.13 500.14,-19.13 500.14,-8.57 574.93,0 667,0 759.07,0 833.86,-8.57 833.86,-19.13 833.86,-19.13 833.86,-191.31 833.86,-191.31"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M833.86,-191.31C833.86,-180.75 759.07,-172.18 667,-172.18 574.93,-172.18 500.14,-180.75 500.14,-191.31"/>
<text text-anchor="start" x="624.19" y="-127.72" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Database</text>
<text text-anchor="start" x="598.3" y="-105.92" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#cbd5e1">Oracle Database Schema</text>
<text text-anchor="start" x="531.21" y="-84.72" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">Stores user registration information, hashed</text>
<text text-anchor="start" x="531.98" y="-67.92" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">authentication credentials, access logs, etc.</text>
</g>
<!-- email -->
<g id="node11" class="node">
<title>email</title>
<polygon fill="#64748b" stroke="#2563eb" stroke-width="0" points="1244.02,-195.22 923.98,-195.22 923.98,-15.22 1244.02,-15.22 1244.02,-195.22"/>
<text text-anchor="start" x="1019.55" y="-118.02" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">E&#45;mail System</text>
<text text-anchor="start" x="962.61" y="-94.42" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="1059.89" y="-77.62" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">system.</text>
</g>
<!-- signincontroller&#45;&gt;securitycomponent -->
<g id="edge1" class="edge">
<title>signincontroller&#45;&gt;securitycomponent</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M661.65,-633.56C662.96,-601.61 664.46,-565.31 665.81,-532.34"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="669.31,-532.56 666.22,-522.42 662.31,-532.27 669.31,-532.56"/>
<text text-anchor="start" x="675" y="-572.54" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- securitycomponent&#45;&gt;database -->
<g id="edge12" class="edge">
<title>securitycomponent&#45;&gt;database</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M669.17,-339.68C668.84,-303.93 668.45,-262.2 668.1,-223.99"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="671.6,-224.17 668,-214.2 664.6,-224.23 671.6,-224.17"/>
<text text-anchor="start" x="679" y="-278.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Reads from and writes to</text>
<text text-anchor="start" x="679" y="-263.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[SQL/TCPS]</text>
</g>
<!-- accountssummarycontroller&#45;&gt;mainframebankingsystemfacade -->
<g id="edge2" class="edge">
<title>accountssummarycontroller&#45;&gt;mainframebankingsystemfacade</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M229,-633.56C229,-601.61 229,-565.31 229,-532.34"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="232.5,-532.43 229,-522.43 225.5,-532.43 232.5,-532.43"/>
<text text-anchor="start" x="239" y="-572.54" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- mainframebankingsystemfacade&#45;&gt;mainframe -->
<g id="edge11" class="edge">
<title>mainframebankingsystemfacade&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M229,-339.68C229,-298.89 229,-250.31 229,-208.06"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="232.5,-208.19 229,-198.19 225.5,-208.19 232.5,-208.19"/>
<text text-anchor="start" x="239" y="-278.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="239" y="-263.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- resetpasswordcontroller&#45;&gt;securitycomponent -->
<g id="edge3" class="edge">
<title>resetpasswordcontroller&#45;&gt;securitycomponent</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M951.56,-633.37C904.85,-599.73 851.48,-561.3 803.85,-527.01"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="806.08,-524.31 795.92,-521.3 801.99,-529.99 806.08,-524.31"/>
<text text-anchor="start" x="895" y="-572.54" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- resetpasswordcontroller&#45;&gt;emailcomponent -->
<g id="edge4" class="edge">
<title>resetpasswordcontroller&#45;&gt;emailcomponent</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1077.13,-633.56C1077.9,-601.61 1078.77,-565.31 1079.56,-532.34"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1083.06,-532.51 1079.8,-522.43 1076.06,-532.34 1083.06,-532.51"/>
<text text-anchor="start" x="1088" y="-572.54" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- emailcomponent&#45;&gt;email -->
<g id="edge13" class="edge">
<title>emailcomponent&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1082.55,-339.68C1082.8,-298.89 1083.11,-250.31 1083.37,-208.06"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1086.87,-208.21 1083.43,-198.19 1079.87,-208.17 1086.87,-208.21"/>
<text text-anchor="start" x="1093" y="-271.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- singlepageapplication&#45;&gt;signincontroller -->
<g id="edge5" class="edge">
<title>singlepageapplication&#45;&gt;signincontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M775.72,-961.28C764.04,-946.69 752.73,-931.33 743.07,-916.04 725.22,-887.76 709.23,-855.1 696.06,-824.83"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="699.31,-823.52 692.16,-815.7 692.87,-826.27 699.31,-823.52"/>
<text text-anchor="start" x="754" y="-900.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="754" y="-884.74" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- singlepageapplication&#45;&gt;accountssummarycontroller -->
<g id="edge6" class="edge">
<title>singlepageapplication&#45;&gt;accountssummarycontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M698.21,-976.38C683.1,-970.72 667.87,-965.49 653,-961.04 540.67,-927.46 494.98,-974.02 393.07,-916.04 353.56,-893.56 319.12,-857.79 292.14,-823.2"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="295.05,-821.25 286.2,-815.42 289.48,-825.49 295.05,-821.25"/>
<text text-anchor="start" x="404" y="-900.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="404" y="-884.74" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- singlepageapplication&#45;&gt;resetpasswordcontroller -->
<g id="edge7" class="edge">
<title>singlepageapplication&#45;&gt;resetpasswordcontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1017.72,-992.15C1049.71,-972.96 1079.22,-948.04 1098,-916.04 1113.82,-889.1 1115.07,-856.36 1110.28,-825.62"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1113.76,-825.23 1108.52,-816.02 1106.88,-826.49 1113.76,-825.23"/>
<text text-anchor="start" x="1121" y="-900.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="1121" y="-884.74" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- mobileapp&#45;&gt;signincontroller -->
<g id="edge8" class="edge">
<title>mobileapp&#45;&gt;signincontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M502.92,-961.45C530.75,-918.88 564.2,-867.71 592.91,-823.8"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="595.71,-825.92 598.25,-815.64 589.85,-822.09 595.71,-825.92"/>
<text text-anchor="start" x="568" y="-900.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="568" y="-884.74" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- mobileapp&#45;&gt;accountssummarycontroller -->
<g id="edge9" class="edge">
<title>mobileapp&#45;&gt;accountssummarycontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M282.06,-1028.96C212.39,-1010.98 137.47,-977.68 95.07,-916.04 74.19,-885.68 84.94,-852.74 107.51,-822.87"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="110.13,-825.2 113.69,-815.22 104.69,-820.8 110.13,-825.2"/>
<text text-anchor="start" x="106" y="-900.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="106" y="-884.74" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- mobileapp&#45;&gt;resetpasswordcontroller -->
<g id="edge10" class="edge">
<title>mobileapp&#45;&gt;resetpasswordcontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M607.86,-976.56C622.97,-970.89 638.17,-965.61 653,-961.04 752.12,-930.47 790.39,-964.69 882,-916.04 925.47,-892.96 965.52,-856.89 997.74,-822.24"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="999.99,-824.97 1004.15,-815.23 994.82,-820.25 999.99,-824.97"/>
<text text-anchor="start" x="948" y="-900.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="948" y="-884.74" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
</g>
</svg>
`;case"customer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1644pt" height="556pt"
 viewBox="0.00 0.00 1644.00 555.80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 551.8)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#3e4651" stroke="#2d333d" points="8,-8 8,-275.6 1628,-275.6 1628,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.9" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<!-- singlepageapplication -->
<g id="node1" class="node">
<title>singlepageapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text text-anchor="start" x="93.82" y="-160.9" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Single&#45;Page Application</text>
<text text-anchor="start" x="137.96" y="-139.1" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">JavaScript and Angular</text>
<text text-anchor="start" x="92.21" y="-117.9" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides all of the Internet banking</text>
<text text-anchor="start" x="79.78" y="-101.1" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">functionality to customers via their web</text>
<text text-anchor="start" x="173.16" y="-84.3" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">browser.</text>
</g>
<!-- mobileapp -->
<g id="node2" class="node">
<title>mobileapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1185.96,-220 860.04,-220 860.04,-40 1185.96,-40 1185.96,-220"/>
<text text-anchor="start" x="972.97" y="-160.9" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Mobile App</text>
<text text-anchor="start" x="1000.66" y="-139.1" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Xamarin</text>
<text text-anchor="start" x="900.05" y="-117.9" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides a limited subset of the Internet</text>
<text text-anchor="start" x="891.1" y="-101.1" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">banking functionality to customers via their</text>
<text text-anchor="start" x="978.26" y="-84.3" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">mobile device.</text>
</g>
<!-- supportstaff -->
<g id="node3" class="node">
<title>supportstaff</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="1596.02,-220 1275.98,-220 1275.98,-40 1596.02,-40 1596.02,-220"/>
<text text-anchor="start" x="1333.19" y="-134.4" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Customer Service Staff</text>
<text text-anchor="start" x="1315.78" y="-110.8" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Customer service staff within the bank.</text>
</g>
<!-- atm -->
<g id="node4" class="node">
<title>atm</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="770.02,-220 449.98,-220 449.98,-40 770.02,-40 770.02,-220"/>
<text text-anchor="start" x="588.89" y="-134.4" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">ATM</text>
<text text-anchor="start" x="499.52" y="-110.8" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Allows customers to withdraw cash.</text>
</g>
<!-- customer -->
<g id="node5" class="node">
<title>customer</title>
<polygon fill="#428a4f" stroke="#2563eb" stroke-width="0" points="916.3,-547.8 585.7,-547.8 585.7,-367.8 916.3,-367.8 916.3,-547.8"/>
<text text-anchor="start" x="626.49" y="-470.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Personal Banking Customer</text>
<text text-anchor="start" x="616.76" y="-447" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="721.04" y="-430.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">accounts.</text>
</g>
<!-- atm&#45;&gt;customer -->
<!-- customer&#45;&gt;singlepageapplication -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M585.85,-409.14C524.79,-387.65 456.64,-358.87 399.71,-322.8 359.07,-297.05 319.68,-262.11 286.78,-229.11"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="289.3,-226.69 279.79,-222.02 284.32,-231.6 289.3,-226.69"/>
<text text-anchor="start" x="410" y="-307.1" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="410" y="-291.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;mobileapp -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;mobileapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M824.97,-368.2C860.72,-325.37 903.77,-273.82 940.57,-229.73"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="943.15,-232.1 946.87,-222.18 937.78,-227.62 943.15,-232.1"/>
<text text-anchor="start" x="905" y="-307.1" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="905" y="-291.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;supportstaff -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;supportstaff</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M916.08,-411.42C1012.08,-380.98 1133.06,-335.47 1231,-275.6 1255.36,-260.71 1280.68,-243.97 1304.88,-227.29"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1306.83,-230.2 1313.06,-221.62 1302.85,-224.45 1306.83,-230.2"/>
<text text-anchor="start" x="1217" y="-299.3" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Asks questions to</text>
</g>
<!-- customer&#45;&gt;atm -->
<g id="edge4" class="edge">
<title>customer&#45;&gt;atm</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M712.66,-368.2C694.39,-326 672.46,-275.33 653.57,-231.68"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="656.84,-230.43 649.66,-222.64 650.42,-233.21 656.84,-230.43"/>
<text text-anchor="start" x="701" y="-299.3" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Withdraws cash using</text>
</g>
</g>
</svg>
`;case"support":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="820pt" height="816pt"
 viewBox="0.00 0.00 820.00 816.20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 812.2)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-239 8,-800.2 804,-800.2 804,-239 8,-239"/>
<text text-anchor="start" x="16" y="-785.5" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#bfdbfe" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<!-- backoffice -->
<g id="node1" class="node">
<title>backoffice</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="362.02,-744.6 39.98,-744.6 39.98,-564.6 362.02,-564.6 362.02,-744.6"/>
<text text-anchor="start" x="126.53" y="-667.4" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Back Office Staff</text>
<text text-anchor="start" x="71.04" y="-643.8" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Administration and support staff within the</text>
<text text-anchor="start" x="183.88" y="-627" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">bank.</text>
</g>
<!-- mainframe -->
<g id="node2" class="node">
<title>mainframe</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="431.52,-451 88.48,-451 88.48,-271 431.52,-271 431.52,-451"/>
<text text-anchor="start" x="137.73" y="-373.8" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Mainframe Banking System</text>
<text text-anchor="start" x="132.76" y="-350.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Stores all of the core banking information</text>
<text text-anchor="start" x="119.54" y="-333.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">about customers, accounts, transactions, etc.</text>
</g>
<!-- supportstaff -->
<g id="node3" class="node">
<title>supportstaff</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="772.02,-744.6 451.98,-744.6 451.98,-564.6 772.02,-564.6 772.02,-744.6"/>
<text text-anchor="start" x="509.19" y="-659" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Customer Service Staff</text>
<text text-anchor="start" x="491.78" y="-635.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Customer service staff within the bank.</text>
</g>
<!-- customer -->
<g id="node4" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="601.3,-180 270.7,-180 270.7,0 601.3,0 601.3,-180"/>
<text text-anchor="start" x="311.49" y="-102.8" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="301.76" y="-79.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="406.04" y="-62.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">accounts.</text>
</g>
<!-- backoffice&#45;&gt;mainframe -->
<g id="edge1" class="edge">
<title>backoffice&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M218.94,-564.92C225.44,-532.83 232.82,-496.35 239.51,-463.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="242.89,-464.22 241.44,-453.72 236.03,-462.83 242.89,-464.22"/>
<text text-anchor="start" x="243" y="-503.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- mainframe&#45;&gt;customer -->
<!-- supportstaff&#45;&gt;mainframe -->
<g id="edge2" class="edge">
<title>supportstaff&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M504.95,-564.92C464.51,-531.42 418.29,-493.13 376.98,-458.91"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="379.41,-456.37 369.47,-452.69 374.94,-461.76 379.41,-456.37"/>
<text text-anchor="start" x="456" y="-503.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- customer&#45;&gt;supportstaff -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;supportstaff</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M463.79,-179.83C495.47,-281.1 547.15,-446.3 580.35,-552.44"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="576.98,-553.38 583.31,-561.88 583.66,-551.29 576.98,-553.38"/>
<text text-anchor="start" x="558" y="-357.1" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Asks questions to</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}function Wn({viewId:e}){const n=Zn(e);return L.jsxs(xe,{direction:"horizontal",autoSaveId:"viewAsDot",children:[L.jsx(le,{minSizePixels:100,children:L.jsxs(fe,{scrollbars:"both",children:[L.jsx($,{asChild:!0,display:"block",p:"2",style:{whiteSpace:"pre",minHeight:"100%"},children:L.jsx(Fe,{variant:"soft",autoFocus:!0,children:n})}),L.jsx(ve,{text:n})]})}),L.jsx(he,{style:{width:10}}),L.jsx(le,{minSizePixels:100,children:L.jsx(fe,{scrollbars:"both",children:L.jsx($,{py:"2",style:{overflow:"scroll",overscrollBehavior:"none"},children:L.jsx($,{asChild:!0,position:"relative",className:"svg-container",children:L.jsx("div",{dangerouslySetInnerHTML:{__html:_n(e)}})})})})})]})}function jn(e){switch(e){case"index":return`---
title: "Big Bank - Landscape"
---
graph TB
  subgraph Bigbank["Big Bank plc"]
    Bigbank.Email[E-mail System]
    Bigbank.Atm[ATM]
    Bigbank.InternetBankingSystem[Internet Banking System]
    Bigbank.Backoffice[fa:fa-user Back Office Staff]
    Bigbank.SupportStaff[fa:fa-user Customer Service Staff]
    Bigbank.Mainframe[Mainframe Banking System]
  end
  Customer[fa:fa-user Personal Banking Customer]
  Bigbank.Email -. "Sends e-mails to" .-> Customer
  Customer -. "Views account balances, and makes payments using" .-> Bigbank.InternetBankingSystem
  Customer -. "Withdraws cash using" .-> Bigbank.Atm
  Customer -. "Asks questions to" .-> Bigbank.SupportStaff
  Bigbank.Atm -. "Uses" .-> Bigbank.Mainframe
  Bigbank.InternetBankingSystem -. "Sends e-mail using" .-> Bigbank.Email
  Bigbank.InternetBankingSystem -. "Gets account information from, and makes payments using" .-> Bigbank.Mainframe
  Bigbank.Backoffice -. "Uses" .-> Bigbank.Mainframe
  Bigbank.SupportStaff -. "Uses" .-> Bigbank.Mainframe
`;case"context":return`---
title: "Internet Banking System - SystemContext"
---
graph TB
  subgraph Bigbank["Big Bank plc"]
    Bigbank.InternetBankingSystem[Internet Banking System]
    Bigbank.Email[E-mail System]
    Bigbank.Mainframe[Mainframe Banking System]
  end
  Customer[fa:fa-user Personal Banking Customer]
  Bigbank.InternetBankingSystem -. "Sends e-mail using" .-> Bigbank.Email
  Bigbank.InternetBankingSystem -. "Gets account information from, and makes payments using" .-> Bigbank.Mainframe
  Bigbank.Email -. "Sends e-mails to" .-> Customer
  Customer -. "Views account balances, and makes payments using" .-> Bigbank.InternetBankingSystem
`;case"ibsContainers":return`---
title: "Internet Banking System - Containers"
---
graph TB
  Customer[fa:fa-user Personal Banking Customer]
  subgraph BigbankInternetBankingSystem["Internet Banking System"]
    BigbankInternetBankingSystem.MobileApp[Mobile App]
    BigbankInternetBankingSystem.WebApplication[Web Application]
    BigbankInternetBankingSystem.SinglePageApplication[Single-Page Application]
    BigbankInternetBankingSystem.ApiApplication[API Application]
    BigbankInternetBankingSystem.Database([Database])
  end
  BigbankMainframe[Mainframe Banking System]
  BigbankEmail[E-mail System]
  Customer -. "Visits bigbank.com using HTTPS" .-> BigbankInternetBankingSystem.WebApplication
  Customer -. "Views account balances, and makes payments using" .-> BigbankInternetBankingSystem.MobileApp
  Customer -. "Views account balances, and makes payments using" .-> BigbankInternetBankingSystem.SinglePageApplication
  BigbankInternetBankingSystem.MobileApp -. "Makes API calls to\r [JSON/HTTPS]" .-> BigbankInternetBankingSystem.ApiApplication
  BigbankInternetBankingSystem.WebApplication -. "Delivers to the customer's web browser" .-> BigbankInternetBankingSystem.SinglePageApplication
  BigbankInternetBankingSystem.SinglePageApplication -. "Makes API calls to\r [JSON/HTTPS]" .-> BigbankInternetBankingSystem.ApiApplication
  BigbankInternetBankingSystem.ApiApplication -. "Reads from and writes to\r [SQL/TCPS]" .-> BigbankInternetBankingSystem.Database
  BigbankInternetBankingSystem.ApiApplication -. "Sends e-mail using" .-> BigbankEmail
  BigbankInternetBankingSystem.ApiApplication -. "Makes API calls to\r [JSON/HTTPS]" .-> BigbankMainframe
  BigbankEmail -. "Sends e-mails to" .-> Customer
`;case"apiApp":return`---
title: "API Application - Components"
---
graph TB
  BigbankInternetBankingSystemSinglePageApplication[Single-Page Application]
  BigbankInternetBankingSystemMobileApp[Mobile App]
  subgraph BigbankInternetBankingSystemApiApplication["API Application"]
    BigbankInternetBankingSystemApiApplication.SigninController[Sign In Controller]
    BigbankInternetBankingSystemApiApplication.AccountsSummaryController[Accounts Summary Controller]
    BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade[Mainframe Banking System Facade]
    BigbankInternetBankingSystemApiApplication.ResetPasswordController[Reset Password Controller]
    BigbankInternetBankingSystemApiApplication.SecurityComponent[Security Component]
    BigbankInternetBankingSystemApiApplication.EmailComponent[E-mail Component]
  end
  BigbankMainframe[Mainframe Banking System]
  BigbankInternetBankingSystemDatabase([Database])
  BigbankEmail[E-mail System]
  BigbankInternetBankingSystemSinglePageApplication -. "Makes API calls to\r [JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.ResetPasswordController
  BigbankInternetBankingSystemSinglePageApplication -. "Makes API calls to\r [JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.AccountsSummaryController
  BigbankInternetBankingSystemSinglePageApplication -. "Makes API calls to\r [JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.SigninController
  BigbankInternetBankingSystemMobileApp -. "Makes API calls to\r [JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.ResetPasswordController
  BigbankInternetBankingSystemMobileApp -. "Makes API calls to\r [JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.AccountsSummaryController
  BigbankInternetBankingSystemMobileApp -. "Makes API calls to\r [JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.SigninController
  BigbankInternetBankingSystemApiApplication.SigninController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.SecurityComponent
  BigbankInternetBankingSystemApiApplication.AccountsSummaryController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade
  BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade -. "Makes API calls to\r [JSON/HTTPS]" .-> BigbankMainframe
  BigbankInternetBankingSystemApiApplication.ResetPasswordController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.EmailComponent
  BigbankInternetBankingSystemApiApplication.ResetPasswordController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.SecurityComponent
  BigbankInternetBankingSystemApiApplication.SecurityComponent -. "Reads from and writes to\r [SQL/TCPS]" .-> BigbankInternetBankingSystemDatabase
  BigbankInternetBankingSystemApiApplication.EmailComponent -. "Sends e-mail using" .-> BigbankEmail
`;case"customer":return`---
title: "Personal Banking Customer"
---
graph TB
  Customer[fa:fa-user Personal Banking Customer]
  subgraph Bigbank["Big Bank plc"]
    Bigbank.InternetBankingSystemSinglePageApplication[Single-Page Application]
    Bigbank.InternetBankingSystemMobileApp[Mobile App]
    Bigbank.SupportStaff[fa:fa-user Customer Service Staff]
    Bigbank.Atm[ATM]
  end
  Customer -. "Views account balances, and makes payments using" .-> Bigbank.InternetBankingSystemMobileApp
  Customer -. "Views account balances, and makes payments using" .-> Bigbank.InternetBankingSystemSinglePageApplication
  Customer -. "Withdraws cash using" .-> Bigbank.Atm
  Customer -. "Asks questions to" .-> Bigbank.SupportStaff
  Bigbank -. "Sends e-mails to" .-> Customer
`;case"support":return`---
title: "Customer Service Staff"
---
graph TB
  subgraph Bigbank["Big Bank plc"]
    Bigbank.Backoffice[fa:fa-user Back Office Staff]
    Bigbank.SupportStaff[fa:fa-user Customer Service Staff]
    Bigbank.Mainframe[Mainframe Banking System]
  end
  Customer[fa:fa-user Personal Banking Customer]
  Bigbank.Backoffice -. "Uses" .-> Bigbank.Mainframe
  Customer -. "Asks questions to" .-> Bigbank.SupportStaff
  Bigbank.SupportStaff -. "Uses" .-> Bigbank.Mainframe
  Bigbank -. "Sends e-mails to" .-> Customer
`;default:throw new Error("Unknown viewId: "+e)}}const Un=async(e,n)=>{const{default:t}=await Dn(()=>import("https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs"),__vite__mapDeps([]));t.initialize({theme:"dark"});const{svg:i}=await t.render(e,n);return i};function Jn({viewId:e}){const n=jn(e),[t,{execute:i}]=Je(Un,null);return me.useEffect(()=>{i(e,n)},[n]),L.jsxs(xe,{direction:"horizontal",autoSaveId:"ViewAsD2",children:[L.jsx(le,{minSizePixels:100,children:L.jsxs(fe,{scrollbars:"both",children:[L.jsx($,{asChild:!0,display:"block",p:"2",style:{whiteSpace:"pre",minHeight:"100%"},children:L.jsx(Fe,{variant:"soft",autoFocus:!0,children:n})}),L.jsx(ve,{text:n})]})}),L.jsx(he,{style:{width:10}}),L.jsx(le,{minSizePixels:100,children:L.jsx(fe,{scrollbars:"both",children:t.result&&L.jsx($,{grow:"1",asChild:!0,position:"relative",className:"svg-container",children:L.jsx("div",{dangerouslySetInnerHTML:{__html:t.result}})})})})]})}function $n({viewId:e,viewMode:n}){return L.jsx(Rn,{asChild:!0,position:"fixed",inset:"0",pt:"8",pl:"8",pr:"2",align:"stretch",direction:"column",children:L.jsxs(Y.Root,{value:n,onValueChange:t=>t!==n&&mn({mode:t}),children:[L.jsx($,{asChild:!0,shrink:"0",grow:"0",children:L.jsxs(Y.List,{children:[L.jsx(Y.Trigger,{value:"react",children:"React"}),L.jsx(Y.Trigger,{value:"dot",children:"Graphviz"}),L.jsx(Y.Trigger,{value:"mmd",children:"Mermaid"}),L.jsx(Y.Trigger,{value:"d2",children:"D2"})]})}),L.jsxs($,{p:"2",className:On.otherFormats,position:"relative",children:[L.jsx(Y.Content,{value:"react",children:""}),L.jsx(Y.Content,{value:"dot",children:L.jsx(Wn,{viewId:e})}),L.jsx(Y.Content,{value:"mmd",children:L.jsx(Jn,{viewId:e})}),L.jsx(Y.Content,{value:"d2",children:L.jsx(Vn,{viewId:e})})]})]})})}export{$n as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
