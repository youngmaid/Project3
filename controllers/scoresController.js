const scoreDB = require('../models/scoreDB');

module.exports = {

  index(req, res) {
    scoreDB.findAll()
     .then(scores => {
       res.json({
        message: 'ok',
        data: { scores },
       });
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({message: '400', err});
      });
    },

   getOne(req, res) {
    scoreDB.findById(req.params.id)
    .then(score => {
      res.json({
        message: 'ok',
        data: { score },
      });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({message: '400', err});
      });
    },

   create(req, res) {
    scoreDB.save({
      happy: req.body.happy,
      mad: req.body.mad,
      url: req.body.url,
      result: req.body.result,
      user_id: req.body.user_id,
    })
    .then(score => {
      res.json({message: 'ok', data: { score }});
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
  },

   update(req, res) {
    scoreDB.update({
      happy: req.body.happy,
      mad: req.body.mad,
      url: req.body.url,
      result: req.body.result,
      user_id: req.body.user_id,
    }, req.params.id).then(score => {
      res.redirect('/scores');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
   },

   destroy(req, res) {
    scoreDB.destroy(req.params.id)
    .then(() => next())
    .catch(err => next(err));
   },

   showScoreForm: (req, res) => {
    res.json({
      message: 'Im HTML for new quotes',
    });
   },
};























