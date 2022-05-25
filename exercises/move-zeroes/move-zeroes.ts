/*
https://leetcode.com/problems/move-zeroes/

Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.



Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]


Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1


Follow up: Could you minimize the total number of operations done?

Do not return anything, modify nums in-place instead.
*/

export function moveZeroes(nums: number[]): void {
    let zeroPointer = 0;
    let nonZeroPointer = 0;

    while (nonZeroPointer < nums.length && zeroPointer < nums.length) {
        if (nums[zeroPointer] === 0 && nums[nonZeroPointer] !== 0) {
            [nums[zeroPointer], nums[nonZeroPointer]] = [
                nums[nonZeroPointer],
                nums[zeroPointer],
            ];
        }
        if (nums[zeroPointer] !== 0) {
            zeroPointer++;
            nonZeroPointer++;
        }
        if (nums[nonZeroPointer] === 0) {
            nonZeroPointer++;
        }
    }
}
