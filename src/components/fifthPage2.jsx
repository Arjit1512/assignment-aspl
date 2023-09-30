import React from 'react'
import './styles25.css'
import apos from '../img/apos.png'
import per1 from '../img/per1.png'

const fifthPage2 = () => {
  return (
    <div className='page-25'>
       <h2>Testimonials</h2>
       <img src={per1} className="per" alt=""></img>
       <img src={apos} className="aposimg" alt=""></img>
       
       <p>We use <span>Swift Transport</span> for a few different outcomes,<br/>
       relocate equipment between Sydney and the Central<br/>Coast and an Hourly Work as Directed Service. We simply<br/>
       make a call and the next day a driver in a fully equipped<br/>ute arrives ready for work. When we need to send items to<br/>
       Sydney that are planned, it works out far better to use<br/>
       Swift than use our own vehicles. The vehicles are well<br/>
       presented, well fitted and the drivers are all very helpful,<br/>
       and the rate is always excellent.</p>
       <p className='userinfo'>
        Peter Santwyk,<br/>
        Allcott Hire, Nth Regional Area Mgr
       </p>

       <div className='final-circle'>
     <div className='circles circles1'></div>
     <div className='circles circles2'></div>
     <div className='circles circles3'></div>
     <div className='circles circles4'></div>
     <div className='circles circles5'></div>
     <div className='circles circles6'></div>
     <div className='circles circles7'></div>
</div>
    </div>
  )
}

export default fifthPage2