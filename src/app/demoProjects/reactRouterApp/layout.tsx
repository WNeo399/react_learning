"use client";
import Link from "next/link";
// import NavLink from "@/app/components/NavLink";
import { usePathname } from "next/navigation";

export default function layout({ children }: { children: React.ReactNode }) {
  const navLink = [
    {
      title: "Home",
      path: "/demoProjects/reactRouterApp",
    },
    {
      title: "About Page",
      path: "/demoProjects/reactRouterApp/aboutPage",
    },
    {
      title: "Posts",
      path: "/demoProjects/reactRouterApp/posts",
    },
  ];
  const pathName = usePathname();
  return (
    <main className="w-full">
      <div className="min-h-screen flex flex-col justify-center items-center">
        {/* <NavLink activeClassName="aaa" href="/"></NavLink> */}
        <ul className="flex bg-slate-200 rounded px-8 py-4 text-lg w-full gap-8">
          {navLink.map((nav) => {
            return (
              <li key={nav.path}>
                <Link
                  href={nav.path}
                  className={`${
                    pathName == nav.path
                      ? "text-blue-800 font-bold"
                      : "text-blue-500"
                  } hover:text-blue-700`}
                >
                  {nav.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {children}
      </div>
    </main>
  );
}
