import s from './FeaturedSection.module.css'

import FeaturedSectionEntry from "./featuredSectionEntry/FeaturedSectionEntry.jsx";

import postsJson from './../../../constants/posts.json';

function FeaturedSection() {
    const posts = postsJson.posts;
    return (
        <div className={s.section}>
            {
                posts.map(post =>
                    <FeaturedSectionEntry key={post.id}
                                          id={post.id}
                                          image={post.image}
                                          category={post.category}
                                          title={post.title}
                                          date={post.date}>
                    </FeaturedSectionEntry>
                )
            }
        </div>
    );
}

export default FeaturedSection;
