"use server";

import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { calculateReadTime, parseServerActionResponse } from "@/lib/utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createBlog = async (
  state: any,
  form: FormData,
  content: string
) => {
  const session = await auth();

  if (!session)
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });

  const { title, description, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key !== "content")
  );

  const slug = slugify(title as string, { lower: true, strict: true });

  const timeToRead = calculateReadTime(content);

  try {
    const blog = {
      title,
      description,
      image: link,
      slug: {
        _type: slug,
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session?.id,
      },
      timeToRead,
      content,
    };

    const result = await writeClient.create({ _type: "blog", ...blog });

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);

    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};

export const deleteBlog = async (id: string) => {
  try {
    await writeClient.delete(id); // Delete document by ID
    revalidatePath("/");
    return parseServerActionResponse({
      status: "SUCCESS",
      message: "Blog post deleted successfully",
    });
  } catch (error) {
    console.error("Failed to delete blog post:", error);
    return parseServerActionResponse({
      status: "ERROR",
      error: "Failed to delete blog post",
    });
  }
};
