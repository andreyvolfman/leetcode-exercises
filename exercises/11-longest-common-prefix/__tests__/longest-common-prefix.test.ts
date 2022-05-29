import { longestCommonPrefix } from '../longest-common-prefix';

describe('longestCommonPrefix', () => {
    test('', () => {
        const input = ['flower', 'flow', 'flight'];

        const output = longestCommonPrefix(input);

        const expected = 'fl';

        expect(output).toEqual(expected);
    });

    test('', () => {
        const input = ['dog', 'racecar', 'car'];

        const output = longestCommonPrefix(input);

        const expected = '';

        expect(output).toEqual(expected);
    });
});
