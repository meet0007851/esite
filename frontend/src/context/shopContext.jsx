import React, { createContext, useEffect, useState } from 'react'
import { authDataContext } from './authContext'
import axios from 'axios'
import { useContext } from 'react'
export const shopDataContext = createContext()
function ShopContext({ children }) {
    let [products,setProducts] = useState([])
    let [search,setSearch] =useState('')
    let [showSearch,setShowSearch] =useState(false)
    let {serverUrl} = useContext(authDataContext)
    let currency = "₹"
    let delivery_fee = "40"

        let getProducts = async() =>{
            try{
                let result = await axios.get(serverUrl + "/api/product/list",{withCredentials:true})
                console.log("result.data")
                setProducts(result.data)
        }
        catch(error){
            console.log(error)
        }
        }
        useEffect(()=>{
            getProducts()
        },[] )
    let value={
        products,getProducts,delivery_fee,currency,search,showSearch,setSearch,setShowSearch
    }
    return (

    <div>
        <shopDataContext.Provider value={value}>
    { children } 
        </shopDataContext.Provider>
    </div>
  )
}

export default ShopContext