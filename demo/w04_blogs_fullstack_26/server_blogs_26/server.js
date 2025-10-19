import express from 'express';
import cors from 'cors';

const app = express();

import db from './utils/database.js';

app.use(cors());

app.use('/api/blogs_26', async (req, res, next) => {
    const results =  await db.query(`select * from blog_26 `);
    console.log('results', JSON.stringify(results.rows));
    res.send(results.rows);
});

app.use('/', (req, res, next) => [res.send('timd, 211410526')]);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})