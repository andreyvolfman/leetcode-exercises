const { promises } = require('fs');
const path = require('path');

const [, , challengeName] = process.argv;

function getNextIndex() {
    return promises
        .readdir('./exercises')
        .then((files) => files.map((file) => Number(file.split('-')[0])))
        .then((indices) => Math.max(...indices) + 1);
}

async function make() {
    const nextIndex = await getNextIndex();

    const newChallenge = path.resolve(
        './exercises',
        `${String(nextIndex).padStart(3, '0')}-${challengeName}`
    );

    await promises.mkdir(newChallenge);
    await promises.mkdir(path.resolve(newChallenge, '__tests__'));

    await Promise.all([
        promises.open(path.resolve(newChallenge, `${challengeName}.ts`), 'w'),
        promises.open(
            path.resolve(newChallenge, '__tests__', `${challengeName}.test.ts`),
            'w'
        ),
    ]);
}

make();
