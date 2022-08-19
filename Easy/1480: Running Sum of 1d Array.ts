function runningSum(nums: number[]): number[] {
    return nums.reduce((a, c) => [...a, (a.at(-1) ?? 0) + c], []);
};
