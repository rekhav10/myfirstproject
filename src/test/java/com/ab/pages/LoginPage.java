package com.ab.pages;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	WebDriver driver;
	@FindBy(css = "span.main-nav__login-button__label")
	WebElement loginButton;
	
	@FindBy(id = "publicCred1_P")
	WebElement loginid;
	
	@FindBy(id = "privateCred1_P")
	WebElement password;
	
	@FindBy(how = How.XPATH, using = "//form[@id='personalForm']//button[@class='btn login-btn'][contains(text(),'Sign In')]")
	WebElement signin;
	
	@FindBy(how = How.XPATH, using = "//span[@id='privateCred1_P-error']")
	WebElement invalidpassworderrorMessage;
	
	@FindBy(how = How.XPATH, using = "//span[@id='publicCred1_P-error']")
	WebElement invalidusernameerrorMessage;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public void abLoginButton() {
		loginButton.click();
		}
	public void abLogin(String name,String paswrd) {
		loginid.clear();
		loginid.sendKeys(name);
		password.clear();
		password.sendKeys(paswrd);
		signin.click();
	}
	public String getValidatorErrorForUserName() {
		return invalidusernameerrorMessage.getText();
	}
	
	public String getValidatorErrorForPasswordName() {
		return invalidpassworderrorMessage.getText();
	}
	
}