import s from './FeaturedSectionEntry.module.css';

import categoriesJson from './../../../../constants/categories.json'
import {ORIGIN_URL} from "../../../../constants/pathConstants.js";
import {Link} from "react-router-dom";

/* eslint-disable react/prop-types */
function FeaturedSectionEntry(props) {
    const {id, image, category, title, date} = props
    const categoryName = categoriesJson?.categories?.filter(c => c.id === category)[0]?.name || 'Unknown Category';

    return (
        <div className={s.section_entry}>
            <Link to={"/rovets/post/" + id}>
                <img src={ORIGIN_URL + image} alt="photo"/>
            </Link>
            <Link to={"/rovets/category/" + category} className={s.section_entry_cat}>{categoryName}</Link>
            <h2 className={s.section_entry_title}>{title}</h2>
            <span className={s.section_entry_date}>{date}</span>
        </div>
    )
}

export default FeaturedSectionEntry;