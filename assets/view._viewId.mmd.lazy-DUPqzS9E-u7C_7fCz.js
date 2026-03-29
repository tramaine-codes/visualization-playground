import{a as u,r as g,j as a,S as l,C as b,q as A,d as y,n as f,_ as I}from"./index-DCwctYmg.js";import{P as d,a as c,c as C,b as P,C as M,d as T}from"./view_viewId_.css-CDnAWAE5-CT7qWiFB.js";function h(n){switch(n){case"index":return`---
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
`;default:throw new Error("Unknown viewId: "+n)}}function w(n,e){const[i,t]=g.useState({status:"not-executed",error:void 0,result:e}),s=g.useRef(),k=g.useRef(),B=y({execute(...m){k.current=m;const r=n(...m);return s.current=r,t(o=>({...o,status:"loading"})),r.then(o=>{r===s.current&&t(p=>({...p,status:"success",error:void 0,result:o}))},o=>{r===s.current&&t(p=>({...p,status:"error",error:o}))}),r},reset(){t({status:"not-executed",error:void 0,result:e}),s.current=void 0,k.current=void 0}});return[i,g.useMemo(()=>({reset(){B.current.reset()},execute:(...m)=>B.current.execute(...m)}),[]),{promise:s.current,lastArgs:k.current}]}const S=u("/view/$viewId/mmd")({component:x}),E=async(n,e)=>{const{default:i}=await I(()=>import("https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs"),[]);i.initialize({theme:"dark"});const{svg:t}=await i.render(n,e);return t},v=()=>{const{viewId:n}=S.useParams();try{return h(n)}catch{throw f()}};function x(){const{viewId:n}=S.useParams(),e=v(),[i,{execute:t}]=w(E,null);return g.useEffect(()=>{t(n,e)},[e]),a.jsxs(d,{direction:"horizontal",autoSaveId:"viewAsMmd",children:[a.jsx(c,{children:a.jsxs(l,{className:C,p:5,styles:{viewport:{borderRadius:6}},children:[a.jsx(b,{block:!0,className:P,children:e}),a.jsx(M,{text:e})]})}),a.jsx(T,{style:{width:10}}),a.jsx(c,{children:a.jsx(l,{h:"100%",children:i.result&&a.jsx("div",{className:A,dangerouslySetInnerHTML:{__html:i.result}})})})]})}export{S as Route};
