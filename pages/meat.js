import Category from "../src/components/category/Category";
import { getSortedRecipeData } from "../src/lib/recipes";

/**
 * This will pre-render this page at build time using the props returned by getStaticProps.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export async function getStaticProps() {
  const data = getSortedRecipeData("meat");
  return {
    props: {
      data
    }
  };
}

/**
 * Render the meat page.
 *
 * @param data is the getStaticProps content which provides the list of recipes.
 */
export default function MeatPage({ data }) {
  return <Category title="Meat recipes" data={data}></Category>;
}
