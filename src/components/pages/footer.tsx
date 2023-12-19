import styles from './footer.module.scss';

export function Footer() {
  return (
    <div className={styles.footer}>
      <img className={styles.footerlogo}  src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_40/v1702842157/Proyecto%20Final%20Figma/classic_carlogo_swndrv.png" alt="logo Classic Cars" />
      <p>My Classic Cars</p>
    </div>
  );
}
