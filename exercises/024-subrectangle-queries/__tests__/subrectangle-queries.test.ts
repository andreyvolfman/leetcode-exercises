import { SubrectangleQueries } from '../subrectangle-queries';

describe('SubrectangleQueries', () => {
    test('', () => {
        const instance = new SubrectangleQueries([
            [1, 2, 1],
            [4, 3, 4],
            [3, 2, 1],
            [1, 1, 1],
        ]);

        expect(instance.getValue(0, 2)).toEqual<
            ReturnType<SubrectangleQueries['getValue']>
        >(1);

        instance.updateSubrectangle(0, 0, 3, 2, 5);
        expect(instance.rectangle).toEqual([
            [5, 5, 5],
            [5, 5, 5],
            [5, 5, 5],
            [5, 5, 5],
        ]);
    });
});
