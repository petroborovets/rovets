import {useParams} from "react-router-dom";
import s from "./PostPage.module.css";
import postsJson from "../../constants/posts.json";
import PostHeader from "../../components/common/post/header/PostHeader.jsx";
import PostSection from "../../components/common/post/section/PostSection.jsx";

function PostPage() {
    const {id} = useParams()
    const post = postsJson.posts.filter(post => post.id == id)[0]

    return (
        <div className={s.post_page}>
            <PostHeader post={post} />
            {
                post?.sections?.map(section =>
                    <PostSection key={section.id} section={section} />
                )
            }
        </div>
    )
}

export default PostPage;
