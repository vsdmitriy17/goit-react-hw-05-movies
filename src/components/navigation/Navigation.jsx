import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
    <nav>
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <NavLink
                    // exact
                    to="/"
                    className={styles.navLink}
                    // activeClassName={styles.navLink_active}
                >
                    Home
                </NavLink>
            </li>

            <li className={styles.navItem}>
                <NavLink
                    to="search"
                    className={styles.navLink}
                    // activeClassName={styles.navLink_active}
                >
                    Movies
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navigation;