import s from './YutubeVideoPostSection.module.css';
import PropTypes from "prop-types";

function YoutubeVideoPostSection({videoSrc}) {
    return (
        <div className={s.youtube_video_post_section}>
            <iframe
                src={videoSrc}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
}

YoutubeVideoPostSection.propTypes = {
    videoSrc: PropTypes.string.isRequired
}

export default YoutubeVideoPostSection;