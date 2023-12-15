# React Functional Components and Type Annotations

## Destructuring Props in Constructor

In a React functional component, the constructor takes a parameter representing props passed from the parent component. Props can be immediately destructured in the parameter list, while still describing them as an object. When dealing with many props, instead of explicitly writing types in the constructor, we can extract types using the `type` keyword.

```tsx
type Color = "red" | "blue" | "green";
type ButtonProps = {
  backgroundColor: Color;
  textColor: Color;
  fontSize: number;
  fontWeight?: number;
  pillShape?: boolean; // Making the variable optional
  padding: [number, number, number, number];
  borderRadius: {
    topLeft: number;
    topRight: Record<string, number>;
  };
};

export default function Button({
  backgroundColor,
  fontSize,
  pillShape,
}: ButtonProps) {
  return <button>Click Me</button>;
}
```



## JSX.Element Inference and Union Types

React functional constructors return a `JSX.Element`, which is automatically inferred. Instead of accepting any string, we can be more specific by using a union type. This union type can also be extracted.

```tsx
type Color = "red" | "blue" | "green";
type ButtonProps = {
  style: React.CSSProperties;
  onClick: (test: string) => number;
};

export default function Button({ style, onClick }: ButtonProps) {
  return (
    <button style={style} onClick={onClick("xx")}>
      Click Me
    </button>
  );
}

```



## Using React.CSSProperties and Children Prop

Instead of specifying properties separately, we can use a single object. React also provides types like `React.CSSProperties` that we can utilize. If the component has content between its opening and closing tags, we need to accept it as a prop called `children`. The content is assigned to `children`, which is of type `React.ReactNode`. If only elements are allowed, we can use the type `JSX.Element`.



```tsx
type ButtonProps = {
  style: React.CSSProperties;
  onClick: (test: string) => number;
};

export default function Button({ style, onClick }: ButtonProps) {
  return (
    <button style={style} onClick={onClick("xx")}>
      Click Me
    </button>
  );
}
```



## Element attributes, Spread operator and Intersect

A HTML element can have many attributes, for example, a button has attributes like type, autoFocus... When we have a component wrapping a native element, we want to allow all those attributes to be passed like a prop. React provides a helper type called `React.ComponentProps<>`. Inside the `< >`, we can specify which element it should be. If the ref is forwarded, we prefer `ComponentPropsWithRef<>` or `ComponentPropsWithoutRef<>` if refs are not supported.

In JavaScript, we also have the spread operator `...rest` which wraps everything else in an array. So that we only need to spread it on our native element.

If we want something else that is not an attribute, we can use `&` to intersect and add additional stuff inside {}.

```tsx
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
  return (
    <button
      style={style}
      onClick={() => handleClick("xx")}
      type={type}
      autoFocus={autoFocus}
      {...rest}
    >
      {children}
    </button>
  );
}

```



## Type event handler

If we specify the event handler inline using an arrow function like `onClick={(event) => { console.log(event) }}`, we don't have to type the parameter event ourselves; it is automatically typed by TypeScript. But if we have the exact function extracted, TypeScript cannot easily infer a type here, and now we need to type it ourselves. The event handler is typed as `React.MouseEvent<HTMLButtonElement, MouseEvent>`. By hovering the inline version in VSCode, we can see and copy that type.



```tsx
import React from "react";

export default function Button() {
  const handleMouseOver = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(event);
  };

  return (
    <button
      onMouseOver={handleMouseOver}
    >
    </button>
  );
}

```

These conventions help in writing clear and type-safe React components.

