import userData from '../../fixtures/users/user-data.json'
import TransactionHistoryPage from '../../pages/transactionHistoryPage'
import LoginPage from '../../pages/loginPage'

const loginPage = new LoginPage()
const transactionHistoryPage = new TransactionHistoryPage()

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        loginPage.accessLoginPage()
        loginPage.fillLoginWithRegisteredUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.checkAccessSuccess()
        transactionHistoryPage.accessPersonalTab()
        transactionHistoryPage.checkHistoryShowEmpty()
    })
})