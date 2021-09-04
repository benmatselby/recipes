import Link from "next/link";
import Layout from "../layout/Layout";

/**
 * Render a recipe.
 */
export default function Recipe({ data }) {
  return (
    <Layout title={data.title}>
      <article>
        <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
      </article>
      <footer>
        <Link href="/">&#8592; Home</Link>
      </footer>
    </Layout>
  );
}
