const db = require('./models/index'); // Import your database configuration
const User = require('./models/UserModel'); // Import your User model
const Role = require('./models/RoleModel'); // Import your Role model
const Category = require('./models/CategoryModel'); // Import your Category model
const Tag = require('./models/TagModel'); // Import your Tag model
const Article = require('./models/ArticleModel'); // Import your Article model
const Comment = require('./models/CommentModel'); // Import your Comment model
const Like = require('./models/LikeModel'); // Import your Like model
const Subcomment = require('./models/SubcommentModel'); // Import your Subcomment model

// Sample data for seeding Roles
const roleData = [
    { name: "Admin" },
    { name: "Editor" },
    { name: "User" },
    { name: "Guest" }
];

// Sample data for seeding Users
const userData = [
    { username: "john_doe", first_name: "John", last_name: "Doe", email: "john.doe@example.com", password: "password123", role: null },
    { username: "jane_smith", first_name: "Jane", last_name: "Smith", email: "jane.smith@example.com", password: "password123", role: null },
    { username: "alice_jones", first_name: "Alice", last_name: "Jones", email: "alice.jones@example.com", password: "password123", role: null },
    { username: "bob_brown", first_name: "Bob", last_name: "Brown", email: "bob.brown@example.com", password: "password123", role: null }
];

// Sample data for seeding Categories
const categoryData = [
    { name: "Technology" },
    { name: "Science" },
    { name: "Health" },
    { name: "Lifestyle" }
];

// Sample data for seeding Tags
const tagData = [
    { name: "JavaScript" },
    { name: "React" },
    { name: "Node.js" },
    { name: "Express" }
];

// Sample data for seeding Articles
const articleData = [
    { title: "The Future of JavaScript", content: "JavaScript continues to evolve rapidly...", category_id: null, user_id: null },
    { title: "Understanding React Hooks", content: "React Hooks provide a new way to manage state...", category_id: null, user_id: null },
    { title: "Node.js and Server-Side JavaScript", content: "Node.js has become a popular choice for server-side applications...", category_id: null, user_id: null },
    { title: "Building REST APIs with Express", content: "Express simplifies the process of building RESTful APIs...", category_id: null, user_id: null }
];

// Sample data for seeding Comments
const commentData = [
    { content: "Great article on JavaScript!", article_id: null, user_id: null },
    { content: "Very informative on React Hooks.", article_id: null, user_id: null },
    { content: "Nice overview of Node.js.", article_id: null, user_id: null },
    { content: "Useful guide on Express.", article_id: null, user_id: null }
];

// Sample data for seeding Likes
const likeData = [
    { feedback: true, user_id: null, comment_id: null },
    { feedback: false, user_id: null, comment_id: null },
    { feedback: true, user_id: null, comment_id: null },
    { feedback: false, user_id: null, comment_id: null }
];

// Sample data for seeding Subcomments
const subcommentData = [
    { content: "I agree, very insightful!", comment_id: null, user_id: null },
    { content: "This helped clarify a lot for me.", comment_id: null, user_id: null },
    { content: "Thanks for the additional information.", comment_id: null, user_id: null },
    { content: "Could you expand on this section?", comment_id: null, user_id: null }
];

// Function to seed Roles
async function seedRoles() {
    try {
        await Role.bulkCreate(roleData);
        console.log("Roles have been seeded successfully.");
    } catch (error) {
        console.error("Error seeding roles:", error);
        throw error;
    }
}

// Function to seed Categories
async function seedCategories() {
    try {
        await Category.bulkCreate(categoryData);
        console.log("Categories have been seeded successfully.");
    } catch (error) {
        console.error("Error seeding categories:", error);
        throw error;
    }
}

// Function to seed Tags
async function seedTags() {
    try {
        await Tag.bulkCreate(tagData);
        console.log("Tags have been seeded successfully.");
    } catch (error) {
        console.error("Error seeding tags:", error);
        throw error;
    }
}

// Function to seed Users
async function seedUsers(roleMap) {
    try {
        const usersWithRoles = userData.map(user => ({
            ...user,
            role: roleMap['Admin'] // For demonstration, all users are assigned 'Admin' role
        }));

        await User.bulkCreate(usersWithRoles);
        console.log("Users have been seeded successfully.");
        return User.findAll(); // Return all users to use their IDs in articles, comments, and likes
    } catch (error) {
        console.error("Error seeding users:", error);
        throw error;
    }
}

// Function to seed Articles
async function seedArticles(userMap, categoryMap) {
    try {
        const articlesWithReferences = articleData.map(article => ({
            ...article,
            user_id: userMap['john_doe'], // Assign user ID to articles
            category_id: categoryMap['Technology'] // Assign category ID to articles
        }));

        await Article.bulkCreate(articlesWithReferences);
        console.log("Articles have been seeded successfully.");
        return Article.findAll(); // Return all articles to use their IDs in comments
    } catch (error) {
        console.error("Error seeding articles:", error);
        throw error;
    }
}

// Function to seed Comments
async function seedComments(userMap, articleMap) {
    try {
        const commentsWithReferences = commentData.map(comment => ({
            ...comment,
            user_id: userMap['john_doe'], // Assign user ID to comments
            article_id: articleMap['The Future of JavaScript'] // Assign article ID to comments
        }));

        await Comment.bulkCreate(commentsWithReferences);
        console.log("Comments have been seeded successfully.");
        return Comment.findAll(); // Return all comments to use their IDs in likes and subcomments
    } catch (error) {
        console.error("Error seeding comments:", error);
        throw error;
    }
}

// Function to seed Likes
async function seedLikes(userMap, commentMap) {
    try {
        const likesWithReferences = likeData.map(like => ({
            ...like,
            user_id: userMap['john_doe'], // Assign user ID to likes
            comment_id: commentMap['Great article on JavaScript!'] // Assign comment ID to likes
        }));

        await Like.bulkCreate(likesWithReferences);
        console.log("Likes have been seeded successfully.");
    } catch (error) {
        console.error("Error seeding likes:", error);
        throw error;
    }
}

// Function to seed Subcomments
async function seedSubcomments(userMap, commentMap) {
    try {
        const subcommentsWithReferences = subcommentData.map(subcomment => ({
            ...subcomment,
            user_id: userMap['john_doe'], // Assign user ID to subcomments
            comment_id: commentMap['Great article on JavaScript!'] // Assign comment ID to subcomments
        }));

        await Subcomment.bulkCreate(subcommentsWithReferences);
        console.log("Subcomments have been seeded successfully.");
    } catch (error) {
        console.error("Error seeding subcomments:", error);
        throw error;
    }
}

// Main function to run seeding
async function main() {
    try {
        console.log("Starting to seed database...");

        // Sync the database, force: true will drop existing tables and create new ones
        await db.sequelize.sync({ force: true });

        // Seed roles
        await seedRoles();

        // Seed categories
        await seedCategories();

        // Seed tags
        await seedTags();

        // Retrieve all roles to associate with users
        const roles = await Role.findAll();
        const roleMap = roles.reduce((map, role) => {
            map[role.name] = role.id;
            return map;
        }, {});

        // Seed users with roles
        const users = await seedUsers(roleMap);
        const userMap = users.reduce((map, user) => {
            map[user.username] = user.id;
            return map;
        }, {});

        // Retrieve all categories to use in articles
        const categories = await Category.findAll();
        const categoryMap = categories.reduce((map, category) => {
            map[category.name] = category.id;
            return map;
        }, {});

        // Seed articles with user and category references
        const articles = await seedArticles(userMap, categoryMap);
        const articleMap = articles.reduce((map, article) => {
            map[article.title] = article.id;
            return map;
        }, {});

        // Seed comments with user and article references
        const comments = await seedComments(userMap, articleMap);
        const commentMap = comments.reduce((map, comment) => {
            map[comment.content] = comment.id;
            return map;
        }, {});

        // Seed likes with user and comment references
        await seedLikes(userMap, commentMap);

        // Seed subcomments with user and comment references
        await seedSubcomments(userMap, commentMap);

        console.log("Seeding completed.");
    } catch (error) {
        console.error("Error during seeding:", error);
    } finally {
        // Close the database connection
        await db.sequelize.close();
    }
}

// Execute the main function
main();
