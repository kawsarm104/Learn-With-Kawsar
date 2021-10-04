import React from "react";
import Card from "react-bootstrap/Card";
const Service = (props) => {
  // console.log(props.course)
  const {  name, image, fees, duration } = props.course;
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <h3>Fees: {fees}</h3>
                  <h3>Duration: {duration}</h3>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Service;
