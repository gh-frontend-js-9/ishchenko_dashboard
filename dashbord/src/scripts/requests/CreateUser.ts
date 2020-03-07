const axios = require('axios')

function CreateUser(email: any, name: any, password: any) {
    let user: object = {
        'email': email,
        'password': password,
        'name': name
    }

    const url: string = 'https://geekhub-frontend-js-9.herokuapp.com/api/users/'

    return axios({
        method: 'post',
        url: url,
        data: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export default CreateUser