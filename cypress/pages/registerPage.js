class RegisterPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField:"[name='confirmPassword']",
            signUpButton: "[data-test='signup-submit']",
            
        }

        return selectors
    }

    accessRegisterPage() {
        cy.visit('/signup')
    }

    fillRegisterWithAnyUser(firstname, lastname, username, password, confirmpassword) {
        cy.get(this.selectorsList().firstNameField).type(firstname)
        cy.get(this.selectorsList().lastNameField).type(lastname)
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmpassword)
        cy.get(this.selectorsList().signUpButton).click()
    }
    //cy.location('pathname').should('equal', '/signin') // Validação direcionamento para o login após registrar o usuário com sucesso

}

export default RegisterPage