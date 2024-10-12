import userData from '../../fixtures/users/user-data.json'
import RegisterPage from '../../pages/registerPage'
import LoginPage from '../../pages/loginPage'

const Chance = require('chance');

const chance = new Chance();

const registerPage = new RegisterPage()
const loginPage = new LoginPage()

describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
        registerPage.accessRegisterPage()
        registerPage.fillRegisterWithAnyUser(userData.userSuccess.firstname, userData.userSuccess.lastname, userData.userSuccess.username, userData.userSuccess.password, userData.userSuccess.confirmpassword)
        loginPage.fillFirstLoginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password, userData.userSuccess.bankname, userData.userSuccess.routingnumber, userData.userSuccess.accountnumber)

    })
})