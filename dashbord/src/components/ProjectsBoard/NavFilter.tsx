import React from "react";

function NavFilter() : any{
    return (
        <div className={'flx-container'}>
            <span className={'mg-s1'}>Show projects:</span>
            <div className={'filter-section'}>
                <span className={'mg-r3'}>All</span>
                <i>+</i>
            </div>
        </div>
    );
}

export default NavFilter