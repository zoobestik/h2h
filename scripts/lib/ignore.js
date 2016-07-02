import path from 'path';
import fs from 'fs';

export const ignorePatternConfig = path.join(process.cwd(), '.gitignore');

let ignorePattern = null;

export const getIgnorePatterns = () => new Promise((resolve, reject) => {
    if (Array.isArray(ignorePattern)) {
        resolve(ignorePattern);
        return;
    }

    fs.readFile(ignorePatternConfig, (err, result) => {
        if (err) {
            reject(err);
            return;
        }

        ignorePattern = result.toString()
            .split('\n')
            .filter(line => (line && line[0] !== '#'));

        resolve(ignorePattern);
    });
});
