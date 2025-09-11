import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectRoutes({children}) {
    const navigate = useNavigate()
    const isAuthorization = false

    useEffect(() => {
        if(!isAuthorization){
            navigate("/sign")
        
        }
       
    },[])
  return (
   children
  )
}

export default ProtectRoutes
