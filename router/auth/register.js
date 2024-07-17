const express = require('express');
const { MongoClient } = require('mongodb');
const config = require('config');
const router = express.Router();

router.post('/', async(req, res) => {
    const client = new MongoClient(config.get('env.uri'));
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            return res.status(400).json({ status: 400 , message: 'fill in all the fields' });
        };

        client.connect();
        const a = client.db(config.get('env.db')).collection(config.get('env.usercollection')).findOne({ username });
        if (a == null) {
            return res.status(400).json({ status: 400, message: 'username takenš' })
        };
    } catch (error) {
        return (
            console.error(error),
            res.status(500).json({ status: 500, message: 'internal server error' })
        );
    }
});

module.exports = router;