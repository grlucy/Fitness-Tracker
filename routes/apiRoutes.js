const db = require("../models");

module.exports = function(app) {
  // "/api/workouts" GETS all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkouts => {
        for (const workout of dbWorkouts) {
          workout.setTotalDuration();
        }
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // "/api/workouts/:id" UPDATES one workout's exercises by id
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // "/api/workouts" POSTS one workout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // "/api/workouts/range" ????? - stats page
};
