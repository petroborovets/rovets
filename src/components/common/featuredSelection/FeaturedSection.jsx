import s from './FeaturedSection.module.css'
import borovets from './../../../assets/thumbs/on-bike/borovets-brothers.jpeg'
import rideWithSashko from './../../../assets/thumbs/on-bike/ride-with-sashko.jpeg'
import aptRide from './../../../assets/thumbs/on-bike/apt-ride.jpeg'
import bianchiAtHome from './../../../assets/thumbs/bike/bianchi-at-home.jpeg'

function FeaturedSection() {
    return (
        <section className={s.section}>
            <div className={s.section_entries}>
                <div className={s.section_entry}>
                    <a href="">
                        <img src={borovets} alt="borovets"/>
                    </a>
                    <a href={""} className={s.section_entry_cat}>Design</a>
                    <h2 className={s.section_entry_title}>Benefits of Minimalism in Design</h2>
                    <h3 className={s.section_entry_date}>June 15, 2018</h3>
                </div>

                <div className={s.section_entry}>
                    <a href="">
                        <img src={rideWithSashko} alt="rideWithSashko"/>
                    </a>
                    <h3 className={s.section_entry_cat}>Bikes</h3>
                    <h2 className={s.section_entry_title}>Best road bike routes around Lviv</h2>
                    <h3 className={s.section_entry_date}>June 15, 2018</h3>
                </div>

                <div className={s.section_entry}>
                    <a href="">
                        <img src={aptRide} alt="aptRide"/>
                    </a>
                    <h3 className={s.section_entry_cat}>Travel</h3>
                    <h2 className={s.section_entry_title}>Lviv</h2>
                    <h3 className={s.section_entry_date}>June 15, 2018</h3>
                </div>

                <div className={s.section_entry}>
                    <a href="">
                        <img src={bianchiAtHome} alt="bianchiAtHome"/>
                    </a>
                    <h3 className={s.section_entry_cat}>Bikes</h3>
                    <h2 className={s.section_entry_title}>Building a race bike</h2>
                    <h3 className={s.section_entry_date}>June 15, 2024</h3>
                </div>
            </div>
        </section>
    );
}

export default FeaturedSection;
