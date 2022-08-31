import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar className="bg-dark py-4 fs-4">
      <Container>
        <Link to={"/"}>List all</Link>
        <Link to={"/add"}>Add</Link>
        <Link to={"/edit"}>Edit</Link>
        <Link to={"/editMulti"}>Multi-Edit</Link>
      </Container>
    </Navbar>
  );
}

export default Navigation;
