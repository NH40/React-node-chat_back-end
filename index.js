const express = require("express");
const cors = require("cors");
const { default: axios } = require('axios')

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username, 
        first_name: username,
      },
      {
        headers: {"private-key": "96cde2d8-0c61-4956-942b-05a1ba377a42"}
      }
    )
    return res.status(response.status).json(response.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(3001);