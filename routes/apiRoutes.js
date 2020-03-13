const db = require("../models");

module.exports = function(app) {
  // "/api/workouts" GETS all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkouts => {
      res.json(dbWorkouts);
    });
  });

  // "/api/workouts/:id" UPDATES one workout's exercises by id
  // "/exercise?id=:id" ?????

  // "/api/workouts" POSTS one workout

  // "/api/workouts/range" ????? - stats page
};
