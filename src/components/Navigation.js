import { Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Container>
      <Nav
        variant="pills"
        className="bg-dark py-4 px-3 fs-4 text-light rounded text-center"
      >
        <Nav.Item className="mx-3">
          <h3>Car Logger</h3>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-decoration-none text-light border border-light rounded py-2 px-4"
            to={"/"}
          >
            List all
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-decoration-none text-light border border-light rounded py-2 px-4"
            to={"/add"}
          >
            Add
          </Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default Navigation;
