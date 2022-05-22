import { rotate } from '../rotate-array';

describe('rotate', () => {
    test('should rotate three items', () => {
        const input = [1, 2, 3, 4, 5, 6, 7];
        const rotations = 3;

        rotate(input, rotations);

        const expected = [5, 6, 7, 1, 2, 3, 4];

        expect(expected).toEqual(input);
    });

    test('should rotate two items', () => {
        const input = [-1, -100, 3, 99];
        const rotations = 2;

        rotate(input, rotations);

        const expected = [3, 99, -1, -100];

        expect(expected).toEqual(input);
    });
});
