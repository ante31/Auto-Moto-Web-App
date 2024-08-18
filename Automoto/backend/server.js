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
const userRoutes = require('./routes/UserRoutes');
const categoryRoutes = require('./routes/CategoryRoutes');
const articleRoutes = require('./routes/ArticleRoutes');
const roleRoutes = require('./routes/RoleRoutes');
const commentRoutes = require('./routes/CommentRoutes');
const tagRoutes = require('./routes/TagRoutes');
const subcommentRoutes = require('./routes/SubcommentRoutes');
const likeRoutes = require('./routes/LikeRoutes');


const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the routes
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes); 
app.use('/articles', articleRoutes); 
app.use('/roles', roleRoutes);
app.use('/comments', commentRoutes);
app.use('/tags', tagRoutes);
app.use('/subcomments', subcommentRoutes);
app.use('/likes', likeRoutes);

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
