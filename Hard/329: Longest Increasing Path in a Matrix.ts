/**
 * Link: https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 */
function longestIncreasingPath(matrix: number[][]): number {
    // Dimensions
    const [m, n] = [matrix.length, matrix[0].length];
    
    // Initialize empty cost matrix
    const dp = Array(m).fill(0).map(
        row => Array(n).fill(0)
    );
    
    // Helper for checking if indices are in range
    const isValidRange = (i, j, pi, pj) => (
        i >= 0
        && i < m
        && j >= 0
        && j < n
        && matrix[pi][pj] > matrix[i][j]
    );
    
    // Main solver
    const findLongestDist = (i, j) => {
        
        // Base case: visited
        if (dp[i][j] !== 0) {
            return dp[i][j];
        }
        
        const dir1 = isValidRange(i - 1,     j, i, j) ? findLongestDist(i - 1,     j) : 0; // T
        const dir2 = isValidRange(i + 1,     j, i, j) ? findLongestDist(i + 1,     j) : 0; // B
        const dir3 = isValidRange(    i, j - 1, i, j) ? findLongestDist(    i, j - 1) : 0; // L
        const dir4 = isValidRange(    i, j + 1, i, j) ? findLongestDist(    i, j + 1) : 0; // R

        dp[i][j] = 1 + Math.max(dir1, dir2, dir3, dir4);
        return dp[i][j];
    }
    
    // Max path length so far
    let maxPath = 1;
    
    // Iterating over original matrix
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            maxPath = Math.max(maxPath, findLongestDist(i, j));
        }
    }
    return maxPath;
};

