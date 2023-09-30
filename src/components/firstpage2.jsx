import React from 'react'
import './styles21.css'
import { Link } from 'react-router-dom'
import swift from '../img/swift.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone ,faArrowRight ,faCircle, faBars} from '@fortawesome/free-solid-svg-icons';


const firstpage2 = () => {
  return (
    <div className='page-21'>
      <div className='hidden2 navbar2'>
          <FontAwesomeIcon className='icon1' icon={faPhone}></FontAwesomeIcon>
          
          <FontAwesomeIcon  className='icon2' icon={faBars}></FontAwesomeIcon>
        </div>

      <div className='navbar'>
      
      
      <a className='deh' href=''>
        WHY SWIFT DEVELOPMENT
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
      
      <div className='big-image'>
        <img src={swift} />
        <h1>Why Swift Transport</h1>
        <h5>Here from our loyal customers about why<br />
        they're happy to recommend us to you.</h5>
      </div>

      </div>
    
  )
}

export default firstpage2