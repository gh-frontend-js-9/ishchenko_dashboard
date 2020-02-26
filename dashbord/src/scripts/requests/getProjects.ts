const axios = require('axios')

async function getAllProjects(): Promise<any>{
    const url: string = 'https://geekhub-frontend-js-9.herokuapp.com/api/projects/'

    return await axios.get(url,{
        headers: {
            'x-access-token': null
        }
    })

}


export default getAllProjects