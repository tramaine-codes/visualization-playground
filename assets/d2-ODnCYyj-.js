function e(n){switch(n){case"apiApp":return`direction: down

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
  ResetPasswordController: {
    label: "Reset Password Controller"
  }
  MainframeBankingSystemFacade: {
    label: "Mainframe Banking System Facade"
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

BigbankInternetBankingSystemSinglePageApplication -> BigbankInternetBankingSystemApiApplication.SigninController: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystemSinglePageApplication -> BigbankInternetBankingSystemApiApplication.AccountsSummaryController: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystemSinglePageApplication -> BigbankInternetBankingSystemApiApplication.ResetPasswordController: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystemMobileApp -> BigbankInternetBankingSystemApiApplication.SigninController: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystemMobileApp -> BigbankInternetBankingSystemApiApplication.AccountsSummaryController: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystemMobileApp -> BigbankInternetBankingSystemApiApplication.ResetPasswordController: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystemApiApplication.SigninController -> BigbankInternetBankingSystemApiApplication.SecurityComponent: "Uses"
BigbankInternetBankingSystemApiApplication.AccountsSummaryController -> BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade: "Uses"
BigbankInternetBankingSystemApiApplication.ResetPasswordController -> BigbankInternetBankingSystemApiApplication.SecurityComponent: "Uses"
BigbankInternetBankingSystemApiApplication.ResetPasswordController -> BigbankInternetBankingSystemApiApplication.EmailComponent: "Uses"
BigbankInternetBankingSystemApiApplication.SecurityComponent -> BigbankInternetBankingSystemDatabase: "Reads from and writes to\\r\\n[SQL/TCPS]"
BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade -> BigbankMainframe: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystemApiApplication.EmailComponent -> BigbankEmail: "Sends e-mail using"
`;case"index":return`direction: down

Customer: {
  label: "Personal Banking Customer"
  shape: person
}
Bigbank: {
  label: "Big Bank plc"

  SupportStaff: {
    label: "Customer Service Staff"
    shape: person
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
  Email: {
    label: "E-mail System"
  }
  Mainframe: {
    label: "Mainframe Banking System"
  }
}

Customer -> Bigbank.SupportStaff: "Asks questions to"
Customer -> Bigbank.Atm: "Withdraws cash using"
Customer -> Bigbank.InternetBankingSystem: "Views account balances, and makes payments using"
Bigbank.SupportStaff -> Bigbank.Mainframe: "Uses"
Bigbank.Backoffice -> Bigbank.Mainframe: "Uses"
Bigbank.Atm -> Bigbank.Mainframe: "Uses"
Bigbank.InternetBankingSystem -> Bigbank.Mainframe: "Gets account information from, and makes payments using"
Bigbank.InternetBankingSystem -> Bigbank.Email: "Sends e-mail using"
Bigbank.Email -> Customer: "Sends e-mails to"
`;case"support":return`direction: down

Customer: {
  label: "Personal Banking Customer"
  shape: person
}
Bigbank: {
  label: "Big Bank plc"

  SupportStaff: {
    label: "Customer Service Staff"
    shape: person
  }
  Backoffice: {
    label: "Back Office Staff"
    shape: person
  }
  Mainframe: {
    label: "Mainframe Banking System"
  }
}

Customer -> Bigbank.SupportStaff: "Asks questions to"
Bigbank.SupportStaff -> Bigbank.Mainframe: "Uses"
Bigbank.Backoffice -> Bigbank.Mainframe: "Uses"
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

Customer -> BigbankInternetBankingSystem.SinglePageApplication: "Views account balances, and makes payments using"
Customer -> BigbankInternetBankingSystem.MobileApp: "Views account balances, and makes payments using"
Customer -> BigbankInternetBankingSystem.WebApplication: "Visits bigbank.com using HTTPS"
BigbankInternetBankingSystem.SinglePageApplication -> BigbankInternetBankingSystem.ApiApplication: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystem.WebApplication -> BigbankInternetBankingSystem.SinglePageApplication: "Delivers to the customer's web browser"
BigbankInternetBankingSystem.MobileApp -> BigbankInternetBankingSystem.ApiApplication: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystem.ApiApplication -> BigbankInternetBankingSystem.Database: "Reads from and writes to\\r\\n[SQL/TCPS]"
BigbankInternetBankingSystem.ApiApplication -> BigbankMainframe: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystem.ApiApplication -> BigbankEmail: "Sends e-mail using"
BigbankEmail -> Customer: "Sends e-mails to"
`;case"context":return`direction: down

Bigbank: {
  label: "Big Bank plc"

  InternetBankingSystem: {
    label: "Internet Banking System"
  }
  Mainframe: {
    label: "Mainframe Banking System"
  }
  Email: {
    label: "E-mail System"
  }
}
Customer: {
  label: "Personal Banking Customer"
  shape: person
}

Bigbank.InternetBankingSystem -> Bigbank.Mainframe: "Gets account information from, and makes payments using"
Bigbank.InternetBankingSystem -> Bigbank.Email: "Sends e-mail using"
Bigbank.Email -> Customer: "Sends e-mails to"
Customer -> Bigbank.InternetBankingSystem: "Views account balances, and makes payments using"
`;case"customer":return`direction: down

Customer: {
  label: "Personal Banking Customer"
  shape: person
}
Bigbank: {
  label: "Big Bank plc"

  InternetBankingSystem: {
    label: "Internet Banking System"

    SinglePageApplication: {
      label: "Single-Page Application"
    }
    MobileApp: {
      label: "Mobile App"
    }
  }
  SupportStaff: {
    label: "Customer Service Staff"
    shape: person
  }
  Atm: {
    label: "ATM"
  }
}

Customer -> Bigbank.InternetBankingSystem.SinglePageApplication: "Views account balances, and makes payments using"
Customer -> Bigbank.InternetBankingSystem.MobileApp: "Views account balances, and makes payments using"
Customer -> Bigbank.SupportStaff: "Asks questions to"
Customer -> Bigbank.Atm: "Withdraws cash using"
`;default:throw new Error("Unknown viewId: "+n)}}export{e as d2Source};
