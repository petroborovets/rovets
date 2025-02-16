import s from './Footer.module.css';

import {useLanguage} from "../../context/LanguageContext.jsx";

function Footer() {
    const {language, toggleLanguage} = useLanguage();

    let isEnglish = language === 'en'
    let flag = isEnglish ? '🇺🇦' : '🇬🇧';

    let aboutTitle = isEnglish ? 'About ROVETS' : 'Про ROVETS'
    let aboutDescription = isEnglish
        ? 'ROVETS was developed using React by Borovets brothers.'
        : 'ROVETS написаний на React братами Боровець.'
    let visit = isEnglish ? 'Visit' : 'Відвідайте'
    let moreDetails = isEnglish ? 'for details.' : 'для деталей.'
    let location = isEnglish ? 'Made with ❤️ in 🇺🇦' : 'Зроблено з ❤️ в 🇺🇦'
    let copyright = 'Copyright © ' + new Date().getFullYear() + ' All rights reserved.'

    return (
        <footer className={s.footer}>
            <div className={s.footer_left}>
                <h3 className={s.footer_left_about_title}>{aboutTitle}</h3>
                <p className={s.footer_left_about_description}>{aboutDescription}
                    <br/> {visit} <a className={s.footer_about_description_ghub} target="_blank"
                                     href="https://github.com/petroborovets/rovets">GitHub</a> {moreDetails}</p>
            </div>
            <div className={s.footer_right}>
                <div className={s.language_toggle_container}>
                    <span onClick={toggleLanguage} style={{ cursor: 'pointer' }}>{flag}</span>
                </div>
                <p className={s.footer_right_copyright}>
                    {location}
                    <br/> {copyright}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
