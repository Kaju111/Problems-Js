import React from "react";

const Return = () => {
  function obj(arr, n = 1) {
    if (n <= arr.length) {
      for (let i = 0; i < n; i++) {
        console.log(arr[arr.length - 1 - i]);
      }
    } else {
      console.log(n + "nahi etna number");
    }
  }
  obj([1, 2, 3, 4, 5], 4);

  return (
    <div>
      <h3>
        Qsn 9:- Write a JavaScript function to get the first element of an
        array. Passing a parameter 'n' will return the first 'n' element of the
        array
        <br /> Open console.log() and show the result{" "}
      </h3>
    </div>
  );
};

export default Return;
