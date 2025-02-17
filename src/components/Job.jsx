import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={4}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={5} className="d-flex justify-content-around">
        <Button color="primary" id="addbutton" onClick={() => dispatch({ type: "ADD_TO_FAVOURITES", payload: data })}>
          Add to Favourites
        </Button>
        <Button variant="danger" id="removebutton" onClick={() => dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: data })}>
          Remove from Favourites
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
