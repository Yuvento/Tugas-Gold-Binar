import './SectionHero.css' 
import logo from "../../images/img_car.png"
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const SectionHero=()=>{
    return(
    <section className='Contain'>
      <Container >
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={6}>
              <h1 className="Paraf_one">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="Paraf">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est provident molestias, sit mollitia rerum libero iusto ipsam possimus minus voluptatum.</p>
              <Link to="/CarList"><button type="button" className="btn btn-success"><h4 className="button_margin">Mulai Sewa Mobil</h4></button> </Link>
          </Col>
          <Col xs={12} md={6}>
              <img className="car-image" src={logo} alt="" />
          </Col>
        </Row>
        </Container>
      
    </section>
        


    )
}

export default SectionHero;