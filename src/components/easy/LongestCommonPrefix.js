import React from "react";

const LongestCommonPrefix = () => {
  const long = (str) => {
    str.sort();

    for (let i = 0; i < str.length; i++) {
      if (str[0][i] !== str[str.length - 1][i]) return str[0].substr(0, i);
    }
    return str[0];
  };

  return (
    <div>
      <h3>
        Write a function to find the longest common prefix string amongst an
        array of strings. If there is no common prefix, return an empty string
        "". Example 1: Input: strs = ["flower","flow","flight"] Output: "fl"
        Example 2: Input: strs = ["dog","racecar","car"] Output: "" Explanation:
        There is no common prefix among the input strings.
      </h3>
    </div>
  );
};

export default LongestCommonPrefix;
