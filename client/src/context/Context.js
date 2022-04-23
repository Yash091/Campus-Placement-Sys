import React, { useContext, useEffect,useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();


const Context = ({children}) => {

    const navigate = useNavigate();
    const initial = JSON.parse(window.localStorage.getItem("user"));
    const [userData,setUserData] = useState(initial); 
    useEffect(()=>{
        
        const data = JSON.parse(window.localStorage.getItem("user"));
        setUserData(data);
    },[navigate]);
    return (
        <AppContext.Provider value ={{userData,setUserData}}>{children}</AppContext.Provider>
    )
}

export default Context;