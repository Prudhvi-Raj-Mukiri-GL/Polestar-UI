Feature: Verifying Polestar3Menu

  Background:
  Given User should navigate to url
    And User should handle cookies

  Scenario: Checking TestDrive Option
    Given User clicks on the Polestar3 Menu Option
    And User should Hover on the Test Drive Option 
    Then Then it should redirect to Book your test Drive Screen