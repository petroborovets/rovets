import s from "./PostSectionChild.module.css";
import ImagePostSection from "./image/ImagePostSection.jsx";
import ListPostSection from "./list/ListPostSection.jsx";
import ParagraphPostSection from "./paragraph/ParagraphPostSection.jsx";
import YoutubeVideoPostSection from "./video/YoutubeVideoPostSection.jsx";
import GoogleMap from "./map/GoogleMap.jsx";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

/* eslint-disable react/prop-types */
const Image = ({sectionChild}) => <ImagePostSection imageSrc={sectionChild.value} imageAlt={"Post Section Image"}/>
const Paragraph = ({sectionChild}) => <ParagraphPostSection text={sectionChild.value} />
const List = ({sectionChild}) => <ListPostSection list={sectionChild.value} />
const YouTubeVideo = ({sectionChild}) => <YoutubeVideoPostSection videoSrc={sectionChild.value} />
const Gallery = ({sectionChild}) => <ImageGallery additionalClass={s.gallery_section_child} items={sectionChild.value} thumbnailPosition={"left"} />
const Map = ({sectionChild}) => <GoogleMap mapSrc={sectionChild.value} />

function PostSectionChild({sectionChild}) {
    const renderMap = {
        image: Image,
        paragraph: Paragraph,
        list: List,
        youtubeVideo: YouTubeVideo,
        images: Gallery,
        map: Map
    }

    const Component = renderMap[sectionChild.type] || null;

    return (
        <div className={s.post_section_child}>
            {Component && <Component sectionChild={sectionChild} />}
        </div>
    )
}

export default PostSectionChild;