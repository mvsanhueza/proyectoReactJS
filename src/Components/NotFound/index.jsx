import styles from './notfound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.contenedor}>
        <h2>Parece que la página no existe.</h2>
        <p>El enlace que apuntaba aquí no existe.</p>
    </div>
  )
}
