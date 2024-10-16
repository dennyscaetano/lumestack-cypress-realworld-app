import userData from '../../fixtures/users/user-data.json'
import LoginPage from '../../pages/loginPage'
import SendMoneyPage from '../../pages/sendMoneyPage'

const loginPage = new LoginPage()
const sendMoneyPage = new SendMoneyPage()

describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
        loginPage.accessLoginPage()
        loginPage.fillLoginWithRegisteredUser(userData.registeredUser.username, userData.registeredUser.password)
        loginPage.checkAccessSuccess()
        sendMoneyPage.accessNewTransaction()
        sendMoneyPage.fillNewTransactionTransfer('3', 'Transaction test with SUFICIENT balance')
        sendMoneyPage.checkTransactionPaidSuccess()
    })
})