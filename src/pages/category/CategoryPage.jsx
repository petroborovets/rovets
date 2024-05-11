import {useParams} from "react-router-dom";
import FeaturedSection from "../../components/common/featuredSelection/FeaturedSection.jsx";
import s from "./CategoryPage.module.css";

import categoriesJson from "../../constants/categories.json";

function CategoryPage() {
    const { id } = useParams()
    const category = categoriesJson.categories?.filter(c => c.id == id)[0]

    return <>
        <h1 className={s.category_page_header}>{category?.name}</h1>
        <FeaturedSection categoryId={parseInt(id)} />
    </>
}

export default CategoryPage;