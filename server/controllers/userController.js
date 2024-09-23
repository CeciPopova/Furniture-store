const router = require('express').Router();

const userManager = require('../managers/userManager');

router.post('/register', async(req, res) => {

    try {

        console.log(req.body);
        const result = await userManager.register(req.body);

        res.json(result);

    } catch (error) {

        console.log(error);
        res.status(400).json({
            message: 'Some error'
        });
    }
});

router.post('/login',async(req, res) => {
    try {
        const result = await userManager.login(req.body);

        res.json(result);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

module.exports = router;
