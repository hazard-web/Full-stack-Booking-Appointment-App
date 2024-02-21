const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const User = require('./models/user');


const sequelize = require('./util/database');
const adminRoutes = require('./routes/admin');
const { JSON } = require('sequelize');


const port = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public', 'js')));



app.use(adminRoutes);


app.get('/user/get-users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ allUsers: users });
    } catch (error) {
        console.log("get user is failing", JSON.stringify(error));
        res.status(500).json({ error: error });
    }
})

app.delete('/user/delete-user/:id', async (req, res) => {

    try {
        const userId = req.params.id;
        await User.destroy({ where: { id: userId } });
        res.sendStatus(200);
    } catch (error) {
        console.log(error)
        res.sendStatus(500).json(err);
    }
})




sequelize
    .sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server Runnung On Port ${port}`);
        })
    })
    .catch(err => console.log(err));

