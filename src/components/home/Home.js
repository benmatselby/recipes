import Link from "next/link";
import Layout from "../layout/Layout";
import styles from "./Home.module.css";

/**
 * Render the home page.
 *
 * @param data is the getStaticProps content which provides the list of recipes.
 */
export default function Home({ data }) {
  return (
    <Layout title="Family recipes">
      <div className={styles.recipes}>
        <ul className={styles.recipeList}>
          {data.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/recipes/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
