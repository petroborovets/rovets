import GoogleMap from "../../components/common/post/section/child/map/GoogleMap.jsx";
import s from "./AboutPage.module.css"

import aboutPageJson from "../../constants/about-page.json";

function AboutPage() {
    const mapSrc = aboutPageJson.mapSrc;
    const subHeaderText = aboutPageJson.subHeaderText;
    return (
        <div className={s.about_page}>
            <h1 className={s.about_page_header}>About Us</h1>
            <p className={s.about_page_header_subtext} dangerouslySetInnerHTML={{__html: subHeaderText}}/>
            <GoogleMap mapSrc={mapSrc}/>
        </div>
    )
}

export default AboutPage;
