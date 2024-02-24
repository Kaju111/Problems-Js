import React from "react";

const SearchInsertPosition = () => {
  function ins(nums, target) {
    let leftPosition = 0;
    let rightPosiition = nums.length - 1;
    let middle = Math.floor((leftPosition + rightPosiition) / 2);
    let insertedPosition = 0;

    while (leftPosition <= rightPosiition) {
      if (target < nums[middle]) {
        insertedPosition = middle;
        rightPosiition = middle - 1;
      } else if (target > nums[middle]) {
        insertedPosition = middle + 1;

        leftPosition = middle + 1;
      } else if (target === nums[middle]) {
        return middle;
      }
      middle = Math.floor((leftPosition + rightPosiition) / 2);
    }
    if (nums[middle] === target) {
      return middle;
    } else {
      return insertedPosition;
    }
  }

  return (
    <div>
      <h3>
        Given a sorted array of distinct integers and a target value, return the
        index if the target is found. If not, return the index where it would be
        if it were inserted in order. You must write an algorithm with O(log n)
        runtime complexity. Example 1: Input: nums = [1,3,5,6], target = 5
        Output: 2 Example 2: Input: nums = [1,3,5,6], target = 2 Output: 1
        Example 3: Input: nums = [1,3,5,6], target = 7 Output: 4
      </h3>
    </div>
  );
};

export default SearchInsertPosition;
