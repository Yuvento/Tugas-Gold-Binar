import {useState,useEffect} from "react";
import {useParams,Link} from 'react-router-dom'
const URL = `https://bootcamp-rent-car.herokuapp.com/admin/car`
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import Home from '../images/Rectangle 74.png'
import Forms from "../component/Forms"
import "./CarList.css"
import axios from "axios";


const CarDetail= ()=>{

    
    const [car,setCar] = useState('')
    const {id}= useParams();
    async function getCars(){
        try{
            const res = await axios.get(`${URL}/${id}`);
            const data = res.data
            setCar(data)
        }
        catch(e){
        console.log(e);
        }
    }
    useEffect(()=>{
        getCars()
    },[]) 
    // arrray kosong cmn dijalananin 1x


    return(
        
        <>
        <div className='navbar2'>
           <Container>
               <nav className="navbar navbar-expand-lg " >
                     <div className="container-fluid navbarfluid">
                      <Link to="/"><img src={Home}/></Link>
                       <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                         <span className="navbar-toggler-icon"></span>
                       </button>
                       <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                         <div className="offcanvas-header">
                               <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BsCR</h5>
                           <button type="button" className="btn-close  " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                         </div>
               
               
                         <div className="offcanvas-body ">
                           <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 "/>
                             <div className="nav-item offCanvas2 ">
                                 <a className="nav-link fw-bold  " href="#"><h5>Our Services</h5></a>
                             </div>
                             <div className="nav-item offCanvas2">
                                 <a className="nav-link fw-bold" href="#"><h5>Testimony</h5></a>
                             </div>
                             <div className="nav-item offCanvas2">
                                 <a className="nav-link fw-bold" href="#"><h5>Why Us</h5></a>
                             </div>
                             <div className="nav-item offCanvas2">
                                 <a className="nav-link fw-bold" href="#"><h5>FAQ</h5></a>
                             </div>
                         </div>
                       </div>
                     </div>
                   </nav>
            </Container>
           <Forms/>
        </div>
            <Container>
                <Row>
                    <Col>
                        <Card className="CardBody">
                            <Card.Body >
                                <h2>Tentang Paket</h2>
                                <ul>
                                    <li><h4>Apa saja yang termasuk dalam paket misal durasi max 12 jam</h4></li>
                                    <li><h4>Sudah termasuk bensin selama 12 jam</h4></li>
                                    <li><h4>Sudah termasuk Tiket Wisata</h4></li>
                                    <li><h4>Sudah termasuk pajak</h4></li>
                                </ul>
                                <h2>Exclude</h2>
                                <ul>
                                    <li><h4>Tidak termasuk biaya makan sopir Rp 75000/hari</h4></li>
                                    <li><h4>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</h4></li>
                                    <li><h4>Tidak termasuk okomodasi penginapan</h4></li>
                                </ul>
                                <Accordion defaultActiveKey="0" >
                                        <Accordion eventKey="0" >
                                            <Accordion.Header >
                                                <h2>Refund, Reschedule, Overtime</h2>
                                            </Accordion.Header>
                                            <Accordion.Body >
                                                <ul>
                                                    <li> <h4>Tidak termasuk biaya makan sopir Rp 75.000/hari</h4></li>
                                                    <li> <h4>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</h4></li>
                                                    <li> <h4>Tidak termasuk akomodasi penginapan</h4></li>
                                                    <li> <h4>Tidak termasuk biaya makan sopir Rp 75.000/hari</h4></li>
                                                    <li> <h4>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</h4></li>
                                                    <li> <h4>Tidak termasuk akomodasi penginapan</h4></li>
                                                    <li> <h4>Tidak termasuk biaya makan sopir Rp 75.000/hari</h4></li>
                                                    <li> <h4>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</h4></li>
                                                    <li> <h4>Tidak termasuk akomodasi penginapan</h4></li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion>
                                    </Accordion>
                            </Card.Body>
                        </Card>
                    </Col>
                
                    <Col>
                        <Card style={{ width: '50rem' }} className="CardBody">
                                <Card.Img variant="top"  src={car.image} />
                                <Card.Body>
                                    <Card.Title>
                                        <h1>{car.name}</h1>
                                        <FontAwesomeIcon icon={faUsers}/> {car.category}
                                    </Card.Title>
                                    <Card.Text >
                                        <Row className="Total">
                                            <Col  xs={9} md={9} ><h2>Total</h2></Col>
                                            <Col xs={3} md={3} ><h2>Rp.{car.price}</h2></Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default CarDetail