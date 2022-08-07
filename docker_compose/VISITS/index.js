const express = require("express");
const redis = require("redis");

const process = require("process");

const app = express();
const client = redis.createClient({
  socket: {
    host: "redis-server",
    port: 6379,
  },
});
 
async function connectRedis() {
  await client.connect();
  await client.set("visits", 0);
}
 
connectRedis();
 
app.get("/", async (req, res) => {
  const visits = await client.get("visits");
  res.send("number of visits ->>" + visits);
  await client.set("visits", parseInt(visits) + 1);
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});