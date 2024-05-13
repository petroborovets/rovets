import s from './GoogleMap.module.css';
import PropTypes from "prop-types";

function GoogleMap({mapSrc}) {
    return (
        <div className={s.post_section_map}>
            <iframe src={mapSrc} className={s.post_section_map} loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

GoogleMap.propTypes = {
    mapSrc: PropTypes.string.isRequired
}

export default GoogleMap;