#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios 
#<> (placeholder)
#""
## (Comments)
#
#Sample Feature Definition Template
#@tag
#Feature: Title of your feature
#	I want to use this template for my feature file
#
#@tag1
#Scenario: Title of your scenario
#Given I want to write a step with precondition
#	And some other precondition
#When I complete action
#	And some other action
#	And yet another action
#Then I validate the outcomes
#	And check more outcomes
#
#@tag2
#Scenario Outline: Title of your scenario outline
#Given I want to write a step with <name>
#When I check for the <value> in step
#Then I verify the <status> in step
#
#Examples:
    #| name  |value | status |
    #| name1 |  5   | success|
    #| name2 |  7   | Fail   |
    
    
    
    #Feature: Test meritnation homepage
    #Scenario Outline: Test login with valid credentials
    #
    #Given Open ff and launch application
    #And verify title of the page
    #When Enter "<searchbox>" in searchbox
    #
    #Then close the browser
    #
    #Examples:
    #|searchbox|
    #|selenium1|
    #|selenium2|
    #|selenium3|
    
    
    
    
    Feature: Test meritnation userpage
    
    Background:
    Given Verify that user is on meritnation HomePage
    And User click on Login link
    And User should be navigated to LoginPage
    When User enters "sunaina@test.com" in username and "12345678" in password
    And click on login button
    Then User should be navigated to UserPage
    
  Scenario: Test the correct userpage is displayed
    Given User should be navigated to UserPage
    Then verify user has successfully logged in
    
    
    
    
    
    
    
    
