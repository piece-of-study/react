import React from "react";

interface Props {
    value?: string;
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void ;
}

export default function Title({value,onInput}:Props) {
    return (
      <input type="text" value={value} onInput={onInput}/>
    );
}