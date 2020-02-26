import React from "react";
import NavButtons from "./NavButtons";
import NavFilter from "./NavFilter";
import "./../../styles/style.css";

function NavHeader() : any{
    return (
        <div className={'flx-container nav'}>
            <NavButtons />
            <NavFilter />
        </div>
    );
}

export default NavHeader

