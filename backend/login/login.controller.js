const express = require('express');
const router = express.Router();
const loginService = require('./login.service');

// routes
router.post('/authenticate', authenticate);
router.get('/', getAll);

module.exports = router;

function authenticate(req, res, next) {
    loginService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    loginService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}
