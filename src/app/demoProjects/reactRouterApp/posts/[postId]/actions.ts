"use server";

export async function addComment(prevState: any, formData: FormData) {
  // ...
  // console.log(formData.get("comment"));
  const comment = String(formData.get("comment"))
  return {
    id: 1000,
    body: comment
  };
}
