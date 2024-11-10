import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "lucide-react";
import { Author, Blog } from "@/sanity/types";
import Link from "next/link";

export type BlogTypeCard = Omit<Blog, "author"> & { author?: Author };

const BlogCard = ({ blog }: { blog: BlogTypeCard }) => {
  const {
    _id,
    title,
    // _createdAt,
    author,
    description,
    // views,
    // likes,
    image,
    timeToRead,
    // post,
  } = blog;
  return (
    <Link href={`/blog/${_id}`}>
      <div className="rounded-xl mt-5 border border-gray-500 p-5 group">
        <div className="overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="blog post" className="image-transition" />
        </div>
        <div className="flex items-center space-x-4">
          <Avatar className="size-10">
            <AvatarImage src={author?.image || ""} alt={author?.name || ""} />
            <AvatarFallback>
              <User className="mt-2" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-white font-bold mt-1">{title}</h1>
            <h2 className="text-white">{description}</h2>
            {timeToRead! > 1 ? (
              <p className="text-gray-400">{timeToRead} mins</p>
            ) : (
              <p className="text-gray-400">{timeToRead} min</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
