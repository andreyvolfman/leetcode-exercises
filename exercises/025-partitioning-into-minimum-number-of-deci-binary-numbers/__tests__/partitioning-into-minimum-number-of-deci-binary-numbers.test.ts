import { minPartitions } from '../partitioning-into-minimum-number-of-deci-binary-numbers';

describe('minPartitions', () => {
    test('', () => {
        const input = '32';

        const output = minPartitions(input);

        const expected = 3;

        expect(output).toEqual<ReturnType<typeof minPartitions>>(expected);
    });

    test('', () => {
        const input = '82734';

        const output = minPartitions(input);

        const expected = 8;

        expect(output).toEqual<ReturnType<typeof minPartitions>>(expected);
    });

    test('', () => {
        const input = '27346209830709182346';

        const output = minPartitions(input);

        const expected = 9;

        expect(output).toEqual<ReturnType<typeof minPartitions>>(expected);
    });
});
