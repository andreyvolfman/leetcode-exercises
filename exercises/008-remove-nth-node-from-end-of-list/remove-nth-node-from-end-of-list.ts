/*
https://leetcode.com/problems/remove-nth-node-from-end-of-list/

Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.



Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]


Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz


Follow up: Could you do this in one pass?
*/

// Definition for singly-linked list.
export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function removeNthFromEnd(
    head: ListNode | null,
    n: number
): ListNode | null {
    let start = new ListNode();
    start.next = head;
    let fastP = start;
    let slowP = start;

    for (let i = 0; i < n; i++) {
        fastP = fastP.next;
    }

    while (fastP.next !== null) {
        fastP = fastP.next;
        slowP = slowP.next;
    }

    slowP.next = slowP.next.next;
    return start.next;
}
