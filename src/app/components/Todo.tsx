import React from 'react'

type Props = {
    value?:string
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Todo({value,onInput}: Props) {
  return (
    <div>
    <input type='checkbox' />
    <input type="text" value={value} onInput={onInput} />
    </div>
  )
}

export default Todo