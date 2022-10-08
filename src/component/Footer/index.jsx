import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../images/list item.png'
import Home from '../../images/Rectangle 74.png'
import './Footer.css'


const Footer = ()=>{
    return (
        <Container className="Contain2">
        <Row>
          <Col xs={12} md={2} >
            <h2>Jalan suryono no.161 Mayangan Kota</h2>
            <h2 className="Contain3">Probolonggo 672000</h2>
            <h2 className="Contain3">binarcarrental@gmail.com</h2>
            <h2 className="Contain3">081-233-334-808</h2>
          </Col>
          <Col xs={12} md={2} className="Contain4">
            <a href="" className="Contain4">
                 <h3>Our services</h3>
            </a>
  
             <a href="" className="Contain4">
                 <h3>Why Us</h3>
             </a>
             <a href="" className="Contain4">
                 <h3>Testimonial</h3>
             </a>
             <a href="" className="Contain4">
                 <h3>FAQ</h3>
             </a>
            
          </Col >
          <Col xs={12} md={2}  className="Contain5">
            <h2>Connect with us</h2>
            <img src={Logo} alt="" />
          </Col>

          <Col xs={12} md={3}  className="Contain5">
            <h2>CopyRight Binar 2022</h2>
            <img src={Home} alt="" />
            
          </Col>
        </Row>
        </Container>

    )



}
export default Footer