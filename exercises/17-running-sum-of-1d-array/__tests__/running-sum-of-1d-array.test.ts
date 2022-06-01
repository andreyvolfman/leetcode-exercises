import { runningSum } from '../running-sum-of-1d-array';

describe('runningSum', () => {
    test('', () => {
        const input = [1, 2, 3, 4];

        const output = runningSum(input);

        const expected = [1, 3, 6, 10];

        expect(output).toEqual(expected);
    });

    test('', () => {
        const input = [1, 1, 1, 1, 1];

        const output = runningSum(input);

        const expected = [1, 2, 3, 4, 5];

        expect(output).toEqual(expected);
    });

    test('', () => {
        const input = [3, 1, 2, 10, 1];

        const output = runningSum(input);

        const expected = [3, 4, 6, 16, 17];

        expect(output).toEqual(expected);
    });
});
