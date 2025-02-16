import { useEffect } from "react";

function usePostLoader(postFiles, postId, setPost, setLoading) {
    useEffect(() => {
        const loadPost = async () => {
            const postFile = Object.values(postFiles).find(file => file.default?.id == postId);
            if (postFile) {
                setPost(postFile.default || postFile);
            } else {
                setPost(null); // Ensure `post` is explicitly set to null if not found
            }
            setLoading(false);
        };

        loadPost();
    }, [postId, setPost, setLoading]);
}

export default usePostLoader;