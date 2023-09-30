import React from 'react'
import './styles9.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faChevronDown,faChevronUp} from '@fortawesome/free-solid-svg-icons'
const ninthPage = () => {
  return (
    <div>
    <div className='page-9'>
        <Container>
            <Row>
                <Col className='col-1'>
                   <h3>INFORMATION</h3>
                   <div className='last-info'>
                   <a href=''>About us</a>
                   <a href=''>Careers</a>
                   <a href=''>Driver safety</a>
                   <a href=''>Contact us</a>
                   <a href=''>Terms of use</a>
                   <a href=''>Privacy Policy</a>
                   </div>
                </Col>

                <Col className='col-2'>
                   <h3>CONTAINER TRANSPORT</h3>
                   <div className='last-info'>
                   <a href=''>Convenience</a>
                   <a href=''>Location</a>
                   <a href=''>Live Unloads</a>
                   <a href=''>Side Loader Drops</a>
                   <a href=''>Imports and Exports</a>
                   <a href=''>50T Onsite Forklift</a>
                   <a href=''>Oversize, Overweight</a>
                   <a href=''>Dangerous Goods</a>
                   <a href=''>24/7 Operations</a>
                   <a href=''>Company Owned Fleet</a>
                   
                   </div>
                </Col>

                <Col className='col-3'>
                   <h3>COMPLETE WAREHOUSING SOLUTIONS</h3>
                   <div className='last-info'>
                   <a href=''>Short & Long Term</a>
                   <a href=''>Indoor & Outdoor Storage</a>
                   <a href=''>Racked, Dry & Floor Stacked</a>
                   <a href=''>Distribution</a>
                   <a href=''>Import,Unpack,Pack,Ship</a>
                   <a href=''>Sub-Leasing</a>
                   <a href=''>Secure Facilities</a>
                   <a href=''>Barcode Scanning</a>
                   </div>
                </Col>
            </Row>
        </Container>
    </div>

    <div className='page-99'>
      <h3>INFORMATION<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></h3>
      <h3>TAXI & COURIER TRUCKS<FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon></h3>
      <h6>Versatile Fleet</h6>
      <h6>Safety & Training</h6>
      <h3>CONTAINER TRANSPORT<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></h3>

       <div className='border-white'>  
       </div>

       <h3 className='centre1'>SOCIAL MEDIA</h3>
       <div className='centre'>
      <FontAwesomeIcon className='space' icon={faFacebook}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faTwitter} className='space' ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faInstagram} className='space' ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faLinkedin} className='space' ></FontAwesomeIcon>
</div>
      <div className='border-white'>  
       </div>

       <h4>©2014 Swift Transport.All rights reserved.</h4>
    </div>
    </div>
  )
}

export default ninthPage;