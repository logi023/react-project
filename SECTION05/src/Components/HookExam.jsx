// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수 없다 (조건문, 반복문 내부에서 X)
// 3. 커스텀 훅을 직접 만들 수 있다.

import { useState } from 'react';

// 커스텀훅 예시
function useInput() { // use로 시작하기만하면됨 ㅎ
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

const HookExam = () => {
  const [input, onChange] = useInput();

  return (
    <>
      <div>
        <input value={input} onChange={onChange} />
      </div>
    </>
  )
}
export default HookExam;