import React, { useState } from "react";
import TableStyle from "../Style/Table.css";
import { validateChange, verifyChange } from "./Fonctions";

export default function View() {
  const [startObject, setStartObject] = useState({
    r00: null,
    r01: null,
    r02: null,
    r10: null,
    r11: null,
    r12: null,
    r20: null,
    r21: null,
    r22: null
  });
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
    // const errorMessage = validateProperty(input.name, input.value, schema);
    // if (errorMessage) {
    //   errors[input.name] = errorMessage;
    //   setErrors(errors);
    // } else delete errors[input.name];
    // const data = { ...allData };
    // data[input.name] = input.value;
    // setData(data);
    // setErrors(errors);
  };

  return (
    <div className="container" style={{ TableStyle }}>
      <div>
        <h1>Rules of the game</h1>
        <p>
          fill the inputs from 1 to 8 value ( keeping one empty) and the IA will
          try to list the road to the solution
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
          <button className="btn btn-primary">start the fun</button>
        </div>
      </div>
    </div>
  );
}
