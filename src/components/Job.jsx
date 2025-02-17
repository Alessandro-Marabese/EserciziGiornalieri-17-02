import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={5}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={4}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3} className="d-flex justify-content-around">
        <Button color="primary" id="addbutton" onClick={() => dispatch({ type: "ADD_TO_FAVOURITES", payload: data.company_name })}>
          Add to Favourites
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
