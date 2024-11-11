import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { BLOG_BY_ID_QUERY } from "@/sanity/lib/queries";
import { User, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";
import markdownit from "markdown-it";
import { auth } from "@/auth";
import DeleteButton from "@/components/DeleteButton";
const md = markdownit();

const BlogDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const session = await auth();
  const id = (await params).id;
  const blog = await client.fetch(BLOG_BY_ID_QUERY, { id });

  const parsedContent = md.render(blog?.content || "");

  return (
    <div className="ml-[2rem] mr-[2rem] mt-5 md:ml-[5rem] md:mr-[5rem] lg:ml-[20rem] lg:mr-[20rem]">
      <h1 className="text-white mt-5 mb-5 text-5xl font-bold">{blog.title}</h1>
      <h2 className="text-gray-300 mt-5 mb-5 text-3xl">{blog.description}</h2>

      <div className="flex justify-between border-t-2 border-b-2 border-gray-500">
        <div className="max-w-xl flex items-center space-x-4 mb-3 mt-3">
          <Avatar className="size-10 border">
            <AvatarImage
              src={blog.author.image || ""}
              alt={blog.author.name || ""}
            />
            <AvatarFallback>
              <User className="mt-2" />
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="text-white text-lg">{blog.author.name}</p>
          </div>
        </div>

        <div className="flex flex-col items-start mb-3 mt-3">
          <p className="text-white font-bold">Date Published</p>
          <p className="text-gray-300">{formatDate(blog._createdAt)}</p>
        </div>
      </div>

      <div className="flex mt-3 justify-end">
        <Clock className="text-gray-300 mr-2" />
        {blog.timeToRead > 1 ? (
          <p className="text-gray-300 mr-4">{blog.timeToRead} mins</p>
        ) : (
          <p className="text-gray-300 mr-4">{blog.timeToRead} min</p>
        )}
        {session ? (
          <>
            <DeleteButton id={id} />
          </>
        ) : (
          <></>
        )}
      </div>

      <Image
        src={blog.image}
        alt={blog.title}
        layout="responsive"
        width={1920}
        height={1080}
        className="mt-3 mb-5 rounded-xl"
      />
      {parsedContent ? (
        <article
          className="prose max-w-4xl break-all text-white dark:text-gray-200"
          dangerouslySetInnerHTML={{ __html: parsedContent }}
        />
      ) : (
        <p className="text-white">No details provied</p>
      )}
    </div>
  );
};

export default BlogDetail;
