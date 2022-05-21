/**
 * Link: https://leetcode.com/problems/coin-change/
 */
function coinChange(coins: number[], amount: number): number {
    // Initial state
    const dp = Array(amount + 1).fill(-1);

    // Helper function
    const f = (amt: number) => {

        // Base case
        if (amt === 0) {
            return 0;
        }
        // Overshot/invalid case
        if (amt < 0) {
            return 10001;
        }

        // Set value, if unset
        if (dp[amt] === -1) {
            dp[amt] = 1 + coins.reduce((a, c) => Math.min(a, f(amt - c)), 10001);
        }
        return dp[amt];
    }

    const res = f(amount);
    return res < 10001 ? res : -1;
};

