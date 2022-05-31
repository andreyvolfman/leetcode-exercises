const { promises, open } = require('fs');
const path = require('path');
const { exec } = require('child_process');

const [, , challengeName] = process.argv;

exec(`git checkout master && git pull && git checkout -b ${challengeName}`);

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
        `${nextIndex}-${challengeName}`
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
