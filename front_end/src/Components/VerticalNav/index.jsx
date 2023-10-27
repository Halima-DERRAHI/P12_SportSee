import { NavLink } from 'react-router-dom';
import styles from './VerticalNav.module.css'
import bike from '../../assets/bike.png';
import swim from '../../assets/swim.png';
import haltere from '../../assets/haltere.png';
import yoga from '../../assets/yoga.png';

function VerticalBar () {
    return (
        <div className={styles.verticalNav}>
            <ul>
                <NavLink to='' className={styles.navLink}>
                    <img src={yoga} alt="yoga" />
                </NavLink>
                <NavLink to='' className={styles.navLink}>
                    <img src={swim} alt="swim" />
                </NavLink>
                <NavLink to='' className={styles.navLink}>
                    <img src={bike} alt="bike" />
                </NavLink>
                <NavLink to='' className={styles.navLink}>
                    <img src={haltere} alt="haltere" />
                </NavLink>
            </ul>
            <div className={styles.copyright}>Copyright, SportSee 2020</div>
        </div>
    );
};

export default VerticalBar;