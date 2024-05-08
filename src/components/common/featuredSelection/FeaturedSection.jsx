import s from './FeaturedSection.module.css'

import FeaturedSectionEntry from "./featuredSectionEntry/FeaturedSectionEntry.jsx";

import borovets from './../../../assets/thumbs/on-bike/borovets-brothers.jpeg'
import rideWithSashko from './../../../assets/thumbs/on-bike/ride-with-sashko.jpeg'
import aptRide from './../../../assets/thumbs/on-bike/apt-ride.jpeg'
import bianchiAtHome from './../../../assets/thumbs/bike/bianchi-at-home.jpeg'

function FeaturedSection() {

    return (
        <div className={s.section}>
            <FeaturedSectionEntry image={borovets}
                                  category="Design"
                                  title="Benefits of Minimalism in Design"
                                  date="June 15, 2024">
            </FeaturedSectionEntry>
            <FeaturedSectionEntry image={bianchiAtHome}
                                  category="Bikes"
                                  title="Building a race bike"
                                  date="June 1, 2024">
            </FeaturedSectionEntry>
            <FeaturedSectionEntry image={aptRide}
                                  category="Travel"
                                  title="Exploring Lviv"
                                  date="June 12, 2024">
            </FeaturedSectionEntry>
            <FeaturedSectionEntry image={rideWithSashko}
                                  category="Bikes"
                                  title="Best road bike routes around Lviv"
                                  date="June 14, 2024">
            </FeaturedSectionEntry>
        </div>
    );
}

export default FeaturedSection;
