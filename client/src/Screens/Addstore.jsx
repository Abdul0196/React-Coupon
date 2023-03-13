import React, { useState } from 'react'
import axios from 'axios'
import '../Assets/sass/pages/adddata.scss'

const Addstore = () => {
    const [sid,setsid]=useState(0)
    const [sname,setsname]=useState("")
    const [simage,setsimage]=useState("")
    const [desc,setdesc]=useState("")
    const [category,setcategory]=useState("")
    const [success,setsuccess]=useState(false)
    const [error,seterror]=useState(false)

    const savedata = () => {
        let data = {
            sid: sid,
            sname:sname.toLowerCase(),
            simage:simage,
            desc:desc,
            category:category,
        }
        axios.post("http://localhost:5000/api/stores/savestore", data).then(
            (res)=>{
                if(res.data){
                    setsuccess(true)
                    setsid(0)
                    setsname("")
                    setsimage("")
                    setdesc("")
                    setcategory("")
                    setTimeout(() => {
                        setsuccess(false)
                    }, 2000);
                }
                else{
                    seterror(true)
                    setTimeout(() => {
                        seterror(false)
                    }, 2000);
                }
            })
    }

  return (
    <main>
        <div className='container addata'>
            <div className="d-flex">
                <h2>Add Store</h2>
                <button className='adstr' onClick={()=>{window.location.href="http://localhost:3000/admin"}}>Add Data</button>
            </div>
            {success ? <div className='success'>Store Added Successfully</div> : error && <div className='error'>Error Occured</div>}
            <input type="number" placeholder='Store ID' onChange={(e)=>{setsid(e.target.value)}} value={sid}/>
            <input type="text" placeholder='Store Name' onChange={(e)=>{setsname(e.target.value)}} value={sname} required />
            <input type="text" placeholder='Store Image URL' onChange={(e)=>{setsimage(e.target.value)}} value={simage} required />
            <input type="text" placeholder='description' onChange={(e)=>{setdesc(e.target.value)}} value={desc} required/>
            <select placeholder='Category' id="" onChange={(e)=>{setcategory(e.target.value)}} value={category} required>
                <option value="">Select Category</option>
                <option value="Health & Beauty">Health & Beauty</option>
                <option value="Automotive">Automotive</option>
                <option value="Education">Education</option>
                <option value="Computer">Computer</option>
                <option value="Clothing & Accessories">Clothing & Accessories</option>
                <option value="Photography">Photography</option>
                <option value="Pets">Pets</option>
                <option value="Electronics">Electronics</option>
                <option value="Travel">Travel</option>
            </select>
            <button onClick={savedata}>Save</button>
        </div>
    </main>
  )
}

export default Addstore