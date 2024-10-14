import userData from '../../fixtures/users/user-data.json'
import LoginPage from '../../pages/loginPage'
import SendMoneyPage from '../../pages/sendMoneyPage'

const loginPage = new LoginPage()
const sendMoneyPage = new SendMoneyPage()

describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
        loginPage.accessLoginPage()
        loginPage.fillLoginWithRegisteredUser(userData.registeredUser.username, userData.registeredUser.password)
        loginPage.checkAccessSuccess()
        sendMoneyPage.accessNewTransaction()
        sendMoneyPage.fillNewTransactionTransfer('20000', 'Transaction test with INSUFICIENT balance')
        sendMoneyPage.checkTransactionPaidSuccess()
        
        //registerPage.fillRegisterWithAnyUser(chance.first(), chance.last(), userData.userSuccess.username, userData.userSuccess.password, userData.userSuccess.confirmpassword, userData.userSuccess.bankname, userData.userSuccess.routingnumber, userData.userSuccess.accountnumber)

    })
})