import {useParams} from "react-router-dom";

function PostPage() {
    const { id } = useParams()
    return <h1>Post id is : {id}</h1>
}

export default PostPage;
