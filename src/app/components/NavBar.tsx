import Link from "next/link";
import NavSearch from "./NavSearch";

export default function NavBar() {
  const navList = [
    {
      title: "",
      links: [{ label: "Home", href: "/" }],
    },
    {
      title: "Basic",
      links: [
        { label: "Layout", href: "/studies/basic/layout" },
        { label: "fetch", href: "/studies/basic/fetch" },
      ],
    },
    {
      title: "React Hooks",
      links: [
        { label: "UseState", href: "/studies/hooks/useState" },
        { label: "UseEffect", href: "/studies/hooks/useEffect" },
      ],
    },
    {
      title: "TypeScript in React",
      links: [
        {
          label: "Component Props",
          href: "/studies/typescript/componentProps",
        },
        { label: "Type Hooks", href: "/studies/typescript/typeHooks" },
      ],
    },
    {
      title: "Demo Projects",
      links: [
        { label: "React Router App", href: "/demoProjects/reactRouterApp" },
      ],
    },
  ];
  return (
    <nav className="border-r-2 px-4 py-8 flex flex-col gap-2 items-start whitespace-nowrap">
      <NavSearch></NavSearch>
      {navList.map((section, index) => {
        return (
          <div key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((navItem) => (
                <li key={navItem.href}>
                  <Link className="dynamic-underline" href={navItem.href}>
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      {/* <Link className="dynamic-underline" href="/">
        Home
      </Link>
      <h3>Basic</h3>
      <Link className="dynamic-underline" href="/studies/basic/layout">
        Layout
      </Link>
      <Link className="dynamic-underline" href="/studies/basic/fetch">
        Fetch
      </Link>
      <h3>React Hooks</h3>
      <Link className="dynamic-underline" href="/studies/hooks/useState">
        UseState
      </Link>
      <Link className="dynamic-underline" href="/studies/hooks/useEffect">
        UseEffect
      </Link>
      <h3>TypeScript in React</h3>
      <Link
        className="dynamic-underline"
        href="/studies/typescript/componentProps"
      >
        Component Props
      </Link>
      <Link className="dynamic-underline" href="/studies/typescript/typeHooks">
        Type Hooks
      </Link>
      <h3>Demo Projects</h3>
      <Link className="dynamic-underline" href="/demoProjects/reactRouterApp">
        React Router App
      </Link> */}
    </nav>
  );
}
