import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import getAllUsers from "@/lib/basic/fetch/getAllUsers";

export const metadata: Metadata = {
  title: "Fetch Data",
};

export default async function FetchData() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const content = (
    <section>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>
              <Link href={`/studies/basic/fetch/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </div>
        );
      })}
    </section>
  );
  return content;
}
