import { auth, signOut, signIn } from "@/auth";
import { LogOut, PlusSquare, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import ThemeToggle from "./ThemeToggle";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-gray-400 dark:bg-black shadow-sm ">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <span className="text-white">aleksdraka blog</span>
        </Link>

        <div className="flex items-center gap-5 text-white">
          <ThemeToggle />
          {session && session?.user ? (
            <>
              <Link href="/blog/add">
                <PlusSquare className="size-6 text-green-500" />
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <LogOut className="size-6 text-red-500 mt-1" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>
                    <User className="mt-2" />
                  </AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit" className="text-black">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
