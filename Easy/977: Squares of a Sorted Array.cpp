/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/submissions/
 */
function sortedSquares(nums: number[]): number[] {
    const N = nums.length;
    
    // 2-pointer
    let [left, right] = [0, N - 1];
    
    // result
    let dp = Array(N).fill(0);

    /**
     * Since the list is already sorted, then both ends of the list
     * are the largest two values after taking their absolute values.
     * So we compare them with each other and starting filling the
     * `dp` array in a reverse order (here), taking the largest every
     * time. We can do it the other way as well.
     */
    while (left <= right) {
        const isInOrder = (Math.abs(nums[left]) <= Math.abs(nums[right]));
        dp[right - left] = Math.pow(nums[isInOrder ? right-- : left++], 2);
    }

    return dp;
};
