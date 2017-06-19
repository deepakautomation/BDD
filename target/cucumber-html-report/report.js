$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Test meritnation LoginPage",
  "description": "",
  "id": "test-meritnation-loginpage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify that user unsuccessfully login to the application when entering invalid details",
  "description": "",
  "id": "test-meritnation-loginpage;verify-that-user-unsuccessfully-login-to-the-application-when-entering-invalid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@negative"
    }
  ]
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
  "duration": 17863332266,
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
  "duration": 301955840,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.verify_the_Create_Account_button_is_present()"
});
formatter.result({
  "duration": 35266134,
  "status": "passed"
});
formatter.match({
  "location": "MeritnationHomePage.user_click_on_Login_link()"
});
formatter.result({
  "duration": 88124160,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cspan class\u003d\"hidden-xs\"\u003e...\u003c/span\u003e is not clickable at point (1137, 32). Other element would receive the click: \u003cdiv class\u003d\"purechat-widget-title\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d58.0.3029.110)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 52 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027XE-T-DEEPAKS\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dsood\\AppData\\Local\\Temp\\scoped_dir4568_4213}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.110, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 3c3f01b107c058cd2c18a9d31a496d17\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat core.BaseClass.click(BaseClass.java:46)\r\n\tat pageobjects.web.HomePage.clickLoginLink(HomePage.java:33)\r\n\tat stepdefinitions.web.MeritnationHomePage.user_click_on_Login_link(MeritnationHomePage.java:28)\r\n\tat ✽.When User click on Login link(LoginPage.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MeritnationHomePage.user_should_be_navigated_to_LoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Verify that user unsuccessfully login to the application when entering invalid details",
  "description": "",
  "id": "test-meritnation-loginpage;verify-that-user-unsuccessfully-login-to-the-application-when-entering-invalid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@negative"
    }
  ]
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "MeritnationLoginPage.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MeritnationLoginPage.user_should_be_navigated_to_the_same_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1379826347,
  "status": "passed"
});
});