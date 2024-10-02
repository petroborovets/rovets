import s from './FeaturedSectionEntry.module.css';

import categoriesJson from './../../../../constants/categories.json'
import {ORIGIN_URL} from "../../../../constants/pathConstants.js";
import {Link} from "react-router-dom";

/* eslint-disable react/prop-types */
function FeaturedSectionEntry(props) {
    const {id, image, category, title, author, date} = props
    const categoryName = categoriesJson?.categories?.filter(c => c.id === category)[0]?.name || 'Unknown Category';
    const defaultAuthor = 'Petro Borovets'

    return (
        <div className={s.section_entry}>
            <Link to={"/rovets/post/" + id}>
                <img src={ORIGIN_URL + image} alt="photo"/>
            </Link>
            <Link to={"/rovets/category/" + category} className={s.section_entry_cat}>{categoryName}</Link>
            <h2 className={s.section_entry_title}>{title}</h2>
            <div className={s.section_entry_date_and_author}>
                {
                    author !== defaultAuthor
                        ? <span className={s.section_entry_author}>by {author}</span>
                        : ""
                }
                <span className={s.section_entry_date}>{date}</span>
            </div>
</div>
    )
}

export default FeaturedSectionEntry;