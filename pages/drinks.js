import Category from "../src/components/category/Category";
import { getSortedRecipeData } from "../src/lib/recipes";

/**
 * This will pre-render this page at build time using the props returned by getStaticProps.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export async function getStaticProps() {
  const data = getSortedRecipeData("drink");
  return {
    props: {
      data,
    },
  };
}

/**
 * Render the drinks page.
 *
 * @param data is the getStaticProps content which provides the list of recipes.
 */
export default function DrinksPage({ data }) {
  return <Category title="Drinks" data={data}></Category>;
}
