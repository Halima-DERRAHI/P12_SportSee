import { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import UserService from "../../Components/Services/Data";
import { formatUserData } from '../../Components/Datas/DataFormatted';
import styles from './Home.module.css';

function Home() {
    //const { userId } = useParams();
    const userId = 12;
    const [userData, setContent] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        UserService.getUserMainData(userId)
          .then((response) => {
            const formattedUserData = formatUserData(response);
            setContent(formattedUserData);
          })
          .catch((error) => {
              console.log(error);
              setError(true);
          });
    }, [userId]);

    if (error) {
        return <Navigate to="/ErrorPage" />;
    }

    if (userData) {
        const firstName = userData.userInfos.firstName;

        return (
            <div className={styles.sectionContainer}>
                <p className={styles.title}>Bonjour <span className={styles.name}>{firstName}</span></p>
                <p className={styles.tag}>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        );
    }
}

export default Home;