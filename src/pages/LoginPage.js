// /pages/LoginPage.js

import React from "react";
//object안에 있는 내용을 query string의 형태로 변환하기 위해
import qs from "query-string";

const LoginPage = () => {
    //formData는 현재 state값
    //setFormData는 formData를 수정할 때 사용하는 함수
    const [formData, setFormData] = React.useState({
        id:"",
        pwd:""
    });
    
    //input요소의 value값이 변경될 때마다 호출되는 함수
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]:value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //페이지 전환없이 서버에 post방식으로 id와 pwd를 전송하고 응답받기
        //만약 get방식이면 fetch("http://localhost:8888/Step04_Final/users/ajax_login.jsp?id=xxx&pwd=xxx") 이렇게 하면 됨
        fetch("http://localhost:8888/Step04_Final/users/ajax_login.jsp", {
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"}, //header이 아니라 headers!
            body:qs.stringify(formData) //id=xxx&pwd=xxx를 body에 태워 보냄
        })
        .then(response => response.json())
        .then((data) => {
            if(data.isValid){
                alert("로그인되었습니다.");
            } else{
                alert("아이디 혹은 비밀번호가 틀립니다.");
            }
        })
    }

    return(
        <div className="container">
            <h3>로그인 폼입니다.</h3>
            <form onSubmit = {handleSubmit}>
                <input onChange={handleChange} type="text" name = "id" placeholder="아이디 입력..." />
                <input onChange={handleChange} type="text" name = "pwd" placeholder="비밀번호 입력..." />
                <button type="submit">로그인</button>
            </form>
            {/* object안에 있는 내용을 문자열화 시켜서 출력해보기 */}
            <p>
                {JSON.stringify(formData)}
                {qs.stringify(formData)}
            </p>
        </div>
    );
}

export default LoginPage;