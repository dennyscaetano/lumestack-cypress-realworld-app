class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[data-test='signin-submit']",
            wrongCredentialAlert: "[data-test='signin-error']",
            successCredentialAlert: '[data-test="user-onboarding-next"]',
            nextButton: '[data-test="user-onboarding-next"]',
            bankNameField: "#bankaccount-bankName-input",
            routingNumberField: "[name='routingNumber']",
            accountNumberField: "[name='accountNumber']",
            saveCreateBankAccountButton: '[data-test="bankaccount-submit"]',
            finishedMessageCreateAccount: '[data-test="user-onboarding-dialog-title"]',
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/signin')
    }

    fillFirstLoginWithAnyUser(username, password, bankName, routingNumber, accountNumber) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().nextButton).click()
        cy.get(this.selectorsList().bankNameField).type(bankName)
        cy.get(this.selectorsList().routingNumberField).type(routingNumber)
        cy.get(this.selectorsList().accountNumberField).type(accountNumber)
        cy.get(this.selectorsList().saveCreateBankAccountButton).click()
        cy.get(this.selectorsList().finishedMessageCreateAccount)
        cy.get(this.selectorsList().successCredentialAlert).click()
    }

    fillLoginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().nextButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

    checkAccessSuccess() {
        cy.get(this.selectorsList().successCredentialAlert)
    }
}

export default LoginPage