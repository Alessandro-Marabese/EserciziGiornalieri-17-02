import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Favourites = () => {
  const favourite = useSelector((state) => state.favourites.content);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Favourites</h1>
          <Button onClick={() => navigate("/")}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {favourite.map((companyName, i) => (
            <Row key={i} className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
              <Col xs={8}>
                <Link to={`/${companyName}`}>{companyName}</Link>
              </Col>
              <Col xs={4} className="d-flex justify-content-around">
                <Button variant="danger" id="removebutton" onClick={() => dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: i })}>
                  Remove from Favourites
                </Button>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default Favourites;
