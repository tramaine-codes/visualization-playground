function a(n){switch(n){case"apiApp":return`---
title: "API Application - Components"
---
graph TB
  BigbankInternetBankingSystemSinglePageApplication[Single-Page Application]
  BigbankInternetBankingSystemMobileApp[Mobile App]
  subgraph BigbankInternetBankingSystemApiApplication["API Application"]
    BigbankInternetBankingSystemApiApplication.SigninController[Sign In Controller]
    BigbankInternetBankingSystemApiApplication.AccountsSummaryController[Accounts Summary Controller]
    BigbankInternetBankingSystemApiApplication.ResetPasswordController[Reset Password Controller]
    BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade[Mainframe Banking System Facade]
    BigbankInternetBankingSystemApiApplication.SecurityComponent[Security Component]
    BigbankInternetBankingSystemApiApplication.EmailComponent[E-mail Component]
  end
  BigbankMainframe[Mainframe Banking System]
  BigbankInternetBankingSystemDatabase([Database])
  BigbankEmail[E-mail System]
  BigbankInternetBankingSystemSinglePageApplication -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.SigninController
  BigbankInternetBankingSystemSinglePageApplication -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.AccountsSummaryController
  BigbankInternetBankingSystemSinglePageApplication -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.ResetPasswordController
  BigbankInternetBankingSystemMobileApp -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.SigninController
  BigbankInternetBankingSystemMobileApp -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.AccountsSummaryController
  BigbankInternetBankingSystemMobileApp -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.ResetPasswordController
  BigbankInternetBankingSystemApiApplication.SigninController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.SecurityComponent
  BigbankInternetBankingSystemApiApplication.AccountsSummaryController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade
  BigbankInternetBankingSystemApiApplication.ResetPasswordController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.SecurityComponent
  BigbankInternetBankingSystemApiApplication.ResetPasswordController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.EmailComponent
  BigbankInternetBankingSystemApiApplication.SecurityComponent -. "Reads from and writes to\r\\n[SQL/TCPS]" .-> BigbankInternetBankingSystemDatabase
  BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankMainframe
  BigbankInternetBankingSystemApiApplication.EmailComponent -. "Sends e-mail using" .-> BigbankEmail
`;case"index":return`---
title: "Big Bank - Landscape"
---
graph TB
  Customer[fa:fa-user Personal Banking Customer]
  subgraph Bigbank["Big Bank plc"]
    Bigbank.SupportStaff[fa:fa-user Customer Service Staff]
    Bigbank.Atm[ATM]
    Bigbank.InternetBankingSystem[Internet Banking System]
    Bigbank.Backoffice[fa:fa-user Back Office Staff]
    Bigbank.Email[E-mail System]
    Bigbank.Mainframe[Mainframe Banking System]
  end
  Customer -. "Asks questions to" .-> Bigbank.SupportStaff
  Customer -. "Withdraws cash using" .-> Bigbank.Atm
  Customer -. "Views account balances, and makes payments using" .-> Bigbank.InternetBankingSystem
  Bigbank.SupportStaff -. "Uses" .-> Bigbank.Mainframe
  Bigbank.Backoffice -. "Uses" .-> Bigbank.Mainframe
  Bigbank.Atm -. "Uses" .-> Bigbank.Mainframe
  Bigbank.InternetBankingSystem -. "Gets account information from, and makes payments using" .-> Bigbank.Mainframe
  Bigbank.InternetBankingSystem -. "Sends e-mail using" .-> Bigbank.Email
  Bigbank.Email -. "Sends e-mails to" .-> Customer
`;case"support":return`---
title: "Customer Service Staff"
---
graph TB
  Customer[fa:fa-user Personal Banking Customer]
  subgraph Bigbank["Big Bank plc"]
    Bigbank.SupportStaff[fa:fa-user Customer Service Staff]
    Bigbank.Backoffice[fa:fa-user Back Office Staff]
    Bigbank.Mainframe[Mainframe Banking System]
  end
  Customer -. "Asks questions to" .-> Bigbank.SupportStaff
  Bigbank.SupportStaff -. "Uses" .-> Bigbank.Mainframe
  Bigbank.Backoffice -. "Uses" .-> Bigbank.Mainframe
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
  Customer -. "Views account balances, and makes payments using" .-> BigbankInternetBankingSystem.SinglePageApplication
  Customer -. "Views account balances, and makes payments using" .-> BigbankInternetBankingSystem.MobileApp
  Customer -. "Visits bigbank.com using HTTPS" .-> BigbankInternetBankingSystem.WebApplication
  BigbankInternetBankingSystem.SinglePageApplication -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystem.ApiApplication
  BigbankInternetBankingSystem.WebApplication -. "Delivers to the customer's web browser" .-> BigbankInternetBankingSystem.SinglePageApplication
  BigbankInternetBankingSystem.MobileApp -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystem.ApiApplication
  BigbankInternetBankingSystem.ApiApplication -. "Reads from and writes to\r\\n[SQL/TCPS]" .-> BigbankInternetBankingSystem.Database
  BigbankInternetBankingSystem.ApiApplication -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankMainframe
  BigbankInternetBankingSystem.ApiApplication -. "Sends e-mail using" .-> BigbankEmail
  BigbankEmail -. "Sends e-mails to" .-> Customer
`;case"context":return`---
title: "Internet Banking System - SystemContext"
---
graph TB
  subgraph Bigbank["Big Bank plc"]
    Bigbank.InternetBankingSystem[Internet Banking System]
    Bigbank.Mainframe[Mainframe Banking System]
    Bigbank.Email[E-mail System]
  end
  Customer[fa:fa-user Personal Banking Customer]
  Bigbank.InternetBankingSystem -. "Gets account information from, and makes payments using" .-> Bigbank.Mainframe
  Bigbank.InternetBankingSystem -. "Sends e-mail using" .-> Bigbank.Email
  Bigbank.Email -. "Sends e-mails to" .-> Customer
  Customer -. "Views account balances, and makes payments using" .-> Bigbank.InternetBankingSystem
`;case"customer":return`---
title: "Personal Banking Customer"
---
graph TB
  Customer[fa:fa-user Personal Banking Customer]
  subgraph Bigbank["Big Bank plc"]
    subgraph Bigbank.InternetBankingSystem["Internet Banking System"]
      Bigbank.InternetBankingSystem.SinglePageApplication[Single-Page Application]
      Bigbank.InternetBankingSystem.MobileApp[Mobile App]
    end
    Bigbank.SupportStaff[fa:fa-user Customer Service Staff]
    Bigbank.Atm[ATM]
  end
  Customer -. "Views account balances, and makes payments using" .-> Bigbank.InternetBankingSystem.SinglePageApplication
  Customer -. "Views account balances, and makes payments using" .-> Bigbank.InternetBankingSystem.MobileApp
  Customer -. "Asks questions to" .-> Bigbank.SupportStaff
  Customer -. "Withdraws cash using" .-> Bigbank.Atm
`;default:throw new Error("Unknown viewId: "+n)}}export{a as mmdSource};
