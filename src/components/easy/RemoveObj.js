import React from "react";

const RemoveObj = () => {
  let arr = [
    { name: "mina", gender: "female" },
    { name: "mintu", gender: "male" },
    { name: "nandu", gender: "male" },
    { name: "nina", gender: "female" },
    { name: "alex", gender: "male" },
    { name: "simran", gender: "female" },
  ];

  // let str = arr.filter(function (elm) {
  //   return elm.gender === "male";
  // });

  // console.log(str);

  // or

  let count = 0;

  arr.forEach(function (elm) {
    if (elm.gender !== "male") {
      count++;
    }
  });

  for (let i = 1; i <= count; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].gender !== "male") {
        arr.splice(j, 1);
      }
    }
  }
  console.log(arr);

  return (
    <div>
      <h3>
        Qsn 8:- Loop an array of objects and remove all objects which don't have
        gender's value male
        <br /> Open console.log() and show the result{" "}
      </h3>
    </div>
  );
};

export default RemoveObj;
