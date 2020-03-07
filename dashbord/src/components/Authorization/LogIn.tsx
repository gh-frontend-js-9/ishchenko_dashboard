import React, {Component} from "react"
import EnterUser from "../../scripts/requests/EnterUser";

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
            <div>
                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    value={this.state.email}
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
                        For future validation
                        */}
                    </div>
                    <div>
                        <button onClick={this.enterUser}>
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogIn