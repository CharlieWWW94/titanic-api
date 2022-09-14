import express from "express";

const app = express();
const port = 3000;
app.listen(port);

//Data

const todos = [
  {
    id: 0,
    title: "Todo 1",
    desc: "This is my first todo",
    completed: true,
  },
  {
    id: 1,
    title: "Todo 2",
    desc: "This is my second todo",
    completed: true,
  },
  {
    id: 2,
    title: "Todo 3",
    desc: "This is my third todo",
    completed: true,
  },
  {
    id: 3,
    title: "Todo 4",
    desc: "This is my fourth todo",
    completed: true,
  },
  {
    id: 4,
    title: "Todo 5",
    desc: "This is my fifth todo",
    completed: true,
  },
];

app.use((req, res, next) => {
  console.log(Date.now());
  next();
});

app.get("/", (request, response) => {
  response.status(200).json(todos);
});

app.get("/todos", (request, response) => {
  response.status(200).json(todos);
});

// app.get("/todos/:id", (request, response) => {
//     console.log(typeof request.params.id);
//     response
//     .status(200)
//     .json({ data: todos.find((todo) => todo.id === parseInt(request.params.id)) });
// });


app.get("/todos/:id", (request, response) => {
    response
      .status(200)
      .json({ data: todos.find((todo) => todo.id === parseInt(request.params.id)) });
  });