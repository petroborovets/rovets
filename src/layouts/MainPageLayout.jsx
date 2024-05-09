import {Outlet} from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import PreLoader from "../components/common/preLoader/PreLoader.jsx";


const MainPageLayout = () => {
    return (
        <div>
            <PreLoader />
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainPageLayout
