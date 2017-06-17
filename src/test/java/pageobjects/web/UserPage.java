package pageobjects.web;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.BaseClass;

public class UserPage extends BaseClass{
	
	public UserPage(){
		 PageFactory.initElements(driver,this);
		 
	    }

	 @FindBy(xpath="//*[@id='feed-posting-text']/p[1]")
	    static WebElement verifyUser;

	    public void verifyUserIsOnHomepage() throws Exception{
	    	if(!isElementPresent(verifyUser)){
				 throw new Exception("User is not on UserPage and is on "+getTitle());
	    }
	    }
	
	    public boolean verifyUserPresent(String text){
	    	return verifyUser.getText().equalsIgnoreCase(text);
	    }
	    

}
