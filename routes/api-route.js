let db = require("../models");

module.exports = function (app) {
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


  // app.post("/api/workouts", (req, res) => {
  //   db.Workout.create({})
  //     .then(dbWorkout => {
  //       res.json(dbWorkout);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

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


  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id,{$push: {exercises:req.body}}, {new:true})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


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