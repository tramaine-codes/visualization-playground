import{r as De,u as En,R as je,j as L,S as fe,B as Y,C as Fe,a as ve,b as gn,_ as pn,F as Rn,T as $,c as Dn,s as Bn}from"./index-tfKky68i.js";function Je(e,n){const[t,i]=De.useState({status:"not-executed",error:void 0,result:n}),a=De.useRef(),s=De.useRef(),l=En({execute(...T){s.current=T;const c=e(...T);return a.current=c,i(r=>({...r,status:"loading"})),c.then(r=>{c===a.current&&i(o=>({...o,status:"success",error:void 0,result:r}))},r=>{c===a.current&&i(o=>({...o,status:"error",error:r}))}),c},reset(){i({status:"not-executed",error:void 0,result:n}),a.current=void 0,s.current=void 0}});return[t,De.useMemo(()=>({reset(){l.current.reset()},execute:(...T)=>l.current.execute(...T)}),[]),{promise:a.current,lastArgs:s.current}]}function On(e){switch(e){case"index":return`direction: down

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
BigbankInternetBankingSystem.MobileApp -> BigbankInternetBankingSystem.ApiApplication: "Makes API calls to"
BigbankInternetBankingSystem.WebApplication -> BigbankInternetBankingSystem.SinglePageApplication: "Delivers to the customer's web browser"
BigbankInternetBankingSystem.SinglePageApplication -> BigbankInternetBankingSystem.ApiApplication: "Makes API calls to"
BigbankInternetBankingSystem.ApiApplication -> BigbankInternetBankingSystem.Database: "Reads from and writes to"
BigbankInternetBankingSystem.ApiApplication -> BigbankEmail: "Sends e-mail using"
BigbankInternetBankingSystem.ApiApplication -> BigbankMainframe: "Makes API calls to"
BigbankEmail -> Customer: "Sends e-mails to"
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
`;case"spa":return`direction: down

Customer: {
  label: "Personal Banking Customer"
  shape: person
}
BigbankInternetBankingSystem: {
  label: "Internet Banking System"

  WebApplication: {
    label: "Web Application"
  }
  SinglePageApplication: {
    label: "Single-Page Application"
  }
  ApiApplication: {
    label: "API Application"
  }
}

Customer -> BigbankInternetBankingSystem.SinglePageApplication: "Views account balances, and makes payments using"
BigbankInternetBankingSystem.WebApplication -> BigbankInternetBankingSystem.SinglePageApplication: "Delivers to the customer's web browser"
BigbankInternetBankingSystem.SinglePageApplication -> BigbankInternetBankingSystem.ApiApplication: "Makes API calls to"
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

BigbankInternetBankingSystemSinglePageApplication -> BigbankInternetBankingSystemApiApplication.ResetPasswordController: "Makes API calls to"
BigbankInternetBankingSystemSinglePageApplication -> BigbankInternetBankingSystemApiApplication.AccountsSummaryController: "Makes API calls to"
BigbankInternetBankingSystemSinglePageApplication -> BigbankInternetBankingSystemApiApplication.SigninController: "Makes API calls to"
BigbankInternetBankingSystemMobileApp -> BigbankInternetBankingSystemApiApplication.ResetPasswordController: "Makes API calls to"
BigbankInternetBankingSystemMobileApp -> BigbankInternetBankingSystemApiApplication.AccountsSummaryController: "Makes API calls to"
BigbankInternetBankingSystemMobileApp -> BigbankInternetBankingSystemApiApplication.SigninController: "Makes API calls to"
BigbankInternetBankingSystemApiApplication.SigninController -> BigbankInternetBankingSystemApiApplication.SecurityComponent: "Uses"
BigbankInternetBankingSystemApiApplication.AccountsSummaryController -> BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade: "Uses"
BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade -> BigbankMainframe: "Makes API calls to"
BigbankInternetBankingSystemApiApplication.ResetPasswordController -> BigbankInternetBankingSystemApiApplication.EmailComponent: "Uses"
BigbankInternetBankingSystemApiApplication.ResetPasswordController -> BigbankInternetBankingSystemApiApplication.SecurityComponent: "Uses"
BigbankInternetBankingSystemApiApplication.SecurityComponent -> BigbankInternetBankingSystemDatabase: "Reads from and writes to"
BigbankInternetBankingSystemApiApplication.EmailComponent -> BigbankEmail: "Sends e-mail using"
`;case"webapp":return`direction: down

Bigbank: {
  label: "Big Bank plc"

  InternetBankingSystem: {
    label: "Internet Banking System"

    WebApplication: {
      label: "Web Application"
    }
    SinglePageApplication: {
      label: "Single-Page Application"
    }
  }
}
Customer: {
  label: "Personal Banking Customer"
  shape: person
}

Customer -> Bigbank.InternetBankingSystem.WebApplication: "Visits bigbank.com using HTTPS"
Bigbank.InternetBankingSystem.WebApplication -> Bigbank.InternetBankingSystem.SinglePageApplication: "Delivers to the customer's web browser"
Bigbank -> Customer: "Sends e-mails to"
`;case"mobileApp":return`direction: down

Customer: {
  label: "Personal Banking Customer"
  shape: person
}
BigbankInternetBankingSystem: {
  label: "Internet Banking System"

  MobileApp: {
    label: "Mobile App"
  }
  ApiApplication: {
    label: "API Application"

    SigninController: {
      label: "Sign In Controller"
    }
    AccountsSummaryController: {
      label: "Accounts Summary Controller"
    }
    ResetPasswordController: {
      label: "Reset Password Controller"
    }
  }
}

Customer -> BigbankInternetBankingSystem.MobileApp: "Views account balances, and makes payments using"
BigbankInternetBankingSystem.MobileApp -> BigbankInternetBankingSystem.ApiApplication.ResetPasswordController: "Makes API calls to"
BigbankInternetBankingSystem.MobileApp -> BigbankInternetBankingSystem.ApiApplication.AccountsSummaryController: "Makes API calls to"
BigbankInternetBankingSystem.MobileApp -> BigbankInternetBankingSystem.ApiApplication.SigninController: "Makes API calls to"
`;default:throw new Error("Unknown viewId: "+e)}}const{createElement:Le,createContext:mn,createRef:qn,forwardRef:Ke,useCallback:U,useContext:qe,useEffect:se,useImperativeHandle:Ye,useLayoutEffect:An,useMemo:In,useRef:J,useState:ue}=je,Ve=je.useId,Se=mn(null);Se.displayName="PanelGroupContext";const Ae=An,dn=typeof Ve=="function"?Ve:()=>null;let bn=0;function we(e=null){const n=dn(),t=J(e||n||null);return t.current===null&&(t.current=""+bn++),e??t.current}function $e({children:e,className:n="",collapsedSizePercentage:t,collapsedSizePixels:i,collapsible:a,dataAttributes:s,defaultSizePercentage:l,defaultSizePixels:T,forwardedRef:c,id:r,maxSizePercentage:o,maxSizePixels:E,minSizePercentage:g,minSizePixels:f,onCollapse:p,onExpand:S,onResize:N,order:A,style:u,tagName:H="div"}){const z=qe(Se);if(z===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:I,expandPanel:m,getPanelSize:v,getPanelStyle:X,groupId:w,isPanelCollapsed:M,registerPanel:re,resizePanel:_,unregisterPanel:Q}=z,ee=we(r),V=J({callbacks:{onCollapse:p,onExpand:S,onResize:N},constraints:{collapsedSizePercentage:t,collapsedSizePixels:i,collapsible:a,defaultSizePercentage:l,defaultSizePixels:T,maxSizePercentage:o,maxSizePixels:E,minSizePercentage:g,minSizePixels:f},id:ee,idIsFromProps:r!==void 0,order:A});J({didLogMissingDefaultSizeWarning:!1}),Ae(()=>{const{callbacks:K,constraints:Z}=V.current;V.current.id=ee,V.current.idIsFromProps=r!==void 0,V.current.order=A,K.onCollapse=p,K.onExpand=S,K.onResize=N,Z.collapsedSizePercentage=t,Z.collapsedSizePixels=i,Z.collapsible=a,Z.defaultSizePercentage=l,Z.defaultSizePixels=T,Z.maxSizePercentage=o,Z.maxSizePixels=E,Z.minSizePercentage=g,Z.minSizePixels=f}),Ae(()=>{const K=V.current;return re(K),()=>{Q(K)}},[A,ee,re,Q]),Ye(c,()=>({collapse:()=>{I(V.current)},expand:()=>{m(V.current)},getId(){return ee},getSize(){return v(V.current)},isCollapsed(){return M(V.current)},isExpanded(){return!M(V.current)},resize:K=>{_(V.current,K)}}),[I,m,v,M,ee,_]);const de=X(V.current);return Le(H,{children:e,className:n,style:{...de,...u},...s,"data-panel":"","data-panel-id":ee,"data-panel-group-id":w,"data-panel-collapsible":void 0,"data-panel-size":void 0})}const le=Ke((e,n)=>Le($e,{...e,forwardedRef:n}));$e.displayName="Panel";le.displayName="forwardRef(Panel)";function Be(e,n){return e/n*100}function Ze(e,n){let{collapsedSizePercentage:t=0,collapsedSizePixels:i,defaultSizePercentage:a,defaultSizePixels:s,maxSizePercentage:l=100,maxSizePixels:T,minSizePercentage:c=0,minSizePixels:r}=e;return(i!=null||s!=null||r!=null||T!=null)&&n<=0?(console.warn(`WARNING: Invalid group size: ${n}px`),{collapsedSizePercentage:0,defaultSizePercentage:a,maxSizePercentage:0,minSizePercentage:0}):(i!=null&&(t=Be(i,n)),s!=null&&(a=Be(s,n)),r!=null&&(c=Be(r,n)),T!=null&&(l=Be(T,n)),{collapsedSizePercentage:t,defaultSizePercentage:a,maxSizePercentage:l,minSizePercentage:c})}function Ee(e,n,t){let i=0,a=0;for(let r=0;r<e.length;r++)if(r!==n){const{collapsible:o}=e[r],{collapsedSizePercentage:E,maxSizePercentage:g,minSizePercentage:f}=Ze(e[r],t);a+=g,i+=o?E:f}const{collapsedSizePercentage:s,defaultSizePercentage:l,maxSizePercentage:T,minSizePercentage:c}=Ze(e[n],t);return{collapsedSizePercentage:s,defaultSizePercentage:l,maxSizePercentage:e.length>1?Math.min(T,100-i):T,minSizePercentage:e.length>1?Math.max(c,100-a):c}}const Cn=10;function Ie(e,n,t=Cn){e=parseFloat(e.toFixed(t)),n=parseFloat(n.toFixed(t));const i=e-n;return i===0?0:i>0?1:-1}function j(e,n,t){return Ie(e,n,t)===0}function ce({groupSizePixels:e,panelConstraints:n,panelIndex:t,size:i}){if(n.some(({collapsedSizePixels:r,defaultSizePixels:o,minSizePixels:E,maxSizePixels:g})=>r!=null||o!=null||E!=null||g!=null)&&e<=0)return console.warn(`WARNING: Invalid group size: ${e}px`),0;let{collapsible:s}=n[t];const{collapsedSizePercentage:l,maxSizePercentage:T,minSizePercentage:c}=Ee(n,t,e);if(c!=null&&Ie(i,c)<0)if(s){const r=(l+c)/2;Ie(i,r)<0?i=l:i=c}else i=c;return T!=null&&(i=Math.min(T,i)),i}function Oe({delta:e,groupSizePixels:n,layout:t,panelConstraints:i,pivotIndices:a,trigger:s}){if(j(e,0))return t;const l=[...t];let T=0;if(s==="keyboard"){{const r=e<0?a[1]:a[0];if(i[r].collapsible){const E=t[r],{collapsedSizePercentage:g,minSizePercentage:f}=Ee(i,r,n);if(j(E,g)){const p=f-E;Ie(p,Math.abs(e))>0&&(e=e<0?0-p:p)}}}{const r=e<0?a[0]:a[1];if(i[r].collapsible){const E=t[r],{collapsedSizePercentage:g,minSizePercentage:f}=Ee(i,r,n);if(j(E,f)){const p=E-g;Ie(p,Math.abs(e))>0&&(e=e<0?0-p:p)}}}}{const r=e<0?1:-1;let o=e<0?a[1]:a[0],E=0;for(;;){const f=t[o],S=ce({groupSizePixels:n,panelConstraints:i,panelIndex:o,size:100})-f;if(E+=S,o+=r,o<0||o>=i.length)break}const g=Math.min(Math.abs(e),Math.abs(E));e=e<0?0-g:g}{let o=e<0?a[0]:a[1];for(;o>=0&&o<i.length;){const E=Math.abs(e)-Math.abs(T),g=t[o],f=g-E,p=ce({groupSizePixels:n,panelConstraints:i,panelIndex:o,size:f});if(!j(g,p)&&(T+=g-p,l[o]=p,T.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?o--:o++}}if(j(T,0))return t;{const r=e<0?a[1]:a[0],o=t[r]+T,E=ce({groupSizePixels:n,panelConstraints:i,panelIndex:r,size:o});if(l[r]=E,!j(E,o)){let g=o-E,p=e<0?a[1]:a[0];for(;p>=0&&p<i.length;){const S=l[p],N=S+g,A=ce({groupSizePixels:n,panelConstraints:i,panelIndex:p,size:N});if(j(S,A)||(g-=A-S,l[p]=A),j(g,0))break;e>0?p--:p++}}}const c=l.reduce((r,o)=>o+r,0);return T=100-c,j(c,100)?l:t}function Xe(e,n="Assertion failed!"){if(!e)throw console.error(n),Error(n)}function ie({sizePercentage:e,sizePixels:n},t){if(e!=null)return e;if(n!=null)return Be(n,t)}function kn({groupSizePixels:e,layout:n,panelsArray:t,pivotIndices:i}){let a=0,s=100,l=0,T=0;t.forEach((E,g)=>{var f,p;const{constraints:S}=E,{maxSizePercentage:N,maxSizePixels:A,minSizePercentage:u,minSizePixels:H}=S,z=(f=ie({sizePercentage:u,sizePixels:H},e))!==null&&f!==void 0?f:0,I=(p=ie({sizePercentage:N,sizePixels:A},e))!==null&&p!==void 0?p:100;g===i[0]?(a=z,s=I):(l+=z,T+=I)});const c=Math.min(s,100-l),r=Math.max(a,100-T),o=n[i[0]];return{valueMax:c,valueMin:r,valueNow:o}}function oe(e){return Array.from(document.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function Qe(e,n){const i=oe(e).findIndex(a=>a.getAttribute("data-panel-resize-handle-id")===n);return i??null}function en(e,n){const t=Qe(e,n);return t!=null?[t,t+1]:[-1,-1]}function ge(e){const n=document.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return n||null}function ne(e){const n=ge(e);if(n==null)return NaN;const t=n.getAttribute("data-panel-group-direction"),i=oe(e);return t==="horizontal"?n.offsetWidth-i.reduce((a,s)=>a+s.offsetWidth,0):n.offsetHeight-i.reduce((a,s)=>a+s.offsetHeight,0)}function Nn(e){const n=ge(e);if(n==null)return NaN;const t=n.getAttribute("data-panel-group-direction"),i=oe(e);return t==="horizontal"?n.offsetWidth-i.reduce((a,s)=>a+s.offsetWidth,0):n.offsetHeight-i.reduce((a,s)=>a+s.offsetHeight,0)}function ye(e){const n=document.querySelector(`[data-panel-resize-handle-id="${e}"]`);return n||null}function un(e,n,t){var i,a,s,l;const T=ye(n),c=oe(e),r=T?c.indexOf(T):-1,o=(i=(a=t[r])===null||a===void 0?void 0:a.id)!==null&&i!==void 0?i:null,E=(s=(l=t[r+1])===null||l===void 0?void 0:l.id)!==null&&s!==void 0?s:null;return[o,E]}function Sn({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:i,panelDataArray:a,setLayout:s}){J({didWarnAboutMissingResizeHandle:!1}),Ae(()=>{const l=ne(t),T=oe(t);for(let c=0;c<a.length-1;c++){const{valueMax:r,valueMin:o,valueNow:E}=kn({groupSizePixels:l,layout:i,panelsArray:a,pivotIndices:[c,c+1]}),g=T[c];g==null||(g.setAttribute("aria-controls",a[c].id),g.setAttribute("aria-valuemax",""+Math.round(r)),g.setAttribute("aria-valuemin",""+Math.round(o)),g.setAttribute("aria-valuenow",""+Math.round(E)))}return()=>{T.forEach((c,r)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,i,a]),se(()=>{const{panelDataArray:l}=n.current,T=ge(t);Xe(T!=null,`No group found for id "${t}"`);const r=oe(t).map(o=>{const E=o.getAttribute("data-panel-resize-handle-id"),[g,f]=un(t,E,l);if(g==null||f==null)return()=>{};const p=S=>{if(!S.defaultPrevented)switch(S.key){case"Enter":{S.preventDefault();const u=l.findIndex(H=>H.id===g);if(u>=0){const H=l[u],z=i[u];if(z!=null&&H.constraints.collapsible){var N,A;const I=Nn(t),m=(N=ie({sizePercentage:H.constraints.collapsedSizePercentage,sizePixels:H.constraints.collapsedSizePixels},I))!==null&&N!==void 0?N:0,v=(A=ie({sizePercentage:H.constraints.minSizePercentage,sizePixels:H.constraints.minSizePixels},I))!==null&&A!==void 0?A:0,X=Oe({delta:j(z,m)?v-m:m-z,groupSizePixels:I,layout:i,panelConstraints:l.map(w=>w.constraints),pivotIndices:en(t,E),trigger:"keyboard"});i!==X&&s(X)}}break}}};return o.addEventListener("keydown",p),()=>{o.removeEventListener("keydown",p)}});return()=>{r.forEach(o=>o())}},[e,n,t,i,a,s])}function Ce(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function nn(e){return e.type==="keydown"}function tn(e){return e.type.startsWith("mouse")}function an(e){return e.type.startsWith("touch")}function sn(e,n){const t=e==="horizontal";if(tn(n))return t?n.clientX:n.clientY;if(an(n)){const i=n.touches[0];return t?i.screenX:i.screenY}else throw Error(`Unsupported event type "${n.type}"`)}function yn(e,n,t,i){const a=t==="horizontal",l=ye(n).getAttribute("data-panel-group-id");let{initialCursorPosition:T}=i;const c=sn(t,e),o=ge(l).getBoundingClientRect(),E=a?o.width:o.height;return(c-T)/E*100}function xn(e,n,t,i,a,s){if(nn(e)){const l=i==="horizontal",c=ge(n).getBoundingClientRect(),r=l?c.width:c.height;let o=0;e.shiftKey?o=100:s.percentage!=null?o=s.percentage:s.pixels!=null?o=s.pixels/r:o=10;let E=0;switch(e.key){case"ArrowDown":E=l?0:o;break;case"ArrowLeft":E=l?-o:0;break;case"ArrowRight":E=l?o:0;break;case"ArrowUp":E=l?0:-o;break;case"End":E=100;break;case"Home":E=-100;break}return E}else return yn(e,t,i,a)}function _e({groupSizePixels:e,panelDataArray:n}){const t=Array(n.length),i=n.map(l=>l.constraints);let a=0,s=100;for(let l=0;l<n.length;l++){const{defaultSizePercentage:T}=Ee(i,l,e);T!=null&&(a++,t[l]=T,s-=T)}for(let l=0;l<n.length;l++){const{defaultSizePercentage:T}=Ee(i,l,e);if(T!=null)continue;const c=n.length-a,r=s/c;a++,t[l]=r,s-=r}return t}function q(e,n){return e/100*n}function te(e,n,t,i){const a=ne(e);t.forEach((s,l)=>{const T=n[l];if(!T)return;const{callbacks:c,constraints:r,id:o}=T,{collapsible:E}=r,g={sizePercentage:s,sizePixels:q(s,a)},f=i[o];if(f==null||g.sizePercentage!==f.sizePercentage||g.sizePixels!==f.sizePixels){i[o]=g;const{onCollapse:S,onExpand:N,onResize:A}=c;if(A&&A(g,f),E&&(S||N)){var p;const u=(p=ie({sizePercentage:r.collapsedSizePercentage,sizePixels:r.collapsedSizePixels},a))!==null&&p!==void 0?p:0,H=ie(g,a);N&&(f==null||f.sizePercentage===u)&&H!==u&&N(),S&&(f==null||f.sizePercentage!==u)&&H===u&&S()}}})}function ke(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function hn({dragState:e,layout:n,panelData:t,panelIndex:i,precision:a=3}){const s=n[i];let l;return t.length===1||s==null?l="1":l=s.toPrecision(a),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:e!==null?"none":void 0}}let He=null,ae=null;function ln(e){switch(e){case"horizontal":return"ew-resize";case"horizontal-max":return"w-resize";case"horizontal-min":return"e-resize";case"vertical":return"ns-resize";case"vertical-max":return"n-resize";case"vertical-min":return"s-resize"}}function Pn(){ae!==null&&(document.head.removeChild(ae),He=null,ae=null)}function Pe(e){if(He===e)return;He=e;const n=ln(e);ae===null&&(ae=document.createElement("style"),document.head.appendChild(ae)),ae.innerHTML=`*{cursor: ${n}!important;}`}function Gn(e,n=10){let t=null;return(...a)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...a)},n)}}function Hn(e){return Array.from(document.querySelectorAll(`[data-panel][data-panel-group-id="${e}"]`))}function We(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function on(e){return e.map(n=>{const{constraints:t,id:i,idIsFromProps:a,order:s}=n;return a?i:`${s}:${JSON.stringify(t)}`}).sort((n,t)=>n.localeCompare(t)).join(",")}function rn(e,n){try{const t=n.getItem(`PanelGroup:sizes:${e}`);if(t){const i=JSON.parse(t);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function Fn(e,n,t){const i=rn(e,t);if(i){var a;const s=on(n);return(a=i[s])!==null&&a!==void 0?a:null}return null}function vn(e,n,t,i){const a=on(n),s=rn(e,i)||{};s[a]=t;try{i.setItem(`PanelGroup:sizes:${e}`,JSON.stringify(s))}catch(l){console.error(l)}}function Ue(e){return e.some(n=>n.collapsedSizePixels!==void 0||n.maxSizePixels!==void 0||n.minSizePixels!==void 0)}function Ne({groupSizePixels:e,layout:n,panelConstraints:t}){const i=[...n];if(i.length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${i.map(s=>`${s}%`).join(", ")}`);j(i.reduce((s,l)=>s+l,0),100);let a=0;for(let s=0;s<t.length;s++){const l=i[s],T=ce({groupSizePixels:e,panelConstraints:t,panelIndex:s,size:l});l!=T&&(a+=l-T,i[s]=T)}if(!j(a,0))for(let s=0;s<t.length;s++){const l=i[s],T=l+a,c=ce({groupSizePixels:e,panelConstraints:t,panelIndex:s,size:T});if(l!==c&&(a-=c-l,i[s]=c,j(a,0)))break}return i}const wn=100,me={getItem:e=>(We(me),me.getItem(e)),setItem:(e,n)=>{We(me),me.setItem(e,n)}},Ge={};function Tn({autoSaveId:e=null,children:n,className:t="",dataAttributes:i,direction:a,forwardedRef:s,id:l,onLayout:T=null,keyboardResizeByPercentage:c=null,keyboardResizeByPixels:r=null,storage:o=me,style:E,tagName:g="div"}){const f=we(l),[p,S]=ue(null),[N,A]=ue([]),u=J({}),H=J(new Map),z=J(0),I=J({autoSaveId:e,direction:a,dragState:p,id:f,keyboardResizeByPercentage:c,keyboardResizeByPixels:r,onLayout:T,storage:o}),m=J({layout:N,panelDataArray:[]});J({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),Ye(s,()=>({getId:()=>I.current.id,getLayout:()=>{const{id:R}=I.current,{layout:d}=m.current,B=ne(R);return d.map(D=>({sizePercentage:D,sizePixels:q(D,B)}))},setLayout:R=>{const{id:d,onLayout:B}=I.current,{layout:D,panelDataArray:O}=m.current,C=ne(d),b=R.map(y=>ie(y,C)),x=Ne({groupSizePixels:C,layout:b,panelConstraints:O.map(y=>y.constraints)});Ce(D,x)||(A(x),m.current.layout=x,B&&B(x.map(y=>({sizePercentage:y,sizePixels:q(y,C)}))),te(d,O,x,u.current))}}),[]),Ae(()=>{I.current.autoSaveId=e,I.current.direction=a,I.current.dragState=p,I.current.id=f,I.current.onLayout=T,I.current.storage=o}),Sn({committedValuesRef:I,eagerValuesRef:m,groupId:f,layout:N,panelDataArray:m.current.panelDataArray,setLayout:A}),se(()=>{const{panelDataArray:R}=m.current;if(e){if(N.length===0||N.length!==R.length)return;Ge[e]||(Ge[e]=Gn(vn,wn)),Ge[e](e,R,N,o)}},[e,N,o]),Ae(()=>{const{layout:R,panelDataArray:d}=m.current,B=d.map(({constraints:D})=>D);if(Ue(B))if(typeof ResizeObserver>"u")console.warn("WARNING: Pixel based constraints require ResizeObserver but it is not supported by the current browser.");else{const D=new ResizeObserver(()=>{const O=ne(f),{onLayout:C}=I.current,b=Ne({groupSizePixels:O,layout:R,panelConstraints:d.map(x=>x.constraints)});Ce(R,b)||(A(b),m.current.layout=b,C&&C(b.map(x=>({sizePercentage:x,sizePixels:q(x,O)}))),te(f,d,b,u.current))});return D.observe(ge(f)),()=>{D.disconnect()}}},[f]),se(()=>{});const v=U(R=>{const{onLayout:d}=I.current,{layout:B,panelDataArray:D}=m.current;if(R.constraints.collapsible){const O=D.map(G=>G.constraints),{collapsedSizePercentage:C,panelSizePercentage:b,pivotIndices:x,groupSizePixels:y}=Te(f,D,R,B);if(b!==C){H.current.set(R.id,b);const F=D.indexOf(R)===D.length-1?b-C:C-b,k=Oe({delta:F,groupSizePixels:y,layout:B,panelConstraints:O,pivotIndices:x,trigger:"imperative-api"});ke(B,k)||(A(k),m.current.layout=k,d&&d(k.map(h=>({sizePercentage:h,sizePixels:q(h,y)}))),te(f,D,k,u.current))}}},[f]),X=U(R=>{const{onLayout:d}=I.current,{layout:B,panelDataArray:D}=m.current;if(R.constraints.collapsible){const O=D.map(F=>F.constraints),{collapsedSizePercentage:C,panelSizePercentage:b,minSizePercentage:x,pivotIndices:y,groupSizePixels:G}=Te(f,D,R,B);if(b===C){const F=H.current.get(R.id),k=F!=null&&F>=x?F:x,P=D.indexOf(R)===D.length-1?b-k:k-b,W=Oe({delta:P,groupSizePixels:G,layout:B,panelConstraints:O,pivotIndices:y,trigger:"imperative-api"});ke(B,W)||(A(W),m.current.layout=W,d&&d(W.map(pe=>({sizePercentage:pe,sizePixels:q(pe,G)}))),te(f,D,W,u.current))}}},[f]),w=U(R=>{const{layout:d,panelDataArray:B}=m.current,{panelSizePercentage:D,panelSizePixels:O}=Te(f,B,R,d);return{sizePercentage:D,sizePixels:O}},[f]),M=U(R=>{const{panelDataArray:d}=m.current,B=d.indexOf(R);return hn({dragState:p,layout:N,panelData:d,panelIndex:B})},[p,N]),re=U(R=>{const{layout:d,panelDataArray:B}=m.current,{collapsedSizePercentage:D,collapsible:O,panelSizePercentage:C}=Te(f,B,R,d);return O===!0&&C===D},[f]),_=U(R=>{const{layout:d,panelDataArray:B}=m.current,{collapsedSizePercentage:D,collapsible:O,panelSizePercentage:C}=Te(f,B,R,d);return!O||C>D},[f]),Q=U(R=>{const{autoSaveId:d,id:B,onLayout:D,storage:O}=I.current,{layout:C,panelDataArray:b}=m.current;if(b.push(R),b.sort((k,h)=>{const P=k.order,W=h.order;return P==null&&W==null?0:P==null?-1:W==null?1:P-W}),Hn(B).length!==b.length)return;let y=null;d&&(y=Fn(d,b,O));const G=ne(B);if(G<=0&&Ue(b.map(({constraints:k})=>k)))return;y==null&&(y=_e({groupSizePixels:G,panelDataArray:b}));const F=Ne({groupSizePixels:G,layout:y,panelConstraints:b.map(k=>k.constraints)});A(F),m.current.layout=F,Ce(C,F)||(D&&D(F.map(k=>({sizePercentage:k,sizePixels:q(k,G)}))),te(B,b,F,u.current))},[]),ee=U(R=>function(B){B.preventDefault();const{direction:D,dragState:O,id:C,keyboardResizeByPercentage:b,keyboardResizeByPixels:x,onLayout:y}=I.current,{layout:G,panelDataArray:F}=m.current,{initialLayout:k}=O??{},h=en(C,R);let P=xn(B,C,R,D,O,{percentage:b,pixels:x});if(P===0)return;const W=D==="horizontal";document.dir==="rtl"&&W&&(P=-P);const pe=ne(C),Ln=F.map(be=>be.constraints),Re=Oe({delta:P,groupSizePixels:pe,layout:k??G,panelConstraints:Ln,pivotIndices:h,trigger:nn(B)?"keyboard":"mouse-or-touch"}),ze=!ke(G,Re);(tn(B)||an(B))&&z.current!=P&&(z.current=P,Pe(ze?W?"horizontal":"vertical":W?P<0?"horizontal-min":"horizontal-max":P<0?"vertical-min":"vertical-max")),ze&&(A(Re),m.current.layout=Re,y&&y(Re.map(be=>({sizePercentage:be,sizePixels:q(be,pe)}))),te(C,F,Re,u.current))},[]),V=U((R,d)=>{const{onLayout:B}=I.current,{layout:D,panelDataArray:O}=m.current,C=O.map(P=>P.constraints),{groupSizePixels:b,panelSizePercentage:x,pivotIndices:y}=Te(f,O,R,D),G=ie(d,b),k=O.indexOf(R)===O.length-1?x-G:G-x,h=Oe({delta:k,groupSizePixels:b,layout:D,panelConstraints:C,pivotIndices:y,trigger:"imperative-api"});ke(D,h)||(A(h),m.current.layout=h,B&&B(h.map(P=>({sizePercentage:P,sizePixels:q(P,b)}))),te(f,O,h,u.current))},[f]),de=U((R,d)=>{const{direction:B}=I.current,{layout:D}=m.current,O=ye(R),C=sn(B,d);S({dragHandleId:R,dragHandleRect:O.getBoundingClientRect(),initialCursorPosition:C,initialLayout:D})},[]),K=U(()=>{Pn(),S(null)},[]),Z=J({pendingPanelIds:new Set,timeout:null}),Me=U(R=>{const{id:d,onLayout:B}=I.current,{layout:D,panelDataArray:O}=m.current,C=O.indexOf(R);C>=0&&(O.splice(C,1),Z.current.pendingPanelIds.add(R.id)),Z.current.timeout!=null&&clearTimeout(Z.current.timeout),Z.current.timeout=setTimeout(()=>{const{pendingPanelIds:b}=Z.current,x=u.current;let y=!1;if(b.forEach(h=>{b.delete(h),O.find(({id:P})=>P===h)==null&&(y=!0,delete x[R.id])}),!y||O.length===0)return;const G=ne(d);let F=_e({groupSizePixels:G,panelDataArray:O});const k=Ne({groupSizePixels:G,layout:F,panelConstraints:O.map(h=>h.constraints)});Ce(D,k)||(A(k),m.current.layout=k,B&&B(k.map(h=>({sizePercentage:h,sizePixels:q(h,G)}))),te(d,O,k,u.current))},0)},[]),cn=In(()=>({collapsePanel:v,direction:a,dragState:p,expandPanel:X,getPanelSize:w,getPanelStyle:M,groupId:f,isPanelCollapsed:re,isPanelExpanded:_,registerPanel:Q,registerResizeHandle:ee,resizePanel:V,startDragging:de,stopDragging:K,unregisterPanel:Me}),[v,p,a,X,w,M,f,re,_,Q,ee,V,de,K,Me]),fn={display:"flex",flexDirection:a==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return Le(Se.Provider,{value:cn},Le(g,{children:n,className:t,style:{...fn,...E},...i,"data-panel-group":"","data-panel-group-direction":a,"data-panel-group-id":f}))}const xe=Ke((e,n)=>Le(Tn,{...e,forwardedRef:n}));Tn.displayName="PanelGroup";xe.displayName="forwardRef(PanelGroup)";function Te(e,n,t,i){const a=n.map(f=>f.constraints),s=n.indexOf(t),l=a[s],T=ne(e),c=Ee(a,s,T),o=s===n.length-1?[s-1,s]:[s,s+1],E=i[s],g=q(E,T);return{...c,collapsible:l.collapsible,panelSizePercentage:E,panelSizePixels:g,groupSizePixels:T,pivotIndices:o}}function Mn({disabled:e,handleId:n,resizeHandler:t}){se(()=>{if(e||t==null)return;const i=ye(n);if(i==null)return;const a=s=>{if(!s.defaultPrevented)switch(s.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{s.preventDefault(),t(s);break}case"F6":{s.preventDefault();const l=i.getAttribute("data-panel-group-id"),T=oe(l),c=Qe(l,n);Xe(c!==null);const r=s.shiftKey?c>0?c-1:T.length-1:c+1<T.length?c+1:0;T[r].focus();break}}};return i.addEventListener("keydown",a),()=>{i.removeEventListener("keydown",a)}},[e,n,t])}function he({children:e=null,className:n="",dataAttributes:t,disabled:i=!1,id:a=null,onDragging:s,style:l={},tagName:T="div"}){const c=J(null),r=J({onDragging:s});se(()=>{r.current.onDragging=s});const o=qe(Se);if(o===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:E,dragState:g,groupId:f,registerResizeHandle:p,startDragging:S,stopDragging:N}=o,A=we(a),u=(g==null?void 0:g.dragHandleId)===A,[H,z]=ue(!1),[I,m]=ue(null),v=U(()=>{c.current.blur(),N();const{onDragging:M}=r.current;M&&M(!1)},[N]);se(()=>{if(i)m(null);else{const w=p(A);m(()=>w)}},[i,A,p]),se(()=>{if(i||I==null||!u)return;const w=Q=>{I(Q)},M=Q=>{I(Q)},_=c.current.ownerDocument;return _.body.addEventListener("contextmenu",v),_.body.addEventListener("mousemove",w),_.body.addEventListener("touchmove",w),_.body.addEventListener("mouseleave",M),window.addEventListener("mouseup",v),window.addEventListener("touchend",v),()=>{_.body.removeEventListener("contextmenu",v),_.body.removeEventListener("mousemove",w),_.body.removeEventListener("touchmove",w),_.body.removeEventListener("mouseleave",M),window.removeEventListener("mouseup",v),window.removeEventListener("touchend",v)}},[E,i,u,I,v]),Mn({disabled:i,handleId:A,resizeHandler:I});const X={cursor:ln(E),touchAction:"none",userSelect:"none"};return Le(T,{children:e,className:n,onBlur:()=>z(!1),onFocus:()=>z(!0),onMouseDown:w=>{S(A,w.nativeEvent);const{onDragging:M}=r.current;M&&M(!0)},onMouseUp:v,onTouchCancel:v,onTouchEnd:v,onTouchStart:w=>{S(A,w.nativeEvent);const{onDragging:M}=r.current;M&&M(!0)},ref:c,role:"separator",style:{...X,...l},tabIndex:0,...t,"data-panel-group-direction":E,"data-panel-group-id":f,"data-resize-handle":"","data-resize-handle-active":u?"pointer":H?"keyboard":void 0,"data-panel-resize-handle-enabled":!i,"data-panel-resize-handle-id":A})}he.displayName="PanelResizeHandle";const zn=async e=>await(await fetch("https://kroki.io/d2/svg",{method:"POST",cache:"force-cache",body:JSON.stringify({diagram_source:e,output_format:"svg"}),headers:{"Content-Type":"application/json"}})).text();function Vn({viewId:e}){var a;const n=On(e),[t,{execute:i}]=Je(zn,null);return L.jsxs(xe,{direction:"horizontal",autoSaveId:"ViewAsD2",children:[L.jsx(le,{minSizePixels:100,children:L.jsxs(fe,{scrollbars:"both",children:[L.jsx(Y,{asChild:!0,display:"block",p:"2",style:{whiteSpace:"pre",minHeight:"100%"},children:L.jsx(Fe,{variant:"soft",autoFocus:!0,children:n})}),L.jsx(ve,{text:n})]})}),L.jsx(he,{style:{width:10}}),L.jsx(le,{minSizePixels:100,children:L.jsxs(fe,{scrollbars:"both",children:[t.status!=="success"&&L.jsxs(L.Fragment,{children:[L.jsx(gn,{disabled:t.status==="loading",onClick:()=>void i(n),children:t.status==="loading"?"Loading...":"Render with Kroki"}),t.status==="error"&&L.jsx(Y,{children:(a=t.error)==null?void 0:a.message})]}),t.status==="success"&&L.jsx(Y,{grow:"1",asChild:!0,className:"svg-container",children:t.result?L.jsx("div",{dangerouslySetInnerHTML:{__html:t.result}}):L.jsx(Y,{children:"Empty result"})})]})})]})}function Zn(e){switch(e){case"index":return`digraph {
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
        mobileapp -> apiapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
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
        singlepageapplication -> apiapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.singlePageApplication:bigbank.internetBankingSystem.apiApplication",
            style=dashed];
        database [group="bigbank.internetBankingSystem",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Database</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Oracle Database Schema</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Stores user registration information, hashed</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">authentication credentials, access logs, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.database",
            likec4_level=1,
            margin="0.362,0.417",
            penwidth=2,
            shape=cylinder];
        apiapplication -> database [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Reads from and writes to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
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
    apiapplication -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.apiApplication:bigbank.mainframe",
        minlen=1,
        style=dashed];
    apiapplication -> email [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Sends e-mail using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.apiApplication:bigbank.email",
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
`;case"spa":return`digraph {
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
        graph [color="#2d333d",
            fillcolor="#3e4651",
            fontcolor="#cbd5e1b3",
            label=<<B>INTERNET BANKING SYSTEM</B>>,
            likec4_depth=1,
            likec4_id="bigbank.internetBankingSystem",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        webapplication [fillcolor="#0284c7",
            group="bigbank.internetBankingSystem",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Web Application</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#B6ECF7">Java and Spring MVC</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Delivers the static content and the Internet</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">banking single page application.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.webApplication",
            likec4_level=1];
        singlepageapplication [fillcolor="#428a4f",
            group="bigbank.internetBankingSystem",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Single-Page Application</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#c2f0c2">JavaScript and Angular</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#c2f0c2">Provides all of the Internet banking</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#c2f0c2">functionality to customers via their web</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#c2f0c2">browser.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.singlePageApplication",
            likec4_level=1,
            margin="0.362,0.417"];
        webapplication -> singlepageapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Delivers to the customer's web</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">browser</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.webApplication:bigbank.internetBankingSystem.singlePageApplication",
            minlen=1,
            style=dashed];
        apiapplication [fillcolor="#0284c7",
            group="bigbank.internetBankingSystem",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">API Application</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#B6ECF7">Java and Spring MVC</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Provides Internet banking functionality via a</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">JSON/HTTPS API.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication",
            likec4_level=1];
        singlepageapplication -> apiapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.singlePageApplication:bigbank.internetBankingSystem.apiApplication",
            minlen=1,
            style=dashed];
    }
    customer [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Personal Banking Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">A customer of the bank, with personal bank</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">accounts.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    customer -> singlepageapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Views account balances, and makes</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.internetBankingSystem.singlePageApplication",
        minlen=1,
        style=dashed];
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
    singlepageapplication -> signincontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.singlePageApplication:bigbank.internetBankingSystem.apiApplication.signinController",
        style=dashed];
    singlepageapplication -> accountssummarycontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.singlePageApplication:bigbank.internetBankingSystem.apiApplication.accountsSummaryController",
        style=dashed];
    singlepageapplication -> resetpasswordcontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.singlePageApplication:bigbank.internetBankingSystem.apiApplication.resetPasswordController",
        style=dashed];
    mobileapp [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Mobile App</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#B6ECF7">Xamarin</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Provides a limited subset of the Internet</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">banking functionality to customers via their</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">mobile device.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.mobileApp",
        likec4_level=0];
    mobileapp -> signincontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.mobileApp:bigbank.internetBankingSystem.apiApplication.signinController",
        style=dashed];
    mobileapp -> accountssummarycontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.mobileApp:bigbank.internetBankingSystem.apiApplication.accountsSummaryController",
        style=dashed];
    mobileapp -> resetpasswordcontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
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
    mainframebankingsystemfacade -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.apiApplication.mainframeBankingSystemFacade:bigbank.mainframe",
        minlen=1,
        style=dashed];
    securitycomponent -> database [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Reads from and writes to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.apiApplication.securityComponent:bigbank.internetBankingSystem.database",
        minlen=1,
        style=dashed];
    emailcomponent -> email [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Sends e-mail using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.apiApplication.emailComponent:bigbank.email",
        minlen=1,
        style=dashed];
}
`;case"webapp":return`digraph {
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
        graph [color="#292f37",
            fillcolor="#3a404a",
            fontcolor="#cbd5e1b3",
            label=<<B>BIG BANK PLC</B>>,
            likec4_depth=2,
            likec4_id=bigbank,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_internetbankingsystem {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                fontcolor="#bfdbfeb3",
                label=<<B>INTERNET BANKING SYSTEM</B>>,
                likec4_depth=1,
                likec4_id="bigbank.internetBankingSystem",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            webapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Web Application</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Java and Spring MVC</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Delivers the static content and the Internet</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">banking single page application.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="bigbank.internetBankingSystem.webApplication",
                likec4_level=2];
            singlepageapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Single-Page Application</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">JavaScript and Angular</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides all of the Internet banking</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">functionality to customers via their web</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">browser.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="bigbank.internetBankingSystem.singlePageApplication",
                likec4_level=2,
                margin="0.362,0.417"];
            webapplication -> singlepageapplication [constraint=false,
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Delivers to the customer's web</FONT></TD></TR>,<TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">browser</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="bigbank.internetBankingSystem.webApplication:bigbank.internetBankingSystem.singlePageApplication",
                minlen=1,
                style=dashed];
        }
    }
    customer [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Personal Banking Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">A customer of the bank, with personal bank</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">accounts.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    customer -> webapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Visits bigbank.com using HTTPS</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.internetBankingSystem.webApplication",
        minlen=1,
        style=dashed];
    singlepageapplication -> customer [ltail=cluster_bigbank,
        minlen=1,
        style=invis];
}
`;case"mobileApp":return`digraph {
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
        graph [color="#292f37",
            fillcolor="#3a404a",
            fontcolor="#cbd5e1b3",
            label=<<B>INTERNET BANKING SYSTEM</B>>,
            likec4_depth=2,
            likec4_id="bigbank.internetBankingSystem",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_apiapplication {
            graph [color="#2d333d",
                fillcolor="#3e4651",
                fontcolor="#cbd5e1b3",
                label=<<B>API APPLICATION</B>>,
                likec4_depth=1,
                likec4_id="bigbank.internetBankingSystem.apiApplication",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            signincontroller [fillcolor="#0284c7",
                group="bigbank.internetBankingSystem",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Sign In Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#B6ECF7">Spring MVC Rest Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Allows users to sign in to the Internet</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Banking System.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="bigbank.internetBankingSystem.apiApplication.signinController",
                likec4_level=2];
            accountssummarycontroller [fillcolor="#0284c7",
                group="bigbank.internetBankingSystem",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Accounts Summary Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#B6ECF7">Spring MVC Rest Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Provides customers with a summary of their</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">bank accounts.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="bigbank.internetBankingSystem.apiApplication.accountsSummaryController",
                likec4_level=2];
            resetpasswordcontroller [fillcolor="#0284c7",
                group="bigbank.internetBankingSystem",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Reset Password Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#B6ECF7">Spring MVC Rest Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Allows users to reset their passwords with a</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">single use URL.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="bigbank.internetBankingSystem.apiApplication.resetPasswordController",
                likec4_level=2];
        }
        mobileapp [fillcolor="#428a4f",
            group="bigbank.internetBankingSystem",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Mobile App</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#c2f0c2">Xamarin</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#c2f0c2">Provides a limited subset of the Internet</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#c2f0c2">banking functionality to customers via their</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#c2f0c2">mobile device.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.mobileApp",
            likec4_level=1];
        mobileapp -> signincontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.mobileApp:bigbank.internetBankingSystem.apiApplication.signinController",
            minlen=1,
            style=dashed];
        mobileapp -> accountssummarycontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.mobileApp:bigbank.internetBankingSystem.apiApplication.accountsSummaryController",
            minlen=1,
            style=dashed];
        mobileapp -> resetpasswordcontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.mobileApp:bigbank.internetBankingSystem.apiApplication.resetPasswordController",
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
<svg width="1606pt" height="1483pt"
 viewBox="0.00 0.00 1606.02 1482.64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 1478.64)">
<g id="clust1" class="cluster">
<title>cluster_internetbankingsystem</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1202.44 812,-1202.44 812,-8 8,-8"/>
<text text-anchor="start" x="16" y="-1187.74" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#bfdbfe" fill-opacity="0.701961">INTERNET BANKING SYSTEM</text>
</g>
<!-- mobileapp -->
<g id="node1" class="node">
<title>mobileapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="365.96,-1146.84 40.04,-1146.84 40.04,-966.84 365.96,-966.84 365.96,-1146.84"/>
<text text-anchor="start" x="152.97" y="-1087.74" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Mobile App</text>
<text text-anchor="start" x="180.66" y="-1065.94" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Xamarin</text>
<text text-anchor="start" x="80.05" y="-1044.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides a limited subset of the Internet</text>
<text text-anchor="start" x="71.1" y="-1027.94" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">banking functionality to customers via their</text>
<text text-anchor="start" x="158.26" y="-1011.14" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">mobile device.</text>
</g>
<!-- apiapplication -->
<g id="node2" class="node">
<title>apiapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="754.09,-544.04 421.91,-544.04 421.91,-364.04 754.09,-364.04 754.09,-544.04"/>
<text text-anchor="start" x="520.18" y="-476.54" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">API Application</text>
<text text-anchor="start" x="529.64" y="-454.74" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Java and Spring MVC</text>
<text text-anchor="start" x="452.98" y="-433.54" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides Internet banking functionality via a</text>
<text text-anchor="start" x="529.27" y="-416.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">JSON/HTTPS API.</text>
</g>
<!-- webapplication -->
<g id="node3" class="node">
<title>webapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="780.19,-1146.84 455.81,-1146.84 455.81,-966.84 780.19,-966.84 780.19,-1146.84"/>
<text text-anchor="start" x="545.74" y="-1079.34" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Web Application</text>
<text text-anchor="start" x="559.64" y="-1057.54" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Java and Spring MVC</text>
<text text-anchor="start" x="486.87" y="-1036.34" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Delivers the static content and the Internet</text>
<text text-anchor="start" x="518.37" y="-1019.54" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">banking single page application.</text>
</g>
<!-- singlepageapplication -->
<g id="node4" class="node">
<title>singlepageapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="749.02,-837.64 428.98,-837.64 428.98,-657.64 749.02,-657.64 749.02,-837.64"/>
<text text-anchor="start" x="482.82" y="-778.54" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Single&#45;Page Application</text>
<text text-anchor="start" x="526.96" y="-756.74" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">JavaScript and Angular</text>
<text text-anchor="start" x="481.21" y="-735.54" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides all of the Internet banking</text>
<text text-anchor="start" x="468.78" y="-718.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">functionality to customers via their web</text>
<text text-anchor="start" x="562.16" y="-701.94" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">browser.</text>
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
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="783.3,-1474.64 452.7,-1474.64 452.7,-1294.64 783.3,-1294.64 783.3,-1474.64"/>
<text text-anchor="start" x="493.49" y="-1397.44" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="483.76" y="-1373.84" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="588.04" y="-1357.04" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">accounts.</text>
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
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M196.02,-966.85C193.68,-880.82 202.21,-750.24 263.07,-657.64 299.02,-602.96 355.36,-560.37 411.1,-528.67"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="412.56,-531.86 419.59,-523.94 409.15,-525.75 412.56,-531.86"/>
<text text-anchor="start" x="274" y="-743.74" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
</g>
<!-- apiapplication&#45;&gt;database -->
<g id="edge4" class="edge">
<title>apiapplication&#45;&gt;database</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M588,-364.3C588,-332.99 588,-297.28 588,-263.95"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="591.5,-264.34 588,-254.34 584.5,-264.34 591.5,-264.34"/>
<text text-anchor="start" x="598" y="-303.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Reads from and writes to</text>
</g>
<!-- apiapplication&#45;&gt;mainframe -->
<g id="edge9" class="edge">
<title>apiapplication&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M712.08,-364.09C765.19,-326.02 827.32,-281.48 881.52,-242.62"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="883.35,-245.62 889.44,-236.95 879.27,-239.93 883.35,-245.62"/>
<text text-anchor="start" x="812" y="-303.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
</g>
<!-- apiapplication&#45;&gt;email -->
<g id="edge10" class="edge">
<title>apiapplication&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M754.02,-409.11C885.89,-372.26 1073.92,-315.34 1233,-250.44 1243.97,-245.96 1255.16,-241.12 1266.36,-236.06"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1267.65,-239.33 1275.28,-231.98 1264.73,-232.96 1267.65,-239.33"/>
<text text-anchor="start" x="1122" y="-303.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- webapplication&#45;&gt;singlepageapplication -->
<g id="edge2" class="edge">
<title>webapplication&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M609.61,-966.99C606.16,-930.45 602.15,-887.93 598.58,-850.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="602.1,-850.2 597.68,-840.58 595.13,-850.86 602.1,-850.2"/>
<text text-anchor="start" x="615" y="-906.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Delivers to the customer&#39;s web</text>
<text text-anchor="start" x="615" y="-890.54" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">browser</text>
</g>
<!-- singlepageapplication&#45;&gt;apiapplication -->
<g id="edge3" class="edge">
<title>singlepageapplication&#45;&gt;apiapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M588.7,-657.96C588.59,-626.01 588.46,-589.71 588.35,-556.74"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="591.85,-556.81 588.31,-546.83 584.85,-556.84 591.85,-556.81"/>
<text text-anchor="start" x="598" y="-596.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
</g>
<!-- customer&#45;&gt;mobileapp -->
<g id="edge5" class="edge">
<title>customer&#45;&gt;mobileapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M452.9,-1304.33C424.7,-1287.88 396.53,-1269.46 371.71,-1249.64 337.95,-1222.68 305.45,-1188.47 278.15,-1156.42"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="280.91,-1154.27 271.79,-1148.87 275.55,-1158.77 280.91,-1154.27"/>
<text text-anchor="start" x="382" y="-1233.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="382" y="-1218.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;webapplication -->
<g id="edge6" class="edge">
<title>customer&#45;&gt;webapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M618,-1295.05C618,-1253.2 618,-1203.04 618,-1159.64"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="621.5,-1159.73 618,-1149.73 614.5,-1159.73 621.5,-1159.73"/>
<text text-anchor="start" x="628" y="-1226.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Visits bigbank.com using HTTPS</text>
</g>
<!-- customer&#45;&gt;singlepageapplication -->
<g id="edge7" class="edge">
<title>customer&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M783.3,-1313.47C807.2,-1296.13 828.57,-1275.04 843,-1249.64 851.61,-1234.49 843.64,-1227.85 843,-1210.44 837.61,-1064.43 895.88,-1006.27 818,-882.64 803.1,-858.98 782.38,-839.01 759.46,-822.3"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="761.47,-819.44 751.26,-816.59 757.46,-825.18 761.47,-819.44"/>
<text text-anchor="start" x="868" y="-1060.74" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="868" y="-1045.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
</g>
<!-- email&#45;&gt;customer -->
<g id="edge8" class="edge">
<title>email&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1435.13,-234.97C1423.94,-434.59 1369.35,-923.32 1104,-1202.44 1023.07,-1287.58 898.42,-1333 795.63,-1357.07"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="795.13,-1353.6 786.16,-1359.23 796.69,-1360.42 795.13,-1353.6"/>
<text text-anchor="start" x="1382" y="-743.74" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mails to</text>
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
`;case"spa":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="795pt" height="894pt"
 viewBox="0.00 0.00 795.30 894.40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 890.4)">
<g id="clust1" class="cluster">
<title>cluster_internetbankingsystem</title>
<polygon fill="#3e4651" stroke="#2d333d" points="8,-8 8,-878.4 425,-878.4 425,-8 8,-8"/>
<text text-anchor="start" x="16" y="-863.7" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">INTERNET BANKING SYSTEM</text>
</g>
<!-- webapplication -->
<g id="node1" class="node">
<title>webapplication</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="364.19,-822.8 39.81,-822.8 39.81,-642.8 364.19,-642.8 364.19,-822.8"/>
<text text-anchor="start" x="129.74" y="-755.3" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Web Application</text>
<text text-anchor="start" x="143.64" y="-733.5" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#b6ecf7">Java and Spring MVC</text>
<text text-anchor="start" x="70.87" y="-712.3" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Delivers the static content and the Internet</text>
<text text-anchor="start" x="102.37" y="-695.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">banking single page application.</text>
</g>
<!-- singlepageapplication -->
<g id="node2" class="node">
<title>singlepageapplication</title>
<polygon fill="#428a4f" stroke="#2563eb" stroke-width="0" points="366.02,-513.6 45.98,-513.6 45.98,-333.6 366.02,-333.6 366.02,-513.6"/>
<text text-anchor="start" x="99.82" y="-454.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Single&#45;Page Application</text>
<text text-anchor="start" x="143.96" y="-432.7" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#c2f0c2">JavaScript and Angular</text>
<text text-anchor="start" x="98.21" y="-411.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">Provides all of the Internet banking</text>
<text text-anchor="start" x="85.78" y="-394.7" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">functionality to customers via their web</text>
<text text-anchor="start" x="179.16" y="-377.9" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">browser.</text>
</g>
<!-- apiapplication -->
<g id="node3" class="node">
<title>apiapplication</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="372.09,-220 39.91,-220 39.91,-40 372.09,-40 372.09,-220"/>
<text text-anchor="start" x="138.18" y="-152.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">API Application</text>
<text text-anchor="start" x="147.64" y="-130.7" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#b6ecf7">Java and Spring MVC</text>
<text text-anchor="start" x="70.98" y="-109.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Provides Internet banking functionality via a</text>
<text text-anchor="start" x="147.27" y="-92.7" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">JSON/HTTPS API.</text>
</g>
<!-- customer -->
<g id="node4" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="787.3,-822.8 456.7,-822.8 456.7,-642.8 787.3,-642.8 787.3,-822.8"/>
<text text-anchor="start" x="497.49" y="-745.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="487.76" y="-722" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="592.04" y="-705.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">accounts.</text>
</g>
<!-- webapplication&#45;&gt;singlepageapplication -->
<g id="edge1" class="edge">
<title>webapplication&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M203.16,-642.95C203.63,-606.41 204.19,-563.89 204.68,-526.13"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="208.17,-526.59 204.8,-516.55 201.17,-526.5 208.17,-526.59"/>
<text text-anchor="start" x="215" y="-582.1" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Delivers to the customer&#39;s web</text>
<text text-anchor="start" x="215" y="-566.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">browser</text>
</g>
<!-- singlepageapplication&#45;&gt;apiapplication -->
<g id="edge2" class="edge">
<title>singlepageapplication&#45;&gt;apiapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M206,-333.92C206,-301.97 206,-265.67 206,-232.7"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="209.5,-232.78 206,-222.78 202.5,-232.78 209.5,-232.78"/>
<text text-anchor="start" x="216" y="-272.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
</g>
<!-- customer&#45;&gt;singlepageapplication -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M522.85,-642.8C490.24,-614.85 453.28,-584.53 418,-558.6 400.62,-545.82 382.02,-532.97 363.33,-520.55"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="365.44,-517.75 355.16,-515.17 361.58,-523.6 365.44,-517.75"/>
<text text-anchor="start" x="474" y="-582.1" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="474" y="-566.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
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
`;case"apiApp":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1290pt" height="1118pt"
 viewBox="0.00 0.00 1290.00 1117.84" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 1113.84)">
<g id="clust1" class="cluster">
<title>cluster_apiapplication</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-292.04 8,-853.24 1274,-853.24 1274,-292.04 8,-292.04"/>
<text text-anchor="start" x="16" y="-838.54" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#bfdbfe" fill-opacity="0.701961">API APPLICATION</text>
</g>
<!-- signincontroller -->
<g id="node1" class="node">
<title>signincontroller</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="818.02,-797.64 497.98,-797.64 497.98,-617.64 818.02,-617.64 818.02,-797.64"/>
<text text-anchor="start" x="580.74" y="-730.14" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Sign In Controller</text>
<text text-anchor="start" x="583.98" y="-708.34" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring MVC Rest Controller</text>
<text text-anchor="start" x="543.61" y="-687.14" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Allows users to sign in to the Internet</text>
<text text-anchor="start" x="605.48" y="-670.34" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Banking System.</text>
</g>
<!-- securitycomponent -->
<g id="node2" class="node">
<title>securitycomponent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="831.8,-504.04 508.2,-504.04 508.2,-324.04 831.8,-324.04 831.8,-504.04"/>
<text text-anchor="start" x="579.4" y="-436.54" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Security Component</text>
<text text-anchor="start" x="636.98" y="-414.74" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring Bean</text>
<text text-anchor="start" x="539.26" y="-393.54" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides functionality related to signing in,</text>
<text text-anchor="start" x="591.01" y="-376.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">changing passwords, etc.</text>
</g>
<!-- accountssummarycontroller -->
<g id="node3" class="node">
<title>accountssummarycontroller</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="395.83,-797.64 62.17,-797.64 62.17,-617.64 395.83,-617.64 395.83,-797.64"/>
<text text-anchor="start" x="96.18" y="-730.14" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Accounts Summary Controller</text>
<text text-anchor="start" x="154.98" y="-708.34" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring MVC Rest Controller</text>
<text text-anchor="start" x="93.23" y="-687.14" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides customers with a summary of their</text>
<text text-anchor="start" x="181.91" y="-670.34" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">bank accounts.</text>
</g>
<!-- mainframebankingsystemfacade -->
<g id="node4" class="node">
<title>mainframebankingsystemfacade</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="418.47,-504.04 39.53,-504.04 39.53,-324.04 418.47,-324.04 418.47,-504.04"/>
<text text-anchor="start" x="70.6" y="-428.14" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Mainframe Banking System Facade</text>
<text text-anchor="start" x="195.98" y="-406.34" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring Bean</text>
<text text-anchor="start" x="86.59" y="-385.14" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">A facade onto the mainframe banking system.</text>
</g>
<!-- resetpasswordcontroller -->
<g id="node5" class="node">
<title>resetpasswordcontroller</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1241.84,-797.64 908.16,-797.64 908.16,-617.64 1241.84,-617.64 1241.84,-797.64"/>
<text text-anchor="start" x="956.06" y="-730.14" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Reset Password Controller</text>
<text text-anchor="start" x="1000.98" y="-708.34" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring MVC Rest Controller</text>
<text text-anchor="start" x="939.22" y="-687.14" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Allows users to reset their passwords with a</text>
<text text-anchor="start" x="1025.59" y="-670.34" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">single use URL.</text>
</g>
<!-- emailcomponent -->
<g id="node6" class="node">
<title>emailcomponent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1242.02,-504.04 921.98,-504.04 921.98,-324.04 1242.02,-324.04 1242.02,-504.04"/>
<text text-anchor="start" x="999.19" y="-428.14" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">E&#45;mail Component</text>
<text text-anchor="start" x="1048.98" y="-406.34" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring Bean</text>
<text text-anchor="start" x="1008.86" y="-385.14" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Sends e&#45;mails to users.</text>
</g>
<!-- singlepageapplication -->
<g id="node7" class="node">
<title>singlepageapplication</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="1018.02,-1109.84 697.98,-1109.84 697.98,-929.84 1018.02,-929.84 1018.02,-1109.84"/>
<text text-anchor="start" x="751.82" y="-1050.74" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Single&#45;Page Application</text>
<text text-anchor="start" x="795.96" y="-1028.94" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#b6ecf7">JavaScript and Angular</text>
<text text-anchor="start" x="750.21" y="-1007.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Provides all of the Internet banking</text>
<text text-anchor="start" x="737.78" y="-990.94" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">functionality to customers via their web</text>
<text text-anchor="start" x="831.16" y="-974.14" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">browser.</text>
</g>
<!-- mobileapp -->
<g id="node8" class="node">
<title>mobileapp</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="607.96,-1109.84 282.04,-1109.84 282.04,-929.84 607.96,-929.84 607.96,-1109.84"/>
<text text-anchor="start" x="394.97" y="-1050.74" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Mobile App</text>
<text text-anchor="start" x="422.66" y="-1028.94" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#b6ecf7">Xamarin</text>
<text text-anchor="start" x="322.05" y="-1007.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Provides a limited subset of the Internet</text>
<text text-anchor="start" x="313.1" y="-990.94" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">banking functionality to customers via their</text>
<text text-anchor="start" x="400.26" y="-974.14" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">mobile device.</text>
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
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M661.65,-617.96C662.96,-586.01 664.46,-549.71 665.81,-516.74"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="669.31,-516.96 666.22,-506.82 662.31,-516.67 669.31,-516.96"/>
<text text-anchor="start" x="675" y="-556.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- securitycomponent&#45;&gt;database -->
<g id="edge12" class="edge">
<title>securitycomponent&#45;&gt;database</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M669.13,-324.3C668.83,-292.99 668.48,-257.28 668.15,-223.95"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="671.65,-224.3 668.06,-214.34 664.66,-224.37 671.65,-224.3"/>
<text text-anchor="start" x="679" y="-263.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Reads from and writes to</text>
</g>
<!-- accountssummarycontroller&#45;&gt;mainframebankingsystemfacade -->
<g id="edge2" class="edge">
<title>accountssummarycontroller&#45;&gt;mainframebankingsystemfacade</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M229,-617.96C229,-586.01 229,-549.71 229,-516.74"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="232.5,-516.83 229,-506.83 225.5,-516.83 232.5,-516.83"/>
<text text-anchor="start" x="239" y="-556.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- mainframebankingsystemfacade&#45;&gt;mainframe -->
<g id="edge11" class="edge">
<title>mainframebankingsystemfacade&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M229,-324.3C229,-287.8 229,-245.34 229,-207.62"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="232.5,-208.06 229,-198.06 225.5,-208.06 232.5,-208.06"/>
<text text-anchor="start" x="239" y="-263.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
</g>
<!-- resetpasswordcontroller&#45;&gt;securitycomponent -->
<g id="edge3" class="edge">
<title>resetpasswordcontroller&#45;&gt;securitycomponent</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M951.56,-617.77C904.85,-584.13 851.48,-545.7 803.85,-511.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="806.08,-508.71 795.92,-505.7 801.99,-514.39 806.08,-508.71"/>
<text text-anchor="start" x="895" y="-556.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- resetpasswordcontroller&#45;&gt;emailcomponent -->
<g id="edge4" class="edge">
<title>resetpasswordcontroller&#45;&gt;emailcomponent</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1077.13,-617.96C1077.9,-586.01 1078.77,-549.71 1079.56,-516.74"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1083.06,-516.91 1079.8,-506.83 1076.06,-516.74 1083.06,-516.91"/>
<text text-anchor="start" x="1088" y="-556.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- emailcomponent&#45;&gt;email -->
<g id="edge13" class="edge">
<title>emailcomponent&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1082.58,-324.3C1082.82,-287.8 1083.09,-245.34 1083.34,-207.62"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1086.84,-208.08 1083.4,-198.06 1079.84,-208.04 1086.84,-208.08"/>
<text text-anchor="start" x="1093" y="-263.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- singlepageapplication&#45;&gt;signincontroller -->
<g id="edge5" class="edge">
<title>singlepageapplication&#45;&gt;signincontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M776.46,-930.16C764.61,-915.51 753.06,-900.1 743.07,-884.84 727.67,-861.3 713.33,-834.55 700.98,-809.13"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="704.22,-807.8 696.75,-800.29 697.91,-810.82 704.22,-807.8"/>
<text text-anchor="start" x="754" y="-869.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
</g>
<!-- singlepageapplication&#45;&gt;accountssummarycontroller -->
<g id="edge6" class="edge">
<title>singlepageapplication&#45;&gt;accountssummarycontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M698.2,-945.21C683.09,-939.54 667.87,-934.3 653,-929.84 541.96,-896.53 498.21,-939.67 396.07,-884.84 360.55,-865.77 328.25,-836.35 301.72,-806.98"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="304.56,-804.91 295.31,-799.73 299.31,-809.54 304.56,-804.91"/>
<text text-anchor="start" x="407" y="-869.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
</g>
<!-- singlepageapplication&#45;&gt;resetpasswordcontroller -->
<g id="edge7" class="edge">
<title>singlepageapplication&#45;&gt;resetpasswordcontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1017.72,-960.95C1049.71,-941.76 1079.22,-916.84 1098,-884.84 1111.15,-862.43 1113.16,-835.7 1109.94,-809.91"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1113.44,-809.68 1108.43,-800.34 1106.53,-810.76 1113.44,-809.68"/>
<text text-anchor="start" x="1117" y="-869.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
</g>
<!-- mobileapp&#45;&gt;signincontroller -->
<g id="edge8" class="edge">
<title>mobileapp&#45;&gt;signincontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M506.04,-929.95C532.16,-891.9 562.78,-847.31 589.66,-808.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="592.47,-810.27 595.24,-800.04 586.69,-806.3 592.47,-810.27"/>
<text text-anchor="start" x="562" y="-869.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
</g>
<!-- mobileapp&#45;&gt;accountssummarycontroller -->
<g id="edge9" class="edge">
<title>mobileapp&#45;&gt;accountssummarycontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M282.06,-997.76C212.39,-979.78 137.47,-946.48 95.07,-884.84 77.56,-859.38 84.27,-832.53 101.71,-807.67"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="104.34,-809.99 107.65,-799.92 98.79,-805.73 104.34,-809.99"/>
<text text-anchor="start" x="106" y="-869.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
</g>
<!-- mobileapp&#45;&gt;resetpasswordcontroller -->
<g id="edge10" class="edge">
<title>mobileapp&#45;&gt;resetpasswordcontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M607.86,-945.36C622.97,-939.69 638.17,-934.41 653,-929.84 752.12,-899.27 789.38,-931.54 882,-884.84 920.9,-865.23 957.77,-835.54 988.66,-806.09"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="990.72,-808.97 995.46,-799.5 985.85,-803.95 990.72,-808.97"/>
<text text-anchor="start" x="929" y="-869.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
</g>
</g>
</svg>
`;case"webapp":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1077pt" height="628pt"
 viewBox="0.00 0.00 1077.00 627.80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 623.8)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#3a404a" stroke="#292f37" points="8,-256.6 8,-611.8 1061,-611.8 1061,-256.6 8,-256.6"/>
<text text-anchor="start" x="16" y="-597.1" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_internetbankingsystem</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="40,-288.6 40,-556.2 1029,-556.2 1029,-288.6 40,-288.6"/>
<text text-anchor="start" x="48" y="-541.5" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#bfdbfe" fill-opacity="0.701961">INTERNET BANKING SYSTEM</text>
</g>
<!-- webapplication -->
<g id="node1" class="node">
<title>webapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="997.19,-500.6 672.81,-500.6 672.81,-320.6 997.19,-320.6 997.19,-500.6"/>
<text text-anchor="start" x="762.74" y="-433.1" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Web Application</text>
<text text-anchor="start" x="776.64" y="-411.3" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Java and Spring MVC</text>
<text text-anchor="start" x="703.87" y="-390.1" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Delivers the static content and the Internet</text>
<text text-anchor="start" x="735.37" y="-373.3" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">banking single page application.</text>
</g>
<!-- singlepageapplication -->
<g id="node2" class="node">
<title>singlepageapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="392.02,-500.6 71.98,-500.6 71.98,-320.6 392.02,-320.6 392.02,-500.6"/>
<text text-anchor="start" x="125.82" y="-441.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Single&#45;Page Application</text>
<text text-anchor="start" x="169.96" y="-419.7" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">JavaScript and Angular</text>
<text text-anchor="start" x="124.21" y="-398.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides all of the Internet banking</text>
<text text-anchor="start" x="111.78" y="-381.7" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">functionality to customers via their web</text>
<text text-anchor="start" x="205.16" y="-364.9" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">browser.</text>
</g>
<!-- customer -->
<g id="node3" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="698.3,-180 367.7,-180 367.7,0 698.3,0 698.3,-180"/>
<text text-anchor="start" x="408.49" y="-102.8" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="398.76" y="-79.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="503.04" y="-62.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">accounts.</text>
</g>
<!-- webapplication&#45;&gt;singlepageapplication -->
<g id="edge1" class="edge">
<title>webapplication&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M672.93,-410.6C590.08,-410.6 489.2,-410.6 404.86,-410.6"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="405.04,-407.1 395.04,-410.6 405.04,-414.1 405.04,-407.1"/>
<text text-anchor="start" x="447.11" y="-437.1" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Delivers to the customer&#39;s web</text>
<text text-anchor="start" x="447.11" y="-421.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">browser</text>
</g>
<!-- singlepageapplication&#45;&gt;customer -->
<!-- customer&#45;&gt;webapplication -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;webapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M617.2,-179.82C655.98,-220.74 702.14,-269.44 741.96,-311.44"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="739.37,-313.81 748.79,-318.66 744.45,-308.99 739.37,-313.81"/>
<text text-anchor="start" x="684" y="-232.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Visits bigbank.com using HTTPS</text>
</g>
</g>
</svg>
`;case"mobileApp":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1320pt" height="900pt"
 viewBox="0.00 0.00 1320.00 900.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 896)">
<g id="clust1" class="cluster">
<title>cluster_internetbankingsystem</title>
<polygon fill="#3a404a" stroke="#292f37" points="8,-8 8,-619.8 1304,-619.8 1304,-8 8,-8"/>
<text text-anchor="start" x="16" y="-605.1" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">INTERNET BANKING SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_apiapplication</title>
<polygon fill="#3e4651" stroke="#2d333d" points="40,-40 40,-307.6 1272,-307.6 1272,-40 40,-40"/>
<text text-anchor="start" x="48" y="-292.9" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">API APPLICATION</text>
</g>
<!-- signincontroller -->
<g id="node1" class="node">
<title>signincontroller</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="392.02,-252 71.98,-252 71.98,-72 392.02,-72 392.02,-252"/>
<text text-anchor="start" x="154.74" y="-184.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Sign In Controller</text>
<text text-anchor="start" x="157.98" y="-162.7" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#b6ecf7">Spring MVC Rest Controller</text>
<text text-anchor="start" x="117.61" y="-141.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Allows users to sign in to the Internet</text>
<text text-anchor="start" x="179.48" y="-124.7" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Banking System.</text>
</g>
<!-- accountssummarycontroller -->
<g id="node2" class="node">
<title>accountssummarycontroller</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="815.83,-252 482.17,-252 482.17,-72 815.83,-72 815.83,-252"/>
<text text-anchor="start" x="516.18" y="-184.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Accounts Summary Controller</text>
<text text-anchor="start" x="574.98" y="-162.7" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#b6ecf7">Spring MVC Rest Controller</text>
<text text-anchor="start" x="513.23" y="-141.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Provides customers with a summary of their</text>
<text text-anchor="start" x="601.91" y="-124.7" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">bank accounts.</text>
</g>
<!-- resetpasswordcontroller -->
<g id="node3" class="node">
<title>resetpasswordcontroller</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="1239.84,-252 906.16,-252 906.16,-72 1239.84,-72 1239.84,-252"/>
<text text-anchor="start" x="954.06" y="-184.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Reset Password Controller</text>
<text text-anchor="start" x="998.98" y="-162.7" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#b6ecf7">Spring MVC Rest Controller</text>
<text text-anchor="start" x="937.22" y="-141.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Allows users to reset their passwords with a</text>
<text text-anchor="start" x="1023.59" y="-124.7" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">single use URL.</text>
</g>
<!-- mobileapp -->
<g id="node4" class="node">
<title>mobileapp</title>
<polygon fill="#428a4f" stroke="#2563eb" stroke-width="0" points="811.96,-564.2 486.04,-564.2 486.04,-384.2 811.96,-384.2 811.96,-564.2"/>
<text text-anchor="start" x="598.97" y="-505.1" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Mobile App</text>
<text text-anchor="start" x="626.66" y="-483.3" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#c2f0c2">Xamarin</text>
<text text-anchor="start" x="526.05" y="-462.1" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">Provides a limited subset of the Internet</text>
<text text-anchor="start" x="517.1" y="-445.3" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">banking functionality to customers via their</text>
<text text-anchor="start" x="604.26" y="-428.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">mobile device.</text>
</g>
<!-- customer -->
<g id="node5" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="814.3,-892 483.7,-892 483.7,-712 814.3,-712 814.3,-892"/>
<text text-anchor="start" x="524.49" y="-814.8" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="514.76" y="-791.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="619.04" y="-774.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">accounts.</text>
</g>
<!-- mobileapp&#45;&gt;signincontroller -->
<g id="edge1" class="edge">
<title>mobileapp&#45;&gt;signincontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M529.5,-384.31C477.05,-345.29 415.34,-299.39 361.77,-259.53"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="364.05,-256.87 353.94,-253.71 359.88,-262.49 364.05,-256.87"/>
<text text-anchor="start" x="475" y="-323.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
</g>
<!-- mobileapp&#45;&gt;accountssummarycontroller -->
<g id="edge2" class="edge">
<title>mobileapp&#45;&gt;accountssummarycontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M649,-384.31C649,-346.99 649,-303.38 649,-264.78"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="652.5,-264.93 649,-254.93 645.5,-264.93 652.5,-264.93"/>
<text text-anchor="start" x="659" y="-323.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
</g>
<!-- mobileapp&#45;&gt;resetpasswordcontroller -->
<g id="edge3" class="edge">
<title>mobileapp&#45;&gt;resetpasswordcontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M770.5,-384.31C823.84,-345.29 886.58,-299.39 941.06,-259.53"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="943.03,-262.42 949.04,-253.69 938.9,-256.77 943.03,-262.42"/>
<text text-anchor="start" x="871" y="-323.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
</g>
<!-- customer&#45;&gt;mobileapp -->
<g id="edge4" class="edge">
<title>customer&#45;&gt;mobileapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M649,-712.4C649,-670.56 649,-620.4 649,-577"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="652.5,-577.09 649,-567.09 645.5,-577.09 652.5,-577.09"/>
<text text-anchor="start" x="659" y="-651.3" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="659" y="-635.7" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}function Wn({viewId:e}){const n=Zn(e);return L.jsxs(xe,{direction:"horizontal",autoSaveId:"viewAsDot",children:[L.jsx(le,{minSizePixels:100,children:L.jsxs(fe,{scrollbars:"both",children:[L.jsx(Y,{asChild:!0,display:"block",p:"2",style:{whiteSpace:"pre",minHeight:"100%"},children:L.jsx(Fe,{variant:"soft",autoFocus:!0,children:n})}),L.jsx(ve,{text:n})]})}),L.jsx(he,{style:{width:10}}),L.jsx(le,{minSizePixels:100,children:L.jsx(fe,{scrollbars:"both",children:L.jsx(Y,{py:"2",style:{overflow:"scroll",overscrollBehavior:"none"},children:L.jsx(Y,{asChild:!0,position:"relative",className:"svg-container",children:L.jsx("div",{dangerouslySetInnerHTML:{__html:_n(e)}})})})})})]})}function Un(e){switch(e){case"index":return`---
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
  BigbankInternetBankingSystem.MobileApp -. "Makes API calls to" .-> BigbankInternetBankingSystem.ApiApplication
  BigbankInternetBankingSystem.WebApplication -. "Delivers to the customer's web browser" .-> BigbankInternetBankingSystem.SinglePageApplication
  BigbankInternetBankingSystem.SinglePageApplication -. "Makes API calls to" .-> BigbankInternetBankingSystem.ApiApplication
  BigbankInternetBankingSystem.ApiApplication -. "Reads from and writes to" .-> BigbankInternetBankingSystem.Database
  BigbankInternetBankingSystem.ApiApplication -. "Sends e-mail using" .-> BigbankEmail
  BigbankInternetBankingSystem.ApiApplication -. "Makes API calls to" .-> BigbankMainframe
  BigbankEmail -. "Sends e-mails to" .-> Customer
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
`;case"spa":return`---
title: "Single-Page Application"
---
graph TB
  Customer[fa:fa-user Personal Banking Customer]
  subgraph BigbankInternetBankingSystem["Internet Banking System"]
    BigbankInternetBankingSystem.WebApplication[Web Application]
    BigbankInternetBankingSystem.SinglePageApplication[Single-Page Application]
    BigbankInternetBankingSystem.ApiApplication[API Application]
  end
  Customer -. "Views account balances, and makes payments using" .-> BigbankInternetBankingSystem.SinglePageApplication
  BigbankInternetBankingSystem.WebApplication -. "Delivers to the customer's web browser" .-> BigbankInternetBankingSystem.SinglePageApplication
  BigbankInternetBankingSystem.SinglePageApplication -. "Makes API calls to" .-> BigbankInternetBankingSystem.ApiApplication
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
  BigbankInternetBankingSystemSinglePageApplication -. "Makes API calls to" .-> BigbankInternetBankingSystemApiApplication.ResetPasswordController
  BigbankInternetBankingSystemSinglePageApplication -. "Makes API calls to" .-> BigbankInternetBankingSystemApiApplication.AccountsSummaryController
  BigbankInternetBankingSystemSinglePageApplication -. "Makes API calls to" .-> BigbankInternetBankingSystemApiApplication.SigninController
  BigbankInternetBankingSystemMobileApp -. "Makes API calls to" .-> BigbankInternetBankingSystemApiApplication.ResetPasswordController
  BigbankInternetBankingSystemMobileApp -. "Makes API calls to" .-> BigbankInternetBankingSystemApiApplication.AccountsSummaryController
  BigbankInternetBankingSystemMobileApp -. "Makes API calls to" .-> BigbankInternetBankingSystemApiApplication.SigninController
  BigbankInternetBankingSystemApiApplication.SigninController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.SecurityComponent
  BigbankInternetBankingSystemApiApplication.AccountsSummaryController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade
  BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade -. "Makes API calls to" .-> BigbankMainframe
  BigbankInternetBankingSystemApiApplication.ResetPasswordController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.EmailComponent
  BigbankInternetBankingSystemApiApplication.ResetPasswordController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.SecurityComponent
  BigbankInternetBankingSystemApiApplication.SecurityComponent -. "Reads from and writes to" .-> BigbankInternetBankingSystemDatabase
  BigbankInternetBankingSystemApiApplication.EmailComponent -. "Sends e-mail using" .-> BigbankEmail
`;case"webapp":return`---
title: "Web Application"
---
graph TB
  subgraph Bigbank["Big Bank plc"]
    subgraph Bigbank.InternetBankingSystem["Internet Banking System"]
      Bigbank.InternetBankingSystem.WebApplication[Web Application]
      Bigbank.InternetBankingSystem.SinglePageApplication[Single-Page Application]
    end
  end
  Customer[fa:fa-user Personal Banking Customer]
  Customer -. "Visits bigbank.com using HTTPS" .-> Bigbank.InternetBankingSystem.WebApplication
  Bigbank.InternetBankingSystem.WebApplication -. "Delivers to the customer's web browser" .-> Bigbank.InternetBankingSystem.SinglePageApplication
  Bigbank -. "Sends e-mails to" .-> Customer
`;case"mobileApp":return`---
title: "Mobile App"
---
graph TB
  Customer[fa:fa-user Personal Banking Customer]
  subgraph BigbankInternetBankingSystem["Internet Banking System"]
    BigbankInternetBankingSystem.MobileApp[Mobile App]
    subgraph BigbankInternetBankingSystem.ApiApplication["API Application"]
      BigbankInternetBankingSystem.ApiApplication.SigninController[Sign In Controller]
      BigbankInternetBankingSystem.ApiApplication.AccountsSummaryController[Accounts Summary Controller]
      BigbankInternetBankingSystem.ApiApplication.ResetPasswordController[Reset Password Controller]
    end
  end
  Customer -. "Views account balances, and makes payments using" .-> BigbankInternetBankingSystem.MobileApp
  BigbankInternetBankingSystem.MobileApp -. "Makes API calls to" .-> BigbankInternetBankingSystem.ApiApplication.ResetPasswordController
  BigbankInternetBankingSystem.MobileApp -. "Makes API calls to" .-> BigbankInternetBankingSystem.ApiApplication.AccountsSummaryController
  BigbankInternetBankingSystem.MobileApp -. "Makes API calls to" .-> BigbankInternetBankingSystem.ApiApplication.SigninController
`;default:throw new Error("Unknown viewId: "+e)}}const jn=async(e,n)=>{const{default:t}=await pn(()=>import("https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs"),__vite__mapDeps([]));t.initialize({theme:"dark"});const{svg:i}=await t.render(e,n);return i};function Jn({viewId:e}){const n=Un(e),[t,{execute:i}]=Je(jn,null);return De.useEffect(()=>{i(e,n)},[n]),L.jsxs(xe,{direction:"horizontal",autoSaveId:"ViewAsD2",children:[L.jsx(le,{minSizePixels:100,children:L.jsxs(fe,{scrollbars:"both",children:[L.jsx(Y,{asChild:!0,display:"block",p:"2",style:{whiteSpace:"pre",minHeight:"100%"},children:L.jsx(Fe,{variant:"soft",autoFocus:!0,children:n})}),L.jsx(ve,{text:n})]})}),L.jsx(he,{style:{width:10}}),L.jsx(le,{minSizePixels:100,children:L.jsx(fe,{scrollbars:"both",children:t.result&&L.jsx(Y,{grow:"1",asChild:!0,position:"relative",className:"svg-container",children:L.jsx("div",{dangerouslySetInnerHTML:{__html:t.result}})})})})]})}function Yn({viewId:e,viewMode:n}){return L.jsx(Rn,{asChild:!0,position:"fixed",inset:"0",pt:"8",pl:"8",pr:"2",align:"stretch",direction:"column",children:L.jsxs($.Root,{value:n,onValueChange:t=>t!==n&&Dn({mode:t}),children:[L.jsx(Y,{asChild:!0,shrink:"0",grow:"0",children:L.jsxs($.List,{children:[L.jsx($.Trigger,{value:"react",children:"React"}),L.jsx($.Trigger,{value:"dot",children:"Graphviz"}),L.jsx($.Trigger,{value:"mmd",children:"Mermaid"}),L.jsx($.Trigger,{value:"d2",children:"D2"})]})}),L.jsxs(Y,{p:"2",className:Bn.otherFormats,position:"relative",children:[L.jsx($.Content,{value:"react",children:""}),L.jsx($.Content,{value:"dot",children:L.jsx(Wn,{viewId:e})}),L.jsx($.Content,{value:"mmd",children:L.jsx(Jn,{viewId:e})}),L.jsx($.Content,{value:"d2",children:L.jsx(Vn,{viewId:e})})]})]})})}export{Yn as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
