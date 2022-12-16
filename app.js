const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const todayDate = new Date();
  const after100Days = addDays(
    (todayDate.getFullYear(), todayDate.getMonth() - 1, todayDate.getDate()),
    100
  );
  const results = `${after100Days.getDate()}/${
    after100Days.getMonth() + 1
  }/${after100Days.getFullYear()}`;
  response.send(results);
});

app.listen(3000);
console.log(app);
module.exports = app;
