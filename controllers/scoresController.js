const scoreDB = require('../models/scoreDB');
const algorithmia = require("algorithmia");

var api_key = process.env.API_KEY; // PLEASE COPY AND PASTE MY API KEY HERE!!
// IF YOU DONT DO THIS THE APP WILL NOT WORK!!!.

var client = algorithmia(api_key);

module.exports = {

  getApi(req, res) {
    console.log(req.body.inputurl)
    console.log("getting api");

// "https://qzprod.files.wordpress.com/2015/09/rtr4n4v3.jpg",



  var input = {
  "image": req.body.inputurl,
  "numResults": 7
};

    //Algorithmia.client("simSjj4D3o74j8nEEeWInGtEiW/1")

          client
           .algo("algo://deeplearning/EmotionRecognitionCNNMBP/1.0.1")
           .pipe(input)
           .then(function(response) {
             console.log(response.get().results[0].emotions[0]);
             var responseData = response.get().results[0].emotions;
             res.json({data: responseData});
            //res.json({ data: {response.get()},
          })

},

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
    }, req.params.id)
    .then(score => {
      // res.redirect('/api/scores');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
   },

   destroy(req, res) {
    scoreDB.destroy(req.params.id)
    .then(() => {
      //res.redirect('/api/scores');
    }).catch(err => {
        console.log(err);
        res.status(400).json({message: '400', err});
      });
    },

   showScoreForm: (req, res) => {
    res.json({
      message: 'Im HTML for new quotes',
    });
   },
};























