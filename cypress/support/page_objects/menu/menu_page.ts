class MenuPage {

  private cinemasMenuOption = '.header-nav > :nth-child(1) > a'
  private filmsMenuOption = '.header-nav > :nth-child(2) > a'
  private promosMenuOption = '.header-nav > :nth-child(3) > a'
  private experiencessMenuOption = '.header-nav > :nth-child(4) > a'
  private programsMenuOption  = '.header-nav > :nth-child(5) > a'
  private logoImg = '.header > .logo > a > .logo-image'
  private selectedOption = '.selected'
  private logInButton = '.header-sign-in > span'
  private registerButton = '.header-sign-up > span'
  private searchContainer = '  .auto-complete_list'
  private searchBtn = '.banner-icon'
  private searchInput = '.auto-complete'
  private searchCross = '.svg__icon'
  private cancelSearchInput = '.cancel-search-input'

    getCinemasMenuOption(){
      return cy.get(this.cinemasMenuOption);
    }

    getFilmsMenuOption(){
      return cy.get(this.filmsMenuOption);
    }

    getPromosMenuOption(){
      return cy.get(this.promosMenuOption);
    }

    getExperiencessMenuOption(){
      return cy.get(this.experiencessMenuOption);
    }

    getProgramsMenuOption(){
      return cy.get(this.programsMenuOption);
    }

    getSelectedOption(){
      return cy.get(this.selectedOption);
    }

     getLogoImg(){
      return cy.get(this.logoImg)
    }

    getLoginButton(){
      return cy.get(this.logInButton)
    }

    getRegisterButton(){
      return cy.get(this.registerButton)
    }

    getSearchContainer(){
      return cy.get(this.searchContainer)
    }

    getSearchButton(){
      return cy.get(this.searchBtn)
    }

    getSearchInput(){
      return cy.get(this.searchInput)
    }

    getSearchCross(){
      return cy.get(this.searchCross)
    }

    getCancelSearchInput(){
      return cy.get(this.cancelSearchInput)
    }

  }
  
  export default MenuPage;