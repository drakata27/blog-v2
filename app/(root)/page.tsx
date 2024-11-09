import BlogCard from "@/components/BlogCard";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mt-2 overflow-hidden sm:pt-5 sm:pl-20 sm:pr-20 lg:pl-40 lg:pr-40 xl:pl-72 xl:pr-72">
        <Hero />
        <div className="p-4">
          <h1 className="text-white text-4xl font-bold">Blogs</h1>

          <div className="grid gap-3 mt-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <Link href={"/"}>
              <BlogCard />
            </Link>
            <Link href={"/"}>
              <BlogCard />
            </Link>
            <Link href={"/"}>
              <BlogCard />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
