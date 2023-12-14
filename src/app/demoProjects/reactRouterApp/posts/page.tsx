"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const getPostData = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    // if (!resp.ok) throw new Error("Faild to fetch data!");
    const resPosts: Post[] = await resp.json();
    setPosts(resPosts);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div>
      <h1 className="text-6xl text-center p-12 font-bold">Posts</h1>
      <ul className="list-disc text-left">
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/demoProjects/reactRouterApp/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
