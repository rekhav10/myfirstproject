Feature: Homepage navigation and Login with invalid credentials to amegybank

  @tag
  Scenario: Verify Amegybank homepage navigation
    Given User open  amegybank Url in browser
    Then User should navigate  to amegybank homepage
    Then User should see homepage title as "Personal Accounts | Amegy Bank of Texas"

  Scenario: Verify Top Left and Top Right different menus in Amegybank
    When User should navigate to amegybank homepage1
    Then User should see different top left menu options
      | PERSONAL |
      | BUSINESS |
      | WEALTH   |
    Then User should see different Top Right menu options
      | About Us   |
      | Careers    |
      | Contact Us |
      | Locations  |

  Scenario Outline: Verify Login with Invalid credentials for AmegyBank
    When User clicks on Login Button  on Amegybank Homepage
    Then User should see Login page
    When User performs Login with Username "<username>" and Password as "<password>"
    Then User should see UserName validation error  as "<usernamevalidatorerror>" and Password validation error as "<passwordvalidatorerror>"

    Examples: 
      | username | password | usernamevalidatorerror  | passwordvalidatorerror  |
      | rekha    |          |                         | Please enter a password |
      |          |          | Please enter a Login Id |                         |

  @tag
  Scenario: Finally Quit Amegybank browser
    Then User quit the browser tab
