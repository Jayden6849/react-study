import { useState, useRef } from "react";

// 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {

    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });

    const countRef = useRef(0);

    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;

        setInput({
            ...input, // spread 방식으로 관련없는 값은 기본값을 그대로 넣어줌
            [e.target.name] : e.target.value, // 변경하고자 하는 값만 덮어씀 (name 속성 기준으로..)
        });
    };

    const onSubmit = () => {
        if(input.name === "") {
            // 이름을 입력하는 DOM 요소에 Focus
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <div>
                <label htmlFor="member-name">이름 : </label>
                <input type="text" name="name" id="member-name" ref={inputRef} placeholder="이름을 입력하세요." onChange={onChange} value={input.name}/>
            </div>
            <div>
                <label htmlFor="member-birth">생년월일 : </label>
                <input type="date" name="date" id="member-birth" onChange={onChange} value={input.birth}></input>
            </div>
            <div>
                <label htmlFor="member-country">국적 : </label>
                <select name="country" id="member-country" onChange={onChange} value={input.country}>
                    <option>선택</option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <label htmlFor="member-bio">자기소개<br/></label>
                <textarea name="bio" id="memberbio" onChange={onChange} value={input.bio} />
            </div>

            <button onClick={onSubmit}>제출</button>
        </div> 
    );

};

export default Register;