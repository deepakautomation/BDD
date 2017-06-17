package utils;

import java.util.HashMap;

public class GlobalProperties {
	
	public static ThreadLocal<String> FileSeperator;
	public static String ChromeDriverPathForWindows;
	public static String ChromeDriverPathForMac;
	public static String FirefoxDriverPathForWindows;
	public static String FirefoxDriverPathForMac;
	public static HashMap<String, String> PropertyMap;
	public static String ConfigFilePath;
	
	
	public GlobalProperties(){
		FileSeperator = new ThreadLocal<String>(){
			
			@Override
            protected String initialValue() {
				return System.getProperty("file.separator");
			}
		};

		ChromeDriverPathForWindows = System.getProperty("user.dir") + FileSeperator.get() + "src" + FileSeperator.get()
				+ "test" + FileSeperator.get() + "resources" + FileSeperator.get() + "drivers" + FileSeperator.get()
				+ "chromedriver.exe";

		ChromeDriverPathForMac = System.getProperty("user.dir") + FileSeperator.get() + "src" + FileSeperator.get()
				+ "main" + FileSeperator.get() + "resources" + FileSeperator.get() + "drivers" + FileSeperator.get()
				+ "chromedriver";

		FirefoxDriverPathForWindows = "src" + FileSeperator.get() + "main" + FileSeperator.get() + "resources"
				+ FileSeperator.get() + "drivers" + FileSeperator.get() + "geckodriver.exe";

		FirefoxDriverPathForMac = System.getProperty("user.dir") + FileSeperator.get() + "src" + FileSeperator.get()
				+ "main" + FileSeperator.get() + "resources" + FileSeperator.get() + "drivers" + FileSeperator.get()
				+ "geckodriver";
		
		
		PropertyMap =new HashMap<String, String>();
		
		ConfigFilePath = System.getProperty("user.dir") + FileSeperator.get() +  "config.properties";

	}
	
	public static HashMap<String,String> getPropertyMap(){
        return PropertyMap;
    }

}
