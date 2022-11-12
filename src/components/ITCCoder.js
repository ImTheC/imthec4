import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import TwelfthManImg from '../assets/images/12thman.png';
import ArtistChristaImg from '../assets/images/artistchrista.gif';
import CheckThePostersImg from '../assets/images/checktheposters.gif';
import ImTheCImg from '../assets/images/imthec.gif';
import ISFImg from '../assets/images/isf.png';
import LinkedInImg from '../assets/images/linkedin.png';
import GitHubImg from '../assets/images/octocat.png';

function ITCCoder(props) {
  const projects = [
    {
      title: '12th Man Foundation',
      description: 'Built using the Angular(2+) framework in Typescript / Javascript (ES6). I was responsible for architecting, scoping, and coding the frontend and leading a small team of developers.',
      image: TwelfthManImg,
    },
    {
      title: 'Artist Christa',
      description: 'A single page portfolio website for artist Christa Anderson, created using HTML, CSSSASS, Bootstrap, and jQuery.',
      image: ArtistChristaImg,
    },
    {
      title: 'Check The Posters',
      description: 'A site to display posters of events happening. The backend was created using Express, Node and Postgres, utilizing RESTful routes and the frontend was created using HTML, CSS, Materialize.',
      image: CheckThePostersImg,
    },
    {
      title: 'ImTheC',
      description: 'A single page portfolio website created using React, HTML, CSS, and Material-UI.',
      image: ImTheCImg,
    },
    {
      title: 'International Sports Federation',
      description: 'A Wordpress site with custom plugins.',
      image: ISFImg,
    },
    {
      title: 'LinkedIn',
      description: 'Christopher Anderson\'s LinkedIn profile.',
      image: LinkedInImg,
    },
    {
      title: 'GitHub',
      description: 'Christopher Anderson\'s GitHub account.',
      image: GitHubImg,
    }
  ]

  return (
    <Container className={props.className}>
      <Row>
        <Col>
          <h1 className="text-white">Coder</h1>
          <p class="is-size-7 font-weight-light text-white">Previous Projects Include:</p>
        </Col>
      </Row>

      <Row>
        {projects.map(project => {
          return (
            <Col className="my-4">
              <Card style={{ width: '18rem', height: '100%' }}>
                {project.image && <Card.Img variant="top" src={project.image}/>}
                <Card.Body>
                  <Card.Title>
                    <h2 className="my-2 text-center">
                      {project.title}
                    </h2>
                  </Card.Title>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>

    </Container>
  );
}

export default ITCCoder;
