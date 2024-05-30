import React from 'react'
import './Logo.css'

const Logo = ({children}) => {
  return (
    <div className="logo">
        {children }
    </div>
  )
}

export default Logo