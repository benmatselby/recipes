import styles from "./Footer.module.css";

/**
 * Responsible for rendering the footer
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3 className={styles.title}>Content</h3>
          <ul className={styles.links}>
            <li>
              <a href="https://benmatselby.dev/about/">About</a>
            </li>
            <li>
              <a href="https://benmatselby.dev/post/">Blog</a>
            </li>
            <li>
              <a href="https://benmatselby.dev/pictures/">Pictures</a>
            </li>
            <li>
              <a href="https://recipes.benmatselby.dev/">Recipes</a>
            </li>
            <li>
              <a href="https://benmatselby.dev/recommendations/">Recommendations</a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Social</h3>
          <ul className={styles.links}>
            <li>
              <a href="https://benmatselby.dev/index.xml">RSS</a>
            </li>
            <li>
              <a href="https://github.com/benmatselby">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/benmatselby">Twitter</a>
            </li>
            <li>
              <a href="https://www.polywork.com/benmatselby">Polywork</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
