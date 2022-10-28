import Link from "next/link";
import Layout from "../layout/Layout";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <Layout title="Family recipes">
      <div className={styles.home}>
        <Link href={`/vegetarian`} className={styles.button}>
          Vegetarian
        </Link>
        <Link href={`/meat`} className={styles.button}>
          Meat
        </Link>
        <Link href={`/dessert`} className={styles.button}>
          Dessert
        </Link>
        <Link href={`/drink`} className={styles.button}>
          Drinks
        </Link>
      </div>
    </Layout>
  );
}
