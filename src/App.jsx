import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from 'react';
import './App.css'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import ProgressBar from 'react-bootstrap/ProgressBar';

function App() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  function increaseLike() {
    setLikeCount(likeCount + 1);
  }

  function increaseDislike() {
    setDislikeCount(dislikeCount + 1);
  }

  function getTotalAppraisal() {
    return likeCount + dislikeCount;
  }

  return (
    <>
      <Container fluid className="mt-5">
        <Row className="mb-2">
          <Col className="d-flex justify-content-end col-6">
            <Button variant="secondary" onClick={increaseLike}>
              👍 {likeCount}
            </Button>
          </Col>
          <Col className="d-flex justify-content-start col-6">
            <Button variant="danger" onClick={increaseDislike}>
              👎 {dislikeCount}
            </Button>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col className="col-6">
            <ProgressBar className="appraisal-progress-bar" now={(likeCount / getTotalAppraisal()) * 100} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
