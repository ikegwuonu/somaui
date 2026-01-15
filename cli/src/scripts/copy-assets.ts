import fs from 'fs';
import path from 'path';
import { copyRecursive } from '../utils/copy.js';

const src = path.resolve('src/assets');
const dest = path.resolve('dist/assets');

copyRecursive(src, dest, true);
console.log('✅ Assets copied to dist/assets');
