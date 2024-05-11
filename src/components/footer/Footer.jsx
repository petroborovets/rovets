import s from './Footer.module.css';

function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.footer_left}>
                <h3 className={s.footer_left_about_title}>About ROVETS</h3>
                <p className={s.footer_left_about_description}>ROVETS was developed using React by Borovets brothers.
                    <br/> Visit <a className={s.footer_about_description_ghub} target="_blank"
                             href="https://github.com/petroborovets/rovets">GitHub</a> for details.</p>
            </div>
            <div className={s.footer_right}>
                <p className={s.footer_right_copyright}>Made with ❤️ in 🇺🇦
                    <br/> Copyright © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
