import React from 'react'
import './SelectsImgStyles.css'

function SelectsImg({bgImg, text, subtext, uang}) {
    return (
        <div className='selects-location'>
            <img src={bgImg} alt='/' />
            <div className="overlay">
                <p>{text}</p>
                <span className='subtext'>{subtext}</span>
                <span className='uang'>{uang}</span>
            </div>
        </div>
    )
}

export default SelectsImg
