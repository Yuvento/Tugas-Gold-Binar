import Container from 'react-bootstrap/Container';
import "./NavBar.css"
import {Link} from "react-router-dom";
import Home from '../../images/Rectangle 74.png'
import Forms from "../../component/Forms"


function NavBar(){
    return(
    <section className='NavbarManage'>

      <Container>
       
      <nav className="navbar navbar-expand-lg " >
            <div className="container-fluid">
             <Link to="/"><img className="img-navbar" src={Home}/></Link> 
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
          </section>
        
    )
        
}


export default NavBar;
