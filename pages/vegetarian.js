import Category from "../src/components/category/Category";
import { getSortedRecipeData } from "../src/lib/recipes";

/**
 * This will pre-render this page at build time using the props returned by getStaticProps.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export async function getStaticProps() {
  const data = getSortedRecipeData("vegetarian");
  return {
    props: {
      data
    }
  };
}

/**
 * Render the vegetarian page.
 *
 * @param data is the getStaticProps content which provides the list of recipes.
 */
export default function VegetarianPage({ data }) {
  return <Category title="Vegetarian recipes" data={data}></Category>;
}
