import { numberOfSteps } from '../number-of-steps-to-reduce-a-number-to-zero';

describe('numberOfSteps', () => {
    test('', () => {
        const input = 14;

        const output = numberOfSteps(input);

        const expected = 6;

        expect(output).toEqual(expected);
    });

    test('', () => {
        const input = 8;

        const output = numberOfSteps(input);

        const expected = 4;

        expect(output).toEqual(expected);
    });

    test('', () => {
        const input = 123;

        const output = numberOfSteps(input);

        const expected = 12;

        expect(output).toEqual(expected);
    });
});
