import ITCNavbar from './components/ITCNavbar.js';
import ITCIntro from './components/ITCIntro.js';
import ITCTiles from './components/ITCTiles.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ITCNavbar />
      </header>

      <ITCIntro className="my-5" />
      <ITCTiles className="mb-8 my-5" />
    </div>
  );
}

export default App;
