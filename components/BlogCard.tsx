import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "lucide-react";

const BlogCard = () => {
  return (
    <div className="rounded-xl mt-5 border border-gray-500 p-5 group">
      <div className="overflow-hidden rounded-xl">
        <Image
          src={"/HeroPlaceholder.jpeg"}
          alt="blog post"
          width={300}
          height={300}
          className="image-transition"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Avatar className="size-10">
          <AvatarImage src={"/avatar.png"} alt={"avatar"} />
          <AvatarFallback>
            <User className="mt-2" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-white font-bold mt-1">Title</h1>
          <h2 className="text-white">Description</h2>
          <p className="text-gray-400">5 min</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
