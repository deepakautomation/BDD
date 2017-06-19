package stepdefinitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/main/java/features",glue="stepdefinitions",plugin  = {"pretty", "json:target/reports/jsonreport/index.json","html:target/reports/htmlreport","junit:target/reports/xmlreport.xml"})
public class RunnerTest {

}
