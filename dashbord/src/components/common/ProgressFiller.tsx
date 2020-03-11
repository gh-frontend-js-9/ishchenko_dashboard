import React from "react";
import './../../styles/style.css'

function Filler(props: any) {
    return <div className="filler" style={{ width: `${props.percentage.progress}%` }} />
}

export default Filler