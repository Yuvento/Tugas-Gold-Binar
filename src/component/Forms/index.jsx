import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import "./Forms.css"
import Card from 'react-bootstrap/Card';

const Forms = (props)=> {
  const {handleSearch,setForm} = props;

    return(
        <section className='ContainerManage'>
            <Container >
                       <Card className='CardManage'>
                           <Row >
                               <Col>
                                   <Form className="RowManage">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Nama Mobil</Form.Label>
                                                <Form.Control className="Form-Control" type="text" placeholder="Ketik nama/tipe mobil" onChange={(event) => setForm(prev => ({...prev, name: event.target.value}))} />
                                            </Form.Group>
                                    </Form>
                               </Col>
                                <Col>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Kategori</Form.Label>
                                                   <Form.Select className="Form-Control" onChange={(event) => setForm(prev => ({...prev, category: event.target.value}))}>
                                                        <option >Masukan Kapasitas Mobil</option>
                                                        <option value="4-5 orang">4-5 orang</option>
                                                        <option value="6-8 orang">6-8 orang</option>
                                                   </Form.Select>
                                            </Form.Group>
                                    </Form>
                                </Col>
                                <Col>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Harga</Form.Label>
                                                <Form.Select className="Form-Control" onChange={(event) => setForm(prev => ({...prev, price: event.target.value}))}>
                                                        <option>Masukan Harga sewa per Hari</option>
                                                        <option value={2000000000}>Rp. 2.000.000.000</option>
                                                        <option value={5000000000}>Rp. 5.000.000.000</option>
                                                </Form.Select>
                                            </Form.Group>
                                    </Form>
                                </Col>
                                <Col>
                                    <Form>
                                        <Form.Group className="mb-3 status" controlId="formBasicEmail">
                                                <Form.Label>Status</Form.Label>
                                                <Form.Select onChange={(event) => setForm(prev => ({...prev, status: event.target.value}))}>
                                                        <option >Pilih Status</option>
                                                        <option value="true">Disewa</option>
                                                        <option value="false">tidak disewa</option>
                                                </Form.Select>
                                            </Form.Group>
            
                                    </Form>
            
                                </Col>
                                <Col className='ButtonCol'>
                                    <Button className='ButtonCol2' type="submit" onClick={handleSearch}>Cari Mobil</Button>
                                </Col>
                           </Row>
                       </Card>
            </Container>
        </section>


    )


}
export default Forms