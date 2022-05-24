import { twoSum } from '../two-sum-ii-input-array-is-sorted';

describe('twoSum', () => {
    test('should return first and second elenemts position', () => {
        const input = [2, 7, 11, 15];
        const target = 9;

        const output = twoSum(input, target);

        const expected = [1, 2];

        expect(output).toEqual(expected);
    });

    test('should return first and third elenemts position', () => {
        const input = [2, 3, 4];
        const target = 6;

        const output = twoSum(input, target);

        const expected = [1, 3];

        expect(output).toEqual(expected);
    });

    test('should return first and second elenemts position', () => {
        const input = [-1, 0];
        const target = -1;

        const output = twoSum(input, target);

        const expected = [1, 2];

        expect(output).toEqual(expected);
    });

    test('should return first and second elenemts position', () => {
        const input = [5, 25, 75];
        const target = 100;

        const output = twoSum(input, target);

        const expected = [2, 3];

        expect(output).toEqual(expected);
    });
});
