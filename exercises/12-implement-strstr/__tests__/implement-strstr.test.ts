import { strStr } from '../implement-strstr';

describe('strStr', () => {
    test('', () => {
        const input = 'hello';
        const str = 'll';

        const output = strStr(input, str);

        const expected = 2;

        expect(output).toEqual(expected);
    });

    test('', () => {
        const input = 'aaaaa';
        const str = 'bba';

        const output = strStr(input, str);

        const expected = -1;

        expect(output).toEqual(expected);
    });
});
