$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 20,
      "value": "#@tag"
    },
    {
      "line": 21,
      "value": "#Feature: Title of your feature"
    },
    {
      "line": 22,
      "value": "#\tI want to use this template for my feature file"
    },
    {
      "line": 23,
      "value": "#"
    },
    {
      "line": 24,
      "value": "#@tag1"
    },
    {
      "line": 25,
      "value": "#Scenario: Title of your scenario"
    },
    {
      "line": 26,
      "value": "#Given I want to write a step with precondition"
    },
    {
      "line": 27,
      "value": "#\tAnd some other precondition"
    },
    {
      "line": 28,
      "value": "#When I complete action"
    },
    {
      "line": 29,
      "value": "#\tAnd some other action"
    },
    {
      "line": 30,
      "value": "#\tAnd yet another action"
    },
    {
      "line": 31,
      "value": "#Then I validate the outcomes"
    },
    {
      "line": 32,
      "value": "#\tAnd check more outcomes"
    },
    {
      "line": 33,
      "value": "#"
    },
    {
      "line": 34,
      "value": "#@tag2"
    },
    {
      "line": 35,
      "value": "#Scenario Outline: Title of your scenario outline"
    },
    {
      "line": 36,
      "value": "#Given I want to write a step with \u003cname\u003e"
    },
    {
      "line": 37,
      "value": "#When I check for the \u003cvalue\u003e in step"
    },
    {
      "line": 38,
      "value": "#Then I verify the \u003cstatus\u003e in step"
    },
    {
      "line": 39,
      "value": "#"
    },
    {
      "line": 40,
      "value": "#Examples:"
    },
    {
      "line": 41,
      "value": "#| name  |value | status |"
    },
    {
      "line": 42,
      "value": "#| name1 |  5   | success|"
    },
    {
      "line": 43,
      "value": "#| name2 |  7   | Fail   |"
    },
    {
      "line": 44,
      "value": "#Feature: Test meritnation homepage"
    },
    {
      "line": 45,
      "value": "#Scenario Outline: Test login with valid credentials"
    },
    {
      "line": 46,
      "value": "#"
    },
    {
      "line": 47,
      "value": "#Given Open ff and launch application"
    },
    {
      "line": 48,
      "value": "#And verify title of the page"
    },
    {
      "line": 49,
      "value": "#When Enter \"\u003csearchbox\u003e\" in searchbox"
    },
    {
      "line": 50,
      "value": "#"
    },
    {
      "line": 51,
      "value": "#Then close the browser"
    },
    {
      "line": 52,
      "value": "#"
    },
    {
      "line": 53,
      "value": "#Examples:"
    },
    {
      "line": 54,
      "value": "#|searchbox|"
    },
    {
      "line": 55,
      "value": "#|selenium1|"
    },
    {
      "line": 56,
      "value": "#|selenium2|"
    },
    {
      "line": 57,
      "value": "#|selenium3|"
    }
  ],
  "line": 58,
  "name": "Test meritnation homepage",
  "description": "",
  "id": "test-meritnation-homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14320101239,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-meritnation-homepage;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 61,
  "name": "Verify that user is on meritnation HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "verify the Create Account button is present",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "User should be navigated to LoginPage",
  "keyword": "Then "
});
formatter.match({
  "location": "MeritnationHomePage.verify_that_user_is_on_meritnation_HomePage()"
});
formatter.result({
  "duration": 286722623,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.verify_the_Create_Account_button_is_present()"
});
formatter.result({
  "duration": 49692245,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.user_click_on_Login_link()"
});
formatter.result({
  "duration": 188708162,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.user_should_be_navigated_to_LoginPage()"
});
formatter.result({
  "duration": 90273861,
  "status": "passed"
});
formatter.after({
  "duration": 937346880,
  "status": "passed"
});
formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Test meritnation LoginPage",
  "description": "",
  "id": "test-meritnation-loginpage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify that user successfully login to the application",
  "description": "",
  "id": "test-meritnation-loginpage;verify-that-user-successfully-login-to-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enters \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should be navigated to UserPage",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "test-meritnation-loginpage;verify-that-user-successfully-login-to-the-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 15,
      "id": "test-meritnation-loginpage;verify-that-user-successfully-login-to-the-application;;1"
    },
    {
      "cells": [
        "sunaina@test.com",
        "12345678"
      ],
      "line": 16,
      "id": "test-meritnation-loginpage;verify-that-user-successfully-login-to-the-application;;2"
    },
    {
      "cells": [
        "deepak@test.com",
        "12345678"
      ],
      "line": 17,
      "id": "test-meritnation-loginpage;verify-that-user-successfully-login-to-the-application;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13392501150,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Verify that user is on meritnation HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "verify the Create Account button is present",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be navigated to LoginPage",
  "keyword": "Then "
});
formatter.match({
  "location": "MeritnationHomePage.verify_that_user_is_on_meritnation_HomePage()"
});
formatter.result({
  "duration": 206358965,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.verify_the_Create_Account_button_is_present()"
});
formatter.result({
  "duration": 20208248,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.user_click_on_Login_link()"
});
formatter.result({
  "duration": 165437296,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.user_should_be_navigated_to_LoginPage()"
});
formatter.result({
  "duration": 185764583,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify that user successfully login to the application",
  "description": "",
  "id": "test-meritnation-loginpage;verify-that-user-successfully-login-to-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enters \"sunaina@test.com\" and \"12345678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should be navigated to UserPage",
  "keyword": "Then "
});
formatter.match({
  "location": "MeritnationLoginPage.user_is_on_login_page()"
});
formatter.result({
  "duration": 57516044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sunaina@test.com",
      "offset": 13
    },
    {
      "val": "12345678",
      "offset": 36
    }
  ],
  "location": "MeritnationLoginPage.user_enters_and(String,String)"
});
formatter.result({
  "duration": 499415039,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationLoginPage.click_on_login_button()"
});
formatter.result({
  "duration": 138334530,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationLoginPage.user_should_be_navigated_to_UserPage()"
});
formatter.result({
  "duration": 4478691377,
  "status": "passed"
});
formatter.after({
  "duration": 857231543,
  "status": "passed"
});
formatter.before({
  "duration": 13271172730,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Verify that user is on meritnation HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "verify the Create Account button is present",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be navigated to LoginPage",
  "keyword": "Then "
});
formatter.match({
  "location": "MeritnationHomePage.verify_that_user_is_on_meritnation_HomePage()"
});
formatter.result({
  "duration": 196797776,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.verify_the_Create_Account_button_is_present()"
});
formatter.result({
  "duration": 23503400,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.user_click_on_Login_link()"
});
formatter.result({
  "duration": 211794708,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.user_should_be_navigated_to_LoginPage()"
});
formatter.result({
  "duration": 87500096,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify that user successfully login to the application",
  "description": "",
  "id": "test-meritnation-loginpage;verify-that-user-successfully-login-to-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enters \"deepak@test.com\" and \"12345678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should be navigated to UserPage",
  "keyword": "Then "
});
formatter.match({
  "location": "MeritnationLoginPage.user_is_on_login_page()"
});
formatter.result({
  "duration": 118251722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deepak@test.com",
      "offset": 13
    },
    {
      "val": "12345678",
      "offset": 35
    }
  ],
  "location": "MeritnationLoginPage.user_enters_and(String,String)"
});
formatter.result({
  "duration": 495125752,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationLoginPage.click_on_login_button()"
});
formatter.result({
  "duration": 133717988,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationLoginPage.user_should_be_navigated_to_UserPage()"
});
formatter.result({
  "duration": 5826261464,
  "status": "passed"
});
formatter.after({
  "duration": 862936939,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify that user unsuccessfully login to the application when entering invalid details",
  "description": "",
  "id": "test-meritnation-loginpage;verify-that-user-unsuccessfully-login-to-the-application-when-entering-invalid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User enters \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User should be navigated to the same page",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "test-meritnation-loginpage;verify-that-user-unsuccessfully-login-to-the-application-when-entering-invalid-details;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 26,
      "id": "test-meritnation-loginpage;verify-that-user-unsuccessfully-login-to-the-application-when-entering-invalid-details;;1"
    },
    {
      "cells": [
        "sunaina@test.com",
        "1234567"
      ],
      "line": 27,
      "id": "test-meritnation-loginpage;verify-that-user-unsuccessfully-login-to-the-application-when-entering-invalid-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13401048151,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Verify that user is on meritnation HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "verify the Create Account button is present",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be navigated to LoginPage",
  "keyword": "Then "
});
formatter.match({
  "location": "MeritnationHomePage.verify_that_user_is_on_meritnation_HomePage()"
});
formatter.result({
  "duration": 201305517,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.verify_the_Create_Account_button_is_present()"
});
formatter.result({
  "duration": 20457422,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.user_click_on_Login_link()"
});
formatter.result({
  "duration": 215830981,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.user_should_be_navigated_to_LoginPage()"
});
formatter.result({
  "duration": 100121344,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify that user unsuccessfully login to the application when entering invalid details",
  "description": "",
  "id": "test-meritnation-loginpage;verify-that-user-unsuccessfully-login-to-the-application-when-entering-invalid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User enters \"sunaina@test.com\" and \"1234567\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User should be navigated to the same page",
  "keyword": "Then "
});
formatter.match({
  "location": "MeritnationLoginPage.user_is_on_login_page()"
});
formatter.result({
  "duration": 103202737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sunaina@test.com",
      "offset": 13
    },
    {
      "val": "1234567",
      "offset": 36
    }
  ],
  "location": "MeritnationLoginPage.user_enters_and(String,String)"
});
formatter.result({
  "duration": 588760898,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationLoginPage.click_on_login_button()"
});
formatter.result({
  "duration": 143770698,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationLoginPage.user_should_be_navigated_to_the_same_page()"
});
formatter.result({
  "duration": 100693,
  "status": "passed"
});
formatter.after({
  "duration": 806963724,
  "status": "passed"
});
formatter.uri("UserPage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 20,
      "value": "#@tag"
    },
    {
      "line": 21,
      "value": "#Feature: Title of your feature"
    },
    {
      "line": 22,
      "value": "#\tI want to use this template for my feature file"
    },
    {
      "line": 23,
      "value": "#"
    },
    {
      "line": 24,
      "value": "#@tag1"
    },
    {
      "line": 25,
      "value": "#Scenario: Title of your scenario"
    },
    {
      "line": 26,
      "value": "#Given I want to write a step with precondition"
    },
    {
      "line": 27,
      "value": "#\tAnd some other precondition"
    },
    {
      "line": 28,
      "value": "#When I complete action"
    },
    {
      "line": 29,
      "value": "#\tAnd some other action"
    },
    {
      "line": 30,
      "value": "#\tAnd yet another action"
    },
    {
      "line": 31,
      "value": "#Then I validate the outcomes"
    },
    {
      "line": 32,
      "value": "#\tAnd check more outcomes"
    },
    {
      "line": 33,
      "value": "#"
    },
    {
      "line": 34,
      "value": "#@tag2"
    },
    {
      "line": 35,
      "value": "#Scenario Outline: Title of your scenario outline"
    },
    {
      "line": 36,
      "value": "#Given I want to write a step with \u003cname\u003e"
    },
    {
      "line": 37,
      "value": "#When I check for the \u003cvalue\u003e in step"
    },
    {
      "line": 38,
      "value": "#Then I verify the \u003cstatus\u003e in step"
    },
    {
      "line": 39,
      "value": "#"
    },
    {
      "line": 40,
      "value": "#Examples:"
    },
    {
      "line": 41,
      "value": "#| name  |value | status |"
    },
    {
      "line": 42,
      "value": "#| name1 |  5   | success|"
    },
    {
      "line": 43,
      "value": "#| name2 |  7   | Fail   |"
    },
    {
      "line": 47,
      "value": "#Feature: Test meritnation homepage"
    },
    {
      "line": 48,
      "value": "#Scenario Outline: Test login with valid credentials"
    },
    {
      "line": 49,
      "value": "#"
    },
    {
      "line": 50,
      "value": "#Given Open ff and launch application"
    },
    {
      "line": 51,
      "value": "#And verify title of the page"
    },
    {
      "line": 52,
      "value": "#When Enter \"\u003csearchbox\u003e\" in searchbox"
    },
    {
      "line": 53,
      "value": "#"
    },
    {
      "line": 54,
      "value": "#Then close the browser"
    },
    {
      "line": 55,
      "value": "#"
    },
    {
      "line": 56,
      "value": "#Examples:"
    },
    {
      "line": 57,
      "value": "#|searchbox|"
    },
    {
      "line": 58,
      "value": "#|selenium1|"
    },
    {
      "line": 59,
      "value": "#|selenium2|"
    },
    {
      "line": 60,
      "value": "#|selenium3|"
    }
  ],
  "line": 65,
  "name": "Test meritnation userpage",
  "description": "",
  "id": "test-meritnation-userpage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13785712275,
  "status": "passed"
});
formatter.background({
  "line": 67,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 68,
  "name": "Verify that user is on meritnation HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User click on Login link",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User should be navigated to LoginPage",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User enters \"sunaina@test.com\" in username and \"12345678\" in password",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User should be navigated to UserPage",
  "keyword": "Then "
});
formatter.match({
  "location": "MeritnationHomePage.verify_that_user_is_on_meritnation_HomePage()"
});
formatter.result({
  "duration": 311253865,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.user_click_on_Login_link()"
});
formatter.result({
  "duration": 279862665,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.user_should_be_navigated_to_LoginPage()"
});
formatter.result({
  "duration": 197441190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sunaina@test.com",
      "offset": 13
    },
    {
      "val": "12345678",
      "offset": 48
    }
  ],
  "location": "MeritnationLoginPage.user_enters_in_username_and_in_password(String,String)"
});
formatter.result({
  "duration": 612521152,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationLoginPage.click_on_login_button()"
});
formatter.result({
  "duration": 173694590,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationLoginPage.user_should_be_navigated_to_UserPage()"
});
formatter.result({
  "duration": 4882544440,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Test the correct userpage is displayed",
  "description": "",
  "id": "test-meritnation-userpage;test-the-correct-userpage-is-displayed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 76,
  "name": "User should be navigated to UserPage",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "verify user has successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "MeritnationLoginPage.user_should_be_navigated_to_UserPage()"
});
formatter.result({
  "duration": 22935079,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationUserPage.verify_user_has_successfully_logged_in()"
});
formatter.result({
  "duration": 19138593,
  "status": "passed"
});
formatter.after({
  "duration": 824701141,
  "status": "passed"
});
});