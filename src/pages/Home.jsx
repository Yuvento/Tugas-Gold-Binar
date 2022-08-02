import SectionHero from "../component/SectionHero";
import SectionContent from "../component/SectionContent"
import SectionWhy from "../component/SectionWhy"
import Cards from "../component/Cards";
import Testimonials from "../component/Testimonials";
import CardSlider  from "../component/CardSlider";
import Banner from "../component/Banner"
import DropDownList from "../component/DropDownList";
import Footer from "../component/Footer";
import Navbar from "../component/NavBar"




const Home = () => {
    return(
        <>
            <Navbar/>
            <SectionHero/>
            <SectionContent/>
            <SectionWhy/>
            <Cards/>
            <Testimonials/>
            <CardSlider/>
            <Banner/>
            <DropDownList/>

        </>
    )
}



export default Home;