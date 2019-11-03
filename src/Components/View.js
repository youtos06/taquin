import React, { useState } from "react";
import TableStyle from "../Style/Table.css";
import { heuristique, returnTables } from "./heuristic";
import {
  validateChange,
  verifyChange,
  validate,
  createTable
  //ObjToArray
} from "./Fonctions";

export default function View() {
  const [startObject, setStartObject] = useState({
    r00: "",
    r01: "",
    r02: "",
    //second level
    r10: "",
    r11: "",
    r12: "",
    // third level
    r20: "",
    r21: "",
    r22: ""
  });
  const [T1, setT1] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  const [T2, setT2] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  const [T3, setT3] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  const [T4, setT4] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  const [errors, setErrors] = useState(null);

  const handleChange = ({ currentTarget: input }) => {
    if (verifyChange(input.value)) {
      const tempObject = { ...startObject }; // we don't change directly the state
      tempObject[input.name] = validateChange(input.value); // ES6 feature to change object by key access
      input.value = tempObject[input.name];
      setStartObject(tempObject);
      setErrors(null);
    } else {
      input.value = null;
      setErrors("Please Set a valid 0 < (integer) number < 9");
    }
  };

  const startfun = () => {
    if (!validate(startObject)) {
      const init = createTable(startObject); // turn object to table
      //console.log(init);
      const tables = returnTables(init);
      //console.log(tables);
      setT1(tables[0]);
      setT2(tables[1]);
      setT3(tables[2]);
      setT4(tables[3]);
    }
  };

  return (
    <div className="container" style={{ TableStyle }}>
      <div>
        <h1>Rules of the game</h1>
        <p>
          Fill the inputs from 1 to 8 value ( keeping one empty) and the{" "}
          <strong>IA</strong> will try to list the road to the solution
        </p>
        <div>
          <form>
            <table id="example" className="display" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      id="r00"
                      name="r00"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="r01"
                      name="r01"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="r02"
                      name="r02"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      id="r10"
                      name="r10"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="r11"
                      name="r11"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="r12"
                      name="r12"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      id="r20"
                      name="r20"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="r21"
                      name="r21"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="r22"
                      name="r22"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        {errors && (
          <div className="alert alert-danger" style={{ marginTop: 20 }}>
            {errors}
          </div>
        )}
        <div style={{ padding: "auto", margin: "auto", paddingTop: 30 }}>
          <button
            className="btn btn-danger"
            onClick={e => startfun()}
            disabled={validate(startObject)}
          >
            start the fun
          </button>
        </div>
      </div>
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
    </div>
  );
}
