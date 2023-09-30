import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import './styles5.css';
const fifthPage = () => {
  return (
    <div className='page-5'>
        <div className='box'>
            <h4>Have a question regarding <br />
            Swift services?</h4>
            <h2>Contact Us <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></h2>
        </div>
    </div>
  )
}

export default fifthPage