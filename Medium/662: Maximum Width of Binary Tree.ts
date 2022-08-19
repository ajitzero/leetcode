/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function widthOfBinaryTree(root: TreeNode | null): number {

    if (!root) {
        return 0;
    }

    const q = [{ node: root, dist: 0}];
    let width = 0;

    while (q.length) {
        const first = q.at(0).dist;
        const last = q.at(-1).dist;
        width = Math.max(width, last - first + 1);

        const N = q.length;
        for (let i = 0; i < N; ++i) {
            const curr = q.shift();

            if (curr.node.left) {
                q.push({
                    node: curr.node.left,
                    dist: 2 * curr.dist - 1,
                });
            }
            if (curr.node.right) {
                q.push({
                    node: curr.node.right,
                    dist: 2 * curr.dist,
                });
            }
        }
    }

    return width;
};
