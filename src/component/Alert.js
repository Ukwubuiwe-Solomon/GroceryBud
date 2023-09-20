import React, { useEffect } from 'react'

const Alert = ({ msg, removeAlert, list}) => {
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            removeAlert()
        },3000)
        return ()=> clearTimeout(timeout)
    },[list])
  return (
    <p className="text-blue-600 font-semibold text-center p-4">{msg}</p>
  )
}

export default Alert