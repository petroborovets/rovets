import s from './FeaturedSectionEntry.module.css';

/* eslint-disable react/prop-types */
function FeaturedSectionEntry(props) {
    let image = props.image;
    let category = props.category;
    let title = props.title;
    let date = props.date;

    return <div className={s.section_entry}>
        <a href="">
            <img src={image} alt="photo"/>
        </a>
        <a href={""} className={s.section_entry_cat}>{category}</a>
        <h2 className={s.section_entry_title}>{title}</h2>
        <span className={s.section_entry_date}>{date}</span>
    </div>
}

export default FeaturedSectionEntry;