import s from './FeaturedSectionEntry.module.css';

import categoriesJson from './../../../../constants/categories.json'

/* eslint-disable react/prop-types */
function FeaturedSectionEntry(props) {
    const {image, category, title, date} = props
    const categoryName = categoriesJson?.categories?.filter(c => c.id === category)[0]?.name || 'Unknown Category';

    return <div className={s.section_entry}>
        <a href="">
            <img src={image} alt="photo"/>
        </a>
        <a href={""} className={s.section_entry_cat}>{categoryName}</a>
        <h2 className={s.section_entry_title}>{title}</h2>
        <span className={s.section_entry_date}>{date}</span>
    </div>
}

export default FeaturedSectionEntry;