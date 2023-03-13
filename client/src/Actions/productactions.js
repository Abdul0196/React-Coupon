import { PRODUCT_LIST_FAIL,PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_ADD_REQUEST, PRODUCT_ADD_SUCCESS, PRODUCT_ADD_FAIL } from "../Constants/productconstant";

import axios from "axios";

export const addproducts = (data)=>async(dispatch) => {
    try {
        dispatch({type:PRODUCT_ADD_REQUEST})
        await axios.post('http://localhost:5000/api/products/post', data)
        dispatch({
            type:PRODUCT_ADD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:PRODUCT_ADD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const listproducts = ()=>async(dispatch) => {
    try {
        dispatch({type:PRODUCT_LIST_REQUEST})
        const {data} = await axios.get('http://localhost:5000/api/products')
        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
