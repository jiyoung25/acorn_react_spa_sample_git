import { NavLink, Route, withRouter } from "react-router-dom";
import { Home, Study, Game, Buy } from "./pages";

function App_p({location, match, history}) {

  const activeStyle = {
    color:"red",
    fontWeight: "bold"
  }

  return (
    <div className="container">
      <h1>react router</h1>
      <button onClick={() => {
        history.push("/study")
      }}>
        공부하기
      </button>
      <ul>
        <li><NavLink to = "/" activeStyle={activeStyle}>홈으로</NavLink></li>
        <li><NavLink to = "/study" activeStyle={activeStyle}>공부</NavLink></li>
        <li><NavLink to = "/game" activeStyle={activeStyle}>게임</NavLink></li>
        <li><NavLink to = "/game/starcraft" activeStyle={activeStyle}>게임(스타)</NavLink></li>
        <li><NavLink to = "/game/mario" activeStyle={activeStyle}>게임(마리오)</NavLink></li>
        <li><NavLink to = "/buy?code=1&name=handphone" activeStyle={activeStyle}>구매1</NavLink></li>
        <li><NavLink to = "/buy?code=2&name=water" activeStyle={activeStyle}>구매2</NavLink></li>
        <li><NavLink to = "/buy?code=4&name=battery" activeStyle={activeStyle}>구매3</NavLink></li>
      </ul>
      <Route exact path = "/study" component={Study} />
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/game/" component = {Game} />
      <Route path = "/game/:name" component = {Game} />
      <Route exact path = "/buy" component = {Buy} />
    </div>
  );
}

export default withRouter(App_p);