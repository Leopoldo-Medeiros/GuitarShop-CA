var Guitar = require('./models/guitar');

exports.createGuitar = function(req, res) { 
    var newguitar = new Guitar(req.body);
    newguitar.save(function (err, guitar) { 
        if (err) { 
            res.status(400).json(err);
        }

        res.json(guitar); 
});
};

exports.getGuitars = function(req, res) {
  Guitar.find({}, function (err, guitars) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(guitars);
  }); 
};

exports.getGuitar = function(req, res) {
  Guitar.findOne({_id: req.params.id}, function (err, guitar) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(guitar);
  }); 
};

exports.updateGuitar = function(req, res) {
  Guitar.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, guitar) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(guitar);
  }); 
};

exports.deleteGuitar = function(req, res) {
  Guitar.findByIdAndRemove(req.params.id, function (err, guitar) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(guitar);
  }); 
};