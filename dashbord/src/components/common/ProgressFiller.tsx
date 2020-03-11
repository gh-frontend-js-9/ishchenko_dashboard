import React from "react";
import './../../styles/style.css'

const Filler = (props: any) => {
    return <div className="filler" style={{ width: `${props.percentage.progress}%` }} />
}

export default Filler