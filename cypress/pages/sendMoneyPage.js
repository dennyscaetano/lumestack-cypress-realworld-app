class SendMoneyPage {
    selectorsList() {
        const selectors = {
            itemContactUserOption: "[data-test='user-list-item-uBmeaz5pX']",
            amountField: "[name='amount']",
            descriptionField: "[data-test='transaction-create-description-input']",
            payButton: "[data-test='transaction-create-submit-payment']",
            requestButton: "[data-test='transaction-create-submit-request']",
            successPaidMessage: "[data-test='main']",
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
        cy.get(this.selectorsList().successPaidMessage).should('contain', 'Paid')

    }

    checkTransactionPaidSuccess() {
        cy.get(this.selectorsList().successPaidMessage)
    }

}

export default SendMoneyPage