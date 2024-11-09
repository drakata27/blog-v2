import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <Link href={"/"}>
      <div className="relative">
        <div className="relative w-full group">
          <div className="absolute bottom-0 left-0 p-8 z-10 max-w-xl flex items-center space-x-4">
            <Avatar className="size-10">
              <AvatarImage src={"/avatar.png"} alt={"avatar"} />
              <AvatarFallback>
                <User className="mt-2" />
              </AvatarFallback>
            </Avatar>

            <div>
              <h1 className="text-white text-2xl font-bold">Title</h1>
              <p className="text-white text-lg">Description</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/HeroPlaceholder.jpeg"
              alt="placeholder"
              layout="responsive"
              width={1920}
              height={1080}
              className="image-transition"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Hero;
