const axios = require('axios')

function ResetUserPassword(password: any, confirmPassword: any, email: any) {
    let user: object = {
        'password': password,
        'confirmationPassword': confirmPassword,
        'email': email
    }

    const url: string = 'https://geekhub-frontend-js-9.herokuapp.com/api/users/reset_password'

    return axios({
        method: 'post',
        url: url,
        data: JSON.stringify(user),
        headers: {
            'Content-Type':'application/json'
        }
    })
}

export default ResetUserPassword