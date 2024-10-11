class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[data-test='signin-submit']",
            wrongCredentialAlert: "[data-test='signin-error']",
            successCredentialAlert: '[data-test="user-onboarding-dialog-title"]',
            nextButton: '[data-test="user-onboarding-next"]',
            bankNameField: "#bankaccount-bankName-input",
            routingNumberField: "[name='routingNumber']",
            accountNumberField: "[name='accountNumber']",
            saveCreateBankAccountButton: '[data-test="bankaccount-submit"]',
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/signin')
    }

    firstLoginWithAnyUser(username, password, bankname, routingnumber, accountnumber) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().nextButton).click()
        cy.get(this.selectorsList().bankNameField).click({ force: true })
        cy.get(this.selectorsList().bankNameField).type(bankname)
        cy.get(this.selectorsList().routingNumberField).type(routingnumber)
        cy.get(this.selectorsList().accountNumberField).type(accountnumber)
        cy.get(this.selectorsList().saveCreateBankAccountButton).click()

    }

    loginWithAnyUser(username, password) {
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