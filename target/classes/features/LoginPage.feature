Feature: Test meritnation LoginPage

  Background:
  Given Verify that user is on meritnation HomePage
  And verify the Create Account button is present
  When User click on Login link
  Then User should be navigated to LoginPage
  Scenario Outline: Verify that user successfully login to the application
  
    Given user is on login page
    When User enters "<Username>" and "<Password>"
    And click on login button
    Then User should be navigated to UserPage
    Examples: 
      | Username         | Password |
      | sunaina@test.com | 12345678 |
      | deepak@test.com  | 12345678 |
      
      
  Scenario Outline: Verify that user unsuccessfully login to the application when entering invalid details
    Given user is on login page
    When User enters "<Username>" and "<Password>"
    And click on login button
    Then User should be navigated to the same page
    Examples: 
      | Username         | Password |
      | sunaina@test.com |  1234567 |
