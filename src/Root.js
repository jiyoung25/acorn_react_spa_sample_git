
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const Root = () => {
    return(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

// App을 감싼 browserRouter를 랜더링해주는 root component 리턴하기
export default Root