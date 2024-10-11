
import userData from '../../fixtures/users/user-data.json'
import LoginPage from '../../pages/loginPage'

const loginPage = new LoginPage()
describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {

        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password, userData.userSuccess.bankname, userData.userSuccess.routingnumber, userData.userSuccess.accountnumber)
        //loginPage.checkAccessSuccess()

    })
})