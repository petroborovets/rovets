import s from "./ImagePostSection.module.css";
import {ORIGIN_URL} from "../../../../../../constants/pathConstants.js";
import PropTypes from "prop-types";

function ImagePostSection({imageSrc, imageAlt}) {
    return <img className={s.post_section_img_child} src={ORIGIN_URL + imageSrc} alt={imageAlt}/>
}

ImagePostSection.propTypes = {
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string
}

export default ImagePostSection;