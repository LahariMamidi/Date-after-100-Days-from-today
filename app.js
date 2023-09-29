const express = require("express");
const app = express();

const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  const date = new Date();
  const finDate = addDays(date, 100);
  response.send(
    `${finDate.getDate()}/${finDate.getMonth() + 1}/${finDate.getFullYear()}`
  );
});

module.exports = app;
