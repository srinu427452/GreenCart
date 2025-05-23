import { createContext, useContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContectProvider=({children})=>{

    const currency = import.meta.VITE_CURRENCY;

    const navigate =useNavigate();
    const [user, setUser]=useState(null) 
    const [isSeller, setIsSeller]=useState(false)
    const [ishowUserLogin, setShowUserLogin]=useState(false)
    const [products, setProducts]=useState([])

    const [cartItems, setCartItems]=useState({})

    //Fetch All Products
    const fetchProducts=async ()=>{
        setProducts(dummyProducts)
    }

    //Add Products to cart 
    const addToCart=(itemId)=>{
        let cartData=structuredClone(cartItems);

        if(cartData[itemId]){
            cartData[itemId] +=1;
        }else{
            cartData[itemId]=1
        }
        setCartItems(cartData);
        toast.success("Added to Cart")
    }

    //Update Cart  Items Quantytity
    const updateCartItem=(itemId,quantity)=>{
        let cartData=structuredClone(cartItems);
        cartData[itemId]=quantity;
        setCartItems(cartData)
        toast.success("Cart Updated")
    }

    // Remove Products from Cart
    const removeFormCart=(itemId)=>{
        let cartData=structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] -=1;
            if(cartData[itemId]===0){
                delete cartData[itemId];
            }
        }
        toast.success("Removed From Cart")
        setCartItems(cartData)
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    const value={navigate,user,setIsSeller,setUser,isSeller,
        ishowUserLogin,setShowUserLogin,products,currency,addToCart,updateCartItem,removeFormCart,cartItems
    }
    
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
 
export const useAppContext=()=>{
    return useContext(AppContext)
}