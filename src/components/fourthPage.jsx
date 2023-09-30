import React from 'react'
import './styles4.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cart1 from '../img/cart1.jpg';
import cart2 from '../img/cart2.jpg';
import cart3 from '../img/cart3.jpeg';
const fourthPage = () => {
    return (
        <div className='page-4'>
            <h2>News</h2>
            <Container>
                <Row>
                    <Col className='boxx boxx1'>
                        <img src={cart1} alt=''></img>
                        <h4>Asia-US Container Rates Tick<br />
                            Lower; Canada Post Strike<br />
                            Enters 7th Day</h4>
                        <p>Network Of Strategically Based Sites Located On<br />
                            Port (Within lkm Of Container Terminals) And Off-<br />
                            Port (within 15kms Of Capital City Industrial<br />
                            Zones)</p>
                        <a href=''>Read More</a>
                    </Col>

                    <Col className='boxx boxx2'>
                        <img src={cart2} alt=''></img>
                        <h4>World Shipping Releases<br />
                            Containers Lost At Sea Report<br /></h4>

                        <p>Network Of Strategically Based Sites Located On<br />
                            Port (Within lkm Of Container Terminals) And Off-<br />
                            Port (within 15kms Of Capital City Industrial<br />
                            Zones)</p>
                        <a href=''>Read More</a>
                    </Col>

                    <Col className='boxx boxx3'>
                        <img src={cart3} alt=''></img>
                        <h4>Top Shipping Stocks for Q2 2023</h4>
                        <p>Network Of Strategically Based Sites Located On<br />
                            Port (Within lkm Of Container Terminals) And Off-<br />
                            Port (within 15kms Of Capital City Industrial<br />
                            Zones)</p>
                        <a href=''>Read More</a>
                    </Col>

                    <Col className='boxx boxx4'>
                        <img src={cart3} alt=''></img>
                        <h4>Aurizon Wins Rail Freight<br />
                            Contract From TGE In Austraila</h4>
                        <p>Network Of Strategically Based Sites Located On<br />
                            Port (Within lkm Of Container Terminals) And Off-<br />
                            Port (within 15kms Of Capital City Industrial<br />
                            Zones)</p>
                        <a href=''>Read More</a>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default fourthPage