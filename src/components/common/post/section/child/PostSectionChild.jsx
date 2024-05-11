import s from "./PostSectionChild.module.css";
import {ORIGIN_URL} from "../../../../../constants/pathConstants.js";

/* eslint-disable react/prop-types */
function PostSectionChild(props) {
    const sectionChild = props.sectionChild;

    let element;
    if (sectionChild.type === 'image') {
        element = <img className={s.post_section_img_child} src={ORIGIN_URL + sectionChild.value} alt=""/>
    } else if (sectionChild.type === 'paragraph') {
        element = <p className={s.post_section_paragraph_child}>{sectionChild.value}</p>
    } else if (sectionChild.type === 'list') {
        element = <ul>
            {
                sectionChild.value?.map(li =>
                    <li className={s.post_section_list_child} key={li} >{li}</li>
                )
            }
        </ul>
    }

    return (
        <div className={s.post_section_child}>
            {element}
        </div>
    )
}

export default PostSectionChild;