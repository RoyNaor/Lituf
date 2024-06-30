const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors({
    origin: '*', // Allow all origins
    methods: 'GET,POST', // Allow specific methods
    allowedHeaders: 'Content-Type,Authorization' // Allow specific headers
}));


const db = require('./models')

// Routers
const postRouter = require('./routes/Posts')
app.use("/posts", postRouter);
const CommentRouter = require('./routes/Comments')
app.use("/comments", CommentRouter);


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("server is running on port 3001")
    });
})

