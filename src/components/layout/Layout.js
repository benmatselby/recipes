import Head from "next/head";
import styles from "./Layout.module.css";

/**
 * The layout for the application.
 *
 * @param children is the other bits and pieces we need to render the app.
 */
export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title} &middot; Ben Selby</title>
        <meta name="description" content="Family recipes" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
