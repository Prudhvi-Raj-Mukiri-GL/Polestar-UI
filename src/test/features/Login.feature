Feature: Verify Login Page

  Background:
  Given User should navigate to url
    And User should handle cookies
    And User clicks on the Account Menu


  Scenario: Validation message should display without input details
    Given User is on Account Menu Page
    When User clicks on the Login button
    Then Login should display with the validation Message

  Scenario: Login should fail with incorrect credentials
    Given User enters the email as "test@test.com"
    And User enters the password as "testss"
    When User clicks on the Login button
    Then Login should display with the validation Message 