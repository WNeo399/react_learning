type genricisProps<T> = {
  countValue: T;
  countHistory: T;
};

export default function Generics<T>({
  countValue,
  countHistory,
}: genricisProps<T>) {
  // const convertToArray = <T,>(value: T) : T[]=>{
  //     return [value]
  // }

  function convertToArray<T>(value: T): T[] {
    return [value];
  }

  return <div>Generics</div>;
}
