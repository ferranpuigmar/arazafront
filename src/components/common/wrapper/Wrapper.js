import React from "react";
import { Col, Container, Row } from "react-grid-system";

const Wrapper = ({ children, className }) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className={className}>{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Wrapper;
