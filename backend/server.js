const dotenv = require("dotenv");

const app = require("./app");
const connectDatabase = require("./config/database");

//config
dotenv.config({ path: "backend/config/.env" });

// connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
