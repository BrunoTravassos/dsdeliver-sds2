import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido por BrunoTravassos durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/user/brunoscream1" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/bruno-travassos-421a1622/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/travassosbruno/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;