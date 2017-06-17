package stepdefinitions.web;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.web.LoginPage;
import pageobjects.web.UserPage;

public class MeritnationLoginPage {

	LoginPage loginPage = new LoginPage();
	UserPage userPage = new UserPage();
	
	@Given("^user is on login page$")
	public void user_is_on_login_page() throws Throwable {
	   loginPage.verifyUserIsOnLoginPage();
	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) throws Throwable {
	    loginPage.enterUsernameAndPassword(username, password);
	}

	@When("^click on login button$")
	public void click_on_login_button() throws Throwable {
	    loginPage.clickLoginBtn();
	}

	@Then("^User should be navigated to UserPage$")
	public void user_should_be_navigated_to_UserPage() throws Throwable {
	   userPage.verifyUserPresent("What's new with you?");
	}
	
	@When("^User enters \"([^\"]*)\" in username and \"([^\"]*)\" in password$")
	public void user_enters_in_username_and_in_password(String arg1, String arg2) throws Throwable {
	   loginPage.enterUsernameAndPassword("sunaina@test.com", "12345678");
	}

	@Then("^User should be navigated to the same page$")
	public void user_should_be_navigated_to_the_same_page() throws Throwable {
	   System.out.println();
	}
}
