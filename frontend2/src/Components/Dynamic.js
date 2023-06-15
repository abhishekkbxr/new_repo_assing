import React, { useState } from "react";

function Dynamic() {
  const [data, setData] = useState([{ fname: "", lname: "" }]);

  const handleclick = () => {
    setData([...data, { fname: "", lname: "" }]);
  };
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...data];
    onChangeVal[i][name] = value;
    setData(onChangeVal);
  };
  const handleDelete = (i) => {
    const deleteVal = [...data];
    deleteVal.splice(i, 1);
    setData(deleteVal);
  };
  return (
    <div>
      <button onClick={handleclick}>Add</button>
      {data.map((val, i) => (
        <div>
          <input
            type="text"
            name="fname"
            value={val.fname}
            onChange={(e) => handleChange(e, i)}
          />
          <input
            type="text"
            name="lname"
            value={val.lname}
            onChange={(e) => handleChange(e, i)}
          />
          <button onClick={() => handleDelete(i)}>X</button>
        </div>
      ))}
      {JSON.stringify(data)}
    </div>
  );
}

export default Dynamic;
