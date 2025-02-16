import {useState} from "react";
import {useParams} from "react-router-dom";
import s from "./PostPage.module.css";
import PostHeader from "../../components/common/post/header/PostHeader.jsx";
import PostSection from "../../components/common/post/section/PostSection.jsx";
import useQueryParams from "../../hooks/useQueryParams.js";
import useScrollToElementById from "../../hooks/useScrollToElementById.js";
import usePostLoader from "../../hooks/usePostLoader.js";
import {useLanguage} from "../../context/LanguageContext.jsx";

function getPostFiles(language) {
    switch (language) {
        case "ukr":
            return  import.meta.glob('./../../constants/posts/ukr/*.json', {eager: true});
        default:
            return import.meta.glob('./../../constants/posts/en/*.json', {eager: true});
    }
}

function PostPage() {
    const {postId} = useParams();
    const queryParams = useQueryParams();
    const sectionId = queryParams.get("section-id");

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const {language} = useLanguage();
    console.log('PostPage ' + language)
    let postFiles = getPostFiles(language);

    usePostLoader(postFiles, postId, setPost, setLoading, language)
    useScrollToElementById(post, sectionId)

    if (loading) return <div>Loading...</div>;
    if (!post) return <div>Post not found.</div>;
    return (
        <div className={s.post_page}>
            <PostHeader post={post}/>
            {post?.sections?.map(section => (
                <PostSection key={section.id} section={section} postId={postId}/>
            ))}
        </div>
    );
}

export default PostPage;