const express = require('express');
const router = express.Router();
const Ideas = require('../model/ideas');

router.get('/', async (req, res) => {
  const { page = 1 } = req.query;
  const limit = 5;
  // core data , total , current 
  try {
    const ideas = await Ideas.find().limit(limit).skip((page - 1) * limit).exec();
    const count = await Ideas.countDocuments();
    res.json({
      ideas,
      totalPages : Math.ceil(count / limit),
      currenPage : Number(page),
    });
  } catch (error) {
    res.sendStatus(500).json({'msg' : 'Server Error'});
  }
});

module.exports = router;
