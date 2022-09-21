import express from "express";
import td from "./titanic-data.json" assert { type: "json" };
const app = express();
const port = 3000;
app.listen(port);

const findPassengers = (id) => {
  return td.find((passenger) => passenger.PassengerId === parseInt(id));
};

const findSurvivors = (survStatus) => {
  console.log(survStatus);
  console.log(typeof survStatus);
  return td.filter((passenger) => passenger.Survived === parseInt(survStatus));
};

const genLookup = (paramObj) => {
  for (const param of Object.keys(paramObj)) {
    console.log(param);
    console.log(paramObj[param]);
  }
};

app.get("/", (request, response) => {
  response.status(200).json(td);
});

app.get("/passengers", (request, response) => {
  response.status(200).json(td);
});

app.get(
  "/passengers/multi/:charac1/:charac1Spec/:charac2/:charac2Spec",
  (request, response) => {
    const searchParams = {};
    searchParams[request.params.charac1] = request.params.charac1Spec;
    searchParams[request.params.charac2] = request.params.charac2Spec;

    genLookup(searchParams);
    response.send("check log");
  }
);

app.get("/passengers/id/:id", (request, response) => {
  response.status(200).json({
    data: findPassengers(request.params.id),
  });
});

app.get("/passengers/survived/:surv", (request, response) => {
  const survReq = request.params.surv;
  survReq === "1" || survReq === "0"
    ? response.status(200).json({ data: findSurvivors(survReq) })
    : response.status(400).send("Invalid Request. Check URL parameters.");
});
