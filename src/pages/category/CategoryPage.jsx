import {useParams} from "react-router-dom";
import FeaturedSection from "../../components/common/featuredSelection/FeaturedSection.jsx";

function CategoryPage() {
    const { id } = useParams()
    return <>
        <h1>Category id is : {id}</h1>
        <FeaturedSection categoryId={parseInt(id)} />
    </>
}

export default CategoryPage;