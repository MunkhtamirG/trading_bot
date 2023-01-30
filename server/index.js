const { Spot } = require("@binance/connector");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;
const client = new Spot(apiKey, apiSecret);

// Get account information

app.get("/", async (req, res) => {
  try {
    const result = await client.account().then((res) => {
      return res.data;
    });
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json(error);
  }
});

// // Place a new order
// client
//   .newOrder("BNBUSDT", "BUY", "LIMIT", {
//     price: "350",
//     quantity: 1,
//     timeInForce: "GTC",
//   })
//   .then((response) => client.logger.log(response.data))
//   .catch((error) => client.logger.error(error));

app.listen(8080, () => {
  console.log("Connected on 8080");
});
