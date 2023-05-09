import React from 'react'
import './header.css'

const header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='heade-logo'>FrankBabaShop <i class="fi fi-rr-credit-card"></i></div>
            <div className='header-button'>
                <a 
                href="https://github.com/Fatih90FM91" 
                target='_blank' 
                rel='noopener noreferrer'>
                    <i class="devicon-github-original-wordmark colored"></i> Star</a>
            </div>
        </div>


        </div>
  )
}

export default header