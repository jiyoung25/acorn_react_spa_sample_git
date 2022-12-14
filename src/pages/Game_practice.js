// pages/Game.js

const Game = ({match}) => {

    const gameStyle = {
        backgroundColor: "yellow",
        height: "300px"
    };

    let gameName = match.params.name;
    console.log(gameName);
    if(!gameName){
        gameName = "기본";
    }

    return(
        <div style={gameStyle}>
            <h3>game페이지입니다.</h3>
            <p><strong>{gameName}</strong> 게임을 시작합니다. </p>
        </div>
    );
}

export default Game;