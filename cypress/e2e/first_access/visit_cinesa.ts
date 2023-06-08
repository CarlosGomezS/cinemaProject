import { Given, Before } from "@badeball/cypress-cucumber-preprocessor";
import CookiesPage from "../../support/page_objects/cookies/cookies_page";
import { BASE_URL} from '../../constants/constants';

Before(() => {
  beforeEachScenario()
});

Given("I visit the homepage", () => {
  beforeEachScenario()
});

function beforeEachScenario() {
  var cookiesPage = new CookiesPage()
  visitWebsite(BASE_URL)
  waitForCookiesElementsVisible(cookiesPage, 2000)
  acceptCookies(cookiesPage)
  cy.wait(1000)
}

function visitWebsite(url: string) {
  cy.visit(url);
}

  function waitForCookiesElementsVisible(cookiesPage : CookiesPage,  timeout: number){
    cy.get(cookiesPage.policyText, { timeout }).then(($element) => {
      cookiesPage.getCookiesHeader().should("be.visible")
      cookiesPage.getAcceptCookiesBtn().should("be.visible")
      cookiesPage.getDeclineCookiesBtn().should("be.visible")
      cookiesPage.getConfigureCookiesBtn().should("be.visible")
    });
  }

  function acceptCookies(cookiesPage : CookiesPage){
    cookiesPage.getAcceptCookiesBtn().click()
  }

export class AccessToHome {
  public accessWebsite(): void {
    beforeEachScenario()
  }
}

