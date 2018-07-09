const db = require('../db/config');
const fs = require('fs');

const users = fs.readFileSync(__dirname + '/users.sql', { encoding: 'utf8' });
const user2pose = fs.readFileSync(__dirname + '/user2pose.sql', { encoding: 'utf8' });
const poses = fs.readFileSync(__dirname + '/poses.sql', { encoding: 'utf8' });

async function seed() {
    try {
        await db.query(user2pose);
        await db.query(poses);
        await db.query(users);
    } catch (e) {
        console.error(e);
    }
}

seed();
console.log('DONE')
process.exit();