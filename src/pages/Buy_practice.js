
// pagesBuye.js

import qs from "query-string";

const Buy = ({location}) => {

    //location을 구조분해 할당을 받아서 search라는 방 안에 있는 문자열 확인하기
    console.log(location.search);
    const parsed = qs.parse(location.search);
    console.log(parsed);

    const buyStyle = {
        backgroundColor:"#cecece",
        height:"300px"
    };

    return(
        <div style = {buyStyle}>
            <h3>Buy페이지입니다.</h3>
            <p>
                <strong>{parsed.code}</strong>번 상품
                <strong>{parsed.name}</strong>을 주문하였습니다.
            </p>
        </div>
    );
}

export default Buy;