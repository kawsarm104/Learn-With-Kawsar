import Button from "@restart/ui/esm/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import './Service.css'
const Service = (props) => {
  // console.log(props.course)
  const { name, image, fees, duration } = props.course;
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <Card className="card-component shadow">
        <Card.Img variant="top" src={image} className="img-fluid" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h5>Fees: {fees}</h5>
          <h5>Duration: {duration}</h5>
        </Card.Body>
        <Button variant="" className="btn btn-outline-info text-dark">View Details</Button>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </div>
  );
};

export default Service;
