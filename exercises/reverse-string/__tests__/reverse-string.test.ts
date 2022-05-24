import { reverseString } from '../reverse-string';

describe('sortedSquares', () => {
    test('should reverse hello string', () => {
        const input = ['h', 'e', 'l', 'l', 'o'];

        reverseString(input);

        const expected = ['o', 'l', 'l', 'e', 'h'];

        expect(expected).toEqual(input);
    });

    test('should reverse hello string', () => {
        const input = ['H', 'a', 'n', 'n', 'a', 'h'];

        reverseString(input);

        const expected = ['h', 'a', 'n', 'n', 'a', 'H'];

        expect(expected).toEqual(input);
    });
});
