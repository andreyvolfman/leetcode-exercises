import { moveZeroes } from '../move-zeroes';

describe('moveZeroes', () => {
    test('should move zeros', () => {
        const input = [0, 1, 0, 3, 12];

        moveZeroes(input);

        const expected = [1, 3, 12, 0, 0];

        expect(expected).toEqual(input);
    });

    test('should move zeros in array where only zero', () => {
        const input = [0];

        moveZeroes(input);

        const expected = [0];

        expect(expected).toEqual(input);
    });

    test('should move zeros in array where no zeros', () => {
        const input = [1];

        moveZeroes(input);

        const expected = [1];

        expect(expected).toEqual(input);
    });

    test('should move zeros in array where no zeros', () => {
        const input = [1, 0];

        moveZeroes(input);

        const expected = [1, 0];

        expect(expected).toEqual(input);
    });
});
