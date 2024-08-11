import {useLocation} from "react-router-dom";

function useQueryParams() {
    const {search} = useLocation();
    return new URLSearchParams(search);
}


export default useQueryParams;