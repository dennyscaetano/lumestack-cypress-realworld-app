class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            signInButton: "[data-test='signin-submit']",
            wrongCredentialAlert: "[data-test='signin-error']",
            successCredentialAlert: '[data-test="main"]',
            nextButton: '[data-test="user-onboarding-next"]',
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/signin')
    }

    fillFirstLoginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    fillLoginWithRegisteredUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    fillLoginWithInvalidUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

    checkAccessSuccess() {
        cy.get(this.selectorsList().successCredentialAlert)
    }

    checkFirstAccessSuccess() {
        cy.get(this.selectorsList().finishedMessageCreateAccount)
    }
}

export default LoginPage