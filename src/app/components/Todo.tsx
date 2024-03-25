import React from 'react';

type Props = {
  value?: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

function Todo({value, onInput, onKeyDown}: Props) {
  return (
    <div>
      <input type="checkbox" />
      <input
        className="todo-input"
        type="text"
        value={value}
        onInput={onInput}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default Todo;
