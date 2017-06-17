package stepdefinitions.web;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.web.HomePage;
import pageobjects.web.LoginPage;

public class MeritnationHomePage {
	
	
	HomePage homePage = new HomePage();
	LoginPage loginPage = new LoginPage();
	
	@Given("^Verify that user is on meritnation HomePage$")
	public void verify_that_user_is_on_meritnation_HomePage() throws Throwable {
	    homePage.verifyCreateAccountPresent();
	    homePage.verifyUserIsOnHomepage();
	}

	@Given("^verify the Create Account button is present$")
	public void verify_the_Create_Account_button_is_present() throws Throwable {
		 homePage.verifyCreateAccountPresent();  
	}

	@When("^User click on Login link$")
	public void user_click_on_Login_link() throws Throwable {
		homePage.clickLoginLink();
	   
	}

	@Then("^User should be navigated to LoginPage$")
	public void user_should_be_navigated_to_LoginPage() throws Throwable {
		loginPage.verifyUserIsOnLoginPage();
	   
	}

}
