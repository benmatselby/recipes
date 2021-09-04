import Recipe from "../../src/components/recipe/Recipe";
import { getAllRecipeIds, getRecipeData } from "../../src/lib/recipes";

export async function getStaticProps({ params }) {
  const data = await getRecipeData(params.id);
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllRecipeIds();
  return {
    paths,
    fallback: false,
  };
}

export default function RecipePage({ data }) {
  return <Recipe data={data} />;
}
