import React from 'react';

interface Props {
  value?: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
// export default 이걸  기본으로 export하겠다.
export default function Title({value, onInput}: Props) {
  // value라는 변수와, onInput이라는 변수의 타입은 Props 인터페이스에 설정되어있음
  return <input type="text" value={value} onInput={onInput} />;
  // 사싣 함수를 호출하면 input 태그를 리턴함. 값은 value임. 입력값은 OnInput임
}
