import React , {Component} from "react"
import CreateUser from "../../scripts/requests/CreateUser"


class SignUp extends Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            email: '',
            name: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.createUser = this.createUser.bind(this)
    }

    handleChange(event: any){
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    createUser(event: any): any {
        event.preventDefault()
        CreateUser(this.state.email, this.state.name, this.state.password)
            .then((response: any) => {
                console.log('Ok, boomer')
            })
        this.setState({
            email: '',
            name: '',
            password: ''
        })
    }

    render(){
        return(
            <form>
                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    placeholder='Your name'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    type="password"
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <div>
                    <div>
                        {/*
                        Field for future validation
                        */}
                    </div>
                    <button onClick={this.createUser}>
                        Sign up
                    </button>
                </div>
            </form>
        )
    }
}

export default SignUp