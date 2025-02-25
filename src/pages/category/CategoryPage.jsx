import {useParams} from "react-router-dom";
import FeaturedSection from "../../components/common/featuredSelection/FeaturedSection.jsx";
import s from "./CategoryPage.module.css";

import categoriesJson from "../../constants/categories.json";

function CategoryPage() {
    const {categoryId} = useParams()
    const category = categoriesJson.categories?.filter(c => c.id == categoryId)[0]

    return <>
        <h1 className={s.category_page_header}>Category: {category?.name}</h1>
        <FeaturedSection categoryId={parseInt(categoryId)}/>
    </>
}

export default CategoryPage;