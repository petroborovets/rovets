import {Link} from "react-router-dom";
import s from './PostSection.module.css';
import PostSectionChild from "./child/PostSectionChild.jsx";

/* eslint-disable react/prop-types */
function PostSection(props) {
    const {section, postId} = props;

    return (
        <>
            <ul className={s.post_section_heading}>
                <h1 id={section.id} className={s.post_section_heading_text}>{section.heading}</h1>
                <Link to={"/rovets/post/" + postId + "?section-id=" + section.id} className={s.post_section_link}>🔗</Link>
            </ul>
            {
                section.children?.map(sectionChild =>
                    <PostSectionChild key={sectionChild.id} sectionChild={sectionChild}/>
                )
            }
        </>
    )
}

export default PostSection;