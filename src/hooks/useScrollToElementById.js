import { useEffect } from "react";


function useScrollToElementById(id) {
    useEffect(() => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [id]);
}

export default useScrollToElementById;
