import React, { useState } from "react";
import TableStyle from "../Style/Table.css";
import { heuristique, returnTables, heuristicOfTables } from "./heuristic";
import {
  validateChange,
  verifyChange,
  validate,
  createTable

  //ObjToArray
} from "./Fonctions";
import {
  //inArrayList,
  findMinIndex,
  //findWhereToPut,
  deleteNullArrays,
  lowerByOne,
  findInObject,
  returnFirstFromObject
} from "./arrayFunctions";
import ArrayPosibilities from "./ArrayPosibilities";
import { toast } from "react-toastify";
import ArrayState from "./ArrayState";

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
  const [arraySer, setArraySer] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);
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
    //console.log(1);

    // build visited object
    let visited = {
      "0": [],
      "1": [], // normally heuristic value of 1 isn't possible cause min is 2 wrong values but we add for algo case
      "2": [],
      "3": [],
      "4": [],
      "5": [],
      "6": [],
      "7": [],
      "8": [],
      "9": []
    };

    let history = {
      // I created this Object to replace the use of history array and array of heuristic values for a better space saving and a better stockage
      "0": [],
      "1": [],
      "2": [],
      "3": [],
      "4": [],
      "5": [],
      "6": [],
      "7": [],
      "8": [],
      "9": []
    };
    if (!validate(startObject)) {
      const init = createTable(startObject); // turn object to table
      funplay(init, history, visited);
    }
  };

  const funplay = (arrayState, history, visited) => {
    //console.log(history, visited);
    let heuristic = heuristique(arrayState); // for less calculation we create this variable
    if (heuristic === 0) {
      return true;
    }
    visited[heuristic].unshift(arrayState); //push into visited with that level
    let arrayPos = returnTables(arrayState);

    setT1(arrayPos[0]);
    setT2(arrayPos[1]);
    setT3(arrayPos[2]);
    setT4(arrayPos[3]); // possible ways from  current state
    arrayPos = deleteNullArrays(arrayPos); // possibilities to be saved in history
    for (let pos = 0; pos < arrayPos.length; pos++) {
      if (findInObject(visited, arrayPos[pos])) {
        let tempHeuristic = heuristique(arrayPos[pos]);
        history[tempHeuristic].unshift(arrayPos);
      }
    }
    //console.log(arrayPos);
    let arrayPosHeuristics = heuristicOfTables(arrayPos);
    visited[heuristic].splice(0, 0, JSON.parse(JSON.stringify(arrayState))); // add as first element of level array for less calculation
    let minIndex = findMinIndex(arrayPosHeuristics); // find min index

    let useOfHistory = false; // if it stayed false no possibilitie will be stocked in memory
    // refil minIndex in case all minIndexes are already visited
    while (minIndex.length !== 0) {
      let index = 0; // for finding value of index => will be used in finding index of min none visited
      let findVisited = false; // in case all arrays in min index where visited

      if (minIndex.length > 0) {
        while (index < minIndex.length) {
          let value = findInObject(visited, arrayPos[minIndex[index]]); // value in visited + 1
          if (value) {
            arrayPos.splice(minIndex[index], 1);
            arrayPosHeuristics.splice(minIndex[index], 1);
            minIndex.splice(index, 1);
            lowerByOne(minIndex); //lower all indexes by one because an element was deleted by the array
            findVisited = true; // value of index had been visited
          } else {
            arrayState = arrayPos.splice(minIndex[index], 1); // value is new state of taquin
            if (arrayState.length !== 3) {
              arrayState = arrayState[0];
            }
            setArraySer(arrayState);
            arrayPosHeuristics.splice(minIndex[index], 1);
            findVisited = false;
            break; // out of while
          }
        }
      }

      if (findVisited) {
        minIndex = findMinIndex(arrayPosHeuristics);
      } else {
        useOfHistory = true; // in this case some possibilities will be stocked in hostory
        break; // the other values will be used in history
      }
    } // in this case there is two possibilities indexes had been found

    if (useOfHistory) {
      for (let index = 0; index < arrayPos.length; index++) {
        if (!findInObject(history, arrayPos[index])) {
          let tempHeus = heuristique(arrayPos[index]);
          history[tempHeus].unshift(arrayPos[index]);
        }
      }
      //console.log(arrayState);
      setTimeout(() => {
        funplay(arrayState, history, visited);
      }, 150);
    } else {
      // the possibilities provided by a previous state i sbtter
      toast.info("Return to history Array for a better iteration");
      let array = returnFirstFromObject(history);
      if (array.length !== 3) {
        array = array[0];
      }
      arrayState = array;

      setArraySer(arrayState);

      setTimeout(() => {
        funplay(arrayState, history, visited);
      }, 150);
    }
    return true;
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
        <ArrayState T0={arraySer}></ArrayState>
      </div>
      <ArrayPosibilities T1={T1} T2={T2} T3={T3} T4={T4}></ArrayPosibilities>
    </div>
  );
}
