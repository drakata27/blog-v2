import { auth } from "@/auth";
import BlogForm from "@/components/BlogForm";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const session = await auth();
  if (!session) redirect("/");
  return (
    <>
      <h1 className="text-white mt-3 mr-5 ml-5">Add Blog</h1>
      <BlogForm />
    </>
  );
};

export default Page;
