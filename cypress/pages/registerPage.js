class RegisterPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            firstNameAlert: "#firstName-helper-text",
            lastNameField: "[name='lastName']",
            lastNameAlert: "#lastName-helper-text",
            usernameField: "[name='username']",
            usernameAlert: "#username-helper-text",
            passwordField: "[name='password']",
            passwordAlert: "#password-helper-text",
            confirmPasswordField: "[name='confirmPassword']",
            confirmPasswordAlert: "#confirmPassword-helper-text",
            signUpButton: "[data-test='signup-submit']",
            signInButton: "[data-test='signin-submit']",
            nextPopUpButton: '[data-test="user-onboarding-next"]',
            bankNameField: "#bankaccount-bankName-input",
            routingNumberField: "[name='routingNumber']",
            accountNumberField: "[name='accountNumber']",
            saveCreateBankAccountButton: '[data-test="bankaccount-submit"]',
            finishedMessageCreateAccount: '[data-test="user-onboarding-dialog-title"]',

        }

        return selectors
    }

    accessRegisterPage() {
        cy.visit('/signup')
    }

    fillRegisterWithAnyUser(firstname, lastname, username, password, confirmpassword, bankname, routingnumber, accountnumber) {
        cy.get(this.selectorsList().firstNameField).type(firstname)
        cy.get(this.selectorsList().lastNameField).type(lastname)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmpassword)
        cy.get(this.selectorsList().signUpButton).click()
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
        cy.get(this.selectorsList().nextPopUpButton).click()
        cy.get(this.selectorsList().bankNameField).type(bankname)
        cy.get(this.selectorsList().routingNumberField).type(routingnumber)
        cy.get(this.selectorsList().accountNumberField).type(accountnumber)
        cy.get(this.selectorsList().saveCreateBankAccountButton).click()
        cy.get(this.selectorsList().finishedMessageCreateAccount)
        cy.get(this.selectorsList().nextPopUpButton).click()

    }

    fillRegisterBlankFieldsUser() {
        cy.get(this.selectorsList().firstNameField).click()
        cy.get(this.selectorsList().lastNameField).click()
        cy.get(this.selectorsList().usernameField).click()
        cy.get(this.selectorsList().passwordField).click()
        cy.get(this.selectorsList().confirmPasswordField).click()
        cy.get(this.selectorsList().passwordField).click()
    }

    fillRegisterWithPasswordNotMachFields(firstname, lastname, username, password) {
        cy.get(this.selectorsList().firstNameField).type(firstname)
        cy.get(this.selectorsList().lastNameField).type(lastname)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type('Diferent')
    }

    checkMessageBlankNameField() {
        cy.get(this.selectorsList().firstNameAlert)
        cy.get('body').should('contain', 'First Name is required')
    }

    checkMessageBlankLastNameField() {
        cy.get(this.selectorsList().lastNameAlert)
        cy.get('body').should('contain', 'Last Name is required')
    }

    checkMessageBlankUsernameField() {
        cy.get(this.selectorsList().usernameAlert)
        cy.get('body').should('contain', 'Username is required')
    }

    checkMessageBlankPasswordField() {
        cy.get(this.selectorsList().passwordAlert)
        cy.get('body').should('contain', 'Enter your password')
    }

    checkMessageBlankConfirmPasswordField() {
        cy.get(this.selectorsList().confirmPasswordAlert)
        cy.get('body').should('contain', 'Confirm your password')
    }

    checkMessageNotMachPasswordFields() {
        cy.get(this.selectorsList().confirmPasswordAlert)
        cy.get('body').should('contain', 'Password does not match')
    }
}

export default RegisterPage