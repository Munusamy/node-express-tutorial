const express = require("express");
const app = express();

const peopleRoute = require("./routes/people")
const authRoute = require("./routes/auth")

// static assets
app.use(express.static("./methods-public"));

//parse from data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/people" , peopleRoute);
app.use("/login" , authRoute);



let port = 3000;
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
