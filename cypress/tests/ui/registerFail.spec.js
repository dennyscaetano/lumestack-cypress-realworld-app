
import userData from '../../fixtures/users/user-data.json'
import RegisterPage from '../../pages/registerPage'

const registerPage = new RegisterPage()

describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
        registerPage.accessRegisterPage()
        registerPage.fillRegisterBlankFieldsUser()
        registerPage.checkMessageBlankNameField()
        registerPage.checkMessageBlankLastNameField()
        registerPage.checkMessageBlankUsernameField()
        registerPage.checkMessageBlankPasswordField()
        registerPage.checkMessageBlankConfirmPasswordField()
        registerPage.fillRegisterWithPasswordNotMachFields(userData.userSuccess.firstname, userData.userSuccess.lastname, userData.userSuccess.username, userData.userSuccess.password)
        registerPage.checkMessageNotMachPasswordFields()
    })
})