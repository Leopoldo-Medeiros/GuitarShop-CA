var express = require('express'),
router = express.Router(),
cdCtrl = require('./cd-controller');

router.post('/', cdCtrl.createCD);
router.get('/', cdCtrl.getCDs);
router.get('/cd/:id', cdCtrl.getCD);
router.delete('/delete/:id', cdCtrl.deleteCD);
router.put('/cd/:id', cdCtrl.updateCD);

module.exports = router;
