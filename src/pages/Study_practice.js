// pages/Study.js

import { NavLink } from "react-router-dom";

const Study = () => {
    const studyStyle = {
        backgroundColor:"blue",
        height:"300px",
        color:"white"
    };

    return(
        <div style = {studyStyle}>
            <h3>study페이지입니다.</h3>
            <p>어쩌구 저쩌구</p>
            <NavLink to="/">홈으로</NavLink> {/* App.js에 나타나는 link이므로 App.js기준으로 "/"경로로 이동한다. */}
        </div>
    );
}

export default Study;