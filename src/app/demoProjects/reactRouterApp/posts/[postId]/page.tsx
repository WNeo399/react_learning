"use client";
type Params = {
  params: {
    postId: string;
  };
};

import React, { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { addComment } from "./actions";

export default function ViewPost({ params: { postId } }: Params) {
  //   const [comment, setComment] = useState("");
  const [post, setPost] = useState<Post>({
    userId: 0,
    id: 0,
    title: "",
    body: "",
  });

  const initialState = {
    id: -1,
    body: "",
  };

  const [state, formAction] = useFormState(addComment, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const getpost = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    //   if (!res.ok) {
    //     throw new Error("Falid to fetch data!");
    //   }
    const resPost: Post = await res.json();
    console.log(resPost);
    setPost(resPost);
  };

  useEffect(() => {
    getpost();
  }, []);

  return (
    <div>
      <h1 className="text-6xl text-center p-12 font-bold">{post.title}</h1>
      <p>{post.body}</p>
      <hr className="my-12" />
      <h2 className="text-2xl font-bold">Comments</h2>
      <form action={formAction}>
        <textarea
          name="comment"
          className="w-full h-24 my-4 border border-slate-300 text-black"
          placeholder="Write a Comment"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>

      <hr className="my-12" />

      {state.id != -1 && (
        <>
          <h2 className="text-2xl font-bold">Comment #{state.id}</h2>
          <p>{state.body}</p>
        </>
      )}
    </div>
  );
}
