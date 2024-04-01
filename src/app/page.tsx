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
  // 포커스 함수
  function focusAt(index: number) {
    // 원하는 순서의 인풋태그에 포커스 하겠다. 다른데서 호출해서 사용
    document.getElementsByClassName('todo-input')[index].focus();
  }

  return (
    <section>
      <Title
        value={titleValue}
        onInput={e => {
          setTitleValue(e.currentTarget.value); // 제목값을 넣어준다.
        }}
      />
      {todoValues.map((_, i) => {
        return (
          <Todo
            key={i}
            value={todoValues[i]}
            onInput={e => {
              let temp: string[] = Array.from(todoValues); // 리액트는 입력해도 주소값이 같으면 같은걸로 인식해서 화면이 바뀌지 않는다. 그래서 array.from을 쓰면 값을 복사할 수 있다. 주소값이 다르게. todoValues는 빈공간 10개 위에서 정의함.
              temp[i] = e.currentTarget.value; //  지금 입력한 깂이 i번째에 들어간다.
              setTodoValues(temp); // 현재 값을 넣어준다.
            }}
            onKeyDown={e => {
              // 키보드를 어떤걸 눌렀는지 알기위해 추가한 함수, 엔터 누름 여부를 위함
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
