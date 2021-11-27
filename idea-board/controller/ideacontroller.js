const express = require('express');
const router = express.Router();
const ideas = require('../model/ideas');
var moment = require('moment');

function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
        res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');
        next();
    } else {
        req.flash('error_messages', "Please Login to continue !");
        res.redirect('/login');
    }
}

// render all ideas
router.get('/', checkAuth, (req, res) => {
    ideas.find({ owned : req.user.email }, (err, data) => {
        if(err) throw err;
        if(data){
            console.log(data);
            console.log(moment(data[0].created).format('YYYY-MM-DD h:mm:ss A'));
        }
        res.render('board', { csrfToken: req.csrfToken(), ideas : data , moment : moment});
    });
});

router.get('/add',checkAuth, (req, res) => {
    res.redirect('/board');
});

// add a idea
router.post('/add', checkAuth, (req, res) => {
    const { title, description } = req.body;
    console.log(title);
    console.log(description);
    ideas({
        owned : req.user.email,
        title : title,
        description : description,
    }).save((err) => {

        res.redirect('/board');
    });
});

module.exports = router;