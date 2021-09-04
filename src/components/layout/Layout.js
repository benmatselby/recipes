import styles from "./Layout.module.css";

/**
 * The layout for the application.
 *
 * @param children is the other bits and pieces we need to render the app.
 */
export default function Layout({ children, title }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <div>{children}</div>
    </div>
  );
}
