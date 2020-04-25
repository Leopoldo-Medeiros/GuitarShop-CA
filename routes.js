var express = require('express'),
router = express.Router(),
userCtrl = require('./user-controller');

router.get('/', (req, res) => res.send('Hello World!'));
router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.delete('/users/:id', userCtrl.deleteUser);
router.put('/users/:id', userCtrl.updateUser);

module.exports = router;
