import{a as T,j as t,S as n,C as s,q as l,n as o}from"./index-DCwctYmg.js";import{P as L,a as i,c as r,b as f,C as E,d as c}from"./view_viewId_.css-CDnAWAE5-CT7qWiFB.js";function D(e){switch(e){case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.389,
        outputorder=nodesfirst,
        pack=180,
        packmode=array_3,
        pad=0.139,
        penwidth=1,
        rankdir=TB,
        ranksep=1.528,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.57,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style="filled,rounded",
        width=4.584
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
            margin=40,
            style=filled
        ];
        email [fillcolor="#64748b",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">E-mail System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">The internal Microsoft Exchange e-mail</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">system.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.email",
            likec4_level=1];
        atm [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">ATM</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows customers to withdraw cash.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.atm",
            likec4_level=1];
        mainframe [fillcolor="#0284c7",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Mainframe Banking System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Stores all of the core banking information</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.mainframe",
            likec4_level=1];
        atm -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.atm:bigbank.mainframe",
            style=dashed];
        internetbankingsystem [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Internet Banking System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows customers to view information about</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">their bank accounts, and make payments.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem",
            likec4_level=1];
        internetbankingsystem -> email [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Sends e-mail using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem:bigbank.email",
            minlen=1,
            style=dashed];
        internetbankingsystem -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Gets account information from, and</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">makes payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem:bigbank.mainframe",
            style=dashed];
        backoffice [fillcolor="#0284c7",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Back Office Staff</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Administration and support staff within the</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">bank.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.backoffice",
            likec4_level=1];
        backoffice -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.backoffice:bigbank.mainframe",
            minlen=1,
            style=dashed];
        supportstaff [fillcolor="#0284c7",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Customer Service Staff</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Customer service staff within the bank.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.supportStaff",
            likec4_level=1];
        supportstaff -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.supportStaff:bigbank.mainframe",
            style=dashed];
    }
    customer [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Personal Banking Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">A customer of the bank, with personal bank</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">accounts.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    customer -> atm [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Withdraws cash using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.atm",
        minlen=1,
        style=dashed];
    customer -> internetbankingsystem [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Views account balances, and makes</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
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
        nodesep=1.389,
        outputorder=nodesfirst,
        pack=180,
        packmode=array_3,
        pad=0.139,
        penwidth=1,
        rankdir=TB,
        ranksep=1.528,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.57,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style="filled,rounded",
        width=4.584
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
            margin=40,
            style=filled
        ];
        internetbankingsystem [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Internet Banking System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows customers to view information about</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">their bank accounts, and make payments.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem",
            likec4_level=1];
        email [fillcolor="#0284c7",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">E-mail System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">The internal Microsoft Exchange e-mail</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">system.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.email",
            likec4_level=1];
        internetbankingsystem -> email [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Sends e-mail using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem:bigbank.email",
            minlen=1,
            style=dashed];
        mainframe [fillcolor="#0284c7",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Mainframe Banking System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Stores all of the core banking information</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.mainframe",
            likec4_level=1];
        internetbankingsystem -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Gets account information from, and</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">makes payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem:bigbank.mainframe",
            minlen=1,
            style=dashed];
    }
    customer [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Personal Banking Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">A customer of the bank, with personal bank</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">accounts.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    customer -> internetbankingsystem [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Views account balances, and makes</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
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
        nodesep=1.389,
        outputorder=nodesfirst,
        pack=180,
        packmode=array_3,
        pad=0.139,
        penwidth=1,
        rankdir=TB,
        ranksep=1.528,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.57,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style="filled,rounded",
        width=4.584
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
            margin=40,
            style=filled
        ];
        mobileapp [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Mobile App</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Xamarin</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides a limited subset of the Internet</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">banking functionality to customers via their</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">mobile device.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.mobileApp",
            likec4_level=1];
        apiapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">API Application</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Java and Spring MVC</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides Internet banking functionality via a</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">JSON/HTTPS API.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication",
            likec4_level=1];
        mobileapp -> apiapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.mobileApp:bigbank.internetBankingSystem.apiApplication",
            style=dashed];
        webapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Web Application</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Java and Spring MVC</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Delivers the static content and the Internet</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">banking single page application.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.webApplication",
            likec4_level=1];
        singlepageapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Single-Page Application</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#bfdbfe">JavaScript and Angular</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides all of the Internet banking</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">functionality to customers via their web</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">browser.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.singlePageApplication",
            likec4_level=1,
            margin="0.417,0.445"];
        webapplication -> singlepageapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Delivers to the customer's web</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">browser</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.webApplication:bigbank.internetBankingSystem.singlePageApplication",
            style=dashed];
        singlepageapplication -> apiapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.singlePageApplication:bigbank.internetBankingSystem.apiApplication",
            style=dashed];
        database [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Database</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Oracle Database Schema</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Stores user registration information, hashed</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">authentication credentials, access logs, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.database",
            likec4_level=1,
            margin="0.362,0.417",
            penwidth=2,
            shape=cylinder];
        apiapplication -> database [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Reads from and writes to</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[SQL/TCPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication:bigbank.internetBankingSystem.database",
            minlen=1,
            style=dashed];
    }
    customer [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Personal Banking Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">A customer of the bank, with personal bank</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">accounts.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    customer -> mobileapp [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Views account balances, and makes</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.internetBankingSystem.mobileApp",
        minlen=1,
        style=dashed];
    customer -> webapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Visits bigbank.com using HTTPS</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.internetBankingSystem.webApplication",
        minlen=1,
        style=dashed];
    customer -> singlepageapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Views account balances, and makes</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.internetBankingSystem.singlePageApplication",
        style=dashed];
    mainframe [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Mainframe Banking System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Stores all of the core banking information</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.mainframe",
        likec4_level=0];
    email [fillcolor="#64748b",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">E-mail System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">The internal Microsoft Exchange e-mail</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">system.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.email",
        likec4_level=0];
    email -> customer [constraint=false,
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Sends e-mails to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.email:customer",
        style=dashed];
    apiapplication -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
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
        nodesep=1.389,
        outputorder=nodesfirst,
        pack=180,
        packmode=array_3,
        pad=0.139,
        penwidth=1,
        rankdir=TB,
        ranksep=1.528,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.57,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style="filled,rounded",
        width=4.584
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
            margin=40,
            style=filled
        ];
        signincontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Sign In Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring MVC Rest Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows users to sign in to the Internet</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Banking System.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.signinController",
            likec4_level=1];
        securitycomponent [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Security Component</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring Bean</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides functionality related to signing in,</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">changing passwords, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.securityComponent",
            likec4_level=1];
        signincontroller -> securitycomponent [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.signinController:bigbank.internetBankingSystem.apiApplication.securityComponent",
            style=dashed];
        accountssummarycontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Accounts Summary Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring MVC Rest Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides customers with a summary of their</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">bank accounts.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.accountsSummaryController",
            likec4_level=1];
        mainframebankingsystemfacade [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Mainframe Banking System Facade</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring Bean</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">A facade onto the mainframe banking system.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.mainframeBankingSystemFacade",
            likec4_level=1];
        accountssummarycontroller -> mainframebankingsystemfacade [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.accountsSummaryController:bigbank.internetBankingSystem.apiApplication.mainframeBankingSystemFacade",
            minlen=1,
            style=dashed];
        resetpasswordcontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Reset Password Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring MVC Rest Controller</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Allows users to reset their passwords with a</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">single use URL.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.resetPasswordController",
            likec4_level=1];
        resetpasswordcontroller -> securitycomponent [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.resetPasswordController:bigbank.internetBankingSystem.apiApplication.securityComponent",
            style=dashed];
        emailcomponent [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">E-mail Component</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Spring Bean</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Sends e-mails to users.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.emailComponent",
            likec4_level=1];
        resetpasswordcontroller -> emailcomponent [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.apiApplication.resetPasswordController:bigbank.internetBankingSystem.apiApplication.emailComponent",
            minlen=1,
            style=dashed];
    }
    singlepageapplication [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Single-Page Application</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#B6ECF7">JavaScript and Angular</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Provides all of the Internet banking</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">functionality to customers via their web</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">browser.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.singlePageApplication",
        likec4_level=0,
        margin="0.417,0.445"];
    singlepageapplication -> signincontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.singlePageApplication:bigbank.internetBankingSystem.apiApplication.signinController",
        style=dashed];
    singlepageapplication -> accountssummarycontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.singlePageApplication:bigbank.internetBankingSystem.apiApplication.accountsSummaryController",
        style=dashed];
    singlepageapplication -> resetpasswordcontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.singlePageApplication:bigbank.internetBankingSystem.apiApplication.resetPasswordController",
        style=dashed];
    mobileapp [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Mobile App</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#B6ECF7">Xamarin</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Provides a limited subset of the Internet</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">banking functionality to customers via their</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">mobile device.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.mobileApp",
        likec4_level=0];
    mobileapp -> signincontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.mobileApp:bigbank.internetBankingSystem.apiApplication.signinController",
        style=dashed];
    mobileapp -> accountssummarycontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.mobileApp:bigbank.internetBankingSystem.apiApplication.accountsSummaryController",
        style=dashed];
    mobileapp -> resetpasswordcontroller [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.mobileApp:bigbank.internetBankingSystem.apiApplication.resetPasswordController",
        style=dashed];
    mainframe [fillcolor="#64748b",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Mainframe Banking System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">Stores all of the core banking information</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.mainframe",
        likec4_level=0];
    database [color="#475569",
        fillcolor="#64748b",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Database</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#cbd5e1">Oracle Database Schema</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">Stores user registration information, hashed</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">authentication credentials, access logs, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.database",
        likec4_level=0,
        margin="0.362,0.417",
        penwidth=2,
        shape=cylinder];
    email [fillcolor="#64748b",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">E-mail System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">The internal Microsoft Exchange e-mail</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#cbd5e1">system.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.email",
        likec4_level=0];
    mainframebankingsystemfacade -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Makes API calls to</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[JSON/HTTPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank.internetBankingSystem.apiApplication.mainframeBankingSystemFacade:bigbank.mainframe",
        minlen=1,
        style=dashed];
    securitycomponent -> database [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Reads from and writes to</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[SQL/TCPS]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
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
        nodesep=1.389,
        outputorder=nodesfirst,
        pack=180,
        packmode=array_3,
        pad=0.139,
        penwidth=1,
        rankdir=TB,
        ranksep=1.528,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.57,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style="filled,rounded",
        width=4.584
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
            margin=40,
            style=filled
        ];
        singlepageapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Single-Page Application</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#bfdbfe">JavaScript and Angular</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides all of the Internet banking</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">functionality to customers via their web</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">browser.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.internetBankingSystem.singlePageApplication",
            likec4_level=1,
            margin="0.417,0.445"];
        mobileapp [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Mobile App</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Xamarin</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides a limited subset of the Internet</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">banking functionality to customers via their</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">mobile device.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Personal Banking Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#c2f0c2">A customer of the bank, with personal bank</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#c2f0c2">accounts.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    customer -> singlepageapplication [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Views account balances, and makes</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.internetBankingSystem.singlePageApplication",
        minlen=1,
        style=dashed];
    customer -> mobileapp [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Views account balances, and makes</FONT></TD></TR><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">payments using</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
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
    atm -> customer [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Sends e-mails to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank:customer",
        ltail=cluster_bigbank,
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
        nodesep=1.389,
        outputorder=nodesfirst,
        pack=180,
        packmode=array_3,
        pad=0.139,
        penwidth=1,
        rankdir=TB,
        ranksep=1.528,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.57,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style="filled,rounded",
        width=4.584
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
            margin=40,
            style=filled
        ];
        backoffice [fillcolor="#0284c7",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Back Office Staff</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Administration and support staff within the</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">bank.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.backoffice",
            likec4_level=1];
        mainframe [fillcolor="#0284c7",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Mainframe Banking System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Stores all of the core banking information</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">about customers, accounts, transactions, etc.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.mainframe",
            likec4_level=1];
        backoffice -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.backoffice:bigbank.mainframe",
            minlen=1,
            style=dashed];
        supportstaff [fillcolor="#0284c7",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Customer Service Staff</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Customer service staff within the bank.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.supportStaff",
            likec4_level=1];
        supportstaff -> mainframe [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Uses</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="bigbank.supportStaff:bigbank.mainframe",
            style=dashed];
    }
    customer [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Personal Banking Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">A customer of the bank, with personal bank</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">accounts.</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    customer -> supportstaff [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Asks questions to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:bigbank.supportStaff",
        minlen=1,
        style=dashed];
    mainframe -> customer [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Sends e-mails to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="bigbank:customer",
        ltail=cluster_bigbank,
        minlen=1,
        style=dashed];
}
`;default:throw new Error("Unknown viewId: "+e)}}function O(e){switch(e){case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 11.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1876pt" height="938pt"
 viewBox="0.00 0.00 1875.84 938.14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(10.01 928.13)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-630.88 1708,-630.88 1708,-8 8,-8"/>
<text text-anchor="start" x="16" y="-616.18" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#bfdbfe" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<!-- email -->
<g id="node1" class="node">
<title>email</title>
<path fill="#64748b" stroke="#2563eb" stroke-width="0" d="M1656.02,-233.04C1656.02,-233.04 1349.98,-233.04 1349.98,-233.04 1343.98,-233.04 1337.98,-227.04 1337.98,-221.04 1337.98,-221.04 1337.98,-60 1337.98,-60 1337.98,-54 1343.98,-48 1349.98,-48 1349.98,-48 1656.02,-48 1656.02,-48 1662.02,-48 1668.02,-54 1668.02,-60 1668.02,-60 1668.02,-221.04 1668.02,-221.04 1668.02,-227.04 1662.02,-233.04 1656.02,-233.04"/>
<text text-anchor="start" x="1438.55" y="-153.32" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">E&#45;mail System</text>
<text text-anchor="start" x="1381.61" y="-129.72" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="1478.89" y="-112.92" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">system.</text>
</g>
<!-- atm -->
<g id="node2" class="node">
<title>atm</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M366.02,-567.28C366.02,-567.28 59.98,-567.28 59.98,-567.28 53.98,-567.28 47.98,-561.28 47.98,-555.28 47.98,-555.28 47.98,-394.24 47.98,-394.24 47.98,-388.24 53.98,-382.24 59.98,-382.24 59.98,-382.24 366.02,-382.24 366.02,-382.24 372.02,-382.24 378.02,-388.24 378.02,-394.24 378.02,-394.24 378.02,-555.28 378.02,-555.28 378.02,-561.28 372.02,-567.28 366.02,-567.28"/>
<text text-anchor="start" x="191.89" y="-479.16" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">ATM</text>
<text text-anchor="start" x="102.52" y="-455.56" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Allows customers to withdraw cash.</text>
</g>
<!-- mainframe -->
<g id="node3" class="node">
<title>mainframe</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M966.52,-233.04C966.52,-233.04 647.48,-233.04 647.48,-233.04 641.48,-233.04 635.48,-227.04 635.48,-221.04 635.48,-221.04 635.48,-60 635.48,-60 635.48,-54 641.48,-48 647.48,-48 647.48,-48 966.52,-48 966.52,-48 972.52,-48 978.52,-54 978.52,-60 978.52,-60 978.52,-221.04 978.52,-221.04 978.52,-227.04 972.52,-233.04 966.52,-233.04"/>
<text text-anchor="start" x="684.73" y="-153.32" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Mainframe Banking System</text>
<text text-anchor="start" x="679.76" y="-129.72" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Stores all of the core banking information</text>
<text text-anchor="start" x="666.54" y="-112.92" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">about customers, accounts, transactions, etc.</text>
</g>
<!-- internetbankingsystem -->
<g id="node4" class="node">
<title>internetbankingsystem</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M1656.29,-567.28C1656.29,-567.28 1349.71,-567.28 1349.71,-567.28 1343.71,-567.28 1337.71,-561.28 1337.71,-555.28 1337.71,-555.28 1337.71,-394.24 1337.71,-394.24 1337.71,-388.24 1343.71,-382.24 1349.71,-382.24 1349.71,-382.24 1656.29,-382.24 1656.29,-382.24 1662.29,-382.24 1668.29,-388.24 1668.29,-394.24 1668.29,-394.24 1668.29,-555.28 1668.29,-555.28 1668.29,-561.28 1662.29,-567.28 1656.29,-567.28"/>
<text text-anchor="start" x="1394.05" y="-487.56" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Internet Banking System</text>
<text text-anchor="start" x="1368.78" y="-463.96" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Allows customers to view information about</text>
<text text-anchor="start" x="1373.43" y="-447.16" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">their bank accounts, and make payments.</text>
</g>
<!-- backoffice -->
<g id="node5" class="node">
<title>backoffice</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M796.02,-567.28C796.02,-567.28 489.98,-567.28 489.98,-567.28 483.98,-567.28 477.98,-561.28 477.98,-555.28 477.98,-555.28 477.98,-394.24 477.98,-394.24 477.98,-388.24 483.98,-382.24 489.98,-382.24 489.98,-382.24 796.02,-382.24 796.02,-382.24 802.02,-382.24 808.02,-388.24 808.02,-394.24 808.02,-394.24 808.02,-555.28 808.02,-555.28 808.02,-561.28 802.02,-567.28 796.02,-567.28"/>
<text text-anchor="start" x="568.53" y="-487.56" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Back Office Staff</text>
<text text-anchor="start" x="513.04" y="-463.96" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Administration and support staff within the</text>
<text text-anchor="start" x="625.88" y="-447.16" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">bank.</text>
</g>
<!-- supportstaff -->
<g id="node6" class="node">
<title>supportstaff</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M1226.02,-567.28C1226.02,-567.28 919.98,-567.28 919.98,-567.28 913.98,-567.28 907.98,-561.28 907.98,-555.28 907.98,-555.28 907.98,-394.24 907.98,-394.24 907.98,-388.24 913.98,-382.24 919.98,-382.24 919.98,-382.24 1226.02,-382.24 1226.02,-382.24 1232.02,-382.24 1238.02,-388.24 1238.02,-394.24 1238.02,-394.24 1238.02,-555.28 1238.02,-555.28 1238.02,-561.28 1232.02,-567.28 1226.02,-567.28"/>
<text text-anchor="start" x="970.19" y="-479.16" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Customer Service Staff</text>
<text text-anchor="start" x="952.78" y="-455.56" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Customer service staff within the bank.</text>
</g>
<!-- customer -->
<g id="node7" class="node">
<title>customer</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M1493.3,-918.12C1493.3,-918.12 1186.7,-918.12 1186.7,-918.12 1180.7,-918.12 1174.7,-912.12 1174.7,-906.12 1174.7,-906.12 1174.7,-745.08 1174.7,-745.08 1174.7,-739.08 1180.7,-733.08 1186.7,-733.08 1186.7,-733.08 1493.3,-733.08 1493.3,-733.08 1499.3,-733.08 1505.3,-739.08 1505.3,-745.08 1505.3,-745.08 1505.3,-906.12 1505.3,-906.12 1505.3,-912.12 1499.3,-918.12 1493.3,-918.12"/>
<text text-anchor="start" x="1215.49" y="-838.4" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="1205.76" y="-814.8" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="1310.04" y="-798" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">accounts.</text>
</g>
<!-- email&#45;&gt;customer -->
<g id="edge9" class="edge">
<title>email&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1618.31,-232.78C1659.49,-273.31 1700.13,-324.86 1718,-382.24 1750.87,-487.75 1757.9,-527.83 1718,-630.88 1685.77,-714.12 1599.51,-761.95 1517.52,-789.25"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1516.53,-785.89 1508.08,-792.28 1518.68,-792.55 1516.53,-785.89"/>
<text text-anchor="start" x="1755" y="-470.86" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
<!-- atm&#45;&gt;mainframe -->
<g id="edge1" class="edge">
<title>atm&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M376.49,-382.31C455.87,-337.92 551.31,-284.53 632.14,-239.33"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="633.78,-242.42 640.8,-234.48 630.36,-236.31 633.78,-242.42"/>
<text text-anchor="start" x="537" y="-303.74" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- internetbankingsystem&#45;&gt;email -->
<g id="edge2" class="edge">
<title>internetbankingsystem&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1503,-382.53C1503,-340.14 1503,-289.5 1503,-245.62"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1506.5,-245.86 1503,-235.86 1499.5,-245.86 1506.5,-245.86"/>
<text text-anchor="start" x="1513" y="-303.74" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- internetbankingsystem&#45;&gt;mainframe -->
<g id="edge3" class="edge">
<title>internetbankingsystem&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1338.06,-395.02C1233.43,-345.08 1097.95,-280.41 990.02,-228.88"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="991.6,-225.76 981.06,-224.61 988.58,-232.08 991.6,-225.76"/>
<text text-anchor="start" x="1185" y="-311.54" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Gets account information from, and</text>
<text text-anchor="start" x="1185" y="-295.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">makes payments using</text>
</g>
<!-- backoffice&#45;&gt;mainframe -->
<g id="edge4" class="edge">
<title>backoffice&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M688.03,-382.53C709.14,-339.77 734.38,-288.63 756.17,-244.49"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="759.3,-246.06 760.59,-235.54 753.02,-242.96 759.3,-246.06"/>
<text text-anchor="start" x="739" y="-303.74" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- supportstaff&#45;&gt;mainframe -->
<g id="edge5" class="edge">
<title>supportstaff&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M999.96,-382.53C965.29,-339.23 923.74,-287.33 888.09,-242.8"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="890.98,-240.81 882,-235.19 885.51,-245.19 890.98,-240.81"/>
<text text-anchor="start" x="957" y="-303.74" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- customer&#45;&gt;atm -->
<g id="edge6" class="edge">
<title>customer&#45;&gt;atm</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1174.72,-810.26C987,-789.32 674.77,-740.24 428,-630.88 394.78,-616.16 361.6,-595.77 331.6,-574.6"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="333.76,-571.84 323.59,-568.85 329.68,-577.52 333.76,-571.84"/>
<text text-anchor="start" x="555" y="-654.58" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Withdraws cash using</text>
</g>
<!-- customer&#45;&gt;internetbankingsystem -->
<g id="edge7" class="edge">
<title>customer&#45;&gt;internetbankingsystem</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1382.61,-733.4C1404.79,-685.93 1431.99,-627.72 1454.92,-578.65"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1458.01,-580.31 1459.07,-569.77 1451.67,-577.35 1458.01,-580.31"/>
<text text-anchor="start" x="1436" y="-662.38" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="1436" y="-646.78" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;supportstaff -->
<g id="edge8" class="edge">
<title>customer&#45;&gt;supportstaff</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1270.2,-733.4C1233.48,-685.43 1188.37,-626.49 1150.56,-577.1"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1153.56,-575.25 1144.7,-569.43 1148,-579.5 1153.56,-575.25"/>
<text text-anchor="start" x="1236" y="-654.58" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Asks questions to</text>
</g>
</g>
</svg>
`;case"context":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 11.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1136pt" height="930pt"
 viewBox="0.00 0.00 1136.30 929.54" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(10.01 919.53)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-278.64 8,-901.52 862,-901.52 862,-278.64 8,-278.64"/>
<text text-anchor="start" x="16" y="-886.82" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#bfdbfe" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<!-- internetbankingsystem -->
<g id="node1" class="node">
<title>internetbankingsystem</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M758.29,-837.92C758.29,-837.92 451.71,-837.92 451.71,-837.92 445.71,-837.92 439.71,-831.92 439.71,-825.92 439.71,-825.92 439.71,-664.88 439.71,-664.88 439.71,-658.88 445.71,-652.88 451.71,-652.88 451.71,-652.88 758.29,-652.88 758.29,-652.88 764.29,-652.88 770.29,-658.88 770.29,-664.88 770.29,-664.88 770.29,-825.92 770.29,-825.92 770.29,-831.92 764.29,-837.92 758.29,-837.92"/>
<text text-anchor="start" x="496.05" y="-758.2" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Internet Banking System</text>
<text text-anchor="start" x="470.78" y="-734.6" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Allows customers to view information about</text>
<text text-anchor="start" x="475.43" y="-717.8" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">their bank accounts, and make payments.</text>
</g>
<!-- email -->
<g id="node2" class="node">
<title>email</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M366.02,-503.68C366.02,-503.68 59.98,-503.68 59.98,-503.68 53.98,-503.68 47.98,-497.68 47.98,-491.68 47.98,-491.68 47.98,-330.64 47.98,-330.64 47.98,-324.64 53.98,-318.64 59.98,-318.64 59.98,-318.64 366.02,-318.64 366.02,-318.64 372.02,-318.64 378.02,-324.64 378.02,-330.64 378.02,-330.64 378.02,-491.68 378.02,-491.68 378.02,-497.68 372.02,-503.68 366.02,-503.68"/>
<text text-anchor="start" x="148.55" y="-423.96" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">E&#45;mail System</text>
<text text-anchor="start" x="91.61" y="-400.36" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="188.89" y="-383.56" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">system.</text>
</g>
<!-- mainframe -->
<g id="node3" class="node">
<title>mainframe</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M809.52,-503.68C809.52,-503.68 490.48,-503.68 490.48,-503.68 484.48,-503.68 478.48,-497.68 478.48,-491.68 478.48,-491.68 478.48,-330.64 478.48,-330.64 478.48,-324.64 484.48,-318.64 490.48,-318.64 490.48,-318.64 809.52,-318.64 809.52,-318.64 815.52,-318.64 821.52,-324.64 821.52,-330.64 821.52,-330.64 821.52,-491.68 821.52,-491.68 821.52,-497.68 815.52,-503.68 809.52,-503.68"/>
<text text-anchor="start" x="527.73" y="-423.96" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Mainframe Banking System</text>
<text text-anchor="start" x="522.76" y="-400.36" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Stores all of the core banking information</text>
<text text-anchor="start" x="509.54" y="-383.56" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">about customers, accounts, transactions, etc.</text>
</g>
<!-- customer -->
<g id="node4" class="node">
<title>customer</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M770.3,-185.04C770.3,-185.04 463.7,-185.04 463.7,-185.04 457.7,-185.04 451.7,-179.04 451.7,-173.04 451.7,-173.04 451.7,-12 451.7,-12 451.7,-6 457.7,0 463.7,0 463.7,0 770.3,0 770.3,0 776.3,0 782.3,-6 782.3,-12 782.3,-12 782.3,-173.04 782.3,-173.04 782.3,-179.04 776.3,-185.04 770.3,-185.04"/>
<text text-anchor="start" x="492.49" y="-105.32" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="482.76" y="-81.72" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="587.04" y="-64.92" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">accounts.</text>
</g>
<!-- internetbankingsystem&#45;&gt;email -->
<g id="edge1" class="edge">
<title>internetbankingsystem&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M497.11,-652.95C445.47,-609.19 383.54,-556.7 330.69,-511.91"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="333.14,-509.4 323.25,-505.6 328.61,-514.74 333.14,-509.4"/>
<text text-anchor="start" x="430" y="-574.38" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- internetbankingsystem&#45;&gt;mainframe -->
<g id="edge2" class="edge">
<title>internetbankingsystem&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M617.36,-653.17C623.1,-610.78 629.96,-560.14 635.9,-516.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="639.35,-516.85 637.23,-506.47 632.42,-515.91 639.35,-516.85"/>
<text text-anchor="start" x="638" y="-582.18" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Gets account information from, and</text>
<text text-anchor="start" x="638" y="-566.58" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">makes payments using</text>
</g>
<!-- email&#45;&gt;customer -->
<g id="edge4" class="edge">
<title>email&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M329.58,-318.79C379.84,-279.4 438.74,-233.23 490.09,-192.98"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="492.17,-195.81 497.88,-186.88 487.85,-190.3 492.17,-195.81"/>
<text text-anchor="start" x="437" y="-247.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
<!-- customer&#45;&gt;internetbankingsystem -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;internetbankingsystem</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M782.04,-178.44C818.14,-205.32 851.63,-238.67 872,-278.64 917.42,-367.75 873.06,-403.67 872,-503.68 871.56,-545.55 891.65,-562.04 870,-597.88 848.94,-632.75 816.35,-659.93 781.14,-680.88"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="779.7,-677.67 772.76,-685.68 783.18,-683.75 779.7,-677.67"/>
<text text-anchor="start" x="902" y="-415.06" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="902" y="-399.46" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
</g>
</g>
</svg>
`;case"ibsContainers":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 11.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1682pt" height="1632pt"
 viewBox="0.00 0.00 1682.04 1632.02" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(10.01 1622.01)">
<g id="clust1" class="cluster">
<title>cluster_internetbankingsystem</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1324.76 848,-1324.76 848,-8 8,-8"/>
<text text-anchor="start" x="16" y="-1310.06" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#bfdbfe" fill-opacity="0.701961">INTERNET BANKING SYSTEM</text>
</g>
<!-- mobileapp -->
<g id="node1" class="node">
<title>mobileapp</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M366.02,-1261.16C366.02,-1261.16 59.98,-1261.16 59.98,-1261.16 53.98,-1261.16 47.98,-1255.16 47.98,-1249.16 47.98,-1249.16 47.98,-1088.12 47.98,-1088.12 47.98,-1082.12 53.98,-1076.12 59.98,-1076.12 59.98,-1076.12 366.02,-1076.12 366.02,-1076.12 372.02,-1076.12 378.02,-1082.12 378.02,-1088.12 378.02,-1088.12 378.02,-1249.16 378.02,-1249.16 378.02,-1255.16 372.02,-1261.16 366.02,-1261.16"/>
<text text-anchor="start" x="162.97" y="-1199.54" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Mobile App</text>
<text text-anchor="start" x="190.66" y="-1177.74" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Xamarin</text>
<text text-anchor="start" x="90.05" y="-1156.54" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides a limited subset of the Internet</text>
<text text-anchor="start" x="81.1" y="-1139.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">banking functionality to customers via their</text>
<text text-anchor="start" x="168.26" y="-1122.94" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">mobile device.</text>
</g>
<!-- apiapplication -->
<g id="node2" class="node">
<title>apiapplication</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M791.09,-592.68C791.09,-592.68 482.91,-592.68 482.91,-592.68 476.91,-592.68 470.91,-586.68 470.91,-580.68 470.91,-580.68 470.91,-419.64 470.91,-419.64 470.91,-413.64 476.91,-407.64 482.91,-407.64 482.91,-407.64 791.09,-407.64 791.09,-407.64 797.09,-407.64 803.09,-413.64 803.09,-419.64 803.09,-419.64 803.09,-580.68 803.09,-580.68 803.09,-586.68 797.09,-592.68 791.09,-592.68"/>
<text text-anchor="start" x="569.18" y="-522.66" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">API Application</text>
<text text-anchor="start" x="578.64" y="-500.86" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Java and Spring MVC</text>
<text text-anchor="start" x="501.98" y="-479.66" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides Internet banking functionality via a</text>
<text text-anchor="start" x="578.27" y="-462.86" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">JSON/HTTPS API.</text>
</g>
<!-- webapplication -->
<g id="node3" class="node">
<title>webapplication</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M796.02,-1261.16C796.02,-1261.16 489.98,-1261.16 489.98,-1261.16 483.98,-1261.16 477.98,-1255.16 477.98,-1249.16 477.98,-1249.16 477.98,-1088.12 477.98,-1088.12 477.98,-1082.12 483.98,-1076.12 489.98,-1076.12 489.98,-1076.12 796.02,-1076.12 796.02,-1076.12 802.02,-1076.12 808.02,-1082.12 808.02,-1088.12 808.02,-1088.12 808.02,-1249.16 808.02,-1249.16 808.02,-1255.16 802.02,-1261.16 796.02,-1261.16"/>
<text text-anchor="start" x="570.74" y="-1191.14" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Web Application</text>
<text text-anchor="start" x="584.64" y="-1169.34" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Java and Spring MVC</text>
<text text-anchor="start" x="511.87" y="-1148.14" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Delivers the static content and the Internet</text>
<text text-anchor="start" x="543.37" y="-1131.34" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">banking single page application.</text>
</g>
<!-- singlepageapplication -->
<g id="node4" class="node">
<title>singlepageapplication</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M790.02,-926.92C790.02,-926.92 483.98,-926.92 483.98,-926.92 477.98,-926.92 471.98,-920.92 471.98,-914.92 471.98,-914.92 471.98,-753.88 471.98,-753.88 471.98,-747.88 477.98,-741.88 483.98,-741.88 483.98,-741.88 790.02,-741.88 790.02,-741.88 796.02,-741.88 802.02,-747.88 802.02,-753.88 802.02,-753.88 802.02,-914.92 802.02,-914.92 802.02,-920.92 796.02,-926.92 790.02,-926.92"/>
<text text-anchor="start" x="530.82" y="-865.3" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Single&#45;Page Application</text>
<text text-anchor="start" x="574.96" y="-843.5" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">JavaScript and Angular</text>
<text text-anchor="start" x="529.21" y="-822.3" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides all of the Internet banking</text>
<text text-anchor="start" x="516.78" y="-805.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">functionality to customers via their web</text>
<text text-anchor="start" x="610.16" y="-788.7" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">browser.</text>
</g>
<!-- database -->
<g id="node5" class="node">
<title>database</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M788.86,-239.31C788.86,-249.87 714.07,-258.44 622,-258.44 529.93,-258.44 455.14,-249.87 455.14,-239.31 455.14,-239.31 455.14,-67.13 455.14,-67.13 455.14,-56.57 529.93,-48 622,-48 714.07,-48 788.86,-56.57 788.86,-67.13 788.86,-67.13 788.86,-239.31 788.86,-239.31"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M788.86,-239.31C788.86,-228.75 714.07,-220.18 622,-220.18 529.93,-220.18 455.14,-228.75 455.14,-239.31"/>
<text text-anchor="start" x="579.19" y="-175.72" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Database</text>
<text text-anchor="start" x="553.3" y="-153.92" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Oracle Database Schema</text>
<text text-anchor="start" x="486.21" y="-132.72" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Stores user registration information, hashed</text>
<text text-anchor="start" x="486.98" y="-115.92" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">authentication credentials, access logs, etc.</text>
</g>
<!-- customer -->
<g id="node6" class="node">
<title>customer</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M796.3,-1612C796.3,-1612 489.7,-1612 489.7,-1612 483.7,-1612 477.7,-1606 477.7,-1600 477.7,-1600 477.7,-1438.96 477.7,-1438.96 477.7,-1432.96 483.7,-1426.96 489.7,-1426.96 489.7,-1426.96 796.3,-1426.96 796.3,-1426.96 802.3,-1426.96 808.3,-1432.96 808.3,-1438.96 808.3,-1438.96 808.3,-1600 808.3,-1600 808.3,-1606 802.3,-1612 796.3,-1612"/>
<text text-anchor="start" x="518.49" y="-1532.28" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="508.76" y="-1508.68" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="613.04" y="-1491.88" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">accounts.</text>
</g>
<!-- mainframe -->
<g id="node7" class="node">
<title>mainframe</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M1219.52,-245.74C1219.52,-245.74 900.48,-245.74 900.48,-245.74 894.48,-245.74 888.48,-239.74 888.48,-233.74 888.48,-233.74 888.48,-72.7 888.48,-72.7 888.48,-66.7 894.48,-60.7 900.48,-60.7 900.48,-60.7 1219.52,-60.7 1219.52,-60.7 1225.52,-60.7 1231.52,-66.7 1231.52,-72.7 1231.52,-72.7 1231.52,-233.74 1231.52,-233.74 1231.52,-239.74 1225.52,-245.74 1219.52,-245.74"/>
<text text-anchor="start" x="937.73" y="-166.02" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Mainframe Banking System</text>
<text text-anchor="start" x="932.76" y="-142.42" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Stores all of the core banking information</text>
<text text-anchor="start" x="919.54" y="-125.62" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">about customers, accounts, transactions, etc.</text>
</g>
<!-- email -->
<g id="node8" class="node">
<title>email</title>
<path fill="#64748b" stroke="#2563eb" stroke-width="0" d="M1650.02,-245.74C1650.02,-245.74 1343.98,-245.74 1343.98,-245.74 1337.98,-245.74 1331.98,-239.74 1331.98,-233.74 1331.98,-233.74 1331.98,-72.7 1331.98,-72.7 1331.98,-66.7 1337.98,-60.7 1343.98,-60.7 1343.98,-60.7 1650.02,-60.7 1650.02,-60.7 1656.02,-60.7 1662.02,-66.7 1662.02,-72.7 1662.02,-72.7 1662.02,-233.74 1662.02,-233.74 1662.02,-239.74 1656.02,-245.74 1650.02,-245.74"/>
<text text-anchor="start" x="1432.55" y="-166.02" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">E&#45;mail System</text>
<text text-anchor="start" x="1375.61" y="-142.42" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="1472.89" y="-125.62" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">system.</text>
</g>
<!-- mobileapp&#45;&gt;apiapplication -->
<g id="edge1" class="edge">
<title>mobileapp&#45;&gt;apiapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M213.06,-1076.5C217.18,-985.01 235.04,-843.45 301.07,-741.88 340.64,-681.02 401.41,-630.67 460.43,-592.02"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="461.98,-595.19 468.49,-586.83 458.19,-589.3 461.98,-595.19"/>
<text text-anchor="start" x="311" y="-838.3" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="311" y="-822.7" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- apiapplication&#45;&gt;database -->
<g id="edge4" class="edge">
<title>apiapplication&#45;&gt;database</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M633.04,-408.08C631.23,-366.48 629.06,-316.68 627.13,-272.25"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="630.63,-272.13 626.7,-262.29 623.64,-272.43 630.63,-272.13"/>
<text text-anchor="start" x="640" y="-336.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Reads from and writes to</text>
<text text-anchor="start" x="640" y="-321.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[SQL/TCPS]</text>
</g>
<!-- apiapplication&#45;&gt;mainframe -->
<g id="edge9" class="edge">
<title>apiapplication&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M748.97,-407.85C807.16,-360.4 878.38,-302.32 937.98,-253.72"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="939.94,-256.64 945.48,-247.61 935.52,-251.22 939.94,-256.64"/>
<text text-anchor="start" x="871" y="-336.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="871" y="-321.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- apiapplication&#45;&gt;email -->
<g id="edge10" class="edge">
<title>apiapplication&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M803.06,-442.04C934.33,-395.73 1121.56,-327.08 1282,-258.44 1294.68,-253.01 1307.7,-247.24 1320.75,-241.3"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1321.84,-244.65 1329.47,-237.3 1318.92,-238.29 1321.84,-244.65"/>
<text text-anchor="start" x="1152" y="-329.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- webapplication&#45;&gt;singlepageapplication -->
<g id="edge2" class="edge">
<title>webapplication&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M641.35,-1076.42C640.59,-1034.02 639.67,-983.38 638.88,-939.5"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="642.38,-939.67 638.7,-929.74 635.38,-939.8 642.38,-939.67"/>
<text text-anchor="start" x="650" y="-1005.42" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Delivers to the customer&#39;s web</text>
<text text-anchor="start" x="650" y="-989.82" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">browser</text>
</g>
<!-- singlepageapplication&#45;&gt;apiapplication -->
<g id="edge3" class="edge">
<title>singlepageapplication&#45;&gt;apiapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M637,-742.18C637,-699.78 637,-649.14 637,-605.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="640.5,-605.5 637,-595.5 633.5,-605.5 640.5,-605.5"/>
<text text-anchor="start" x="647" y="-671.18" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="647" y="-655.58" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- customer&#45;&gt;mobileapp -->
<g id="edge5" class="edge">
<title>customer&#45;&gt;mobileapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M477.88,-1431.27C448.76,-1413.18 419.53,-1393.12 393.71,-1371.96 357.42,-1342.22 322.01,-1304.98 292.28,-1270.59"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="295.18,-1268.59 286.02,-1263.27 289.86,-1273.14 295.18,-1268.59"/>
<text text-anchor="start" x="403" y="-1356.26" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="403" y="-1340.66" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;webapplication -->
<g id="edge6" class="edge">
<title>customer&#45;&gt;webapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M643,-1427.28C643,-1380.21 643,-1322.58 643,-1273.77"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="646.5,-1273.94 643,-1263.94 639.5,-1273.94 646.5,-1273.94"/>
<text text-anchor="start" x="653" y="-1348.46" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Visits bigbank.com using HTTPS</text>
</g>
<!-- customer&#45;&gt;singlepageapplication -->
<g id="edge7" class="edge">
<title>customer&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M808.19,-1441.63C833.41,-1422.5 856,-1399.42 871,-1371.96 879.35,-1356.67 871.37,-1350.18 871,-1332.76 867.67,-1176.73 932.45,-1117.98 856,-981.92 844.55,-961.54 828.95,-943.47 811.3,-927.58"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="814.05,-925.33 804.2,-921.45 809.48,-930.63 814.05,-925.33"/>
<text text-anchor="start" x="903" y="-1172.54" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="903" y="-1156.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
</g>
<!-- email&#45;&gt;customer -->
<g id="edge8" class="edge">
<title>email&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1495.24,-245.7C1486.18,-461.88 1433.97,-1009.77 1142,-1324.76 1058.22,-1415.15 927.32,-1463.88 820.61,-1489.85"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="819.92,-1486.42 811,-1492.13 821.53,-1493.23 819.92,-1486.42"/>
<text text-anchor="start" x="1434" y="-830.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
</g>
</svg>
`;case"apiApp":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 11.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1354pt" height="1234pt"
 viewBox="0.00 0.00 1354.02 1234.18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(10.01 1224.17)">
<g id="clust1" class="cluster">
<title>cluster_apiapplication</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-319.64 8,-926.92 1326,-926.92 1326,-319.64 8,-319.64"/>
<text text-anchor="start" x="16" y="-912.22" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#bfdbfe" fill-opacity="0.701961">API APPLICATION</text>
</g>
<!-- signincontroller -->
<g id="node1" class="node">
<title>signincontroller</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M840.02,-863.32C840.02,-863.32 533.98,-863.32 533.98,-863.32 527.98,-863.32 521.98,-857.32 521.98,-851.32 521.98,-851.32 521.98,-690.28 521.98,-690.28 521.98,-684.28 527.98,-678.28 533.98,-678.28 533.98,-678.28 840.02,-678.28 840.02,-678.28 846.02,-678.28 852.02,-684.28 852.02,-690.28 852.02,-690.28 852.02,-851.32 852.02,-851.32 852.02,-857.32 846.02,-863.32 840.02,-863.32"/>
<text text-anchor="start" x="609.74" y="-793.3" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Sign In Controller</text>
<text text-anchor="start" x="612.98" y="-771.5" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring MVC Rest Controller</text>
<text text-anchor="start" x="572.61" y="-750.3" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Allows users to sign in to the Internet</text>
<text text-anchor="start" x="634.48" y="-733.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Banking System.</text>
</g>
<!-- securitycomponent -->
<g id="node2" class="node">
<title>securitycomponent</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M844.02,-544.68C844.02,-544.68 537.98,-544.68 537.98,-544.68 531.98,-544.68 525.98,-538.68 525.98,-532.68 525.98,-532.68 525.98,-371.64 525.98,-371.64 525.98,-365.64 531.98,-359.64 537.98,-359.64 537.98,-359.64 844.02,-359.64 844.02,-359.64 850.02,-359.64 856.02,-365.64 856.02,-371.64 856.02,-371.64 856.02,-532.68 856.02,-532.68 856.02,-538.68 850.02,-544.68 844.02,-544.68"/>
<text text-anchor="start" x="600.4" y="-474.66" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Security Component</text>
<text text-anchor="start" x="657.98" y="-452.86" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring Bean</text>
<text text-anchor="start" x="560.26" y="-431.66" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides functionality related to signing in,</text>
<text text-anchor="start" x="612.01" y="-414.86" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">changing passwords, etc.</text>
</g>
<!-- accountssummarycontroller -->
<g id="node3" class="node">
<title>accountssummarycontroller</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M391.83,-863.32C391.83,-863.32 82.17,-863.32 82.17,-863.32 76.17,-863.32 70.17,-857.32 70.17,-851.32 70.17,-851.32 70.17,-690.28 70.17,-690.28 70.17,-684.28 76.17,-678.28 82.17,-678.28 82.17,-678.28 391.83,-678.28 391.83,-678.28 397.83,-678.28 403.83,-684.28 403.83,-690.28 403.83,-690.28 403.83,-851.32 403.83,-851.32 403.83,-857.32 397.83,-863.32 391.83,-863.32"/>
<text text-anchor="start" x="104.18" y="-793.3" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Accounts Summary Controller</text>
<text text-anchor="start" x="162.98" y="-771.5" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring MVC Rest Controller</text>
<text text-anchor="start" x="101.23" y="-750.3" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides customers with a summary of their</text>
<text text-anchor="start" x="189.91" y="-733.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">bank accounts.</text>
</g>
<!-- mainframebankingsystemfacade -->
<g id="node4" class="node">
<title>mainframebankingsystemfacade</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M414.47,-544.68C414.47,-544.68 59.53,-544.68 59.53,-544.68 53.53,-544.68 47.53,-538.68 47.53,-532.68 47.53,-532.68 47.53,-371.64 47.53,-371.64 47.53,-365.64 53.53,-359.64 59.53,-359.64 59.53,-359.64 414.47,-359.64 414.47,-359.64 420.47,-359.64 426.47,-365.64 426.47,-371.64 426.47,-371.64 426.47,-532.68 426.47,-532.68 426.47,-538.68 420.47,-544.68 414.47,-544.68"/>
<text text-anchor="start" x="78.6" y="-466.26" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Mainframe Banking System Facade</text>
<text text-anchor="start" x="203.98" y="-444.46" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring Bean</text>
<text text-anchor="start" x="94.59" y="-423.26" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">A facade onto the mainframe banking system.</text>
</g>
<!-- resetpasswordcontroller -->
<g id="node5" class="node">
<title>resetpasswordcontroller</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M1273.84,-863.32C1273.84,-863.32 964.16,-863.32 964.16,-863.32 958.16,-863.32 952.16,-857.32 952.16,-851.32 952.16,-851.32 952.16,-690.28 952.16,-690.28 952.16,-684.28 958.16,-678.28 964.16,-678.28 964.16,-678.28 1273.84,-678.28 1273.84,-678.28 1279.84,-678.28 1285.84,-684.28 1285.84,-690.28 1285.84,-690.28 1285.84,-851.32 1285.84,-851.32 1285.84,-857.32 1279.84,-863.32 1273.84,-863.32"/>
<text text-anchor="start" x="1000.06" y="-793.3" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Reset Password Controller</text>
<text text-anchor="start" x="1044.98" y="-771.5" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring MVC Rest Controller</text>
<text text-anchor="start" x="983.22" y="-750.3" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Allows users to reset their passwords with a</text>
<text text-anchor="start" x="1069.59" y="-733.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">single use URL.</text>
</g>
<!-- emailcomponent -->
<g id="node6" class="node">
<title>emailcomponent</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M1274.02,-544.68C1274.02,-544.68 967.98,-544.68 967.98,-544.68 961.98,-544.68 955.98,-538.68 955.98,-532.68 955.98,-532.68 955.98,-371.64 955.98,-371.64 955.98,-365.64 961.98,-359.64 967.98,-359.64 967.98,-359.64 1274.02,-359.64 1274.02,-359.64 1280.02,-359.64 1286.02,-365.64 1286.02,-371.64 1286.02,-371.64 1286.02,-532.68 1286.02,-532.68 1286.02,-538.68 1280.02,-544.68 1274.02,-544.68"/>
<text text-anchor="start" x="1038.19" y="-466.26" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">E&#45;mail Component</text>
<text text-anchor="start" x="1087.98" y="-444.46" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Spring Bean</text>
<text text-anchor="start" x="1047.86" y="-423.26" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Sends e&#45;mails to users.</text>
</g>
<!-- singlepageapplication -->
<g id="node7" class="node">
<title>singlepageapplication</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M1046.02,-1214.16C1046.02,-1214.16 739.98,-1214.16 739.98,-1214.16 733.98,-1214.16 727.98,-1208.16 727.98,-1202.16 727.98,-1202.16 727.98,-1041.12 727.98,-1041.12 727.98,-1035.12 733.98,-1029.12 739.98,-1029.12 739.98,-1029.12 1046.02,-1029.12 1046.02,-1029.12 1052.02,-1029.12 1058.02,-1035.12 1058.02,-1041.12 1058.02,-1041.12 1058.02,-1202.16 1058.02,-1202.16 1058.02,-1208.16 1052.02,-1214.16 1046.02,-1214.16"/>
<text text-anchor="start" x="786.82" y="-1152.54" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Single&#45;Page Application</text>
<text text-anchor="start" x="830.96" y="-1130.74" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#b6ecf7">JavaScript and Angular</text>
<text text-anchor="start" x="785.21" y="-1109.54" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Provides all of the Internet banking</text>
<text text-anchor="start" x="772.78" y="-1092.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">functionality to customers via their web</text>
<text text-anchor="start" x="866.16" y="-1075.94" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">browser.</text>
</g>
<!-- mobileapp -->
<g id="node8" class="node">
<title>mobileapp</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M616.02,-1214.16C616.02,-1214.16 309.98,-1214.16 309.98,-1214.16 303.98,-1214.16 297.98,-1208.16 297.98,-1202.16 297.98,-1202.16 297.98,-1041.12 297.98,-1041.12 297.98,-1035.12 303.98,-1029.12 309.98,-1029.12 309.98,-1029.12 616.02,-1029.12 616.02,-1029.12 622.02,-1029.12 628.02,-1035.12 628.02,-1041.12 628.02,-1041.12 628.02,-1202.16 628.02,-1202.16 628.02,-1208.16 622.02,-1214.16 616.02,-1214.16"/>
<text text-anchor="start" x="412.97" y="-1152.54" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Mobile App</text>
<text text-anchor="start" x="440.66" y="-1130.74" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#b6ecf7">Xamarin</text>
<text text-anchor="start" x="340.05" y="-1109.54" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Provides a limited subset of the Internet</text>
<text text-anchor="start" x="331.1" y="-1092.74" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">banking functionality to customers via their</text>
<text text-anchor="start" x="418.26" y="-1075.94" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">mobile device.</text>
</g>
<!-- mainframe -->
<g id="node9" class="node">
<title>mainframe</title>
<path fill="#64748b" stroke="#2563eb" stroke-width="0" d="M396.52,-197.74C396.52,-197.74 77.48,-197.74 77.48,-197.74 71.48,-197.74 65.48,-191.74 65.48,-185.74 65.48,-185.74 65.48,-24.7 65.48,-24.7 65.48,-18.7 71.48,-12.7 77.48,-12.7 77.48,-12.7 396.52,-12.7 396.52,-12.7 402.52,-12.7 408.52,-18.7 408.52,-24.7 408.52,-24.7 408.52,-185.74 408.52,-185.74 408.52,-191.74 402.52,-197.74 396.52,-197.74"/>
<text text-anchor="start" x="114.73" y="-118.02" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Mainframe Banking System</text>
<text text-anchor="start" x="109.76" y="-94.42" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">Stores all of the core banking information</text>
<text text-anchor="start" x="96.54" y="-77.62" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">about customers, accounts, transactions, etc.</text>
</g>
<!-- database -->
<g id="node10" class="node">
<title>database</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M856.86,-191.31C856.86,-201.87 782.07,-210.44 690,-210.44 597.93,-210.44 523.14,-201.87 523.14,-191.31 523.14,-191.31 523.14,-19.13 523.14,-19.13 523.14,-8.57 597.93,0 690,0 782.07,0 856.86,-8.57 856.86,-19.13 856.86,-19.13 856.86,-191.31 856.86,-191.31"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M856.86,-191.31C856.86,-180.75 782.07,-172.18 690,-172.18 597.93,-172.18 523.14,-180.75 523.14,-191.31"/>
<text text-anchor="start" x="647.19" y="-127.72" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Database</text>
<text text-anchor="start" x="621.3" y="-105.92" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#cbd5e1">Oracle Database Schema</text>
<text text-anchor="start" x="554.21" y="-84.72" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">Stores user registration information, hashed</text>
<text text-anchor="start" x="554.98" y="-67.92" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">authentication credentials, access logs, etc.</text>
</g>
<!-- email -->
<g id="node11" class="node">
<title>email</title>
<path fill="#64748b" stroke="#2563eb" stroke-width="0" d="M1275.02,-197.74C1275.02,-197.74 968.98,-197.74 968.98,-197.74 962.98,-197.74 956.98,-191.74 956.98,-185.74 956.98,-185.74 956.98,-24.7 956.98,-24.7 956.98,-18.7 962.98,-12.7 968.98,-12.7 968.98,-12.7 1275.02,-12.7 1275.02,-12.7 1281.02,-12.7 1287.02,-18.7 1287.02,-24.7 1287.02,-24.7 1287.02,-185.74 1287.02,-185.74 1287.02,-191.74 1281.02,-197.74 1275.02,-197.74"/>
<text text-anchor="start" x="1057.55" y="-118.02" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">E&#45;mail System</text>
<text text-anchor="start" x="1000.61" y="-94.42" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">The internal Microsoft Exchange e&#45;mail</text>
<text text-anchor="start" x="1097.89" y="-77.62" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#cbd5e1">system.</text>
</g>
<!-- signincontroller&#45;&gt;securitycomponent -->
<g id="edge1" class="edge">
<title>signincontroller&#45;&gt;securitycomponent</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M688.15,-678.64C688.63,-640.72 689.19,-596.5 689.68,-557.31"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="693.18,-557.57 689.81,-547.53 686.18,-557.48 693.18,-557.57"/>
<text text-anchor="start" x="699" y="-607.58" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- securitycomponent&#45;&gt;database -->
<g id="edge12" class="edge">
<title>securitycomponent&#45;&gt;database</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M690.74,-360.08C690.62,-318.48 690.47,-268.68 690.34,-224.25"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="693.84,-224.28 690.31,-214.29 686.84,-224.3 693.84,-224.28"/>
<text text-anchor="start" x="700" y="-288.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Reads from and writes to</text>
<text text-anchor="start" x="700" y="-273.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[SQL/TCPS]</text>
</g>
<!-- accountssummarycontroller&#45;&gt;mainframebankingsystemfacade -->
<g id="edge2" class="edge">
<title>accountssummarycontroller&#45;&gt;mainframebankingsystemfacade</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M237,-678.64C237,-640.72 237,-596.5 237,-557.31"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="240.5,-557.53 237,-547.53 233.5,-557.53 240.5,-557.53"/>
<text text-anchor="start" x="247" y="-607.58" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- mainframebankingsystemfacade&#45;&gt;mainframe -->
<g id="edge11" class="edge">
<title>mainframebankingsystemfacade&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M237,-360.08C237,-314.1 237,-258.1 237,-210.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="240.5,-210.54 237,-200.54 233.5,-210.54 240.5,-210.54"/>
<text text-anchor="start" x="247" y="-288.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="247" y="-273.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- resetpasswordcontroller&#45;&gt;securitycomponent -->
<g id="edge3" class="edge">
<title>resetpasswordcontroller&#45;&gt;securitycomponent</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M995.49,-678.43C942.14,-638.96 879.59,-592.68 825.1,-552.37"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="827.23,-549.59 817.11,-546.46 823.07,-555.22 827.23,-549.59"/>
<text text-anchor="start" x="927" y="-607.58" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- resetpasswordcontroller&#45;&gt;emailcomponent -->
<g id="edge4" class="edge">
<title>resetpasswordcontroller&#45;&gt;emailcomponent</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1119.58,-678.64C1119.82,-640.72 1120.09,-596.5 1120.34,-557.31"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1123.84,-557.55 1120.4,-547.53 1116.84,-557.51 1123.84,-557.55"/>
<text text-anchor="start" x="1130" y="-607.58" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- emailcomponent&#45;&gt;email -->
<g id="edge13" class="edge">
<title>emailcomponent&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1121.26,-360.08C1121.4,-314.1 1121.56,-258.1 1121.7,-210.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1125.2,-210.55 1121.73,-200.54 1118.2,-210.53 1125.2,-210.55"/>
<text text-anchor="start" x="1131" y="-281.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mail using</text>
</g>
<!-- singlepageapplication&#45;&gt;signincontroller -->
<g id="edge5" class="edge">
<title>singlepageapplication&#45;&gt;signincontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M809.89,-1029.2C795.96,-1011.6 782.38,-992.81 771.07,-974.12 752.49,-943.39 736.18,-907.82 722.99,-875.14"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="726.33,-874.07 719.39,-866.06 719.83,-876.65 726.33,-874.07"/>
<text text-anchor="start" x="781" y="-958.42" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="781" y="-942.82" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- singlepageapplication&#45;&gt;accountssummarycontroller -->
<g id="edge6" class="edge">
<title>singlepageapplication&#45;&gt;accountssummarycontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M728.14,-1046.59C711.37,-1040.23 694.45,-1034.27 678,-1029.12 562.81,-993.09 516.16,-1035.21 412.07,-974.12 369.6,-949.19 332.28,-910.21 303.12,-873.09"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="306.23,-871.38 297.35,-865.59 300.68,-875.65 306.23,-871.38"/>
<text text-anchor="start" x="422" y="-958.42" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="422" y="-942.82" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- singlepageapplication&#45;&gt;resetpasswordcontroller -->
<g id="edge7" class="edge">
<title>singlepageapplication&#45;&gt;resetpasswordcontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1057.88,-1054.72C1090.3,-1033.91 1120.09,-1007.4 1139,-974.12 1155.7,-944.73 1157.11,-909.02 1152.33,-875.83"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1155.82,-875.51 1150.71,-866.23 1148.92,-876.67 1155.82,-875.51"/>
<text text-anchor="start" x="1161" y="-958.42" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="1161" y="-942.82" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- mobileapp&#45;&gt;signincontroller -->
<g id="edge8" class="edge">
<title>mobileapp&#45;&gt;signincontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M521.56,-1029.44C552.24,-981.67 589.9,-923.02 621.53,-873.76"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="624.3,-875.92 626.76,-865.62 618.41,-872.14 624.3,-875.92"/>
<text text-anchor="start" x="591" y="-958.42" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="591" y="-942.82" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- mobileapp&#45;&gt;accountssummarycontroller -->
<g id="edge9" class="edge">
<title>mobileapp&#45;&gt;accountssummarycontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M298.26,-1098.08C222.46,-1078.55 139.27,-1042.11 93.07,-974.12 70.51,-940.92 83.41,-905.11 108.95,-872.97"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="111.53,-875.34 115.31,-865.43 106.18,-870.82 111.53,-875.34"/>
<text text-anchor="start" x="103" y="-958.42" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="103" y="-942.82" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
<!-- mobileapp&#45;&gt;resetpasswordcontroller -->
<g id="edge10" class="edge">
<title>mobileapp&#45;&gt;resetpasswordcontroller</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M628,-1047.04C644.74,-1040.59 661.61,-1034.48 678,-1029.12 779.95,-995.77 819.03,-1025.84 913,-974.12 959.46,-948.55 1002.69,-909.57 1037.44,-872.62"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1039.81,-875.22 1044.03,-865.5 1034.67,-870.46 1039.81,-875.22"/>
<text text-anchor="start" x="975" y="-958.42" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Makes API calls to</text>
<text text-anchor="start" x="975" y="-942.82" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[JSON/HTTPS]</text>
</g>
</g>
</svg>
`;case"customer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 11.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1736pt" height="604pt"
 viewBox="0.00 0.00 1736.02 603.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(10.01 593.89)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#3e4651" stroke="#2d333d" points="8,-8 8,-296.64 1708,-296.64 1708,-8 8,-8"/>
<text text-anchor="start" x="16" y="-281.94" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<!-- singlepageapplication -->
<g id="node1" class="node">
<title>singlepageapplication</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M366.02,-233.04C366.02,-233.04 59.98,-233.04 59.98,-233.04 53.98,-233.04 47.98,-227.04 47.98,-221.04 47.98,-221.04 47.98,-60 47.98,-60 47.98,-54 53.98,-48 59.98,-48 59.98,-48 366.02,-48 366.02,-48 372.02,-48 378.02,-54 378.02,-60 378.02,-60 378.02,-221.04 378.02,-221.04 378.02,-227.04 372.02,-233.04 366.02,-233.04"/>
<text text-anchor="start" x="106.82" y="-171.42" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Single&#45;Page Application</text>
<text text-anchor="start" x="150.96" y="-149.62" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">JavaScript and Angular</text>
<text text-anchor="start" x="105.21" y="-128.42" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides all of the Internet banking</text>
<text text-anchor="start" x="92.78" y="-111.62" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">functionality to customers via their web</text>
<text text-anchor="start" x="186.16" y="-94.82" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">browser.</text>
</g>
<!-- mobileapp -->
<g id="node2" class="node">
<title>mobileapp</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M1226.02,-233.04C1226.02,-233.04 919.98,-233.04 919.98,-233.04 913.98,-233.04 907.98,-227.04 907.98,-221.04 907.98,-221.04 907.98,-60 907.98,-60 907.98,-54 913.98,-48 919.98,-48 919.98,-48 1226.02,-48 1226.02,-48 1232.02,-48 1238.02,-54 1238.02,-60 1238.02,-60 1238.02,-221.04 1238.02,-221.04 1238.02,-227.04 1232.02,-233.04 1226.02,-233.04"/>
<text text-anchor="start" x="1022.97" y="-171.42" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Mobile App</text>
<text text-anchor="start" x="1050.66" y="-149.62" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Xamarin</text>
<text text-anchor="start" x="950.05" y="-128.42" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Provides a limited subset of the Internet</text>
<text text-anchor="start" x="941.1" y="-111.62" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">banking functionality to customers via their</text>
<text text-anchor="start" x="1028.26" y="-94.82" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">mobile device.</text>
</g>
<!-- supportstaff -->
<g id="node3" class="node">
<title>supportstaff</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M1656.02,-233.04C1656.02,-233.04 1349.98,-233.04 1349.98,-233.04 1343.98,-233.04 1337.98,-227.04 1337.98,-221.04 1337.98,-221.04 1337.98,-60 1337.98,-60 1337.98,-54 1343.98,-48 1349.98,-48 1349.98,-48 1656.02,-48 1656.02,-48 1662.02,-48 1668.02,-54 1668.02,-60 1668.02,-60 1668.02,-221.04 1668.02,-221.04 1668.02,-227.04 1662.02,-233.04 1656.02,-233.04"/>
<text text-anchor="start" x="1400.19" y="-144.92" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Customer Service Staff</text>
<text text-anchor="start" x="1382.78" y="-121.32" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Customer service staff within the bank.</text>
</g>
<!-- atm -->
<g id="node4" class="node">
<title>atm</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M796.02,-233.04C796.02,-233.04 489.98,-233.04 489.98,-233.04 483.98,-233.04 477.98,-227.04 477.98,-221.04 477.98,-221.04 477.98,-60 477.98,-60 477.98,-54 483.98,-48 489.98,-48 489.98,-48 796.02,-48 796.02,-48 802.02,-48 808.02,-54 808.02,-60 808.02,-60 808.02,-221.04 808.02,-221.04 808.02,-227.04 802.02,-233.04 796.02,-233.04"/>
<text text-anchor="start" x="621.89" y="-144.92" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">ATM</text>
<text text-anchor="start" x="532.52" y="-121.32" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Allows customers to withdraw cash.</text>
</g>
<!-- customer -->
<g id="node5" class="node">
<title>customer</title>
<path fill="#428a4f" stroke="#2563eb" stroke-width="0" d="M981.3,-583.88C981.3,-583.88 674.7,-583.88 674.7,-583.88 668.7,-583.88 662.7,-577.88 662.7,-571.88 662.7,-571.88 662.7,-410.84 662.7,-410.84 662.7,-404.84 668.7,-398.84 674.7,-398.84 674.7,-398.84 981.3,-398.84 981.3,-398.84 987.3,-398.84 993.3,-404.84 993.3,-410.84 993.3,-410.84 993.3,-571.88 993.3,-571.88 993.3,-577.88 987.3,-583.88 981.3,-583.88"/>
<text text-anchor="start" x="703.49" y="-504.16" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Personal Banking Customer</text>
<text text-anchor="start" x="693.76" y="-480.56" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="798.04" y="-463.76" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">accounts.</text>
</g>
<!-- atm&#45;&gt;customer -->
<g id="edge5" class="edge">
<title>atm&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M581.12,-296.64C581.46,-313.06 585.01,-329.12 593.18,-343.84 607.61,-369.85 628.79,-391.85 652.62,-410.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="650.43,-412.99 660.55,-416.13 654.59,-407.37 650.43,-412.99"/>
<text text-anchor="start" x="603" y="-320.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
<!-- customer&#45;&gt;singlepageapplication -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M662.78,-472.92C558.81,-454.87 426.81,-418.2 331.71,-343.84 298.71,-318.04 273.06,-280.3 254.19,-244.39"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="257.33,-242.84 249.67,-235.51 251.09,-246.01 257.33,-242.84"/>
<text text-anchor="start" x="341" y="-328.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="341" y="-312.54" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;mobileapp -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;mobileapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M892.05,-399.16C925.67,-351.29 966.96,-292.5 1001.61,-243.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1004.27,-245.46 1007.16,-235.27 998.55,-241.44 1004.27,-245.46"/>
<text text-anchor="start" x="967" y="-328.14" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Views account balances, and makes</text>
<text text-anchor="start" x="967" y="-312.54" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">payments using</text>
</g>
<!-- customer&#45;&gt;supportstaff -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;supportstaff</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M993.26,-436.77C1084.1,-403.46 1196.57,-355.72 1288,-296.64 1315.17,-279.09 1343.62,-259.48 1370.61,-240.27"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1372.31,-243.36 1378.41,-234.7 1368.24,-237.66 1372.31,-243.36"/>
<text text-anchor="start" x="1275" y="-320.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Asks questions to</text>
</g>
<!-- customer&#45;&gt;atm -->
<g id="edge4" class="edge">
<title>customer&#45;&gt;atm</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M779.64,-399.16C754.41,-351.59 723.46,-293.23 697.4,-244.1"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="700.6,-242.66 692.82,-235.47 694.42,-245.94 700.6,-242.66"/>
<text text-anchor="start" x="759" y="-320.34" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Withdraws cash using</text>
</g>
</g>
</svg>
`;case"support":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 11.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="914pt"
 viewBox="0.00 0.00 876.02 913.94" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(10.01 903.93)">
<g id="clust1" class="cluster">
<title>cluster_bigbank</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-278.64 8,-885.92 848,-885.92 848,-278.64 8,-278.64"/>
<text text-anchor="start" x="16" y="-871.22" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#bfdbfe" fill-opacity="0.701961">BIG BANK PLC</text>
</g>
<!-- backoffice -->
<g id="node1" class="node">
<title>backoffice</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M366.02,-822.32C366.02,-822.32 59.98,-822.32 59.98,-822.32 53.98,-822.32 47.98,-816.32 47.98,-810.32 47.98,-810.32 47.98,-649.28 47.98,-649.28 47.98,-643.28 53.98,-637.28 59.98,-637.28 59.98,-637.28 366.02,-637.28 366.02,-637.28 372.02,-637.28 378.02,-643.28 378.02,-649.28 378.02,-649.28 378.02,-810.32 378.02,-810.32 378.02,-816.32 372.02,-822.32 366.02,-822.32"/>
<text text-anchor="start" x="138.53" y="-742.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Back Office Staff</text>
<text text-anchor="start" x="83.04" y="-719" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Administration and support staff within the</text>
<text text-anchor="start" x="195.88" y="-702.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">bank.</text>
</g>
<!-- mainframe -->
<g id="node2" class="node">
<title>mainframe</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M430.52,-503.68C430.52,-503.68 111.48,-503.68 111.48,-503.68 105.48,-503.68 99.48,-497.68 99.48,-491.68 99.48,-491.68 99.48,-330.64 99.48,-330.64 99.48,-324.64 105.48,-318.64 111.48,-318.64 111.48,-318.64 430.52,-318.64 430.52,-318.64 436.52,-318.64 442.52,-324.64 442.52,-330.64 442.52,-330.64 442.52,-491.68 442.52,-491.68 442.52,-497.68 436.52,-503.68 430.52,-503.68"/>
<text text-anchor="start" x="148.73" y="-423.96" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Mainframe Banking System</text>
<text text-anchor="start" x="143.76" y="-400.36" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Stores all of the core banking information</text>
<text text-anchor="start" x="130.54" y="-383.56" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">about customers, accounts, transactions, etc.</text>
</g>
<!-- supportstaff -->
<g id="node3" class="node">
<title>supportstaff</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M796.02,-822.32C796.02,-822.32 489.98,-822.32 489.98,-822.32 483.98,-822.32 477.98,-816.32 477.98,-810.32 477.98,-810.32 477.98,-649.28 477.98,-649.28 477.98,-643.28 483.98,-637.28 489.98,-637.28 489.98,-637.28 796.02,-637.28 796.02,-637.28 802.02,-637.28 808.02,-643.28 808.02,-649.28 808.02,-649.28 808.02,-810.32 808.02,-810.32 808.02,-816.32 802.02,-822.32 796.02,-822.32"/>
<text text-anchor="start" x="540.19" y="-734.2" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Customer Service Staff</text>
<text text-anchor="start" x="522.78" y="-710.6" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Customer service staff within the bank.</text>
</g>
<!-- customer -->
<g id="node4" class="node">
<title>customer</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M610.3,-185.04C610.3,-185.04 303.7,-185.04 303.7,-185.04 297.7,-185.04 291.7,-179.04 291.7,-173.04 291.7,-173.04 291.7,-12 291.7,-12 291.7,-6 297.7,0 303.7,0 303.7,0 610.3,0 610.3,0 616.3,0 622.3,-6 622.3,-12 622.3,-12 622.3,-173.04 622.3,-173.04 622.3,-179.04 616.3,-185.04 610.3,-185.04"/>
<text text-anchor="start" x="332.49" y="-105.32" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Personal Banking Customer</text>
<text text-anchor="start" x="322.76" y="-81.72" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">A customer of the bank, with personal bank</text>
<text text-anchor="start" x="427.04" y="-64.92" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">accounts.</text>
</g>
<!-- backoffice&#45;&gt;mainframe -->
<g id="edge1" class="edge">
<title>backoffice&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M229.7,-637.64C236.64,-599.72 244.74,-555.5 251.92,-516.31"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="255.36,-516.94 253.72,-506.48 248.48,-515.68 255.36,-516.94"/>
<text text-anchor="start" x="253" y="-566.58" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- mainframe&#45;&gt;customer -->
<g id="edge4" class="edge">
<title>mainframe&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M348.25,-278.64C364.49,-251.01 381.38,-222.26 396.87,-195.88"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="399.77,-197.86 401.81,-187.47 393.73,-194.32 399.77,-197.86"/>
<text text-anchor="start" x="379" y="-247.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Sends e&#45;mails to</text>
</g>
<!-- supportstaff&#45;&gt;mainframe -->
<g id="edge2" class="edge">
<title>supportstaff&#45;&gt;mainframe</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M535.9,-637.64C489.62,-598.24 435.33,-552.03 387.99,-511.74"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="390.5,-509.28 380.61,-505.46 385.96,-514.61 390.5,-509.28"/>
<text text-anchor="start" x="478" y="-566.58" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Uses</text>
</g>
<!-- customer&#45;&gt;supportstaff -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;supportstaff</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M487.54,-184.78C493.47,-203.04 499.54,-222.12 505,-240.04 545.31,-372.28 588.01,-525.88 615.05,-625.07"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="611.63,-625.84 617.64,-634.57 618.39,-624 611.63,-625.84"/>
<text text-anchor="start" x="590" y="-407.26" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Asks questions to</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}const R=T("/view/$viewId/dot")({component:N}),I=()=>{const{viewId:e}=R.useParams();try{return{dot:D(e),dotSvg:O(e)}}catch{throw o()}};function N(){const{dot:e,dotSvg:a}=I();return t.jsxs(L,{direction:"horizontal",autoSaveId:"viewAsDot",children:[t.jsx(i,{children:t.jsxs(n,{className:r,p:5,styles:{viewport:{borderRadius:6}},children:[t.jsx(s,{block:!0,className:f,children:e}),t.jsx(E,{text:e})]})}),t.jsx(c,{style:{width:10}}),t.jsx(i,{children:t.jsx(n,{h:"100%",children:t.jsx("div",{className:l,dangerouslySetInnerHTML:{__html:a}})})})]})}export{R as Route};
