import { useEffect } from "react";

function usePostLoader(postFiles, postId, setPost, setLoading, language) {
    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            const postFile = Object.values(postFiles).find(file => file.default?.id == postId);
            if (postFile) {
                setPost(postFile.default || postFile);
            } else {
                setPost(null); // Ensure `post` is explicitly set to null if not found
            }
            setLoading(false);
        };

        loadPost();
    }, [postId, postFiles, setPost, setLoading, language]); // Added postFiles and language

}

export default usePostLoader;