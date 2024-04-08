const express = require('express');
const router = express.Router();
const Repairagent = require('../models/repairAgent');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
router.post('/register', async (req, res) => {
    try {
        const data = req.body;
        const salt = await bcrypt.genSalt(10);
        const cryptedPass = await bcrypt.hash(data.password, salt);
        
        const agent = new Repairagent({
            name: data.name,
            username: data.username,
            email: data.email,
            password: cryptedPass,
            role :data.role
        });

        await agent.save();
        res.status(200).json({ message: 'Agent registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'An error occurred while registering the agent' });
    }
});
router.post('/login', async (req, res) => {
    try {
        const data = req.body;
        const user = await Repairagent.findOne({ email: data.email });

        if (!user) {
            return res.status(404).send('Email or password invalid');
        }

        const validPass = await bcrypt.compare(data.password, user.password);
        if (!validPass) {
            return res.status(401).send('Email or password invalid');
        }

        const payload = {
            _id: user._id,
            email: user.email,
            role: user.role // Récupérer le rôle de l'utilisateur depuis la base de données
        };
        const token = jwt.sign(payload, '15555555');
        res.status(200).send({ mytoken: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while logging in' });
    }
});







module.exports = router;
