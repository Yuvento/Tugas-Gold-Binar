
import logo from "../../images/img_service.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./SectionContent.css"
 


function SectionContent(){
    return (
    <section className="Section-Set">
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row >
            <Col xs={12} md={6}>
                 <img src={logo} />
            </Col>
       
          <Col xs={12}  md={6} >
                  <h2 className="Test">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit obcaecati aperiam reiciendis ex incidunt quae voluptates odio est facilis unde eveniet, inventore sit repudiandae dolores numquam nisi! Quae, autem! Ab!</h2>
                  <ul className="List2">
                    <h5><li><i className="fa-solid fa-circle-check fa-color"/> Sewa Mobil Dengan Supir di Bali 12 Jam</li></h5>
                    <h5><li><i className="fa-solid fa-circle-check fa-color"/> Sewa Mobil Lepas kunci di Bali 24 Jam</li></h5>
                    <h5><li><i className="fa-solid fa-circle-check fa-color"/> Sewa Mobil Jangka Panjang Bulanan</li></h5>
                    <h5><li><i className="fa-solid fa-circle-check fa-color"/> Gratis Antar - Jemput Mobil di Bandara</li></h5>
                    <h5><li><i className="fa-solid fa-circle-check fa-color"/> Layanan Airport Transfer /Drop in Out</li></h5>
                  </ul>
          </Col>
        </Row>
        </Container>

        

    </section>
    )
     

}

export default SectionContent;