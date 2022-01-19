/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const differntNumberIndex = nums.indexOf(target - nums[i], i + 1);

    if (differntNumberIndex !== -1) {
      return [nums.indexOf(nums[i]), differntNumberIndex];
    }
  }

  throw new Error("No Answer");
}
// @lc code=end
