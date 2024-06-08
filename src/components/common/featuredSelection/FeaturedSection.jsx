import s from './FeaturedSection.module.css'

import FeaturedSectionEntry from "./featuredSectionEntry/FeaturedSectionEntry.jsx";

import postsJson from './../../../constants/posts.json'

function FeaturedSection(props) {
    // eslint-disable-next-line react/prop-types
    const {categoryId} = props
    const posts = postsJson.posts?.filter(post => categoryId ? post.category === categoryId : true);
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

export default FeaturedSection;
