import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { listproducts } from '../Actions/productactions'
import '../Assets/sass/pages/store.scss'
import BreadCrumb from '../Components/BreadCrumb'
import Coupon from '../Components/Coupon'
import Widgets from '../Components/Widgets'


const Store = () => {
    
    const {stname} = useParams()

    const dispatch = useDispatch()

    const [stre,setstre] = useState([])
    useEffect(()=>{
        async function getstore(){
            await axios.get(`http://localhost:5000/api/stores/getone/${stname.toLowerCase()}`).then((res)=>{setstre(res.data)})
            console.log("getstore",stre)
        }
        getstore()
      dispatch(listproducts())
    },[])

    const productlist = useSelector((state)=> state.PRODUCTLIST)
    const {products,loading,error} = productlist

  return (
    <main>
        {loading ? <img src="./images/loader.gif" alt="loading" className='loader'/>:<div className="container">
            <div className="stlebx d-flex">
                <img src="http://localhost:3000/images/4.jpg" alt="" />
                <div className="cntst">
                    <BreadCrumb item1="Categories" item2={stre.category} item3={stre.sname}/>
                    <h1>{stre.sname}</h1>
                    <p>{stre.desc}</p>
                    <div className="rating">
                        <span className='icon-circle-right'></span>
                        <span className='icon-circle-right'></span>
                        <span className='icon-circle-right'></span>
                        <span className='icon-circle-right'></span>
                        <span className='icon-circle-right'></span>
                    </div>
                </div>
            </div>
            <div className="cpnsbx d-flex">
                <div className="lftstr d-flex">
                {
                    loading ? <img src='./images/loader.gif' alt='loading' className='loader'/> : products.map((dts,index)=>{if(dts.store.sname.toLowerCase() == stname.toLowerCase()){return(<Coupon dts={dts} key={index}/>)}})
                }
                </div>
                <Widgets/>
            </div>
        </div>}
    </main>
  )
}

export default Store