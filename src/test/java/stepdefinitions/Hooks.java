package stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import core.BaseClass;
import utils.DriverFactory;
import utils.GlobalProperties;
import utils.PropertiesFileReader;

public class Hooks {
	
	public WebDriver driver = null;
	
	public GlobalProperties globalProperties = null;
	public PropertiesFileReader propertiesReader = null;
	BaseClass baseClass = null;
	long longWait=60;
	
	public Hooks(){
		globalProperties = new GlobalProperties();
		setAllPropertiesInGlobalHashMap();
	}

	
	private void setAllPropertiesInGlobalHashMap() {
		 if (propertiesReader == null) {
	            propertiesReader = new PropertiesFileReader();
	        }
		propertiesReader.loadHashMapWithConfigFile(GlobalProperties.getPropertyMap());
		 propertiesReader.reloadMapWithSystemProperties(GlobalProperties.getPropertyMap());
	  /*
	   * add logs here as well
	   * */
	}
	
	
	 @Before
	    public void setupExecutionEnvironment(){
	        if(GlobalProperties.getPropertyMap().get("AUT").toLowerCase().contains("web")){
	            setupWebEnvironment();
	            baseClass = new BaseClass(driver);
	        }
	        driver.get("http://meritnation.com");
	        driver.manage().timeouts().implicitlyWait(longWait, TimeUnit.SECONDS);
	    }
	 
	 private void setupWebEnvironment(){
         if(GlobalProperties.getPropertyMap().get("browser").toLowerCase().contains("firefox")){
             this.driver = DriverFactory.getWebDriver(GlobalProperties.getPropertyMap().get("browser"));
         }else if(GlobalProperties.getPropertyMap().get("browser").toLowerCase().contains("chrome")){
             this.driver = DriverFactory.getWebDriver(GlobalProperties.getPropertyMap().get("browser"));
         }
 }
	 
	 
	 @After
	    public void tearDown(Scenario scenario){
	        takeScreenShotOnFailure(scenario);
	        DriverFactory.tearDown();
	    }
	 
	  private void takeScreenShotOnFailure(Scenario scenario){
	        if(GlobalProperties.getPropertyMap().get("AUT").equalsIgnoreCase("web")){
	            if(scenario.isFailed()) {
	                byte[] screenShot = BaseClass.takesScreenShot();
	                scenario.embed(screenShot,"image/png");
	            }
	        }

	    }

}
