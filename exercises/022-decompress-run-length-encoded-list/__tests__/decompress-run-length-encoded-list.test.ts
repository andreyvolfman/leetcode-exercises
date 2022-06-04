import { decompressRLElist } from '../decompress-run-length-encoded-list';

describe('decompressRLElist', () => {
    test('', () => {
        const input = [1, 1, 2, 3];

        const output = decompressRLElist(input);

        const expected = [1, 3, 3];

        expect(output).toEqual<ReturnType<typeof decompressRLElist>>(expected);
    });

    test('', () => {
        const input = [1, 2, 3, 4];

        const output = decompressRLElist(input);

        const expected = [2, 4, 4, 4];

        expect(output).toEqual<ReturnType<typeof decompressRLElist>>(expected);
    });
});
