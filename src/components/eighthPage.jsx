import React from 'react'
import './styles8.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import head from '../img/head.png'
import house from '../img/house.png'
import like from '../img/like.png'
import mail from '../img/mail.png'
import msg1 from '../img/msg1.jpeg'

const eighthPage = () => {
  return (
    <div className='page-8'>
     <Container>
        <Row className='row'>
            <Col className='col-1'>
                <img src={head} alt=""></img>
                <h5>Call us at anytime on<br/>1210 779 434</h5>
            </Col>

            <Col className='col-2'>
                <img src={mail} alt=""></img>
                <h5>See why more<br/>companies prefer<br/>Swift</h5>
            </Col>
            
            <Col className='col-3'>
                <img src={like} alt=""></img>
                <h5>Email the Team at<br/>Swift Transport<br/>Courier Division</h5>
            </Col>
            
            <Col className='col-4'>
                <img src={house} alt=""></img>
                <h5>Email the Team at<br/>Swift Transport<br/>Courier Division</h5>
            </Col>

            <Col className='col-5'>
                <img src={msg1} alt=""></img>
                <h5>Visit our<br/>warehousing and<br/>distribution center</h5>
            </Col>

        </Row>
     </Container>
    </div>
  )
}

export default eighthPage