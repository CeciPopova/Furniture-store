const router = require('express').Router();

router.post('/register', (req, res) => {
    const {email, password} = req.body;

    res.end();
});

module.exports = router;
