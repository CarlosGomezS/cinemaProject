class CookiesPage {

    public policyText = "#onetrust-policy-text"
    public configureCookiesBtn = "#onetrust-pc-btn-handler"
    public declineCookiesBtn = "#onetrust-reject-all-handler"
    public acceptCookiesBtn = "#onetrust-accept-btn-handler"

    getCookiesHeader(){
      return cy.get(this.policyText)
    }
  
    getConfigureCookiesBtn() {
      return cy.get(this.configureCookiesBtn);
    }

    getDeclineCookiesBtn() {
        return cy.get(this.declineCookiesBtn);
    }
    
    getAcceptCookiesBtn() {
        return cy.get(this.acceptCookiesBtn);
    }

  }
  
  export default CookiesPage;