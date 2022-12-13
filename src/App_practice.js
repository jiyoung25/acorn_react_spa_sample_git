import { NavLink, Route, withRouter } from "react-router-dom";
import { Home, Study, Game, Buy } from "./pages";

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
        history.push("/study");
      }}>공부하러 가기</button>
      <ul>
        <li><NavLink to="/">home</NavLink></li>
        <li><NavLink to="/study">study</NavLink></li>
        <li><NavLink to="/game">game</NavLink></li>
        <li><NavLink to="/game/starcraft" activeStyle={activeStyle}>game_starcraft</NavLink></li>
        <li><NavLink to="/game/mario" activeStyle={activeStyle}>game_mario</NavLink></li>
        <li><NavLink to="/buy?code=1&name=handphone"></NavLink></li>
        <li><NavLink to="/buy?code=2&name=water"></NavLink></li>
        <li><NavLink to="/buy?code=4&name=coffee"></NavLink></li>
      </ul>
      <Route exact path = "/" component={Home}></Route>
      <Route exact path = "/study" component={Study}></Route>
      <Route exact path = "/game" component={Game}></Route>
      <Route exact path = "/game/:name" component={Game}></Route>
      <Route exact path = "/buy" component={Buy}></Route>
    </div>
  );
}


//withRouter()함수를 호출해서 export해주면 Router에 관련된 props가 이 컴포넌트에 전달된다.
export default withRouter(App);