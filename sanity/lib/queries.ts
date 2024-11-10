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
    post
}`);

export const LATEST_BLOG_QUERY = defineQuery(`
     *[_type == "blog" && defined(slug.current)] | order(_createdAt desc)[0] {
    _id,
    title,
    slug,
    _createdAt,
    author -> {
      _id,
      name,
      image,
      bio
    },
    description,
    views,
    likes,
    image,
    timeToRead,
    post
}`);
