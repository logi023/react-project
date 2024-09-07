// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from 'react';

const Resister = () => {
  // const [name, setName] = useState('');
  // const [birth, setBirth] = useState('');
  // const [country, setCountry] = useState('');
  // const [bio, setBio] = useState('');

  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  })

  // const refObj = useRef(0);
  // console.log(refObj.current);

  const inputRef = useRef();

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      // 프로퍼티의 키를 명시하는 자리에 대괄호를 열고 대괄호 안에 e.target.name..!
      // 이렇게 새로운 객체를 만들면서 프로퍼티의 키 자리에 대괄호를 열고 그 안에 변수를 쓰면
      // 이 변수의 값이 프로퍼티의 키로서 설정이 됨.
      // 잘 모르겠다 그냥 받아들여....
    })
  }

  const onSubmit = () => {
    if(input.name === '') {
      // 이름을 입력하는 DOM 요소에 포커스
      // console.log(inputRef.current);
      inputRef.current.focus();
    }
  }

  // const onChangeName = (e) => {
  //   // setName(e.target.value);
  //   setInput({
  //     ... input,
  //     name: e.target.value,
  //   })
  // }
  // const onChangeBirth = (e) => {
  //   // setBirth(e.target.value);
  //   setInput({
  //     ... input,
  //     birth: e.target.value,
  //   })
  // }
  // const onChangeCountry = (e) => {
  //   // setCountry(e.target.value);
  //   setInput({
  //     ... input,
  //     country: e.target.value,
  //   })
  // }
  // const onChangeBio = (e) => {
  //   // setBio(e.target.value);
  //   setInput({
  //     ... input,
  //     bio: e.target.value,
  //   })
  // }

  return (
    <>
      <h1>회원가입</h1>
      <div>
        <input 
          name="name"
          ref={inputRef}
          onChange={onChange} 
          type="text" 
          placeholder="이름" 
          value={input.name}
        />
      </div>
      <div>
        <input 
          name="birth"
          type="date"
          onChange={onChange}
          value={input.birth}
        />
      </div>
      <div>
        <select 
          name="country"
          value={input.country} 
          onChange={onChange}
        >
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea
          name="bio"
          value={input.bio}
          onChange={onChange}
        ></textarea>
      </div>

      <button onClick={onSubmit}>제출</button>
    </>
  )
}
export default Resister;