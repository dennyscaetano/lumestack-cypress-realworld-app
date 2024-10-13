import userData from '../../fixtures/users/user-data.json'
import LoginPage from '../../pages/loginPage'

const loginPage = new LoginPage()

describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {

        loginPage.accessLoginPage()
        loginPage.fillLoginWithInvalidUser(userData.userFail.username, userData.userFail.password)
        loginPage.checkAccessInvalid()
    })
})