import express from "express";
import td from "./titanic-data.json" assert { type: "json" };
const app = express();
const port = 3000;
app.listen(port);

const findPassengers = (id) => {
  return td.find((passenger) => passenger.PassengerId === parseInt(id));
};

const findSurvivors = (survStatus) => {
  console.log(survStatus)
  console.log(typeof survStatus)
  return td.filter((passenger) => passenger.Survived === parseInt(survStatus));
};

app.get("/", (request, response) => {
  response.status(200).json(td);
});

app.get("/passengers", (request, response) => {
  response.status(200).json(td);
});

app.get("/passengers/id/:id", (request, response) => {
  response.status(200).json({
    data: findPassengers(request.params.id),
  });
});

app.get("/passengers/survived/:surv", (request, response) => {
  console.log(request.params.surv)
  console.log(typeof request.params.surv)
  response.status(200).json({ data: findSurvivors(request.params.surv) });
});
