import s from './Header.module.css'

// import categories from './../../constants/categories.json'

function Header() {
    // const  categoriesJson = categories.categories;

    return (
        <header className={s.header}>
            <h1 className={s.header_logo}>PeBo</h1>
            <nav className={s.header_nav}>
                <ul>
                    <li className={s.header_nav_li}>
                        <a href="" title="">Home</a>
                    </li>

                    <li className={s.header_nav_li}><a href="" title="">Categories</a>
                        <span className={s.header_nav_li_with_children}>▴</span>
                    </li>

                    <li className={s.header_nav_li}>
                        <a href="" title="">About</a>
                    </li>

                    <li className={s.header_nav_li}>
                        <a href="" title="">Contact</a>
                    </li>
                </ul>
            </nav>
            <a className={s.header_search}></a>
        </header>
    );
}

export default Header;
