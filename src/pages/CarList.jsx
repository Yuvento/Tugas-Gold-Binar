import {useState,useEffect} from 'react' ;
const URL = `https://bootcamp-rent-car.herokuapp.com/admin/car`
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../pages/CarList.css"
import Container from 'react-bootstrap/Container'
import {Link} from "react-router-dom";
import Home from '../images/Rectangle 74.png'
import Forms from "../component/Forms"


import  {useNavigate} from "react-router-dom";
export default function CarList (){
    const [cars,setCars] = useState([])
    const [loading,setloading]=useState(false)
    let navigate = useNavigate()
   

    
    async function getCars(){
        try{
            setloading(true);
            const res = await window.fetch(URL);
            const data = await res.json();
            const filterData = data.filter(item => item.image !== null)
            setCars(filterData)
            setloading(false);
        }
        catch(e){
        console.log(e);
        setloading(false);
        }
    }
    useEffect(()=>{
        getCars()
    },[]) 
    // arrray kosong cmn dijalananin 1x


    function handleViewDetail(id){
        navigate(`/cars/${id}`)
    }

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
                    <Row xs={1} md={4} className="g-4 ">
                            {loading ?<div>Loading</div>: cars.map(car=>(
                           <Col>
                            <Card className='NavBar-Locate' key={car.id} >
                            <Card.Img variant="top" src={car.image} />
                            <Card.Body>
                            <h1>{car.name} </h1>
                            <Card.Text className="fw-bold">Rp  {car.price} / hari</Card.Text>
                            <p className="fw-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae et nemo ducimus dolorem sit cum numquam? Delectus, aspernatur nisi!</p>
                                <Button className="fw-bold RentCar"  variant="primary" onClick={()=> handleViewDetail(car.id)}>Pilih Mobil</Button>
                            </Card.Body>
                            </Card>
                            </Col>
                         ))}
                        </Row>
                </Container>

            </>
        
    
    
    )
}