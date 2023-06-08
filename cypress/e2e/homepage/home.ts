import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/page_objects/home/home_page";
import { AccessToHome } from '../first_access/visit_cinesa';


When("Check top and offers sections", () => {
  new AccessToHome()
  var homePage = new HomePage()
  homePage.scrollToSeeTopFilms()
  cy.wait(1000)
  homePage.scrollToSeeTitleOffers
  cy.wait(1000)
  homePage.scrollToSeeNextOrPreviuousButtons()
  cy.wait(1000)
});

Then("Check footer section", () => {
  var homePage = new HomePage()
  homePage.srollToSeeFooterSection()
});
