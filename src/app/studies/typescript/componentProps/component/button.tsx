import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  style: React.CSSProperties;
  handleClick: (test: string) => number;
  children: JSX.Element;
};

export default function Button({
  style,
  handleClick,
  children,
  type,
  autoFocus,
  ...rest
}: ButtonProps) {
  const handleMouseOver = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(event);
  };

  return (
    <button
      style={style}
      onClick={() => handleClick("xx")}
      type={type}
      autoFocus={autoFocus}
      onMouseOver={(e) => {
        console.log(e);
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
