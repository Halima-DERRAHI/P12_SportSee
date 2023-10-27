import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LogIn.module.css';

export default function LogIn() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('dashboard/12');
  };

  return (
    <div className={styles.logIn}>
      <p>Bienvenue !</p>
      <button onClick={handleButtonClick} className={styles.button}>
        Connexion
      </button>
    </div>
  );
}