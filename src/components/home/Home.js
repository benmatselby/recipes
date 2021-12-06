import Link from "next/link";
import Layout from "../layout/Layout";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <Layout title="Family recipes">
      <div className={styles.home}>
        <Link href={`/vegetarian`}>
          <a className={styles.button}>Vegetarian</a>
        </Link>
        <Link href={`/meat`}>
          <a className={styles.button}>Meat</a>
        </Link>
        <Link href={`/dessert`}>
          <a className={styles.button}>Dessert</a>
        </Link>
      </div>
    </Layout>
  );
}
