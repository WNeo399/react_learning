import Link from "next/link";
import NavSearch from "./NavSearch";

export default function NavBar() {
  return (
    <nav className="border-r-2 px-4 py-8 flex flex-col gap-2 items-start whitespace-nowrap">
      <NavSearch></NavSearch>
      <Link href="/">Home</Link>
      <h3>Basic</h3>
      <Link href="/studies/basic/layout">Layout</Link>
      <Link href="/studies/basic/fetch">Fetch</Link>
      <h3>React Hooks</h3>
      <Link href="/studies/hooks/useState">UseState</Link>
      <Link href="/studies/hooks/useEffect">UseEffect</Link>
      <h3>TypeScript in React</h3>
      <Link href="/studies/typescript/componentProps">Component Props</Link>
      <Link href="/studies/typescript/typeHooks">Type Hooks</Link>
      <h3>Demo Projects</h3>
      <Link href="/demoProjects/reactRouterApp">React Router App</Link>
    </nav>
  );
}
