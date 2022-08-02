import Footer from "./component/Footer";
import Home from "./pages/Home";
import NavBar from "./component/NavBar";
import CarList from "./pages/CarList";
import CarDetail from "./pages/CarDetail"; 
import Forms from "./component/Forms";


import {
  BrowserRouter,
  Link,
  Routes,
  Route

} from "react-router-dom"



function App(){



  
  return (
    <> 
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path ='/CarList' element ={<CarList/>}/> 
        <Route path ='/cars/:id' element = {<CarDetail/>}/>    
        </Routes>
      <Footer/>
      </BrowserRouter>


    </>
  )
}

export default App;