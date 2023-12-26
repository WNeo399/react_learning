import { memo } from "react";

type searchProps = {
  onChange: (filterInput: string) => void;
};

function Search({ onChange }: searchProps) {
  console.log("xxx");
  return (
    <input
      type="text"
      onChange={(e) => {
        onChange(e.target.value);
      }}
      placeholder="Search User..."
    />
  );
}

export default memo(Search);
