import { subtractProductAndSum } from '../subtract-the-product-and-sum-of-digits-of-an-integer';

describe('subtractProductAndSum', () => {
    test('', () => {
        const input = 234;

        const output = subtractProductAndSum(input);

        const expected = 15;

        expect(output).toEqual(expected);
    });

    test('', () => {
        const input = 4421;

        const output = subtractProductAndSum(input);

        const expected = 21;

        expect(output).toEqual(expected);
    });
});
