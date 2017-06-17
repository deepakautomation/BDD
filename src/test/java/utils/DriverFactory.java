package utils;

import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

public class DriverFactory {

	 public static WebDriver driver = null;
	 private static String isRemoteExecution="";
	 private static String remoteURL="";
	 
	 /**
	     * Will return the webdriver instance based on the input browser name
	     * @param browser
	     * @return
	     */
	    public static WebDriver getWebDriver(String browser){
	        try {
	            isRemoteExecution = GlobalProperties.getPropertyMap().get("isRemoteExecution");
	            if (isRemoteExecution.equalsIgnoreCase("true")) {
	                remoteURL = GlobalProperties.getPropertyMap().get("remoteGridURL");
	                remoteURL = remoteURL + "/wd/hub";
	                URL url = new URL(remoteURL);
	                DesiredCapabilities capabilities = new DesiredCapabilities();
	                driver = new RemoteWebDriver(url,capabilities);
	                return driver;
	            }else{
	                if(browser.toLowerCase().contains("firefox")){
	                    driver = configureDriver("firefox");
	                }else if(browser.toLowerCase().contains("chrome")){
	                    driver = configureDriver("chrome");
	                }else {
	                    driver = null;
	                }
	                return driver;
	            }
	        }catch (Exception e){
	            e.printStackTrace();
	            return null;
	        }
	    }
	    
	    
	    /**
	     * Will setup the webdriver paths based on the browser and the platform
	     * @param browser
	     * @return
	     */
	    private static WebDriver configureDriver(String browser){
	        try{
	            String current_OS = GlobalProperties.getPropertyMap().get("os.name").toLowerCase();
	            if(browser.equalsIgnoreCase("chrome")){
	                if(current_OS.contains("mac")){
	                    LogUtility.log.info("Requested browser is Chrome-----Current operating system is Mac");
	                    System.setProperty("webdriver.chrome.driver",GlobalProperties.ChromeDriverPathForMac);
	                    LogUtility.log.info("xxxxxxxxx---Setting up environment for Mac Chrome driver");
	                    driver = new ChromeDriver();
	                    LogUtility.log.info("Opening up new chrome browser for Mac");
	                }else if(current_OS.contains("windows")){
	                    LogUtility.log.info("Requested browser is Chrome-----Current operating system is Windows");
	                    System.setProperty("webdriver.chrome.driver",GlobalProperties.ChromeDriverPathForWindows);
	                    LogUtility.log.info("xxxxxxxxx---Setting up environment for Windows Chrome driver");
	                    driver = new ChromeDriver();
	                    LogUtility.log.info("Opening up new chrome browser for Windows");
	                }else{
	                    LogUtility.log.info("Operating system not identified");
	                    return null;
	                }
	                driver.manage().window().maximize();
	                return driver;
	            }else if(browser.equalsIgnoreCase("firefox")) {
	                if (current_OS.contains("mac")) {
	                    LogUtility.log.info("Requested browser is Firefox-----Current operating system is MAC");
	                    System.setProperty("webdriver.gecko.driver", GlobalProperties.FirefoxDriverPathForMac);
	                    LogUtility.log.info("Setting up firefox driver for MAC");
	                    driver = new FirefoxDriver();
	                    LogUtility.log.info("Opening up firefox browser for MAC");
	                } else if (current_OS.contains("windows")) {
	                    LogUtility.log.info("Requested browser is Firefox-----Current operating system is Windows");
	                    System.setProperty("webdriver.gecko.driver", GlobalProperties.FirefoxDriverPathForWindows);
	                    LogUtility.log.info("Setting up firefox driver for Windows");
	                    driver = new FirefoxDriver();
	                    LogUtility.log.info("Opening up firefox driver for Windows");
	                } else {
	                    System.out.println("Unidentified OS");
	                    return null;
	                }
	                driver.manage().window().maximize();
	                return driver;
	            }else{
	                return null;
	            }
	        }catch (Exception e){
	            e.printStackTrace();
	            return null;
	        }

	    }


		public static void tearDown() {
			if(driver!=null){
				driver.quit();
			}
			
		}

}
