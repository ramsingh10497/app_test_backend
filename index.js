const express = require("express");
const cors = require("cors");

const app = express();
const port = 7000;

const routeConfig = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

routeConfig(app);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
