import React from 'react';

// 변수들의 타입 명시
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
        value={value} // 값
        onInput={onInput} // 입력창에 뭘 입력하면 함수
        onKeyDown={onKeyDown} // 키 누를때 함수
      />
    </div>
  );
}

// 다른곳에서 임포트하기 위해 사용하는데 export야.
export default Todo;
