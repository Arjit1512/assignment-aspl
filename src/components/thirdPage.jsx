import React from 'react'
import './styles3.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckLoading,faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import i1 from '../img/i1.png'
import i2 from '../img/i2.png'
import i3 from '../img/i3.png'
import i4 from '../img/i4.png'
import i5 from '../img/i5.png'

const thirdPage = () => {
    return (
        <div>

            <div className='page-3'>

                <div className='p3info'>
                <h2 className='heading3'>Services</h2>
                <h1>A <span>smarter</span> container transport business</h1>
                <p>an on-demand container transport solution that works, utilizing the latest in gps,geo-mapping<br />
                    software and technology.</p>
                </div>

            </div>

            <div>
                <Container className='container'>
                    <Row>
                        <Col className='box box1'>
                            <h4>Transport - Container, Tautliner,<br />Bulk</h4>
                            <img src={i1} alt=""></img>
                            <p>Network Of Strategically Based Sites Located On<br />
                             Port (Within lkm Of Container Terminals) And Off-<br />
                             Port (within 15kms Of Capital City Industrial<br/>
                             Zones) In All Major Capital Cities Across Australia.<br/>
                             All Sites Are Connected To The Port By High<br/>
                             Productivity.</p>
                             <FontAwesomeIcon icon={faArrowRightLong} className='icon2'></FontAwesomeIcon>
                        </Col>

                        <Col className='box box2'>
                            <h4>Intermodal Rail Terminals</h4>
                            <img src={i2} alt=""></img>
                            <p>Network Of Strategically Based Sites Located On<br />
                             Port (Within lkm Of Container Terminals) And Off-<br />
                             Port (within 15kms Of Capital City Industrial<br/>
                             Zones) In All Major Capital Cities Across Australia.<br/>
                             All Sites Are Connected To The Port By High<br/>
                             Productivity..</p>
                             <FontAwesomeIcon icon={faArrowRightLong} className='icon2'></FontAwesomeIcon>
                        </Col>

                        <Col className='box box3'>
                            <h4>Empty Container Depots</h4>
                            <img src={i3} alt=""></img>
                            <p>Network Of Strategically Based Sites Located On<br />
                             Port (Within lkm Of Container Terminals) And Off-<br />
                             Port (within 15kms Of Capital City Industrial<br/>
                             Zones) In All Major Capital Cities Across Australia.<br/>
                             All Sites Are Connected To The Port By High<br/>
                             Productivity.</p>
                             <FontAwesomeIcon icon={faArrowRightLong} className='icon2'></FontAwesomeIcon>
                        </Col>
                   
                                   <Col className='box box4'>
                            <h4>Warehousing - 3PL, FAK And<br />ECommerce</h4>
                            <img src={i4} alt=""></img>
                            <p>Network Of Strategically Based Sites Located On<br />
                             Port (Within lkm Of Container Terminals) And Off-<br />
                             Port (within 15kms Of Capital City Industrial<br/>
                             Zones) In All Major Capital Cities Across Australia.<br/>
                             All Sites Are Connected To The Port By High<br/>
                             Productivity.</p>
                             <FontAwesomeIcon icon={faArrowRightLong} className='icon2'></FontAwesomeIcon>
                        </Col>

                        <Col className='box  box5'>
                            <h4>Bio-Security & Border Security<br/> (Customs) </h4>
                            <img src={i5} alt=""></img>
                            <p>Network Of Strategically Based Sites Located On<br />
                             Port (Within lkm Of Container Terminals) And Off-<br />
                             Port (within 15kms Of Capital City Industrial<br/>
                             Zones) In All Major Capital Cities Across Australia.<br/>
                             All Sites Are Connected To The Port By High<br/>
                             Productivity..</p>
                             <FontAwesomeIcon icon={faArrowRightLong} className='icon2'></FontAwesomeIcon>
                        </Col>
                    </Row>


                </Container>
            </div>



        </div>
    )
}

export default thirdPage