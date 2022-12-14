
//pages폴더를 import해서 Home, Study, Game을 모두 사용할 수 있도록 설정하기
import {default as Home} from "./Home";
import {default as Game} from "./Game.js"; //확장자명인 js는 붙여도 안붙여도 된다.
import {default as Study} from "./Study";
import {default as Buy} from "./Buy";
import {default as LoginPage} from "./LoginPage";

export { Home, Game, Study, Buy, LoginPage };