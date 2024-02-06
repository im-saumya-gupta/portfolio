import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.jpeg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Tilt from "react-tilt";

const About = () => {
  return (
    <div>
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2">
                <Tilt options={{ max: 5, scale: 1 }}>
                  <Image
                    className="profile justify-content-end"
                    alt="profile"
                    src={Profile}
                    thumbnail
                    fluid
                  />
                </Tilt>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Saumya Gupta</strong>
                <br />A passionate Software Developer, born and brought up in
                India. I am a Full Stack Developer with JavaScript, React.js,
                Redux, Express.js, Node.js as my tech stack.
                <br />
                Passionate about deveoping innovative web applications and
                utilizing technology to improve user experience.
                <br />
                In 2023, I successfully completed my post graduation MCA with
                honours in 'Computer Application' and In 2021, I have
                successfully completed my graduation in BCA.
                <br />I love learning about new technologies, what problems are
                they solving and How can I use them to build better and scalable
                products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1VfJbjpvbIDaQDjZsYmu1TSm3coQxFpq8/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/im-saumya-gupta/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/saumya-gupta25/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
