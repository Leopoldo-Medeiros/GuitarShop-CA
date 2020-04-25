var express = require('express'),
router = express.Router(),
cdCtrl = require('./cd-controller');

router.get('/', (req, res) => res.send('Hello World!'));
router.post('/', cdCtrl.createCD);
router.get('/guitars', cdCtrl.getCDs);
router.get('/guitars/:id', cdCtrl.getCD);
router.delete('/delete/:id', cdCtrl.deleteCD);
router.put('/guitars/:id', cdCtrl.updateCD);

module.exports = router;
