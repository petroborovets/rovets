import {useParams} from "react-router-dom";
import s from "./PostPage.module.css";
import postsJson from "../../constants/posts.json";
import PostHeader from "../../components/common/post/header/PostHeader.jsx";
import PostSection from "../../components/common/post/section/PostSection.jsx";

import useScrollToElementById from "../../hooks/useScrollToElementById.js";
import useQueryParams from "../../hooks/useQueryParams.js";


function PostPage() {
    const {postId} = useParams()
    const post = postsJson.posts.filter(post => post.id == postId)[0]

    const queryParams = useQueryParams();
    const sectionId = queryParams.get('section-id');

    useScrollToElementById(sectionId);

    return (
        <div className={s.post_page}>
            <PostHeader post={post}/>
            {
                post?.sections?.map(section =>
                    <PostSection key={section.id} section={section} postId={postId}/>
                )
            }
        </div>
    )
}

export default PostPage;
