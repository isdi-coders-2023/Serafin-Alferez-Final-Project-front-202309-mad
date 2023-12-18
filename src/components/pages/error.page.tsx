import styles from './error.page.module.scss'

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <h3 className={styles.error}>404 - NOT FOUND</h3>
      <img className={styles.crash} src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_250/v1702739546/ca954fdb-a363-4ec2-a939-2435059437c4-broken-car-png-16.png" alt="coche calamitoso" />
    </div>
  )
}
