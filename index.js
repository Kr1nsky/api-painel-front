const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/users.routes');
const userController = require('./controllers/user.controller');
const User = require('./models/user.model');
const port = 3000;

const apiMiddleware = "/api/"

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(apiMiddleware, userRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});