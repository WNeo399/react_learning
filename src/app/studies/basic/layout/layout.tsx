import React from "react";

export default function LayoutExample({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        LayoutExample
        {children}
      </div>
    </>
  );
}
