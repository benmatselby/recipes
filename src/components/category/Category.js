import Link from "next/link";
import Layout from "../layout/Layout";
import RecipeList from "../recipe-list/RecipeList";
import styles from "./Category.module.css";

/**
 * Render the home page.
 *
 * @param data is the getStaticProps content which provides the list of recipes.
 */
export default function Category({ title, data }) {
  return (
    <Layout title={title}>
      <div className={styles.recipes}>
        <RecipeList data={data} />
        <div className={styles.homeLink}>
          &#8592; <Link href="/">Home</Link>
        </div>
      </div>
    </Layout>
  );
}
