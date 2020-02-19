package com.ab.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/amegybankhompage.feature",
				plugin = {"pretty","html:target/htmlreports/cucumber-pretty","json:target/cucumber-report/CucumberTestReport.json"},
		glue = {"com/AmegyBank/steps"}
		)
public class TestRunner {

}
