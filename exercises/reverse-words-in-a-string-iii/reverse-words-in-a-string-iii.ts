/*
https://leetcode.com/problems/reverse-words-in-a-string-iii/

Reverse Words in a String III

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.



Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"


Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
*/

function map(s: string[], f: (s: string) => string): string[] {
    const result = [];
    for (let i = 0; i < s.length; i++) {
        result.push(f(s[i]));
    }
    return result;
}

function split(s: string): string[] {
    const result = [];
    let word = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result.push(word);
            word = '';
        } else {
            word += s[i];
        }
    }
    result.push(word);
    return result;
}

function reverse(s: string): string {
    let result = '';
    for (let i = s.length - 1; i >= 0; i--) {
        result += s[i];
    }
    return result;
}

function join(s: string[], sep: string): string {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        result += s[i];
        if (i < s.length - 1) {
            result += sep;
        }
    }
    return result;
}

export function reverseWords(s: string): string {
    return join(map(split(s), reverse), ' ');
}
