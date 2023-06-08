class LoginPage {

    private loginModalContainer = '.v-modal__body'
    private mogalLoginTitle = '.sign-in-container > .component-title-container > .component-title-container__content'
    private labelEmail = '.v-input-field > .v-input-wrapper > .v-label > .v-display-text > .v-display-text-part'
    private txtEmail = '#v-member-sign-in-form-field__email-input'
    private labelPass = '.v-password-input > .v-input-wrapper > .v-label > .v-display-text > .v-display-text-part'
    private txtPass = '#v-member-sign-in-form-field__password-input'
    private saveDataLogin = '.v-checkbox-input__button'
    private enterBtn = '.v-form__buttons > .v-button'
    private recoveryLink = '.forgot-password > a'
    private registerLink = '.sign-up-message > :nth-child(1)'
    private createAccountLink = '.sign-up-message > :nth-child(2) > a'
    private badEmailFormat = '#v-member-sign-in-form-field__email-input_help-text > .v-display-text > .v-display-text-part'
    private emptyPass = '#v-member-sign-in-form-field__password-input_help-text > .v-display-text > .v-display-text-part'

      getLoginModal(){
        return cy.get(this.loginModalContainer);
      }

      getModalTitle(){
        return cy.get(this.mogalLoginTitle);
      }

      getLabelEmail(){
        return cy.get(this.labelEmail);
      }

      getTextEmail(){
        return cy.get(this.txtEmail);
      }

      getLabelPass(){
        return cy.get(this.labelPass);
      }

      getTxtPass(){
        return cy.get(this.txtPass);
      }

      getSaveDataLogin(){
        return cy.get(this.saveDataLogin);
      }

      getEnterBtn(){
        return cy.get(this.enterBtn);
      }

      getRecoveryLink(){
        return cy.get(this.recoveryLink);
      }

      getRegisterLink(){
        return cy.get(this.registerLink);
      }

      getCreateAccountLink(){
        return cy.get(this.createAccountLink);
      }

      getBadEmailFormat(){
        cy.wait(1000)
        return cy.get(this.badEmailFormat);
      }

      badEmailShouldAppear(){
        return this.getBadEmailFormat().should('be.visible')
      }

      getEmptyPassMsg(){
        cy.wait(1000)
        return cy.get(this.emptyPass);
      }

      emptyPassMsgShouldAppear(){
        return this.getEmptyPassMsg().should('be.visible')
      }

      waitForLoginModal(timeout : number){
        return cy.get(this.loginModalContainer, { timeout: 5000 }).should('be.visible');
      }
     
}
    
    export default LoginPage;