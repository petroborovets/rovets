import s from './Header.module.css'
import {Link} from "react-router-dom";

import caterotiesJson from "../../constants/categories.json";

function Header() {

    const {categories} = caterotiesJson;

    console.log(categories);

    return (
        <header className={s.header}>
            <Link to="/pebo/" className={s.header_logo}>ROVETS</Link>
            <nav className={s.header_nav}>
                <ul>
                    <li className={s.header_nav_li}>
                        <Link className={s.header_nav_li_link} to="/pebo/" title="">Home</Link>
                    </li>

                    <li className={s.header_nav_li}>
                        <div className={s.header_nav_li_dropdown}>
                            <p className={s.header_nav_li_link}>Categories</p>
                            <div className={s.header_nav_li_dropdown_content}>
                                {categories.map(cat =>
                                    <Link key={cat.id} className={s.header_nav_li_dropdown_content_link}
                                          to={"/pebo/category/" + cat.id} title="">{cat.name}</Link>
                                )}
                            </div>
                            {/*<span className={s.header_nav_li_with_children}>↓</span>*/}
                        </div>


                    </li>

                    <li className={s.header_nav_li}>
                        <Link className={s.header_nav_li_link} to="/pebo/about" title="">About</Link>
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

            <Link className={s.header_contact} to="/pebo/contact" title="">Contact</Link>

        </header>
    );
}

export default Header;
