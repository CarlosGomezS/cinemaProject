Feature: Check login modal elements and some tests

  Scenario: Check login modal
    When Click in login option from menu
    Then Should appear all login modal elements
    When User types bad email text
    Then Bad email text should appear
    When We leave the password empty 
    Then Empty pass msg should appear
    When Click in recovery pass btn
    Then Check that we are in correct page

    
   
