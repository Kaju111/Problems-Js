import React from "react";

const Reverse = () => {
  let rev = "How are you";

  let reverStr = rev.split(" ").map(function (e) {
    return e.split("").reverse().join("");
  });
  console.log(reverStr.join(" "));

  return (
    <div>
      <h3>
        Qsn 1:- Given a string, reverse each word in the sentence.
        <br /> Open console.log() and show the result{" "}
      </h3>
    </div>
  );
};

export default Reverse;
