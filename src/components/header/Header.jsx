import s from './Header.module.css'
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className={s.header}>
            <Link to="/pebo/" className={s.header_logo}>PeBo</Link>
            <nav className={s.header_nav}>
                <ul>
                    <li className={s.header_nav_li}>
                        <Link to="/pebo/" title="">Home</Link>
                    </li>

                    <li className={s.header_nav_li}><a href="" title="">Categories</a>
                        <span className={s.header_nav_li_with_children}>↓</span>
                    </li>

                    <li className={s.header_nav_li}>
                        <Link to="/pebo/about" title="">About</Link>
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
