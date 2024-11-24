import s from './FeaturedSection.module.css';
import FeaturedSectionEntry from "./featuredSectionEntry/FeaturedSectionEntry.jsx";
import PropTypes from "prop-types";

function FeaturedSection({ categoryId }) {
    const postFiles = import.meta.glob('./../../../constants/posts/*.json', { eager: true });

    // Convert imported files to an array of post objects
    const posts = Object.values(postFiles).map(file => file.default || file);

    // Filter and sort posts
    const filteredPosts = posts
        .filter(post => (categoryId ? post.category === categoryId : true))
        .sort((a, b) => (Date.parse(a.date) > Date.parse(b.date) ? -1 : 1));

    return (
        <div className={s.section}>
            {filteredPosts.map(post => (
                <FeaturedSectionEntry
                    key={post.id}
                    id={post.id}
                    image={post.image}
                    category={post.category}
                    title={post.title}
                    author={post.author}
                    date={post.date}
                />
            ))}
        </div>
    );
}

FeaturedSection.propTypes = {
    categoryId: PropTypes.number
};

export default FeaturedSection;