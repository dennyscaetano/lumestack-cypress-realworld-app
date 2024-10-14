import userData from '../../fixtures/users/user-data.json'
import LoginPage from '../../pages/loginPage'

const loginPage = new LoginPage()
describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {

        loginPage.accessLoginPage()
        loginPage.fillLoginWithRegisteredUser(userData.registeredUser.username, userData.registeredUser.password)
        loginPage.checkAccessSuccess()

    })
})