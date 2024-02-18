import React from "react";

const TwoSum = () => {
  // var twoSum = function(nums, target) {
  //     let mp = new Map()

  //     for (let i = 0; i < nums.length; i++) {
  //         let diff = target - nums[i]

  //         if (mp.has(diff)) {
  //             return [i, mp.get(diff)]
  //         }

  //         mp.set(nums[i], i)
  //     }
  // };

  // or

  function numb(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let t = i + 1; t < nums.length; t++) {
        if (nums[i] + nums[t] === target) {
          return [i, t];
        }
      }
    }
  }

  return <div></div>;
};

export default TwoSum;
