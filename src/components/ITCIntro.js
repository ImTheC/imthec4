import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';

import ImTheCProfileImg from '../assets/images/imthec_profile.png';

function ITCIntro(props) {
  return (
    <Container className={props.className}>
      <Row className="text-center">
        <Col xs={12} md={4}>
          <Image
            src={ImTheCProfileImg}
            alt="Christopher Anderson's Profile Picture"
            className="mb-4 w-100"
            roundedCircle
          />
        </Col>
        <Col xs={12} md={8}>
          <p className="font-weight-light is-size-5">
            As a <span class="font-weight-bold text-primary">web developer</span>, I creatively solve problems and bring life to ideas.
          </p>
          <p className="font-weight-light is-size-5">
            As a <span class="font-weight-bold text-primary">writer</span>, I express life and breathe into existence worlds of imagination.
          </p>
          <p className="font-weight-light is-size-5">
            As an <span class="font-weight-bold text-primary">actor</span>, I breathe and feel and  live in other artists' worlds, drawing you into the story, in hopes to entertain and inspire.
          </p>
          <p className="font-weight-light is-size-5">
            <span class="font-weight-bold text-primary">I'm The C</span>, otherwise known as <span class="span_p">Christopher</span>.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ITCIntro;
