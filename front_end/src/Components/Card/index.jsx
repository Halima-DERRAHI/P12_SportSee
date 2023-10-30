import calorieIcon from '../../assets/energy.svg';
import glucidIcon from '../../assets/apple.svg';
import lipidIcon from '../../assets/cheeseburger.svg';
import proteinIcon from '../../assets/chicken.svg';
import styles from './Card.module.css';

function Card({ type, value }) {
    let icon, unit;
    const colorClass = styles[type];
    
    if (type === "Calories") {
        icon = calorieIcon;
        unit = "kCal";
    } else if (type === "Glucides") {
        icon = glucidIcon;
        unit = "g";
    } else if (type === "Lipides") {
        icon = lipidIcon;
        unit = "g";
    } else if (type === "Proteines") {
        icon = proteinIcon;
        unit = "g";
    }

    return (
        <div className={styles.card}>
            <img src={icon} alt='icon' className={`${styles.cardIcon} ${colorClass}`} />
            <div className={styles.titleContainer}>
                <p className={styles.value}>{value}{unit}</p>
                <p className={styles.title}>{type}</p>
            </div>
        </div>
    );
}

export default Card;