import React from 'react'
import LogoImage from '../assets/Logo.png'

function Logo({width = '70px'}) {
  return (
    <div>
      <img src={LogoImage} alt="Logo here" width={width}/>
    </div>
  )
}

export default Logo