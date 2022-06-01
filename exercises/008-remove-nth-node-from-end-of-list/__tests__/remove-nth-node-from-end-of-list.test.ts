import {
    removeNthFromEnd,
    ListNode,
} from '../remove-nth-node-from-end-of-list';

describe('removeNthFromEnd', () => {
    test('should remove second node from the end', () => {
        const input = new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
        );
        const n = 2;

        let output = removeNthFromEnd(input, n);

        for (const i of [1, 2, 3, 5]) {
            expect(output.val).toEqual(i);
            output = output.next;
        }
    });

    test('should return empty list', () => {
        const input = new ListNode(1);
        const n = 1;

        let output = removeNthFromEnd(input, n);

        expect(output).toBeNull();
    });

    test('should remove element', () => {
        const input = new ListNode(1, new ListNode(2));
        const n = 1;

        let output = removeNthFromEnd(input, n);

        expect(output.val).toEqual(1);
    });
});
