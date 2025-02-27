Feature: Verifying Polestar4Menu

  Background:
  Given User should navigate to url
    And User should handle cookies

  Scenario: Checking Overview Panel
    Given User clicks on the Polestar4 Menu Option
    And User should Hover on the Discover Polestar 4 Option 
    Then Then it should redirect to Polestar4Menu Panel with Polestar4Menu text