import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import "./Banner.css"

const Banner= ()=> {
    return (
     
        <Container fluid="sm" className="Banner-Banner">
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <h1 className="Banner Banner-Header" >SEWA MOBIL di (Lokasimu) Sekarang</h1>
            <p className="Banner Banner-Content" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore vel tenetur neque error numquam iure omnis asperiores delectus consequuntur?
            </p>
            <Link style={{ textDecoration: 'none' }} className="Banner Banner-Button"  to="/CarList"><button type="button" className="btn btn-success"><h4 className="button_margin">Mulai Sewa Mobil</h4></button> </Link>       
        </Container>
        
   

    )

}
export default Banner