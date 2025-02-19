Feature: News Subcription Functionality Checks

  Background:
    Given User should navigate to url
    And User should handle cookies

  @Regression
  Scenario Outline: Verify Subcribe to News of Polestar functionality
    Given User should be on home page
    And Able to see 'Subscribe' button
    And User click on the 'Subscribe' button
    And User should redirect to 'newsletter updates' page
    When User fill all the details like <firstname>, <lastname>, <email> and <postnumber>
    And User should check the checkbox and click on 'Submit' button
    Then User should verify the successful message of subcription as 'Confirm your subscription'

    Examples:
      | firstname | lastname | email           | postnumber |
      | "prudhvi" | "Raj"    | "abc@gmail.com" | "V5M 2A1"  |
      | "Prem"    | "Roi"    | "p@gmail.com"   | "V5M 1Z7"  |
