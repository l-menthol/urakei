import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: "works",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log("--getPostBySlug--");
    console.log(err);
  }
}

export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: "works",
      queries: { fields: "title,slug", others: "-publishDate", limit: limit },
    });
    return slugs.contents;
  } catch (err) {
    console.log("--getAllSlugs--");
    console.log(err);
  }
}

export async function getAllWorks(limit = 100) {
  try {
    const works = await client.get({
      endpoint: "works",
      queries: { fields: "title,slug,eyecatch", others: "-publishDate", limit: limit },
    });
    return works.contents;
  } catch (err) {
    console.log("--getAllWorks--");
    console.log(err);
  }
}

export async function getAllCategories(limit = 100) {
  try {
    const categories = await client.get({
      endpoint: "categories",
      queries: { fields: "name,id,slug", limit: limit },
    });
    return categories.contents;
  } catch (err) {
    console.log("--getAllCategories--");
    console.log(err);
  }
}

export async function getAllWorksByCategory(catID, limit = 100) {
  try {
    const works = await client.get({
      endpoint: "works",
      queries: {
        filters: `categories[contains]${catID}`,
        fields: "title,slug,eyecatch",
        others: "-publishDate",
        limit: limit,
      },
    });
    return works.contents;
  } catch (err) {
    console.log("--getAllWorksByCategory--");
    console.log(err);
  }
}
