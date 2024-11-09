import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div className="mt-2 overflow-hidden sm:pt-5 sm:pl-20 sm:pr-20">
        <Hero />
        <div className="p-4">
          <h1 className="text-white text-4xl font-bold">Blogs</h1>
        </div>
      </div>
    </>
  );
}
