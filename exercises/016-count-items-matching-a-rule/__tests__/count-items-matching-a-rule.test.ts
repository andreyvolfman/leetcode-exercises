import { countMatches } from '../count-items-matching-a-rule';

describe('countMatches', () => {
    test('', () => {
        const items = [
            ['phone', 'blue', 'pixel'],
            ['computer', 'silver', 'lenovo'],
            ['phone', 'gold', 'iphone'],
        ];
        const ruleKey = 'color';
        const ruleValue = 'silver';

        const output = countMatches(items, ruleKey, ruleValue);

        const expected = 1;

        expect(output).toEqual(expected);
    });

    test('', () => {
        const items = [
            ['phone', 'blue', 'pixel'],
            ['computer', 'silver', 'phone'],
            ['phone', 'gold', 'iphone'],
        ];
        const ruleKey = 'type';
        const ruleValue = 'phone';

        const output = countMatches(items, ruleKey, ruleValue);

        const expected = 2;

        expect(output).toEqual(expected);
    });
});
