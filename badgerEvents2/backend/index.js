const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/logIn", async (req, res) => {
  //const { username } = req.body.username;
  //const { secret } = req.body.secret;
  
  const { username, secret } = req.body;
  try {
    const r = await axios.get(
        "https://api.chatengine.io/users/me",
        //{username: username, secret: secret},
        //{headers: {"private-key": "36e0df4b-0edc-44fe-b3fc-0fad45e5cdad"},
        {headers: {"project-id": "374509a7-b480-47c6-952a-27994cc06678", "user-name": username, "user-secret": secret}}

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


app.post("/creatChat", async(req, res) => {

  const {username, title} = req.body
  const normalizedTitle = title.trim()
  //const chatid = "";
  try {
    const r = await axios.put(
      "https://api.chatengine.io/chats/",
      {"title": normalizedTitle},
      {headers: {"project-id": "374509a7-b480-47c6-952a-27994cc06678", "user-name": username, "user-secret": username}}
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
})

app.post("/joinChat", async(req, res) => {

  const {chatId, username, secret} = req.body
  try {
    const r = await axios.post(
      `https://api.chatengine.io/chats/${chatId}/people/`,
      {"username": username},
      {headers: {"project-id": "374509a7-b480-47c6-952a-27994cc06678", "user-name": "woojin", "user-secret": "woojin"}}      
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

})

app.post("/checkChat", async(req, res) => {
  const {username, secret} = req.body
  try {
    const r = await axios.get(
      "https://api.chatengine.io/chats/",
      {headers: {"project-id": "374509a7-b480-47c6-952a-27994cc06678", "user-name": "woojin", "user-secret": "woojin"}}      
    )
    console.log("is this safely done?")
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
})

app.listen(3001);

