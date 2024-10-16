import userData from '../../fixtures/users/user-data.json'
import TransactionHistoryPage from '../../pages/transactionHistoryPage'
import LoginPage from '../../pages/loginPage'

const loginPage = new LoginPage()
const transactionHistoryPage = new TransactionHistoryPage()

describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        loginPage.accessLoginPage()
        loginPage.fillLoginWithRegisteredUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.checkAccessSuccess()
        transactionHistoryPage.checkHistoryShowEveryone()
    })
})