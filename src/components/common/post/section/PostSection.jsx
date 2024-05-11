import s from './PostSection.module.css';
import PostSectionChild from "./child/PostSectionChild.jsx";

/* eslint-disable react/prop-types */
function PostSection(props) {
    const section = props.section;

    return (
        <>
            <h1 className={s.post_section_heading}>{section.heading}</h1>
            {
                section.children?.map(sectionChild =>
                    <PostSectionChild key={sectionChild.id} sectionChild={sectionChild}/>
                )
            }
        </>
    )
}

export default PostSection;