import React from 'react'
import './styles6.css'
import image from '../img/img4.jpg'
import bluescope from '../img/bluescope.jpeg';
import chep from '../img/chep.jpeg'
import dhl from '../img/dhl.png'
import coateshire from '../img/coateshire.png'
import kennards from '../img/kennards.jpeg'
import onesteel from '../img/onesteel.png'

const sixthpage = () => {
  return (
    <div className='page-6'>
       <h2>You'll be in good company</h2>

       <div className='image'>
        <img src={image} alt=""></img>
       </div>

       <div className='bgwhite'>
         <div className='vertical-logos'>
            <img className = 'b'src={bluescope} alt=""/>
            <img className = 'o'src={onesteel} alt=""/>
            <img className = 'ch'src={chep} alt=""/>
            <img className = 'co'src={coateshire} alt=""/>
            <img className = 'k'src={kennards} alt=""/>
            <img className = 'd'src={dhl} alt=""/>
            
         </div>


       </div>
    </div>
  )
}

export default sixthpage