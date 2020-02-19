package com.ab.pages;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
WebDriver driver;
	
	@FindBy(css = "img.logo")
    private WebElement amegybankHpLogo ;
	
	@FindBy(css = "ul.secondary-nav__user-segment li a")
	List<WebElement>  topLeftSideHpMenuOption;
	
	@FindBy(css = "ul.secondary-nav__misc-links li a")
	List<WebElement> topRightSideHpMenuOption;
	
	public HomePage(WebDriver driver) {
		this.driver= driver;
		PageFactory.initElements(driver, this);
	}
	public boolean usernavigatedHp() {
	boolean logoDisplayed = amegybankHpLogo.isDisplayed();
		return logoDisplayed;
	}
	public String getpageTitle() {
		return driver.getTitle();
	}
	public List<String> getTopLeftHpNavigationOption (){
		List<String> leftOptions = new ArrayList<String>();
		for (int i=0; i<topLeftSideHpMenuOption.size();i++) {
			leftOptions.add(topLeftSideHpMenuOption.get(i).getText());
		}
		return leftOptions;
	}
	
	public List<String> getTopRightHpNavigationOption(){
		List<String> rightOptions = new ArrayList<String>();
		for (WebElement option : topRightSideHpMenuOption) {
		   rightOptions.add(option.getText());
		   System.out.println(" The getText : "+option.getText());
		}
		return rightOptions;
	}
}
