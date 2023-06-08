import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginModalPage from "../../support/page_objects/modals/login_modal";
import { AccessToHome } from '../first_access/visit_cinesa';
import { clickInMenu} from '../menu/menu';
import { BAD_MAIL, RECOVERY_PASS_TITLE } from '../../constants/constants';


When('Click in login option from menu', () => {
  new AccessToHome();
  new clickInMenu().clickMenuOptions("login")
});

Then("Should appear all login modal elements", () => {
  allLoginElementsShouldAppear()
});

When("User types bad email text", () => {
  typeBadEmail()
});

Then("Bad email text should appear", () => {
  checkBadEmailAdvice()
});

When("We leave the password empty", () => {
  clickOnSaveData()
});

Then("Empty pass msg should appear", () => {
  checkEmptyPass()
});

When("Click in recovery pass btn", () => {
  clickOnRecoveryPassAndCheckCorrectRedirection()
});

When("Check that we are in correct page", () => {
  checkCorrectTitleText(RECOVERY_PASS_TITLE)
});

  function allLoginElementsShouldAppear(){
    loginModalIsDisplayed()
  }

  function loginModalIsDisplayed(){
    var loginModal = new LoginModalPage()
    loginModal.waitForLoginModal(2000)
    loginModal.getLoginModal().should("be.visible")
    loginModal.getModalTitle().should("be.visible")
    loginModal.getLabelEmail().should("be.visible")
    loginModal.getTextEmail().should("be.visible")
    loginModal.getLabelPass().should("be.visible")
    loginModal.getTxtPass().should("be.visible")
    loginModal.getSaveDataLogin().should("be.visible")
    loginModal.getEnterBtn().should("be.visible")
    loginModal.getRecoveryLink().should("be.visible")
    loginModal.getRegisterLink().should("be.visible")
    loginModal.getCreateAccountLink().should("be.visible")
  }

  function typeBadEmail(){
    var loginModal = new LoginModalPage()
    loginModal.getTextEmail().type(BAD_MAIL)
    loginModal.getTxtPass().click()
  }

  function checkBadEmailAdvice(){
    var loginModal = new LoginModalPage()
    loginModal.badEmailShouldAppear()
  }

  function clickOnSaveData(){
    var loginModal = new LoginModalPage()
    loginModal.getSaveDataLogin().click()
  }

  function checkEmptyPass(){
    var loginModal = new LoginModalPage()
    loginModal.emptyPassMsgShouldAppear()
  }

  function clickOnRecoveryPassAndCheckCorrectRedirection(){
    var loginModal = new LoginModalPage()
    loginModal.getRecoveryLink().click()
    cy.get('.component-title-container__content', { timeout: 5000 }).should('be.visible')
  }

  function checkCorrectTitleText(desiredText : String){
    cy.get('.component-title-container__content').invoke('text').then((text) => {
      if(desiredText != text){
        throw new Error('Title '+desiredText+ ' not found.');
      }
    });
  }