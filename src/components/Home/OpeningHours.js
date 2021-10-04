import React from "react";
import { Table } from "react-bootstrap";

const OpeningHours = () => {
  return (
    <div className="bg-warning p-2">
      <h2 className="text-uppercase">Opening Hours</h2>
      <Table striped  hover size="sm">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mon-Fri</td>
            <td>8-17:00</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>9-17:30</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>9-17:30</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default OpeningHours;
