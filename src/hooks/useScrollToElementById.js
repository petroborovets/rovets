import { useEffect } from "react";


function useScrollToElementById(post, sectionId) {
    useEffect(() => {
        if (post && sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [post, sectionId]);
}

export default useScrollToElementById;
