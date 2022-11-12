import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ITCTile from './ITCTile.js';

function ITCTiles(props) {
  const tiles = [
    {
      content: 'Full-stack web developer with experience in JavaScript, TypeScript, Node, Express, Vue, Angular, React, Postgres, GraphQL and more.',
      link: 'coder',
      title: 'Web Developer',
    },
    {
      content: 'Harnessing my wordlicking powers to weave tales of adventure, express the adventure of life, and to gather record of how to live it to the fullest!',
      link: 'writer',
      title: 'Writer',
    },
    {
      content: 'Though living in worlds of imagination, the emotions are real. And if, in turn, I can cause you to feel something too, that\'s what it\'s all about.',
      link: 'actor',
      title: 'Actor',
    },
  ]

  return (
    <Container fluid className={props.className}>
      <div className="tiles">
        {tiles.map(( tile, index ) => (
          <ITCTile tile={tile} index={index} />
        ))}
      </div>
    </Container>
  );
}

export default ITCTiles;
