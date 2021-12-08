import Link from "next/link";
import Layout from "../layout/Layout";
import styles from "./Recipe.module.css";

/**
 * Render a recipe.
 */
export default function Recipe({ data }) {
  return (
    <Layout title={data.title}>
      {data.img && (
        <div className={styles.imageBoundary}>
          <img className={styles.image} alt={data.title} src={data.img} />
        </div>
      )}
      <article>
        <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
      </article>
      <footer>
        <Link href="/">&#8592; Home</Link>
      </footer>
    </Layout>
  );
}
