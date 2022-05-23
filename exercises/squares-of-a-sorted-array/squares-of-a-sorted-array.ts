/*
https://leetcode.com/problems/squares-of-a-sorted-array/

Squares of a Sorted Array

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.



Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]


Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.


Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
*/

export function sortedSquares(nums: number[]): number[] {
    const negArray = [];
    const posArray = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            negArray.push(nums[i] ** 2);
        } else {
            posArray.push(nums[i] ** 2);
        }
    }

    if (negArray.length === 0) {
        return posArray;
    }
    if (posArray.length === 0) {
        return negArray.reverse();
    }

    let p1 = negArray.length - 1;
    let p2 = 0;
    while (result.length < nums.length) {
        if (negArray[p1] === posArray[p2]) {
            result.push(negArray[p1]);
            p1--;
            result.push(posArray[p2]);
            p2++;
        } else if (posArray[p2] === undefined || negArray[p1] < posArray[p2]) {
            result.push(negArray[p1]);
            p1--;
        } else {
            result.push(posArray[p2]);
            p2++;
        }
    }

    return result;
}
