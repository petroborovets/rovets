import s from "./PostSectionChild.module.css";
import {ORIGIN_URL} from "../../../../../constants/pathConstants.js";

/* eslint-disable react/prop-types */
const Image = ({sectionChild}) => <img className={s.post_section_img_child} src={ORIGIN_URL + sectionChild.value} alt=""/>
const Paragraph = ({sectionChild}) => <p className={s.post_section_paragraph_child} dangerouslySetInnerHTML={{__html: sectionChild.value}} />
const List = ({sectionChild}) => (
    <ul>
        {
            sectionChild.value?.map(li =>
                <li className={s.post_section_list_child} key={li} dangerouslySetInnerHTML={{__html: li}}/>
            )
        }
    </ul>
)

function PostSectionChild(props) {
    const {sectionChild} = props;

    const renderMap = {
        image: Image,
        paragraph: Paragraph,
        list: List
    }
    const Component = renderMap[sectionChild.type] || null;
    return (
        <div className={s.post_section_child}>
            {Component && <Component sectionChild={sectionChild} />}
        </div>
    )
}

export default PostSectionChild;