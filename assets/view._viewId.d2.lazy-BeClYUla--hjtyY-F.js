import{a as t,j as n,S as a,C as s,n as l}from"./index-DCwctYmg.js";import{P as o,a as i,c as r,b as m,C as g,d as p}from"./view_viewId_.css-CDnAWAE5-CT7qWiFB.js";function k(e){switch(e){case"index":return`direction: down

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
`;default:throw new Error("Unknown viewId: "+e)}}const B=t("/view/$viewId/d2")({component:S}),b=()=>{const{viewId:e}=B.useParams();try{return k(e)}catch{throw l()}};function S(){const e=b();return n.jsxs(o,{direction:"horizontal",autoSaveId:"viewAsD2",children:[n.jsx(i,{children:n.jsxs(a,{className:r,p:5,styles:{viewport:{borderRadius:6}},children:[n.jsx(s,{block:!0,className:m,children:e}),n.jsx(g,{text:e})]})}),n.jsx(p,{style:{width:10}}),n.jsx(i,{children:n.jsx(a,{h:"100%"})})]})}export{B as Route};
