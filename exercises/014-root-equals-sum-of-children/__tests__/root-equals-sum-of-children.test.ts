import { checkTree, TreeNode } from '../root-equals-sum-of-children';

describe('checkTree', () => {
    test('', () => {
        const root = new TreeNode(10, new TreeNode(4), new TreeNode(6));

        const output = checkTree(root);

        expect(output).toBeTruthy();
    });

    test('', () => {
        const root = new TreeNode(5, new TreeNode(3), new TreeNode(1));

        const output = checkTree(root);

        expect(output).toBeFalsy();
    });
});
