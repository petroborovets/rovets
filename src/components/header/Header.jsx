import s from './Header.module.css'
import {Link} from "react-router-dom";

import caterotiesJson from "../../constants/categories.json";
import {useLanguage} from "../../context/LanguageContext.jsx";

function Header() {

    const { language } = useLanguage();
    const {categories} = caterotiesJson;

    let homeLabel = language === "en" ? "Home" : "Дім"
    let categoriesLabel = language === "en" ? "Categories" : "Категорії"
    let aboutLabel = language === "en" ? "About" : "Про нас"
    let contactLabel = language === "en" ? "Contact" : "Контакти"

    return (
        <header className={s.header}>
            <Link to="/rovets/" className={s.header_logo}>ROVETS</Link>
            <nav className={s.header_nav}>
                <ul>
                    <li className={s.header_nav_li}>
                        <Link className={s.header_nav_li_link} to="/rovets/" title="">{homeLabel}</Link>
                    </li>

                    <li className={s.header_nav_li}>
                        <div className={s.header_nav_li_dropdown}>
                            <p className={s.header_nav_li_link_category}>{categoriesLabel}</p>
                            <div className={s.header_nav_li_dropdown_content}>
                                {categories.map(cat =>
                                    <Link key={cat.id} className={s.header_nav_li_dropdown_content_link}
                                          to={"/rovets/category/" + cat.id} title="">{cat.name}</Link>
                                )}
                            </div>
                        </div>


                    </li>

                    <li className={s.header_nav_li}>
                        <Link className={s.header_nav_li_link} to="/rovets/about" title="">{aboutLabel}</Link>
                    </li>

                    {/*<li className={s.header_nav_li}>*/}
                    {/*    <Link to="/pebo/contact" title="">Contact</Link>*/}
                    {/*</li>*/}
                </ul>
            </nav>

            {/*
            Commenting out search until it is implemented
            <a className={s.header_search}></a>
            */}

            <Link className={s.header_contact} to="/rovets/contact" title="">{contactLabel}</Link>

        </header>
    );
}

export default Header;
