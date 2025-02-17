import { Button, Col, Container, Row } from "react-bootstrap";
import Job from "./Job";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Favourites = () => {
  const favourite = useSelector((state) => state.favourites.content);
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Favourites</h1>
          <Button onClick={() => navigate("/")}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto"></Col>
        <Col xs={10} className="mx-auto mb-5">
          {favourite.map((ele) => (
            <Job key={ele._id} data={ele} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default Favourites;
