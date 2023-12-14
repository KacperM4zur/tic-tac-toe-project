import Player from "./components/Player.jsx";

function App() {


    return <main>
        <div id="game-container">
            <ol id="players">
              <Player initilName="Player 1" symbol="X"/>
              <Player initilName="Player 2" symbol="O"/>
            </ol>
            Game board
        </div>
    </main>
}

export default App
