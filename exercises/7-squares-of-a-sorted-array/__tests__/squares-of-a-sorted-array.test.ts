import { sortedSquares } from '../squares-of-a-sorted-array';

describe('sortedSquares', () => {
    test('should sort array of squares', () => {
        const input = [-4, -1, 0, 3, 10];

        const output = sortedSquares(input);

        const expected = [0, 1, 9, 16, 100];

        expect(output).toEqual(expected);
    });

    test('should sort array with one negative element', () => {
        const input = [-1];

        const output = sortedSquares(input);

        const expected = [1];

        expect(output).toEqual(expected);
    });

    test('should sort array with two equal elements', () => {
        const input = [-10000, -9999, -7, -5, 0, 0, 10000];

        const output = sortedSquares(input);

        const expected = [0, 0, 25, 49, 99980001, 100000000, 100000000];

        expect(output).toEqual(expected);
    });

    test('should sort array with two elements', () => {
        const input = [-2, 0];

        const output = sortedSquares(input);

        const expected = [0, 4];

        expect(output).toEqual(expected);
    });
});
