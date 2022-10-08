import './SectionWhy.css' 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SectionWhy =()=>{
    return(
        <>
                <Container>
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <Row>
                        <Col>
                            <h1 className='Why'>Why Us ?</h1>
                            <h2 className='Why2'>Mengapa harus pilih Binar Car Rental?</h2>
                        </Col>
                    </Row>
                </Container>
        </>
    )

}


export default SectionWhy;