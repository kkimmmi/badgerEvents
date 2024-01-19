const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  //const { username } = req.body.username;
  //const { secret } = req.body.secret;
  
  const { username, secret } = req.body;
  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: secret},
        {headers: {"private-key": "36e0df4b-0edc-44fe-b3fc-0fad45e5cdad"}}

    )
    return res.status(r.status).json(r.data)
  } catch (e) {
    if (e.response) {
        // Handle the error if 'e.response' exists
        return res.status(e.response.status).json(e.response.data);
      } else {
        // Handle the error if 'e.response' is undefined
        return res.status(500).json({ error: "Internal Server Error" });
      }
  }
});

app.listen(3001);

