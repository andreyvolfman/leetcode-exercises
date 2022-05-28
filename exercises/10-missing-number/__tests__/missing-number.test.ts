import { missingNumber } from '../missing-number';

describe('missingNumber', () => {
    test('', () => {
        const input = [3, 0, 1];

        const output = missingNumber(input);

        const expected = 2;

        expect(output).toEqual(expected);
    });

    test('', () => {
        const input = [0, 1];

        const output = missingNumber(input);

        const expected = 2;

        expect(output).toEqual(expected);
    });

    test('', () => {
        const input = [9, 6, 4, 2, 3, 5, 7, 0, 1];

        const output = missingNumber(input);

        const expected = 8;

        expect(output).toEqual(expected);
    });
});
