import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MenuPage from "../../support/page_objects/menu/menu_page";
import { AccessToHome } from '../first_access/visit_cinesa';

When("Check all menu elements", () => {
  new AccessToHome();
  var menuPage = new MenuPage()
  allMenuElementsShouldAppear(menuPage)
});

When('Click in {string} option from menu', (value: string) => {
  new clickInMenu().clickMenuOptions(value)
});


Then("Check that we are in {string} section", (value: string) => {
  checkThatOptionSelectedIsCorrect(value)
});


Then("Search container, input, cross, and cancel button should appear", (value: string) => {
  checkSearchElements()
});

When('We type {string} in global search', (value: string) => {
  typeInSearchInput(value)
});


Then("Results {string} related should appear", (value: string) => {
  firstResultShouldBeTypedText(value)
});

function checkSearchElements(){
  var menuPage = new MenuPage()
  menuPage.getSearchContainer().should("be.visible")
  menuPage.getSearchInput().should("be.visible")
  menuPage.getSearchCross().should("be.visible")
  menuPage.getSearchButton().should("be.visible")
  menuPage.getCancelSearchInput().should("be.visible")
}


  function allMenuElementsShouldAppear(menuPage : MenuPage){
    menuPage.getLogoImg().should("be.visible")
    menuPage.getCinemasMenuOption().should("be.visible")
    menuPage.getFilmsMenuOption().should("be.visible")
    menuPage.getPromosMenuOption().should("be.visible")
    menuPage.getExperiencessMenuOption().should("be.visible")
    menuPage.getProgramsMenuOption().should("be.visible")
  }

  function typeInSearchInput(value : string){
    var menuPage = new MenuPage()
    menuPage.getSearchInput().type(value)
    cy.wait(2000)
  }

  function firstResultShouldBeTypedText(value : string){
    cy.get('[data-id="0"] > a').should('be.visible')
    cy.get('[data-id="0"] > a').invoke('text').then((text) => {
      if(value.toLocaleLowerCase() != text.toLocaleLowerCase()){
        throw Error("Results don't mach")
      }
    });
  }


  export class clickInMenu {
    public clickMenuOptions(option : String): void {
      var menuOptions = new MenuPage()
    switch(option){
      case "cinemas" : {
        menuOptions.getCinemasMenuOption().click()
        break
      }
      case "films" : {
        menuOptions.getFilmsMenuOption().click()
        break
      }
        case "promos" : {
          menuOptions.getPromosMenuOption().click()
          break
        }
        case "experiences" : {
          menuOptions.getExperiencessMenuOption().click()
          break
        }
        case "programs" : {
          menuOptions.getProgramsMenuOption().click()
          break
        }
        case "login" : {
          menuOptions.getLoginButton().click()
          break
        }
        case "search" : {
          menuOptions.getSearchButton().click()
          break
        }
        default : {
          menuOptions.getCinemasMenuOption().click()
          break
        }
    }
    }
  }


  function checkThatOptionSelectedIsCorrect(option : String){
    var menuOptions = new MenuPage()
    menuOptions.getSelectedOption().invoke('text').then((text) => {
      if(option != text){
        throw new Error('Bad selected option');
      }
    });
  }
   
    
