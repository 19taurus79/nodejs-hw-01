import path from 'node:path';
export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');
console.log('PATH_DB:', PATH_DB);
