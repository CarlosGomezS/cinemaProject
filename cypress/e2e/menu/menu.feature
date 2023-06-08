Feature: Check menu elements at Cinesa Home Page

  Scenario: Check menu options
    When Click in "cinemas" option from menu
    Then Check that we are in "Cines" section
    When Click in "films" option from menu
    Then Check that we are in "Películas" section
    When Click in "promos" option from menu
    Then Check that we are in "Promociones" section
    When Click in "experiences" option from menu
    Then Check that we are in "Experiencias" section
    When Click in "programs" option from menu
    Then Check that we are in "Programas" section


  Scenario: Check global search menu option
    When Click in "search" option from menu
    Then Search container, input, cross, and cancel button should appear
    When We type "La Sirenita" in global search
    Then Results "La Sirenita" related should appear
    
    
   
