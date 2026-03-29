function e(n){switch(n){case"index":return`---
title: "Big Bank - Landscape"
---
graph TB
  Customer@{ icon: "fa:user", shape: rounded, label: "Personal Banking Customer" }
  subgraph Bigbank["\`Big Bank plc\`"]
    Bigbank.SupportStaff@{ icon: "fa:user", shape: rounded, label: "Customer Service Staff" }
    Bigbank.Atm@{ shape: rectangle, label: "ATM" }
    Bigbank.InternetBankingSystem@{ shape: rectangle, label: "Internet Banking System" }
    Bigbank.Backoffice@{ icon: "fa:user", shape: rounded, label: "Back Office Staff" }
    Bigbank.Email@{ shape: rectangle, label: "E-mail System" }
    Bigbank.Mainframe@{ shape: rectangle, label: "Mainframe Banking System" }
  end
  Customer -. "\`Asks questions to\`" .-> Bigbank.SupportStaff
  Customer -. "\`Withdraws cash using\`" .-> Bigbank.Atm
  Customer -. "\`Views account balances, and makes payments using\`" .-> Bigbank.InternetBankingSystem
  Bigbank.SupportStaff -. "\`Uses\`" .-> Bigbank.Mainframe
  Bigbank.Backoffice -. "\`Uses\`" .-> Bigbank.Mainframe
  Bigbank.Atm -. "\`Uses\`" .-> Bigbank.Mainframe
  Bigbank.InternetBankingSystem -. "\`Gets account information from, and makes payments using\`" .-> Bigbank.Mainframe
  Bigbank.InternetBankingSystem -. "\`Sends e-mail using\`" .-> Bigbank.Email
  Bigbank.Email -. "\`Sends e-mails to\`" .-> Customer
`;case"context":return`---
title: "Internet Banking System - SystemContext"
---
graph TB
  subgraph Bigbank["\`Big Bank plc\`"]
    Bigbank.InternetBankingSystem@{ shape: rectangle, label: "Internet Banking System" }
    Bigbank.Mainframe@{ shape: rectangle, label: "Mainframe Banking System" }
    Bigbank.Email@{ shape: rectangle, label: "E-mail System" }
  end
  Customer@{ icon: "fa:user", shape: rounded, label: "Personal Banking Customer" }
  Bigbank.InternetBankingSystem -. "\`Gets account information from, and makes payments using\`" .-> Bigbank.Mainframe
  Bigbank.InternetBankingSystem -. "\`Sends e-mail using\`" .-> Bigbank.Email
  Bigbank.Email -. "\`Sends e-mails to\`" .-> Customer
  Customer -. "\`Views account balances, and makes payments using\`" .-> Bigbank.InternetBankingSystem
`;case"ibsContainers":return`---
title: "Internet Banking System - Containers"
---
graph TB
  Customer@{ icon: "fa:user", shape: rounded, label: "Personal Banking Customer" }
  subgraph BigbankInternetBankingSystem["\`Internet Banking System\`"]
    BigbankInternetBankingSystem.MobileApp@{ shape: rounded, label: "Mobile App" }
    BigbankInternetBankingSystem.WebApplication@{ shape: rectangle, label: "Web Application" }
    BigbankInternetBankingSystem.SinglePageApplication@{ shape: rounded, label: "Single-Page Application" }
    BigbankInternetBankingSystem.ApiApplication@{ shape: rectangle, label: "API Application" }
    BigbankInternetBankingSystem.Database@{ shape: disk, label: "Database" }
  end
  BigbankMainframe@{ shape: rectangle, label: "Mainframe Banking System" }
  BigbankEmail@{ shape: rectangle, label: "E-mail System" }
  Customer -. "\`Views account balances, and makes payments using\`" .-> BigbankInternetBankingSystem.SinglePageApplication
  Customer -. "\`Views account balances, and makes payments using\`" .-> BigbankInternetBankingSystem.MobileApp
  Customer -. "\`Visits bigbank.com using HTTPS\`" .-> BigbankInternetBankingSystem.WebApplication
  BigbankInternetBankingSystem.SinglePageApplication -. "\`Makes API calls to\r
[JSON/HTTPS]\`" .-> BigbankInternetBankingSystem.ApiApplication
  BigbankInternetBankingSystem.WebApplication -. "\`Delivers to the customer's web browser\`" .-> BigbankInternetBankingSystem.SinglePageApplication
  BigbankInternetBankingSystem.MobileApp -. "\`Makes API calls to\r
[JSON/HTTPS]\`" .-> BigbankInternetBankingSystem.ApiApplication
  BigbankInternetBankingSystem.ApiApplication -. "\`Reads from and writes to\r
[SQL/TCPS]\`" .-> BigbankInternetBankingSystem.Database
  BigbankInternetBankingSystem.ApiApplication -. "\`Makes API calls to\r
[JSON/HTTPS]\`" .-> BigbankMainframe
  BigbankInternetBankingSystem.ApiApplication -. "\`Sends e-mail using\`" .-> BigbankEmail
  BigbankEmail -. "\`Sends e-mails to\`" .-> Customer
`;case"apiApp":return`---
title: "API Application - Components"
---
graph TB
  BigbankInternetBankingSystemSinglePageApplication@{ shape: rounded, label: "Single-Page Application" }
  BigbankInternetBankingSystemMobileApp@{ shape: rounded, label: "Mobile App" }
  subgraph BigbankInternetBankingSystemApiApplication["\`API Application\`"]
    BigbankInternetBankingSystemApiApplication.SigninController@{ shape: rectangle, label: "Sign In Controller" }
    BigbankInternetBankingSystemApiApplication.AccountsSummaryController@{ shape: rectangle, label: "Accounts Summary Controller" }
    BigbankInternetBankingSystemApiApplication.ResetPasswordController@{ shape: rectangle, label: "Reset Password Controller" }
    BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade@{ shape: rectangle, label: "Mainframe Banking System Facade" }
    BigbankInternetBankingSystemApiApplication.SecurityComponent@{ shape: rectangle, label: "Security Component" }
    BigbankInternetBankingSystemApiApplication.EmailComponent@{ shape: rectangle, label: "E-mail Component" }
  end
  BigbankMainframe@{ shape: rectangle, label: "Mainframe Banking System" }
  BigbankInternetBankingSystemDatabase@{ shape: disk, label: "Database" }
  BigbankEmail@{ shape: rectangle, label: "E-mail System" }
  BigbankInternetBankingSystemSinglePageApplication -. "\`Makes API calls to\r
[JSON/HTTPS]\`" .-> BigbankInternetBankingSystemApiApplication.SigninController
  BigbankInternetBankingSystemSinglePageApplication -. "\`Makes API calls to\r
[JSON/HTTPS]\`" .-> BigbankInternetBankingSystemApiApplication.AccountsSummaryController
  BigbankInternetBankingSystemSinglePageApplication -. "\`Makes API calls to\r
[JSON/HTTPS]\`" .-> BigbankInternetBankingSystemApiApplication.ResetPasswordController
  BigbankInternetBankingSystemMobileApp -. "\`Makes API calls to\r
[JSON/HTTPS]\`" .-> BigbankInternetBankingSystemApiApplication.SigninController
  BigbankInternetBankingSystemMobileApp -. "\`Makes API calls to\r
[JSON/HTTPS]\`" .-> BigbankInternetBankingSystemApiApplication.AccountsSummaryController
  BigbankInternetBankingSystemMobileApp -. "\`Makes API calls to\r
[JSON/HTTPS]\`" .-> BigbankInternetBankingSystemApiApplication.ResetPasswordController
  BigbankInternetBankingSystemApiApplication.SigninController -. "\`Uses\`" .-> BigbankInternetBankingSystemApiApplication.SecurityComponent
  BigbankInternetBankingSystemApiApplication.AccountsSummaryController -. "\`Uses\`" .-> BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade
  BigbankInternetBankingSystemApiApplication.ResetPasswordController -. "\`Uses\`" .-> BigbankInternetBankingSystemApiApplication.SecurityComponent
  BigbankInternetBankingSystemApiApplication.ResetPasswordController -. "\`Uses\`" .-> BigbankInternetBankingSystemApiApplication.EmailComponent
  BigbankInternetBankingSystemApiApplication.SecurityComponent -. "\`Reads from and writes to\r
[SQL/TCPS]\`" .-> BigbankInternetBankingSystemDatabase
  BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade -. "\`Makes API calls to\r
[JSON/HTTPS]\`" .-> BigbankMainframe
  BigbankInternetBankingSystemApiApplication.EmailComponent -. "\`Sends e-mail using\`" .-> BigbankEmail
`;case"customer":return`---
title: "Personal Banking Customer"
---
graph TB
  Customer@{ icon: "fa:user", shape: rounded, label: "Personal Banking Customer" }
  subgraph Bigbank["\`Big Bank plc\`"]
    subgraph Bigbank.InternetBankingSystem["\`Internet Banking System\`"]
      Bigbank.InternetBankingSystem.SinglePageApplication@{ shape: rounded, label: "Single-Page Application" }
      Bigbank.InternetBankingSystem.MobileApp@{ shape: rounded, label: "Mobile App" }
    end
    Bigbank.SupportStaff@{ icon: "fa:user", shape: rounded, label: "Customer Service Staff" }
    Bigbank.Atm@{ shape: rectangle, label: "ATM" }
  end
  Customer -. "\`Views account balances, and makes payments using\`" .-> Bigbank.InternetBankingSystem.SinglePageApplication
  Customer -. "\`Views account balances, and makes payments using\`" .-> Bigbank.InternetBankingSystem.MobileApp
  Customer -. "\`Asks questions to\`" .-> Bigbank.SupportStaff
  Customer -. "\`Withdraws cash using\`" .-> Bigbank.Atm
`;case"support":return`---
title: "Customer Service Staff"
---
graph TB
  Customer@{ icon: "fa:user", shape: rounded, label: "Personal Banking Customer" }
  subgraph Bigbank["\`Big Bank plc\`"]
    Bigbank.SupportStaff@{ icon: "fa:user", shape: rounded, label: "Customer Service Staff" }
    Bigbank.Backoffice@{ icon: "fa:user", shape: rounded, label: "Back Office Staff" }
    Bigbank.Mainframe@{ shape: rectangle, label: "Mainframe Banking System" }
  end
  Customer -. "\`Asks questions to\`" .-> Bigbank.SupportStaff
  Bigbank.SupportStaff -. "\`Uses\`" .-> Bigbank.Mainframe
  Bigbank.Backoffice -. "\`Uses\`" .-> Bigbank.Mainframe
`;default:throw new Error("Unknown viewId: "+n)}}export{e as mmdSource};
