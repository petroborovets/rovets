import s from './Header.module.css'

function Header() {
    return (
        <header className={s.header}>
            <div className={s.header_logo}>
                <img src="./logo.png" alt="logo"/>
            </div>
            <nav className={s.header_nav}>
                <ul>
                    <li><a href="" title="">Home</a></li>
                    <li><a href="" title="">Categories</a></li>
                    <li><a href="" title="">About</a></li>
                    <li><a href="" title="">Contact</a></li>
                </ul>
            </nav>
            <a className={s.header_search}></a>
        </header>
    );
}

export default Header;
