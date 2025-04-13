const express = require('express');
const {createTODO} = require('../models/todo');
const router = express.Router();

router.post('/',async (req, res) =>{
    const {title, description} = req.body;
    const todo = await createTODO(title, description);
    res.send(req.body);
});
module.exports = router;
