import Head from "next/head";
import Link from "next/link";
import { getSortedRecipeData } from "../lib/recipes";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const data = getSortedRecipeData();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recipes &middot; Ben Selby</title>
        <meta name="description" content="Family recipes" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Family recipes</h1>

        <ul>
          {data.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/recipes/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>{date}</small>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
