import Image from "next/image";
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
          <Image
            src={data.img}
            alt={data.title}
            height={240}
            width={240}
            className={styles.image}
          />
        </div>
      )}
      <article>
        <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
      </article>
      <footer>
        <Link href={`/${data.type || ""}`}>&#8592; Back</Link>
      </footer>
    </Layout>
  );
}
