import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addproducts } from '../Actions/productactions'
import axios from 'axios'
import '../Assets/sass/pages/adddata.scss'

const Adddata = () => {

    const [id,setid] = useState(0)
    const [title,settitle] = useState("")
    const [code,setcode] = useState("")
    const [sname,setsname] = useState("")
    const [sid,setsid] = useState(0)
    const [simage,setsimage] = useState("")
    const [slug,setslug] = useState("")
    const [viewed,setviewed] = useState(0)
    const [code_status,setcode_status] = useState("")
    const [category,setcategory] = useState("")


    const dispatch = useDispatch()
    const savedata = () => {
        let data = {
            id: id,
            title: title,
            code:code,
            store:sname,
            slug:slug,
            viewed:viewed,
            code_status:code_status,
        }
        dispatch(addproducts(data))
    }

    const productadd = useSelector((state)=>state.PRODUCTADD)
    const {loading,success,error}=productadd
    const [stores,setstores]=useState([])
    useEffect(()=>{
        setid("")
        settitle("")
        setcode("")
        setsname("")
        setslug("")
        setviewed("")
        setcode_status("")
        async function getstores(){
            console.log("called")
            const {data} = await axios.get("http://localhost:5000/api/stores")   
            setstores(data)
        }
        getstores()
    },[success])
    
  return (
    <main>
        <div className='container addata'>
            <div className="d-flex">
                <h2>Add Data</h2>
                <button className='adstr' onClick={()=>{window.location.href="http://localhost:3000/admin/store"}}>Add Store</button>
            </div>
            {loading ? "" : success ? <div className='success'>Coupon Added Successfully</div> : error && <div className='error'>Error Occured</div>}
            <input type="number" placeholder='id' onChange={(e)=>{setid(e.target.value)}} value={id}/>
            <input type="text" placeholder='title' onChange={(e)=>{settitle(e.target.value)}} value={title} required />
            <input type="text" placeholder='code' onChange={(e)=>{setcode(e.target.value)}} value={code} required />
            <select placeholder='store name' id="" onChange={(e)=>{setsname(e.target.value)}} value={sname} required>
                <option value="">Select Store</option>
                {stores.map((strs,index)=>{return(<option key={index} value={`${strs._id}`}>{strs.sname}</option>)})}
            </select>
            <input type="text" placeholder='slug' onChange={(e)=>{setslug(e.target.value)}} value={slug} required/>
            <input type="number" placeholder='viewed' onChange={(e)=>{setviewed(e.target.value)}} value={viewed} required/>
            <input type="text" placeholder='code_status' onChange={(e)=>{setcode_status(e.target.value)}} value={code_status} required/>
            <button onClick={savedata}>Save</button>
        </div>
    </main>
  )
}

export default Adddata