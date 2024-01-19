import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import BadgerLayout from './BadgerLayout'
import BadgerLogin from '../auth/BadgerLogin'
import BadgerRegister from '../auth/BadgerRegister'
import BadgerChat from '../content/BadgerChat'
import BadgerHome from '../content/BadgerHome'

function BadgerApp() {
    const [user, setUser] = useState(undefined);

  /*if (!user) {
    return <LoginPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }*/
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BadgerLayout user ={user}/>}>
                    <Route index element={<BadgerHome/>}/>
                    <Route path="/login" element={<BadgerLogin onAuth={(user) => setUser(user)}/>}></Route>
                    <Route path="/register" element={<BadgerRegister />}></Route> 
                    <Route path="/chat" element={<BadgerChat user={user}/>}></Route>
    
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default BadgerApp;

