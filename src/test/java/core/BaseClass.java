package core;

import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass {

	  public static WebDriver driver = null;
	  public final static Logger logger = Logger.getLogger("Logger");
	  
	public BaseClass(WebDriver driver) {
		this.driver = driver;
	}
	public BaseClass() {
		
	}
	
	/**
     * Will take the sceenshot using the driver instance
     * @return
     */
    public static byte[] takesScreenShot(){
        byte[] screenShot;
        if(driver!=null) {
            screenShot= ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            return screenShot;
        }else{
            return null;
        }

    }
    
    public void waitForElement(WebElement element){
    	WebDriverWait wait= new WebDriverWait(driver, 30);
    	wait.until(ExpectedConditions.visibilityOf(element));
    }
    
    
    public void click(WebElement element){
    	waitForElement(element);
    	element.click();
    }
    
    
    public void type(WebElement element, String text){
    	waitForElement(element);
    	element.clear();
    	element.sendKeys(text);
    }
    
    public boolean isTextEqualTo(WebElement element, String text){
    	waitForElement(element);
    	return element.getText().equalsIgnoreCase(text);
    }
    
    public void navigateTo(String url){
    	 driver.get(url);
    }
    
    public String getTitle(){
    	return driver.getTitle();	
    }
    
    
    public boolean isElementPresent(WebElement element){
    	waitForElement(element);
    	return element.isEnabled();
    	
    }

}
