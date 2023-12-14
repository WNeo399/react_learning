import React from "react";

type ButtonProps = {
  style: React.CSSProperties;
  onClick: (test: string) => number;
  children: JSX.Element;
};

export default function Button({ style, onClick, children }: ButtonProps) {
  return (
    <button style={style} onClick={() => onClick("xx")}>
      {children}
    </button>
  );
}
