package stepdefinitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/main/java/features",glue="stepdefinitions",plugin="html:target/cucumber-html-report")
public class RunnerTest {

}
