import ITCNavbar from './components/ITCNavbar.js';
import ITCIntro from './components/ITCIntro.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ITCNavbar />
      </header>

      <ITCIntro className="mt-5" />
      <ITCTiles className="mb-5" />
    </div>
  );
}

export default App;
