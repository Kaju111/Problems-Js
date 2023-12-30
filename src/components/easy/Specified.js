import React from "react";

const Specified = () => {
  function occ(str) {
    let occur = {};
    str.split("").forEach(function (elm) {
      if (occur.hasOwnProperty(elm) === false) {
        occur[elm] = 1;
      } else {
        occur[elm]++;
      }
    });
    return occur;
  }
  console.log(occ("HOW ARE YOU"));

  return (
    <div>
      <h3>
        Qsn 6:- Write a JavaScript function to get the number of occurr of each
        letter in Specified string
        <br /> Open console.log() and show the result{" "}
      </h3>
    </div>
  );
};

export default Specified;
