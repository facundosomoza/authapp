import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const JsonMap = ({ info }) => {
  console.log(info);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      {info.map((infor) => (
        <>
          <tbody>
            <tr>
              <td>{infor.name}</td>

              <td>{infor.username}</td>

              <td>{infor.email}</td>
            </tr>
          </tbody>
        </>
      ))}
    </table>
  );
};

export default JsonMap;

{
  /* <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Elon</td>
            <td>Musk</td>
            <td>elon@musk.com</td>
        </tr>
        <tr>
            <td>Bill</td>
            <td>Gates</td>
            <td>b@g.com</td>
        </tr>
        <tr>
            <td>Richard</td>
            <td>Stallman</td>
            <td>r@s.com</td>
        </tr>
    </tbody>

</table>
 */
}
