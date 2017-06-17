package pageobjects.web;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPage extends BaseClass{

	 public LoginPage(){
		 
		 PageFactory.initElements(driver,this);
		 
	    }

	 @FindBy(xpath="//*[@id='username_login']")
	    static WebElement username;

	 @FindBy(xpath="//*[contains(@id,'loginBtn')]")
	    static WebElement loginBtn;
	 
	 @FindBy(xpath="//*[@id='password_login']")
	    static WebElement password;

	
	    public void verifyUserIsOnLoginPage() throws Exception{
	    	if(!isElementPresent(username)){
				 throw new Exception("User is not on LoginPage and is on "+getTitle());
	    }
	    }
	    
	    public LoginPage enterUsernameAndPassword(String username, String password){
	    	type(LoginPage.username, username);
	    	type(LoginPage.password, password);
	    	return this;
	    }
	    
	    public void clickLoginBtn(){
	    	click(loginBtn);
	    }
	    
	    public LoginPage entervalues(String username, String password){
	    	type(LoginPage.username, username);
	    	type(LoginPage.password, password);
	    	return this;
	    }
	    
	    
}
