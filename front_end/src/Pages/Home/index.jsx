import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import getUserData from '../../Components/Service/Data';
import Card from '../../Components/Card'
import ActivityChart from '../../Components/ActivityChart'
import ScoreChart from '../../Components/ScoreChart'
import AverageSessionsChart from '../../Components/SessionsChart'
import PerformanceChart from '../../Components/PerformanceChart'
import styles from './Home.module.css';

function Home() {
  const { userId } = useParams();
  const [userData, setContent] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
      getUserData(userId)
        .then((response) => {
          setContent(response);
        })
        .catch((error) => {
            setError(true);
        });
  }, [userId]);

  if (error) {
      return <Navigate to="/ErrorPage" />;
  }

  if (userData) {
    const { mainUserData, activityData,averageSessionsData, performanceData }= userData;
    //console.log(performanceData);
    return (
      <div className={styles.home}>
        <section className={styles.header}>
            <p className={styles.title}>Bonjour <span className={styles.name}>{mainUserData.userInfos.firstName}</span></p>
            <p className={styles.tag}>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </section>

        <section className={styles.results}>
          <div className={styles.charts}>
            <ActivityChart data={activityData} />
            <div className={styles.bottomContainer}>
              <AverageSessionsChart data={averageSessionsData} />
              <PerformanceChart data={performanceData} />
              <ScoreChart data={mainUserData.todayScore} />
            </div>
          </div>
          <div className={styles.cards}>
            <Card type="Calories" value={mainUserData.keyData.calorieCount} />
            <Card key="Proteines" type="Proteines" value={mainUserData.keyData.proteinCount} />
            <Card key="Glucides" type="Glucides" value={mainUserData.keyData.carbohydrateCount} />
            <Card key="Lipides" type="Lipides" value={mainUserData.keyData.lipidCount} />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;