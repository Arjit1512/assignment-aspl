import React from 'react'
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone ,faArrowRight ,faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import call from '../img/call.png'
const firstPage = () => {
  return (
    <div>
    <div className='page1'>   

      <div className='contact-info'>
        <div className='div1'>
          <img src={call} alt=""></img>  
        </div>
        <div className='hidden1 hnavbar'>
          <FontAwesomeIcon className='icon1' icon={faPhone}></FontAwesomeIcon>
          
          <FontAwesomeIcon  className='icon2' icon={faBars}></FontAwesomeIcon>
        </div>


        <div className='hidden'>
          <h3>Cheaper vehicle costs through<br />
          innovative vehicle design</h3>
        </div>
        <div className='div2'>
          <p>Call Us</p>
          <p className='p2'>1300 779 438</p>
        </div>
      </div>
 <div className='hide'>
    <div className='frame-1'>
      <a>
        <Link to="/swift">WHY SWIFT DEVELOPMENT</Link>
      </a>
      {/* <a href=''>WHY SWIFT DEVELOPMENT</a> */}
      <a href='' className='underline'>
      <Link to='/'>FLEET</Link>
      </a>
      <a href='' >COMPANY POLICIES</a>
      <a href='' >ABOUT US</a>
      <a href='' >CONTACT US</a> 
    </div>

    <div className='frame-9'>
      {/* <a className='red' href='' >Swift Intermodal</a> */}
      <button className='primary'>Swift Intermodal</button>
      <a href='' >Container Transport Solutions</a>
      <a href=''>Complete Warehousing Solutions</a>
    </div>


    <div className='info-p1'>
      <h1>Cheaper delivery costs through<br />innovative vehicle design</h1>
      <h3>OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS<br />
          CAN'T.YOU'LL BE PLEASANTLY SUPRISED
      </h3>
      <a href='' className='underline'>TAXI AND COURIER TRUCK <FontAwesomeIcon icon={faArrowRight} /></a>

    </div>

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

</div>

</div>






  )
}

export default firstPage