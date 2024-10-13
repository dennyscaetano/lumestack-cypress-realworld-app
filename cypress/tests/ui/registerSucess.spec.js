import userData from '../../fixtures/users/user-data.json'
import RegisterPage from '../../pages/registerPage'

const Chance = require('chance');

const chance = new Chance();

const registerPage = new RegisterPage()

describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
        registerPage.accessRegisterPage()
        registerPage.fillRegisterWithAnyUser(chance.first(), chance.last(), userData.userSuccess.username, userData.userSuccess.password, userData.userSuccess.confirmpassword, userData.userSuccess.bankname, userData.userSuccess.routingnumber, userData.userSuccess.accountnumber)

    })
})