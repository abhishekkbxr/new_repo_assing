import React, { useState } from "react";
import "../App.css";

function App() {
  const [inputList, setInputList] = useState([
    {
      MON: [{ start: "", end: "" }],
      TUE: [{ start: "", end: "" }],
      WED: [{ start: "", end: "" }],
      THU: [{ start: "", end: "" }],
      FRI: [{ start: "", end: "" }],
      SAT: [{ start: "", end: "" }],
      SUN: [{ start: "", end: "" }],
    },
  ]);

  const WeekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  // handle input change
  const handleInputChange = (e, index, KeyData) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[0][KeyData][index][name] = value;
    // list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index, KeyData) => {
    // const list = [...];
    inputList[0][KeyData].splice(index, 1);
    const obj = [...inputList];
    setInputList(obj);
  };

  // handle click event of the Add button
  const handleAddClick = (index, KeyData) => {
    // let newlist = inputList[0]["MON"];
    // newlist.push({ start: "", end: "" });
    inputList[0][KeyData].push({ start: "", end: "" });
    // inputList[0]["MON"] = [...newlist];
    const obj = [...inputList];
    // JSON.parse(JSON.stringify(inputList, null, 2));
    setInputList(obj);
  };

  return (
    <div className="App bg-dark" style={{ height: "1000vh" }}>
      <br />
      <br />
      <br />
      {WeekDays.map((KeyData) => {
        return (
          <>
            <div className="text-center">
              <h3 className="text-white mb-5 mt-5">{KeyData}</h3>
            </div>

            {inputList[0][KeyData].map((x, i) => {
              return (
                <div className="row" key={i}>
                  <div className="col-0"></div>
                  <div className="col-6 text-right">
                    <input
                      className="form-control-md mx-2 my-2"
                      type="time"
                      name="start"
                      placeholder="Start"
                      value={x.start}
                      onChange={(e) => handleInputChange(e, i, KeyData)}
                    />
                    <input
                      className="form-control-md "
                      type="time"
                      name="end"
                      placeholder=" End"
                      value={x.end}
                      onChange={(e) => handleInputChange(e, i, KeyData)}
                    />
                  </div>
                  <div className="col-4 text-left">
                    {inputList[0][KeyData].length !== 1 && (
                      <button
                        className="mx-2 my-2 btn-primary btn-sm"
                        onClick={() => handleRemoveClick(i, KeyData)}
                      >
                        Remove
                      </button>
                    )}
                    {inputList[0][KeyData].length - 1 === i && (
                      <button
                        className="mx-2 my-2 btn btn-primary btn-sm  "
                        onClick={() => {
                          handleAddClick(i, KeyData);
                        }}
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
            {/* second loop ends */}
          </>
        );
      })}
      {/* first loop ends */}

      <div style={{ marginTop: 20, color: "black" }}>
        <pre style={{ color: "black", fontSize: "17px", marginLeft: "160px" }}>
          {JSON.stringify(inputList, null, 2)}
        </pre>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
