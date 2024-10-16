class TransactionHistoryPage {
    selectorsList() {
        const selectors = {
            everyoneTab: "[data-test='nav-public-tab']",
            personalTab: "[data-test='nav-personal-tab']",
            showHistoryTransaction: ".TransactionList-paper",
            emptyHistoryTransaction: "[data-test='empty-list-header']",
        }
        return selectors
    }

    accessPersonalTab() {
        cy.visit('/personal')
    }
    accessEveryoneTab() {
        cy.visit('/')
    }

    checkHistoryShowEveryone() {
        cy.get(this.selectorsList().showHistoryTransaction).should('be.visible')
    }
    checkHistoryShowEmpty() {
        cy.get(this.selectorsList().emptyHistoryTransaction).should('contain', 'No Transactions')
    }
}
export default TransactionHistoryPage