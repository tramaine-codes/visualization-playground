function e(n){switch(n){case"index":return`@startuml
title "Big Bank - Landscape"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Customer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<BigbankSupportStaff>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<BigbankAtm>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BigbankInternetBankingSystem>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<BigbankBackoffice>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<BigbankEmail>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<BigbankMainframe>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
person "==Personal Banking Customer\\n\\nA customer of the bank, with personal bank accounts." <<Customer>> as Customer
rectangle "Big Bank plc" <<Bigbank>> as Bigbank {
  skinparam RectangleBorderColor<<Bigbank>> #3b82f6
  skinparam RectangleFontColor<<Bigbank>> #3b82f6
  skinparam RectangleBorderStyle<<Bigbank>> dashed

  person "==Customer Service Staff\\n\\nCustomer service staff within the bank." <<BigbankSupportStaff>> as BigbankSupportStaff
  rectangle "==ATM\\n\\nAllows customers to withdraw cash." <<BigbankAtm>> as BigbankAtm
  rectangle "==Internet Banking System\\n\\nAllows customers to view information about their bank accounts, and make payments." <<BigbankInternetBankingSystem>> as BigbankInternetBankingSystem
  person "==Back Office Staff\\n\\nAdministration and support staff within the bank." <<BigbankBackoffice>> as BigbankBackoffice
  rectangle "==E-mail System\\n\\nThe internal Microsoft Exchange e-mail system." <<BigbankEmail>> as BigbankEmail
  rectangle "==Mainframe Banking System\\n\\nStores all of the core banking information about customers, accounts, transactions, etc." <<BigbankMainframe>> as BigbankMainframe
}

Customer .[#8D8D8D,thickness=2].> BigbankSupportStaff : <color:#8D8D8D>Asks questions to
Customer .[#8D8D8D,thickness=2].> BigbankAtm : <color:#8D8D8D>Withdraws cash using
Customer .[#8D8D8D,thickness=2].> BigbankInternetBankingSystem : <color:#8D8D8D>Views account balances, and makes payments using
BigbankSupportStaff .[#8D8D8D,thickness=2].> BigbankMainframe : <color:#8D8D8D>Uses
BigbankBackoffice .[#8D8D8D,thickness=2].> BigbankMainframe : <color:#8D8D8D>Uses
BigbankAtm .[#8D8D8D,thickness=2].> BigbankMainframe : <color:#8D8D8D>Uses
BigbankInternetBankingSystem .[#8D8D8D,thickness=2].> BigbankMainframe : <color:#8D8D8D>Gets account information from, and makes payments using
BigbankInternetBankingSystem .[#8D8D8D,thickness=2].> BigbankEmail : <color:#8D8D8D>Sends e-mail using
BigbankEmail .[#8D8D8D,thickness=2].> Customer : <color:#8D8D8D>Sends e-mails to
@enduml
`;case"context":return`@startuml
title "Internet Banking System - SystemContext"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<BigbankInternetBankingSystem>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BigbankMainframe>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<BigbankEmail>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<Customer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
rectangle "Big Bank plc" <<Bigbank>> as Bigbank {
  skinparam RectangleBorderColor<<Bigbank>> #3b82f6
  skinparam RectangleFontColor<<Bigbank>> #3b82f6
  skinparam RectangleBorderStyle<<Bigbank>> dashed

  rectangle "==Internet Banking System\\n\\nAllows customers to view information about their bank accounts, and make payments." <<BigbankInternetBankingSystem>> as BigbankInternetBankingSystem
  rectangle "==Mainframe Banking System\\n\\nStores all of the core banking information about customers, accounts, transactions, etc." <<BigbankMainframe>> as BigbankMainframe
  rectangle "==E-mail System\\n\\nThe internal Microsoft Exchange e-mail system." <<BigbankEmail>> as BigbankEmail
}
person "==Personal Banking Customer\\n\\nA customer of the bank, with personal bank accounts." <<Customer>> as Customer

BigbankInternetBankingSystem .[#8D8D8D,thickness=2].> BigbankMainframe : <color:#8D8D8D>Gets account information from, and makes payments using
BigbankInternetBankingSystem .[#8D8D8D,thickness=2].> BigbankEmail : <color:#8D8D8D>Sends e-mail using
BigbankEmail .[#8D8D8D,thickness=2].> Customer : <color:#8D8D8D>Sends e-mails to
Customer .[#8D8D8D,thickness=2].> BigbankInternetBankingSystem : <color:#8D8D8D>Views account balances, and makes payments using
@enduml
`;case"ibsContainers":return`@startuml
title "Internet Banking System - Containers"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Customer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<BigbankInternetBankingSystemMobileApp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BigbankInternetBankingSystemWebApplication>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BigbankInternetBankingSystemSinglePageApplication>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BigbankInternetBankingSystemApiApplication>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<BigbankInternetBankingSystemDatabase>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BigbankMainframe>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<BigbankEmail>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==Personal Banking Customer\\n\\nA customer of the bank, with personal bank accounts." <<Customer>> as Customer
rectangle "Internet Banking System" <<BigbankInternetBankingSystem>> as BigbankInternetBankingSystem {
  skinparam RectangleBorderColor<<BigbankInternetBankingSystem>> #3b82f6
  skinparam RectangleFontColor<<BigbankInternetBankingSystem>> #3b82f6
  skinparam RectangleBorderStyle<<BigbankInternetBankingSystem>> dashed

  rectangle "==Mobile App\\n<size:10>[Xamarin]</size>\\n\\nProvides a limited subset of the Internet banking functionality to customers via their mobile device." <<BigbankInternetBankingSystemMobileApp>> as BigbankInternetBankingSystemMobileApp
  rectangle "==Web Application\\n<size:10>[Java and Spring MVC]</size>\\n\\nDelivers the static content and the Internet banking single page application." <<BigbankInternetBankingSystemWebApplication>> as BigbankInternetBankingSystemWebApplication
  rectangle "==Single-Page Application\\n<size:10>[JavaScript and Angular]</size>\\n\\nProvides all of the Internet banking functionality to customers via their web browser." <<BigbankInternetBankingSystemSinglePageApplication>> as BigbankInternetBankingSystemSinglePageApplication
  rectangle "==API Application\\n<size:10>[Java and Spring MVC]</size>\\n\\nProvides Internet banking functionality via a JSON/HTTPS API." <<BigbankInternetBankingSystemApiApplication>> as BigbankInternetBankingSystemApiApplication
  database "==Database\\n<size:10>[Oracle Database Schema]</size>\\n\\nStores user registration information, hashed authentication credentials, access logs, etc." <<BigbankInternetBankingSystemDatabase>> as BigbankInternetBankingSystemDatabase
}
rectangle "==Mainframe Banking System\\n\\nStores all of the core banking information about customers, accounts, transactions, etc." <<BigbankMainframe>> as BigbankMainframe
rectangle "==E-mail System\\n\\nThe internal Microsoft Exchange e-mail system." <<BigbankEmail>> as BigbankEmail

Customer .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemSinglePageApplication : <color:#8D8D8D>Views account balances, and makes payments using
Customer .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemMobileApp : <color:#8D8D8D>Views account balances, and makes payments using
Customer .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemWebApplication : <color:#8D8D8D>Visits bigbank.com using HTTPS
BigbankInternetBankingSystemSinglePageApplication .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemApiApplication : <color:#8D8D8D>Makes API calls to\r\\n<color:#8D8D8D>[JSON/HTTPS]
BigbankInternetBankingSystemWebApplication .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemSinglePageApplication : <color:#8D8D8D>Delivers to the customer's web browser
BigbankInternetBankingSystemMobileApp .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemApiApplication : <color:#8D8D8D>Makes API calls to\r\\n<color:#8D8D8D>[JSON/HTTPS]
BigbankInternetBankingSystemApiApplication .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemDatabase : <color:#8D8D8D>Reads from and writes to\r\\n<color:#8D8D8D>[SQL/TCPS]
BigbankInternetBankingSystemApiApplication .[#8D8D8D,thickness=2].> BigbankMainframe : <color:#8D8D8D>Makes API calls to\r\\n<color:#8D8D8D>[JSON/HTTPS]
BigbankInternetBankingSystemApiApplication .[#8D8D8D,thickness=2].> BigbankEmail : <color:#8D8D8D>Sends e-mail using
BigbankEmail .[#8D8D8D,thickness=2].> Customer : <color:#8D8D8D>Sends e-mails to
@enduml
`;case"apiApp":return`@startuml
title "API Application - Components"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<BigbankInternetBankingSystemSinglePageApplication>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<BigbankInternetBankingSystemMobileApp>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<BigbankInternetBankingSystemApiApplicationSigninController>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BigbankInternetBankingSystemApiApplicationAccountsSummaryController>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BigbankInternetBankingSystemApiApplicationResetPasswordController>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BigbankInternetBankingSystemApiApplicationMainframeBankingSystemFacade>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BigbankInternetBankingSystemApiApplicationSecurityComponent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BigbankInternetBankingSystemApiApplicationEmailComponent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BigbankMainframe>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<BigbankInternetBankingSystemDatabase>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<BigbankEmail>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
rectangle "==Single-Page Application\\n<size:10>[JavaScript and Angular]</size>\\n\\nProvides all of the Internet banking functionality to customers via their web browser." <<BigbankInternetBankingSystemSinglePageApplication>> as BigbankInternetBankingSystemSinglePageApplication
rectangle "==Mobile App\\n<size:10>[Xamarin]</size>\\n\\nProvides a limited subset of the Internet banking functionality to customers via their mobile device." <<BigbankInternetBankingSystemMobileApp>> as BigbankInternetBankingSystemMobileApp
rectangle "API Application" <<BigbankInternetBankingSystemApiApplication>> as BigbankInternetBankingSystemApiApplication {
  skinparam RectangleBorderColor<<BigbankInternetBankingSystemApiApplication>> #3b82f6
  skinparam RectangleFontColor<<BigbankInternetBankingSystemApiApplication>> #3b82f6
  skinparam RectangleBorderStyle<<BigbankInternetBankingSystemApiApplication>> dashed

  rectangle "==Sign In Controller\\n<size:10>[Spring MVC Rest Controller]</size>\\n\\nAllows users to sign in to the Internet Banking System." <<BigbankInternetBankingSystemApiApplicationSigninController>> as BigbankInternetBankingSystemApiApplicationSigninController
  rectangle "==Accounts Summary Controller\\n<size:10>[Spring MVC Rest Controller]</size>\\n\\nProvides customers with a summary of their bank accounts." <<BigbankInternetBankingSystemApiApplicationAccountsSummaryController>> as BigbankInternetBankingSystemApiApplicationAccountsSummaryController
  rectangle "==Reset Password Controller\\n<size:10>[Spring MVC Rest Controller]</size>\\n\\nAllows users to reset their passwords with a single use URL." <<BigbankInternetBankingSystemApiApplicationResetPasswordController>> as BigbankInternetBankingSystemApiApplicationResetPasswordController
  rectangle "==Mainframe Banking System Facade\\n<size:10>[Spring Bean]</size>\\n\\nA facade onto the mainframe banking system." <<BigbankInternetBankingSystemApiApplicationMainframeBankingSystemFacade>> as BigbankInternetBankingSystemApiApplicationMainframeBankingSystemFacade
  rectangle "==Security Component\\n<size:10>[Spring Bean]</size>\\n\\nProvides functionality related to signing in, changing passwords, etc." <<BigbankInternetBankingSystemApiApplicationSecurityComponent>> as BigbankInternetBankingSystemApiApplicationSecurityComponent
  rectangle "==E-mail Component\\n<size:10>[Spring Bean]</size>\\n\\nSends e-mails to users." <<BigbankInternetBankingSystemApiApplicationEmailComponent>> as BigbankInternetBankingSystemApiApplicationEmailComponent
}
rectangle "==Mainframe Banking System\\n\\nStores all of the core banking information about customers, accounts, transactions, etc." <<BigbankMainframe>> as BigbankMainframe
database "==Database\\n<size:10>[Oracle Database Schema]</size>\\n\\nStores user registration information, hashed authentication credentials, access logs, etc." <<BigbankInternetBankingSystemDatabase>> as BigbankInternetBankingSystemDatabase
rectangle "==E-mail System\\n\\nThe internal Microsoft Exchange e-mail system." <<BigbankEmail>> as BigbankEmail

BigbankInternetBankingSystemSinglePageApplication .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemApiApplicationSigninController : <color:#8D8D8D>Makes API calls to\r\\n<color:#8D8D8D>[JSON/HTTPS]
BigbankInternetBankingSystemSinglePageApplication .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemApiApplicationAccountsSummaryController : <color:#8D8D8D>Makes API calls to\r\\n<color:#8D8D8D>[JSON/HTTPS]
BigbankInternetBankingSystemSinglePageApplication .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemApiApplicationResetPasswordController : <color:#8D8D8D>Makes API calls to\r\\n<color:#8D8D8D>[JSON/HTTPS]
BigbankInternetBankingSystemMobileApp .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemApiApplicationSigninController : <color:#8D8D8D>Makes API calls to\r\\n<color:#8D8D8D>[JSON/HTTPS]
BigbankInternetBankingSystemMobileApp .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemApiApplicationAccountsSummaryController : <color:#8D8D8D>Makes API calls to\r\\n<color:#8D8D8D>[JSON/HTTPS]
BigbankInternetBankingSystemMobileApp .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemApiApplicationResetPasswordController : <color:#8D8D8D>Makes API calls to\r\\n<color:#8D8D8D>[JSON/HTTPS]
BigbankInternetBankingSystemApiApplicationSigninController .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemApiApplicationSecurityComponent : <color:#8D8D8D>Uses
BigbankInternetBankingSystemApiApplicationAccountsSummaryController .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemApiApplicationMainframeBankingSystemFacade : <color:#8D8D8D>Uses
BigbankInternetBankingSystemApiApplicationResetPasswordController .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemApiApplicationSecurityComponent : <color:#8D8D8D>Uses
BigbankInternetBankingSystemApiApplicationResetPasswordController .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemApiApplicationEmailComponent : <color:#8D8D8D>Uses
BigbankInternetBankingSystemApiApplicationSecurityComponent .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemDatabase : <color:#8D8D8D>Reads from and writes to\r\\n<color:#8D8D8D>[SQL/TCPS]
BigbankInternetBankingSystemApiApplicationMainframeBankingSystemFacade .[#8D8D8D,thickness=2].> BigbankMainframe : <color:#8D8D8D>Makes API calls to\r\\n<color:#8D8D8D>[JSON/HTTPS]
BigbankInternetBankingSystemApiApplicationEmailComponent .[#8D8D8D,thickness=2].> BigbankEmail : <color:#8D8D8D>Sends e-mail using
@enduml
`;case"customer":return`@startuml
title "Personal Banking Customer"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Customer>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<BigbankInternetBankingSystemSinglePageApplication>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BigbankInternetBankingSystemMobileApp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<BigbankSupportStaff>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<BigbankAtm>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==Personal Banking Customer\\n\\nA customer of the bank, with personal bank accounts." <<Customer>> as Customer
rectangle "Big Bank plc" <<Bigbank>> as Bigbank {
  skinparam RectangleBorderColor<<Bigbank>> #64748b
  skinparam RectangleFontColor<<Bigbank>> #64748b
  skinparam RectangleBorderStyle<<Bigbank>> dashed

  rectangle "Internet Banking System" <<BigbankInternetBankingSystem>> as BigbankInternetBankingSystem {
    skinparam RectangleBorderColor<<BigbankInternetBankingSystem>> #3b82f6
    skinparam RectangleFontColor<<BigbankInternetBankingSystem>> #3b82f6
    skinparam RectangleBorderStyle<<BigbankInternetBankingSystem>> dashed

    rectangle "==Single-Page Application\\n<size:10>[JavaScript and Angular]</size>\\n\\nProvides all of the Internet banking functionality to customers via their web browser." <<BigbankInternetBankingSystemSinglePageApplication>> as BigbankInternetBankingSystemSinglePageApplication
    rectangle "==Mobile App\\n<size:10>[Xamarin]</size>\\n\\nProvides a limited subset of the Internet banking functionality to customers via their mobile device." <<BigbankInternetBankingSystemMobileApp>> as BigbankInternetBankingSystemMobileApp
  }
  person "==Customer Service Staff\\n\\nCustomer service staff within the bank." <<BigbankSupportStaff>> as BigbankSupportStaff
  rectangle "==ATM\\n\\nAllows customers to withdraw cash." <<BigbankAtm>> as BigbankAtm
}

Customer .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemSinglePageApplication : <color:#8D8D8D>Views account balances, and makes payments using
Customer .[#8D8D8D,thickness=2].> BigbankInternetBankingSystemMobileApp : <color:#8D8D8D>Views account balances, and makes payments using
Customer .[#8D8D8D,thickness=2].> BigbankSupportStaff : <color:#8D8D8D>Asks questions to
Customer .[#8D8D8D,thickness=2].> BigbankAtm : <color:#8D8D8D>Withdraws cash using
@enduml
`;case"support":return`@startuml
title "Customer Service Staff"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Customer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<BigbankSupportStaff>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<BigbankBackoffice>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<BigbankMainframe>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
person "==Personal Banking Customer\\n\\nA customer of the bank, with personal bank accounts." <<Customer>> as Customer
rectangle "Big Bank plc" <<Bigbank>> as Bigbank {
  skinparam RectangleBorderColor<<Bigbank>> #3b82f6
  skinparam RectangleFontColor<<Bigbank>> #3b82f6
  skinparam RectangleBorderStyle<<Bigbank>> dashed

  person "==Customer Service Staff\\n\\nCustomer service staff within the bank." <<BigbankSupportStaff>> as BigbankSupportStaff
  person "==Back Office Staff\\n\\nAdministration and support staff within the bank." <<BigbankBackoffice>> as BigbankBackoffice
  rectangle "==Mainframe Banking System\\n\\nStores all of the core banking information about customers, accounts, transactions, etc." <<BigbankMainframe>> as BigbankMainframe
}

Customer .[#8D8D8D,thickness=2].> BigbankSupportStaff : <color:#8D8D8D>Asks questions to
BigbankSupportStaff .[#8D8D8D,thickness=2].> BigbankMainframe : <color:#8D8D8D>Uses
BigbankBackoffice .[#8D8D8D,thickness=2].> BigbankMainframe : <color:#8D8D8D>Uses
@enduml
`;default:throw new Error("Unknown viewId: "+n)}}export{e as pumlSource};
