import postStyles from "../../../../pages/post/PostPage.module.css";
import s from "./PostHeader.module.css";

import {ORIGIN_URL} from "../../../../constants/pathConstants.js";
import {Link} from "react-router-dom";

/* eslint-disable react/prop-types */
function PostHeader(props) {
    const post = props.post;

    return (
        <div className={s.post_header}>
            <img className={s.post_page_header_image} src={ORIGIN_URL + post.image} alt="postImage"/>
            <h1 className={s.post_page_header_title}>{post.title}</h1>
            <ul className={s.post_page_header_author}>
                <li>{post.date}</li>
                <li>By <Link className={s.post_page_header_author_link} to={"/pebo/"}>{post.author}</Link></li>
            </ul>
            <p className={s.post_page_header_head_section_heading_text}>{post.headSection?.headingText}</p>
            <p className={postStyles.post_page_paragraph_text}>{post.headSection?.headingSubText}</p>
        </div>
    )

}

export default PostHeader;