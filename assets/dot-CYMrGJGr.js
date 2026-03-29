function e(t){switch(t){case"apiApp":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=apiApp,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
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
        signincontroller [group="bigbank.internetBankingSystem.apiApplication",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Sign In Controller</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Spring MVC Rest Controller</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Allows users to sign in to the Internet<BR/>Banking System.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.signinController",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        accountssummarycontroller [group="bigbank.internetBankingSystem.apiApplication",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Accounts Summary Controller</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Spring MVC Rest Controller</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Provides customers with a summary of their<BR/>bank accounts.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.accountsSummaryController",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        resetpasswordcontroller [group="bigbank.internetBankingSystem.apiApplication",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Reset Password Controller</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Spring MVC Rest Controller</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Allows users to reset their passwords with a<BR/>single use URL.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.resetPasswordController",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mainframebankingsystemfacade [group="bigbank.internetBankingSystem.apiApplication",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Mainframe Banking System Facade</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Spring Bean</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">A facade onto the mainframe banking system.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.mainframeBankingSystemFacade",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        securitycomponent [group="bigbank.internetBankingSystem.apiApplication",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Security Component</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Spring Bean</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Provides functionality related to signing in,<BR/>changing passwords, etc.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.securityComponent",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        emailcomponent [group="bigbank.internetBankingSystem.apiApplication",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">E-mail Component</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Spring Bean</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sends e-mails to users.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.emailComponent",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    singlepageapplication [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Single-Page Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">JavaScript and Angular</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Provides all of the Internet banking<BR/>functionality to customers via their web<BR/>browser.</FONT></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.singlePageApplication",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    singlepageapplication -> signincontroller [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id="3yu55p",
        style=dashed];
    singlepageapplication -> accountssummarycontroller [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id=f6ux6f,
        style=dashed];
    singlepageapplication -> resetpasswordcontroller [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id="1pl477n",
        style=dashed];
    mobileapp [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Mobile App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Xamarin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Provides a limited subset of the Internet<BR/>banking functionality to customers via their<BR/>mobile device.</FONT></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.mobileApp",
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    mobileapp -> signincontroller [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id=trwfov,
        style=dashed];
    mobileapp -> accountssummarycontroller [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id="144rked",
        style=dashed];
    mobileapp -> resetpasswordcontroller [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id=qqch0x,
        style=dashed];
    signincontroller -> securitycomponent [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
        likec4_id="1hmvi9n",
        style=dashed,
        weight=2];
    accountssummarycontroller -> mainframebankingsystemfacade [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
        likec4_id="96asjd",
        style=dashed,
        weight=3];
    resetpasswordcontroller -> securitycomponent [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
        likec4_id="1kdfedh",
        style=dashed,
        weight=2];
    resetpasswordcontroller -> emailcomponent [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
        likec4_id="1sq0e67",
        style=dashed,
        weight=3];
    mainframe [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Mainframe Banking System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Stores all of the core banking information<BR/>about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE>>,
        likec4_id="bigbank.mainframe",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mainframebankingsystemfacade -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id="1im1h1z",
        minlen=1,
        style=dashed];
    database [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Oracle Database Schema</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Stores user registration information, hashed<BR/>authentication credentials, access logs, etc.</FONT></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.database",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    securitycomponent -> database [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Reads from and writes to<BR/>[SQL/TCPS]</FONT></TD></TR></TABLE>>,
        likec4_id="1o16ere",
        minlen=1,
        style=dashed];
    email [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">E-mail System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">The internal Microsoft Exchange e-mail<BR/>system.</FONT></TD></TR></TABLE>>,
        likec4_id="bigbank.email",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    emailcomponent -> email [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mail using</FONT></TD></TR></TABLE>>,
        likec4_id="1mkrun",
        minlen=1,
        style=dashed];
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
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
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
        supportstaff [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=bigbank,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer Service Staff</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Customer service staff within the bank.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.supportStaff",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        atm [group=bigbank,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">ATM</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Allows customers to withdraw cash.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.atm",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        internetbankingsystem [group=bigbank,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Internet Banking System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Allows customers to view information about<BR/>their bank accounts, and make payments.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        backoffice [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=bigbank,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Back Office Staff</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Administration and support staff within the<BR/>bank.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.backoffice",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        email [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            group=bigbank,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">E-mail System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">The internal Microsoft Exchange e-mail<BR/>system.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.email",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mainframe [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=bigbank,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Mainframe Banking System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Stores all of the core banking information<BR/>about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.mainframe",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    customer [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Personal Banking Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">A customer of the bank, with personal bank<BR/>accounts.</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> supportstaff [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Asks questions to</FONT></TD></TR></TABLE>>,
        likec4_id="1y3zm2r",
        style=dashed];
    customer -> atm [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Withdraws cash using</FONT></TD></TR></TABLE>>,
        likec4_id="1o99jiq",
        style=dashed];
    customer -> internetbankingsystem [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Views account balances, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
        likec4_id="5jy70y",
        style=dashed];
    supportstaff -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
        likec4_id=m9d1x,
        style=dashed,
        weight=2];
    atm -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
        likec4_id="10wjlc4",
        style=dashed,
        weight=2];
    internetbankingsystem -> email [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mail using</FONT></TD></TR></TABLE>>,
        likec4_id=e4pn6m,
        style=dashed,
        weight=2];
    internetbankingsystem -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Gets account information from, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
        likec4_id="1v1uhxg",
        style=dashed,
        weight=2];
    backoffice -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
        likec4_id="1uvhtnb",
        minlen=1,
        style=dashed];
    email -> customer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mails to</FONT></TD></TR></TABLE>>,
        likec4_id="1vnzq2u",
        style=dashed];
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
        likec4_viewId=support,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
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
        supportstaff [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=bigbank,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer Service Staff</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Customer service staff within the bank.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.supportStaff",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        backoffice [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=bigbank,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Back Office Staff</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Administration and support staff within the<BR/>bank.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.backoffice",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mainframe [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=bigbank,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Mainframe Banking System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Stores all of the core banking information<BR/>about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.mainframe",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    customer [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Personal Banking Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">A customer of the bank, with personal bank<BR/>accounts.</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> supportstaff [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Asks questions to</FONT></TD></TR></TABLE>>,
        likec4_id="1y3zm2r",
        minlen=1,
        style=dashed];
    supportstaff -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
        likec4_id=m9d1x,
        style=dashed,
        weight=2];
    backoffice -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
        likec4_id="1uvhtnb",
        minlen=1,
        style=dashed];
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
        likec4_viewId=ibsContainers,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
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
        mobileapp [group="bigbank.internetBankingSystem",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Mobile App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Xamarin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Provides a limited subset of the Internet<BR/>banking functionality to customers via their<BR/>mobile device.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.mobileApp",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        webapplication [group="bigbank.internetBankingSystem",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Web Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Java and Spring MVC</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Delivers the static content and the Internet<BR/>banking single page application.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.webApplication",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        singlepageapplication [group="bigbank.internetBankingSystem",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Single-Page Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">JavaScript and Angular</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Provides all of the Internet banking<BR/>functionality to customers via their web<BR/>browser.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.singlePageApplication",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        apiapplication [group="bigbank.internetBankingSystem",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">API Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Java and Spring MVC</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Provides Internet banking functionality via a<BR/>JSON/HTTPS API.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        database [group="bigbank.internetBankingSystem",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Oracle Database Schema</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Stores user registration information, hashed<BR/>authentication credentials, access logs, etc.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.database",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    customer [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Personal Banking Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">A customer of the bank, with personal bank<BR/>accounts.</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> mobileapp [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Views account balances, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
        likec4_id="8itgt9",
        style=dashed];
    customer -> webapplication [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Visits bigbank.com using HTTPS</FONT></TD></TR></TABLE>>,
        likec4_id=ofqlbq,
        style=dashed];
    customer -> singlepageapplication [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Views account balances, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
        likec4_id=hpqptb,
        style=dashed];
    mobileapp -> apiapplication [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id=vm6cix,
        style=dashed,
        weight=3];
    webapplication -> singlepageapplication [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Delivers to the customer's web browser</FONT></TD></TR></TABLE>>,
        likec4_id=baf383,
        style=dashed,
        weight=3];
    singlepageapplication -> apiapplication [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id=ixgqxn,
        style=dashed,
        weight=3];
    apiapplication -> database [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Reads from and writes to<BR/>[SQL/TCPS]</FONT></TD></TR></TABLE>>,
        likec4_id="1xuvdjh",
        minlen=1,
        style=dashed,
        weight=2];
    mainframe [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Mainframe Banking System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Stores all of the core banking information<BR/>about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE>>,
        likec4_id="bigbank.mainframe",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    apiapplication -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Makes API calls to<BR/>[JSON/HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id="1ph8y88",
        minlen=1,
        style=dashed];
    email [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">E-mail System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">The internal Microsoft Exchange e-mail<BR/>system.</FONT></TD></TR></TABLE>>,
        likec4_id="bigbank.email",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    apiapplication -> email [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mail using</FONT></TD></TR></TABLE>>,
        likec4_id="1wngbki",
        style=dashed];
    email -> customer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mails to</FONT></TD></TR></TABLE>>,
        likec4_id="1vnzq2u",
        minlen=0,
        style=dashed,
        weight=2];
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
        likec4_viewId=context,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
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
        internetbankingsystem [group=bigbank,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Internet Banking System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Allows customers to view information about<BR/>their bank accounts, and make payments.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mainframe [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=bigbank,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Mainframe Banking System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Stores all of the core banking information<BR/>about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.mainframe",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        email [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=bigbank,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">E-mail System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The internal Microsoft Exchange e-mail<BR/>system.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.email",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    internetbankingsystem -> mainframe [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Gets account information from, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
        likec4_id="1v1uhxg",
        minlen=1,
        style=dashed,
        weight=2];
    internetbankingsystem -> email [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mail using</FONT></TD></TR></TABLE>>,
        likec4_id=e4pn6m,
        style=dashed,
        weight=2];
    customer [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Personal Banking Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">A customer of the bank, with personal bank<BR/>accounts.</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    email -> customer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends e-mails to</FONT></TD></TR></TABLE>>,
        likec4_id="1vnzq2u",
        style=dashed];
    customer -> internetbankingsystem [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Views account balances, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
        likec4_id="5jy70y",
        style=dashed];
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
        likec4_viewId=customer,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_bigbank {
        graph [color="#292f37",
            fillcolor="#3a404a",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>BIG BANK PLC</B></FONT>>,
            likec4_depth=2,
            likec4_id=bigbank,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_internetbankingsystem {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>INTERNET BANKING SYSTEM</B></FONT>>,
                likec4_depth=1,
                likec4_id="bigbank.internetBankingSystem",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            singlepageapplication [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Single-Page Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">JavaScript and Angular</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Provides all of the Internet banking<BR/>functionality to customers via their web<BR/>browser.</FONT></TD></TR></TABLE>>,
                likec4_id="bigbank.internetBankingSystem.singlePageApplication",
                likec4_level=2,
                margin="0.278,0.306",
                width=4.445];
            mobileapp [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Mobile App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Xamarin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Provides a limited subset of the Internet<BR/>banking functionality to customers via their<BR/>mobile device.</FONT></TD></TR></TABLE>>,
                likec4_id="bigbank.internetBankingSystem.mobileApp",
                likec4_level=2,
                margin="0.278,0.223",
                width=4.445];
        }
        supportstaff [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer Service Staff</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Customer service staff within the bank.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.supportStaff",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        atm [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">ATM</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Allows customers to withdraw cash.</FONT></TD></TR></TABLE>>,
            likec4_id="bigbank.atm",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    customer [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Personal Banking Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">A customer of the bank, with personal bank<BR/>accounts.</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> singlepageapplication [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Views account balances, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
        likec4_id=hpqptb,
        minlen=1,
        style=dashed];
    customer -> mobileapp [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Views account balances, and makes<BR/>payments using</FONT></TD></TR></TABLE>>,
        likec4_id="8itgt9",
        minlen=1,
        style=dashed];
    customer -> supportstaff [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Asks questions to</FONT></TD></TR></TABLE>>,
        likec4_id="1y3zm2r",
        minlen=1,
        style=dashed,
        weight=2];
    customer -> atm [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Withdraws cash using</FONT></TD></TR></TABLE>>,
        likec4_id="1o99jiq",
        minlen=1,
        style=dashed,
        weight=2];
}
`;default:throw new Error("Unknown viewId: "+t)}}function n(t){switch(t){case"apiApp":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1338pt" height="1221pt"
 viewBox="0.00 0.00 1338.10 1221.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1206.25)">
<g id="clust1" class="cluster">
<title>cluster_apiapplication</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-299.6 8,-903.6 1300,-903.6 1300,-299.6 8,-299.6"/>
<text text-anchor="start" x="16" y="-890.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">API APPLICATION</text>
</g>
<!-- signincontroller -->
<g id="node1" class="node">
<title>signincontroller</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-842.4 47.98,-842.4 47.98,-662.4 368.02,-662.4 368.02,-842.4"/>
<text text-anchor="start" x="134.6" y="-776.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Sign In Controller</text>
<text text-anchor="start" x="127.81" y="-755.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">Spring MVC Rest Controller</text>
<text text-anchor="start" x="85.44" y="-733.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Allows users to sign in to the Internet</text>
<text text-anchor="start" x="151.72" y="-715.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Banking System.</text>
</g>
<!-- accountssummarycontroller -->
<g id="node2" class="node">
<title>accountssummarycontroller</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1252.52,-842.4 921.48,-842.4 921.48,-662.4 1252.52,-662.4 1252.52,-842.4"/>
<text text-anchor="start" x="960.82" y="-776.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Accounts Summary Controller</text>
<text text-anchor="start" x="1006.81" y="-755.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">Spring MVC Rest Controller</text>
<text text-anchor="start" x="941.54" y="-733.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Provides customers with a summary of their</text>
<text text-anchor="start" x="1036.55" y="-715.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">bank accounts.</text>
</g>
<!-- resetpasswordcontroller -->
<g id="node3" class="node">
<title>resetpasswordcontroller</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="809.53,-842.4 478.47,-842.4 478.47,-662.4 809.53,-662.4 809.53,-842.4"/>
<text text-anchor="start" x="531.01" y="-776.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Reset Password Controller</text>
<text text-anchor="start" x="563.81" y="-755.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">Spring MVC Rest Controller</text>
<text text-anchor="start" x="498.53" y="-733.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Allows users to reset their passwords with a</text>
<text text-anchor="start" x="591.06" y="-715.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">single use URL.</text>
</g>
<!-- mainframebankingsystemfacade -->
<g id="node4" class="node">
<title>mainframebankingsystemfacade</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1259.64,-519.6 914.36,-519.6 914.36,-339.6 1259.64,-339.6 1259.64,-519.6"/>
<text text-anchor="start" x="936.52" y="-444.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Mainframe Banking System Facade</text>
<text text-anchor="start" x="1051.22" y="-423.3" font-family="Arial" font-size="13.00" fill="#bfdbfe">Spring Bean</text>
<text text-anchor="start" x="934.42" y="-401.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">A facade onto the mainframe banking system.</text>
</g>
<!-- securitycomponent -->
<g id="node5" class="node">
<title>securitycomponent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.14,-519.6 47.86,-519.6 47.86,-339.6 368.14,-339.6 368.14,-519.6"/>
<text text-anchor="start" x="121.93" y="-453.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Security Component</text>
<text text-anchor="start" x="172.22" y="-432.3" font-family="Arial" font-size="13.00" fill="#bfdbfe">Spring Bean</text>
<text text-anchor="start" x="67.92" y="-410.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Provides functionality related to signing in,</text>
<text text-anchor="start" x="123.37" y="-392.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">changing passwords, etc.</text>
</g>
<!-- emailcomponent -->
<g id="node6" class="node">
<title>emailcomponent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="804.02,-519.6 483.98,-519.6 483.98,-339.6 804.02,-339.6 804.02,-519.6"/>
<text text-anchor="start" x="565.33" y="-444.7" font-family="Arial" font-size="19.00" fill="#eff6ff">E&#45;mail Component</text>
<text text-anchor="start" x="608.22" y="-423.3" font-family="Arial" font-size="13.00" fill="#bfdbfe">Spring Bean</text>
<text text-anchor="start" x="565.63" y="-401.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sends e&#45;mails to users.</text>
</g>
<!-- singlepageapplication -->
<g id="node7" class="node">
<title>singlepageapplication</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="435.02,-1191.2 114.98,-1191.2 114.98,-1011.2 435.02,-1011.2 435.02,-1191.2"/>
<text text-anchor="start" x="174.13" y="-1134.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Single&#45;Page Application</text>
<text text-anchor="start" x="207.79" y="-1112.9" font-family="Arial" font-size="13.00" fill="#b6ecf7">JavaScript and Angular</text>
<text text-anchor="start" x="159.51" y="-1091.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Provides all of the Internet banking</text>
<text text-anchor="start" x="146.19" y="-1073.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">functionality to customers via their web</text>
<text text-anchor="start" x="246.24" y="-1055.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">browser.</text>
</g>
<!-- mobileapp -->
<g id="node8" class="node">
<title>mobileapp</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="912.34,-1191.2 581.66,-1191.2 581.66,-1011.2 912.34,-1011.2 912.34,-1191.2"/>
<text text-anchor="start" x="699.47" y="-1134.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Mobile App</text>
<text text-anchor="start" x="722.8" y="-1112.9" font-family="Arial" font-size="13.00" fill="#b6ecf7">Xamarin</text>
<text text-anchor="start" x="615.26" y="-1091.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Provides a limited subset of the Internet</text>
<text text-anchor="start" x="605.68" y="-1073.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">banking functionality to customers via their</text>
<text text-anchor="start" x="699.06" y="-1055.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">mobile device.</text>
</g>
<!-- mainframe -->
<g id="node9" class="node">
<title>mainframe</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1257.55,-180 916.45,-180 916.45,0 1257.55,0 1257.55,-180"/>
<text text-anchor="start" x="970.84" y="-104.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Mainframe Banking System</text>
<text text-anchor="start" x="950.67" y="-81.1" font-family="Arial" font-size="15.00" fill="#cbd5e1">Stores all of the core banking information</text>
<text text-anchor="start" x="936.51" y="-63.1" font-family="Arial" font-size="15.00" fill="#cbd5e1">about customers, accounts, transactions, etc.</text>
</g>
<!-- database -->
<g id="node10" class="node">
<title>database</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M373.55,-163.64C373.55,-172.67 299.35,-180 208,-180 116.65,-180 42.45,-172.67 42.45,-163.64 42.45,-163.64 42.45,-16.36 42.45,-16.36 42.45,-7.33 116.65,0 208,0 299.35,0 373.55,-7.33 373.55,-16.36 373.55,-16.36 373.55,-163.64 373.55,-163.64"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M373.55,-163.64C373.55,-154.61 299.35,-147.27 208,-147.27 116.65,-147.27 42.45,-154.61 42.45,-163.64"/>
<text text-anchor="start" x="167.33" y="-114.1" font-family="Arial" font-size="19.00" fill="#f8fafc">Database</text>
<text text-anchor="start" x="133.57" y="-92.7" font-family="Arial" font-size="13.00" fill="#cbd5e1">Oracle Database Schema</text>
<text text-anchor="start" x="62.51" y="-71.3" font-family="Arial" font-size="15.00" fill="#cbd5e1">Stores user registration information, hashed</text>
<text text-anchor="start" x="63.34" y="-53.3" font-family="Arial" font-size="15.00" fill="#cbd5e1">authentication credentials, access logs, etc.</text>
</g>
<!-- email -->
<g id="node11" class="node">
<title>email</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="804.02,-180 483.98,-180 483.98,0 804.02,0 804.02,-180"/>
<text text-anchor="start" x="582.77" y="-104.3" font-family="Arial" font-size="19.00" fill="#f8fafc">E&#45;mail System</text>
<text text-anchor="start" x="513.94" y="-81.1" font-family="Arial" font-size="15.00" fill="#cbd5e1">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="618.16" y="-63.1" font-family="Arial" font-size="15.00" fill="#cbd5e1">system.</text>
</g>
<!-- signincontroller&#45;&gt;securitycomponent -->
<g id="edge7" class="edge">
<title>signincontroller&#45;&gt;securitycomponent</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M208,-662.47C208,-621.27 208,-572.16 208,-529.77"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="210.63,-529.96 208,-522.46 205.38,-529.96 210.63,-529.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-579.6 208,-602.4 245.9,-602.4 245.9,-579.6 208,-579.6"/>
<text text-anchor="start" x="211" y="-586.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- accountssummarycontroller&#45;&gt;mainframebankingsystemfacade -->
<g id="edge8" class="edge">
<title>accountssummarycontroller&#45;&gt;mainframebankingsystemfacade</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1087,-662.47C1087,-621.27 1087,-572.16 1087,-529.77"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1089.63,-529.96 1087,-522.46 1084.38,-529.96 1089.63,-529.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1087,-579.6 1087,-602.4 1124.9,-602.4 1124.9,-579.6 1087,-579.6"/>
<text text-anchor="start" x="1090" y="-586.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- resetpasswordcontroller&#45;&gt;securitycomponent -->
<g id="edge9" class="edge">
<title>resetpasswordcontroller&#45;&gt;securitycomponent</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M523.13,-662.47C465.24,-619.87 395.87,-568.83 336.97,-525.49"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="338.76,-523.55 331.17,-521.22 335.65,-527.78 338.76,-523.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="439.07,-579.6 439.07,-602.4 476.97,-602.4 476.97,-579.6 439.07,-579.6"/>
<text text-anchor="start" x="442.07" y="-586.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- resetpasswordcontroller&#45;&gt;emailcomponent -->
<g id="edge10" class="edge">
<title>resetpasswordcontroller&#45;&gt;emailcomponent</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M644,-662.47C644,-621.27 644,-572.16 644,-529.77"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="646.63,-529.96 644,-522.46 641.38,-529.96 646.63,-529.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="644,-579.6 644,-602.4 681.9,-602.4 681.9,-579.6 644,-579.6"/>
<text text-anchor="start" x="647" y="-586.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- mainframebankingsystemfacade&#45;&gt;mainframe -->
<g id="edge11" class="edge">
<title>mainframebankingsystemfacade&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1087,-339.9C1087,-293.94 1087,-237.67 1087,-190.27"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1089.63,-190.51 1087,-183.01 1084.38,-190.51 1089.63,-190.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1087,-240 1087,-279.6 1208.15,-279.6 1208.15,-240 1087,-240"/>
<text text-anchor="start" x="1090" y="-264" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="1090" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- securitycomponent&#45;&gt;database -->
<g id="edge12" class="edge">
<title>securitycomponent&#45;&gt;database</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M208,-339.9C208,-294.22 208,-238.34 208,-191.12"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="210.63,-191.39 208,-183.89 205.38,-191.4 210.63,-191.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-240 208,-279.6 369.62,-279.6 369.62,-240 208,-240"/>
<text text-anchor="start" x="211" y="-264" font-family="Arial" font-size="14.00" fill="#c6c6c6">Reads from and writes to</text>
<text text-anchor="start" x="211" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">[SQL/TCPS]</text>
</g>
<!-- emailcomponent&#45;&gt;email -->
<g id="edge13" class="edge">
<title>emailcomponent&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M644,-339.9C644,-293.94 644,-237.67 644,-190.27"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="646.63,-190.51 644,-183.01 641.38,-190.51 646.63,-190.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="644,-248.4 644,-271.2 769.06,-271.2 769.06,-248.4 644,-248.4"/>
<text text-anchor="start" x="647" y="-255.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- singlepageapplication&#45;&gt;signincontroller -->
<g id="edge1" class="edge">
<title>singlepageapplication&#45;&gt;signincontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M115.13,-1041.91C76.17,-1019.71 39.3,-990.08 16.85,-951.2 -4.32,-914.54 12.09,-879.55 42.59,-849.47"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="44.31,-851.46 47.98,-844.41 40.72,-847.63 44.31,-851.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="16.85,-911.6 16.85,-951.2 138,-951.2 138,-911.6 16.85,-911.6"/>
<text text-anchor="start" x="19.85" y="-935.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="19.85" y="-918.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- singlepageapplication&#45;&gt;accountssummarycontroller -->
<g id="edge2" class="edge">
<title>singlepageapplication&#45;&gt;accountssummarycontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M434.81,-1039.56C465.16,-1029.24 496.86,-1019.27 527,-1011.2 668.04,-973.44 717.87,-1013.34 850,-951.2 903.08,-926.24 954.08,-886.47 995.09,-849.12"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="996.67,-851.24 1000.41,-844.23 993.11,-847.38 996.67,-851.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="915.35,-911.6 915.35,-951.2 1036.5,-951.2 1036.5,-911.6 915.35,-911.6"/>
<text text-anchor="start" x="918.35" y="-935.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="918.35" y="-918.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- singlepageapplication&#45;&gt;resetpasswordcontroller -->
<g id="edge3" class="edge">
<title>singlepageapplication&#45;&gt;resetpasswordcontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M237.06,-1011.26C228.38,-976 227.93,-937.72 252.85,-911.6 265.91,-897.91 405.05,-909.59 423,-903.6 460.37,-891.14 497.26,-870.42 529.88,-848.29"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="531.35,-850.46 536.03,-844.05 528.37,-846.14 531.35,-850.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="252.85,-911.6 252.85,-951.2 374,-951.2 374,-911.6 252.85,-911.6"/>
<text text-anchor="start" x="255.85" y="-935.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="255.85" y="-918.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- mobileapp&#45;&gt;signincontroller -->
<g id="edge4" class="edge">
<title>mobileapp&#45;&gt;signincontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M596.14,-1011.41C541.16,-978.33 478.81,-939.97 423,-903.6 396.12,-886.08 367.75,-866.83 340.75,-848.12"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="342.56,-846.18 334.9,-844.06 339.56,-850.5 342.56,-846.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="493.02,-911.6 493.02,-951.2 614.17,-951.2 614.17,-911.6 493.02,-911.6"/>
<text text-anchor="start" x="496.02" y="-935.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="496.02" y="-918.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- mobileapp&#45;&gt;accountssummarycontroller -->
<g id="edge5" class="edge">
<title>mobileapp&#45;&gt;accountssummarycontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M912.22,-1073.54C984.1,-1052.85 1061.67,-1016.17 1105,-951.2 1124.07,-922.6 1125.56,-886.28 1120.27,-852.59"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1122.86,-852.14 1118.95,-845.21 1117.69,-853.06 1122.86,-852.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1120.35,-911.6 1120.35,-951.2 1241.51,-951.2 1241.51,-911.6 1120.35,-911.6"/>
<text text-anchor="start" x="1123.35" y="-935.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="1123.35" y="-918.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- mobileapp&#45;&gt;resetpasswordcontroller -->
<g id="edge6" class="edge">
<title>mobileapp&#45;&gt;resetpasswordcontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M720.61,-1011.34C706.16,-962.71 688.23,-902.32 673.35,-852.21"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="675.93,-851.67 671.27,-845.23 670.89,-853.17 675.93,-851.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="701.67,-911.6 701.67,-951.2 822.82,-951.2 822.82,-911.6 701.67,-911.6"/>
<text text-anchor="start" x="704.67" y="-935.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="704.67" y="-918.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
</g>
</svg>
`;case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1896pt" height="946pt"
 viewBox="0.00 0.00 1896.04 946.50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 931.45)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-628.8 1706,-628.8 1706,-8 8,-8"/>
<text text-anchor="start" x="16" y="-615.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<!-- supportstaff -->
<g id="node1" class="node">
<title>supportstaff</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.02,-567.6 47.98,-567.6 47.98,-387.6 368.02,-387.6 368.02,-567.6"/>
<text text-anchor="start" x="110.33" y="-482.9" font-family="Arial" font-size="19.00" fill="#f0f9ff">Customer Service Staff</text>
<text text-anchor="start" x="79.2" y="-459.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">Customer service staff within the bank.</text>
</g>
<!-- atm -->
<g id="node2" class="node">
<title>atm</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-567.6 477.98,-567.6 477.98,-387.6 798.02,-387.6 798.02,-567.6"/>
<text text-anchor="start" x="617.95" y="-482.9" font-family="Arial" font-size="19.00" fill="#eff6ff">ATM</text>
<text text-anchor="start" x="519.63" y="-459.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Allows customers to withdraw cash.</text>
</g>
<!-- internetbankingsystem -->
<g id="node3" class="node">
<title>internetbankingsystem</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1665.87,-567.6 1338.13,-567.6 1338.13,-387.6 1665.87,-387.6 1665.87,-567.6"/>
<text text-anchor="start" x="1398.5" y="-491.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Internet Banking System</text>
<text text-anchor="start" x="1358.19" y="-468.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Allows customers to view information about</text>
<text text-anchor="start" x="1363.17" y="-450.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">their bank accounts, and make payments.</text>
</g>
<!-- backoffice -->
<g id="node4" class="node">
<title>backoffice</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1228.02,-567.6 907.98,-567.6 907.98,-387.6 1228.02,-387.6 1228.02,-567.6"/>
<text text-anchor="start" x="997.25" y="-491.9" font-family="Arial" font-size="19.00" fill="#f0f9ff">Back Office Staff</text>
<text text-anchor="start" x="928.76" y="-468.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">Administration and support staff within the</text>
<text text-anchor="start" x="1049.65" y="-450.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">bank.</text>
</g>
<!-- email -->
<g id="node5" class="node">
<title>email</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1662.02,-228 1341.98,-228 1341.98,-48 1662.02,-48 1662.02,-228"/>
<text text-anchor="start" x="1440.77" y="-152.3" font-family="Arial" font-size="19.00" fill="#f8fafc">E&#45;mail System</text>
<text text-anchor="start" x="1371.94" y="-129.1" font-family="Arial" font-size="15.00" fill="#cbd5e1">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="1476.16" y="-111.1" font-family="Arial" font-size="15.00" fill="#cbd5e1">system.</text>
</g>
<!-- mainframe -->
<g id="node6" class="node">
<title>mainframe</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="808.55,-228 467.45,-228 467.45,-48 808.55,-48 808.55,-228"/>
<text text-anchor="start" x="521.84" y="-152.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Mainframe Banking System</text>
<text text-anchor="start" x="501.67" y="-129.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Stores all of the core banking information</text>
<text text-anchor="start" x="487.51" y="-111.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">about customers, accounts, transactions, etc.</text>
</g>
<!-- customer -->
<g id="node7" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1341.89,-916.4 1014.11,-916.4 1014.11,-736.4 1341.89,-736.4 1341.89,-916.4"/>
<text text-anchor="start" x="1059.72" y="-840.7" font-family="Arial" font-size="19.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="1034.17" y="-817.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="1145.9" y="-799.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">accounts.</text>
</g>
<!-- supportstaff&#45;&gt;mainframe -->
<g id="edge4" class="edge">
<title>supportstaff&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M321.26,-387.68C381.39,-340.47 455.32,-282.43 516.62,-234.3"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="518.14,-236.44 522.42,-229.74 514.9,-232.31 518.14,-236.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="435.89,-296.4 435.89,-319.2 473.79,-319.2 473.79,-296.4 435.89,-296.4"/>
<text text-anchor="start" x="438.89" y="-303.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- atm&#45;&gt;mainframe -->
<g id="edge5" class="edge">
<title>atm&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M638,-387.9C638,-341.94 638,-285.67 638,-238.27"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="640.63,-238.51 638,-231.01 635.38,-238.51 640.63,-238.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="638,-296.4 638,-319.2 675.9,-319.2 675.9,-296.4 638,-296.4"/>
<text text-anchor="start" x="641" y="-303.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- internetbankingsystem&#45;&gt;email -->
<g id="edge6" class="edge">
<title>internetbankingsystem&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1502,-387.9C1502,-341.94 1502,-285.67 1502,-238.27"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1504.63,-238.51 1502,-231.01 1499.38,-238.51 1504.63,-238.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1502,-296.4 1502,-319.2 1627.06,-319.2 1627.06,-296.4 1502,-296.4"/>
<text text-anchor="start" x="1505" y="-303.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- internetbankingsystem&#45;&gt;mainframe -->
<g id="edge7" class="edge">
<title>internetbankingsystem&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1338.3,-409.69C1319.67,-402.19 1300.93,-394.7 1283,-387.6 1126.38,-325.6 947.6,-256.85 818.05,-207.4"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="819.19,-205.02 811.25,-204.8 817.32,-209.93 819.19,-205.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1124.11,-288 1124.11,-327.6 1393.89,-327.6 1393.89,-288 1124.11,-288"/>
<text text-anchor="start" x="1127.11" y="-312" font-family="Arial" font-size="14.00" fill="#c6c6c6">Gets account information from, and makes</text>
<text text-anchor="start" x="1127.11" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
<!-- backoffice&#45;&gt;mainframe -->
<g id="edge8" class="edge">
<title>backoffice&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M954.74,-387.68C894.61,-340.47 820.68,-282.43 759.38,-234.3"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="761.1,-232.31 753.58,-229.74 757.86,-236.44 761.1,-232.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="865.89,-296.4 865.89,-319.2 903.79,-319.2 903.79,-296.4 865.89,-296.4"/>
<text text-anchor="start" x="868.89" y="-303.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- email&#45;&gt;customer -->
<g id="edge9" class="edge">
<title>email&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1614.08,-228C1657.94,-270.7 1702.2,-325.98 1721,-387.6 1752.28,-490.14 1780.15,-539.39 1721,-628.8 1641.09,-749.6 1478.45,-796.67 1351.9,-814.75"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1351.77,-812.12 1344.7,-815.74 1352.49,-817.32 1351.77,-812.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1755.68,-466.2 1755.68,-489 1865.94,-489 1865.94,-466.2 1755.68,-466.2"/>
<text text-anchor="start" x="1758.68" y="-473.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
<!-- customer&#45;&gt;supportstaff -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;supportstaff</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1014.35,-800.11C857.46,-771.9 616.55,-718.1 423,-628.8 390.4,-613.76 357.5,-593.74 327.56,-573.23"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="329.34,-571.28 321.68,-569.16 326.35,-575.59 329.34,-571.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="520.65,-645.2 520.65,-668 636.37,-668 636.37,-645.2 520.65,-645.2"/>
<text text-anchor="start" x="523.65" y="-652.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Asks questions to</text>
</g>
<!-- customer&#45;&gt;atm -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;atm</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1026.24,-736.41C971.19,-703.39 908.82,-665.13 853,-628.8 826.11,-611.3 797.73,-592.06 770.73,-573.35"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="772.54,-571.41 764.88,-569.29 769.55,-575.73 772.54,-571.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="923.22,-645.2 923.22,-668 1065.38,-668 1065.38,-645.2 923.22,-645.2"/>
<text text-anchor="start" x="926.22" y="-652.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Withdraws cash using</text>
</g>
<!-- customer&#45;&gt;internetbankingsystem -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;internetbankingsystem</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1261.02,-736.54C1307.21,-687.09 1364.75,-625.51 1412.02,-574.91"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1413.65,-577.01 1416.85,-569.74 1409.81,-573.43 1413.65,-577.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1349.71,-636.8 1349.71,-676.4 1582.18,-676.4 1582.18,-636.8 1349.71,-636.8"/>
<text text-anchor="start" x="1352.71" y="-660.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="1352.71" y="-644" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
</g>
</svg>
`;case"support":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="913pt"
 viewBox="0.00 0.00 876.10 912.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 897.85)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-612 838,-612 838,-8 8,-8"/>
<text text-anchor="start" x="16" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<!-- supportstaff -->
<g id="node1" class="node">
<title>supportstaff</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.02,-550.8 47.98,-550.8 47.98,-370.8 368.02,-370.8 368.02,-550.8"/>
<text text-anchor="start" x="110.33" y="-466.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Customer Service Staff</text>
<text text-anchor="start" x="79.2" y="-442.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">Customer service staff within the bank.</text>
</g>
<!-- backoffice -->
<g id="node2" class="node">
<title>backoffice</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="798.02,-550.8 477.98,-550.8 477.98,-370.8 798.02,-370.8 798.02,-550.8"/>
<text text-anchor="start" x="567.25" y="-475.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Back Office Staff</text>
<text text-anchor="start" x="498.76" y="-451.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">Administration and support staff within the</text>
<text text-anchor="start" x="619.65" y="-433.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">bank.</text>
</g>
<!-- mainframe -->
<g id="node3" class="node">
<title>mainframe</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="389.55,-228 48.45,-228 48.45,-48 389.55,-48 389.55,-228"/>
<text text-anchor="start" x="102.84" y="-152.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Mainframe Banking System</text>
<text text-anchor="start" x="82.67" y="-129.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Stores all of the core banking information</text>
<text text-anchor="start" x="68.51" y="-111.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">about customers, accounts, transactions, etc.</text>
</g>
<!-- customer -->
<g id="node4" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="371.89,-882.8 44.11,-882.8 44.11,-702.8 371.89,-702.8 371.89,-882.8"/>
<text text-anchor="start" x="89.72" y="-807.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="64.17" y="-783.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="175.9" y="-765.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">accounts.</text>
</g>
<!-- supportstaff&#45;&gt;mainframe -->
<g id="edge2" class="edge">
<title>supportstaff&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M211.05,-370.87C212.46,-329.67 214.15,-280.56 215.6,-238.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="218.22,-238.44 215.85,-230.85 212.97,-238.26 218.22,-238.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="213.83,-288 213.83,-310.8 251.73,-310.8 251.73,-288 213.83,-288"/>
<text text-anchor="start" x="216.83" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- backoffice&#45;&gt;mainframe -->
<g id="edge3" class="edge">
<title>backoffice&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M521.84,-370.87C466.33,-328.36 399.82,-277.44 343.29,-234.16"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="344.98,-232.14 337.42,-229.67 341.78,-236.31 344.98,-232.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="441.06,-288 441.06,-310.8 478.96,-310.8 478.96,-288 441.06,-288"/>
<text text-anchor="start" x="444.06" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses</text>
</g>
<!-- customer&#45;&gt;supportstaff -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;supportstaff</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M208,-702.93C208,-659.1 208,-606.08 208,-560.94"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="210.63,-561.07 208,-553.57 205.38,-561.07 210.63,-561.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-620 208,-642.8 323.72,-642.8 323.72,-620 208,-620"/>
<text text-anchor="start" x="211" y="-627.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Asks questions to</text>
</g>
</g>
</svg>
`;case"ibsContainers":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1494pt" height="1609pt"
 viewBox="0.00 0.00 1493.66 1608.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1593.85)">
<g id="clust1" class="cluster">
<title>cluster_internetbankingsystem</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="196.02,-8 196.02,-1291.2 1082.02,-1291.2 1082.02,-8 196.02,-8"/>
<text text-anchor="start" x="204.02" y="-1278.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">INTERNET BANKING SYSTEM</text>
</g>
<!-- mobileapp -->
<g id="node1" class="node">
<title>mobileapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="566.36,-1230 235.68,-1230 235.68,-1050 566.36,-1050 566.36,-1230"/>
<text text-anchor="start" x="353.49" y="-1173.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Mobile App</text>
<text text-anchor="start" x="376.82" y="-1151.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Xamarin</text>
<text text-anchor="start" x="269.28" y="-1130.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Provides a limited subset of the Internet</text>
<text text-anchor="start" x="259.7" y="-1112.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">banking functionality to customers via their</text>
<text text-anchor="start" x="353.08" y="-1094.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">mobile device.</text>
</g>
<!-- webapplication -->
<g id="node2" class="node">
<title>webapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="997.57,-1230 676.47,-1230 676.47,-1050 997.57,-1050 997.57,-1230"/>
<text text-anchor="start" x="768.37" y="-1164.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Web Application</text>
<text text-anchor="start" x="773.79" y="-1142.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Java and Spring MVC</text>
<text text-anchor="start" x="696.52" y="-1121.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Delivers the static content and the Internet</text>
<text text-anchor="start" x="730.27" y="-1103.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">banking single page application.</text>
</g>
<!-- singlepageapplication -->
<g id="node3" class="node">
<title>singlepageapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="952.04,-907.2 632,-907.2 632,-727.2 952.04,-727.2 952.04,-907.2"/>
<text text-anchor="start" x="691.15" y="-850.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Single&#45;Page Application</text>
<text text-anchor="start" x="724.81" y="-828.9" font-family="Arial" font-size="13.00" fill="#bfdbfe">JavaScript and Angular</text>
<text text-anchor="start" x="676.53" y="-807.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Provides all of the Internet banking</text>
<text text-anchor="start" x="663.21" y="-789.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">functionality to customers via their web</text>
<text text-anchor="start" x="763.26" y="-771.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">browser.</text>
</g>
<!-- apiapplication -->
<g id="node4" class="node">
<title>apiapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="692.74,-567.6 363.3,-567.6 363.3,-387.6 692.74,-387.6 692.74,-567.6"/>
<text text-anchor="start" x="463.59" y="-501.7" font-family="Arial" font-size="19.00" fill="#eff6ff">API Application</text>
<text text-anchor="start" x="464.79" y="-480.3" font-family="Arial" font-size="13.00" fill="#bfdbfe">Java and Spring MVC</text>
<text text-anchor="start" x="383.35" y="-458.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Provides Internet banking functionality via a</text>
<text text-anchor="start" x="465.09" y="-440.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">JSON/HTTPS API.</text>
</g>
<!-- database -->
<g id="node5" class="node">
<title>database</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M693.57,-211.64C693.57,-220.67 619.37,-228 528.02,-228 436.67,-228 362.47,-220.67 362.47,-211.64 362.47,-211.64 362.47,-64.36 362.47,-64.36 362.47,-55.33 436.67,-48 528.02,-48 619.37,-48 693.57,-55.33 693.57,-64.36 693.57,-64.36 693.57,-211.64 693.57,-211.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M693.57,-211.64C693.57,-202.61 619.37,-195.27 528.02,-195.27 436.67,-195.27 362.47,-202.61 362.47,-211.64"/>
<text text-anchor="start" x="487.35" y="-162.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Database</text>
<text text-anchor="start" x="453.59" y="-140.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Oracle Database Schema</text>
<text text-anchor="start" x="382.53" y="-119.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores user registration information, hashed</text>
<text text-anchor="start" x="383.36" y="-101.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">authentication credentials, access logs, etc.</text>
</g>
<!-- customer -->
<g id="node6" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="866.91,-1578.8 539.13,-1578.8 539.13,-1398.8 866.91,-1398.8 866.91,-1578.8"/>
<text text-anchor="start" x="584.74" y="-1503.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="559.19" y="-1479.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="670.92" y="-1461.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">accounts.</text>
</g>
<!-- mainframe -->
<g id="node7" class="node">
<title>mainframe</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1463.57,-228 1122.47,-228 1122.47,-48 1463.57,-48 1463.57,-228"/>
<text text-anchor="start" x="1176.86" y="-152.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Mainframe Banking System</text>
<text text-anchor="start" x="1156.69" y="-129.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Stores all of the core banking information</text>
<text text-anchor="start" x="1142.53" y="-111.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">about customers, accounts, transactions, etc.</text>
</g>
<!-- email -->
<g id="node8" class="node">
<title>email</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-1578.8 0,-1578.8 0,-1398.8 320.04,-1398.8 320.04,-1578.8"/>
<text text-anchor="start" x="98.79" y="-1503.1" font-family="Arial" font-size="19.00" fill="#f8fafc">E&#45;mail System</text>
<text text-anchor="start" x="29.96" y="-1479.9" font-family="Arial" font-size="15.00" fill="#cbd5e1">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="134.18" y="-1461.9" font-family="Arial" font-size="15.00" fill="#cbd5e1">system.</text>
</g>
<!-- mobileapp&#45;&gt;apiapplication -->
<g id="edge4" class="edge">
<title>mobileapp&#45;&gt;apiapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M408.94,-1050.39C417.35,-966.55 432.66,-837.48 455.87,-727.2 466.39,-677.22 481.79,-622.61 495.66,-577.34"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="498.1,-578.37 497.8,-570.43 493.08,-576.82 498.1,-578.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="455.87,-797.4 455.87,-837 577.02,-837 577.02,-797.4 455.87,-797.4"/>
<text text-anchor="start" x="458.87" y="-821.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="458.87" y="-804.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- webapplication&#45;&gt;singlepageapplication -->
<g id="edge5" class="edge">
<title>webapplication&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M824.54,-1050.07C818.77,-1008.87 811.88,-959.76 805.93,-917.37"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="808.54,-917.09 804.9,-910.03 803.34,-917.82 808.54,-917.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="815.87,-967.2 815.87,-990 1065.74,-990 1065.74,-967.2 815.87,-967.2"/>
<text text-anchor="start" x="818.87" y="-974.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Delivers to the customer&#39;s web browser</text>
</g>
<!-- singlepageapplication&#45;&gt;apiapplication -->
<g id="edge6" class="edge">
<title>singlepageapplication&#45;&gt;apiapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M722.66,-727.5C686.19,-680.87 641.42,-623.62 604.02,-575.79"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="606.16,-574.26 599.47,-569.97 602.02,-577.5 606.16,-574.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="667.94,-627.6 667.94,-667.2 789.09,-667.2 789.09,-627.6 667.94,-627.6"/>
<text text-anchor="start" x="670.94" y="-651.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="670.94" y="-634.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- apiapplication&#45;&gt;database -->
<g id="edge7" class="edge">
<title>apiapplication&#45;&gt;database</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M528.02,-387.9C528.02,-342.22 528.02,-286.34 528.02,-239.12"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="530.65,-239.39 528.02,-231.89 525.4,-239.4 530.65,-239.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="528.02,-288 528.02,-327.6 689.64,-327.6 689.64,-288 528.02,-288"/>
<text text-anchor="start" x="531.02" y="-312" font-family="Arial" font-size="14.00" fill="#c6c6c6">Reads from and writes to</text>
<text text-anchor="start" x="531.02" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">[SQL/TCPS]</text>
</g>
<!-- apiapplication&#45;&gt;mainframe -->
<g id="edge8" class="edge">
<title>apiapplication&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M692.63,-408.55C809.44,-359.68 969.61,-291.5 1109.02,-228 1110.43,-227.36 1111.85,-226.71 1113.27,-226.06"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1114.26,-228.49 1119.98,-222.97 1112.07,-223.72 1114.26,-228.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="966.52,-288 966.52,-327.6 1087.67,-327.6 1087.67,-288 966.52,-288"/>
<text text-anchor="start" x="969.52" y="-312" font-family="Arial" font-size="14.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="969.52" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- apiapplication&#45;&gt;email -->
<g id="edge9" class="edge">
<title>apiapplication&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M454.54,-567.21C370.85,-674.05 238.31,-862.71 181.02,-1050 146.68,-1162.28 146.1,-1298.26 151.07,-1388.58"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="148.43,-1388.46 151.49,-1395.79 153.67,-1388.15 148.43,-1388.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="209.17,-967.2 209.17,-990 334.23,-990 334.23,-967.2 209.17,-967.2"/>
<text text-anchor="start" x="212.17" y="-974.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- customer&#45;&gt;mobileapp -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;mobileapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M565.46,-1398.86C542.84,-1380.65 520.85,-1360.39 502.56,-1338.8 477.58,-1309.32 456.62,-1272.66 440.34,-1238.94"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="442.75,-1237.9 437.17,-1232.24 438.01,-1240.15 442.75,-1237.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="502.56,-1299.2 502.56,-1338.8 735.02,-1338.8 735.02,-1299.2 502.56,-1299.2"/>
<text text-anchor="start" x="505.56" y="-1323.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="505.56" y="-1306.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;webapplication -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;webapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M737.35,-1398.94C756.19,-1350.2 779.58,-1289.67 798.96,-1239.5"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="801.31,-1240.69 801.57,-1232.75 796.42,-1238.8 801.31,-1240.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="774.04,-1307.6 774.04,-1330.4 983.89,-1330.4 983.89,-1307.6 774.04,-1307.6"/>
<text text-anchor="start" x="777.04" y="-1314.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Visits bigbank.com using HTTPS</text>
</g>
<!-- customer&#45;&gt;singlepageapplication -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M866.68,-1423.37C915.47,-1400.37 967.49,-1371.84 1011.02,-1338.8 1137.87,-1242.53 1082.51,-1148.9 1093.02,-990 1093.69,-979.89 1098.36,-975.81 1093.02,-967.2 1063.13,-919.05 1012.54,-885.98 961.29,-863.49"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="962.43,-861.12 954.5,-860.59 960.37,-865.95 962.43,-861.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1096.28,-1120.2 1096.28,-1159.8 1328.74,-1159.8 1328.74,-1120.2 1096.28,-1120.2"/>
<text text-anchor="start" x="1099.28" y="-1144.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="1099.28" y="-1127.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
<!-- email&#45;&gt;customer -->
<g id="edge10" class="edge">
<title>email&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M320,-1488.8C385.76,-1488.8 462.09,-1488.8 529.22,-1488.8"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="528.95,-1491.43 536.45,-1488.8 528.95,-1486.18 528.95,-1491.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="374.45,-1491.8 374.45,-1514.6 484.72,-1514.6 484.72,-1491.8 374.45,-1491.8"/>
<text text-anchor="start" x="377.45" y="-1499" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
</g>
</svg>
`;case"context":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1172pt" height="942pt"
 viewBox="0.00 0.00 1171.50 941.70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 926.65)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-903.6 860,-903.6 860,-282.8 8,-282.8"/>
<text text-anchor="start" x="16" y="-890.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<!-- internetbankingsystem -->
<g id="node1" class="node">
<title>internetbankingsystem</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="819.87,-842.4 492.13,-842.4 492.13,-662.4 819.87,-662.4 819.87,-842.4"/>
<text text-anchor="start" x="552.5" y="-766.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Internet Banking System</text>
<text text-anchor="start" x="512.19" y="-743.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Allows customers to view information about</text>
<text text-anchor="start" x="517.17" y="-725.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">their bank accounts, and make payments.</text>
</g>
<!-- mainframe -->
<g id="node2" class="node">
<title>mainframe</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="389.55,-502.8 48.45,-502.8 48.45,-322.8 389.55,-322.8 389.55,-502.8"/>
<text text-anchor="start" x="102.84" y="-427.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Mainframe Banking System</text>
<text text-anchor="start" x="82.67" y="-403.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">Stores all of the core banking information</text>
<text text-anchor="start" x="68.51" y="-385.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">about customers, accounts, transactions, etc.</text>
</g>
<!-- email -->
<g id="node3" class="node">
<title>email</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="820.02,-502.8 499.98,-502.8 499.98,-322.8 820.02,-322.8 820.02,-502.8"/>
<text text-anchor="start" x="598.77" y="-427.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">E&#45;mail System</text>
<text text-anchor="start" x="529.94" y="-403.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="634.16" y="-385.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">system.</text>
</g>
<!-- customer -->
<g id="node4" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1013.89,-180 686.11,-180 686.11,0 1013.89,0 1013.89,-180"/>
<text text-anchor="start" x="731.72" y="-104.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="706.17" y="-81.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="817.9" y="-63.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">accounts.</text>
</g>
<!-- internetbankingsystem&#45;&gt;mainframe -->
<g id="edge1" class="edge">
<title>internetbankingsystem&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M492.17,-685.13C447.13,-662.65 400.04,-634.86 361.21,-602.4 330.31,-576.56 302.19,-542.79 279.26,-510.97"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="281.47,-509.56 274.99,-504.96 277.19,-512.6 281.47,-509.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="361.21,-562.8 361.21,-602.4 631,-602.4 631,-562.8 361.21,-562.8"/>
<text text-anchor="start" x="364.21" y="-586.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Gets account information from, and makes</text>
<text text-anchor="start" x="364.21" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
<!-- internetbankingsystem&#45;&gt;email -->
<g id="edge2" class="edge">
<title>internetbankingsystem&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M657.05,-662.7C657.6,-616.74 658.26,-560.47 658.82,-513.07"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="661.45,-513.34 658.91,-505.81 656.2,-513.28 661.45,-513.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="658.12,-571.2 658.12,-594 783.18,-594 783.18,-571.2 658.12,-571.2"/>
<text text-anchor="start" x="661.12" y="-578.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- email&#45;&gt;customer -->
<g id="edge3" class="edge">
<title>email&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M712.67,-322.87C737.33,-281.23 766.77,-231.52 792.06,-188.83"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="794.28,-190.22 795.85,-182.43 789.77,-187.55 794.28,-190.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="760.7,-240 760.7,-262.8 870.97,-262.8 870.97,-240 760.7,-240"/>
<text text-anchor="start" x="763.7" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
<!-- customer&#45;&gt;internetbankingsystem -->
<g id="edge4" class="edge">
<title>customer&#45;&gt;internetbankingsystem</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M883.55,-179.72C889.55,-199.3 894.88,-220.13 898,-240 916.2,-355.83 913.75,-392.14 875,-502.8 854.78,-560.54 813.55,-613.21 772.27,-655.07"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="770.44,-653.19 766.98,-660.35 774.14,-656.91 770.44,-653.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="908.94,-393 908.94,-432.6 1141.4,-432.6 1141.4,-393 908.94,-393"/>
<text text-anchor="start" x="911.94" y="-417" font-family="Arial" font-size="14.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="911.94" y="-400.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
</g>
</svg>
`;case"customer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1786pt" height="708pt"
 viewBox="0.00 0.00 1786.10 708.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 693.05)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#3a404a" stroke="#292f37" points="8,-8 8,-390.4 1748,-390.4 1748,-8 8,-8"/>
<text text-anchor="start" x="16" y="-377.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_internetbankingsystem</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="48,-48 48,-329.2 888,-329.2 888,-48 48,-48"/>
<text text-anchor="start" x="56" y="-316.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">INTERNET BANKING SYSTEM</text>
</g>
<!-- singlepageapplication -->
<g id="node1" class="node">
<title>singlepageapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="408.02,-268 87.98,-268 87.98,-88 408.02,-88 408.02,-268"/>
<text text-anchor="start" x="147.13" y="-211.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Single&#45;Page Application</text>
<text text-anchor="start" x="180.79" y="-189.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">JavaScript and Angular</text>
<text text-anchor="start" x="132.51" y="-168.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Provides all of the Internet banking</text>
<text text-anchor="start" x="119.19" y="-150.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">functionality to customers via their web</text>
<text text-anchor="start" x="219.24" y="-132.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">browser.</text>
</g>
<!-- mobileapp -->
<g id="node2" class="node">
<title>mobileapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="848.34,-268 517.66,-268 517.66,-88 848.34,-88 848.34,-268"/>
<text text-anchor="start" x="635.47" y="-211.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Mobile App</text>
<text text-anchor="start" x="658.8" y="-189.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Xamarin</text>
<text text-anchor="start" x="551.26" y="-168.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Provides a limited subset of the Internet</text>
<text text-anchor="start" x="541.68" y="-150.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">banking functionality to customers via their</text>
<text text-anchor="start" x="635.06" y="-132.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">mobile device.</text>
</g>
<!-- supportstaff -->
<g id="node3" class="node">
<title>supportstaff</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1278.02,-268 957.98,-268 957.98,-88 1278.02,-88 1278.02,-268"/>
<text text-anchor="start" x="1020.33" y="-183.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Customer Service Staff</text>
<text text-anchor="start" x="989.2" y="-160.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Customer service staff within the bank.</text>
</g>
<!-- atm -->
<g id="node4" class="node">
<title>atm</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1708.02,-268 1387.98,-268 1387.98,-88 1708.02,-88 1708.02,-268"/>
<text text-anchor="start" x="1527.95" y="-183.3" font-family="Arial" font-size="19.00" fill="#eff6ff">ATM</text>
<text text-anchor="start" x="1429.63" y="-160.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Allows customers to withdraw cash.</text>
</g>
<!-- customer -->
<g id="node5" class="node">
<title>customer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1281.89,-678 954.11,-678 954.11,-498 1281.89,-498 1281.89,-678"/>
<text text-anchor="start" x="999.72" y="-602.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Personal Banking Customer</text>
<text text-anchor="start" x="974.17" y="-579.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="1085.9" y="-561.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">accounts.</text>
</g>
<!-- customer&#45;&gt;singlepageapplication -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M954.44,-567.12C813.8,-543.57 610.84,-493.63 463,-390.4 415.93,-357.53 369.73,-314.03 332.29,-275.03"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="334.57,-273.61 327.49,-270 330.77,-277.24 334.57,-273.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="525.53,-398.4 525.53,-438 757.99,-438 757.99,-398.4 525.53,-398.4"/>
<text text-anchor="start" x="528.53" y="-422.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="528.53" y="-405.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;mobileapp -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;mobileapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M954.44,-508.21C920.73,-487.95 886.9,-464.33 858.54,-438 808.77,-391.8 765.75,-328.95 734.75,-276.74"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="737.09,-275.54 731.02,-270.4 732.56,-278.2 737.09,-275.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="858.54,-398.4 858.54,-438 1091,-438 1091,-398.4 858.54,-398.4"/>
<text text-anchor="start" x="861.54" y="-422.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="861.54" y="-405.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;supportstaff -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;supportstaff</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1118,-498.22C1118,-433.33 1118,-345.31 1118,-278.13"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1120.63,-278.48 1118,-270.98 1115.38,-278.48 1120.63,-278.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1118,-406.8 1118,-429.6 1233.72,-429.6 1233.72,-406.8 1118,-406.8"/>
<text text-anchor="start" x="1121" y="-414" font-family="Arial" font-size="14.00" fill="#c6c6c6">Asks questions to</text>
</g>
<!-- customer&#45;&gt;atm -->
<g id="edge4" class="edge">
<title>customer&#45;&gt;atm</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1216.62,-498.19C1253.42,-464.7 1295.38,-426.07 1333,-390.4 1372.26,-353.17 1414.87,-311.54 1451.72,-275.14"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1453.37,-277.2 1456.85,-270.06 1449.68,-273.46 1453.37,-277.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1321.6,-406.8 1321.6,-429.6 1463.77,-429.6 1463.77,-406.8 1321.6,-406.8"/>
<text text-anchor="start" x="1324.6" y="-414" font-family="Arial" font-size="14.00" fill="#c6c6c6">Withdraws cash using</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+t)}}export{e as dotSource,n as svgSource};
