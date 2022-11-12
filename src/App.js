import ITCActor from './components/ITCActor.js';
import ITCCoder from './components/ITCCoder.js';
import ITCIntro from './components/ITCIntro.js';
import ITCNavbar from './components/ITCNavbar.js';
import ITCTiles from './components/ITCTiles.js';
import ITCWriter from './components/ITCWriter.js';

function App() {
  return (
    <div className="App">
      <header className="pb-5 App-header">
        <ITCNavbar />
      </header>

      <ITCIntro className="pt-4 my-5" />
      <ITCTiles className="mb-8 my-5" />

      <section id="coder" className="bg-primary my-5 py-4">
        <ITCCoder className="py-5" />
      </section>

      <section id="writer" className="my-5 py-4">
        <ITCWriter className="py-5" />
      </section>

      <section id="actor" className="bg-primary my-5 py-4">
        <ITCActor className="py-5" />
      </section>
    </div>
  );
}

export default App;
