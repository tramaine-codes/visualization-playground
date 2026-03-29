function t(n){switch(n){case"apiApp":return`direction: down

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

BigbankInternetBankingSystemSinglePageApplication -> BigbankInternetBankingSystemApiApplication.ResetPasswordController: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystemSinglePageApplication -> BigbankInternetBankingSystemApiApplication.AccountsSummaryController: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystemSinglePageApplication -> BigbankInternetBankingSystemApiApplication.SigninController: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystemMobileApp -> BigbankInternetBankingSystemApiApplication.ResetPasswordController: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystemMobileApp -> BigbankInternetBankingSystemApiApplication.AccountsSummaryController: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystemMobileApp -> BigbankInternetBankingSystemApiApplication.SigninController: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystemApiApplication.SigninController -> BigbankInternetBankingSystemApiApplication.SecurityComponent: "Uses"
BigbankInternetBankingSystemApiApplication.AccountsSummaryController -> BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade: "Uses"
BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade -> BigbankMainframe: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystemApiApplication.ResetPasswordController -> BigbankInternetBankingSystemApiApplication.EmailComponent: "Uses"
BigbankInternetBankingSystemApiApplication.ResetPasswordController -> BigbankInternetBankingSystemApiApplication.SecurityComponent: "Uses"
BigbankInternetBankingSystemApiApplication.SecurityComponent -> BigbankInternetBankingSystemDatabase: "Reads from and writes to\\r\\n[SQL/TCPS]"
BigbankInternetBankingSystemApiApplication.EmailComponent -> BigbankEmail: "Sends e-mail using"
`;case"index":return`direction: down

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
BigbankInternetBankingSystem.MobileApp -> BigbankInternetBankingSystem.ApiApplication: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystem.WebApplication -> BigbankInternetBankingSystem.SinglePageApplication: "Delivers to the customer's web browser"
BigbankInternetBankingSystem.SinglePageApplication -> BigbankInternetBankingSystem.ApiApplication: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankInternetBankingSystem.ApiApplication -> BigbankInternetBankingSystem.Database: "Reads from and writes to\\r\\n[SQL/TCPS]"
BigbankInternetBankingSystem.ApiApplication -> BigbankEmail: "Sends e-mail using"
BigbankInternetBankingSystem.ApiApplication -> BigbankMainframe: "Makes API calls to\\r\\n[JSON/HTTPS]"
BigbankEmail -> Customer: "Sends e-mails to"
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
`;default:throw new Error("Unknown viewId: "+n)}}function e(n){switch(n){case"apiApp":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_apiapplication {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>API APPLICATION</B></FONT>>,
            likec4_depth=1,
            likec4_id="bigbank.internetBankingSystem.apiApplication",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        signincontroller [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group="bigbank.internetBankingSystem.apiApplication",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Sign In Controller</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring MVC Rest Controller</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows users to sign in to the Internet<BR/>Banking System.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.signinController",
            likec4_level=1,
            margin="0.362,0.362"];
        securitycomponent [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group="bigbank.internetBankingSystem.apiApplication",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Security Component</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring Bean</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides functionality related to signing in,<BR/>changing passwords, etc.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.securityComponent",
            likec4_level=1,
            margin="0.362,0.362"];
        signincontroller -> securitycomponent [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
            likec4_id="1iqjj2m",
            style=dashed,
            weight=5];
        accountssummarycontroller [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group="bigbank.internetBankingSystem.apiApplication",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Accounts Summary Controller</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring MVC Rest Controller</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides customers with a summary of their<BR/>bank accounts.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.accountsSummaryController",
            likec4_level=1,
            margin="0.362,0.362"];
        mainframebankingsystemfacade [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group="bigbank.internetBankingSystem.apiApplication",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Mainframe Banking System Facade</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring Bean</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">A facade onto the mainframe banking system.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.mainframeBankingSystemFacade",
            likec4_level=1,
            margin="0.362,0.362"];
        accountssummarycontroller -> mainframebankingsystemfacade [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
            likec4_id="1xg4i6k",
            style=dashed,
            weight=4];
        resetpasswordcontroller [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group="bigbank.internetBankingSystem.apiApplication",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Reset Password Controller</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring MVC Rest Controller</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows users to reset their passwords with a<BR/>single use URL.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.resetPasswordController",
            likec4_level=1,
            margin="0.362,0.362"];
        resetpasswordcontroller -> securitycomponent [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
            likec4_id="6w5mmo",
            style=dashed,
            weight=6];
        emailcomponent [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group="bigbank.internetBankingSystem.apiApplication",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">E-mail Component</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring Bean</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Sends e-mails to users.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.emailComponent",
            likec4_level=1,
            margin="0.362,0.362"];
        resetpasswordcontroller -> emailcomponent [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
            likec4_id="7ntjt6",
            style=dashed,
            weight=5];
    }
    singlepageapplication [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Single-Page Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">JavaScript and Angular</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides all of the Internet banking<BR/>functionality to customers via their web<BR/>browser.</FONT></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.singlePageApplication",
        likec4_level=0,
        margin="0.417,0.445"];
    singlepageapplication -> signincontroller [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id=nrlm88,
        style=dashed,
        weight=5];
    singlepageapplication -> accountssummarycontroller [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id="5k7c1u",
        style=dashed,
        weight=5];
    singlepageapplication -> resetpasswordcontroller [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id="1oy61rq",
        style=dashed,
        weight=6];
    mobileapp [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Mobile App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Xamarin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides a limited subset of the Internet<BR/>banking functionality to customers via their<BR/>mobile device.</FONT></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.mobileApp",
        likec4_level=0,
        margin="0.417,0.362"];
    mobileapp -> signincontroller [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id="1szuce2",
        style=dashed,
        weight=5];
    mobileapp -> accountssummarycontroller [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id="18333sg",
        style=dashed,
        weight=5];
    mobileapp -> resetpasswordcontroller [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id=cwfwuc,
        style=dashed,
        weight=6];
    mainframe [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Mainframe Banking System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Stores all of the core banking information<BR/>about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE>>,
        likec4_id="bigbank.mainframe",
        likec4_level=0,
        margin="0.362,0.362"];
    database [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Oracle Database Schema</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Stores user registration information, hashed<BR/>authentication credentials, access logs, etc.</FONT></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.database",
        likec4_level=0,
        margin="0.362,0",
        penwidth=2,
        shape=cylinder];
    email [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">E-mail System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">The internal Microsoft Exchange e-mail<BR/>system.</FONT></TD></TR></TABLE>>,
        likec4_id="bigbank.email",
        likec4_level=0,
        margin="0.362,0.362"];
    mainframebankingsystemfacade -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id=k8jbk2,
        minlen=1,
        style=dashed,
        weight=2];
    securitycomponent -> database [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Reads from and writes to<BR/>[SQL/TCPS]</FONT></TD></TR></TABLE>>,
        likec4_id="1dpqi3z",
        minlen=1,
        style=dashed,
        weight=3];
    emailcomponent -> email [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mail using</FONT></TD></TR></TABLE>>,
        likec4_id=x0ueay,
        minlen=1,
        style=dashed,
        weight=2];
}
`;case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_bigbank {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BIG BANK PLC</B></FONT>>,
            likec4_depth=1,
            likec4_id=bigbank,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        email [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">E-mail System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">The internal Microsoft Exchange e-mail<BR/>system.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.email",
            likec4_level=1,
            margin="0.362,0.362"];
        atm [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">ATM</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows customers to withdraw cash.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.atm",
            likec4_level=1,
            margin="0.362,0.362"];
        mainframe [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Mainframe Banking System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Stores all of the core banking information<BR/>about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.mainframe",
            likec4_level=1,
            margin="0.362,0.362"];
        atm -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
            likec4_id=fa47bl,
            style=dashed,
            weight=5];
        internetbankingsystem [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Internet Banking System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows customers to view information about<BR/>their bank accounts, and make payments.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem",
            likec4_level=1,
            margin="0.362,0.362"];
        internetbankingsystem -> email [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mail using</FONT></TD></TR></TABLE>>,
            likec4_id=zfsp6z,
            style=dashed,
            weight=4];
        internetbankingsystem -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Gets account information from, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
            likec4_id=j4eea9,
            style=dashed,
            weight=6];
        backoffice [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Back Office Staff</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Administration and support staff within the<BR/>bank.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.backoffice",
            likec4_level=1,
            margin="0.362,0.362"];
        backoffice -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
            likec4_id=pwy7fm,
            minlen=1,
            style=dashed,
            weight=4];
        supportstaff [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Customer Service Staff</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Customer service staff within the bank.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.supportStaff",
            likec4_level=1,
            margin="0.362,0.362"];
        supportstaff -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
            likec4_id="1tweujk",
            style=dashed,
            weight=5];
    }
    customer [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Personal Banking Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">A customer of the bank, with personal bank<BR/>accounts.</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.362,0.362"];
    customer -> atm [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Withdraws cash using</FONT></TD></TR></TABLE>>,
        likec4_id=n2lt5z,
        style=dashed,
        weight=5];
    customer -> internetbankingsystem [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Views account balances, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
        likec4_id="1j0lh9j",
        style=dashed,
        weight=6];
    customer -> supportstaff [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Asks questions to</FONT></TD></TR></TABLE>>,
        likec4_id="1mcja1i",
        style=dashed,
        weight=5];
    email -> customer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mails to</FONT></TD></TR></TABLE>>,
        likec4_id="10xy9f7",
        style=dashed,
        weight=5];
}
`;case"support":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_bigbank {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BIG BANK PLC</B></FONT>>,
            likec4_depth=1,
            likec4_id=bigbank,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        backoffice [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Back Office Staff</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Administration and support staff within the<BR/>bank.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.backoffice",
            likec4_level=1,
            margin="0.362,0.362"];
        mainframe [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Mainframe Banking System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Stores all of the core banking information<BR/>about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.mainframe",
            likec4_level=1,
            margin="0.362,0.362"];
        backoffice -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
            likec4_id=pwy7fm,
            minlen=1,
            style=dashed,
            weight=2];
        supportstaff [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Customer Service Staff</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Customer service staff within the bank.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.supportStaff",
            likec4_level=1,
            margin="0.362,0.362"];
        supportstaff -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
            likec4_id="1tweujk",
            style=dashed,
            weight=3];
    }
    customer [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Personal Banking Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">A customer of the bank, with personal bank<BR/>accounts.</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.362,0.362"];
    customer -> supportstaff [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Asks questions to</FONT></TD></TR></TABLE>>,
        likec4_id="1mcja1i",
        style=dashed,
        weight=2];
    mainframe -> customer [likec4_id="33386p",
        ltail=cluster_bigbank,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mails to</FONT></TD></TR></TABLE>>];
}
`;case"ibsContainers":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_internetbankingsystem {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>INTERNET BANKING SYSTEM</B></FONT>>,
            likec4_depth=1,
            likec4_id="bigbank.internetBankingSystem",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        mobileapp [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group="bigbank.internetBankingSystem",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Mobile App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Xamarin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides a limited subset of the Internet<BR/>banking functionality to customers via their<BR/>mobile device.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.mobileApp",
            likec4_level=1,
            margin="0.417,0.362"];
        apiapplication [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group="bigbank.internetBankingSystem",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">API Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Java and Spring MVC</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides Internet banking functionality via a<BR/>JSON/HTTPS API.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication",
            likec4_level=1,
            margin="0.362,0.362"];
        mobileapp -> apiapplication [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
            likec4_id=v4tn4s,
            style=dashed,
            weight=6];
        webapplication [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group="bigbank.internetBankingSystem",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Web Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Java and Spring MVC</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Delivers the static content and the Internet<BR/>banking single page application.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.webApplication",
            likec4_level=1,
            margin="0.362,0.362"];
        singlepageapplication [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group="bigbank.internetBankingSystem",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Single-Page Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">JavaScript and Angular</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides all of the Internet banking<BR/>functionality to customers via their web<BR/>browser.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.singlePageApplication",
            likec4_level=1,
            margin="0.417,0.445"];
        webapplication -> singlepageapplication [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Delivers to the customer's web browser</FONT></TD></TR></TABLE>>,
            likec4_id="1ifs57q",
            style=dashed,
            weight=4];
        singlepageapplication -> apiapplication [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
            likec4_id="14xhcj2",
            style=dashed,
            weight=7];
        database [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group="bigbank.internetBankingSystem",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Oracle Database Schema</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Stores user registration information, hashed<BR/>authentication credentials, access logs, etc.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.database",
            likec4_level=1,
            margin="0.362,0",
            penwidth=2,
            shape=cylinder];
        apiapplication -> database [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Reads from and writes to<BR/>[SQL/TCPS]</FONT></TD></TR></TABLE>>,
            likec4_id=lo2y3c,
            minlen=1,
            style=dashed,
            weight=5];
    }
    customer [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Personal Banking Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">A customer of the bank, with personal bank<BR/>accounts.</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.362,0.362"];
    customer -> mobileapp [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Views account balances, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
        likec4_id="13xemi0",
        style=dashed,
        weight=5];
    customer -> webapplication [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Visits bigbank.com using HTTPS</FONT></TD></TR></TABLE>>,
        likec4_id=pgp8mb,
        style=dashed,
        weight=5];
    customer -> singlepageapplication [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Views account balances, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
        likec4_id="1p41l0a",
        style=dashed,
        weight=6];
    mainframe [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Mainframe Banking System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Stores all of the core banking information<BR/>about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE>>,
        likec4_id="bigbank.mainframe",
        likec4_level=0,
        margin="0.362,0.362"];
    email [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">E-mail System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">The internal Microsoft Exchange e-mail<BR/>system.</FONT></TD></TR></TABLE>>,
        likec4_id="bigbank.email",
        likec4_level=0,
        margin="0.362,0.362"];
    email -> customer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mails to</FONT></TD></TR></TABLE>>,
        likec4_id="10xy9f7",
        minlen=0,
        style=dashed,
        weight=5];
    apiapplication -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id=dw7svx,
        minlen=1,
        style=dashed,
        weight=5];
    apiapplication -> email [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mail using</FONT></TD></TR></TABLE>>,
        likec4_id=stfpuv,
        style=dashed,
        weight=6];
}
`;case"context":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_bigbank {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BIG BANK PLC</B></FONT>>,
            likec4_depth=1,
            likec4_id=bigbank,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        internetbankingsystem [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Internet Banking System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows customers to view information about<BR/>their bank accounts, and make payments.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem",
            likec4_level=1,
            margin="0.362,0.362"];
        email [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">E-mail System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">The internal Microsoft Exchange e-mail<BR/>system.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.email",
            likec4_level=1,
            margin="0.362,0.362"];
        internetbankingsystem -> email [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mail using</FONT></TD></TR></TABLE>>,
            likec4_id=zfsp6z,
            style=dashed,
            weight=4];
        mainframe [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=bigbank,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Mainframe Banking System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Stores all of the core banking information<BR/>about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.mainframe",
            likec4_level=1,
            margin="0.362,0.362"];
        internetbankingsystem -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Gets account information from, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
            likec4_id=j4eea9,
            minlen=1,
            style=dashed,
            weight=3];
    }
    customer [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Personal Banking Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">A customer of the bank, with personal bank<BR/>accounts.</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.362,0.362"];
    customer -> internetbankingsystem [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Views account balances, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
        likec4_id="1j0lh9j",
        style=dashed,
        weight=4];
    email -> customer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mails to</FONT></TD></TR></TABLE>>,
        likec4_id="10xy9f7",
        style=dashed,
        weight=3];
}
`;case"customer":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_bigbank {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BIG BANK PLC</B></FONT>>,
            likec4_depth=1,
            likec4_id=bigbank,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        singlepageapplication [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Single-Page Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">JavaScript and Angular</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides all of the Internet banking<BR/>functionality to customers via their web<BR/>browser.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.singlePageApplication",
            likec4_level=1,
            margin="0.417,0.445"];
        mobileapp [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Mobile App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Xamarin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides a limited subset of the Internet<BR/>banking functionality to customers via their<BR/>mobile device.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.mobileApp",
            likec4_level=1,
            margin="0.417,0.362"];
        supportstaff [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Customer Service Staff</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Customer service staff within the bank.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.supportStaff",
            likec4_level=1,
            margin="0.362,0.362"];
        atm [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">ATM</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows customers to withdraw cash.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.atm",
            likec4_level=1,
            margin="0.362,0.362"];
    }
    customer [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Personal Banking Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">A customer of the bank, with personal bank<BR/>accounts.</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.362,0.362"];
    customer -> singlepageapplication [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Views account balances, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
        likec4_id="1p41l0a",
        minlen=1,
        style=dashed,
        weight=4];
    customer -> mobileapp [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Views account balances, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
        likec4_id="13xemi0",
        minlen=1,
        style=dashed,
        weight=4];
    customer -> supportstaff [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Asks questions to</FONT></TD></TR></TABLE>>,
        likec4_id="1mcja1i",
        minlen=1,
        style=dashed,
        weight=4];
    customer -> atm [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Withdraws cash using</FONT></TD></TR></TABLE>>,
        likec4_id=n2lt5z,
        style=dashed,
        weight=4];
    atm -> customer [likec4_id="33386p",
        ltail=cluster_bigbank,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mails to</FONT></TD></TR></TABLE>>];
}
`;default:throw new Error("Unknown viewId: "+n)}}function i(n){switch(n){case"apiApp":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1365pt" height="1221pt"
 viewBox="0.00 0.00 1365.10 1221.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1206.25)">
<g id="clust1" class="cluster">
<title>cluster_apiapplication</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-299.6 8,-903.6 1327,-903.6 1327,-299.6 8,-299.6"/>
<text text-anchor="start" x="16" y="-890.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">API APPLICATION</text>
</g>
<!-- signincontroller -->
<g id="node1" class="node">
<title>signincontroller</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="841.02,-842.4 520.98,-842.4 520.98,-662.4 841.02,-662.4 841.02,-842.4"/>
<text text-anchor="start" x="607.6" y="-776.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Sign In Controller</text>
<text text-anchor="start" x="606.98" y="-754.2" font-family="Arial" font-size="12.00" fill="#bfdbfe">Spring MVC Rest Controller</text>
<text text-anchor="start" x="566.61" y="-732" font-family="Arial" font-size="14.00" fill="#bfdbfe">Allows users to sign in to the Internet</text>
<text text-anchor="start" x="628.48" y="-715.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">Banking System.</text>
</g>
<!-- securitycomponent -->
<g id="node2" class="node">
<title>securitycomponent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="848.8,-519.6 523.2,-519.6 523.2,-339.6 848.8,-339.6 848.8,-519.6"/>
<text text-anchor="start" x="599.93" y="-453.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Security Component</text>
<text text-anchor="start" x="652.98" y="-431.4" font-family="Arial" font-size="12.00" fill="#bfdbfe">Spring Bean</text>
<text text-anchor="start" x="555.26" y="-409.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">Provides functionality related to signing in,</text>
<text text-anchor="start" x="607.01" y="-392.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">changing passwords, etc.</text>
</g>
<!-- accountssummarycontroller -->
<g id="node3" class="node">
<title>accountssummarycontroller</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="398.83,-842.4 63.17,-842.4 63.17,-662.4 398.83,-662.4 398.83,-842.4"/>
<text text-anchor="start" x="104.82" y="-776.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Accounts Summary Controller</text>
<text text-anchor="start" x="156.98" y="-754.2" font-family="Arial" font-size="12.00" fill="#bfdbfe">Spring MVC Rest Controller</text>
<text text-anchor="start" x="95.23" y="-732" font-family="Arial" font-size="14.00" fill="#bfdbfe">Provides customers with a summary of their</text>
<text text-anchor="start" x="183.91" y="-715.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">bank accounts.</text>
</g>
<!-- mainframebankingsystemfacade -->
<g id="node4" class="node">
<title>mainframebankingsystemfacade</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="413.55,-519.6 48.45,-519.6 48.45,-339.6 413.55,-339.6 413.55,-519.6"/>
<text text-anchor="start" x="80.52" y="-445.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Mainframe Banking System Facade</text>
<text text-anchor="start" x="197.98" y="-423" font-family="Arial" font-size="12.00" fill="#bfdbfe">Spring Bean</text>
<text text-anchor="start" x="88.59" y="-400.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">A facade onto the mainframe banking system.</text>
</g>
<!-- resetpasswordcontroller -->
<g id="node5" class="node">
<title>resetpasswordcontroller</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1286.84,-842.4 951.16,-842.4 951.16,-662.4 1286.84,-662.4 1286.84,-842.4"/>
<text text-anchor="start" x="1006.01" y="-776.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Reset Password Controller</text>
<text text-anchor="start" x="1044.98" y="-754.2" font-family="Arial" font-size="12.00" fill="#bfdbfe">Spring MVC Rest Controller</text>
<text text-anchor="start" x="983.22" y="-732" font-family="Arial" font-size="14.00" fill="#bfdbfe">Allows users to reset their passwords with a</text>
<text text-anchor="start" x="1069.59" y="-715.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">single use URL.</text>
</g>
<!-- emailcomponent -->
<g id="node6" class="node">
<title>emailcomponent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1279.02,-519.6 958.98,-519.6 958.98,-339.6 1279.02,-339.6 1279.02,-519.6"/>
<text text-anchor="start" x="1040.33" y="-445.5" font-family="Arial" font-size="19.00" fill="#eff6ff">E&#45;mail Component</text>
<text text-anchor="start" x="1085.98" y="-423" font-family="Arial" font-size="12.00" fill="#bfdbfe">Spring Bean</text>
<text text-anchor="start" x="1045.86" y="-400.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">Sends e&#45;mails to users.</text>
</g>
<!-- singlepageapplication -->
<g id="node7" class="node">
<title>singlepageapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1155.02,-1191.2 834.98,-1191.2 834.98,-1011.2 1155.02,-1011.2 1155.02,-1191.2"/>
<text text-anchor="start" x="894.13" y="-1133.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Single&#45;Page Application</text>
<text text-anchor="start" x="932.96" y="-1111.4" font-family="Arial" font-size="12.00" fill="#bfdbfe">JavaScript and Angular</text>
<text text-anchor="start" x="887.21" y="-1089.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">Provides all of the Internet banking</text>
<text text-anchor="start" x="874.78" y="-1072.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">functionality to customers via their web</text>
<text text-anchor="start" x="968.16" y="-1055.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">browser.</text>
</g>
<!-- mobileapp -->
<g id="node8" class="node">
<title>mobileapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="724.92,-1191.2 389.08,-1191.2 389.08,-1011.2 724.92,-1011.2 724.92,-1191.2"/>
<text text-anchor="start" x="509.47" y="-1133.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Mobile App</text>
<text text-anchor="start" x="534.66" y="-1111.4" font-family="Arial" font-size="12.00" fill="#bfdbfe">Xamarin</text>
<text text-anchor="start" x="434.05" y="-1089.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">Provides a limited subset of the Internet</text>
<text text-anchor="start" x="425.1" y="-1072.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">banking functionality to customers via their</text>
<text text-anchor="start" x="512.26" y="-1055.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">mobile device.</text>
</g>
<!-- mainframe -->
<g id="node9" class="node">
<title>mainframe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="403.52,-180 58.48,-180 58.48,0 403.52,0 403.52,-180"/>
<text text-anchor="start" x="114.84" y="-104.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Mainframe Banking System</text>
<text text-anchor="start" x="103.76" y="-79.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">Stores all of the core banking information</text>
<text text-anchor="start" x="90.54" y="-63" font-family="Arial" font-size="14.00" fill="#bfdbfe">about customers, accounts, transactions, etc.</text>
</g>
<!-- database -->
<g id="node10" class="node">
<title>database</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M853.86,-163.64C853.86,-172.67 778.62,-180 686,-180 593.38,-180 518.14,-172.67 518.14,-163.64 518.14,-163.64 518.14,-16.36 518.14,-16.36 518.14,-7.33 593.38,0 686,0 778.62,0 853.86,-7.33 853.86,-16.36 853.86,-16.36 853.86,-163.64 853.86,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M853.86,-163.64C853.86,-154.61 778.62,-147.27 686,-147.27 593.38,-147.27 518.14,-154.61 518.14,-163.64"/>
<text text-anchor="start" x="645.33" y="-114.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Database</text>
<text text-anchor="start" x="617.3" y="-91.8" font-family="Arial" font-size="12.00" fill="#bfdbfe">Oracle Database Schema</text>
<text text-anchor="start" x="550.21" y="-69.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">Stores user registration information, hashed</text>
<text text-anchor="start" x="550.98" y="-52.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">authentication credentials, access logs, etc.</text>
</g>
<!-- email -->
<g id="node11" class="node">
<title>email</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1284.02,-180 963.98,-180 963.98,0 1284.02,0 1284.02,-180"/>
<text text-anchor="start" x="1062.77" y="-104.1" font-family="Arial" font-size="19.00" fill="#eff6ff">E&#45;mail System</text>
<text text-anchor="start" x="1002.61" y="-79.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="1099.89" y="-63" font-family="Arial" font-size="14.00" fill="#bfdbfe">system.</text>
</g>
<!-- signincontroller&#45;&gt;securitycomponent -->
<g id="edge1" class="edge">
<title>signincontroller&#45;&gt;securitycomponent</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M682.39,-662.47C683.03,-621.27 683.79,-572.16 684.45,-529.77"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="687.08,-530 684.57,-522.46 681.83,-529.91 687.08,-530"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="683.65,-579.6 683.65,-602.4 721.55,-602.4 721.55,-579.6 683.65,-579.6"/>
<text text-anchor="start" x="686.65" y="-586.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- securitycomponent&#45;&gt;database -->
<g id="edge12" class="edge">
<title>securitycomponent&#45;&gt;database</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M686,-339.9C686,-294.22 686,-238.34 686,-191.12"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="688.63,-191.39 686,-183.89 683.38,-191.4 688.63,-191.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="686,-240 686,-279.6 847.62,-279.6 847.62,-240 686,-240"/>
<text text-anchor="start" x="689" y="-264" font-family="Arial" font-size="14.00" fill="#c6c6c6">Reads from and writes to</text>
<text text-anchor="start" x="689" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">[SQL/TCPS]</text>
</g>
<!-- accountssummarycontroller&#45;&gt;mainframebankingsystemfacade -->
<g id="edge2" class="edge">
<title>accountssummarycontroller&#45;&gt;mainframebankingsystemfacade</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M231,-662.47C231,-621.27 231,-572.16 231,-529.77"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="233.63,-529.96 231,-522.46 228.38,-529.96 233.63,-529.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="231,-579.6 231,-602.4 268.9,-602.4 268.9,-579.6 231,-579.6"/>
<text text-anchor="start" x="234" y="-586.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- mainframebankingsystemfacade&#45;&gt;mainframe -->
<g id="edge11" class="edge">
<title>mainframebankingsystemfacade&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M231,-339.9C231,-293.94 231,-237.67 231,-190.27"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="233.63,-190.51 231,-183.01 228.38,-190.51 233.63,-190.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="231,-240 231,-279.6 352.15,-279.6 352.15,-240 231,-240"/>
<text text-anchor="start" x="234" y="-264" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="234" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- resetpasswordcontroller&#45;&gt;securitycomponent -->
<g id="edge3" class="edge">
<title>resetpasswordcontroller&#45;&gt;securitycomponent</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M998.96,-662.47C941.47,-619.87 872.58,-568.83 814.08,-525.49"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="815.92,-523.59 808.33,-521.23 812.79,-527.81 815.92,-523.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="915.48,-579.6 915.48,-602.4 953.38,-602.4 953.38,-579.6 915.48,-579.6"/>
<text text-anchor="start" x="918.48" y="-586.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- resetpasswordcontroller&#45;&gt;emailcomponent -->
<g id="edge4" class="edge">
<title>resetpasswordcontroller&#45;&gt;emailcomponent</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1119,-662.47C1119,-621.27 1119,-572.16 1119,-529.77"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1121.63,-529.96 1119,-522.46 1116.38,-529.96 1121.63,-529.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1119,-579.6 1119,-602.4 1156.9,-602.4 1156.9,-579.6 1119,-579.6"/>
<text text-anchor="start" x="1122" y="-586.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- emailcomponent&#45;&gt;email -->
<g id="edge13" class="edge">
<title>emailcomponent&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1120.31,-339.9C1120.99,-293.94 1121.83,-237.67 1122.53,-190.27"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1125.15,-190.55 1122.64,-183.01 1119.9,-190.47 1125.15,-190.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1121.65,-248.4 1121.65,-271.2 1246.71,-271.2 1246.71,-248.4 1121.65,-248.4"/>
<text text-anchor="start" x="1124.65" y="-255.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- singlepageapplication&#45;&gt;signincontroller -->
<g id="edge5" class="edge">
<title>singlepageapplication&#45;&gt;signincontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M836.57,-1011.41C812.64,-993.54 789.7,-973.35 770.85,-951.2 746.27,-922.32 727.13,-885.62 712.96,-851.69"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="715.5,-850.96 710.24,-845 710.64,-852.94 715.5,-850.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="770.85,-911.6 770.85,-951.2 892,-951.2 892,-911.6 770.85,-911.6"/>
<text text-anchor="start" x="773.85" y="-935.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="773.85" y="-918.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- singlepageapplication&#45;&gt;accountssummarycontroller -->
<g id="edge6" class="edge">
<title>singlepageapplication&#45;&gt;accountssummarycontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M835.08,-1029.02C816.72,-1022.35 798.1,-1016.22 780,-1011.2 605.85,-962.95 532.83,-1044.13 377.85,-951.2 337.95,-927.28 305.45,-887.97 281.25,-850.68"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="283.77,-849.74 277.53,-844.81 279.33,-852.55 283.77,-849.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="377.85,-911.6 377.85,-951.2 499,-951.2 499,-911.6 377.85,-911.6"/>
<text text-anchor="start" x="380.85" y="-935.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="380.85" y="-918.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- singlepageapplication&#45;&gt;resetpasswordcontroller -->
<g id="edge7" class="edge">
<title>singlepageapplication&#45;&gt;resetpasswordcontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1111.1,-1011.25C1127.34,-993.25 1141.65,-973.07 1151,-951.2 1164.2,-920.33 1162.9,-884.62 1156.16,-852.11"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1158.78,-851.82 1154.57,-845.09 1153.66,-852.98 1158.78,-851.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1160.17,-911.6 1160.17,-951.2 1281.32,-951.2 1281.32,-911.6 1160.17,-911.6"/>
<text text-anchor="start" x="1163.17" y="-935.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="1163.17" y="-918.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- mobileapp&#45;&gt;signincontroller -->
<g id="edge8" class="edge">
<title>mobileapp&#45;&gt;signincontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M529.3,-1011.56C523.63,-979.22 522.6,-942.92 534.85,-911.6 543.43,-889.66 556.64,-868.94 571.68,-850.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="573.55,-852.03 576.3,-844.57 569.5,-848.68 573.55,-852.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="534.85,-911.6 534.85,-951.2 656,-951.2 656,-911.6 534.85,-911.6"/>
<text text-anchor="start" x="537.85" y="-935.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="537.85" y="-918.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- mobileapp&#45;&gt;accountssummarycontroller -->
<g id="edge9" class="edge">
<title>mobileapp&#45;&gt;accountssummarycontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M389.12,-1071.57C261.91,-1046.05 102.46,-1004.52 62.85,-951.2 37.42,-916.98 53.75,-881.04 84.44,-849.32"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="86,-851.47 89.48,-844.33 82.31,-847.74 86,-851.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="62.85,-911.6 62.85,-951.2 184,-951.2 184,-911.6 62.85,-911.6"/>
<text text-anchor="start" x="65.85" y="-935.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="65.85" y="-918.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- mobileapp&#45;&gt;resetpasswordcontroller -->
<g id="edge10" class="edge">
<title>mobileapp&#45;&gt;resetpasswordcontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M724.5,-1033.78C808.9,-999.71 897.15,-962.95 915,-951.2 958.08,-922.84 1000.01,-884.65 1034.53,-849.39"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1036.33,-851.29 1039.67,-844.08 1032.57,-847.64 1036.33,-851.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="964.72,-911.6 964.72,-951.2 1085.87,-951.2 1085.87,-911.6 964.72,-911.6"/>
<text text-anchor="start" x="967.72" y="-935.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="967.72" y="-918.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
</g>
</svg>
`;case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1907pt" height="946pt"
 viewBox="0.00 0.00 1906.58 946.50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 931.45)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-628.8 1714,-628.8 1714,-8 8,-8"/>
<text text-anchor="start" x="16" y="-615.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<!-- email -->
<g id="node1" class="node">
<title>email</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1668.02,-228 1347.98,-228 1347.98,-48 1668.02,-48 1668.02,-228"/>
<text text-anchor="start" x="1446.77" y="-152.1" font-family="Arial" font-size="19.00" fill="#eff6ff">E&#45;mail System</text>
<text text-anchor="start" x="1386.61" y="-127.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="1483.89" y="-111" font-family="Arial" font-size="14.00" fill="#bfdbfe">system.</text>
</g>
<!-- atm -->
<g id="node2" class="node">
<title>atm</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-567.6 47.98,-567.6 47.98,-387.6 368.02,-387.6 368.02,-567.6"/>
<text text-anchor="start" x="187.95" y="-483.3" font-family="Arial" font-size="19.00" fill="#eff6ff">ATM</text>
<text text-anchor="start" x="97.52" y="-459" font-family="Arial" font-size="14.00" fill="#bfdbfe">Allows customers to withdraw cash.</text>
</g>
<!-- mainframe -->
<g id="node3" class="node">
<title>mainframe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1142.52,-228 797.48,-228 797.48,-48 1142.52,-48 1142.52,-228"/>
<text text-anchor="start" x="853.84" y="-152.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Mainframe Banking System</text>
<text text-anchor="start" x="842.76" y="-127.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">Stores all of the core banking information</text>
<text text-anchor="start" x="829.54" y="-111" font-family="Arial" font-size="14.00" fill="#bfdbfe">about customers, accounts, transactions, etc.</text>
</g>
<!-- internetbankingsystem -->
<g id="node4" class="node">
<title>internetbankingsystem</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1674.29,-567.6 1341.71,-567.6 1341.71,-387.6 1674.29,-387.6 1674.29,-567.6"/>
<text text-anchor="start" x="1404.5" y="-491.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Internet Banking System</text>
<text text-anchor="start" x="1373.78" y="-467.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">Allows customers to view information about</text>
<text text-anchor="start" x="1378.43" y="-450.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">their bank accounts, and make payments.</text>
</g>
<!-- backoffice -->
<g id="node5" class="node">
<title>backoffice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="802.02,-567.6 477.98,-567.6 477.98,-387.6 802.02,-387.6 802.02,-567.6"/>
<text text-anchor="start" x="569.25" y="-491.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Back Office Staff</text>
<text text-anchor="start" x="510.04" y="-467.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">Administration and support staff within the</text>
<text text-anchor="start" x="622.88" y="-450.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">bank.</text>
</g>
<!-- supportstaff -->
<g id="node6" class="node">
<title>supportstaff</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1232.02,-567.6 911.98,-567.6 911.98,-387.6 1232.02,-387.6 1232.02,-567.6"/>
<text text-anchor="start" x="974.33" y="-483.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer Service Staff</text>
<text text-anchor="start" x="951.78" y="-459" font-family="Arial" font-size="14.00" fill="#bfdbfe">Customer service staff within the bank.</text>
</g>
<!-- customer -->
<g id="node7" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1674.3,-916.4 1341.7,-916.4 1341.7,-736.4 1674.3,-736.4 1674.3,-916.4"/>
<text text-anchor="start" x="1389.72" y="-840.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Personal Banking Customer</text>
<text text-anchor="start" x="1373.76" y="-816.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="1478.04" y="-799.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">accounts.</text>
</g>
<!-- email&#45;&gt;customer -->
<g id="edge9" class="edge">
<title>email&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1604.11,-227.75C1623.32,-246.98 1642.85,-267.66 1660,-288 1694.72,-329.17 1709.1,-337.56 1729,-387.6 1770.41,-491.7 1758.53,-525.08 1767,-636.8 1768.33,-654.35 1775.81,-661.16 1767,-676.4 1747.25,-710.55 1716.37,-737.56 1682.72,-758.66"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1681.74,-756.18 1676.7,-762.33 1684.47,-760.67 1681.74,-756.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1766.22,-466.2 1766.22,-489 1876.49,-489 1876.49,-466.2 1766.22,-466.2"/>
<text text-anchor="start" x="1769.22" y="-473.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
<!-- atm&#45;&gt;mainframe -->
<g id="edge1" class="edge">
<title>atm&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M367.74,-405.83C490.46,-351.46 660.06,-276.32 788.02,-219.63"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="788.98,-222.07 794.78,-216.63 786.86,-217.27 788.98,-222.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="611.85,-296.4 611.85,-319.2 649.74,-319.2 649.74,-296.4 611.85,-296.4"/>
<text text-anchor="start" x="614.85" y="-303.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- internetbankingsystem&#45;&gt;email -->
<g id="edge2" class="edge">
<title>internetbankingsystem&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1508,-387.9C1508,-341.94 1508,-285.67 1508,-238.27"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1510.63,-238.51 1508,-231.01 1505.38,-238.51 1510.63,-238.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1508,-296.4 1508,-319.2 1633.06,-319.2 1633.06,-296.4 1508,-296.4"/>
<text text-anchor="start" x="1511" y="-303.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- internetbankingsystem&#45;&gt;mainframe -->
<g id="edge3" class="edge">
<title>internetbankingsystem&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1341.91,-400.48C1298.43,-378.6 1252.25,-353.58 1211.21,-327.6 1167.32,-299.81 1121.78,-265.75 1082.26,-234.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1084.29,-232.52 1076.8,-229.89 1081.01,-236.62 1084.29,-232.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1211.21,-288 1211.21,-327.6 1481,-327.6 1481,-288 1211.21,-288"/>
<text text-anchor="start" x="1214.21" y="-312" font-family="Arial" font-size="14.00" fill="#c6c6c6">Gets account information from, and makes</text>
<text text-anchor="start" x="1214.21" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
<!-- backoffice&#45;&gt;mainframe -->
<g id="edge4" class="edge">
<title>backoffice&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M726.7,-387.9C772.57,-340.98 828.94,-283.31 875.87,-235.3"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="877.54,-237.35 880.9,-230.15 873.78,-233.68 877.54,-237.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="814.89,-296.4 814.89,-319.2 852.79,-319.2 852.79,-296.4 814.89,-296.4"/>
<text text-anchor="start" x="817.89" y="-303.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- supportstaff&#45;&gt;mainframe -->
<g id="edge5" class="edge">
<title>supportstaff&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M981.96,-387.95C968.08,-369.41 955.82,-348.96 948.1,-327.6 937.93,-299.45 937.73,-267.55 941.7,-238.09"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="944.28,-238.59 942.82,-230.78 939.09,-237.8 944.28,-238.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="948.1,-296.4 948.1,-319.2 986,-319.2 986,-296.4 948.1,-296.4"/>
<text text-anchor="start" x="951.1" y="-303.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- customer&#45;&gt;atm -->
<g id="edge6" class="edge">
<title>customer&#45;&gt;atm</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1341.88,-817.35C1123.49,-801.9 731.39,-757.2 423,-628.8 389,-614.64 355.01,-594.43 324.44,-573.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="326.04,-571.33 318.39,-569.2 323.04,-575.64 326.04,-571.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="534.63,-645.2 534.63,-668 676.79,-668 676.79,-645.2 534.63,-645.2"/>
<text text-anchor="start" x="537.63" y="-652.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Withdraws cash using</text>
</g>
<!-- customer&#45;&gt;internetbankingsystem -->
<g id="edge7" class="edge">
<title>customer&#45;&gt;internetbankingsystem</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1508,-736.54C1508,-688.11 1508,-628.03 1508,-578.04"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1510.63,-578.06 1508,-570.56 1505.38,-578.06 1510.63,-578.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1508,-636.8 1508,-676.4 1740.46,-676.4 1740.46,-636.8 1508,-636.8"/>
<text text-anchor="start" x="1511" y="-660.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="1511" y="-644" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;supportstaff -->
<g id="edge8" class="edge">
<title>customer&#45;&gt;supportstaff</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1396.29,-736.54C1333.74,-686.79 1255.74,-624.75 1191.91,-573.98"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1193.68,-572.03 1186.17,-569.41 1190.41,-576.14 1193.68,-572.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1316.1,-645.2 1316.1,-668 1431.83,-668 1431.83,-645.2 1316.1,-645.2"/>
<text text-anchor="start" x="1319.1" y="-652.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Asks questions to</text>
</g>
</g>
</svg>
`;case"support":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1025pt" height="913pt"
 viewBox="0.00 0.00 1024.70 912.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 897.85)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-612 842,-612 842,-8 8,-8"/>
<text text-anchor="start" x="16" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<!-- backoffice -->
<g id="node1" class="node">
<title>backoffice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="372.02,-550.8 47.98,-550.8 47.98,-370.8 372.02,-370.8 372.02,-550.8"/>
<text text-anchor="start" x="139.25" y="-474.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Back Office Staff</text>
<text text-anchor="start" x="80.04" y="-450.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">Administration and support staff within the</text>
<text text-anchor="start" x="192.88" y="-433.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">bank.</text>
</g>
<!-- mainframe -->
<g id="node2" class="node">
<title>mainframe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="801.52,-228 456.48,-228 456.48,-48 801.52,-48 801.52,-228"/>
<text text-anchor="start" x="512.84" y="-152.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Mainframe Banking System</text>
<text text-anchor="start" x="501.76" y="-127.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">Stores all of the core banking information</text>
<text text-anchor="start" x="488.54" y="-111" font-family="Arial" font-size="14.00" fill="#bfdbfe">about customers, accounts, transactions, etc.</text>
</g>
<!-- supportstaff -->
<g id="node3" class="node">
<title>supportstaff</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="802.02,-550.8 481.98,-550.8 481.98,-370.8 802.02,-370.8 802.02,-550.8"/>
<text text-anchor="start" x="544.33" y="-466.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer Service Staff</text>
<text text-anchor="start" x="521.78" y="-442.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">Customer service staff within the bank.</text>
</g>
<!-- customer -->
<g id="node4" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="808.3,-882.8 475.7,-882.8 475.7,-702.8 808.3,-702.8 808.3,-882.8"/>
<text text-anchor="start" x="523.72" y="-806.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Personal Banking Customer</text>
<text text-anchor="start" x="507.76" y="-782.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="612.04" y="-765.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">accounts.</text>
</g>
<!-- backoffice&#45;&gt;mainframe -->
<g id="edge1" class="edge">
<title>backoffice&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M326.16,-370.87C381.67,-328.36 448.18,-277.44 504.71,-234.16"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="506.22,-236.31 510.58,-229.67 503.02,-232.14 506.22,-236.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="432.06,-288 432.06,-310.8 469.96,-310.8 469.96,-288 432.06,-288"/>
<text text-anchor="start" x="435.06" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- mainframe&#45;&gt;customer -->
<g id="edge4" class="edge">
<title>mainframe&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M842,-339.89C847.64,-349.95 852.69,-360.26 857,-370.8 897.61,-470.01 902.39,-514.88 857,-612 842.14,-643.8 818.59,-671.95 792.42,-695.99"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="790.69,-694.01 786.85,-700.97 794.19,-697.92 790.69,-694.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="884.33,-537.41 884.33,-560.21 994.6,-560.21 994.6,-537.41 884.33,-537.41"/>
<text text-anchor="start" x="887.33" y="-544.61" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
<!-- supportstaff&#45;&gt;mainframe -->
<g id="edge2" class="edge">
<title>supportstaff&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M638.4,-370.87C636.73,-329.67 634.74,-280.56 633.02,-238.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="635.65,-238.24 632.72,-230.85 630.4,-238.45 635.65,-238.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="635.89,-288 635.89,-310.8 673.79,-310.8 673.79,-288 635.89,-288"/>
<text text-anchor="start" x="638.89" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- customer&#45;&gt;supportstaff -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;supportstaff</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M642,-702.93C642,-659.1 642,-606.08 642,-560.94"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="644.63,-561.07 642,-553.57 639.38,-561.07 644.63,-561.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="642,-620 642,-642.8 757.72,-642.8 757.72,-620 642,-620"/>
<text text-anchor="start" x="645" y="-627.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Asks questions to</text>
</g>
</g>
</svg>
`;case"ibsContainers":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1591pt" height="1609pt"
 viewBox="0.00 0.00 1590.64 1608.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1593.85)">
<g id="clust1" class="cluster">
<title>cluster_internetbankingsystem</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="286.02,-8 286.02,-1291.2 1175.02,-1291.2 1175.02,-8 286.02,-8"/>
<text text-anchor="start" x="294.02" y="-1278.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">INTERNET BANKING SYSTEM</text>
</g>
<!-- mobileapp -->
<g id="node1" class="node">
<title>mobileapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="661.94,-1230 326.1,-1230 326.1,-1050 661.94,-1050 661.94,-1230"/>
<text text-anchor="start" x="446.49" y="-1172.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Mobile App</text>
<text text-anchor="start" x="471.68" y="-1150.2" font-family="Arial" font-size="12.00" fill="#bfdbfe">Xamarin</text>
<text text-anchor="start" x="371.07" y="-1128" font-family="Arial" font-size="14.00" fill="#bfdbfe">Provides a limited subset of the Internet</text>
<text text-anchor="start" x="362.12" y="-1111.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">banking functionality to customers via their</text>
<text text-anchor="start" x="449.28" y="-1094.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">mobile device.</text>
</g>
<!-- apiapplication -->
<g id="node2" class="node">
<title>apiapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1052.11,-567.6 717.93,-567.6 717.93,-387.6 1052.11,-387.6 1052.11,-567.6"/>
<text text-anchor="start" x="820.59" y="-501.9" font-family="Arial" font-size="19.00" fill="#eff6ff">API Application</text>
<text text-anchor="start" x="826.66" y="-479.4" font-family="Arial" font-size="12.00" fill="#bfdbfe">Java and Spring MVC</text>
<text text-anchor="start" x="750" y="-457.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">Provides Internet banking functionality via a</text>
<text text-anchor="start" x="826.29" y="-440.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">JSON/HTTPS API.</text>
</g>
<!-- webapplication -->
<g id="node3" class="node">
<title>webapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1098.21,-1230 771.83,-1230 771.83,-1050 1098.21,-1050 1098.21,-1230"/>
<text text-anchor="start" x="866.37" y="-1164.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Web Application</text>
<text text-anchor="start" x="876.66" y="-1141.8" font-family="Arial" font-size="12.00" fill="#bfdbfe">Java and Spring MVC</text>
<text text-anchor="start" x="803.89" y="-1119.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">Delivers the static content and the Internet</text>
<text text-anchor="start" x="835.39" y="-1102.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">banking single page application.</text>
</g>
<!-- singlepageapplication -->
<g id="node4" class="node">
<title>singlepageapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1045.04,-907.2 725,-907.2 725,-727.2 1045.04,-727.2 1045.04,-907.2"/>
<text text-anchor="start" x="784.15" y="-849.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Single&#45;Page Application</text>
<text text-anchor="start" x="822.98" y="-827.4" font-family="Arial" font-size="12.00" fill="#bfdbfe">JavaScript and Angular</text>
<text text-anchor="start" x="777.23" y="-805.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">Provides all of the Internet banking</text>
<text text-anchor="start" x="764.8" y="-788.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">functionality to customers via their web</text>
<text text-anchor="start" x="858.18" y="-771.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">browser.</text>
</g>
<!-- database -->
<g id="node5" class="node">
<title>database</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1052.88,-211.64C1052.88,-220.67 977.64,-228 885.02,-228 792.4,-228 717.16,-220.67 717.16,-211.64 717.16,-211.64 717.16,-64.36 717.16,-64.36 717.16,-55.33 792.4,-48 885.02,-48 977.64,-48 1052.88,-55.33 1052.88,-64.36 1052.88,-64.36 1052.88,-211.64 1052.88,-211.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1052.88,-211.64C1052.88,-202.61 977.64,-195.27 885.02,-195.27 792.4,-195.27 717.16,-202.61 717.16,-211.64"/>
<text text-anchor="start" x="844.35" y="-162.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Database</text>
<text text-anchor="start" x="816.32" y="-139.8" font-family="Arial" font-size="12.00" fill="#bfdbfe">Oracle Database Schema</text>
<text text-anchor="start" x="749.23" y="-117.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">Stores user registration information, hashed</text>
<text text-anchor="start" x="750" y="-100.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">authentication credentials, access logs, etc.</text>
</g>
<!-- customer -->
<g id="node6" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1101.32,-1578.8 768.72,-1578.8 768.72,-1398.8 1101.32,-1398.8 1101.32,-1578.8"/>
<text text-anchor="start" x="816.74" y="-1502.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Personal Banking Customer</text>
<text text-anchor="start" x="800.78" y="-1478.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="905.06" y="-1461.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">accounts.</text>
</g>
<!-- mainframe -->
<g id="node7" class="node">
<title>mainframe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1560.54,-228 1215.5,-228 1215.5,-48 1560.54,-48 1560.54,-228"/>
<text text-anchor="start" x="1271.86" y="-152.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Mainframe Banking System</text>
<text text-anchor="start" x="1260.78" y="-127.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">Stores all of the core banking information</text>
<text text-anchor="start" x="1247.56" y="-111" font-family="Arial" font-size="14.00" fill="#bfdbfe">about customers, accounts, transactions, etc.</text>
</g>
<!-- email -->
<g id="node8" class="node">
<title>email</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-1578.8 0,-1578.8 0,-1398.8 320.04,-1398.8 320.04,-1578.8"/>
<text text-anchor="start" x="98.79" y="-1502.9" font-family="Arial" font-size="19.00" fill="#eff6ff">E&#45;mail System</text>
<text text-anchor="start" x="38.63" y="-1478.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="135.91" y="-1461.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">system.</text>
</g>
<!-- mobileapp&#45;&gt;apiapplication -->
<g id="edge1" class="edge">
<title>mobileapp&#45;&gt;apiapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M486.61,-1050.22C483.47,-962.17 490.3,-826.42 548.87,-727.2 587.01,-662.57 649.17,-609.6 709.73,-569.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="710.89,-571.78 715.73,-565.48 708.02,-567.39 710.89,-571.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="548.87,-797.4 548.87,-837 670.02,-837 670.02,-797.4 548.87,-797.4"/>
<text text-anchor="start" x="551.87" y="-821.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="551.87" y="-804.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- apiapplication&#45;&gt;database -->
<g id="edge4" class="edge">
<title>apiapplication&#45;&gt;database</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M885.02,-387.9C885.02,-342.22 885.02,-286.34 885.02,-239.12"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="887.65,-239.39 885.02,-231.89 882.4,-239.4 887.65,-239.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="885.02,-288 885.02,-327.6 1046.64,-327.6 1046.64,-288 885.02,-288"/>
<text text-anchor="start" x="888.02" y="-312" font-family="Arial" font-size="14.00" fill="#c6c6c6">Reads from and writes to</text>
<text text-anchor="start" x="888.02" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">[SQL/TCPS]</text>
</g>
<!-- apiapplication&#45;&gt;mainframe -->
<g id="edge9" class="edge">
<title>apiapplication&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1017.51,-387.68C1088.13,-340.28 1175.03,-281.95 1246.91,-233.71"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1248.32,-235.92 1253.09,-229.56 1245.4,-231.56 1248.32,-235.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1151.6,-288 1151.6,-327.6 1272.75,-327.6 1272.75,-288 1151.6,-288"/>
<text text-anchor="start" x="1154.6" y="-312" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="1154.6" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- apiapplication&#45;&gt;email -->
<g id="edge10" class="edge">
<title>apiapplication&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M718.2,-543.86C667.65,-566.98 613.3,-595.37 567.02,-627.6 515.28,-663.63 505.07,-677.7 466.02,-727.2 362.21,-858.8 335.65,-895.35 271.02,-1050 224.29,-1161.81 193.53,-1298.17 176.49,-1388.7"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="173.92,-1388.13 175.13,-1395.98 179.08,-1389.09 173.92,-1388.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="306.15,-967.2 306.15,-990 431.21,-990 431.21,-967.2 306.15,-967.2"/>
<text text-anchor="start" x="309.15" y="-974.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- webapplication&#45;&gt;singlepageapplication -->
<g id="edge2" class="edge">
<title>webapplication&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M921.16,-1050.07C914.74,-1008.87 907.08,-959.76 900.48,-917.37"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="903.08,-917.03 899.33,-910.02 897.89,-917.84 903.08,-917.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="911.52,-967.2 911.52,-990 1161.39,-990 1161.39,-967.2 911.52,-967.2"/>
<text text-anchor="start" x="914.52" y="-974.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Delivers to the customer&#39;s web browser</text>
</g>
<!-- singlepageapplication&#45;&gt;apiapplication -->
<g id="edge3" class="edge">
<title>singlepageapplication&#45;&gt;apiapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M885.02,-727.5C885.02,-681.54 885.02,-625.27 885.02,-577.87"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="887.65,-578.11 885.02,-570.61 882.4,-578.11 887.65,-578.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="885.02,-627.6 885.02,-667.2 1006.17,-667.2 1006.17,-627.6 885.02,-627.6"/>
<text text-anchor="start" x="888.02" y="-651.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="888.02" y="-634.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- customer&#45;&gt;mobileapp -->
<g id="edge5" class="edge">
<title>customer&#45;&gt;mobileapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M768.8,-1402.51C736.68,-1383.25 704.15,-1361.68 675.56,-1338.8 638.51,-1309.16 602.22,-1271.81 571.94,-1237.58"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="574.09,-1236.05 567.17,-1232.14 570.15,-1239.51 574.09,-1236.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="675.56,-1299.2 675.56,-1338.8 908.02,-1338.8 908.02,-1299.2 675.56,-1299.2"/>
<text text-anchor="start" x="678.56" y="-1323.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="678.56" y="-1306.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;webapplication -->
<g id="edge6" class="edge">
<title>customer&#45;&gt;webapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M935.02,-1398.94C935.02,-1350.51 935.02,-1290.43 935.02,-1240.44"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="937.65,-1240.46 935.02,-1232.96 932.4,-1240.46 937.65,-1240.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="935.02,-1307.6 935.02,-1330.4 1144.87,-1330.4 1144.87,-1307.6 935.02,-1307.6"/>
<text text-anchor="start" x="938.02" y="-1314.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Visits bigbank.com using HTTPS</text>
</g>
<!-- customer&#45;&gt;singlepageapplication -->
<g id="edge7" class="edge">
<title>customer&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1101.12,-1412.89C1129.22,-1392.83 1154.83,-1368.3 1172.02,-1338.8 1255.26,-1195.98 1275.39,-1107.53 1188.02,-967.2 1157.76,-918.6 1106.48,-885.39 1054.63,-862.91"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1055.67,-860.5 1047.74,-860.01 1053.63,-865.34 1055.67,-860.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1244.71,-1120.2 1244.71,-1159.8 1477.17,-1159.8 1477.17,-1120.2 1244.71,-1120.2"/>
<text text-anchor="start" x="1247.71" y="-1144.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="1247.71" y="-1127.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
<!-- email&#45;&gt;customer -->
<g id="edge8" class="edge">
<title>email&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M319.66,-1488.8C447.49,-1488.8 626.63,-1488.8 758.67,-1488.8"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="758.37,-1491.43 765.87,-1488.8 758.37,-1486.18 758.37,-1491.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="489.24,-1491.8 489.24,-1514.6 599.51,-1514.6 599.51,-1491.8 489.24,-1491.8"/>
<text text-anchor="start" x="492.24" y="-1499" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
</g>
</svg>
`;case"context":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1085pt" height="946pt"
 viewBox="0.00 0.00 1084.98 946.50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 931.45)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-628.8 864,-628.8 864,-8 8,-8"/>
<text text-anchor="start" x="16" y="-615.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<!-- internetbankingsystem -->
<g id="node1" class="node">
<title>internetbankingsystem</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="824.29,-567.6 491.71,-567.6 491.71,-387.6 824.29,-387.6 824.29,-567.6"/>
<text text-anchor="start" x="554.5" y="-491.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Internet Banking System</text>
<text text-anchor="start" x="523.78" y="-467.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">Allows customers to view information about</text>
<text text-anchor="start" x="528.43" y="-450.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">their bank accounts, and make payments.</text>
</g>
<!-- email -->
<g id="node2" class="node">
<title>email</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="824.02,-228 503.98,-228 503.98,-48 824.02,-48 824.02,-228"/>
<text text-anchor="start" x="602.77" y="-152.1" font-family="Arial" font-size="19.00" fill="#eff6ff">E&#45;mail System</text>
<text text-anchor="start" x="542.61" y="-127.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="639.89" y="-111" font-family="Arial" font-size="14.00" fill="#bfdbfe">system.</text>
</g>
<!-- mainframe -->
<g id="node3" class="node">
<title>mainframe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="393.52,-228 48.48,-228 48.48,-48 393.52,-48 393.52,-228"/>
<text text-anchor="start" x="104.84" y="-152.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Mainframe Banking System</text>
<text text-anchor="start" x="93.76" y="-127.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">Stores all of the core banking information</text>
<text text-anchor="start" x="80.54" y="-111" font-family="Arial" font-size="14.00" fill="#bfdbfe">about customers, accounts, transactions, etc.</text>
</g>
<!-- customer -->
<g id="node4" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="824.3,-916.4 491.7,-916.4 491.7,-736.4 824.3,-736.4 824.3,-916.4"/>
<text text-anchor="start" x="539.72" y="-840.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Personal Banking Customer</text>
<text text-anchor="start" x="523.76" y="-816.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="628.04" y="-799.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">accounts.</text>
</g>
<!-- internetbankingsystem&#45;&gt;email -->
<g id="edge1" class="edge">
<title>internetbankingsystem&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M659.58,-387.9C660.39,-341.94 661.39,-285.67 662.24,-238.27"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="664.86,-238.56 662.36,-231.01 659.61,-238.47 664.86,-238.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="661.18,-296.4 661.18,-319.2 786.24,-319.2 786.24,-296.4 661.18,-296.4"/>
<text text-anchor="start" x="664.18" y="-303.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- internetbankingsystem&#45;&gt;mainframe -->
<g id="edge2" class="edge">
<title>internetbankingsystem&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M491.74,-408.63C447.79,-386.42 402.09,-359.2 364.21,-327.6 333.21,-301.73 304.91,-267.95 281.81,-236.13"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="284.01,-234.69 277.51,-230.12 279.74,-237.74 284.01,-234.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="364.21,-288 364.21,-327.6 634,-327.6 634,-288 364.21,-288"/>
<text text-anchor="start" x="367.21" y="-312" font-family="Arial" font-size="14.00" fill="#c6c6c6">Gets account information from, and makes</text>
<text text-anchor="start" x="367.21" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
<!-- email&#45;&gt;customer -->
<g id="edge4" class="edge">
<title>email&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M759.27,-227.86C863.58,-336.36 1005.03,-524.2 917,-676.4 897.25,-710.55 866.37,-737.56 832.72,-758.66"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="831.74,-756.18 826.7,-762.33 834.47,-760.67 831.74,-756.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="944.61,-466.2 944.61,-489 1054.88,-489 1054.88,-466.2 944.61,-466.2"/>
<text text-anchor="start" x="947.61" y="-473.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
<!-- customer&#45;&gt;internetbankingsystem -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;internetbankingsystem</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M658,-736.54C658,-688.11 658,-628.03 658,-578.04"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="660.63,-578.06 658,-570.56 655.38,-578.06 660.63,-578.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="658,-636.8 658,-676.4 890.46,-676.4 890.46,-636.8 658,-636.8"/>
<text text-anchor="start" x="661" y="-660.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="661" y="-644" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
</g>
</svg>
`;case"customer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1752pt" height="607pt"
 viewBox="0.00 0.00 1752.10 606.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 591.85)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-289.2 1714,-289.2 1714,-8 8,-8"/>
<text text-anchor="start" x="16" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<!-- singlepageapplication -->
<g id="node1" class="node">
<title>singlepageapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="107.13" y="-170.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Single&#45;Page Application</text>
<text text-anchor="start" x="145.96" y="-148.2" font-family="Arial" font-size="12.00" fill="#bfdbfe">JavaScript and Angular</text>
<text text-anchor="start" x="100.21" y="-126" font-family="Arial" font-size="14.00" fill="#bfdbfe">Provides all of the Internet banking</text>
<text text-anchor="start" x="87.78" y="-109.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">functionality to customers via their web</text>
<text text-anchor="start" x="181.16" y="-92.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">browser.</text>
</g>
<!-- mobileapp -->
<g id="node2" class="node">
<title>mobileapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1243.92,-228 908.08,-228 908.08,-48 1243.92,-48 1243.92,-228"/>
<text text-anchor="start" x="1028.47" y="-170.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Mobile App</text>
<text text-anchor="start" x="1053.66" y="-148.2" font-family="Arial" font-size="12.00" fill="#bfdbfe">Xamarin</text>
<text text-anchor="start" x="953.05" y="-126" font-family="Arial" font-size="14.00" fill="#bfdbfe">Provides a limited subset of the Internet</text>
<text text-anchor="start" x="944.1" y="-109.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">banking functionality to customers via their</text>
<text text-anchor="start" x="1031.26" y="-92.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">mobile device.</text>
</g>
<!-- supportstaff -->
<g id="node3" class="node">
<title>supportstaff</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1674.02,-228 1353.98,-228 1353.98,-48 1674.02,-48 1674.02,-228"/>
<text text-anchor="start" x="1416.33" y="-143.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer Service Staff</text>
<text text-anchor="start" x="1393.78" y="-119.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">Customer service staff within the bank.</text>
</g>
<!-- atm -->
<g id="node4" class="node">
<title>atm</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text text-anchor="start" x="617.95" y="-143.7" font-family="Arial" font-size="19.00" fill="#eff6ff">ATM</text>
<text text-anchor="start" x="527.52" y="-119.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">Allows customers to withdraw cash.</text>
</g>
<!-- customer -->
<g id="node5" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="975.3,-576.8 642.7,-576.8 642.7,-396.8 975.3,-396.8 975.3,-576.8"/>
<text text-anchor="start" x="690.72" y="-500.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Personal Banking Customer</text>
<text text-anchor="start" x="674.76" y="-476.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="779.04" y="-459.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">accounts.</text>
</g>
<!-- atm&#45;&gt;customer -->
<g id="edge5" class="edge">
<title>atm&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M677.5,-289.2C683.59,-305.59 690.41,-321.76 698,-336.8 706.79,-354.21 717.62,-371.71 729.03,-388.28"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="726.85,-389.75 733.31,-394.38 731.15,-386.73 726.85,-389.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="592.21,-345.37 592.21,-368.17 702.48,-368.17 702.48,-345.37 592.21,-345.37"/>
<text text-anchor="start" x="595.21" y="-352.57" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
<!-- customer&#45;&gt;singlepageapplication -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M642.73,-437.12C571.97,-412.57 490.32,-378.95 422.54,-336.8 377.37,-308.71 333.16,-270.38 296.72,-234.95"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="298.9,-233.4 291.7,-230.02 295.22,-237.15 298.9,-233.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="422.54,-297.2 422.54,-336.8 655,-336.8 655,-297.2 422.54,-297.2"/>
<text text-anchor="start" x="425.54" y="-321.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="425.54" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;mobileapp -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;mobileapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M877.41,-396.94C915.25,-347.8 962.31,-286.66 1001.13,-236.25"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1003.19,-237.87 1005.69,-230.33 999.03,-234.67 1003.19,-237.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="950.51,-297.2 950.51,-336.8 1182.97,-336.8 1182.97,-297.2 950.51,-297.2"/>
<text text-anchor="start" x="953.51" y="-321.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="953.51" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;supportstaff -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;supportstaff</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M975.3,-434.81C1073.39,-400.97 1197.73,-351.35 1299,-289.2 1326.87,-272.09 1356.03,-252.76 1383.55,-233.81"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1384.87,-236.08 1389.55,-229.66 1381.89,-231.77 1384.87,-236.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1274.59,-305.6 1274.59,-328.4 1390.32,-328.4 1390.32,-305.6 1274.59,-305.6"/>
<text text-anchor="start" x="1277.59" y="-312.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Asks questions to</text>
</g>
<!-- customer&#45;&gt;atm -->
<g id="edge4" class="edge">
<title>customer&#45;&gt;atm</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M765.19,-396.94C741.1,-348.1 711.18,-287.42 686.41,-237.18"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="688.86,-236.21 683.19,-230.64 684.15,-238.53 688.86,-236.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="733.74,-305.6 733.74,-328.4 875.9,-328.4 875.9,-305.6 733.74,-305.6"/>
<text text-anchor="start" x="736.74" y="-312.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Withdraws cash using</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+n)}}function a(n){switch(n){case"apiApp":return`---
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
  BigbankInternetBankingSystemSinglePageApplication -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.ResetPasswordController
  BigbankInternetBankingSystemSinglePageApplication -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.AccountsSummaryController
  BigbankInternetBankingSystemSinglePageApplication -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.SigninController
  BigbankInternetBankingSystemMobileApp -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.ResetPasswordController
  BigbankInternetBankingSystemMobileApp -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.AccountsSummaryController
  BigbankInternetBankingSystemMobileApp -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystemApiApplication.SigninController
  BigbankInternetBankingSystemApiApplication.SigninController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.SecurityComponent
  BigbankInternetBankingSystemApiApplication.AccountsSummaryController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade
  BigbankInternetBankingSystemApiApplication.MainframeBankingSystemFacade -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankMainframe
  BigbankInternetBankingSystemApiApplication.ResetPasswordController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.EmailComponent
  BigbankInternetBankingSystemApiApplication.ResetPasswordController -. "Uses" .-> BigbankInternetBankingSystemApiApplication.SecurityComponent
  BigbankInternetBankingSystemApiApplication.SecurityComponent -. "Reads from and writes to\r\\n[SQL/TCPS]" .-> BigbankInternetBankingSystemDatabase
  BigbankInternetBankingSystemApiApplication.EmailComponent -. "Sends e-mail using" .-> BigbankEmail
`;case"index":return`---
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
  BigbankInternetBankingSystem.MobileApp -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystem.ApiApplication
  BigbankInternetBankingSystem.WebApplication -. "Delivers to the customer's web browser" .-> BigbankInternetBankingSystem.SinglePageApplication
  BigbankInternetBankingSystem.SinglePageApplication -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankInternetBankingSystem.ApiApplication
  BigbankInternetBankingSystem.ApiApplication -. "Reads from and writes to\r\\n[SQL/TCPS]" .-> BigbankInternetBankingSystem.Database
  BigbankInternetBankingSystem.ApiApplication -. "Sends e-mail using" .-> BigbankEmail
  BigbankInternetBankingSystem.ApiApplication -. "Makes API calls to\r\\n[JSON/HTTPS]" .-> BigbankMainframe
  BigbankEmail -. "Sends e-mails to" .-> Customer
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
`;default:throw new Error("Unknown viewId: "+n)}}export{t as d2Source,e as dotSource,a as mmdSource,i as svgSource};
