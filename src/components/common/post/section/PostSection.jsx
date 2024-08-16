import {Link} from "react-router-dom";
import s from './PostSection.module.css';
import PostSectionChild from "./child/PostSectionChild.jsx";
import {useState} from "react";

/* eslint-disable react/prop-types */
function PostSection({section, postId}) {
    const [isLinkClicked, setLinkClicked] = useState(false);
    const [isHeadingHoovered, setHeadingHoovered] = useState(false);

    const sectionIdParam = "?section-id=" + section.id;
    const postSectionURLPath = "/rovets/post/" + postId + sectionIdParam;

    function copyLinkToClipBoard() {
        const href = window.location.href;
        const urlToCopy = href.includes(postSectionURLPath)
            ? href
            : href.split('?')[0] + sectionIdParam;

        navigator.clipboard.writeText(urlToCopy);
    }

    function onLinkClick() {
        copyLinkToClipBoard();
        setLinkClicked(true)
        setTimeout(() => setLinkClicked(false), 2000);
    }

    function onHeadingMouseEnter() {
        setHeadingHoovered(true)
    }

    function onHeadingMouseLeave() {
        setHeadingHoovered(false)
    }

    return (
        <>
            <ul className={s.post_section_heading} onMouseEnter={onHeadingMouseEnter}
                onMouseLeave={onHeadingMouseLeave}>
                <h1 id={section.id} className={s.post_section_heading_text}>{section.heading}</h1>
                {
                    section.heading !== "" ?
                        <Link to={postSectionURLPath}
                              className={`${s.post_section_link} ${isHeadingHoovered ? s.post_section_link_visible : ''}`}
                              onClick={onLinkClick}>
                            {isLinkClicked ? '📋' : '🔗'}
                        </Link>
                        : ""
                }
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