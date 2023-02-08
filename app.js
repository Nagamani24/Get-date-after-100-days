const addDays = require("date-fns/addDays");
const express = require("express");

const app = express();

app.get("/", (request, response) => {
    const todayDate = new Date();
    const newDate = addDays(new Date(todayDate.getDate(),todayDate.getMonth(),todayDate.getFullYear()), 100);

    response.send(
      `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
    );

});

module.exports = app;
