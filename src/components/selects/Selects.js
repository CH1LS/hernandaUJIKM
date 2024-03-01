import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
// import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'
// import thai form '../../assets/thaindland.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {

    
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <a href='/pesan'>
                <SelectsImg bgImg={BoraBora} text='Bora Bora' subtext={"Island In French Polynesia"} uang={"$115"}/>
                </a>
                <SelectsImg bgImg={BoraBora2} text='Emerald Bay' subtext={"emerald bay state park"} uang={"$900"}/>
                <SelectsImg bgImg={Maldives} text='Maldives' subtext={"paradise on earth"} uang={"$120"}/>
                <SelectsImg bgImg={Maldives3} text='Barbados' subtext={"Island nation in the caribbean"} uang={"$890"}/>
                <SelectsImg bgImg={KeyWest} text='Key West' subtext={"Island in  Florida"}  uang={"$345"}/>
                <SelectsImg bgImg={KeyWest} text='cat-ba-island' subtext={"cat-ba-island"}  uang={"$345"}/>
            </div>

        </div>
    )
}

export default Selects
