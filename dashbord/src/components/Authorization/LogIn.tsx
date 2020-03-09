import React, {Component} from "react"
import EnterUser from "../../scripts/requests/EnterUser";
import './../../styles/style.css'
import 'normalize.css'

class LogIn extends Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.enterUser = this.enterUser.bind(this)
    }

    handleChange(event: any){
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    enterUser(e: any){
        e.preventDefault()
        EnterUser(this.state.email, this.state.password)
            .then((response: any)=>{
                console.log('Logged in')
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
                        <span>Log In</span>
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
                        type="password"
                        placeholder='Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button
                        className={'button button_hovered'}
                        onClick={this.enterUser}
                    >
                        Log In
                    </button>
                </div>
            </div>
        )
    }
}

export default LogIn