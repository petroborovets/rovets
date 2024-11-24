import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./PostPage.module.css";
import PostHeader from "../../components/common/post/header/PostHeader.jsx";
import PostSection from "../../components/common/post/section/PostSection.jsx";
import useQueryParams from "../../hooks/useQueryParams.js";
import useScrollToElementById from "../../hooks/useScrollToElementById.js";
import usePostLoader from "../../hooks/usePostLoader.js";

function PostPage() {
    const { postId } = useParams();
    const queryParams = useQueryParams();
    const sectionId = queryParams.get("section-id");

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    usePostLoader(postId, setPost, setLoading)
    useScrollToElementById(post, sectionId)

    if (loading) return <div>Loading...</div>;
    if (!post) return <div>Post not found.</div>;
    return (
        <div className={s.post_page}>
            <PostHeader post={post} />
            {post?.sections?.map(section => (
                <PostSection key={section.id} section={section} postId={postId} />
            ))}
        </div>
    );
}

export default PostPage;