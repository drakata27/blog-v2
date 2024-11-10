import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "lucide-react";
import Link from "next/link";
import { Author, Blog } from "@/sanity/types";

export type BlogTypeCard = Omit<Blog, "author"> & { author?: Author };

const Hero = async ({ blog }: { blog: BlogTypeCard }) => {
  const {
    _id,
    title,
    // _createdAt,
    author,
    description,
    // views,
    // likes,
    image,
    // timeToRead,
    // post,
  } = blog;
  return (
    <Link href={`/blog/${_id}`}>
      <div className="relative">
        <div className="relative w-full group">
          <div className="absolute bottom-0 left-0 p-8 z-10 max-w-xl flex items-center space-x-4">
            <Avatar className="size-10">
              <AvatarImage src={author?.image || ""} alt={author?.name || ""} />
              <AvatarFallback>
                <User className="mt-2" />
              </AvatarFallback>
            </Avatar>

            <div>
              <h1 className="text-white text-2xl font-bold">{title}</h1>
              <p className="text-white text-lg">{description}</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="blog post" className="image-transition" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Hero;
