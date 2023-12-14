"use client";
import Button from "./component/button";

export default function ComponentProps() {
  const onClick = (test: string) => {
    return 5;
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Button
        style={{
          backgroundColor: "blue",
          color: "white",
          fontSize: 30,
          padding: "10px 20px 10px 20px",
        }}
        onClick={onClick}
      >
        <div>Click Me</div>
      </Button>
    </div>
  );
}
