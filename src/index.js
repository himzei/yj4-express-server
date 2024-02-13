import express from "express";
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello nodejs github push addsafjlsdajfl");
});

app.listen(PORT, () => console.log(`💛Sever on: http://localhost:${PORT}`));
