// require('dotenv').config()

export const DRUPAL_API = process.env.DRUPAL_API || 'https://kubedrop.io/jsonapi/node/article'

export async function getAllPosts() {
  const posts = [];
  const res = await fetch(DRUPAL_API);
  const resJSON = await res.json();

  for(let article of resJSON.data) {
    let post = {
      title: article.attributes.title,
      date: article.attributes.created,
      id: article.id,
      author: { name: "Author" },
      excerpt: article.attributes.body.processed,
    };

    posts.push(post);
  }
  return posts;
}

export async function getPostById(id) {
  const res = await fetch(`${DRUPAL_API}/${id}`);

  const resJSON = await res.json();
  const article = resJSON.data;

  const post = {
    title: article.attributes.title,
    date: article.attributes.created,
    id: article.id,
    author: { name: "Author" },
    excerpt: article.attributes.body.processed,
  };

  return post;
}
