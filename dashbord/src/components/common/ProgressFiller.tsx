import React from "react";
import './../../styles/style.css'

const Filler = (props: any) => {
    {console.log(props.project)}
    return <div className="filler" style={{ width: `${props.progress}%` }} />
}

export default Filler