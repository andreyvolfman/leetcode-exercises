import { reverseWords } from '../reverse-words-in-a-string-iii';

describe('reverseWords', () => {
    test('should reverse words in string', () => {
        const input = "Let's take LeetCode contest";

        const output = reverseWords(input);

        const expected = "s'teL ekat edoCteeL tsetnoc";

        expect(output).toEqual(expected);
    });
});
