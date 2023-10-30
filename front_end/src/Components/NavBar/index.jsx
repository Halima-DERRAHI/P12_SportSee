import Logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar () {
    return (
        <div className={styles.header}>
             <div className={styles.logoContainer}>
                <Link to="/">
                    <img src={Logo} alt='logo-sportsee' />
                </Link>
            </div>

            <div className={styles.navigation}>
                <ul>
                    <NavLink to='/' className={styles.navLink}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/user/12" className={styles.navLink}>
                        <li>Profil</li>
                    </NavLink>
                    <NavLink to="" className={styles.navLink}>
                        <li>Réglage</li>
                    </NavLink>
                    <NavLink to="" className={styles.navLink}>
                        <li>Communauté</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;