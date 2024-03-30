'use client';

import Image from 'next/image';
import {useState} from 'react';
import Title from './components/Title';
import Todo from './components/Todo';

function hello() {}

export default function Home() {
  const todoSize = 10; // 기본 체크리스트 개수
  const [titleValue, setTitleValue] = useState<string>(); //제목값 스트링타입을 쓰겠다
  const [todoValues, setTodoValues] = useState<string[]>( // 체크리스트값 스트링타입을 쓰겠다
    new Array(todoSize).fill(''),
  );

  // 저장하면 로그찍기
  function save() {
    console.log(titleValue, todoValues);
  }

  // 키를 누르면 발생하는 함수
  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>, i: number) {
    // 엔터키를 누르면
    if (e.key === 'Enter') {
      console.log('enter');

      // 새로운 체크리스트 추가
      let newTodoValues = todoValues.concat(''); // 공백 체크리스트 추가됨
      // 체크리스드 공백값 넣어주기
      setTodoValues(newTodoValues);

      // 50밀리세컨드 0.05초 후에 포커스를 다음 체크리스트에 해라.
      setTimeout(() => {
        focusAt(i + 1);
      }, 50);
    }
  }

  function focusAt(index: number) {
    document.getElementsByClassName('todo-input')[index].focus();
  }

  return (
    <section>
      <Title
        value={titleValue}
        onInput={e => {
          setTitleValue(e.currentTarget.value);
        }}
      />
      {todoValues.map((_, i) => {
        return (
          <Todo
            key={i}
            value={todoValues[i]}
            onInput={e => {
              let temp = Array.from(todoValues);
              temp[i] = e.currentTarget.value;
              setTodoValues(temp);
            }}
            onKeyDown={e => {
              onKeyDown(e, i);
            }}
          />
        );
      })}
      <button type="button" onClick={save}>
        언제자시발
      </button>
    </section>
  );
}
