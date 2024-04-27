import Header from "./../../header/Header";
import FeaturedSection from "./../../common/featuredSelection/FeaturedSection.jsx";
import Footer from "./../../footer/Footer";
import PreLoader from "./../../common/preLoader/PreLoader.jsx";

function LandingPage() {
    return (<>
        <PreLoader />
        <Header />
        <FeaturedSection />
        <Footer />
    </>)
}

export default LandingPage;