import React from "react";

const ArrayState = ({ T0 }) => {
  return (
    <>
      <h2>STATE OF ARRAY</h2>
      <table id="tableSolution">
        <tbody>
          <tr>
            <td>{T0[0][0]}</td>
            <td>{T0[0][1]}</td>
            <td>{T0[0][2]}</td>
          </tr>
          <tr>
            <td>{T0[1][0]}</td>
            <td>{T0[1][1]}</td>
            <td>{T0[1][2]}</td>
          </tr>
          <tr>
            <td>{T0[2][0]}</td>
            <td>{T0[2][1]}</td>
            <td>{T0[2][2]}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ArrayState;
