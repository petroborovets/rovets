import {Link} from "react-router-dom";
import s from './PostSection.module.css';
import PostSectionChild from "./child/PostSectionChild.jsx";
import {useState} from "react";

/* eslint-disable react/prop-types */
function PostSection(props) {
    const {section, postId} = props;

    const [isClicked, setClicked] = useState(false);
    const sectionIdParam = "?section-id=" + section.id;
    const link = "/rovets/post/" + postId + sectionIdParam;

    function onLinkClick() {
        const href = window.location.href
        if (href.includes(link)) {
            navigator.clipboard.writeText(href)
        } else {
            navigator.clipboard.writeText(href.split('?')[0] + sectionIdParam)
        }

        setClicked(true)
        setTimeout(() => {
            setClicked(false);
        }, 2000);
    }

    return (
        <>
            <ul className={s.post_section_heading}>
                <h1 id={section.id} className={s.post_section_heading_text}>{section.heading}</h1>
                <Link to={link}
                      className={s.post_section_link} onClick={onLinkClick}>
                    {isClicked ? '📋' : '🔗'}
                </Link>

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