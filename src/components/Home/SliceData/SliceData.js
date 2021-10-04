import React from 'react';
import { Card } from 'react-bootstrap';

const SliceData = (props) => {
    console.log(props.c)
   const { name, image, fees, duration } = props.c;
   return (
     <div className="col-sm-12 col-md-6 col-lg-3">
       <Card className="card-component shadow">
         <Card.Img variant="top" src={image} className="img-fluid" />
         <Card.Body>
           <Card.Title>{name}</Card.Title>
           <h5>Fees: {fees}</h5>
           <h5>Duration: {duration}</h5>
         </Card.Body>
         {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
       </Card>
     </div>
   );
};

export default SliceData;