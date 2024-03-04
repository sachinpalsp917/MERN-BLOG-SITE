import "dotenv/config";
import connectDB from "./db/db.js";
import {app} from "./app.js"


connectDB()
  .then(() => {
    app.listen(process.env.PORT, (req, res) => {
      console.log("Server running on PORT: ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed: ", err);
  });
