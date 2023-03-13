import React from 'react'
import { Link } from 'react-router-dom'

const Coupon = (props) => {
  return (
    <div className={`cpn ${props.dts.code_status}`}>
        <div>
            <Link to={`http://localhost:3000/${props.dts.store.sname}`} className="cpnimg"><img src={props.dts.store.simage} alt="" /></Link>
            <Link to={`http://localhost:3000/${props.dts.store.sname}`} className="tleanc"><h3>{props.dts.title}</h3></Link>
            <div className="lftcrcl"></div>
            <div className="rytcrcl"></div>
        </div>
        <div>
            <div className="cdebtn">
                <div className="bck">{props.dts.code}</div>
                <div className="frnt">{props.dts.code_status}</div>
            </div>
            <p>Total Views {props.dts.viewed}</p>
        </div>
    </div>
  )
}

export default Coupon