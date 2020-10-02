import express from 'express';
import data from './data';

const app = express();

app.get("/api/propertys", (req, res) => {
  res.send(data.propertys);
})

app.listen(5000, () => {
  console.log("Server started at http://locoalhost:5000");
})
