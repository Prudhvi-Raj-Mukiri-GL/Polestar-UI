Feature: Home Page Functionality Checks

  Background:
    Given User should navigate to url
    And User should handle cookies

  Scenario: Verify page title by clicking 'Learn more' button
    Given User should be on home page
    And Able to see 'Learn more' button
    When User click on the 'Learn more' button
    Then User should redirect to 'Learn more' page

  Scenario: Verify page title by clicking 'Available cars' button
    Given User should be on home page
    And Able to see 'Available cars' button
    When User click on the 'Available cars' button
    Then User should redirect to 'Available cars' page
