class SendMoneyPage {
    selectorsList() {
        const selectors = {
            itemContactUserOption: "[data-test='user-list-item-uBmeaz5pX']",
            amountField: "[name='amount']",
            descriptionField: "[data-test='transaction-create-description-input']",
            payButton: "[data-test='transaction-create-submit-payment']",
            requestButton: "[data-test='transaction-create-submit-request']",
            successPaidMessage: "[data-test='main']",
            failPaidMessage: "[data-test='main']",
        }
        return selectors
    }

    accessNewTransaction() {
        cy.visit('/transaction/new')
    }

    fillNewTransactionTransfer(amount, description) {
        cy.get(this.selectorsList().itemContactUserOption).click({ force: true })
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().descriptionField).type(description)
        cy.get(this.selectorsList().payButton).click()
    }

    checkTransactionPaidSuccess() {
        cy.get(this.selectorsList().successPaidMessage).should('contain', 'Paid')
    }

    checkTransactionPaidFail() {
        cy.get(this.selectorsList().failPaidMessage).should('contain', 'Not Paid') // Provável mensagem que deverá ser apresentada após correção
    }
}
export default SendMoneyPage