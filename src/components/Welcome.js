import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Welcome(props) {

    let [user,setUser] = useState("") 

    useEffect(()=>{
        if(localStorage.getItem("data") == null){
            props.history.push('/')
        }
        else{
            setUser(localStorage.getItem("data"))
        }
    })

    const logout = () => {
        localStorage.clear()
        props.history.push('/')
    }

    const deleteAc = async()=>{
        const res = await axios.delete(`http://localhost:8000/delete/${user}`)
        logout()

    }

    return (
        <>
            <h1>{user}</h1>
            <button onClick={logout}>logout</button>
            <button onClick={deleteAc} >delete account</button>
        </>
    )

}

export default Welcome;