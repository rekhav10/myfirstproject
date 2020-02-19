package com.AmegyBank.steps;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.ab.pages.HomePage;
import com.ab.pages.LoginPage;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginLogoutSteps {
	static WebDriver driver;
	static HomePage homepage;
     static LoginPage loginpage;

	@Given("^User open  amegybank Url in browser$")
	public void user_should_navigate_to_amegybank_Url_in_homepage() throws Throwable{
		System.setProperty("webdriver.chrome.driver",
				"C:\\Rekha\\Installations\\Drivers\\chromeDriver\\78\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get("https://www.amegybank.com/");
	}

	@Then("^User should navigate  to amegybank homepage$")
	public void user_should_navigate_to_amegybank_homepage() throws Throwable{
		homepage = new HomePage(driver);
		Assert.assertTrue(homepage.usernavigatedHp());
        System.out.println("User should navigate to amegybank home page");
		//boolean logodisplayed = driver.findElement(By.cssSelector("img.logo")).isDisplayed();
		//System.out.println(logodisplayed);
	}

	@Then("^User should see homepage title as \"([^\"]*)\"$")
	public void user_should_see_homepage_title_as(String pagetitle)throws Throwable {
	Assert.assertEquals(homepage.getpageTitle(), pagetitle);
	System.out.println(pagetitle);
		/*
		 * String actualTitle = driver.getTitle(); Assert.assertEquals(title,
		 * actualTitle); System.out.println(title);
		 */
	}
	
	@When("^User should navigate to amegybank homepage(\\d+)$")
	public void user_should_navigate_to_amegybank_homepage(int arg1) throws Throwable {
		homepage = new HomePage(driver);
		Assert.assertTrue(homepage.usernavigatedHp());
        System.out.println("User should navigate to amegybank home page");
	}
	

	@Then("^User should see different top left menu options$")
	public void user_should_see_different_top_left_menu_options(DataTable datatable) throws Throwable {
		
		List<String> topleft = datatable.asList(String.class);
		Assert.assertEquals(topleft, homepage.getTopLeftHpNavigationOption());
		
		//  List<String> topleft1 = datatable.asList(String.class); 
		  List<WebElement>  topleftmenuUI =
		  driver.findElements(By.cssSelector("ul.secondary-nav__user-segment li a"));
		  List<String> topLeftmenuList = new ArrayList<String>();
		  
		  for (WebElement element : topleftmenuUI) {
		  topLeftmenuList.add(element.getText()); }
		 
	}

	@Then("^User should see different Top Right menu options$")
	public void user_should_see_different_Top_Right_menu_options(DataTable datatableright) throws Throwable {
		List<String> topright = datatableright.asList(String.class);
		Assert.assertEquals(topright, homepage.getTopRightHpNavigationOption());
		
		//  List<String> topRight = datatableright.asList(String.class);
		List<WebElement>  topRightmenuUI =
		  driver.findElements(By.cssSelector("ul.secondary-nav__misc-links li a"));
		  List<String> topRightmenuList = new ArrayList<String>();
		  
		  for (WebElement element : topRightmenuUI) {
		  topRightmenuList.add(element.getText()); }
		 
	}



	@When("^User clicks on Login Button  on Amegybank Homepage$")
	public void user_clicks_on_Login_Button_on_Amegybank_Homepage() throws Throwable{
		loginpage = new LoginPage(driver);
		/*
		 * WebElement element =
		 * driver.findElement(By.cssSelector("span.main-nav__login-button__label"));
		 * element.click();
		 */
	}

	@Then("^User should see Login page$")
	public void user_should_see_Login_page() {
		loginpage.abLoginButton();
		/*
		 * String actualtitle = driver.getTitle();
		 * Assert.assertEquals("Online Banking Login | Amegy Bank of Texas",
		 * actualtitle); System.out.println("LoginTitle : " + actualtitle);
		 */
	}

	@When("^User performs Login with Username \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_performs_Login_with_Username_and_Password_as(String name, String paswrd)throws Throwable {
		loginpage.abLogin(name, paswrd);
		/*
		 * driver.findElement(By.id("publicCred1_P")).sendKeys("rekha");
		 * driver.findElement(By.id("privateCred1_P")).sendKeys(""); WebElement signin =
		 * driver.findElement(By
		 * .xpath("//form[@id='personalForm']//button[@class='btn login-btn'][contains(text(),'Sign In')]"
		 * )); signin.click();
		 */
	}
	

	@Then("^User should see UserName validation error  as \"([^\"]*)\" and Password validation error as \"([^\"]*)\"$")
	public void user_should_see_UserName_validation_error_as_and_Password_validation_error_as (String name1,
			String paswrd1) throws Throwable {
	//	loginpage.getValidatorErrorForUserName();
	//	loginpage.getValidatorErrorForPasswordName();
		/*
		 * String text =
		 * driver.findElement(By.xpath("//span[@id='privateCred1_P-error']")).getText();
		 */
	}

	@Then("^User quit the browser tab$")
	public void user_quit_the_browser_tab() throws Throwable {
		driver.quit();
	}

}
