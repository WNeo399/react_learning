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

These conventions help in writing clear and type-safe React components.

