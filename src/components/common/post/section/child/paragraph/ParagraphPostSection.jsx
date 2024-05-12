import s from './ParagraphPostSection.module.css';
import PropTypes from "prop-types";

function ParagraphPostSection({ text }) {
    return <p className={s.paragraph_section} dangerouslySetInnerHTML={{__html: text}}/>
}

ParagraphPostSection.propTypes = {
    text: PropTypes.string,
}

export default ParagraphPostSection;