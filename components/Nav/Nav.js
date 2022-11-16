import styles from './nav.module.css';

const Nav = () => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav_container}>
          <div className={styles.nav_item}>
            <h1 className={styles.logo}>
              <a href="https://www.nice-try.co" aria-label="Nice Try Co.">
                NT Co.<span hidden>- Nice Try Co.</span>
              </a>
            </h1>
            <div className={styles.line_container}></div>
            <div className={styles.logo_description}>
              <span className={styles.description_title}>digital agency</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
