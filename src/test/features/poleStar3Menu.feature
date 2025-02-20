Feature: Access the URL

  Background:
    Given User should access the URL
    And User should accept cookies

  Scenario: Checking TestDrive Option
    Given User clicks on the Polestar3 Menu Option
    And User should Hover on the Test Drive Option 
    Then Then it should redirect to Book your test Drive Screen