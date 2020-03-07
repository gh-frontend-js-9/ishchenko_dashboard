import React from "react";
import Input from "../common/Input";

class ResetPassword extends React.Component<any, any>{

    render(){
        return(
            <div>
                <Input type={'email'} placeholder={'Email'} />
                <Input type={'password'} placeholder={'New password'} />
                <Input type={'password'} placeholder ={'Confirm password'} />
                <div>
                    <button>
                        Reset
                    </button>
                </div>
            </div>
        )
    }
}