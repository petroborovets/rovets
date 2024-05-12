import s from "./ListPostSection.module.css"
import PropTypes from "prop-types";

function ListPostSection({list}) {
    return (
        <ul>
            {
                list?.map((li, index) =>
                    <li className={s.post_section_list_child} key={li + index} dangerouslySetInnerHTML={{__html: li}}/>
                )
            }
        </ul>
    )
}

ListPostSection.propTypes = {
    list: PropTypes.array
}

export default ListPostSection;