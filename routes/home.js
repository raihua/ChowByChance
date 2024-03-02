const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('this is home route');// this gets executed when user visit http://localhost:3000/user
});

router.get('/101', (req, res) => {
    res.send('this is home 101 route');// this gets executed when user visit http://localhost:3000/user/101
});

router.get('/102', (req, res) => {
    res.send('this is home 102 route');// this gets executed when user visit http://localhost:3000/user/102
});


module.exports = router;