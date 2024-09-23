const router = require('express').Router();

const userManager = require('../managers/userManager');

router.post('/register', async(req, res) => {

    try {

        console.log(req.body);
        const user = await userManager.register(req.body);

        res.json({
            'email': user.email,
            'authToken': 'notoken',
            'userId': user._id,
        });
    } catch (error) {

        console.log(error);
        res.status(400).json({
            message: 'Some error'
        })
    }

});

module.exports = router;
