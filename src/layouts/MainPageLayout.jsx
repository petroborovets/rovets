import {Outlet} from "react-router-dom";
import s from "./MainPageLayour.module.css"

import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import PreLoader from "../components/common/preLoader/PreLoader.jsx";


const MainPageLayout = () => {
    return (
        <div className={s.main_page_layout}>
            <PreLoader />
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainPageLayout
