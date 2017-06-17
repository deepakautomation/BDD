package stepdefinitions.web;

import cucumber.api.java.en.Then;
import pageobjects.web.UserPage;

public class MeritnationUserPage {
	
	UserPage userPage = new UserPage();

	@Then("^verify user has successfully logged in$")
	public void verify_user_has_successfully_logged_in(String text) throws Throwable {
	  assert userPage.verifyUserPresent("What's new with you?"):"Expected: failed";
	}

}
