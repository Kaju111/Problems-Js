import React from "react";

const CheckArray = () => {
  function Check(e) {
    return Array.isArray(e);
  }

  console.log(Check(["hello"]));
  console.log(Check(1));

  return (
    <div>
      <h3>
        Qsn 2:- How to check if an object is an array or not <br /> Open
        console.log() and show the result{" "}
      </h3>
    </div>
  );
};

export default CheckArray;
