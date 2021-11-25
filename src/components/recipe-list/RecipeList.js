import Link from "next/link";
import styles from "./RecipeList.module.css";

/**
 * Render a recipe list.
 */
export default function RecipeList({ data }) {
  return (
    <ul className={styles.recipeList}>
      {data.map(({ id, date, title }) => (
        <li key={id}>
          <Link href={`/recipes/${id}`}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
