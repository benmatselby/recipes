import Head from "next/head";
import Link from "next/link";
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

export default function Recipe({ data }) {
  return (
    <div className="container">
      <Head>
        <title>{data.title}</title>
      </Head>
      <article>
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
      </article>
      <footer>
        <Link href="/">&#8592; Home</Link>
      </footer>
    </div>
  );
}
