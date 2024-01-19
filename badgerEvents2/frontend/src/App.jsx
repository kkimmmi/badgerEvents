import { useState } from "react";

import "./App.css";

import LoginPage from "./components/auth/BadgerLogin";
import ChatsPage from "./components/content/BadgerChat";

import BadgerApp from "./components/structural/BadgerApp"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  /*const [user, setUser] = useState(undefined);

  if (!user) {
    return <LoginPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }*/
  return <BadgerApp/>
}

export default App;