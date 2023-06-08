class HomePage {

  private titleTopFilms = ':nth-child(1) > .grid-column > .component-title-container > .component-title-container__content'
  private buttonsPreviousTopFilms = '.v-carousel__button--prev'
  private buttonNextTopFilms = '.v-carousel__button--next'
  private titleOffers = ':nth-child(3) > .grid-column > .component-title-container > .component-title-container__content'
  private whoWeAreFooter = '.footer--link_container > :nth-child(1) > ul > :nth-child(1) > a'
  private eventsFooter = ':nth-child(2) > ul > :nth-child(1) > a' 
  private legalAdvice = ':nth-child(3) > ul > :nth-child(1) > a'
  private downloadApps = ':nth-child(4) > ul > :nth-child(1) > a' 

    gettitleTopFilms(){
      return cy.get(this.titleTopFilms);
    }

    getButtonsPreviousTopFilms(){
      return cy.get(this.buttonsPreviousTopFilms);
    }

    getButtonsNextTopFilms(){
      return cy.get(this.buttonNextTopFilms);
    }

    getTitleOffers(){
      return cy.get(this.titleOffers);
    }

    getWhoWeAreFooter(){
      return cy.get(this.whoWeAreFooter);
    }

    getEventsFooter(){
      return cy.get(this.eventsFooter);
    }

    getLegalAdvice(){
      return cy.get(this.legalAdvice);
    }

    getdDownloadApps(){
      return cy.get(this.downloadApps);
    }

    scrollToSeeTopFilms(){
      this.gettitleTopFilms().scrollIntoView().should('be.visible');
    }

    scrollToSeeNextOrPreviuousButtons(){
      this.getButtonsPreviousTopFilms().scrollIntoView().should('be.visible');
      this.getButtonsNextTopFilms().scrollIntoView().should('be.visible');
    }

    scrollToSeeTitleOffers(){
      this.getTitleOffers().scrollIntoView().should('be.visible');
    }

    srollToSeeFooterSection(){
      this.getWhoWeAreFooter().scrollIntoView().should('be.visible');
      this.getEventsFooter().scrollIntoView().should('be.visible');
      this.getLegalAdvice().scrollIntoView().should('be.visible');
      this.getdDownloadApps().scrollIntoView().should('be.visible');
    }

  }
  
  export default HomePage;