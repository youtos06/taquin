import React from "react";

const ArrayPosibilities = ({ T1, T2, T3, T4 }) => {
  return (
    <div className="resTables">
      <h2>THE RESULT OF EACH ITERATION</h2>
      <table>
        <tbody>
          <tr>
            <td>{T1[0][0]}</td>
            <td>{T1[0][1]}</td>
            <td>{T1[0][2]}</td>
          </tr>
          <tr>
            <td>{T1[1][0]}</td>
            <td>{T1[1][1]}</td>
            <td>{T1[1][2]}</td>
          </tr>
          <tr>
            <td>{T1[2][0]}</td>
            <td>{T1[2][1]}</td>
            <td>{T1[2][2]}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>{T2[0][0]}</td>
            <td>{T2[0][1]}</td>
            <td>{T2[0][2]}</td>
          </tr>
          <tr>
            <td>{T2[1][0]}</td>
            <td>{T2[1][1]}</td>
            <td>{T2[1][2]}</td>
          </tr>
          <tr>
            <td>{T2[2][0]}</td>
            <td>{T2[2][1]}</td>
            <td>{T2[2][2]}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>{T3[0][0]}</td>
            <td>{T3[0][1]}</td>
            <td>{T3[0][2]}</td>
          </tr>
          <tr>
            <td>{T3[1][0]}</td>
            <td>{T3[1][1]}</td>
            <td>{T3[1][2]}</td>
          </tr>
          <tr>
            <td>{T3[2][0]}</td>
            <td>{T3[2][1]}</td>
            <td>{T3[2][2]}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>{T4[0][0]}</td>
            <td>{T4[0][1]}</td>
            <td>{T4[0][2]}</td>
          </tr>
          <tr>
            <td>{T4[1][0]}</td>
            <td>{T4[1][1]}</td>
            <td>{T4[1][2]}</td>
          </tr>
          <tr>
            <td>{T4[2][0]}</td>
            <td>{T4[2][1]}</td>
            <td>{T4[2][2]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ArrayPosibilities;
