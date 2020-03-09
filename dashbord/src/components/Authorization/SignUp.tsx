import React , {Component} from "react"
import CreateUser from "../../scripts/requests/CreateUser"
import './../../styles/style.css'
import 'normalize.css'

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

    createUser(event: any) {
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
            <div className={'form'}>
                <div className={'form__container'}>
                    <div className={'form__header'}>
                        <span>Sign Up</span>
                    </div>
                    <input
                        className={'input-field input-field_focused'}
                        type="email"
                        placeholder='Email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        className={'input-field input-field_focused'}

                        type="text"
                        placeholder='Your name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        className={'input-field input-field_focused'}
                        type="password"
                        placeholder='Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button
                        className={'button button_hovered'}
                        onClick={this.createUser}
                    >
                        Sign up
                    </button>
                </div>
            </div>
        )
    }
}

export default SignUp