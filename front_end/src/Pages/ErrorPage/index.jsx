import styles from './ErrorPage.module.css'

function ErrorPage () {
    return (
        <div className={styles.containerMessage}>
            <p className={styles.message}>Page d'erreur 404</p>
            <a href="/" className={styles.linkHome}>Retour à la page d'accueil</a>
        </div>
    )
}
export default ErrorPage