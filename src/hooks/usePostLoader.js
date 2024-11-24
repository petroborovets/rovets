import { useEffect } from "react";

function usePostLoader(postId, setPost, setLoading) {
    useEffect(() => {
        const postFiles = import.meta.glob('../constants/posts/*.json', { eager: true });

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