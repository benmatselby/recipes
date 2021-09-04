import Home from "../src/components/home/Home";
import { getSortedRecipeData } from "../src/lib/recipes";

/**
 * This will pre-render this page at build time using the props returned by getStaticProps.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export async function getStaticProps() {
  const data = getSortedRecipeData();
  return {
    props: {
      data,
    },
  };
}

/**
 * Render the home page.
 *
 * @param data is the getStaticProps content which provides the list of recipes.
 */
export default function IndexPage({ data }) {
  return <Home data={data}></Home>;
}
