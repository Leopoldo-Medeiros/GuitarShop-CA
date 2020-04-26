var disc = require('./cd-schema');

exports.createCD = function(req, res) { 
    var newCD = new disc(req.body);
    console.log(req.body)
    newCD.save(function (err, cd) { 
        if (err) { 
            res.status(400).json(err);
        }

        res.redirect('back');
});
};

exports.getCDs = function(req, res) {
  disc.find({}, function (err, cds) {
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
  disc.findOne({_id: req.params.id}, function (err, cd) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(cd);
  }); 
};

exports.updateCD = function(req, res) {
  disc.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, cd) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(cd);
  }); 
};

exports.deleteCD = function(req, res) {
  disc.findByIdAndRemove(req.params.id, function (err, cd) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(cd);
  }); 
};