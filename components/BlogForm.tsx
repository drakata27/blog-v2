"use client";

import React, { useActionState, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import MDEditor from "@uiw/react-md-editor";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { createBlog } from "@/lib/actions";

const BlogForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [content, setContent] = useState("");

  const { toast } = useToast();
  const router = useRouter();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        link: formData.get("link") as string,
        content,
      };
      await formSchema.parseAsync(formValues);
      const result = await createBlog(prevState, formData, content);
      if (result.status == "SUCCESS") {
        toast({
          title: "Success",
          description: "Your blog has been created successfully",
        });
        router.push(`/blog/${result._id}`);
      }
      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErorrs = error.flatten().fieldErrors;
        setErrors(fieldErorrs as unknown as Record<string, string>);
        toast({
          title: "Error",
          description: "Please check your inputs and try again",
          variant: "destructive",
        });
        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }
      toast({
        title: "Error",
        description: "An unexpected error has occurred",
        variant: "destructive",
      });
      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction} className="ml-5 mr-5 mt-5">
      <div>
        <label htmlFor="title" className="text-gray-300">
          Title
        </label>

        <Input
          id="title"
          name="title"
          required
          placeholder="Give your post a title..."
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="text-gray-300">
          Description
        </label>

        <Input
          id="description"
          name="description"
          required
          placeholder="Describe briefly what this post is about..."
        />
        {errors.description && <p className="text-red-500">{errors.title}</p>}
      </div>
      <div>
        <label htmlFor="link" className="text-gray-300">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          required
          placeholder="Paste a valid image URL..."
        />
        {errors.link && <p className="text-red-500">{errors.link}</p>}
      </div>

      <div data-color-mode="dark">
        <label htmlFor="content" className="text-gray-300">
          Content
        </label>

        <MDEditor
          value={content}
          onChange={(value) => setContent(value as string)}
          id="content"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder: "Start blogging...",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />

        {errors.content && <p className="">{errors.content}</p>}
      </div>

      <Button type="submit" className="  mt-5" disabled={isPending}>
        {isPending ? "Posting..." : "Post"}
        <Send className="size-6 ml-2 text-black" />
      </Button>
    </form>
  );
};

export default BlogForm;
