var express = require('express');
var router = express.Router();

var LostItem = require('../models/LostItem.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  LostItem.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {


// var small = new Tank({ size: 'small' });
// small.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// })


  var item = new LostItem({
    macAddress: req.body.macAddress,
    phoneNumber: req.body.phoneNumber,
    description: req.body.description,
    bounty: req.body.bounty
  });

  item.save(function (err, post) {
    if (err) return next(err);
    //saved
    res.json(post);
  });

  // LostItem.create({
  //   //req.body


  // }, function (err, post) {
  //   if (err) return next(err);
  //   res.json(post);
  // });
});

// /* GET /todos/id */
// router.get('/:id', function(req, res, next) {
//   LostItem.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

/* PUT /todos/:id */
// router.put('/:id', function(req, res, next) {
//   LostItem.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  // LostItem.find({macAddress: String(req.params.id)}, function(err, result) {
  //   if (err) next(err);
  //   LostItem.findByIdAndRemove(result._id, function (err, post) {
  //     if (err) next(err);
  //     res.json(post);
  //   });
  // })
  LostItem.find({}).where("macAddress").equals(String(req.params.id)).remove().exec(function (err, post) {
    if (err) next(err);
    res.json(post);
  });

});

module.exports = router;
