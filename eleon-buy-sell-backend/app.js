const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = express();

const port = 5000;

app.get("/rate", async (req, res) => {
  const symbol = req.query.symbol;
  const amount = req.query.amount;
  const convert = req.query.convert;

  try {
    const response = await axios.get(process.env.COINMARKET_API_URL, {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.COINMARKET_API_KEY,
      },
      params: {
        symbol: symbol,
        amount: amount,
        convert: convert,
      },
    });
    res.json(response.data.data[0].quote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/estimate-price", async (req, res) => {
  const symbol = req.query.symbol;
  const amount = 1;
  const convert = req.query.convert;

  try {
    const response = await axios.get(process.env.COINMARKET_API_URL, {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.COINMARKET_API_KEY,
      },
      params: {
        symbol: symbol,
        amount: amount,
        convert: convert,
      },
    });
    res.json(response.data.data[0].quote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
