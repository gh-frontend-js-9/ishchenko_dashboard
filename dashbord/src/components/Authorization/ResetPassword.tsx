import React from "react";
import ResetUserPassword from "../../scripts/requests/resetUserPassword";
import './../../styles/style.css'
import 'normalize.css'


class ResetPassword extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            password: '',
            confirmPassword: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event: any){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    resetUserPassword(event: any): any{
        event.preventDefault()
        ResetUserPassword(this.state.password, this.state.confirmPassword, this.state.email)
            .then((response: any)=>{
                console.log('ok, zoomer')
            })
        this.setState({
            password: '',
            confirmPassword: '',
            email: ''
        })
    }

    render(){
        return(
            <div className={'form'}>
                <div className={'form__container'}>
                    <div className={'form__header'}>
                        <span>Reset password</span>
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
                    <input
                        className={'input-field input-field_focused'}
                        type="password"
                        placeholder='Confirm password'
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                    />
                    <button className={'button button_hovered'}
                            onClick={this.resetUserPassword}
                    >
                        Reset
                    </button>
                </div>
            </div>
        )
    }
}

export default ResetPassword