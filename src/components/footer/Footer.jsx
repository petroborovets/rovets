import s from './Footer.module.css';

function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.footer_left}>
                <h3 className={s.footer_left_about_title}>About PeBo</h3>
                <p className={s.footer_left_about_description}>PeBo was developed using React by Borovets brothers.
                    Visit <a className={s.footer_about_description_ghub}
                             href="https://github.com/petroborovets/peboblog">GitHub</a> for details.</p>
            </div>
            <div className={s.footer_right}>
                <p className={s.footer_right_copyright}>Made with ❤️ in 🇺🇦<br/> Copyright © 2024 All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
