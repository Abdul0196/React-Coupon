import React, { useEffect, useState } from 'react'

// const cpnselection = (e) =>{
//     console.log("clicked");
//     document.querySelectorAll(".wdgt label").forEach(removecls)
//     function removecls(lbl){
//         lbl.classList.remove("added")
//         console.log(lbl)
//     }
//     e.currentTarget.classList.add("added")
// }

const Widgets = () => {
const [flt,setflt]=useState("all")
useEffect(()=>{
    let cp=document.querySelectorAll(".cpn")
    cp.forEach(dispall)
    if(flt == "code"){
        let b=document.querySelectorAll(".cpn:not(.code)")
        b.forEach(rmvecls)
    }
    if(flt == "deal"){
        let b=document.querySelectorAll(".cpn:not(.deal)")
        b.forEach(rmvecls)
    }
},[flt])
function rmvecls(e){
    e.style.display="none"
}
function dispall(e){
    e.style.display="inline-block"
}
return (
    <div className='wdgts'>
        <div className="wdgt">
            <h2>Filter By</h2>
            <label htmlFor="all" onClick={(e)=>{setflt("all")}}>
                <input type="checkbox" id='all' checked={flt == "all"} readOnly/>
                All
            </label>
            <label htmlFor="deal" onClick={(e)=>{setflt("deal")}}>
                <input type="checkbox" id='deal' checked={flt == "deal"} readOnly/>
                Deals
            </label>
            <label htmlFor="code" onClick={(e)=>{setflt("code")}}>
                <input type="checkbox" id='code' checked={flt == "code"} readOnly />
                Codes
            </label>
        </div>
        <div className="wdgt d-flex">
            <h2>Related Stores</h2>
            <a href="">Adidas</a>
            <a href="">Boden</a>
            <a href="">BellaBox</a>
            <a href="">Groupon</a>
            <a href="">Avenue</a>
            <a href="">Prius</a>
            <a href="">Red</a>
            <a href="">Very</a>
            <a href="">Preston</a>
            <a href="">Adidas</a>
            <a href="">Boden</a>
            <a href="">BellaBox</a>
            <a href="">Groupon</a>
            <a href="">Avenue</a>
            <a href="">Prius</a>
            <a href="">Red</a>
            <a href="">Very</a>
            <a href="">Preston</a>
        </div>
        <div className="wdgt d-flex">
            <h2>Related Categories</h2>
            <a href="">Adidas</a>
            <a href="">Boden</a>
            <a href="">BellaBox</a>
            <a href="">Groupon</a>
            <a href="">Avenue</a>
            <a href="">Prius</a>
            <a href="">Red</a>
            <a href="">Very</a>
            <a href="">Preston</a>
            <a href="">Adidas</a>
            <a href="">Boden</a>
            <a href="">BellaBox</a>
            <a href="">Groupon</a>
            <a href="">Avenue</a>
            <a href="">Prius</a>
            <a href="">Red</a>
            <a href="">Very</a>
            <a href="">Preston</a>
        </div>
    </div>
  )
}

export default Widgets