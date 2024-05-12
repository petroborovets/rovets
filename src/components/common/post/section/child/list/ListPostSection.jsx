import s from "./ListPostSection.module.css"
import PropTypes from "prop-types";

function ListPostSection({list}) {
    return (
        <ul>
            {
                list?.map(li =>
                    <li className={s.post_section_list_child} key={li} dangerouslySetInnerHTML={{__html: li}}/>
                )
            }
        </ul>
    )
}

ListPostSection.propTypes = {
    list: PropTypes.array
}

export default ListPostSection;