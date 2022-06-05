import { interpret } from '../goal-parser-interpretation';

describe('interpret', () => {
    test('', () => {
        const input = 'G()(al)';

        const output = interpret(input);

        const expected = 'Goal';

        expect(output).toEqual<ReturnType<typeof interpret>>(expected);
    });

    test('', () => {
        const input = 'G()()()()(al)';

        const output = interpret(input);

        const expected = 'Gooooal';

        expect(output).toEqual<ReturnType<typeof interpret>>(expected);
    });

    test('', () => {
        const input = '(al)G(al)()()G';

        const output = interpret(input);

        const expected = 'alGalooG';

        expect(output).toEqual<ReturnType<typeof interpret>>(expected);
    });
});
