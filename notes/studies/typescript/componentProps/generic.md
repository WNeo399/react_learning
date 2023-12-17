# Generics in TypeScript

Generics in TypeScript allow us to specify a relationship between types. In the following example, the input and output types of a function are the same. Instead of hard-coding a specific type, we can use a type parameter `T` to indicate that the input and output are of the same type. When working with functions, we declare the type parameter before the list of parameters, and this is referred to as a type parameter.

For example, when using an arrow function in TypeScript JSX (TSX), which is essentially compiled into JSX, we need to use `<T,>` to indicate the presence of a type parameter. While this syntax may appear cumbersome, it is necessary to convey that the function has a type parameter. However, traditional function syntax does not require this additional comma and may be preferred for its cleaner appearance.

Generics can also be applied to specify relationships in component props. In this case, `<T>` is placed before the parameter list in the constructor to indicate that the component uses a type parameter. When extracting the prop type into a separate type, it's important to pass the type parameter from the type name to the type definition.

```tsx
type GenericsProps<T> = {
    countValue: T;
    countHistory: T;
};

export default function Generics<T>({ countValue, countHistory }: GenericsProps<T>) {

  // const convertToArray = <T,>(value: T) : T[]=>{
  //     return [value]
  // }

  function convertToArray<T>(value: T): T[] {
    return [value];
  }

  return <div>Generics</div>;
}