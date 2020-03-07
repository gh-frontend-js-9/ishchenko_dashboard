const axios = require('axios')

function EnterUser(email: any, password: any) {
    let user: object = {
        'email': email,
        'password': password
    }

    const url: string = 'https://geekhub-frontend-js-9.herokuapp.com/api/users/login'

    return axios({
        method: 'post',
        url: url,
        data: JSON.stringify(user),
        headers: {
            'Content-Type':'application/json'
        }
    })

}

export default EnterUser