import s from './FeaturedSection.module.css'

import FeaturedSectionEntry from "./featuredSectionEntry/FeaturedSectionEntry.jsx";

import postsJson from './../../../constants/posts.json'
import PropTypes from "prop-types";

function FeaturedSection({categoryId}) {

    const posts = postsJson.posts?.filter(post => categoryId ? post.category === categoryId : true);

    posts.sort(function(a, b) {
        return Date.parse(a.date) > Date.parse(b.date) ? -1 : 1;
    })

    return (
        <div className={s.section}>
            {
                posts.map(post =>
                    <FeaturedSectionEntry key={post.id}
                                          id={post.id}
                                          image={post.image}
                                          category={post.category}
                                          title={post.title}
                                          date={post.date}
                    />
                )
            }
        </div>
    );
}

FeaturedSection.propTypes = {
    categoryId: PropTypes.number
}

export default FeaturedSection;
