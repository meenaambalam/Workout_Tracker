let db = require("../models");

module.exports = function (app) {

  //Get Route for getting the last Workout information
  app.get("/api/workouts", (req, res) => {
    // console.log("req for api/workouts route: ", req);
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


  //POST Route for creating the "workouts" Collection
  app.post("/api/workouts", (req, res) => {
    // console.log("Workout Create route REQ_BODY:", req.body);

    const workout = new db.Workout(req.body);
    workout.setDate();
    console.log("WorkOut:", workout);

    db.Workout.create(workout)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //Route to add Exercises to the Workout, by finding the document associated with the provided id 
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id,{$push: {exercises:req.body}}, {new:true})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // route to find all workout for the Stats information
  // As the stats code works with 7 days of data, limiting the query to 7 documents, so we don't pull to much data unnecessarily
  app.get("/api/workouts/range", (req, res) => {
    // console.log("req for api/workouts/range route: ", req);
    db.Workout.find({}).limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

};