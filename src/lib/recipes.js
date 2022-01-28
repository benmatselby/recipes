import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "recipes");

/**
 * Get all the recipes, and sort then ready for display
 */
export function getSortedRecipeData(type) {
  // Get file names under /recipes
  const fileNames = fs.readdirSync(contentDirectory);

  const allData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data
    };
  });

  const recipes = allData.filter((item) => {
    if (
      type === undefined ||
      (type !== undefined && item.type !== undefined && item.type.includes(type))
    ) {
      return item;
    }
  });

  return recipes.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    return -1;
  });
}

/**
 * Get all the ids for the recipes we have.
 */
export function getAllRecipeIds() {
  const fileNames = fs.readdirSync(contentDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'recipe-one'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'recipe-two'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, "")
      }
    };
  });
}

/**
 * Get the specific recipe data.
 */
export async function getRecipeData(id) {
  const fullPath = path.join(contentDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  };
}
