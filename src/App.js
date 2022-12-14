import { NavLink, Route, withRouter } from "react-router-dom";
import { Home, Study, Game, Buy, Login } from "./pages";

function App({location, match, history}) {

  

  //active되었을 때 어떤 css를 적용할지 미리 정한 다음에 적용시킬 수 있다.
  const activeStyle = {
    color:"red",
    fontWeight: "bold"
  }

  return (
    <div className="container">
      <h1>React Router</h1>
      <button onClick={() => {
        //App함수의 인자로 전달받은 history객체의 push함수에 이동할 경로를 적으면 NavLink처럼 button도 경로 이동 가능
        history.push("/study"); 
      }}>공부 하러 가기</button>
      <ul>
        <li><NavLink activeStyle={activeStyle} to="/">home</NavLink></li>
        <li><NavLink activeStyle={activeStyle} to="/study">study</NavLink></li>
        <li><NavLink activeStyle={activeStyle} to="/game">game 홈</NavLink></li>
        <li><NavLink activeStyle={activeStyle} to="/game/starcraft">game starcraft</NavLink></li>
        <li><NavLink activeStyle={activeStyle} to="/game/mario">game mario</NavLink></li>
        <li><NavLink activeStyle={activeStyle} to="/buy?code=1&name=handphone">1번 상품 구매</NavLink></li>
        <li><NavLink activeStyle={activeStyle} to="/buy?code=2&name=water">2번 상품 구매</NavLink></li>
        <li><NavLink activeStyle={activeStyle} to="/buy?code=4&name=coffee">3번 상품 구매</NavLink></li>
        <li><NavLink activeStyle={activeStyle} to="/login">로그인</NavLink></li>
      </ul>
      <Route exact path="/" component={Home}/>
      <Route exact path="/study" component={Study}/>
      <Route exact path="/game" component={Game}/>
      <Route path="/game/:name" component={Game}/> {/* name이라는 이름의 경로 파라미터를 읽을 수 있도록 설정하기, 이럴땐 exact빼기 */}
      <Route exact path = "/login" component = {Login}/>
      <Route exact path="/buy" component={Buy}/>
    </div>
  );
}


//withRouter()함수를 호출해서 export해주면 Router에 관련된 props가 이 컴포넌트에 전달된다.
export default withRouter(App);