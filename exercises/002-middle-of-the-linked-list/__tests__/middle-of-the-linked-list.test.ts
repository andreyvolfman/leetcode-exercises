import { middleNode, ListNode } from '../middle-of-the-linked-list';

describe('middleNode', () => {
    test('should find middle of odd linked list', () => {
        const input = new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
        );

        let output = middleNode(input);

        for (const i of [3, 4, 5]) {
            expect(output.val).toEqual(i);
            output = output.next;
        }
    });

    test('should find middle of even linked list', () => {
        const input = new ListNode(
            1,
            new ListNode(
                2,
                new ListNode(
                    3,
                    new ListNode(4, new ListNode(5, new ListNode(6)))
                )
            )
        );

        let output = middleNode(input);

        for (const i of [4, 5, 6]) {
            expect(output.val).toEqual(i);
            output = output.next;
        }
    });
});
