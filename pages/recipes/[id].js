import Head from "next/head";
import { getAllRecipeIds, getRecipeData } from "../../lib/recipes";

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

export default function Recipe({ data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <article>
        <h1>{data.title}</h1>
        <div>{data.date}</div>
        <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
      </article>
    </>
  );
}
