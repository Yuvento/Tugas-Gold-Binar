
import React, { useState } from 'react';
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import "./DropDownList.css"



const DropDownList = () => {
  return (

      <Container className='Accor-Style'>
        <Row >
        <Col xs={12} md={6}>
              <h1 className='Drop'>Frequently Asked Question</h1>
              <h2 className='Drop2'>Lorem ipsum dolor sit amet.</h2>
          </Col>

        <Col md={6}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h2>Apa saja syarat yang dibutuhkan?</h2>
                  </Accordion.Header>
                  <Accordion.Body>
                  <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, earum.</h3>
                  </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                <Accordion>
                   <Accordion.Item eventKey="1" className='Accor-Header'>
                     <Accordion.Header >
                       <h2>Berapa hari minimal sewa mobil lepas kunci?</h2>
                     </Accordion.Header>
                          <Accordion.Body>
                          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, earum.</h3>
                          </Accordion.Body>
                  </Accordion.Item>
            </Accordion>
            <Accordion>
                  <Accordion.Item eventKey="2" className='Accor-Header'>
                          <Accordion.Header>
                            <h2>Berapa hari sebelumnya sebaiknya booking sewa mobil?</h2>
                          </Accordion.Header>
                          <Accordion.Body>
                                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, earum.</h3>
                          </Accordion.Body>
                  </Accordion.Item>
            </Accordion>
            <Accordion>
             <Accordion.Item eventKey="3" className='Accor-Header'>
                  <Accordion.Header>
                    <h2>Apakah ada biaya antar-jemput?</h2>
                  </Accordion.Header>
                  <Accordion.Body>
                  <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, earum.</h3>
                  </Accordion.Body>
             </Accordion.Item>
            </Accordion>
            <Accordion>
             <Accordion.Item eventKey="4" className='Accor-Header'>
                  <Accordion.Header>
                    <h2>Bagaimana jika terjadi kecelakaan</h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, earum.</h3>
                  </Accordion.Body>
              </Accordion.Item>
            </Accordion>
         
          </Col>
        </Row>
        </Container>
   
)


}
export default DropDownList



