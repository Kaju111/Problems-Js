import React from "react";

const Roman = () => {
  var romanToInt = function (s) {
    let integer = 0;
    let charPos = 0;
    while (charPos <= s.length) {
      switch (s.charAt(charPos)) {
        case "I":
          if (s.charAt(charPos + 1) === "V") {
            integer += 4;
            charPos++;
          } else if (s.charAt(charPos + 1) === "X") {
            integer += 9;
            charPos++;
          } else integer++;
          break;
        case "V":
          integer += 5;
          break;
        case "X":
          if (s.charAt(charPos + 1) === "L") {
            integer += 40;
            charPos++;
          } else if (s.charAt(charPos + 1) === "C") {
            integer += 90;
            charPos++;
          } else integer += 10;
          break;
        case "L":
          integer += 50;
          break;
        case "C":
          if (s.charAt(charPos + 1) === "D") {
            integer += 400;
            charPos++;
          } else if (s.charAt(charPos + 1) === "M") {
            integer += 900;
            charPos++;
          } else integer += 100;
          break;
        case "D":
          integer += 500;
          break;
        case "M":
          integer += 1000;
          break;
      }
      charPos++;
    }
    return integer;
  };

  return (
    <div>
      <h3>
        Roman numerals are represented by seven different symbols: I, V, X, L,
        C, D and M. Symbol Value I 1 V 5 X 10 L 50 C 100 D 500 M 1000 For
        example, 2 is written as II in Roman numeral, just two ones added
        together. 12 is written as XII, which is simply X + II. The number 27 is
        written as XXVII, which is XX + V + II. Roman numerals are usually
        written largest to smallest from left to right. However, the numeral for
        four is not IIII. Instead, the number four is written as IV. Because the
        one is before the five we subtract it making four. The same principle
        applies to the number nine, which is written as IX. There are six
        instances where subtraction is used: I can be placed before V (5) and X
        (10) to make 4 and 9. X can be placed before L (50) and C (100) to make
        40 and 90. C can be placed before D (500) and M (1000) to make 400 and
        900. Given a roman numeral, convert it to an intege
      </h3>
    </div>
  );
};

export default Roman;
