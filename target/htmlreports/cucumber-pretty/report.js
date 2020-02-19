$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/amegybankhompage.feature");
formatter.feature({
  "line": 1,
  "name": "Homepage navigation and Login with invalid credentials to amegybank",
  "description": "",
  "id": "homepage-navigation-and-login-with-invalid-credentials-to-amegybank",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify Amegybank homepage navigation",
  "description": "",
  "id": "homepage-navigation-and-login-with-invalid-credentials-to-amegybank;verify-amegybank-homepage-navigation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User open  amegybank Url in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User should navigate  to amegybank homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User should see homepage title as \"Personal Accounts | Amegy Bank of Texas\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.user_should_navigate_to_amegybank_Url_in_homepage()"
});
formatter.result({
  "duration": 5872926501,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogoutSteps.user_should_navigate_to_amegybank_homepage()"
});
formatter.result({
  "duration": 66707200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Personal Accounts | Amegy Bank of Texas",
      "offset": 35
    }
  ],
  "location": "LoginLogoutSteps.user_should_see_homepage_title_as(String)"
});
formatter.result({
  "duration": 9327399,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify Top Left and Top Right different menus in Amegybank",
  "description": "",
  "id": "homepage-navigation-and-login-with-invalid-credentials-to-amegybank;verify-top-left-and-top-right-different-menus-in-amegybank",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User should navigate to amegybank homepage1",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should see different top left menu options",
  "rows": [
    {
      "cells": [
        "PERSONAL"
      ],
      "line": 12
    },
    {
      "cells": [
        "BUSINESS"
      ],
      "line": 13
    },
    {
      "cells": [
        "WEALTH"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User should see different Top Right menu options",
  "rows": [
    {
      "cells": [
        "About Us"
      ],
      "line": 16
    },
    {
      "cells": [
        "Careers"
      ],
      "line": 17
    },
    {
      "cells": [
        "Contact Us"
      ],
      "line": 18
    },
    {
      "cells": [
        "Locations"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "LoginLogoutSteps.user_should_navigate_to_amegybank_homepage(int)"
});
formatter.result({
  "duration": 26552299,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogoutSteps.user_should_see_different_top_left_menu_options(DataTable)"
});
formatter.result({
  "duration": 199580600,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogoutSteps.user_should_see_different_Top_Right_menu_options(DataTable)"
});
formatter.result({
  "duration": 116581901,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Verify Login with Invalid credentials for AmegyBank",
  "description": "",
  "id": "homepage-navigation-and-login-with-invalid-credentials-to-amegybank;verify-login-with-invalid-credentials-for-amegybank",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "User clicks on Login Button  on Amegybank Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should see Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User performs Login with Username \"\u003cusername\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should see UserName validation error  as \"\u003cusernamevalidatorerror\u003e\" and Password validation error as \"\u003cpasswordvalidatorerror\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "homepage-navigation-and-login-with-invalid-credentials-to-amegybank;verify-login-with-invalid-credentials-for-amegybank;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "usernamevalidatorerror",
        "passwordvalidatorerror"
      ],
      "line": 28,
      "id": "homepage-navigation-and-login-with-invalid-credentials-to-amegybank;verify-login-with-invalid-credentials-for-amegybank;;1"
    },
    {
      "cells": [
        "rekha",
        "",
        "",
        "Please enter a password"
      ],
      "line": 29,
      "id": "homepage-navigation-and-login-with-invalid-credentials-to-amegybank;verify-login-with-invalid-credentials-for-amegybank;;2"
    },
    {
      "cells": [
        "",
        "",
        "Please enter a Login Id",
        ""
      ],
      "line": 30,
      "id": "homepage-navigation-and-login-with-invalid-credentials-to-amegybank;verify-login-with-invalid-credentials-for-amegybank;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Verify Login with Invalid credentials for AmegyBank",
  "description": "",
  "id": "homepage-navigation-and-login-with-invalid-credentials-to-amegybank;verify-login-with-invalid-credentials-for-amegybank;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "User clicks on Login Button  on Amegybank Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should see Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User performs Login with Username \"rekha\" and Password as \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should see UserName validation error  as \"\" and Password validation error as \"Please enter a password\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.user_clicks_on_Login_Button_on_Amegybank_Homepage()"
});
formatter.result({
  "duration": 1500499,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogoutSteps.user_should_see_Login_page()"
});
formatter.result({
  "duration": 711376700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rekha",
      "offset": 35
    },
    {
      "val": "",
      "offset": 59
    }
  ],
  "location": "LoginLogoutSteps.user_performs_Login_with_Username_and_Password_as(String,String)"
});
formatter.result({
  "duration": 969104400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 47
    },
    {
      "val": "Please enter a password",
      "offset": 83
    }
  ],
  "location": "LoginLogoutSteps.user_should_see_UserName_validation_error_as_and_Password_validation_error_as(String,String)"
});
formatter.result({
  "duration": 97801,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify Login with Invalid credentials for AmegyBank",
  "description": "",
  "id": "homepage-navigation-and-login-with-invalid-credentials-to-amegybank;verify-login-with-invalid-credentials-for-amegybank;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "User clicks on Login Button  on Amegybank Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should see Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User performs Login with Username \"\" and Password as \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should see UserName validation error  as \"Please enter a Login Id\" and Password validation error as \"\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.user_clicks_on_Login_Button_on_Amegybank_Homepage()"
});
formatter.result({
  "duration": 719700,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogoutSteps.user_should_see_Login_page()"
});
formatter.result({
  "duration": 801905700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 35
    },
    {
      "val": "",
      "offset": 54
    }
  ],
  "location": "LoginLogoutSteps.user_performs_Login_with_Username_and_Password_as(String,String)"
});
formatter.result({
  "duration": 503014200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a Login Id",
      "offset": 47
    },
    {
      "val": "",
      "offset": 106
    }
  ],
  "location": "LoginLogoutSteps.user_should_see_UserName_validation_error_as_and_Password_validation_error_as(String,String)"
});
formatter.result({
  "duration": 68600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Finally Quit Amegybank browser",
  "description": "",
  "id": "homepage-navigation-and-login-with-invalid-credentials-to-amegybank;finally-quit-amegybank-browser",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User quit the browser tab",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.user_quit_the_browser_tab()"
});
formatter.result({
  "duration": 687973100,
  "status": "passed"
});
});