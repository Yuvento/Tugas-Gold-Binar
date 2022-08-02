import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import "./Forms.css"
import Card from 'react-bootstrap/Card';

export default () =>{

    return(
        <section className='ContainerManage'>
            <Container >
                       <Card className='CardManage'>
                           <Row >
                               <Col>
                                   <Form className="RowManage">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Nama Mobil</Form.Label>
                                                <Form.Control className="Form-Control" type="text" placeholder="Ketik nama/tipe mobil" />
                                            </Form.Group>
                                    </Form>
                               </Col>
                                <Col>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Kategori</Form.Label>
                                                   <Form.Select className="Form-Control" >
                                                        <option>Masukan Kapasitas Mobil</option>
                                                        <option>2-3</option>
                                                        <option>4-6</option>
                                                   </Form.Select>
                                            </Form.Group>
                                    </Form>
                                </Col>
                                <Col>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Harga</Form.Label>
                                                <Form.Select className="Form-Control" >
                                                        <option>Masukan Harga sewa per Hari</option>
                                                        <option>Rp. 500.000</option>
                                                        <option>Rp. 700.000</option>
                                                </Form.Select>
                                            </Form.Group>
                                    </Form>
                                </Col>
                                <Col>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Status</Form.Label>
                                                <Form.Select >
                                                        <option>Disewa</option>
                                                        <option>tidak disewa</option>
                                                </Form.Select>
                                            </Form.Group>
            
                                    </Form>
            
                                </Col>
                                <Col className='ButtonCol'>
                                    <Button className='ButtonCol2' type="submit">Cari Mobil</Button>
                                </Col>
                           </Row>
                       </Card>
            </Container>
        </section>


    )


}