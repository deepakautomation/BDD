package pageobjects.web;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.BaseClass;

public class HomePage extends BaseClass{

	 public HomePage(){
		 PageFactory.initElements(driver,this);
		 
	    }

	 @FindBy(xpath="//*[@id='main-header']/div[1]/div[2]/div[2]/a[1]/span[1]")
	    static WebElement loginLink;

	    @FindBy(xpath="//*[@id='main-header']/div[1]/div[2]/div[2]/a[2]")
	    static WebElement createAccount;

	    public void verifyUserIsOnHomepage() throws Exception{
	    	if(!isElementPresent(loginLink)){
				 throw new Exception("User is not on HomePage and is on "+getTitle());
	    }
	    }
	
	    public boolean verifyCreateAccountPresent(){
	    	return createAccount.isDisplayed();
	    }
	    
	    public LoginPage clickLoginLink() throws Exception{
	    	click(loginLink);
	    	return new LoginPage();
	    }
	    
	    
	    
	 
}
