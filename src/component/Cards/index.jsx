import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import logo1 from "../../images/icon_24hrs.png"
import logo2 from "../../images/icon_complete.png"
import logo3 from "../../images/icon_price.png"
import logo4 from "../../images/icon_professional.png"
import "./Cards.css"

const Cards = ()=> {
    return(
        <section className="Section-Set Card-Contain" >
        <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row >
            <Col xs={12} md={3}>
            <Card  className='Card3' border="secondary" style={{  height :'18rem'}}>
            <div className='Card1'>
                <Card.Title><img src={logo1} /></Card.Title>
                <Card.Title><h2  className='Card2'>Mobil Lengkap</h2></Card.Title>
               
                    <h5  className='Card2'>
                        Tersedia banyak pilihan mobil,kondisi masih baru,bersih dan terawat
                    </h5>               
             
            </div>
                </Card>
            </Col>

            <Col xs={12} md={3}>
            <Card  className='Card3' border="secondary" style={{height :'18rem'}}>
                <div className='Card1'>
                    <Card.Title><img src={logo2} /></Card.Title>
                    <Card.Title><h2  className='Card2'>Harga Murah</h2></Card.Title>
                  
                    <h5  className='Card2'>
                        Harga murah dan bersaing, bisa bandingkan dengan harga kami dengan rental mobil lain
                    </h5>
 
                </div>
            </Card>
            </Col>

            <Col xs={12} md={3}>
            <Card  className='Card3' border="secondary" style={{height :'18rem'}}>
            <div className='Card1'>
                <Card.Title><img src={logo3} /></Card.Title>
                <Card.Title><h2  className='Card2'>Layanan 24 Jam</h2></Card.Title>
                <h5  className='Card2'>
                    Siap melayani kebutuhan Anda selama 24 jam nonstop.Kami juga tersedia di akhir minggu
                </h5>
            </div>
                </Card>
            </Col>

            <Col xs={12} md={3}>
            <Card className='Card3' border="secondary" style={{height :'18rem'}}>
            <div className='Card1'>
                <Card.Title><img src={logo4} /></Card.Title>
                <Card.Title><h2  className='Card2'>Sopir Profesional</h2></Card.Title>
                <h5  className='Card2'>
                    Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                </h5>
            </div>
                </Card>
            </Col>
       
       
        </Row>
        </Container>
        </section>

    )


}

export default Cards;
 