import qs from "query-string";

const Buy = ({location}) => {
    const buyStyle = {
        backgroundColor:"#cecece",
        height: "300px"
    };

    let parsed=qs.parse(location.search);
    console.log(parsed);

    return(
        <div className={"container"} style={buyStyle}>
            <h3>구매 페이지입니다.</h3>
            <p><strong>{parsed.code}</strong>번 상품인 <strong>{parsed.name}</strong>을 구매하셨습니다.</p>
        </div>
    );
}

export default Buy;