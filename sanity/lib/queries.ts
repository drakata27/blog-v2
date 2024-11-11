import { defineQuery } from "next-sanity";

export const BLOGS_QUERY =
  defineQuery(`*[_type == "blog" && defined(slug.current)] | order(_createdAt desc) {
  _id,
    title,
    slug,
    _createdAt,
    author -> {
      _id, name, image, bio
    },
    description,
    views,
    likes, 
    image,
    timeToRead,
    content
}`);

export const BLOG_BY_ID_QUERY = defineQuery(`*[_type == "blog" && _id==$id][0]{
  _id,
    title,
    slug,
    _createdAt,
    author -> {
      _id, name, username, image, bio
    },
    description,
    views,
    likes, 
    image,
    timeToRead,
    content
}`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
  *[_type == "author" && id == $id][0]{
      _id,
      id,
      name,
      username,
      email,
      image,
      bio
  }
  `);
