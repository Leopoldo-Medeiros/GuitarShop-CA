var CD = require('./cd-schema');

exports.createCD = function(req, res) { 
    var newCD = new CD(req.body);
    console.log(req.body)
    newCD.save(function (err, cd) { 
        if (err) { 
            res.status(400).json(err);
        }

        res.json(cd); 
});
};

exports.getCDs = function(req, res) {
  CD.find({}, function (err, cds) {
    if (err) {
      res.status(400).json(err); 
    } 
    console.log(cds);
    res.render('index', {
            data: cds,
        }); 
  }); 
};

exports.getCD = function(req, res) {
  CD.findOne({_id: req.params.id}, function (err, cd) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(cd);
  }); 
};

exports.updateCD = function(req, res) {
  CD.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, cd) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(cd);
  }); 
};

exports.deleteCD = function(req, res) {
  CD.findByIdAndRemove(req.params.id, function (err, cd) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(cd);
  }); 
};