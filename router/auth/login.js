const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    try {
        
    } catch (error) {
        return (
            console.error(error),
            res.status(500).json({ status: 500, message: 'internal server error' })
        );
    }
});

module.exports = router;