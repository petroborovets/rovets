import s from './FeaturedSection.module.css'
import lamp from './../../../assets/thumbs/post/lamp-400.jpg'
import avian from './../../../assets/thumbs/post/avian-400.jpg'
import guitarist from './../../../assets/thumbs/post/guitarist-400.jpg'
import beetle from './../../../assets/thumbs/post/beetle-400.jpg'

function FeaturedSection() {
    return (
        <section className={s.section}>
            <div className={s.section_entries}>
                <div className={s.section_entry}>
                    <a href="">
                        <img src={lamp} alt="lamp"/>
                    </a>
                    <h3 className={s.section_entry_cat}>Design</h3>
                    <h2 className={s.section_entry_title}>3 Benefits of Minimalism In Interior Design.</h2>
                    <h3 className={s.section_entry_date}>June 15, 2018</h3>
                </div>

                <div className={s.section_entry}>
                    <a href="">
                        <img src={avian} alt="avian"/>
                    </a>
                    <h3 className={s.section_entry_cat}>Design</h3>
                    <h2 className={s.section_entry_title}>What Your Music Preference Says About You and Your Personality.</h2>
                    <h3 className={s.section_entry_date}>June 15, 2018</h3>
                </div>

                <div className={s.section_entry}>
                    <a href="">
                        <img src={guitarist} alt="guitarist"/>
                    </a>
                    <h3 className={s.section_entry_cat}>Design</h3>
                    <h2 className={s.section_entry_title}>3 Benefits of Minimalism In Interior Design.</h2>
                    <h3 className={s.section_entry_date}>June 15, 2018</h3>
                </div>

                <div className={s.section_entry}>
                    <a href="">
                        <img src={beetle} alt="beetle"/>
                    </a>
                    <h3 className={s.section_entry_cat}>Design</h3>
                    <h2 className={s.section_entry_title}>3 Benefits of Minimalism In Interior Design.</h2>
                    <h3 className={s.section_entry_date}>June 15, 2018</h3>
                </div>
            </div>
        </section>
    );
}

export default FeaturedSection;
