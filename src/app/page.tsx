'use client';

import Image from 'next/image';
import {useState} from 'react';
import Title from './components/Title';
import Todo from './components/Todo';
import {HtmlContext} from 'next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints';

function hello() {}

export default function Home() {
  const [titleValue, setTitleValue] = useState<string>(); //제목값 스트링타입을 쓰겠다
  const [todoValues, setTodoValues] = useState<string[]>(new Array()); // 체크리스트값 스트링타입을 쓰겠다

  // 저장하면 로그찍기
  function save() {
    console.log(titleValue, todoValues);
  }

  function add(i: number) {
    // 새로운 체크리스트 추가
    let newTodoValues = todoValues.concat(''); // 공백 체크리스트 추가됨
    // 체크리스드 공백값 넣어주기
    setTodoValues(newTodoValues);

    // 50밀리세컨드 0.05초 후에 포커스를 다음 체크리스트에 해라.
    setTimeout(() => {
      focusAt(i + 1);
    }, 50);
  }

  // 키를 누르면 발생하는 함수
  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>, i: number) {
    // 엔터키를 누르면
    if (e.key === 'Enter') {
      console.log('enter');
      add(i);
    }
  }

  // 포커스 함수
  function focusAt(index: number) {
    // 원하는 순서의 인풋태그에 포커스 하겠다. 다른데서 호출해서 사용
    let a = document.querySelectorAll('.todo-input')[index] as HTMLElement;
    a.focus();
  }

  function remove(i: number) {
    // 체크리스트 배열을 가져온다. 다른 값이라고 인식해서 새로고침하기위해  Array.from 으로 묶는다.
    let nowValue: string[] = Array.from(todoValues);
    // 가져오느 체크리스트에서 제외하고싶은 배열번호, 그로부터 몇개 삭제. splice함수를 사용한다.
    nowValue.splice(i, 1);
    // 수정한 체크리스트를 세터로 넣는다.
    setTodoValues(nowValue);
  }

  function clickAdd(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // 지금 데이터 개수보다 하나 큰 개수로 투두리스트 생성
    const nowDataCount: number = todoValues.length; // 지금 데이터 개수
    const todoListCount: number = nowDataCount;
    add(todoListCount);
  }
  return (
    <section>
      <Title
        value={titleValue}
        onInput={e => {
          setTitleValue(e.currentTarget.value); // 제목값을 넣어준다.
        }}
      />
      <div>
        <button type="button" onClick={clickAdd}>
          추가
        </button>
      </div>
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
            remove={e => {
              remove(i);
            }}
          />
        );
      })}
      <button type="button" onClick={save}>
        저장
      </button>
    </section>
  );
}
