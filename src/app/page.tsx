'use client';

import Image from 'next/image';
import {useState} from 'react';
import Title from './components/Title';
import Todo from './components/Todo';

function hello() {}

export default function Home() {
  const todoSize = 10;
  const [titleValue, setTitleValue] = useState<string>();
  const [todoValues, setTodoValues] = useState<string[]>(
    new Array(todoSize).fill(''),
  );

  function save() {
    console.log(titleValue, todoValues);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      console.log('enter');

      // String a =
      let newTodoValues = todoValues.concat('');
      setTodoValues(newTodoValues);
    }
  }

  function focusAt(index: number) {}

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
            onKeyDown={onKeyDown}
          />
        );
      })}
      <button type="button" onClick={save}>
        언제자시발
      </button>
    </section>
  );
}
