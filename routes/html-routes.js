var path = require("path");


module.exports = function (app) {
    app.get("/", (req, res) => {
        console.log("req: ", req);
        db.Workout.find({})
            .populate("exercises")
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/exercise", (req, res) => {
        console.log("req: ", req);
        db.Workout.find({})
            .populate("exercises")
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
};
