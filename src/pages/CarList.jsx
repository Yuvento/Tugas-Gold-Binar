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
import axios from 'axios';

import  {useNavigate} from "react-router-dom";

const  CarList = ()=>{
    const [cars,setCars] = useState([])
    const [filteredCars, setFilteredCars] = useState([])
    const [loading,setloading]=useState(false)
    const [form,setForm] = useState ({
        name:'',
        category : '',
        price : '',
        status : ''

    })

    let navigate = useNavigate()
    console.log(filteredCars)

    
    async function getCars(){
        try{

                setloading(true);
                const response = await axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car');
                const data = response.data;
                console.log(response);
                const filterData = data.filter(item => item.image !== null)
                setCars(filterData)
                setFilteredCars(filterData)
                setloading(false);
              
            
        }
        catch(e){
        setloading(false);
        }
    }
    useEffect(()=>{
        getCars()
    },[]) 
    

    const handleSearch = ()=>{
        let data = cars
        if(form.name != ""){
            data = data.filter(item => item.name == form.name)
        }
        if(form.status != ""){
            data = data.filter(item => item.status == form.status)
        }
        if(form.status != ""){
            data = data.filter(item => item.price == form.price)
        }
        if(form.status != ""){
            data = data.filter(item => item.category == form.category)
        }
    
        
        setFilteredCars(data)
    }

    const handleViewDetail = (id)=>{
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
                           <div className="navbar-nav justify-content-end flex-grow-1 pe-3 "/>
                             <div className="nav-item offCanvas2 ">
                                 <a key="{ite}" className="nav-link fw-bold" href="#"><h5>Our Services</h5></a>
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
           <Forms handleSearch={handleSearch} setForm={setForm}/>
        </div>
           
                <Container>
                    <Row xs={1} md={4} className="g-4 ">
                            {loading ?<div>Loading</div>: filteredCars.map(car=>(
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

export default CarList;