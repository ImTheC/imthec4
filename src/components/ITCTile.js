import Image from 'react-bootstrap/Image'

import Pic02 from '../assets/images/pic02.jpg';
import Pic07 from '../assets/images/pic07.jpg';
import Pic08 from '../assets/images/pic08.jpg';

const images = {
  1: Pic02,
  2: Pic07,
  3: Pic08,
}

function ITCTile(props) {

  const styleNumber = Math.ceil((props.index) % 3) + 1;

  return (
    <article className={`style${styleNumber}`}>
      <span className="image">
        <Image src={images[styleNumber]} alt="Background image" />
      </span>
      <a href="#coder">
        <h2 className="is-size-3">{props.tile.title}</h2>
        <div className="content">
          <p>{props.tile.content}</p>
        </div>
      </a>
    </article>
  );
}

export default ITCTile;
