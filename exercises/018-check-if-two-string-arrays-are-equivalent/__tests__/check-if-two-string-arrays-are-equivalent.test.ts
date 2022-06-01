import { arrayStringsAreEqual } from '../check-if-two-string-arrays-are-equivalent';

describe('arrayStringsAreEqual', () => {
    test('', () => {
        const word1 = ['ab', 'c'];
        const word2 = ['a', 'bc'];

        const output = arrayStringsAreEqual(word1, word2);

        expect(output).toBeTruthy();
    });

    test('', () => {
        const word1 = ['a', 'cb'];
        const word2 = ['ab', 'c'];

        const output = arrayStringsAreEqual(word1, word2);

        expect(output).toBeFalsy();
    });

    test('', () => {
        const word1 = ['abc', 'd', 'defg'];
        const word2 = ['abcddefg'];

        const output = arrayStringsAreEqual(word1, word2);

        expect(output).toBeTruthy();
    });
});
