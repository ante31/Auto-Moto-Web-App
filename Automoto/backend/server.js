const express = require('express');
const db = require('./models/index');
const User = require('./models/UserModel');
const Role = require('./models/RoleModel');
const Comment = require('./models/CommentModel');
const Article = require('./models/ArticleModel');
const Category = require('./models/CategoryModel');
const Tag = require('./models/TagModel');
const Subcomment = require('./models/SubcommentModel');
const Like = require('./models/LikeModel');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use('/users', userRoutes);

// Sync the database
db.sequelize.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });

// Basic route
app.get('/', async (req, res) => {
    try {
        res.send('Hello World!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
