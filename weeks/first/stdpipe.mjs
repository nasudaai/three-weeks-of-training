import { createWriteStream } from 'node:fs';

process.stdin.pipe(createWriteStream("out/sample.txt"));
