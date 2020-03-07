import React from "react"
import './../../styles/style.css'
import Button from "../common/Button";

function NavButtons(): any {
    return (
        <div className={'flx-container'}>
            <Button text={'All projects'}/>
            <Button text={'Workplace'}/>
        </div>
    )
}

export default NavButtons