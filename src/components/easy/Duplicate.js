import React from "react";

const Duplicate = () => {
  const num = (e) => {
    return e.concat(e);
  };
  console.log(num([1, 2, 3, 4]));

  return (
    <div>
      <h3>
        Qsn 4:- Make this work: duplicate([1,2,3,4,5])
        <br /> Open console.log() and show the result{" "}
      </h3>
    </div>
  );
};

export default Duplicate;
