import { auth } from "@/auth";
import BlogForm from "@/components/BlogForm";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const session = await auth();
  if (!session) redirect("/");
  return (
    <div className="mx-auto px-4 lg:px-20 max-w-4xl">
      <h1 className="text-4xl mt-3 font-bold ">Add Blog</h1>
      <BlogForm />
    </div>
  );
};

export default Page;
