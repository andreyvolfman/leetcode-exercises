import { truncateSentence } from '../truncate-sentence';

describe('truncateSentence', () => {
    test('', () => {
        const s = 'chopper is not a tanuki';
        const k = 5;

        const output = truncateSentence(s, k);

        const expected = 'chopper is not a tanuki';

        expect(output).toBe(expected);
    });

    test('', () => {
        const s = 'What is the solution to this problem';
        const k = 4;

        const output = truncateSentence(s, k);

        const expected = 'What is the solution';

        expect(output).toBe(expected);
    });

    test('', () => {
        const s = 'Hello how are you Contestant';
        const k = 4;

        const output = truncateSentence(s, k);

        const expected = 'Hello how are you';

        expect(output).toBe(expected);
    });
});
