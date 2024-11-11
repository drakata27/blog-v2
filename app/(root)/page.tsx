import { auth } from "@/auth";
import BlogCard, { BlogTypeCard } from "@/components/BlogCard";
import Hero from "@/components/Hero";
import { client } from "@/sanity/lib/client";
import { BLOGS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const blogs = await client.fetch(BLOGS_QUERY);
  const moreBlogs = blogs.slice(1);

  const session = await auth();
  // console.log(session?.id);

  return (
    <>
      <div className="mt-2 overflow-hidden sm:pt-5 sm:pl-20 sm:pr-20 lg:pl-40 lg:pr-40 xl:pl-72 xl:pr-72 lg:ml-40 lg:mr-40">
        <h1 className="text-white text-4xl font-bold mb-4">Latest Blog</h1>
        <Hero blog={blogs[0]} />
        <div className="p-4">
          <h1 className="text-white text-4xl font-bold">More Blogs</h1>

          <div className="grid gap-3 mt-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {moreBlogs?.length > 0 ? (
              moreBlogs.map((blog: BlogTypeCard) => (
                <>
                  <BlogCard key={blog?._id} blog={blog} />
                </>
              ))
            ) : (
              <p className="text-white">Stay tuned for future blogs</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
