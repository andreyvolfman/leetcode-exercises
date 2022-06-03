import { sum } from '../add-two-integers';

describe('sum', () => {
    test('', () => {
        const num1 = 12;
        const num2 = 5;

        const output = sum(num1, num2);

        const expected = 17;

        expect(output).toBe(expected);
    });

    test('', () => {
        const num1 = -10;
        const num2 = 4;

        const output = sum(num1, num2);

        const expected = -6;

        expect(output).toBe(expected);
    });
});
