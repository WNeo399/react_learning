"use client";
import Button from "./component/button";

export default function ComponentProps() {
  const handleClick = (test: string) => {
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
        handleClick={handleClick}
        type="submit"
        autoFocus={true}
        defaultValue="tesx"
        className="btn"
      >
        <div>Click Me</div>
      </Button>
    </div>
  );
}
