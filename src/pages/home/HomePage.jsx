import Header from "../../components/header/Header.jsx";
import FeaturedSection from "../../components/common/featuredSelection/FeaturedSection.jsx";
import Footer from "../../components/footer/Footer.jsx";
import PreLoader from "../../components/common/preLoader/PreLoader.jsx";

function HomePage() {
    return (<>
        <PreLoader />
        <Header />
        <FeaturedSection />
        <Footer />
    </>)
}

export default HomePage;