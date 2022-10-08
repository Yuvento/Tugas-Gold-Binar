import Footer from "./component/Footer";
import Home from "./pages/Home";
import NavBar from "./component/NavBar";
import CarList from "./pages/CarList";
import CarDetail from "./pages/CarDetail"; 
import Forms from "./component/Forms";
import TodoList from "./pages/TodoList"
import TodoDetail from "./pages/TodoDetail"



import {
  BrowserRouter,
  Link,
  Routes,
  Route

} from "react-router-dom"



const App =()=>{



  
  return (
    <> 
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path ='/CarList' element ={<CarList/>}/> 
        <Route path ='/cars/:id' element = {<CarDetail/>}/> 
        {/* <Route path ='/todo-list' element = {<TodoList/>}/> 
        <Route path ='/todo-detail/:id' element ={<TodoDetail/>}/>   */}
        </Routes>
      <Footer/>
      </BrowserRouter>


    </>
  )
}

export default App;