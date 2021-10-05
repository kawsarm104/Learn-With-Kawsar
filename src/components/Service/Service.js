import Button from "@restart/ui/esm/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import "./Service.css";
const Service = (props) => {
  // console.log(props.course)
  const { name, image, fees, duration } = props.course;
  return (
    <div className="col-sm-12 col-md-6 col-lg-3  mt-3 container-fluid " >
      <Card className=" shadow h-100 m-auto ">
        <Card.Img variant="top" src={image} className="img-fluid" />
        <Card.Body className="">
          <Card.Title>{name}</Card.Title>
          <h5>Fees: {fees}</h5>
          <h5>Duration: {duration}</h5>
        </Card.Body>

        <Card.Footer className="d-flex justify-content-end card-footer">
          <Button
            variant=""
            className="btn btn-outline-info text-dark button-style"
          >
            View Details
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Service;
